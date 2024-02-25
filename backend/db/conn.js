import { MongoClient, ServerApiVersion } from "mongodb";

// const connectionString = process.env.ATLAS_URI || "";
const connectionString = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_PATH}/?retryWrites=true&w=majority`;

const client = new MongoClient(connectionString, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });

let conn;
try {
  conn = await client.connect();
  console.log("DB connected");
} catch(e) {
  console.error(e);
}

let db = conn.db("sample_training");

export default db;