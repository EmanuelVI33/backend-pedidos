import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateProductDto {
    @IsNotEmpty()
    @IsString()
    readonly name: string;

    readonly description?: string;

    @IsNumber()
    readonly salePrice: number;

    readonly purchasePrice?: number;
    
    @IsNumber()
    @IsNotEmpty()
    readonly stock: number;

    @IsNumber()
    @IsNotEmpty()
    categoryId: number;
}
