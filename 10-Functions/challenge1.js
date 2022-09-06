const poll = {
    question: "What is your favourite programming language?",
    options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
    // This generates [0, 0, 0, 0]. More in the next section!
    answers: new Array(4).fill(0),
    registerNewAnswer: function () {
        answers = Number(
            prompt(`${this.options}
        ${this.options}
        ('Write option number')
        `)
        );
        console.log(answers);
    }
};
poll.registerNewAnswer();