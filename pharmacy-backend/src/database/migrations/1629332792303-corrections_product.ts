import {MigrationInterface, QueryRunner} from "typeorm";

export class correctionsProduct1629332792303 implements MigrationInterface {
    name = 'correctionsProduct1629332792303'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "suppliers" ALTER COLUMN "created_at" SET DEFAULT 'now()'`);
        await queryRunner.query(`ALTER TABLE "suppliers" ALTER COLUMN "updated_at" SET DEFAULT 'now()'`);
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "unit_price"`);
        await queryRunner.query(`ALTER TABLE "products" ADD "unit_price" numeric(10,2) NOT NULL`);
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
        await queryRunner.query(`ALTER TABLE "laboratories" ALTER COLUMN "updated_at" SET DEFAULT '2021-08-18 18:15:26.498618'`);
        await queryRunner.query(`ALTER TABLE "laboratories" ALTER COLUMN "created_at" SET DEFAULT '2021-08-18 18:15:26.498618'`);
        await queryRunner.query(`ALTER TABLE "medicines" ALTER COLUMN "updated_at" SET DEFAULT '2021-08-18 18:15:26.498618'`);
        await queryRunner.query(`ALTER TABLE "medicines" ALTER COLUMN "created_at" SET DEFAULT '2021-08-18 18:15:26.498618'`);
        await queryRunner.query(`ALTER TABLE "categories" ALTER COLUMN "updated_at" SET DEFAULT '2021-08-18 18:15:26.498618'`);
        await queryRunner.query(`ALTER TABLE "categories" ALTER COLUMN "created_at" SET DEFAULT '2021-08-18 18:15:26.498618'`);
        await queryRunner.query(`ALTER TABLE "products" ALTER COLUMN "updated_at" SET DEFAULT '2021-08-18 18:15:26.498618'`);
        await queryRunner.query(`ALTER TABLE "products" ALTER COLUMN "created_at" SET DEFAULT '2021-08-18 18:15:26.498618'`);
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "unit_price"`);
        await queryRunner.query(`ALTER TABLE "products" ADD "unit_price" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "suppliers" ALTER COLUMN "updated_at" SET DEFAULT '2021-08-18 18:15:26.498618'`);
        await queryRunner.query(`ALTER TABLE "suppliers" ALTER COLUMN "created_at" SET DEFAULT '2021-08-18 18:15:26.498618'`);
    }

}
