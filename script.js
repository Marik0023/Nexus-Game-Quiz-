// Quiz data
const quizData = [
    // Easy questions
    {
        question: "What is the main goal of the Nexus project?",
        options: [
            "Create a new cryptocurrency",
            "To make verified computing practical and scalable",
            "Develop artificial intelligence",
            "Build the fastest supercomputer"
        ],
        answer: 1,
        level: "easy"
    },
    {
        question: "What is Nexus zkVM?",
        options: [
            "A virtual machine for mining",
            "A system for anonymous surfing",
            "A virtual machine that generates evidence of the correct execution of programs",
            "A tool for testing internet speed"
        ],
        answer: 2,
        level: "easy"
    },
    {
        question: "What computations can Nexus zkVM prove?",
        options: [
            "Only simple mathematical operations",
            "Only blockchain transactions",
            "Any computation, including 1B+ CPU cycles",
            "Only computations related to artificial intelligence"
        ],
        answer: 2,
        level: "easy"
    },
    {
        question: "What technology enables Nexus zkVM to efficiently prove big computations?",
        options: [
            "Quantum computing",
            "Recursive proof systems and parallel generation",
            "Cloud data storage",
            "Centralised servers"
        ],
        answer: 1,
        level: "easy"
    },
    {
        question: "Which programming language does Nexus zkVM support initially?",
        options: [
            "Python",
            "JavaScript",
            "Rust",
            "Solidity"
        ],
        answer: 2,
        level: "easy"
    },
    // Medium questions
    {
        question: "What is NVM (Nexus Virtual Machine)?",
        options: [
            "A virtual machine for running Windows",
            "A minimalist virtual architecture optimised for computing excellence",
            "A system for video games",
            "Network protocol for data transfer"
        ],
        answer: 1,
        level: "medium"
    },
    {
        question: "How does Nexus Network improve scalability?",
        options: [
            "By using a centralised server",
            "Through a distributed proof network and parallel generation of proofs",
            "By using quantum computing",
            "By limiting the number of calculations"
        ],
        answer: 1,
        level: "medium"
    },
    {
        question: "What is IVC (Incrementally Verifiable Computation)?",
        options: [
            "A method for optimising graphics in games",
            "A system for anonymous transactions",
            "The concept of gradual verification of computations",
            "Data compression algorithm"
        ],
        answer: 2,
        level: "medium"
    },
    {
        question: "Which ISA (Instruction Set Architecture) can be emulated in NVM?",
        options: [
            "Only x86",
            "Only EVM",
            "Any, for example, RISC-V, EVM, Wasm",
            "None, only its own instruction set"
        ],
        answer: 2,
        level: "medium"
    },
    {
        question: "How does the Nexus zkVM achieve high performance in proof-of-concept computing?",
        options: [
            "By using only CPU",
            "Through zkVM coprocessors and an optimised NVM instruction set",
            "By reducing the size of proofs to zero",
            "By using only one thread of computation"
        ],
        answer: 1,
        level: "medium"
    },
    // Hard questions
    {
        question: "What is Proof-Carrying Data (PCD)?",
        options: [
            "A method of data encryption",
            "A generalisation of the IVC concept that allows evidence to be transferred along with data",
            "File compression algorithm",
            "A system for analysing big data"
        ],
        answer: 1,
        level: "hard"
    },
    {
        question: "How does Nexus zkVM handle large computations (e.g. 1B+ CPU cycles)?",
        options: [
            "By using only one thread of computation",
            "Through massively parallelised incremental proofs",
            "By ignoring some of the calculations",
            "By using quantum algorithms"
        ],
        answer: 1,
        level: "hard"
    },
    {
        question: "What role do zkVM coprocessors play in Nexus zkVM?",
        options: [
            "They replace the underlying NVM architecture",
            "They provide ASIC-like performance for certain instructions",
            "They are only used for testing purposes",
            "They slow down the system to improve security"
        ],
        answer: 1,
        level: "hard"
    },
    {
        question: "How is Nexus zkVM different from traditional virtual machines (e.g. EVMs)?",
        options: [
            "It does not support Turing-complete computing",
            "It generates evidence of correct execution of programs",
            "It works only in centralised systems",
            "It does not support any ISAs"
        ],
        answer: 1,
        level: "hard"
    },
    {
        question: "How does Nexus Network use 'SNARKless recursion'?",
        options: [
            "To reduce the size of evidence to zero",
            "To eliminate the need for proofs",
            "For unlimited recursion and aggregation of evidence",
            "To accelerate quantum computing"
        ],
        answer: 2,
        level: "hard"
    }
];

document.addEventListener('DOMContentLoaded', function() {
    // DOM elements
    const questionElement = document.getElementById('question');
    const optionElements = [
        document.getElementById('option1'),
        document.getElementById('option2'),
        document.getElementById('option3'),
        document.getElementById('option4')
    ];
    const nextButton = document.getElementById('nextBtn');
    const progressBar = document.getElementById('progressBar');
    const scoreElement = document.querySelector('#score span');
    const levelElement = document.querySelector('#level span');
    const questionCountElement = document.querySelector('#questionCount span');
    const quizContainer = document.getElementById('quiz');
    const resultContainer = document.getElementById('result');
    const finalScoreElement = document.getElementById('finalScore');
    const restartButton = document.getElementById('restartBtn');
    
    // Quiz state
    let currentQuestionIndex = 0;
    let score = 0;
    let selectedOption = null;
    let answerChecked = false;
    
    // Initialize quiz
    function initQuiz() {
        currentQuestionIndex = 0;
        score = 0;
        selectedOption = null;
        answerChecked = false;
        
        quizContainer.style.display = 'block';
        resultContainer.style.display = 'none';
        
        loadQuestion();
    }
    
    // Load question
    function loadQuestion() {
        answerChecked = false;
        resetState();
        const currentQuestion = quizData[currentQuestionIndex];
        
        questionElement.textContent = currentQuestion.question;
        currentQuestion.options.forEach((option, index) => {
            optionElements[index].textContent = option;
            optionElements[index].classList.remove('correct', 'incorrect', 'disabled', 'selected');
            optionElements[index].addEventListener('click', selectOption);
        });
        
        progressBar.style.width = `${((currentQuestionIndex + 1) / quizData.length) * 100}%`;
        scoreElement.textContent = score;
        questionCountElement.textContent = `${currentQuestionIndex + 1}/${quizData.length}`;
        levelElement.textContent = currentQuestion.level.charAt(0).toUpperCase() + currentQuestion.level.slice(1);
        
        nextButton.disabled = true;
        nextButton.textContent = 'Continue';
    }
    
    // Reset question state
    function resetState() {
        selectedOption = null;
        nextButton.disabled = true;
        optionElements.forEach(option => {
            option.classList.remove('selected');
        });
    }
    
    // Select option
    function selectOption(e) {
        if (answerChecked) return;
        
        const selectedElement = e.target;
        selectedOption = optionElements.indexOf(selectedElement);
        
        optionElements.forEach(option => {
            option.classList.remove('selected');
        });
        selectedElement.classList.add('selected');
        
        nextButton.disabled = false;
    }
    
    // Check answer
    function checkAnswer() {
        if (selectedOption === null || answerChecked) return;
        
        answerChecked = true;
        const currentQuestion = quizData[currentQuestionIndex];
        const correctIndex = currentQuestion.answer;
        
        optionElements.forEach(option => {
            option.removeEventListener('click', selectOption);
        });
        
        optionElements.forEach((option, index) => {
            if (index === correctIndex) {
                option.classList.add('correct');
            } else if (index === selectedOption && index !== correctIndex) {
                option.classList.add('incorrect');
            }
        });
        
        if (selectedOption === correctIndex) {
            score++;
            scoreElement.textContent = score;
        }
        
        currentQuestionIndex++;
        if (currentQuestionIndex < quizData.length) {
            nextButton.textContent = 'Next Question';
        } else {
            nextButton.textContent = 'See Results';
        }
    }
    
    // Show results
    function showResults() {
        quizContainer.style.display = 'none';
        resultContainer.style.display = 'block';
        finalScoreElement.textContent = `Your score: ${score}/${quizData.length}`;
    }
    
    // Event listeners
    nextButton.addEventListener('click', () => {
        if (!answerChecked) {
            checkAnswer();
        } else {
            if (currentQuestionIndex < quizData.length) {
                loadQuestion();
            } else {
                showResults();
            }
        }
    });
    
    restartButton.addEventListener('click', initQuiz);
    
    // Start quiz
    initQuiz();
});