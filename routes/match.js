const express = require('express')
const router = express.Router()

const MatchController = require('../controllers/MatchController')

router.get('/',MatchController.index);
router.post('/getMatch',MatchController.getMatch);
router.post('/addMatch',MatchController.addMatch)
router.post('/updateMatch',MatchController.updateMatch)
router.post('/deleteMatch',MatchController.deleteMatch)

module.exports = router