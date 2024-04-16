import express from "express";
import cors from "cors";
import Database from "better-sqlite3";
const db = new Database("weather.db");
const app = express();
app.use(express.json());
app.use(cors());

