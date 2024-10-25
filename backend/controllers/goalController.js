const aysncHandler = require('express-async-handler');

//Desc Get all goals
//Route GET /api/goals
//Access Privet
const getGoals = aysncHandler(async (req, res) => {
    res.status(200).json({ message: 'Get goals' });
});

//Desc Create new goals
//Route POST /api/goals
//Access Privet
const createGoal = aysncHandler(async (req, res) => {
    if (!req.body.text) {
        res.status(400);
        throw new Error('Please add a text field!');
    };
    res.status(200).json({ message: 'Set Goals' });
});

//Desc Update singel goal
//Route PUT /api/goals/:id
//Access Privet
const updateGoal = aysncHandler(async (req, res) => {
    res.status(200).json({ message: `Update goal ${req.params.id}` });
});

//Desc delete singel goal
//Route DELETE /api/goals/:id
//Access Privet
const deleteGoal = aysncHandler(async (req, res) => {
    res.status(200).json({ message: `Delete Goal ${req.params.id}` });
});



module.exports = {
    getGoals,
    createGoal,
    updateGoal,
    deleteGoal
};