const difficulty = {
    easy: {
        words : ['cat', 'dog', 'rat', 'bat', 'hat', 'mat','turtle','apple','banana','orange'],
        maxincorrect: 10
    },
    medium: {
        words : ['elephant', 'giraffe', 'kangaroo','aligator','cheetah','penguin','dolphin','flamingo','gorilla'],
        maxincorrect: 8
    },
    hard: {
        words : ['hippopotamus', 'rhinoceros', 'crocodile','orangutan','chimpanzee','platypus','toucan','squirrel','octopus'],
        maxincorrect: 6
    }
};

function start(){
    //set constants
    const selectedDifficulty = document.getElementById('difficulty').value;
    const {words , maxincorrect} = difficulty[selectedDifficulty];
    const selectedWord = words[Math.floor(Math.random() * words.length)];
    //set variables

    let guessed = [];
    let incorrectguesses = 0;
    
}