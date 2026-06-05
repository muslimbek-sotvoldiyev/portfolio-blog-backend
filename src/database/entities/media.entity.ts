import {
  Column,
  DataType,
  Table,
  Model,
  ForeignKey,
  BelongsTo,
  CreatedAt,
  UpdatedAt,
} from 'sequelize-typescript';
import { User } from './user.entity';

@Table({ tableName: 'media' })
export class Media extends Model {
  @Column({ primaryKey: true, autoIncrement: true })
  id: number;

  @ForeignKey(() => User)
  @Column
  userId: number;

  @Column({ allowNull: false, type: DataType.STRING })
  filename: string;

  @Column({ allowNull: false, type: DataType.STRING })
  originalName: string;

  @Column({ allowNull: false, type: DataType.STRING })
  mimeType: string;

  @Column({ allowNull: false, type: DataType.INTEGER })
  size: number;

  @Column({ allowNull: false, type: DataType.STRING })
  url: string;

  @Column({ type: DataType.STRING, allowNull: true })
  type: string;

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;

  @BelongsTo(() => User)
  user: User;
}
