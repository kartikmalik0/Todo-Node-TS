import express, { Express } from "express";
import AuthRoutes from "./routes/AuthRoutes";
import rootRouter from "./routes";
import cors from "cors";
import session from "express-session";
import todosRouter from "./routes/todo";
import todosRootRouter from "./routes/todoindex";
const app: Express = express();

app.use(
    cors({
        origin: "http://localhost:3001", // Replace with your frontend URL
        credentials: true,
    })
);

// Add body-parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.send("working");
});




app.use("/api", rootRouter);
app.use('/api', todosRootRouter);

app.listen(5000, () => {
    console.log("server running");
});
