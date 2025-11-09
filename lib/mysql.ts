// MySQL Database Connection
import mysql from "mysql2/promise";

// Connection pool configuration
const pool = mysql.createPool({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "",
  database: process.env.DB_NAME || "axela_db",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  enableKeepAlive: true,
  keepAliveInitialDelay: 0,
});

// Test connection
export async function testConnection() {
  try {
    const connection = await pool.getConnection();
    console.log("✅ MySQL database connected successfully");
    connection.release();
    return true;
  } catch (error) {
    console.error("❌ MySQL connection error:", error);
    return false;
  }
}

// Execute query helper
export async function executeQuery<T = any>(
  query: string,
  params: any[] = []
): Promise<T> {
  try {
    const [results] = await pool.execute(query, params);
    return results as T;
  } catch (error) {
    console.error("Query error:", error);
    throw error;
  }
}

// Get connection from pool
export async function getConnection() {
  return await pool.getConnection();
}

// Export pool for direct use
export { pool };

// Close pool (for graceful shutdown)
export async function closePool() {
  await pool.end();
}


