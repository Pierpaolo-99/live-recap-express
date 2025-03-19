/**
 * Controller for handling song-related operations.
 * @module controllers/songsController
 */

const songsData = require('../data/songsData');

/**
 * Retrieves and sends a list of all songs.
 * @function index
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 */
function index(req, res) {
    let filteredSongs = songsData

    if (req.query.genre){
        filteredSongs = songsData.filter(song => song.genre.includes(req.query.genre))
    }

    res.json(filteredSongs)
}   


/**
 * Retrieves and sends details of a specific song by ID.
 * @function show
 * @param {Object} req - The request object.
 * @param {Object} req.params - The route parameters.
 * @param {string} req.params.id - The ID of the song.
 * @param {Object} res - The response object.
 */
function show(req, res) {
    const songId = Number(req.params.id);
    
    const song = songsData.find(song => song.id === songId)


    if (!song){
        res.status(404);

        return res.json({
            error: "Not Found",
            message: "Song non trovata"
        })
    }

    res.json(song)
}

/**
 * Creates a new song.
 * @function create
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 */
function create(req, res) {
    res.send('create a new song');
}

/**
 * Updates an existing song by ID.
 * @function update
 * @param {Object} req - The request object.
 * @param {Object} req.params - The route parameters.
 * @param {string} req.params.id - The ID of the song.
 * @param {Object} res - The response object.
 */
function update(req, res) {
    const songId = req.params.id;
    res.send(`update the song with id: ${songId}`);
}

/**
 * Partially modifies an existing song by ID.
 * @function modify
 * @param {Object} req - The request object.
 * @param {Object} req.params - The route parameters.
 * @param {string} req.params.id - The ID of the song.
 * @param {Object} res - The response object.
 */
function modify(req, res) {
    const songId = req.params.id;
    res.send(`modify the song with id: ${songId}`);
}

/**
 * Deletes a song by ID.
 * @function destroy
 * @param {Object} req - The request object.
 * @param {Object} req.params - The route parameters.
 * @param {string} req.params.id - The ID of the song.
 * @param {Object} res - The response object.
 */
function destroy(req, res) {
    const songId = Number(req.params.id);
    
    const song = songsData.find(song => song.id === songId)

    if (!song){
        res.status(404);

        return res.json({
            error: "Not Found",
            message: "Song non trovata"
        })
    }

    songsData.splice(songsData.indexOf(song), 1)
    
    console.log(songsData);
    
    res.sendStatus(204)
}

module.exports = {
    index,
    show,
    create,
    update,
    modify,
    destroy
}