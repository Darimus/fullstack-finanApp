import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Accounts1669339590993 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table(
                {
                    name: "Accounts",
                    columns: [
                        {
                            name: "id",
                            type: "uuid",
                            isPrimary: true
                        },
                        {
                            name: "balance",
                            type: "numeric",
                            isNullable: true
                        },
                    ],
                }
            )
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("Accounts")

    }

}
