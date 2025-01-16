const express = require("express");
const router = express.Router();
const gameCoversController = require("../controllers/gameCoversController");
 
 
/**
 * @swagger
 *  /api/gameCover:
 *    get:
 *      tags:
 *          - gameCovers
 *      summary: Get all gameCovers  - default limit is 50
 *      parameters:
 *          - in: query
 *            name: start
 *          - in: query
 *            name: limit
 *      responses:
 *        200:
 *          description: A list of gameCovers
 */
router.get("/", gameCoversController.getAllGameCovers);
 
/**
 * @swagger
 *  /api/gameCover/{id}:
 *    get:
 *      tags:
 *          - gameCovers
 *      summary: Gets a specific gameCover based on its id
 *      parameters:
 *          - in: path
 *            name: id
 *      responses:
 *        200:
 *          description: A single gameCover
 */
router.get("/:id", gameCoversController.getGameCoverById);
 
module.exports = router;