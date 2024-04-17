import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { Repository } from 'typeorm';
import { CategoryService } from 'src/category/category.service';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
    private categoryService: CategoryService,
  ) {}

  async create(createProductDto: CreateProductDto) {
    try {
      const { categoryId, ...productData } = createProductDto;
      const category = await this.categoryService.findOne(categoryId);

      const product = this.productRepository.create({
        category,
        ...productData
      });
      
      return this.productRepository.save(product);
    } catch (error) {
      return error;      
    }
  }

  async findAll() {
    try {
      const products = await this.productRepository.find({ 
        order: {id: "DESC"}, 
        relations: {category: true}
      });
      return products;
    } catch (error) {
      return error;
    }
  }

  async findOne(id: number) {
    try {
      const products = await this.productRepository.findOneBy({ id });
      return products;
    } catch (error) {
      return error;
    }
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    try {
      const { categoryId, ...productData } = updateProductDto;
      const category = await this.categoryService.findOne(categoryId);
      const product = await this.findOne(id);
      if (!product) {
        throw new NotFoundException('Producto no encontrado');
      }
      this.productRepository.merge(product, { category, ...productData });
      return await this.productRepository.save(product);
    } catch (error) {
      return error;
    }
  }

  async remove(id: number) {
    try {
      const product = await this.findOne(id);

      if (!product) {
        throw new NotFoundException('Category not found');
      }
      
      return await this.productRepository.remove(product);
    } catch (error) {
      return error;
    }
  }
}
