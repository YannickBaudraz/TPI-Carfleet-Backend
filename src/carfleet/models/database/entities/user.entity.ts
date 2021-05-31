/*
 * Description  :   Entity for users table.
 *
 * Author       :   Yannick.BAUDRAZ@cpnv.ch
 *
 * Project      :   TPICarfleet_Backend - user.entity.ts
 *
 * Created      :   25.05.2021
 *
 * Created with WebStorm.
 */

import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { UserRole, UserStatus } from '../../enums';
import { CarFleetEntity } from './car-fleet.entity';
import { CompanyEntity } from './company.entity';

/**
 * Entity User.
 */
@Index('Email_UNIQUE', ['email'], { unique: true })
@Index('fk_Users_Companies1_idx', ['companyId'])
@Entity('Users', { schema: 'car_fleet' })
export class UserEntity implements CarFleetEntity {
  @PrimaryGeneratedColumn({ type: 'int', name: 'idUsers' })
  id!: number;

  @Column('varchar', { name: 'Firstname', nullable: true, length: 45 })
  firstname!: string;

  @Column('varchar', { name: 'Lastname', nullable: true, length: 45 })
  lastname!: string;

  @Column('varchar', { name: 'Email', unique: true, nullable: false, length: 256 })
  email!: string;

  @Column('enum', {
    name: 'Role',
    nullable: true,
    enum: UserRole,
  })
  role!: UserRole;

  @Column('varchar', { name: 'Language', nullable: true, length: 45 })
  language!: string;

  @Column('enum', {
    name: 'Status',
    nullable: true,
    enum: UserStatus,
  })
  status!: UserStatus;

  @Column('int', { name: 'Companies_idCompanies' })
  companyId!: number;

  @ManyToOne(() => CompanyEntity, (companies) => companies.users, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
    eager: true,
  })
  @JoinColumn([{ name: 'Companies_idCompanies', referencedColumnName: 'id' }])
  company!: CompanyEntity;
}
