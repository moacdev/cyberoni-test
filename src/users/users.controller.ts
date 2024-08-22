import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiBody } from '@nestjs/swagger';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new user' }) 
  @ApiBody({ type: CreateUserDto }) // API documentation for the request body
  @ApiResponse({ status: 201, description: 'The user has been successfully created.' }) // Success response
  @ApiResponse({ status: 400, description: 'Invalid input data.' }) // Error response
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto); // Calls the service to create a new user
  }

  @Get()
  @ApiOperation({ summary: 'Retrieve all users' }) 
  @ApiResponse({ status: 200, description: 'List of users.' }) // Success response
  findAll() {
    return this.usersService.findAll(); // Calls the service to get all users
  }

  @Get(':id')
  @ApiOperation({ summary: 'Retrieve a specific user by ID' }) 
  @ApiParam({ name: 'id', description: 'The ID of the user to retrieve', type: String }) // Parameter description
  @ApiResponse({ status: 200, description: 'The user has been successfully retrieved.' }) // Success response
  @ApiResponse({ status: 404, description: 'User not found.' }) // Error response
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id); // Calls the service to get a user by their ID
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a specific user by ID' }) 
  @ApiParam({ name: 'id', description: 'The ID of the user to update', type: String }) // Parameter description
  @ApiBody({ type: UpdateUserDto }) // API documentation for the request body
  @ApiResponse({ status: 200, description: 'The user has been successfully updated.' }) // Success response
  @ApiResponse({ status: 404, description: 'User not found.' }) // Error response
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto); // Calls the service to update a user by their ID
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a specific user by ID' }) 
  @ApiParam({ name: 'id', description: 'The ID of the user to delete', type: String }) // Parameter description
  @ApiResponse({ status: 200, description: 'The user has been successfully deleted.' }) // Success response
  @ApiResponse({ status: 404, description: 'User not found.' }) // Error response
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id); // Calls the service to delete a user by their ID
  }
}
