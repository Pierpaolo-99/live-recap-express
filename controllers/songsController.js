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
    res.json(songsData);
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
    const songId = req.params.id;
    res.send(`show the song with id: ${songId}`);
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
    const songId = req.params.id;
    res.send(`delete the song with id: ${songId}`);
}

module.exports = {
    index,
    show,
    create,
    update,
    modify,
    destroy
}