import {
	BelongsToMany,
	Column,
	DataType,
	Model,
	Table
} from 'sequelize-typescript'
import { User } from '../users/users.model'
import { UserRoles } from './user-roles.model'

type RoleRequiredAttributes = {
	value: string
	// permissions: Permission[]
}

@Table({ tableName: 'roles' })
export class Role extends Model<Role, RoleRequiredAttributes> {
	@Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
	id: number

	@Column({ type: DataType.STRING, unique: true, allowNull: false })
	value: string

	// @Column({ type: DataType.STRING, allowNull: true })
	// permissions: Permission[]

	@BelongsToMany(() => User, () => UserRoles)
	users: User[]
}
