const asyncHandler = require('express-async-handler');
const Goal = require('../model/goalModel');
const User = require('../model/userModel');

//Desc Get all goals
//Route GET /api/goals
//Access Privet
const getGoals = asyncHandler(async (req, res) => {
    const goals = await Goal.find({ user: req.user.id })

    res.status(200).json(goals);
});

//Desc Create new goals
//Route POST /api/goals
//Access Privet
const createGoal = asyncHandler(async (req, res) => {
    if (!req.body.text) {
        res.status(400);
        throw new Error('Please add a text field!');
    };

    const goal = await Goal.create({
        text: req.body.text,
        user: req.user.id
    });

    res.status(200).json(goal);
});

//Desc Update singel goal
//Route PUT /api/goals/:id
//Access Privet
const updateGoal = asyncHandler(async (req, res) => {
    const goal = await Goal.findById(req.params.id);

    if(!goal){
        res.status(404);
        throw new Error('Goal not found');
    };


    // Check user
    if(!req.user) {
        res.status(401);
        throw new Error('User not fond');
    };

    // Chech if it's goal's user
    if(goal.user.toString() !== req.user.id) {
        res.status(401);
        throw new Error('User not authorized');
    };


    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    });

    res.status(200).json(updatedGoal);
});

//Desc delete singel goal
//Route DELETE /api/goals/:id
//Access Privet
const deleteGoal = asyncHandler(async (req, res) => {
    const goal = await Goal.findById(req.params.id);

    if(!goal) {
        res.status(404);
        throw new Error(`Goal with id: ${req.params.id} Nof found`);
    };


    // Check user
    if (!req.user) {
        res.status(401);
        throw new Error('User not fond');
    };

    // Chech if it's goal's user
    if (goal.user.toString() !== req.user.id) {
        res.status(401);
        throw new Error('User not authorized');
    };


    await goal.deleteOne();
    res.status(200).json({ message: `Goal with id: (${req.params.id}) has been deleted` });
});



module.exports = {
    getGoals,
    createGoal,
    updateGoal,
    deleteGoal
};