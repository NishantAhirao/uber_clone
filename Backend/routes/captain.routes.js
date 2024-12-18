const captainController = require('../controllers/captain.controller')
const express =require('express')
const router = express.Router();
const {body} = require('express-validator')


router.post('/register',[
    body('email').isEmail().withMessage('Invalid email'),
    body('fullname, firstname').isLength({min:3}).withMessage('First name must be atleast 3 character long'),
    body('password').isLength({min: 6}).withMessage('Password must be at least 6 character long'),
    body('vehicle.color').isLength({min: 3}).withMessage('vehicle.color must be at least 3 character long'),
    body('vehicle.plate').isLength({min: 3}).withMessage('vehicle.plate must be at least 3 character long'),
    body('vehicle.capacity').isInt({min: 1}).withMessage('vehicle.capacity must be at least 1'),
    body('vehicle.vehicleType').isIn(['car', 'motorcycle', 'auto']).withMessage(' invalid vehicle type'),

],
    captainController.registerCaptain
)

module.exports = router;









module.exports=router;