import express from "express";
import colors from "colors";
import connectDB from "./config/db.js";
import path from "path";
import dotenv from "dotenv";
import { errorHandler, notFound } from "./middleware/errorMiddleware.js";

//Routes
import sneakerRoutes from "./routes/sneakerRoutes.js";
import userRoutes from "./routes/userRoutes.js";

dotenv.config();

connectDB();
const app = express();

app.use(express.json());

app.use("/api/sneakers", sneakerRoutes);
app.use("/api/users", userRoutes);

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

const __dirname = path.resolve();

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/build")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
  });
} else {
  app.get("/", (req, res) => {
    res.send("API is running....");
  });
}

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on PORT:${PORT}`.yellow.bold);
});
