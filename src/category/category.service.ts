import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Category } from './entities/category.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>,
  ) {}

  async create(createCategoryDto: CreateCategoryDto) {
    try {
      const category = await this.categoryRepository.save(createCategoryDto);
      return category;
    } catch (error) {
      return error;      
    }
  }

  async findAll()  {
    try {
      const categories = await this.categoryRepository.find({ order: {
        id: "DESC"
    } });
      return categories;
    } catch (error) {
      return error;
    }
  }

  async findOne(id: number) {
    try {
      const categories = await this.categoryRepository.findOneBy({ id });
      return categories;
    } catch (error) {
      return error;
    }
  }

  async update(id: number, updateCategoryDto: UpdateCategoryDto) {
    try {
      const category = await this.findOne(id);

      if (!category) {
        throw new NotFoundException('Category not found');
      }
      
      this.categoryRepository.merge(category, updateCategoryDto);
      return await this.categoryRepository.save(category);
    } catch (error) {
      return error;
    }
  }

  async remove(id: number) {
    try {
      const category = await this.findOne(id);

      if (!category) {
        throw new NotFoundException('Category not found');
      }
      
      return await this.categoryRepository.remove(category);
    } catch (error) {
      return error;
    }
  }
}
