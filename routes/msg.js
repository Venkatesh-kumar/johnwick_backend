const express = require('express')
const router = express.Router()

const MsgController = require('../controllers/MsgController')

router.get('/',MsgController.index);
router.post('/getUserMsgs',MsgController.getUserMsgs);
router.post('/addMsg',MsgController.addMsg)
router.post('/deleteMsgs',MsgController.deleteMsgs)

module.exports = router