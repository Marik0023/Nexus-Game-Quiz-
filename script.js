const quizDataTest1 = [
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

const quizDataTest2 = [
    {
        question: "What class of computations is the main focus of Nexus L1?",
        options: [
            "Only financial transactions",
            "Arbitrary Turing-complete computations",
            "Only machine learning",
            "Only static websites"
        ],
        answer: 1,
        level: "easy"
    },
    {
        question: "How does Nexus differ from traditional blockchains in its approach to trust?",
        options: [
            "Uses centralized guarantees",
            "Replaces trust with mathematical proofs",
            "Requires user identification",
            "Doesn't require any computations"
        ],
        answer: 1,
        level: "easy"
    },
    {
        question: "What type of network does Nexus use to achieve global scale?",
        options: [
            "Hierarchical node structure",
            "Decentralized homogeneous network",
            "Federated clusters",
            "Mobile mesh networks"
        ],
        answer: 1,
        level: "easy"
    },
    {
        question: "How does Nexus define 'practical decentralization'?",
        options: [
            "By the number of tokens in the fund",
            "By the ability to participate on ordinary devices",
            "By having regulatory licenses",
            "By the number of transactions per second"
        ],
        answer: 1,
        level: "easy"
    },
    {
        question: "What is key to global verification in Nexus?",
        options: [
            "Geographic location of servers",
            "Shared computing proof infrastructure",
            "Availability of quantum computers",
            "Use of centralized APIs"
        ],
        answer: 1,
        level: "easy"
    },
    {
        question: "What computation paradigm does Nexus implement?",
        options: [
            "Exclusively off-chain computing",
            "Hybrid stateful/stateless computations",
            "Only batch processing",
            "Analog computing"
        ],
        answer: 1,
        level: "medium"
    },
    {
        question: "How does Nexus handle complex computational workflows?",
        options: [
            "Uses fixed templates",
            "Allows composition of arbitrary programs",
            "Limits call depth",
            "Requires manual optimization"
        ],
        answer: 1,
        level: "medium"
    },
    {
        question: "Why does Nexus consider its VM unique?",
        options: [
            "Because it supports only one language toolkit",
            "Execution time doesn't depend on computation complexity",
            "Uses unfalsifiable identifiers",
            "Works only with 8-bit numbers"
        ],
        answer: 1,
        level: "medium"
    },
    {
        question: "How does Nexus ensure compatibility with existing systems?",
        options: [
            "Requires complete code rewrites",
            "Through emulation of different ISAs and compilation",
            "Only for Rust programs",
            "Through a single proprietary interface"
        ],
        answer: 1,
        level: "medium"
    },
    {
        question: "What approach is used for proof optimization?",
        options: [
            "Increasing the size of each proof",
            "Recursive composition and aggregation",
            "Using only CPU computations",
            "Limiting the number of operations"
        ],
        answer: 1,
        level: "medium"
    },
    {
        question: "How are network participants rewarded?",
        options: [
            "Fixed daily rate",
            "For contributing computational resources",
            "Only through token staking",
            "Exclusively for content publication"
        ],
        answer: 1,
        level: "hard"
    },
    {
        question: "What equipment is needed to participate in the network?",
        options: [
            "Specialized ASICs",
            "Any devices with computing power",
            "Quantum computers",
            "Water-cooled servers"
        ],
        answer: 1,
        level: "hard"
    },
    {
        question: "How does Nexus prevent centralization?",
        options: [
            "By limiting the number of nodes",
            "Algorithmic incentives for distribution",
            "Using geo-fencing",
            "Banning professional equipment"
        ],
        answer: 1,
        level: "hard"
    },
    {
        question: "How does the system balance between speed and decentralization?",
        options: [
            "Sacrifices speed for full decentralization",
            "Uses adaptive scaling mechanisms",
            "Works only in local networks",
            "Limits the number of transactions"
        ],
        answer: 1,
        level: "hard"
    },
    {
        question: "What role do 'coprocessors' play in the architecture?",
        options: [
            "Duplicate main computations",
            "Accelerate specialized operations",
            "Replace the main VM",
            "Used only for testing"
        ],
        answer: 1,
        level: "hard"
    }
];

// Shuffle options for Test #2 while maintaining correct answers
quizDataTest2.forEach(question => {
    const correctAnswer = question.options[question.answer];
    // Shuffle options
    for (let i = question.options.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [question.options[i], question.options[j]] = [question.options[j], question.options[i]];
    }
    // Update answer index after shuffle
    question.answer = question.options.indexOf(correctAnswer);
});

document.addEventListener('DOMContentLoaded', function() {
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
    const test1Btn = document.getElementById('test1Btn');
    const test2Btn = document.getElementById('test2Btn');
    
    let currentQuestionIndex = 0;
    let score = 0;
    let selectedOption = null;
    let answerChecked = false;
    let currentQuizData = quizDataTest1;
    
    function initQuiz() {
        currentQuestionIndex = 0;
        score = 0;
        selectedOption = null;
        answerChecked = false;
        
        quizContainer.style.display = 'block';
        resultContainer.style.display = 'none';
        
        loadQuestion();
    }
    
    function loadQuestion() {
        answerChecked = false;
        resetState();
        const currentQuestion = currentQuizData[currentQuestionIndex];
        
        questionElement.textContent = currentQuestion.question;
        currentQuestion.options.forEach((option, index) => {
            optionElements[index].textContent = option;
            optionElements[index].classList.remove('correct', 'incorrect', 'disabled', 'selected');
            optionElements[index].addEventListener('click', selectOption);
        });
        
        updateProgress();
    }
    
    function updateProgress() {
        progressBar.style.width = `${((currentQuestionIndex + 1) / currentQuizData.length) * 100}%`;
        scoreElement.textContent = score;
        questionCountElement.textContent = `${currentQuestionIndex + 1}/${currentQuizData.length}`;
        levelElement.textContent = currentQuizData[currentQuestionIndex].level.charAt(0).toUpperCase() + currentQuizData[currentQuestionIndex].level.slice(1);
    }
    
    function resetState() {
        selectedOption = null;
        nextButton.disabled = true;
        nextButton.textContent = 'Continue';
        optionElements.forEach(option => option.classList.remove('selected'));
    }
    
    function selectOption(e) {
        if (answerChecked) return;
        
        selectedOption = optionElements.indexOf(e.target);
        optionElements.forEach(option => option.classList.remove('selected'));
        e.target.classList.add('selected');
        nextButton.disabled = false;
    }
    
    function checkAnswer() {
        if (answerChecked || selectedOption === null) return;
        
        answerChecked = true;
        const correctIndex = currentQuizData[currentQuestionIndex].answer;
        
        optionElements.forEach(option => option.removeEventListener('click', selectOption));
        
        optionElements.forEach((option, index) => {
            if (index === correctIndex) {
                option.classList.add('correct');
            } else if (index === selectedOption) {
                option.classList.add('incorrect');
            }
        });
        
        if (selectedOption === correctIndex) {
            score++;
            scoreElement.textContent = score;
        }
        
        currentQuestionIndex++;
        nextButton.textContent = currentQuestionIndex < currentQuizData.length ? 'Next Question' : 'See Results';
    }
    
    function showResults() {
        quizContainer.style.display = 'none';
        resultContainer.style.display = 'block';
        finalScoreElement.textContent = `Your score: ${score}/${currentQuizData.length}`;
    }
    
    nextButton.addEventListener('click', () => {
        if (!answerChecked) {
            checkAnswer();
        } else {
            if (currentQuestionIndex < currentQuizData.length) {
                loadQuestion();
            } else {
                showResults();
            }
        }
    });
    
    restartButton.addEventListener('click', initQuiz);
    
    test1Btn.addEventListener('click', () => {
        currentQuizData = quizDataTest1;
        test1Btn.classList.add('active');
        test2Btn.classList.remove('active');
        initQuiz();
    });
    
    test2Btn.addEventListener('click', () => {
        currentQuizData = quizDataTest2;
        test2Btn.classList.add('active');
        test1Btn.classList.remove('active');
        initQuiz();
    });
    
    initQuiz();
});
