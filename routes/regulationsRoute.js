const express = require('express');
const request = require('request');

const router = express.Router();


// INPUT REQUEST FROM EBAY FOR ACCOUNT DELETION
router.post('/api/v1/accountDeletion', async (req, res) => {
  try {
    console.log(req.body);
    res.status(200).json({
      status: "OK",
      data: {
        order: req.body
      }
    })
  } catch (error) {
    console.log(error);
  }
})

module.exports = router;