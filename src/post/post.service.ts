import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class PostService {
  constructor(private readonly prisma: PrismaService) {}
  async getPosts() {
    try {
      return this.prisma.post.findMany();
    } catch (error) {
      console.log(error);
      return error;
    }
  }
}
