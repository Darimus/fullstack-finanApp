import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Transactions1669338910902 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table(
                {
                    name: "Transactions",
                    columns: [
                        {
                            name: "id",
                            type: "uuid",
                            isPrimary: true
                        },
                        {
                            name: "debitedAccountId",
                            type: "numeric",
                            isNullable: true
                        },
                        {
                            name: "creditedAccountId",
                            type: "numeric",
                            isNullable: true
                        },
                        {
                            name: "value",
                            type: "varchar"
                        },
                        {
                            name: "created_at",
                            type: "timestamp",
                            default: "now()"
                        },
                    ],
                    foreignKeys: [
                        {
                            name: "FKTransactions",
                            referencedTableName: "Accounts",
                            referencedColumnNames: ["id"],
                            columnNames: ["debitedAccountId", "creditedAccountId"],
                            onDelete: "SET NULL",
                            onUpdate: "SET NULL"
                        }
                    ]
                }
            )
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("Transactions")

    }

}
