import { Category } from "src/category/entities/category.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { OrderDetail } from './order_detail';

@Entity()
export class Order {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nit: number;

    @Column('decimal', { precision: 6, scale: 2 })
    total: number;

    @Column({type: 'date'})
    fecha: string;

    @OneToMany(() => OrderDetail, (orderDetail) => orderDetail.order)
    orderDetail: OrderDetail[];
}
