const router = require('express').Router();
const {
  getThoughts,
  getSingleThoughts,
  createThoughts,
  deleteThoughts,
  addReaction,
  removeReaction,
} = require('../../controllers/userController');


router.route('/').get(getThoughts).post(createThoughts);


router.route('/:userId').get(getSingleThoughts).delete(deleteThoughts);


router.route('/:thoughtId/reactions').post(addReaction);


router.route('/:thoughtId/reaction/:reactionId').delete(removeReaction);

module.exports = router;
