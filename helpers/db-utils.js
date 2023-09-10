const { MongoClient } = require("mongodb");

export async function connectDatabase() {
  const client = await MongoClient.connect(
    "mongodb+srv://MONGODBID:PASSOWRD@cluster0.ug9rzj6.mongodb.net/events?retryWrites=true&w=majority"
  );

  return client;
}

export async function insertDocument(client, collection, document) {
  const db = client.db();

  const result = await db.collection(collection).insertOne(document);

  return result;
}

export async function getAlldocuments(client, collection, sort) {
  const db = client.db();

  const documents = await db.collection(collection).find().sort(sort).toArray();

  return documents;
}
