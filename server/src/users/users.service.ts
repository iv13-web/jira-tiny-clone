import { Injectable } from '@nestjs/common'
import { User } from './users.model'
import { InjectModel } from '@nestjs/sequelize'
import { CreateUserDto } from './dto/create-user.dto'

@Injectable()
export class UsersService {
  constructor(@InjectModel(User) private userModel: typeof User) {}

  createUser(dto: CreateUserDto) {
    return this.userModel.create(dto)
  }

  getAllUsers(): Promise<User[]> {
    return this.userModel.findAll({ include: { all: true } })
  }

  getUserById(id: number): Promise<User> {
    return this.userModel.findOne({
      where: { id },
      include: { all: true }
    })
  }

  getUserByEmail(email: string): Promise<User> {
    return this.userModel.findOne({
      where: { email },
      include: { all: true }
    })
  }

  async deleteUserById(id: number): Promise<void> {
    const user = await this.getUserById(id)
    await user.destroy()
  }
}
