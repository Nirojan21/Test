// Database selector - automatically uses MySQL if configured, otherwise in-memory
import { db as mysqlDb } from "./database-mysql";
import { db as memoryDb } from "./database";

// Check if MySQL is configured
const useMySQL = process.env.DB_HOST && process.env.DB_USER && process.env.DB_NAME;

// Export the appropriate database
export const db = useMySQL ? mysqlDb : memoryDb;

// Log which database is being used
if (useMySQL) {
  console.log("🗄️ Using MySQL database:", process.env.DB_NAME);
} else {
  console.log("💾 Using in-memory database (set DB_HOST, DB_USER, DB_NAME to use MySQL)");
}


