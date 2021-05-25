/*
 * Description  :   Entity for vehicles table.
 *
 * Author       :   Yannick.BAUDRAZ@cpnv.ch
 *
 * Project      :   TPICarfleet_Backend - vehicle.entity.ts
 *
 * Created      :   01.03.2021
 *
 * Updates      :   [update date]
 *                      [update description
 *
 * Created with WebStorm.
 */

import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { CarFleetEntity } from './car-fleet.entity';
import { DriverEntity } from './driver.entity';

/**
 * Entity vehicles.
 */
@Index('fk_Vehicles_Drivers1_idx', ['driverId'])
@Entity('Vehicles', { schema: 'car_fleet' })
export class VehicleEntity implements CarFleetEntity {
  @PrimaryGeneratedColumn({ name: 'idVehicles' })
  id!: number;

  @Column('int', { name: 'Drivers_idDrivers' })
  driverId!: number;

  @Column('varchar', { name: 'licensePlate', nullable: true, length: 45 })
  licensePlate!: string | null;

  @Column('varchar', { name: 'manufacturer', nullable: true, length: 45 })
  manufacturer!: string | null;

  @Column('varchar', { name: 'model', nullable: true, length: 45 })
  model!: string | null;

  @Column('varchar', { name: 'vin', nullable: true, length: 45 })
  vin!: string | null;

  @Column('varchar', { name: 'exteriorColor', nullable: true, length: 45 })
  exteriorColor!: string | null;

  @Column('varchar', { name: 'registration', nullable: true, length: 45 })
  registration!: string | null;

  @Column('varchar', { name: 'type', nullable: true, length: 45 })
  type!: string | null;

  @Column('date', { name: 'introductionl', nullable: true })
  introductionl!: string | null;

  @Column('varchar', { name: 'insurance', nullable: true, length: 45 })
  insurance!: string | null;

  @Column('varchar', { name: 'fuel', nullable: true, length: 45 })
  fuel!: string | null;

  @Column('varchar', { name: 'transmission', nullable: true, length: 45 })
  transmission!: string | null;

  @Column('varchar', { name: 'priority', nullable: true, length: 45 })
  priority!: string | null;

  @Column('varchar', { name: 'diagnosis', nullable: true, length: 45 })
  diagnosis!: string | null;

  @Column('varchar', { name: 'support', nullable: true, length: 45 })
  support!: string | null;

  @Column('varchar', { name: 'notes', nullable: true, length: 45 })
  notes!: string | null;

  @Column('varchar', { name: 'Vehiclescol', nullable: true, length: 256 })
  vehiclescol!: string | null;

  @ManyToOne(() => DriverEntity, (driversEntity) => driversEntity.vehicles, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
    eager: true,
  })
  @JoinColumn([{ name: 'Drivers_idDrivers', referencedColumnName: 'id' }])
  driver!: DriverEntity;
}
