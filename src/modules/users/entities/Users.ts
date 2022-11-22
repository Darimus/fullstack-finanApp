import { v4 as uuidV4 } from 'uuid';
import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';

@Entity('Users')
class Users {
  @PrimaryColumn()
  id?: string;

  @Column()
  accountID?: string;

  @Column()
  user: string;

  @Column()
  password: string;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id || !this.accountID) {
      this.id = uuidV4();
      this.accountID = uuidV4();
    }
  }
}

export { Users }