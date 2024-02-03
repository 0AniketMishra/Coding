// app.js
const express = require('express');
const app = express();
const cors = require('cors');
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));
const ytdl = require('ytdl-core');
const PORT = 3000;

app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello, Express!');
});




// app.get('/download', async (req, res) => {
//     try {
//         const youtubeVideoUrl = 'https://youtube.com/shorts/Wh4qiEsfDtY?si=tJYgJZsSRj6OSzl_'; // Replace with the actual YouTube video URL

//         // Get video info
//         const info = await ytdl.getInfo(youtubeVideoUrl);
//         const videoFormat = ytdl.chooseFormat(info.formats, { quality: 'highest' });

//         // Set appropriate headers for video download
//         res.setHeader('Content-Type', 'video/mp4');
//         res.setHeader('Content-Disposition', `attachment; filename="${info.title}.mp4"`);

//         // Stream the video to the client
//         ytdl(youtubeVideoUrl, { format: videoFormat })
//             .pipe(res);
//     } catch (error) {
//         console.error('Error downloading YouTube video:', error);
//         res.status(500).json({ error: 'Video download failed' });
//     }
// });


app.listen(PORT, () => {
    console.log(`Server is running, and app is listening on port ${PORT}`);
});
