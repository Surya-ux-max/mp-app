import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

// @Module connects controller and service together
@Module({
  // Controllers handle incoming requests
  controllers: [UsersController],

  // Providers are services (business logic)
  providers: [UsersService],
})
export class UsersModule {}