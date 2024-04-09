import { Category } from "src/category/entities/category.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Product {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({nullable: true})
    description: string;

    @Column('decimal', { precision: 6, scale: 2 })
    salePrice: number;

    @Column('decimal', { precision: 6, scale: 2, nullable: true})
    purchasePrice: number;

    @Column()
    stock: number;

    @ManyToOne(() => Category, (category) => category.products)
    category: Category;
}
