const db = require("../config/db");

async function getAllGameCovers(start = 0, limit = 50) {
    const [rows] = await db.execute("Select * from game_covers Limit ?,?", [
        start.toString(), //tostring for workaround of mysql 8.4 bug
        limit.toString(),
    ]);
    return rows;
}

async function getGameCoverById(gameCoverId) {
    const [rows] = await db.execute("Select * from game_covers WHERE cover_id = ?", [
        gameCoverId,
    ]);
    return rows[0];
}

module.exports = { getAllGameCovers, getGameCoverById };
