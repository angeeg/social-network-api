const router = require('express').Router();
const {
    getAllThoughts,
    getThoughtById,
    addThought,
    updateThought,
    removeThought
  } = require('../../controllers/thought-controller');


// /api/thoughts/<userId>
router
.route('/')
.get(getAllThoughts)

router
.route('/:id')
.get(getThoughtById)
.put(updateThought)

router
.route('/:userId')
.post(addThought);


// /api/thoughts/<userId>/<thoughtId>
router
.route('/:userId/:thoughtId')

.delete(removeThought);


module.exports = router;