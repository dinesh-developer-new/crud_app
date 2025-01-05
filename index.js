import express from "express";
const app = express();
const PORT = 4000;
import crudRoute from './routes/crudRoute.js'

app.get("/", (req, res) => {
  res.json({ msg: "Hello World!" });
});

// CRUD functionality
app.use('/crud', crudRoute)


app.listen(PORT, () => {
  console.log(`The server is running at http://localhost:${PORT}`);
});
