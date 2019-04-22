import { AutoIncrement, Column, Model, PrimaryKey, Table, Unique, CreatedAt, UpdatedAt, DeletedAt, HasMany, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { Section } from 'src/section/section.entity';


@Table
export class Carousle extends Model<Carousle> {
  @AutoIncrement
  @Unique
  @Column
  index: number;

  @PrimaryKey
  @Unique
  @Column
  id: string;

  @Column
  carousleTitle: string;

  @Column
  description: string;

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