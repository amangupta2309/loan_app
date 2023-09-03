const express = require('express');
const router = express.Router();

function getRandomToken(length) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let token = '';

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    token += characters.charAt(randomIndex);
  }

  return token;
}

router.get('/', async (req, res) => {
  await new Promise((r) => setTimeout(r, 2000));

  res.setHeader('Content-Type', 'application/json');
  const tokenId = getRandomToken(10)
  res.end(JSON.stringify({ appId: {tokenId} }));
});

module.exports = router;