function LettersToWord() {
    var self = this;
    self.letters = [];
}

LettersToWord.prototype = {
    constructor: LettersToWord,
    addLetter: function(character){
        var self = this;
        validLetters = /^[A-Za-z]+$/;
        if(character.match(validLetters)) {  
            self.letters.push(character)  
        } else  {
            console.error('Please input letters only');  
        }  
    },
    concatLetters: function(){
        var self = this;
        var i = 0;
        var length = self.letters.length;
        var word = '';
        for(; i < length; i++){
            word += self.letters[i];
        }

        return word;
    }
}