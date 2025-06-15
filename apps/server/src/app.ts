import express from "express";

import router from "./routes";

const app = express();

// Express middlewares
app.use(express.json());

// Routes
app.use("/api", router);

export default app;
