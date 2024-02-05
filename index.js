// app.js
const express = require('express');
const app = express();
const cors = require('cors');
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));
const bodyParser = require('body-parser');
const ytdl = require('ytdl-core');
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json())
app.get('/', (req, res) => {
    res.send('Hello, Express!');
});




app.listen(PORT, () => {
    console.log(`Server is running, and app is listening on port ${PORT}`);
});


app.post('/download', async (req, res) => {
    const {  url } = req.body;

  
    try {
        const youtubeVideoUrl = url
        // Get video info
        const info = await ytdl.getInfo(youtubeVideoUrl);
        const videoFormat = ytdl.chooseFormat(info.formats, { quality: 'highest' });

        // Set appropriate headers for video download
        res.setHeader('Content-Type', 'video/mp4');
        res.setHeader('Content-Disposition', `attachment; filename="${info.title}.mp4"`);

        // Stream the video to the client
        ytdl(youtubeVideoUrl, { format: videoFormat })
            .pipe(res);
    } catch (error) {
        console.error('Error downloading YouTube video:', error);
        res.status(500).json({ error: 'Video download failed' });
    }
});
