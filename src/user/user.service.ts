import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async getUsers() {
    return this.prisma.user.findMany();
  }

  async postUser(body: any) {
    return this.prisma.user.create({
      data: {
        email: body.email,
        name: body.name,
      },
    });
  }
}
