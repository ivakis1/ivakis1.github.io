module.exports = {
    indexGet: (req, res) => {
        res.render('home/index');
    },
    indexPost: (req, res) => {

        let question = req.body['question'];
        console.log('wfwef');
        let answers = ['Да', 'Не', 'Определено не', 'По-добре да не ти казвам',
            'Не искаш да знаеш', 'Със сигурност', 'Определено да', 'Не съм сигурен',
            'Попитай друг път', 'Не разчитай на това', '100%', 'Не изглежда добре'];

        let position = Math.ceil(Math.random() * answers.length);

        if(question.charAt(question.length - 1) !== '?') {
            question += "?";
        }
        res.render('home/index', {'question': question, 'answer': answers[position]})
    }
};