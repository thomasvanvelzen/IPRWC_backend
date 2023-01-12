import { Injectable } from '@nestjs/common';
import { dataSource } from 'src/connection/typeorm-datasource';
import { User } from 'src/modules/user/typings/user.type';

@Injectable()
export class UserService {
    async findOne(email: string): Promise<User | undefined> {
        const user: User[] = await dataSource.query(
            `SELECT * FROM users WHERE email = "${email}"`,
        );
        return user[0];
    }

    async create(user: User) {
        return await dataSource.query(
            `INSERT INTO users (email, password, role) VALUES ("${user.email}", "${user.password}", "${user.role}")`,
        );
    }

    async update(id: string, user: User) {
        return await dataSource.query(
            `UPDATE users SET email = "${user.email}", password = "${user.password}", role = "${user.role}" 
            WHERE id = ${id}`,
        );
    }

    async delete(id: string) {
        return await dataSource.query(`DELETE FROM users WHERE id = ${id}`);
    }

    async getAll() {
        return await dataSource.query('SELECT * FROM users');
    }

    async getOne(id: string) {
        return await dataSource.query(`SELECT * FROM users WHERE id = ${id}`);
    }
}
