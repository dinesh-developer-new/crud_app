import express from "express";
import crudRoute from './routes/crudRoute.js'
import connectDB from "./lib/db.js";

const app = express();
const PORT = 4000;

// Connect DB
connectDB()

app.get("/", (req, res) => {
  res.json({ msg: "Hello World!" });
});

// CRUD functionality
app.use('/crud', crudRoute)


app.listen(PORT, () => {
  console.log(`The server is running at http://localhost:${PORT}`);
});
