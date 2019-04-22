//Model of all the files in the Website
import { AutoIncrement, Column, Model, PrimaryKey, Table, Unique, CreatedAt, UpdatedAt, DeletedAt, HasMany, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { Matrix } from 'src/matrix/matrix.entity';

@Table
export class Files extends Model<Files> {
  @AutoIncrement
  @Unique
  @Column
  index: number;

  @PrimaryKey
  @Unique
  @Column
  id: string;

  @Column
  url: string;

  @Column
  type: string;

  @Column
  size: number;

  @ForeignKey(()=>Matrix)
  matrixId:string

  @BelongsTo(()=>Matrix)
  matrix: Matrix;

  @CreatedAt
  createdAt;

  @UpdatedAt
  updatedAt;

  @DeletedAt
  deletedAt;
}
