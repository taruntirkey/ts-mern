import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import path from "path";
import { errorHandler, notFound, rateLimitByIp } from "./middleware/index.js";
import apiRouter from "./routes.js";
import { healthcheck } from "./utils/index.js";
dotenv.config();

const port = process.env.PORT || 3000;
const app = express();

// Rate Limiter
app.use(rateLimitByIp);

// Help secure Express apps by setting HTTP response headers.
app.use(helmet());

// Request body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Cookie parser middleware
app.use(cookieParser());

// Request logger
app.use(morgan("combined"));

// Health Check
app.use("/healthcheck", healthcheck);

// Register Routes
app.get("api", apiRouter);

// In production environment, serve frontend
if (process.env.NODE_ENV === "production") {
  // Get root directory
  const __dirname = path.resolve();

  // Set express static folder
  app.use(express.static(path.join(__dirname, "/frontend/dist")));

  // if above paths doesn't match serve frontend
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
  });
}

// Error Handler
app.use(notFound);
app.use(errorHandler);

app
  .listen(port, () => {
    console.log(`Server running on PORT ${port}`);
  })
  .on("error", (err) => console.log(err));
