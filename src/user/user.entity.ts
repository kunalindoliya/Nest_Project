import { AutoIncrement, Column, Model, PrimaryKey, Table, Unique, CreatedAt, UpdatedAt, DeletedAt } from 'sequelize-typescript';

@Table
export class User extends Model<User> {
  @AutoIncrement
  @Unique
  @Column
  index: number;

  @PrimaryKey
  @Unique
  @Column
  id: string;
  @Column
  firstName: string;
  @Column
  lastName: string;
  @Column
  email: string;
  @Column
  password: string;
  @Column
  role: string;
  @CreatedAt
  createdAt;
  @UpdatedAt
  updatedAt;
  @DeletedAt
  deletedAt;
}
