const express = require('express');
const router = express.Router();

// Require the controllers
const payment_controller = require('../controllers/payment');

// a simple test url to check that all of our files are communicating correctly.
router.get('/test', payment_controller.test);

router.post('/create', payment_controller.payment_create);

router.get('/:id', payment_controller.payment_details);

router.put('/:id/update', payment_controller.payment_update);

router.delete('/:id/delete', payment_controller.payment_delete);

module.exports = router;