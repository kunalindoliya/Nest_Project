import { AutoIncrement, Column, Model, PrimaryKey, Table } from 'sequelize-typescript';

@Table
export class User extends Model<User> {
  @AutoIncrement
  @Column
  index: number;

  @PrimaryKey
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
}
