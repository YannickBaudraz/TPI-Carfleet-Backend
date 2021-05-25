/*
 * Description  :   [ADD DESCRIPTION]
 *
 * Author       :   Yannick.BAUDRAZ@cpnv.ch
 *
 * Project      :   TPICarfleet_Backend - driver.entity.ts
 *
 * Created      :   20.03.2021
 *
 * Updates      :   [update date]
 *                      [update description]
 *
 * Created with WebStorm.
 */

import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { CarFleetEntity } from './car-fleet.entity';
import { CompanyEntity } from './company.entity';
import { VehicleEntity } from './index';

/**
 * Entity drivers.
 */
@Index('fk_Drivers_Companies1_idx', ['companyId'], {})
@Entity('Drivers', { schema: 'car_fleet' })
export class DriverEntity implements CarFleetEntity {
  @PrimaryGeneratedColumn({ type: 'int', name: 'idDrivers' })
  id!: number;

  @Column('int', { name: 'Companies_idCompanies' })
  companyId!: number;

  @Column('varchar', { name: 'Gender', nullable: true, length: 45 })
  gender!: string | null;

  @Column('varchar', { name: 'Firstname', nullable: true, length: 45 })
  firstname!: string | null;

  @Column('varchar', { name: 'Lastname', nullable: true, length: 45 })
  lastname!: string | null;

  @Column('varchar', { name: 'JobTitle', nullable: true, length: 45 })
  jobTitle!: string | null;

  @Column('varchar', { name: 'Email', nullable: true, length: 45 })
  email!: string | null;

  @Column('varchar', { name: 'PhoneNumber', nullable: true, length: 45 })
  phoneNumber!: string | null;

  @ManyToOne(() => CompanyEntity, (CompaniesEntity) => CompaniesEntity.drivers, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
    eager: true,
  })
  @JoinColumn([{ name: 'Companies_idCompanies', referencedColumnName: 'id' }])
  company!: CompanyEntity;

  @OneToMany(() => VehicleEntity, (vehiclesEntity) => vehiclesEntity.driver, { lazy: true })
  vehicles!: Promise<VehicleEntity[]>;
}
