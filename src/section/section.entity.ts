import { AutoIncrement, Column, Model, PrimaryKey, Table, Unique, CreatedAt, UpdatedAt, DeletedAt, BelongsTo, ForeignKey, HasMany, HasOne } from 'sequelize-typescript';
import { Page } from 'src/page/page.entity';
import { Carousle } from 'src/carousle/carousle.entity';


@Table
export class Section extends Model<Section> {
  @AutoIncrement
  @Unique
  @Column
  index: number;

  @PrimaryKey
  @Unique
  @Column
  id: string;

  @Column
  sectionTitle: string;

  @ForeignKey(()=>Page)
  @Column
  pageId: string;

  @BelongsTo(()=>Page)
  page:Page;

  @HasMany(()=>Carousle)
  carousle:Carousle[];

  @CreatedAt
  createdAt;

  @UpdatedAt
  updatedAt;

  @DeletedAt
  deletedAt;
}