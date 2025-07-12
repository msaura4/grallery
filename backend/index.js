const express = require('express');
const cors = require('cors');
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const app = express();
const PORT = 3001;


app.use(cors());

// Helper: Get random integers
function getRandomInts(count, max) {
  const set = new Set();
  while (set.size < count) {
    set.add(Math.floor(Math.random() * max) + 1);
  }
  return Array.from(set);
}

app.get('/', (req, res) => {
  res.send('Backend is running!');
});

// Endpoint: Get random artworks
app.get('/api/random-artworks', async (req, res) => {
  try {
    const objectsRes = await fetch('https://collectionapi.metmuseum.org/public/collection/v1/objects');
    const objectsData = await objectsRes.json();
    console.log('Fetched objectIDs:', objectsData.objectIDs && objectsData.objectIDs.length);
    const allIds = objectsData.objectIDs;
    if (!allIds) {
      console.error('No objectIDs found:', objectsData);
      return res.status(500).json({ error: 'Could not fetch artwork IDs' });
    }

    const randomIds = getRandomInts(8, allIds.length).map(i => allIds[i]);
    console.log('Random IDs:', randomIds);

    const artworkPromises = randomIds.map(async id => {
      try {
        const r = await fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`);
        return await r.json();
      } catch (e) {
        console.error('Error fetching artwork', id, e);
        return null;
      }
    });
    const artworks = await Promise.all(artworkPromises);

    const formatted = artworks
      .filter(a => a && a.primaryImageSmall)
      .map(a => ({
        id: a.objectID,
        title: a.title,
        artist: a.artistDisplayName,
        year: a.objectDate,
        image: a.primaryImageSmall,
      }));

    console.log('Returning artworks:', formatted.length);
    res.json(formatted);
  } catch (err) {
    console.error('Failed to fetch artworks:', err);
    res.status(500).json({ error: 'Failed to fetch artworks' });
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
