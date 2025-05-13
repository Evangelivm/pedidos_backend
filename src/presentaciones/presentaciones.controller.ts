import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  Query,
  UsePipes,
} from '@nestjs/common';
import { PresentacionesService } from './presentaciones.service';
import {
  CreatePresentacionDto,
  CreatePresentacionSchema,
  UpdatePresentacionDto,
  UpdatePresentacionSchema,
} from './dto/presentacion.dto';
import { ZodValidationPipe } from '../common/zod/zod-validation.pipe';
import { PaginationDto, PaginationSchema } from '../common/dto/pagination.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('presentaciones')
@Controller('presentaciones')
export class PresentacionesController {
  constructor(private readonly presentacionesService: PresentacionesService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new presentation' })
  @ApiResponse({
    status: 201,
    description: 'The presentation has been successfully created.',
  })
  @UsePipes(new ZodValidationPipe(CreatePresentacionSchema))
  create(@Body() createPresentacionDto: CreatePresentacionDto) {
    return this.presentacionesService.create(createPresentacionDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all presentations' })
  @ApiResponse({ status: 200, description: 'Return all presentations.' })
  @UsePipes(new ZodValidationPipe(PaginationSchema))
  findAll(@Query() paginationDto: PaginationDto) {
    return this.presentacionesService.findAll(paginationDto);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a presentation by id' })
  @ApiResponse({ status: 200, description: 'Return the presentation.' })
  @ApiResponse({ status: 404, description: 'Presentation not found.' })
  findOne(@Param('id') id: string) {
    return this.presentacionesService.findOne(+id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update a presentation' })
  @ApiResponse({
    status: 200,
    description: 'The presentation has been successfully updated.',
  })
  @ApiResponse({ status: 404, description: 'Presentation not found.' })
  @UsePipes(new ZodValidationPipe(UpdatePresentacionSchema))
  update(
    @Param('id') id: string,
    @Body() updatePresentacionDto: UpdatePresentacionDto,
  ) {
    return this.presentacionesService.update(+id, updatePresentacionDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a presentation' })
  @ApiResponse({
    status: 200,
    description: 'The presentation has been successfully deleted.',
  })
  @ApiResponse({ status: 404, description: 'Presentation not found.' })
  remove(@Param('id') id: string) {
    return this.presentacionesService.remove(+id);
  }
}
