import {MigrationInterface, QueryRunner} from "typeorm";

export class changeTypeMedicine1629555373377 implements MigrationInterface {
    name = 'changeTypeMedicine1629555373377'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "laboratories" ALTER COLUMN "created_at" SET DEFAULT 'now()'`);
        await queryRunner.query(`ALTER TABLE "laboratories" ALTER COLUMN "updated_at" SET DEFAULT 'now()'`);
        await queryRunner.query(`ALTER TABLE "categories" ALTER COLUMN "created_at" SET DEFAULT 'now()'`);
        await queryRunner.query(`ALTER TABLE "categories" ALTER COLUMN "updated_at" SET DEFAULT 'now()'`);
        await queryRunner.query(`ALTER TABLE "suppliers" ALTER COLUMN "created_at" SET DEFAULT 'now()'`);
        await queryRunner.query(`ALTER TABLE "suppliers" ALTER COLUMN "updated_at" SET DEFAULT 'now()'`);
        await queryRunner.query(`ALTER TABLE "products" ALTER COLUMN "created_at" SET DEFAULT 'now()'`);
        await queryRunner.query(`ALTER TABLE "products" ALTER COLUMN "updated_at" SET DEFAULT 'now()'`);
        await queryRunner.query(`ALTER TABLE "medicines" DROP COLUMN "indications"`);
        await queryRunner.query(`ALTER TABLE "medicines" ADD "indications" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "medicines" DROP COLUMN "actions"`);
        await queryRunner.query(`ALTER TABLE "medicines" ADD "actions" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "medicines" DROP COLUMN "dose"`);
        await queryRunner.query(`ALTER TABLE "medicines" ADD "dose" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "medicines" DROP COLUMN "administrationRoute"`);
        await queryRunner.query(`ALTER TABLE "medicines" ADD "administrationRoute" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "medicines" ALTER COLUMN "created_at" SET DEFAULT 'now()'`);
        await queryRunner.query(`ALTER TABLE "medicines" ALTER COLUMN "updated_at" SET DEFAULT 'now()'`);
        await queryRunner.query(`ALTER TABLE "shelfs" ALTER COLUMN "created_at" SET DEFAULT 'now()'`);
        await queryRunner.query(`ALTER TABLE "shelfs" ALTER COLUMN "updated_at" SET DEFAULT 'now()'`);
        await queryRunner.query(`ALTER TABLE "branch-offices" ALTER COLUMN "created_at" SET DEFAULT 'now()'`);
        await queryRunner.query(`ALTER TABLE "branch-offices" ALTER COLUMN "updated_at" SET DEFAULT 'now()'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "branch-offices" ALTER COLUMN "updated_at" SET DEFAULT '2021-08-21 14:03:02.699005'`);
        await queryRunner.query(`ALTER TABLE "branch-offices" ALTER COLUMN "created_at" SET DEFAULT '2021-08-21 14:03:02.699005'`);
        await queryRunner.query(`ALTER TABLE "shelfs" ALTER COLUMN "updated_at" SET DEFAULT '2021-08-21 14:03:02.699005'`);
        await queryRunner.query(`ALTER TABLE "shelfs" ALTER COLUMN "created_at" SET DEFAULT '2021-08-21 14:03:02.699005'`);
        await queryRunner.query(`ALTER TABLE "medicines" ALTER COLUMN "updated_at" SET DEFAULT '2021-08-21 14:03:02.699005'`);
        await queryRunner.query(`ALTER TABLE "medicines" ALTER COLUMN "created_at" SET DEFAULT '2021-08-21 14:03:02.699005'`);
        await queryRunner.query(`ALTER TABLE "medicines" DROP COLUMN "administrationRoute"`);
        await queryRunner.query(`ALTER TABLE "medicines" ADD "administrationRoute" character varying(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "medicines" DROP COLUMN "dose"`);
        await queryRunner.query(`ALTER TABLE "medicines" ADD "dose" character varying(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "medicines" DROP COLUMN "actions"`);
        await queryRunner.query(`ALTER TABLE "medicines" ADD "actions" character varying(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "medicines" DROP COLUMN "indications"`);
        await queryRunner.query(`ALTER TABLE "medicines" ADD "indications" character varying(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "products" ALTER COLUMN "updated_at" SET DEFAULT '2021-08-21 14:03:02.699005'`);
        await queryRunner.query(`ALTER TABLE "products" ALTER COLUMN "created_at" SET DEFAULT '2021-08-21 14:03:02.699005'`);
        await queryRunner.query(`ALTER TABLE "suppliers" ALTER COLUMN "updated_at" SET DEFAULT '2021-08-21 14:03:02.699005'`);
        await queryRunner.query(`ALTER TABLE "suppliers" ALTER COLUMN "created_at" SET DEFAULT '2021-08-21 14:03:02.699005'`);
        await queryRunner.query(`ALTER TABLE "categories" ALTER COLUMN "updated_at" SET DEFAULT '2021-08-21 14:03:02.699005'`);
        await queryRunner.query(`ALTER TABLE "categories" ALTER COLUMN "created_at" SET DEFAULT '2021-08-21 14:03:02.699005'`);
        await queryRunner.query(`ALTER TABLE "laboratories" ALTER COLUMN "updated_at" SET DEFAULT '2021-08-21 14:03:02.699005'`);
        await queryRunner.query(`ALTER TABLE "laboratories" ALTER COLUMN "created_at" SET DEFAULT '2021-08-21 14:03:02.699005'`);
    }

}
