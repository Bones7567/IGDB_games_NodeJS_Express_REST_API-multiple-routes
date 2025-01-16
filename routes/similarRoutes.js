const express = require("express");
const router = express.Router();
const similarController = require("../controllers/similarController");


/**
 * @swagger
 *  /api/similars:
 *    get:
 *      tags:
 *          - similars
 *      summary: Get all similars  - default limit is 50
 *      parameters:
 *          - in: query
 *            name: start
 *          - in: query
 *            name: limit
 *      responses:
 *        200:
 *          description: A list of similars
 */
router.get("/", similarController.getAllSimilarGames);

/**
 * @swagger
 *  /api/similars/{id}:
 *    get:
 *      tags:
 *          - similars
 *      summary: Gets a specific similar based on its id
 *      parameters:
 *          - in: path
 *            name: id
 *      responses:
 *        200:
 *          description: A single similar
 */
router.get("/:id", similarController.getSimilarByGameId);

module.exports = router;
