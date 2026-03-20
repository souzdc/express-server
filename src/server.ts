import createApp from "./app";
import dotenv from "dotenv";

dotenv.config({ quiet: true });

const port =
  process.env.Port ||
  (() => {
    console.log("Env port not set using 3000");
    return 3000;
  })();

const app = createApp();

app.listen(port, () => {
  console.log(`Server running on: http://localhost:${port}`);
});
