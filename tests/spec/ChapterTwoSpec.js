describe("Exercise 2.1", function() {
  	
  describe("The grade object", function () {

  	  beforeEach(function() {
		studentGrades = new StudentGrades();
	  });

	  it("should be able to store a set of grades for a student", function() {
	    expect(studentGrades.grades).toBeDefined();
	  });

	  it("should provide a way to add a new grade for a student", function() {
	  	var grade = 58;
	  	studentGrades.addGrade(grade);
	  	expect(studentGrades.grades[0]).toBe(grade);
	  });

	  it("should provide a function to display the grade average for the student", function() {
	  	studentGrades.addGrade(77);
	  	studentGrades.addGrade(94);
	  	studentGrades.addGrade(81);
	  	//Average of 77, 94 and 81 is 84
	  	expect(studentGrades.gradeAverage()).toBe(84);
	  });
  })  

});

describe("Exercise 2.2", function(){

	//requirement is not specific.
	//so lets try to store a sentence into an array as words
	//I don't know how to unit test what something displays
	//so I will return it as a sentence forwards and backwards!
	describe("The words array", function(){

		beforeEach(function(){
			var originalSentence = "the quick brown fox jumped over the lazy dog";
			words = originalSentence.split(" ");
			forwardSentence = function (array){
				var i = 0;
				var length = array.length;
				var sentence = '';
				array.forEach(function(element,index){
					if(index === length - 1){
						sentence += element;
					} else {
						sentence += element + ' ';
					}
				})
				return sentence;
			}

			reverseSentence = function (array){
				var clonedArray = array.slice(0);
				clonedArray.reverse();
				var i = 0;
				var length = clonedArray.length;
				var sentence = '';
				clonedArray.forEach(function(element,index){
					if(index === length - 1){
						sentence += element;
					} else {
						sentence += element + ' ';
					}
				})
				return sentence;
			}
		})

		it("stores a set of words", function(){
			//this could be a cheat since String.prototype.split()
			//gives us an array of words
			expect(words[0]).toBe('the');
			expect(words[words.length -1]).toBe('dog');

		});

		it("can display the contents forward", function(){
			var sentence = forwardSentence(words);
			expect(sentence).toBe('the quick brown fox jumped over the lazy dog');
		})

		it("will also displays the contents backwards", function(){
			var sentence = reverseSentence(words);
			expect(sentence).toBe('dog lazy the over jumped fox brown quick the');
		})
	})
});

describe("Exercise 2.3", function(){

	describe("The monthTemperatures object", function(){

		it('stores each week in a 2d array', function(){
			expect(true).toBe(false);
		});

		it('exposes a function to return the monthly average', function(){
			expect(true).toBe(false);
		});

		it("exposes a function to return a specific week's average", function(){
			expect(true).toBe(false);
		})

		it("exposes a function to return all of the week's averages", function(){
			expect(true).toBe(false);
		})

	})

});