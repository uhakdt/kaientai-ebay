const express = require('express');
const request = require('request');
const crypto = require('crypto');

const router = express.Router();


// INPUT REQUEST FROM EBAY FOR ACCOUNT DELETION
router.get('/api/v1/accountDeletion', async (req, res) => {
  try {
    console.log(req.query.challenge_code);
    console.log(req.body)
    console.log(req.params)
    console.log(req.query)

    // const hash = createHash('sha256');
    // hash.update(challengeCode);
    // hash.update(verificationToken);
    // hash.update(endpoint);
    // const responseHash = hash.digest('hex');
    // const challengeResponse = new Buffer.from(responseHash).toString();

    res.status(200).json({
      challengeRsponse: challengeResponse
    })
  } catch (error) {
    console.log(error);
  }
})

module.exports = router;