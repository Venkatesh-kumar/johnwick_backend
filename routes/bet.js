const express = require('express')
const router = express.Router()

const BetController = require('../controllers/BetController')

router.get('/',BetController.index);
router.post('/getBet',BetController.getBet);
router.post('/addBet',BetController.addBet)
router.post('/updateBet',BetController.updateBet)
router.post('/deleteBet',BetController.deleteBet)
router.post('/getMatchBets',BetController.getMatchBets)

module.exports = router