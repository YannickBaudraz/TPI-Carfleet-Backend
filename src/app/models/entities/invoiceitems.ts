import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';
import { Invoices } from './invoices';

@Entity('invoiceitems', { schema: 'car_fleet' })
export class Invoiceitems {
  @Column('varchar', { name: 'Position', nullable: true, length: 45 })
  position!: string | null;

  @Column('int', { name: 'Amount', nullable: true })
  amount!: number | null;

  @Column('float', { name: 'Cost', nullable: true, precision: 12 })
  cost!: number | null;

  @Column('int', { primary: true, name: 'Invoices_idInvoices' })
  invoicesIdInvoices!: number;

  @Column('int', { primary: true, name: 'Invoices_Budgets_idBudgets' })
  invoicesBudgetsIdBudgets!: number;

  @Column('int', { primary: true, name: 'Invoices_Creditors_idCreditors' })
  invoicesCreditorsIdCreditors!: number;

  @OneToOne(() => Invoices, (invoices) => invoices.invoiceitems, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
    lazy: true,
  })
  @JoinColumn([
    { name: 'Invoices_idInvoices', referencedColumnName: 'idInvoices' },
    {
      name: 'Invoices_Budgets_idBudgets',
      referencedColumnName: 'budgetsIdBudgets',
    },
    {
      name: 'Invoices_Creditors_idCreditors',
      referencedColumnName: 'creditorsIdCreditors',
    },
  ])
  invoices!: Promise<Invoices>;
}
