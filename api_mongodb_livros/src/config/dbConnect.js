import mongoose from "mongoose"

mongoose.connect("mongodb+srv://COLLECTION:SENHA@COLLECTION.dkjed.mongodb.net/DATABASE");

let db = mongoose.connection;

export default db;