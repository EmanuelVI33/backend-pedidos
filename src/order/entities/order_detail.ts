import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Order } from "./order.entity";
import { Product } from '../../product/entities/product.entity';

@Entity()
export class OrderDetail {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    amount: number;

    @Column('decimal', { precision: 6, scale: 2 })
    unit_price: number;

    @Column('decimal', { precision: 6, scale: 2 })
    sub_total: number;

    @ManyToOne(() => Order, (order) => order.orderDetail)
    order: Order;

    @ManyToOne(() => Product, (product) => product.orderDetail)
    product: Order;
}
