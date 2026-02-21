import { Controller, Get, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';

// @Controller('users') means:
// All routes here will start with /users
@Controller('users')
export class UsersController {
  // Constructor injection
  // NestJS automatically creates UsersService and gives it here
  constructor(private usersService: UsersService) {}

  // @Get() handles GET requests
  // GET /users
  @Get()
  getUsers() {
    // Call service function to get users
    return this.usersService.getAllUsers();
  }

  // @Post() handles POST requests
  // POST /users
  @Post()
  createUser(
    // @Body('name') extracts "name" from request body
    // Example body: { "name": "Surya" }
    @Body('name') name: string,
  ) {
    return this.usersService.addUser(name);
  }
}