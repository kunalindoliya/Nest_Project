//Model of all the files in the Website
import { AutoIncrement, Column, Model, PrimaryKey, Table, Unique, CreatedAt, UpdatedAt, DeletedAt, HasMany, ForeignKey, BelongsTo, HasOne } from 'sequelize-typescript';
import { Matrix } from 'src/matrix/matrix.entity';
import { Section } from 'src/section/section.entity';
import { FullRange } from 'src/full-range/full-range.entity';
import { Video } from 'src/video/video.entity';

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

  @HasMany(()=>Matrix)
  matrix:Matrix[];

  @HasOne(()=>FullRange)
  fullRange:FullRange;

  @HasOne(()=>Video)
  video: Video;

  @CreatedAt
  createdAt;

  @UpdatedAt
  updatedAt;

  @DeletedAt
  deletedAt;
}
