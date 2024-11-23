import express from "express";
import path from "path";
import dotenv from "dotenv";
dotenv.config();

const app = express();

app.get("/healthcheck", (req, res) => {
  res.send("MERN with TypeScript");
});

const __dirname = path.resolve();
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/dist")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
  });
}

app
  .listen(5000, () => {
    console.log("Ready on PORT 5000");
  })
  .on("error", (err) => console.log(err));
