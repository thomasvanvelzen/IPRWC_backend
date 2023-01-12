import { Injectable } from '@nestjs/common';
import { dataSource } from 'src/connection/typeorm-datasource';
import { Product } from './typings/product.type';
import { uuid } from 'uuidv4';

@Injectable()
export class ProductService {
    constructor() {}

    async getAll() {
        return await dataSource.query('SELECT * FROM product');
    }

    async getOne(id: string) {
        return await dataSource.query(`SELECT * FROM product WHERE id = ${id}`);
    }

    async getMany(productIds: string[]) {
        return await dataSource.query(
            `SELECT * FROM product WHERE id IN ("${productIds.join('","')}")`,
        );
    }

    async create(product: Product): Promise<Product[]> {
        const createProductQuery = `INSERT INTO product (id, name, price, description, image, category_id) VALUES (
                "${uuid()}", 
                "${product.name}", 
                ${product.price}, 
                "${product.description}", 
                "${product.image}",
                "${product.category_id}")`;

        await dataSource.query(createProductQuery);

        return await this.getAll();
    }

    async update(id: string, product: Product) {
        return await dataSource.query(
            `UPDATE product SET name = "${product.name}", price = ${product.price}, description = "${product.description}" 
            WHERE id = ${id}`,
        );
    }

    async delete(id: string) {
        return await dataSource.query(`DELETE FROM product WHERE id = ${id}`);
    }
}
