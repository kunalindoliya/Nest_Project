import { AutoIncrement, Column, Model, PrimaryKey, Table, Unique, CreatedAt, UpdatedAt, DeletedAt, HasMany } from 'sequelize-typescript';
import { Section } from 'src/section/section.entity';


@Table
export class Page extends Model<Page> {
  @AutoIncrement
  @Unique
  @Column
  index: number;

  @PrimaryKey
  @Unique
  @Column
  id: string;

  @Column
  pageTitle: string;

  @HasMany(()=>Section)
  section:Section[];

  @CreatedAt
  createdAt;

  @UpdatedAt
  updatedAt;
  
  @DeletedAt
  deletedAt;
}