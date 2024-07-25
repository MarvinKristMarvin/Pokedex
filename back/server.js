import "dotenv/config";
import express from "express";
import cors from "cors";

import { router } from "./server/router.js";

const port = process.env.PORT;

const app = express();

// * Je vais spécifier les noms de domain qui ont le droit d'utiliser mon API
// * ⚠️ Attention, dans la vie réelle, on ne spécifierait que ceux qui ont besoin de l'accès
// app.use(cors({
//     origin: 'http://localhost:5500',
// }));
app.use(cors());

// * Nous sert à obtenir req.body, doit se placer avant les routes
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(router);

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
