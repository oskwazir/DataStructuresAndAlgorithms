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
