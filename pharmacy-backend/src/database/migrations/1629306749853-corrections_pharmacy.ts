import {MigrationInterface, QueryRunner} from "typeorm";

export class correctionsPharmacy1629306749853 implements MigrationInterface {
    name = 'correctionsPharmacy1629306749853'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "medicines" ("id" SERIAL NOT NULL, "indications" character varying(255) NOT NULL, "actions" character varying(255) NOT NULL, "dose" character varying(255) NOT NULL, "administrationRoute" character varying(255) NOT NULL, "status" character varying(8) NOT NULL DEFAULT 'ACTIVE', "created_at" TIMESTAMP NOT NULL DEFAULT 'now()', "updated_at" TIMESTAMP NOT NULL DEFAULT 'now()', "product_id" integer, "laboratory_id" integer, CONSTRAINT "REL_1a703821566f4808a1fdf2011f" UNIQUE ("product_id"), CONSTRAINT "PK_77b93851766f7ab93f71f44b18b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "laboratories" ("id" SERIAL NOT NULL, "name" character varying(255) NOT NULL, "direction" character varying(255) NOT NULL, "phoneNumber" character varying(100) NOT NULL, "status" character varying(8) NOT NULL DEFAULT 'ACTIVE', "created_at" TIMESTAMP NOT NULL DEFAULT 'now()', "updated_at" TIMESTAMP NOT NULL DEFAULT 'now()', CONSTRAINT "PK_095d956b8c0841845525483188c" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "suppliers" ALTER COLUMN "created_at" SET DEFAULT 'now()'`);
        await queryRunner.query(`ALTER TABLE "suppliers" ALTER COLUMN "updated_at" SET DEFAULT 'now()'`);
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "unit_price"`);
        await queryRunner.query(`ALTER TABLE "products" ADD "unit_price" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "products" ALTER COLUMN "created_at" SET DEFAULT 'now()'`);
        await queryRunner.query(`ALTER TABLE "products" ALTER COLUMN "updated_at" SET DEFAULT 'now()'`);
        await queryRunner.query(`ALTER TABLE "categories" ALTER COLUMN "created_at" SET DEFAULT 'now()'`);
        await queryRunner.query(`ALTER TABLE "categories" ALTER COLUMN "updated_at" SET DEFAULT 'now()'`);
        await queryRunner.query(`ALTER TABLE "medicines" ADD CONSTRAINT "FK_1a703821566f4808a1fdf2011f8" FOREIGN KEY ("product_id") REFERENCES "products"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "medicines" ADD CONSTRAINT "FK_52d0e2512184995992849b05919" FOREIGN KEY ("laboratory_id") REFERENCES "laboratories"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "medicines" DROP CONSTRAINT "FK_52d0e2512184995992849b05919"`);
        await queryRunner.query(`ALTER TABLE "medicines" DROP CONSTRAINT "FK_1a703821566f4808a1fdf2011f8"`);
        await queryRunner.query(`ALTER TABLE "categories" ALTER COLUMN "updated_at" SET DEFAULT '2021-07-28 16:53:41.559807'`);
        await queryRunner.query(`ALTER TABLE "categories" ALTER COLUMN "created_at" SET DEFAULT '2021-07-28 16:53:41.559807'`);
        await queryRunner.query(`ALTER TABLE "products" ALTER COLUMN "updated_at" SET DEFAULT '2021-07-28 16:53:41.559807'`);
        await queryRunner.query(`ALTER TABLE "products" ALTER COLUMN "created_at" SET DEFAULT '2021-07-28 16:53:41.559807'`);
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "unit_price"`);
        await queryRunner.query(`ALTER TABLE "products" ADD "unit_price" numeric NOT NULL`);
        await queryRunner.query(`ALTER TABLE "suppliers" ALTER COLUMN "updated_at" SET DEFAULT '2021-07-28 16:53:41.559807'`);
        await queryRunner.query(`ALTER TABLE "suppliers" ALTER COLUMN "created_at" SET DEFAULT '2021-07-28 16:53:41.559807'`);
        await queryRunner.query(`DROP TABLE "laboratories"`);
        await queryRunner.query(`DROP TABLE "medicines"`);
    }

}
