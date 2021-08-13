import { MigrationInterface, QueryRunner } from 'typeorm';

export class timestampModels1627404650026 implements MigrationInterface {
  name = 'timestampModels1627404650026';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "suppliers" ALTER COLUMN "created_at" SET DEFAULT 'now()'`,
    );
    await queryRunner.query(
      `ALTER TABLE "suppliers" ALTER COLUMN "updated_at" SET DEFAULT 'now()'`,
    );
    await queryRunner.query(
      `ALTER TABLE "products" ALTER COLUMN "created_at" SET DEFAULT 'now()'`,
    );
    await queryRunner.query(
      `ALTER TABLE "products" ALTER COLUMN "updated_at" SET DEFAULT 'now()'`,
    );
    await queryRunner.query(
      `ALTER TABLE "categories" ALTER COLUMN "created_at" SET DEFAULT 'now()'`,
    );
    await queryRunner.query(
      `ALTER TABLE "categories" ALTER COLUMN "updated_at" SET DEFAULT 'now()'`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "categories" ALTER COLUMN "updated_at" DROP DEFAULT`,
    );
    await queryRunner.query(
      `ALTER TABLE "categories" ALTER COLUMN "created_at" DROP DEFAULT`,
    );
    await queryRunner.query(
      `ALTER TABLE "products" ALTER COLUMN "updated_at" DROP DEFAULT`,
    );
    await queryRunner.query(
      `ALTER TABLE "products" ALTER COLUMN "created_at" DROP DEFAULT`,
    );
    await queryRunner.query(
      `ALTER TABLE "suppliers" ALTER COLUMN "updated_at" DROP DEFAULT`,
    );
    await queryRunner.query(
      `ALTER TABLE "suppliers" ALTER COLUMN "created_at" DROP DEFAULT`,
    );
  }
}
