import { Injectable } from '@nestjs/common';
import {UserDto} from "../../dto/user.dto";
import {PrismaService} from "../../prisma.service";

@Injectable()
export class StageService {
    constructor(private readonly prisma: PrismaService) {
    }
    getAll() {

    }

    create(user: UserDto) {
        return this.prisma.user.create({ data: user });
    }

    async update(id: string) {
        const user = await this.prisma.user.findUnique({
            where: {
                id: +id,
            },
        });

        if (!user) return null;

        return this.prisma.user.update({
            where: {
                id: user.id,
            },
            data: {
                login: user.login,
                password: user.password,
            },
        });
    }
}
