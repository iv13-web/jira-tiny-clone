import {
	BelongsToMany,
	Column,
	DataType,
	Model,
	Table
} from 'sequelize-typescript'
import { Role } from '../roles/roles.model'
import { UserRoles } from '../roles/user-roles.model'

type UserRequiredAttributes = {
	email: string
	password: string
	firstName: string
	lastName: string
}

@Table({ tableName: 'users' })
export class User extends Model<User, UserRequiredAttributes> {
	@Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
	id: number

	@Column({ type: DataType.STRING, unique: true, allowNull: false })
	email: string

	@Column({ type: DataType.STRING, allowNull: false })
	password: string

	@Column({ type: DataType.STRING, allowNull: false })
	firstName: string;

	@Column({ type: DataType.STRING, allowNull: false })
	lastName: string;

	@Column({ type: DataType.STRING, allowNull: true })
	chief?: string;

	@BelongsToMany(() => Role, () => UserRoles)
	roles: Role[]
}
