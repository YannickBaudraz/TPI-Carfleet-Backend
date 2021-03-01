import { Column, Entity, OneToMany } from 'typeorm';
import { Drivers } from './drivers';

@Entity('companies', { schema: 'car_fleet' })
export class Companies {
  @Column('int', { primary: true, name: 'idCompanies' })
  idCompanies!: number;

  @Column('varchar', { name: 'Name', nullable: true, length: 45 })
  name!: string | null;

  @Column('varchar', { name: 'Address', nullable: true, length: 45 })
  address!: string | null;

  @Column('varchar', { name: 'Zip', nullable: true, length: 45 })
  zip!: string | null;

  @Column('varchar', { name: 'City', nullable: true, length: 45 })
  city!: string | null;

  @Column('varchar', { name: 'Phone', nullable: true, length: 45 })
  phone!: string | null;

  @Column('varchar', { name: 'Email', nullable: true, length: 256 })
  email!: string | null;

  @Column('varchar', { name: 'WebSiteUrl', nullable: true, length: 256 })
  webSiteUrl!: string | null;

  @Column('varchar', { name: 'Companiescol', nullable: true, length: 45 })
  companiescol!: string | null;

  @OneToMany(() => Drivers, (drivers) => drivers.companiesIdCompanies2, {
    lazy: true,
  })
  drivers!: Promise<Drivers[]>;
}
