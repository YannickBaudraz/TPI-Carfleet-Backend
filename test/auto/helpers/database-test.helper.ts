/*
 * Description  :   Helper to manage the test database.
 *
 * Author       :   Yannick.BAUDRAZ@cpnv.ch
 *
 * Project      :   TPICarfleet_Backend - database.test.helper.ts
 *
 * Created      :   22.03.2021
 *
 * Updates      :   [update date]
 *                      [update description]
 *
 * Created with WebStorm.
 */

import fs from 'fs';
import mariadb, { Connection } from 'mariadb';
import path from 'path';

/**
 * This class is designed to help with the test database.
 */
export class TestDatabaseHelper {
  private static readonly SQL_TEST_FILES = __dirname + '../../../../sql/test';

  /**
   * Create the test database and populate with fake data.
   * It closes automatically the connection when finish.
   */
  static async prepareTestDatabase(): Promise<void> {
    const connectionUri = {
      host: 'localhost',
      user: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      multipleStatements: true,
    };

    const conn = await mariadb.createConnection(connectionUri);
    await this.runSqlFile('createTestModel.sql', conn);
    await this.runSqlFile('insertTestCompanies.sql', conn);
    await this.runSqlFile('insertTestDrivers.sql', conn);
    await this.runSqlFile('insertTestVehicles.sql', conn);
    await this.runSqlFile('insertTestUsers.sql', conn);

    await conn.end();
  }

  private static async runSqlFile(filename: string, conn: Connection): Promise<void> {
    const filePath = path.resolve(`${this.SQL_TEST_FILES}/${filename}`);
    const options = 'utf8';
    const sqlText = fs.readFileSync(filePath, options);
    await conn.query(sqlText);
  }
}
