const express = require('express');
const router = express.Router();
const { getGoals, createGoal, updateGoal, deleteGoal } = require('../controllers/goalController');
const { loginRequired } = require('../middleware/authMiddleware');



router.get('/', loginRequired, getGoals);
router.post('/', loginRequired, createGoal);
router.put('/:id', loginRequired, updateGoal);
router.delete('/:id', loginRequired, deleteGoal);



module.exports = router;