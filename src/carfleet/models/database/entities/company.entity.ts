/*
 * Description  :   Entity for Companies tables
 *
 * Author       :   Yannick.BAUDRAZ@cpnv.ch
 *
 * Project      :   TPICarfleet_Backend - company.entity.ts
 *
 * Created      :   20.03.2021
 *
 * Created with WebStorm.
 */

import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { DriverEntity } from './driver.entity';

/**
 * Entity companies
 */
@Entity('Companies', { schema: 'car_fleet' })
export class CompanyEntity {
  @PrimaryGeneratedColumn({ type: 'int', name: 'idCompanies' })
  id!: number;

  @Column('varchar', { name: 'Name', nullable: true, length: 45 })
  name!: string | null;

  @Column('varchar', { name: 'Address', nullable: true, length: 45 })
  address!: string | null;

  @Column('varchar', { name: 'Zip', nullable: true, length: 45 })
  zip!: string | null;

  @Column('varchar', { name: 'City', nullable: true, length: 45 })
  city!: string | null;

  @Column('varchar', { name: 'Canton', nullable: true, length: 45 })
  canton!: string | null;

  @Column('varchar', { name: 'Phone', nullable: true, length: 45 })
  phone!: string | null;

  @Column('varchar', { name: 'Email', nullable: true, length: 256 })
  email!: string | null;

  @Column('varchar', { name: 'WebSiteUrl', nullable: true, length: 256 })
  websiteUrl!: string | null;

  @Column('binary', { name: 'Color', nullable: true, length: 3 })
  color!: Buffer | null;

  @Column('varchar', { name: 'Companiescol', nullable: true, length: 45 })
  companiescol!: string | null;

  @OneToMany(() => DriverEntity, (driversEntity) => driversEntity.company, { lazy: true })
  drivers!: Promise<DriverEntity[]>;
}
