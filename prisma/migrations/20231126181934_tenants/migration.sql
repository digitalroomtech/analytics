/*
  Warnings:

  - You are about to drop the column `tenant` on the `analytics` table. All the data in the column will be lost.
  - Added the required column `domain` to the `Tenants` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Analytics` DROP COLUMN `tenant`,
    ADD COLUMN `tenant_id` INTEGER NULL;

-- AlterTable
ALTER TABLE `Tenants` ADD COLUMN `domain` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `Analytics` ADD CONSTRAINT `Analytics_tenant_id_fkey` FOREIGN KEY (`tenant_id`) REFERENCES `Tenants`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
