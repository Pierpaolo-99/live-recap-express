const express = require('express');
const app = express();
const port = 3001;
const songsRoutes = require('./routes/songsRoutes')
const serverError = require('./middlewares/server_error')
const error_404 = require('./middlewares/not_found')

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});

app.use(express.json());
app.use(express.static('public'));

app.get('/', (req,res) => {
    //throw new Error('server error')
    res.send('Welcome to Music Server!');
});

app.use('/api/v1/music', songsRoutes);

app.use(serverError)
app.use(error_404)
