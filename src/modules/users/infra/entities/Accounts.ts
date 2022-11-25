import { Column, Entity, PrimaryColumn } from 'typeorm';
import { v4 as uuidV4 } from 'uuid';

@Entity('Accounts')
class Accounts {

  @PrimaryColumn()
  id?: string;

  @Column()
  balance?: number;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Accounts }