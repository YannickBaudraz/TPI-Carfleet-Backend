import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Vehicles } from './vehicles';
import { Invoices } from './invoices';

@Index('fk_Budgets_Vehicles_idx', ['vehiclesIdVehicles'], {})
@Entity('budgets', { schema: 'car_fleet' })
export class Budgets {
  @Column('int', { primary: true, name: 'idBudgets' })
  idBudgets!: number;

  @Column('varchar', { name: 'status', nullable: true, length: 45 })
  status!: string | null;

  @Column('int', { name: 'Vehicles_idVehicles' })
  vehiclesIdVehicles!: number;

  @Column('varchar', { name: 'tagName', nullable: true, length: 45 })
  tagName!: string | null;

  @Column('date', { name: 'startDate', nullable: true })
  startDate!: string | null;

  @Column('date', { name: 'endDate', nullable: true })
  endDate!: string | null;

  @Column('int', { name: 'durationInMonth', nullable: true })
  durationInMonth!: number | null;

  @Column('int', { name: 'kilometers', nullable: true })
  kilometers!: number | null;

  @Column('int', { name: 'ocn', nullable: true })
  ocn!: number | null;

  @Column('int', { name: 'damageInsurance', nullable: true })
  damageInsurance!: number | null;

  @Column('varchar', { name: 'damagesNotCovered', nullable: true, length: 45 })
  damagesNotCovered!: string | null;

  @Column('int', { name: 'leasing', nullable: true })
  leasing!: number | null;

  @Column('int', { name: 'fuel', nullable: true })
  fuel!: number | null;

  @Column('int', { name: 'tires', nullable: true })
  tires!: number | null;

  @Column('int', { name: 'maintenance', nullable: true })
  maintenance!: number | null;

  @Column('int', { name: 'fleetManagement', nullable: true })
  fleetManagement!: number | null;

  @Column('int', { name: 'replacementVehicle', nullable: true })
  replacementVehicle!: number | null;

  @ManyToOne(() => Vehicles, (vehicles) => vehicles.budgets, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
    lazy: true,
  })
  @JoinColumn([
    { name: 'Vehicles_idVehicles', referencedColumnName: 'idVehicles' },
  ])
  vehiclesIdVehicles2!: Promise<Vehicles>;

  @OneToMany(() => Invoices, (invoices) => invoices.budgetsIdBudgets2, {
    lazy: true,
  })
  invoices!: Promise<Invoices[]>;
}
