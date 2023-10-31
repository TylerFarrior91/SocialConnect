const router = require('express').Router();
const courseRoutes = require('./usersRoutes');
const studentRoutes = require('./thoughtsRoutes');

router.use('/thoughts', thoughtsRoutes);
router.use('/user', studentRoutes);

module.exports = router;
