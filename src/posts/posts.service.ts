import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { PrismaService } from '../prisma/prisma.service'; // Import the PrismaService
import { Post } from '@prisma/client';

@Injectable()
export class PostsService {
  constructor(private readonly prisma: PrismaService) {}

  // Method to create a new post
  async create(createPostDto: CreatePostDto): Promise<Post> {
    return this.prisma.post.create({
      data: createPostDto,
    });
  }

  // Method to retrieve all posts
  async findAll(): Promise<Post[]> {
    return this.prisma.post.findMany({ include: { author: true } });
  }

  // Method to retrieve a single post by its ID
  async findOne(id: number): Promise<Post | null> {
    return this.prisma.post.findUnique({
      where: { id },
      include: { author: true } 
    });
  }

  // Method to update a post's details by its ID
  async update(id: number, updatePostDto: UpdatePostDto): Promise<Post> {
    return this.prisma.post.update({
      where: { id },
      data: updatePostDto,
    });
  }

  // Method to delete a post by its ID
  async remove(id: number): Promise<Post> {
    return this.prisma.post.delete({
      where: { id },
    });
  }
}
