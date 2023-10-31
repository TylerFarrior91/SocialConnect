const router = require('express').Router();
const {
  getThoughts,
  getSingleStudent,
  createThoughts,
  deleteThoughts,
  addThoughts,
  removeAssignment,
} = require('../../controllers/userController');

// /api/students
router.route('/').get(getThoughts).post(createThoughts);

// /api/students/:studentId
router.route('/:userId').get(getSingleStudent).delete(deleteStudent);

// /api/students/:studentId/assignments
router.route('/:studentId/assignments').post(addAssignment);

// /api/students/:studentId/assignments/:assignmentId
router.route('/:studentId/assignments/:assignmentId').delete(removeAssignment);

module.exports = router;
