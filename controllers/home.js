module.exports = {
    indexGet: (req, res) => {
        res.render('home/index');
    },
    indexPost: (req, res) => {

        let question = req.body['question'];

        let answers = ['Да', 'Не', 'Определено не', 'По-добре да не ти казвам',
            'Не искаш да знаеш', 'Със сигурност', 'Определено да', 'Не съм сигурен',
            'Попитай друг път', 'Не разчитай на това', '100% да', 'По-скоро не', 'По-скоро да', '100% не' ];

        let position = Math.ceil(Math.random() * answers.length);

        if(question.charAt(question.length - 1) !== '?' && question.length > 0) {
            question += "?";
        }
        res.render('home/index', {'question': question, 'answer': answers[position]})
    }
};