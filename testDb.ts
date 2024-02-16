import { connectToDatabase } from "./lib/database";

async function testConnection() {
  try {
    const connection = await connectToDatabase();
    console.log("Successfully connected to the database");
    connection.connection.close();
  } catch (error) {
    console.error("Failed to connect to the database", error);
  }
}

testConnection();
