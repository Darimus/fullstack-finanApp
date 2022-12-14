import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateUsers1669153839575 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table(
                {
                    name: "Users",
                    columns: [
                        {
                            name: "id",
                            type: "uuid",
                            isPrimary: true
                        },
                        {
                            name: "user",
                            type: "varchar",
                            isUnique: true
                        },
                        {
                            name: "password",
                            type: "varchar",
                        },
                        {
                            name: "email",
                            type: "varchar"
                        },
                        {
                            name: "accountID",
                            type: "uuid"
                        },
                        {
                            name: "created_at",
                            type: "timestamp",
                            default: "now()"
                        },
                    ],
                    foreignKeys: [
                        {
                            name: "FKUsers",
                            referencedTableName: "Users",
                            referencedColumnNames: ["id"],
                            columnNames: ["accountID"],
                            onDelete: "SET NULL",
                            onUpdate: "SET NULL"
                        }
                    ]
                }
            )
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("Users")
    }

}
