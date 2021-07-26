import {MigrationInterface, QueryRunner} from "typeorm";

export class productsMigration1627321091187 implements MigrationInterface {
    name = 'productsMigration1627321091187'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "suppliers" ("id" SERIAL NOT NULL, "company_name" character varying(255) NOT NULL, "phone_number" character varying(255), "address" character varying(255) NOT NULL, "city" character varying(255) NOT NULL, "region" character varying(255) NOT NULL, "postal_code" character varying(255) NOT NULL, "contact_name" character varying(255) NOT NULL, "status" character varying(8) NOT NULL DEFAULT 'ACTIVE', "created_at" TIMESTAMP NOT NULL, "updated_at" TIMESTAMP NOT NULL, CONSTRAINT "PK_b70ac51766a9e3144f778cfe81e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "products" ("id" SERIAL NOT NULL, "name" character varying(200) NOT NULL, "description" character varying(255), "quantity_per_unit" integer NOT NULL, "unit_price" numeric NOT NULL, "units_in_stock" integer NOT NULL, "expiration_date" date, "status" character varying(8) NOT NULL DEFAULT 'ACTIVE', "created_at" TIMESTAMP NOT NULL, "updated_at" TIMESTAMP NOT NULL, "categoryId" integer NOT NULL, "supplierId" integer, CONSTRAINT "REL_ff56834e735fa78a15d0cf2192" UNIQUE ("categoryId"), CONSTRAINT "PK_0806c755e0aca124e67c0cf6d7d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "products" ADD CONSTRAINT "FK_ff56834e735fa78a15d0cf21926" FOREIGN KEY ("categoryId") REFERENCES "categories"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "products" ADD CONSTRAINT "FK_c143cbc0299e1f9220c4b5debd8" FOREIGN KEY ("supplierId") REFERENCES "suppliers"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "products" DROP CONSTRAINT "FK_c143cbc0299e1f9220c4b5debd8"`);
        await queryRunner.query(`ALTER TABLE "products" DROP CONSTRAINT "FK_ff56834e735fa78a15d0cf21926"`);
        await queryRunner.query(`DROP TABLE "products"`);
        await queryRunner.query(`DROP TABLE "suppliers"`);
    }

}
