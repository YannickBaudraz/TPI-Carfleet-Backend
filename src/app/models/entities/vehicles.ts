import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Budgets } from './budgets';
import { Drivers } from './drivers';

@Index(
  'fk_Vehicles_Drivers1_idx',
  ['driversIdDrivers', 'driversCompaniesIdCompanies'],
  {}
)
@Entity('vehicles', { schema: 'car_fleet' })
export class Vehicles {
  @Column('int', { primary: true, name: 'idVehicles' })
  idVehicles!: number;

  @Column('int', { primary: true, name: 'Drivers_idDrivers' })
  driversIdDrivers!: number;

  @Column('int', { primary: true, name: 'Drivers_Companies_idCompanies' })
  driversCompaniesIdCompanies!: number;

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

  @OneToMany(() => Budgets, (budgets) => budgets.vehiclesIdVehicles2, {
    lazy: true,
  })
  budgets!: Promise<Budgets[]>;

  @ManyToOne(() => Drivers, (drivers) => drivers.vehicles, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
    lazy: true,
  })
  @JoinColumn([
    { name: 'Drivers_idDrivers', referencedColumnName: 'idDrivers' },
    {
      name: 'Drivers_Companies_idCompanies',
      referencedColumnName: 'companiesIdCompanies',
    },
  ])
  drivers!: Promise<Drivers>;
}
