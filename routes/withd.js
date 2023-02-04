const express = require('express')
const router = express.Router()

const WithdController = require('../controllers/WithdController')

router.get('/',WithdController.index);
router.get('/getOpenWithds',WithdController.getOpenWithds);
router.post('/addWithd',WithdController.addWithd)
router.post('/updateWithd',WithdController.updateWithd)

module.exports = router