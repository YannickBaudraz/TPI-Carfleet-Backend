import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToOne,
} from 'typeorm';
import { Invoiceitems } from './invoiceitems';
import { Budgets } from './budgets';
import { Creditors } from './creditors';

@Index('fk_Invoices_Budgets1_idx', ['budgetsIdBudgets'], {})
@Index('fk_Invoices_Creditors1_idx', ['creditorsIdCreditors'], {})
@Entity('invoices', { schema: 'car_fleet' })
export class Invoices {
  @Column('int', { primary: true, name: 'idInvoices' })
  idInvoices!: number;

  @Column('varchar', { name: 'Total', nullable: true, length: 45 })
  total!: string | null;

  @Column('varchar', { name: 'Invoicescol', nullable: true, length: 45 })
  invoicescol!: string | null;

  @Column('int', { primary: true, name: 'Budgets_idBudgets' })
  budgetsIdBudgets!: number;

  @Column('int', { primary: true, name: 'Creditors_idCreditors' })
  creditorsIdCreditors!: number;

  @OneToOne(() => Invoiceitems, (invoiceitems) => invoiceitems.invoices, {
    lazy: true,
  })
  invoiceitems!: Promise<Invoiceitems>;

  @ManyToOne(() => Budgets, (budgets) => budgets.invoices, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
    lazy: true,
  })
  @JoinColumn([
    { name: 'Budgets_idBudgets', referencedColumnName: 'idBudgets' },
  ])
  budgetsIdBudgets2!: Promise<Budgets>;

  @ManyToOne(() => Creditors, (creditors) => creditors.invoices, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
    lazy: true,
  })
  @JoinColumn([
    { name: 'Creditors_idCreditors', referencedColumnName: 'idCreditors' },
  ])
  creditorsIdCreditors2!: Promise<Creditors>;
}
