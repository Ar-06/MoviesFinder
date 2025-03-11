import { app } from "./app.js";
import { connectDB } from "./db/conexion.js";
import { config } from "./config.js";

connectDB();

const PORT = config.port;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
