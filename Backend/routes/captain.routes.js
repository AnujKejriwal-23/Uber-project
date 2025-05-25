const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const captainController = require('../controllers/captain.controller');
const authMiddleware = require('../middlewares/auth.middleware');  


router.post('/register',[
  body('email').isEmail().withMessage('Invalid Email'),
  body('fullname.firstname').isLength({min: 3}).withMessage('First name must contain at least 3 characters'),
  body('fullname.lastname').optional().isLength({min: 3}).withMessage('Last name must contain at least 3 characters'),
  body('password').isLength({min: 6}).withMessage('Password must be at least 6 characters long'),
  body('vehicle.color').notEmpty().withMessage('Vehicle color is required'),
  body('vehicle.plate').isLength({min: 6}).withMessage('Plate number must be at least 6 characters'),
  body('vehicle.capacity').isInt({min: 1}).withMessage('Capacity must be at least 1'),
  body('vehicle.vehicleType').isIn(['car', 'bike', 'auto']).withMessage('Vehicle type must be one of car, bike, or auto')
],captainController.registerCaptain);

router.post('/login', [
  body('email').isEmail().withMessage('Invalid Email'),
  body('password').isLength({min: 6}).withMessage('Password must be at least 6 characters long')
], captainController.loginCaptain);

router.get('/profile', authMiddleware.authCaptain, captainController.getCaptainProfile);

router.get('/logout', authMiddleware.authCaptain, captainController.logoutCaptain);

module.exports = router;