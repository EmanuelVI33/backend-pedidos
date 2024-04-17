import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OrderService } from './order.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @MessagePattern({ cmd: 'createOrder' })
  create(@Body() createOrderDto: CreateOrderDto) {
    return this.orderService.create(createOrderDto);
  }

  @MessagePattern({ cmd: 'findAllOrder' })
  findAll() {
    return this.orderService.findAll();
  }

  @MessagePattern({ cmd: 'findOneOrder' })
  findOne(@Payload() id: number) {
    return this.orderService.findOne(+id);
  }

  @MessagePattern({ cmd: 'updateOrder' })
  update(@Payload() updateOrderDto: UpdateOrderDto) {
    return this.orderService.update(+updateOrderDto.id, updateOrderDto);
  }

  @MessagePattern({ cmd: 'removeOrder' })
  remove(@Payload() id: number) {
    return this.orderService.remove(+id);
  }
}
