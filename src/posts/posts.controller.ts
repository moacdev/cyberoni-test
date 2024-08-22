import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiBody } from '@nestjs/swagger';

@ApiTags('posts')
@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new post' })
  @ApiBody({ type: CreatePostDto }) // API documentation for the request body
  @ApiResponse({ status: 201, description: 'The post has been successfully created.' }) // Success response
  @ApiResponse({ status: 400, description: 'Invalid input data.' }) // Error response
  create(@Body() createPostDto: CreatePostDto) {
    return this.postsService.create(createPostDto); // Calls the service to create a new post
  }

  @Get()
  @ApiOperation({ summary: 'Retrieve all posts' })
  @ApiResponse({ status: 200, description: 'List of posts.' }) // Success response
  findAll() {
    return this.postsService.findAll(); // Calls the service to get all posts
  }

  @Get(':id')
  @ApiOperation({ summary: 'Retrieve a specific post by ID' })
  @ApiParam({ name: 'id', description: 'The ID of the post to retrieve', type: String }) // Parameter description
  @ApiResponse({ status: 200, description: 'The post has been successfully retrieved.' }) // Success response
  @ApiResponse({ status: 404, description: 'Post not found.' }) // Error response
  findOne(@Param('id') id: string) {
    return this.postsService.findOne(+id); // Calls the service to get a post by its ID
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a specific post by ID' })
  @ApiParam({ name: 'id', description: 'The ID of the post to update', type: String }) // Parameter description
  @ApiBody({ type: UpdatePostDto }) // API documentation for the request body
  @ApiResponse({ status: 200, description: 'The post has been successfully updated.' }) // Success response
  @ApiResponse({ status: 404, description: 'Post not found.' }) // Error response
  update(@Param('id') id: string, @Body() updatePostDto: UpdatePostDto) {
    return this.postsService.update(+id, updatePostDto); // Calls the service to update a post by its ID
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a specific post by ID' })
  @ApiParam({ name: 'id', description: 'The ID of the post to delete', type: String }) // Parameter description
  @ApiResponse({ status: 200, description: 'The post has been successfully deleted.' }) // Success response
  @ApiResponse({ status: 404, description: 'Post not found.' }) // Error response
  remove(@Param('id') id: string) {
    return this.postsService.remove(+id); // Calls the service to delete a post by its ID
  }
}
