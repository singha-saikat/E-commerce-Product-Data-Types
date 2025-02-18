import app from "./app";
import config from "./app/config";
import mongoose from "mongoose";

const databaseUrl = config.database_url;
const port = config.port;

async function main() {
  try {
    await mongoose.connect(databaseUrl as string);
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
  } catch (err) {
    console.log(err);
  }
}
main();
