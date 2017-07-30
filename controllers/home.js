const Answer = require('../models/Calculator');

module.exports = {
    indexGet: (req, res) => {
        res.render('home/index');
    },
    indexPost: (req, res) => {

        let question = req.body['question'];

        let answer = Answer();

        let position = Math.ceil(Math.random() * 15);

        res.render('home/index', {'question': question + '?', 'answer': answer[position]})
    }
};