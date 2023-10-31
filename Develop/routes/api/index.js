const router = require('express').Router();
const courseRoutes = require('./usersRoutes');
const studentRoutes = require('./thoughtsRoutes');

router.use('/courses', courseRoutes);
router.use('/students', studentRoutes);

module.exports = router;
