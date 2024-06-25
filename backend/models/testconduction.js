// src/models/testconduction.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// User Schema

const userSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    roles: {
        isMember: { type: Boolean, default: false },
        isMentor: { type: Boolean, default: false }
    },
    verifiedByAdmin: { type: Boolean, default: false } // Admin verification flag
}, { timestamps: true });


// Test Schema
const testSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String },
    createdBy: { type: Number, required: true }
}, { timestamps: true });

// Question Schema
const questionSchema = new Schema({
    test: { type: Schema.Types.ObjectId, ref: 'Test', required: true },
    questionText: { type: String, required: true },
    questionType: { type: String, enum: ['multipleChoice', 'shortAnswer', 'longText'], required: true },
    options: [{ type: Schema.Types.ObjectId, ref: 'Option' }]
}, { timestamps: true });

// Option Schema
const optionSchema = new Schema({
    question: { type: Schema.Types.ObjectId, ref: 'Question', required: true },
    optionText: { type: String, required: true }
}, { timestamps: true });

// Response Schema
const responseSchema = new Schema({
    test: { type: Schema.Types.ObjectId, ref: 'Test', required: true },
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    answers: [{
        question: { type: Schema.Types.ObjectId, ref: 'Question', required: true },
        answerText: { type: String },
        selectedOption: { type: Schema.Types.ObjectId, ref: 'Option' }
    }]
}, { timestamps: true });

const User = mongoose.model('User', userSchema);
const Test = mongoose.model('Test', testSchema);
const Question = mongoose.model('Question', questionSchema);
const Option = mongoose.model('Option', optionSchema);
const Response = mongoose.model('Response', responseSchema);

module.exports = { User, Test, Question, Option, Response };
