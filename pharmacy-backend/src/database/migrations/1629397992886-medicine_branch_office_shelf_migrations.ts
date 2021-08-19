import {MigrationInterface, QueryRunner} from "typeorm";

export class medicineBranchOfficeShelfMigrations1629397992886 implements MigrationInterface {
    name = 'medicineBranchOfficeShelfMigrations1629397992886'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "shelf_medicine" ("id" SERIAL NOT NULL, "cubicle" character varying(255) NOT NULL, "medicine_id" integer, "shelf_id" integer, CONSTRAINT "PK_742cc99e404861054b36636f7c2" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "shelfs" ("id" SERIAL NOT NULL, "name" character varying(255) NOT NULL, "status" character varying(8) NOT NULL DEFAULT 'ACTIVE', "created_at" TIMESTAMP NOT NULL DEFAULT 'now()', "updated_at" TIMESTAMP NOT NULL DEFAULT 'now()', "branch_office_id" integer, CONSTRAINT "PK_e1cac34106c17471773ae78553a" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "branch-offices" ("id" SERIAL NOT NULL, "name" character varying(255) NOT NULL, "phoneNumber" character varying(150) NOT NULL, "address" character varying(255) NOT NULL, "status" character varying(8) NOT NULL DEFAULT 'ACTIVE', "created_at" TIMESTAMP NOT NULL DEFAULT 'now()', "updated_at" TIMESTAMP NOT NULL DEFAULT 'now()', CONSTRAINT "PK_1634abf35e49fef9cb818ddeee6" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "laboratories" ALTER COLUMN "created_at" SET DEFAULT 'now()'`);
        await queryRunner.query(`ALTER TABLE "laboratories" ALTER COLUMN "updated_at" SET DEFAULT 'now()'`);
        await queryRunner.query(`ALTER TABLE "categories" ALTER COLUMN "created_at" SET DEFAULT 'now()'`);
        await queryRunner.query(`ALTER TABLE "categories" ALTER COLUMN "updated_at" SET DEFAULT 'now()'`);
        await queryRunner.query(`ALTER TABLE "suppliers" ALTER COLUMN "created_at" SET DEFAULT 'now()'`);
        await queryRunner.query(`ALTER TABLE "suppliers" ALTER COLUMN "updated_at" SET DEFAULT 'now()'`);
        await queryRunner.query(`ALTER TABLE "products" ALTER COLUMN "created_at" SET DEFAULT 'now()'`);
        await queryRunner.query(`ALTER TABLE "products" ALTER COLUMN "updated_at" SET DEFAULT 'now()'`);
        await queryRunner.query(`ALTER TABLE "medicines" ALTER COLUMN "created_at" SET DEFAULT 'now()'`);
        await queryRunner.query(`ALTER TABLE "medicines" ALTER COLUMN "updated_at" SET DEFAULT 'now()'`);
        await queryRunner.query(`ALTER TABLE "shelf_medicine" ADD CONSTRAINT "FK_558861c889809dc63003a24ca60" FOREIGN KEY ("medicine_id") REFERENCES "medicines"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "shelf_medicine" ADD CONSTRAINT "FK_43fe095be2fdce9ab8441a373b6" FOREIGN KEY ("shelf_id") REFERENCES "shelfs"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "shelfs" ADD CONSTRAINT "FK_103f9a21cdfd79880072753b936" FOREIGN KEY ("branch_office_id") REFERENCES "branch-offices"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "shelfs" DROP CONSTRAINT "FK_103f9a21cdfd79880072753b936"`);
        await queryRunner.query(`ALTER TABLE "shelf_medicine" DROP CONSTRAINT "FK_43fe095be2fdce9ab8441a373b6"`);
        await queryRunner.query(`ALTER TABLE "shelf_medicine" DROP CONSTRAINT "FK_558861c889809dc63003a24ca60"`);
        await queryRunner.query(`ALTER TABLE "medicines" ALTER COLUMN "updated_at" SET DEFAULT '2021-08-19 00:28:41.412498'`);
        await queryRunner.query(`ALTER TABLE "medicines" ALTER COLUMN "created_at" SET DEFAULT '2021-08-19 00:28:41.412498'`);
        await queryRunner.query(`ALTER TABLE "products" ALTER COLUMN "updated_at" SET DEFAULT '2021-08-19 00:28:41.412498'`);
        await queryRunner.query(`ALTER TABLE "products" ALTER COLUMN "created_at" SET DEFAULT '2021-08-19 00:28:41.412498'`);
        await queryRunner.query(`ALTER TABLE "suppliers" ALTER COLUMN "updated_at" SET DEFAULT '2021-08-19 00:28:41.412498'`);
        await queryRunner.query(`ALTER TABLE "suppliers" ALTER COLUMN "created_at" SET DEFAULT '2021-08-19 00:28:41.412498'`);
        await queryRunner.query(`ALTER TABLE "categories" ALTER COLUMN "updated_at" SET DEFAULT '2021-08-19 00:28:41.412498'`);
        await queryRunner.query(`ALTER TABLE "categories" ALTER COLUMN "created_at" SET DEFAULT '2021-08-19 00:28:41.412498'`);
        await queryRunner.query(`ALTER TABLE "laboratories" ALTER COLUMN "updated_at" SET DEFAULT '2021-08-19 00:28:41.412498'`);
        await queryRunner.query(`ALTER TABLE "laboratories" ALTER COLUMN "created_at" SET DEFAULT '2021-08-19 00:28:41.412498'`);
        await queryRunner.query(`DROP TABLE "branch-offices"`);
        await queryRunner.query(`DROP TABLE "shelfs"`);
        await queryRunner.query(`DROP TABLE "shelf_medicine"`);
    }

}
