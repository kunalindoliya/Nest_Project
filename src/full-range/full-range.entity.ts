import { AutoIncrement, Column, Model, PrimaryKey, Table, Unique, CreatedAt, UpdatedAt, DeletedAt, HasMany, ForeignKey, BelongsTo, DataType, HasOne } from 'sequelize-typescript';
import { Section } from 'src/section/section.entity';
import { Files } from 'src/files/files.entity';

// We Offer a Full Range of Digital Marketing Services!
@Table
export class FullRange extends Model<FullRange> {
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

  @Column
  subtitle: string;

  @Column(DataType.TEXT)
  description: string;

  /* position signifies the position of file
     position=1 => Left
     position=2 => Right
     position=3 => Centre
  */
  @Column
  position:number; 
  

  @HasOne(()=>Files)
  file: Files

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