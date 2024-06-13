import { IsNotEmpty, IsString } from "class-validator";

export class CreateProductDto {
    @IsNotEmpty()
    @IsString()
    readonly name: string;

    readonly description?: string;

    readonly salePrice: number;

    readonly purchasePrice?: number;
    
    @IsNotEmpty()
    readonly stock: number;

    @IsNotEmpty()
    categoryId: number;
}
