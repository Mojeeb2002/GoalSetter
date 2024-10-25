const mongoose = require('mongoose');

const goalSchema = mongoose.Schema(
    {
    text: {
        type: String,
        required: [true, 'Please ass a text value'],
        },
    }, 
    {
        Timestamp: true,
    }

);

module.exports = mongoose.model('Goal', goalSchema);