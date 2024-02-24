import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  BeforeInsert,
  BeforeUpdate,
  OneToMany,
} from "typeorm";
import bcrypt from "bcrypt";
import { Post } from "./posts";

@Entity("users")
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar" })
  username: string;

  @Column({ type: "varchar" })
  email: string;

  @Column({ type: "varchar" })
  password: string;

  @OneToMany(() => Post, (post) => post.user)
  posts: Post[];

  @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  created_at: Date;
  @UpdateDateColumn({
    type: "timestamp",
    default: () => "CURRENT_TIMESTAMP",
    onUpdate: "CURRENT_TIMESTAMP",
  })
  updated_at: Date;

  @BeforeInsert()
  @BeforeUpdate()
  async hashPassword() {
    try {
      if (this.password) {
        const saltRounds = 12;
        const salt = bcrypt.genSaltSync(saltRounds);
        this.password = bcrypt.hashSync(this.password, salt);
      }
    } catch (error) {
      console.error("Error hashing password:", error);
    }
  }
}
