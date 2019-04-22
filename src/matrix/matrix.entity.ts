// the row below carousle
import { AutoIncrement, Column, Model, PrimaryKey, Table, Unique, CreatedAt, UpdatedAt, DeletedAt, HasMany, ForeignKey, BelongsTo, DataType } from 'sequelize-typescript';
import { Section } from 'src/section/section.entity';
import { Files } from 'src/files/files.entity';

@Table
export class Matrix extends Model<Matrix> {
  @AutoIncrement
  @Unique
  @Column
  index: number;

  @PrimaryKey
  @Unique
  @Column
  id: string;

  @Column
  elementTitle: string;

  @Column(DataType.TEXT)
  description: string;

  @ForeignKey(() => Section)
  @Column
  sectionId: string;

  @BelongsTo(() => Section)
  section: Section;

  @ForeignKey(()=>Files)
  @Column
  fileId:string

  @BelongsTo(()=>Files)
  file: Files;

  @CreatedAt
  createdAt;

  @UpdatedAt
  updatedAt;

  @DeletedAt
  deletedAt;
}
