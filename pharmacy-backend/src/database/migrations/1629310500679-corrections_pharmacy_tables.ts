import {MigrationInterface, QueryRunner} from "typeorm";

export class correctionsPharmacyTables1629310500679 implements MigrationInterface {
    name = 'correctionsPharmacyTables1629310500679'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "suppliers" ALTER COLUMN "created_at" SET DEFAULT 'now()'`);
        await queryRunner.query(`ALTER TABLE "suppliers" ALTER COLUMN "updated_at" SET DEFAULT 'now()'`);
        await queryRunner.query(`ALTER TABLE "products" ALTER COLUMN "created_at" SET DEFAULT 'now()'`);
        await queryRunner.query(`ALTER TABLE "products" ALTER COLUMN "updated_at" SET DEFAULT 'now()'`);
        await queryRunner.query(`ALTER TABLE "categories" ALTER COLUMN "created_at" SET DEFAULT 'now()'`);
        await queryRunner.query(`ALTER TABLE "categories" ALTER COLUMN "updated_at" SET DEFAULT 'now()'`);
        await queryRunner.query(`ALTER TABLE "medicines" ALTER COLUMN "created_at" SET DEFAULT 'now()'`);
        await queryRunner.query(`ALTER TABLE "medicines" ALTER COLUMN "updated_at" SET DEFAULT 'now()'`);
        await queryRunner.query(`ALTER TABLE "laboratories" ALTER COLUMN "created_at" SET DEFAULT 'now()'`);
        await queryRunner.query(`ALTER TABLE "laboratories" ALTER COLUMN "updated_at" SET DEFAULT 'now()'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "laboratories" ALTER COLUMN "updated_at" SET DEFAULT '2021-08-18 17:13:25.75156'`);
        await queryRunner.query(`ALTER TABLE "laboratories" ALTER COLUMN "created_at" SET DEFAULT '2021-08-18 17:13:25.75156'`);
        await queryRunner.query(`ALTER TABLE "medicines" ALTER COLUMN "updated_at" SET DEFAULT '2021-08-18 17:13:25.75156'`);
        await queryRunner.query(`ALTER TABLE "medicines" ALTER COLUMN "created_at" SET DEFAULT '2021-08-18 17:13:25.75156'`);
        await queryRunner.query(`ALTER TABLE "categories" ALTER COLUMN "updated_at" SET DEFAULT '2021-08-18 17:13:25.75156'`);
        await queryRunner.query(`ALTER TABLE "categories" ALTER COLUMN "created_at" SET DEFAULT '2021-08-18 17:13:25.75156'`);
        await queryRunner.query(`ALTER TABLE "products" ALTER COLUMN "updated_at" SET DEFAULT '2021-08-18 17:13:25.75156'`);
        await queryRunner.query(`ALTER TABLE "products" ALTER COLUMN "created_at" SET DEFAULT '2021-08-18 17:13:25.75156'`);
        await queryRunner.query(`ALTER TABLE "suppliers" ALTER COLUMN "updated_at" SET DEFAULT '2021-08-18 17:13:25.75156'`);
        await queryRunner.query(`ALTER TABLE "suppliers" ALTER COLUMN "created_at" SET DEFAULT '2021-08-18 17:13:25.75156'`);
    }

}
