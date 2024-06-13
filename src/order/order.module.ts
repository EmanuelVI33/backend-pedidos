import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { OrderDetail } from './entities/order_detail';
import { ProductModule } from 'src/product/product.module';
import { Order } from './entities/order.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([Order, OrderDetail]),
  ],
  controllers: [OrderController],
  providers: [OrderService],
})
export class OrderModule {}
