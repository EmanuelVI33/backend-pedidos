import { Controller, Param, } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller()
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @MessagePattern({ cmd: 'createCategory' })
  create(@Payload() createCategoryDto: CreateCategoryDto) {
    return this.categoryService.create(createCategoryDto);
  }

  @MessagePattern({ cmd: 'findAllCategory' })
  findAll() {
    return this.categoryService.findAll();
  }

  @MessagePattern({ cmd: 'findOneCategory' })
  findOne(@Payload() id: number) {
    return this.categoryService.findOne(+id);
  }

  @MessagePattern({ cmd: 'updateCategory' })
  update(@Payload() updateCategoryDto: UpdateCategoryDto) {
    return this.categoryService.update(updateCategoryDto.id, updateCategoryDto);
  }

  @MessagePattern({ cmd: 'removeCategory' })
  remove(@Payload() id: number) {
    return this.categoryService.remove(+id);
  }
}
