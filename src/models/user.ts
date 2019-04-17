import { Column, Model, Table, PrimaryKey, AutoIncrement } from 'sequelize-typescript';
import { PrimaryGeneratedColumn } from 'typeorm';

@Table
export class User extends Model<User> {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;
  @Column
  firstName: string;

  @Column
  lastName: string;

  @Column
  email: string;
  @Column
  username: string;
  @Column
  password: string;
  @Column
  role: string;
}
