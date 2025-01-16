const express = require("express");
const router = express.Router();
const screenshotController = require("../controllers/screenshotController");


/**
 * @swagger
 *  /api/screenshots:
 *    get:
 *      tags:
 *          - screenshots
 *      summary: Get all screenshots  - default limit is 50
 *      parameters:
 *          - in: query
 *            name: start
 *          - in: query
 *            name: limit
 *      responses:
 *        200:
 *          description: A list of screenshots
 */
router.get("/", screenshotController.getAllScreenshots);

/**
 * @swagger
 *  /api/screenshots/{id}:
 *    get:
 *      tags:
 *          - screenshots
 *      summary: Gets a specific screenshot based on its id
 *      parameters:
 *          - in: path
 *            name: id
 *      responses:
 *        200:
 *          description: A single screenshot
 */
router.get("/:id", screenshotController.getScreenshotById);

module.exports = router;
