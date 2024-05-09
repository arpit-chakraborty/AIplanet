import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import cors from "cors";
import env from "dotenv";


const app = express();
const port = 3000;
app.use(cors())
env.config();

const db = new pg.Client({
  user: process.env.USER,
  host: process.env.HOST,
  database: process.env.DATABASE,
  password: process.env.PASSWORD,
  port: 5432,
});

app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.static("assets"));

db.connect();


app.post("/newstack",async (req,res)=>{
    
    const entry = req.body;
    const name = entry.name;
    const description = entry.description;
    await db.query("INSERT INTO aibots(name, description) VALUES($1, $2)", [name, description] );
    console.log(req.body)
    res.json("Entry entered into DataBase");
});

app.get("/stacks",async (req,res)=>{
    const result = await db.query("SELECT name,description FROM aibots");
    res.json(result.rows);

})


app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
  });