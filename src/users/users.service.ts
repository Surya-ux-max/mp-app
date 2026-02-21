import { Injectable } from '@nestjs/common';

// @Injectable() tells NestJS:
// "This class can be injected into other classes (like Controller)"
@Injectable()
export class UsersService {

  // This array acts like a temporary database
  // Data will be lost when server restarts
  private users = [];

  // This function returns all users
  getAllUsers() {
    // Simply return the users array
    return this.users;
  }

  // This function adds a new user
  addUser(name: string) {

    // Create a user object
    const user = {
      // Date.now() gives a unique number based on time
      id: Date.now(),

      // Store the name passed from controller
      name: name,
    };

    // Push (add) the new user into the array
    this.users.push(user);

    // Return the created user as response
    return user;
  }
}