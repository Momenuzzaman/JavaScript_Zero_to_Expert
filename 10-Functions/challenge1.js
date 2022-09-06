const poll = {
    question: "What is your favourite programming language?",
    options: ["0: JavaScript",
        "1: Python",
        "2: Rust",
        "3: C++"
    ],
    // This generates [0, 0, 0, 0]. More in the next section!
    answers: new Array(4).fill(0),
    registerNewAnswer: function () {
        answer = Number(
            prompt(`${this.options}
        ${this.options}
        ('Write option number')
        `)
        );
        console.log(answer);

        // register
        typeof answer === 'number' && answer < this.answers.length && this.answers[answer]++;
        console.log(this.answers);
    }

};
// poll.registerNewAnswer();

document.querySelector('.poll').addEventListener('click', poll.registerNewAnswer.bind(poll));