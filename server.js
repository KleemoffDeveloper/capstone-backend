// DEPENDENCIES
import app from "./app.js";

// CONFIGURATION
import dotenv from "dotenv";
dotenv.config();
const PORT = 3001;

// LISTEN
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
