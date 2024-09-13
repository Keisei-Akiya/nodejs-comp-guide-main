import express from "express";

import router from "./products.mjs";

const apiRoutes = express.Router();
apiRoutes.use("/products", router);

export default apiRoutes;
