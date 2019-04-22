import { AutoIncrement, Column, Model, PrimaryKey, Table, Unique, CreatedAt, UpdatedAt, DeletedAt, BelongsTo, ForeignKey } from 'sequelize-typescript';
import { Page } from 'src/page/page.entity';


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

  @CreatedAt
  createdAt;

  @UpdatedAt
  updatedAt;

  @DeletedAt
  deletedAt;
}