const express = require("express");
const router = express.Router();
const gameModesController = require("../controllers/gameModeController");
 
 
/**
 * @swagger
 *  /api/gamemodes:
 *    get:
 *      tags:
 *          - gamemodes
 *      summary: Get all gamemodes  - default limit is 50
 *      parameters:
 *          - in: query
 *            name: start
 *          - in: query
 *            name: limit
 *      responses:
 *        200:
 *          description: A list of gamemodes
 */
router.get("/", gameModesController.getAllGameModes);
 
/**
 * @swagger
 *  /api/gamemodes/{id}:
 *    get:
 *      tags:
 *          - gamemodes
 *      summary: Gets a specific gamemode based on its id
 *      parameters:
 *          - in: path
 *            name: id
 *      responses:
 *        200:
 *          description: A single gamemode
 */
router.get("/:id", gameModesController.getGameModeById);
 
module.exports = router;