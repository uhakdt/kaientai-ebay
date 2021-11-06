const express = require('express');
const request = require('request');
const crypto = require('crypto');

const router = express.Router();


// INPUT REQUEST FROM EBAY FOR ACCOUNT DELETION
router.get('/api/v1/accountDeletion', async (req, res) => {
  try {
    const challengeCode = req.query.challenge_code;
    const verificationToken = "FFEdv6JHpk1KEuNZma8Tr2910606jYtB";
    const endpoint = "https://kaientai-ebay.herokuapp.com/api/v1/accountDeletion";

    const hash = crypto.createHash('sha256');
    hash.update(challengeCode);
    hash.update(verificationToken);
    hash.update(endpoint);
    const responseHash = hash.digest('hex');
    const challengeResponse = new Buffer.from(responseHash).toString();

    if(challengeCode != null){
      res.status(200).json({
        challengeResponse: challengeResponse
      });
    } else {
      res.status(200);
    }

  } catch (error) {
    console.log(error);
  }
})

// SEND TEST NOTIFICATION FROM EBAY FOR ACCOUNT DELETION
router.post('/api/v1/accountDeletion', async (req, res) => {
  try {
    if(req.body != null && req.body.topic === 'MARKETPLACE_ACCOUNT_DELETION') {
      res.status(200);
    } else {
      res.status(500).json({
        status: "Not sure what happened."
      })
    }
  } catch (error) {
    console.log(error);
  }
})

module.exports = router;