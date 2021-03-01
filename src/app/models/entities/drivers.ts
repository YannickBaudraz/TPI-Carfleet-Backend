import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Companies } from './companies';
import { Vehicles } from './vehicles';

@Index('fk_Drivers_Companies1_idx', ['companiesIdCompanies'], {})
@Entity('drivers', { schema: 'car_fleet' })
export class Drivers {
  @Column('int', { primary: true, name: 'idDrivers' })
  idDrivers!: number;

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

  @Column('int', { primary: true, name: 'Companies_idCompanies' })
  companiesIdCompanies!: number;

  @ManyToOne(() => Companies, (companies) => companies.drivers, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
    lazy: true,
  })
  @JoinColumn([
    { name: 'Companies_idCompanies', referencedColumnName: 'idCompanies' },
  ])
  companiesIdCompanies2!: Promise<Companies>;

  @OneToMany(() => Vehicles, (vehicles) => vehicles.drivers, { lazy: true })
  vehicles!: Promise<Vehicles[]>;
}
