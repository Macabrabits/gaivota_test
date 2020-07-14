import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class FarmNvdi extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'date' })
  date: Date;

  @Column({ type: 'decimal', precision: 3, scale: 2, unsigned: true })
  ndvi_221: number;

  @Column({ type: 'decimal', precision: 3, scale: 2, unsigned: true })
  ndvi_231: number;

  @Column({ type: 'decimal', precision: 3, scale: 2, unsigned: true })
  ndvi_271: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
