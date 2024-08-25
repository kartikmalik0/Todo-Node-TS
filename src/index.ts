import express, { Express } from "express";
import AuthRoutes from "./routes/AuthRoutes";
import rootRouter from "./routes";
import session from "express-session";
const app: Express = express();

app.get("/", (req, res) => {
    res.send("working");
});

app.use(session({
    secret: 'd2495538208da67c26dd8ea18d721836c99a2db59b86cd031dd1f0429f952f4c016b7967df6ef002bd0049308894e6e8b0ef848f79f5c4e7dbb8d08297b86a94',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false } // set to true if using HTTPS
  }));

app.use("/api",rootRouter);



app.listen(3000, () => {
    console.log("server running");
});
