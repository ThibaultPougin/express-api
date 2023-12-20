import express, { Express, Request, Response } from "express";
import expressJSDocSwagger from "express-jsdoc-swagger";
import swaggerOptions from "./swagger.json";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import moment from "moment-timezone";
import { router } from "./src/router";

dotenv.config();

const port = process.env.PORT || 8080;
const app: Express = express();

expressJSDocSwagger(app)(swaggerOptions);

app.use(cors());
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({extended: false }));

app.use(router);

app.use((__request: Request, response: Response) => {
  response
    .status(400)
    .json({ success: "false", message: `Cette route n'existe pas.` });
});

app.listen(port, () => {
  console.log(
    `[${moment()
      .tz("Europe/Paris")
      .format("DD-MM-YYYY HH:mm:ss")}] Server started on ${
      process.env.BASE_URL
    }`,
  );
});

export { app };
