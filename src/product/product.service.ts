import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
  ) {}

  async create(createProductDto: CreateProductDto) {
    try {
      console.log('Creando');
      const product = await this.productRepository.save(createProductDto);
      return product;
    } catch (error) {
      console.log(error);
      return error;      
    }
  }

  async findAll() {
    try {
      const products = await this.productRepository.find({ 
        order: {id: "DESC"}, 
        relations: {category: true}
      });
      console.log(products);
      return products;
    } catch (error) {
      return error;
    }
  }

  async findOne(id: number) {
    try {
      const products = await this.productRepository.findOneBy({ id });
      console.log(products);
      return products;
    } catch (error) {
      return error;
    }
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    try {
      const products = await this.productRepository.find({ order: {
        id: "DESC"
    } });
      console.log(products);
      return products;
    } catch (error) {
      return error;
    }
  }

  async remove(id: number) {
    try {
      const products = await this.productRepository.find({ order: {
        id: "DESC"
    } });
      console.log(products);
      return products;
    } catch (error) {
      return error;
    }
  }
}
