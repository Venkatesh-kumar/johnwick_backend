const express = require('express')
const router = express.Router()

const UserController = require('../controllers/UserController')

router.get('/',UserController.index);
router.post('/getUser',UserController.getUser);
router.post('/addUser',UserController.addUser)
router.post('/updateWallet',UserController.updateWallet)
router.post('/updatePassword',UserController.updatePassword)
router.post('/deleteUser',UserController.deleteUser)

module.exports = router