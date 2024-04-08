import { Injectable } from '@nestjs/common';
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
      console.log('Creando');
      const category = await this.categoryRepository.save(createCategoryDto);
      return category;
    } catch (error) {
      console.log(error);
      return error;      
    }
  }

  async findAll()  {
    try {
      const categories = await this.categoryRepository.find({ order: {
        id: "DESC"
    } });
      console.log(categories);
      return categories;
    } catch (error) {
      return error;
    }
  }

  async findOne(id: number) {
    try {
      const categories = await this.categoryRepository.findOneBy({ id });
      console.log(categories);
      return categories;
    } catch (error) {
      return error;
    }
  }

  async update(id: number, updateCategoryDto: UpdateCategoryDto) {
    try {
      const categories = await this.categoryRepository.find({ order: {
        id: "DESC"
    } });
      console.log(categories);
      return categories;
    } catch (error) {
      return error;
    }
  }

  async remove(id: number) {
    try {
      const categories = await this.categoryRepository.find({ order: {
        id: "DESC"
    } });
      console.log(categories);
      return categories;
    } catch (error) {
      return error;
    }
  }
}