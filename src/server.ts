import createApp from "./app";
import { env } from "./config/env";

const app = createApp();

app.listen(env.serverPort, () => {
  console.log(`Server running ${env.serverPort}`);
});
