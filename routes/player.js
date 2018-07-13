const express = require('express');
const router = express.Router();

// Require the controllers
const player_controller = require('../controllers/player');

// a simple test url to check that all of our files are communicating correctly.
router.get('/test', player_controller.test);

router.post('/create', player_controller.player_create);

router.get('/:id', player_controller.player_details);

router.put('/:id/update', player_controller.player_update);

router.delete('/:id/delete', player_controller.player_delete);

module.exports = router;