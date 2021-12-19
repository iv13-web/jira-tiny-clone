import { Injectable } from '@nestjs/common'
import { CreateRoleDto } from './dto/create-role.dto'
import { InjectModel } from '@nestjs/sequelize'
import { Role } from './roles.model'

@Injectable()
export class RolesService {
	constructor(@InjectModel(Role) private roleModel: typeof Role) {}

	createRole(dto: CreateRoleDto) {
		return this.roleModel.create(dto)
	}

	async getRoleById(id: number) {
		return await this.roleModel.findOne({ where: { id } })
	}
}
