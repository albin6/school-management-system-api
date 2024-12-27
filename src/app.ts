import express, { Application } from "express";

export class App {
  private app: Application;

  constructor() {
    this.app = express();
    this.setMiddleWare();
    this.setRoutes();
  }

  private setMiddleWare() {
    this.app.use(express.json());
  }

  private setRoutes() {
    this.app.get("/", (req, res, next) => {
      res.json({ message: "Server is running" });
    });
  }

  public getApp() {
    return this.app;
  }
}
