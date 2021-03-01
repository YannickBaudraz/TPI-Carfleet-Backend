import { Column, Entity, OneToMany } from 'typeorm';
import { Invoices } from './invoices';

@Entity('creditors', { schema: 'car_fleet' })
export class Creditors {
  @Column('int', { primary: true, name: 'idCreditors' })
  idCreditors!: number;

  @Column('varchar', { name: 'Name', nullable: true, length: 45 })
  name!: string | null;

  @OneToMany(() => Invoices, (invoices) => invoices.creditorsIdCreditors2, {
    lazy: true,
  })
  invoices!: Promise<Invoices[]>;
}
