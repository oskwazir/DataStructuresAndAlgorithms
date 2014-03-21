function StudentGrades(){
	var self = this;
	self.grades = [];
}

StudentGrades.prototype = {
	constructor: StudentGrades,
	addGrade: function(grade){
		var self = this;
		if(typeof grade === 'number'){
			this.grades.push(grade);	
		} else {
			console.log("Grade must be sent as a number");
		}
		
	},
	gradeAverage: function(){
		var self = this;
		var average = 0.0;
		var total = 0;
		var i = 0;
		var numberOfGrades = self.grades.length;
		for( ; i < numberOfGrades; i++){
			total += self.grades[i];
		}
		var average = total / numberOfGrades;
		return average;
	}
}