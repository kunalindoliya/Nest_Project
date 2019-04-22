import { AutoIncrement, Column, Model, PrimaryKey, Table, Unique, CreatedAt, UpdatedAt, DeletedAt, HasMany, ForeignKey, BelongsTo, DataType, HasOne } from 'sequelize-typescript';
import { Section } from 'src/section/section.entity';
import { Files } from 'src/files/files.entity';


@Table
export class Video extends Model<Video> {
  @AutoIncrement
  @Unique
  @Column
  index: number;

  @PrimaryKey
  @Unique
  @Column
  id: string;

  @Column
  title: string;

  @Column(DataType.TEXT)
  description: string;

  @ForeignKey(()=>Files)
  @Column
  fileId: string;

  @BelongsTo(()=>Files)
  file:Files;

  @ForeignKey(()=>Section)
  @Column
  sectionId: string;

  @BelongsTo(()=>Section)
  section:Section;

  @CreatedAt
  createdAt;

  @UpdatedAt
  updatedAt;
  
  @DeletedAt
  deletedAt;
}