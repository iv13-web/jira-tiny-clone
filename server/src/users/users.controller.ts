import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common'
import { UsersService } from './users.service'
import { RolesService } from '../roles/roles.service'
import { CreateUserDto } from './dto/create-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'

@Controller('users')
export class UsersController {
  constructor(
    private readonly userService: UsersService,
    private readonly rolesService: RolesService
  ) {}

  @Post()
  createUser(@Body() dto: CreateUserDto) {
    return this.userService.createUser(dto)
  }

  @Get()
  getAllUsers() {
    return this.userService.getAllUsers()
  }

  @Get(':id')
  getUserById(@Param('id') id: string) {
    return this.userService.getUserById(+id)
  }

  @Delete(':id')
  deleteUserById(@Param('id') id: string) {
    return this.userService.deleteUserById(+id)
  }
}
