import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class Farm extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unsigned: true })
  farm_id: number;

  @Column({unique: true})
  name: string;

  @Column({ type: 'decimal', precision: 8, scale: 6 })
  latitude: number;

  @Column({ type: 'decimal', precision: 8, scale: 6 })
  longitude: number;

  @Column()
  culture: string;

  @Column()
  variety: string;

  @Column({ unsigned: true })
  total_area: number;

  @Column({ unsigned: true })
  yield_estimation: number;

  @Column({ type: 'decimal', precision: 10, scale: 2, unsigned: true })
  price: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
