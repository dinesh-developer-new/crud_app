import express from "express";
const app = express();
const PORT = 4000;

app.get("/", (req, res) => {
  res.json({ msg: "Hello World!" });
});

app.listen(PORT, () => {
    console.log(`The server is running at http://localhost:${PORT}`);
})