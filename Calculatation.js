function calculateGradeFromNumber() {
    var gradesInput = document.getElementById('grades').value;
    var grades = gradesInput.split(',');
    var totalGradePoints = 0;
    var totalCredits = grades.length;
    var resultText = '';

    for (var i = 0; i < grades.length; i++) {
        var grade = parseFloat(grades[i].trim());
        var gradePoint = calculateGradePoint(grade);
        totalGradePoints += gradePoint;
        var letterGrade = calculateLetterGrade(grade);
        resultText += '# For Number - ' + grade + '<br>' + '# Grade Point is - ' + gradePoint + '<br>' +' # Grade is - ' + letterGrade + '<br>';
    }

    var cgpa = totalGradePoints / totalCredits;
    resultText += '<br>Your CGPA is: ' + cgpa.toFixed(2);

    var resultElement = document.getElementById('result');
    resultElement.innerHTML = resultText;
}

function calculateGradePoint(grade) {
    if (grade > 100) {
        return "!! Invalid Number !!";
    }
    if (grade >= 80) {
        return 4.0;
    } else if (grade >= 75) {
        return 3.75;
    } else if (grade >= 70) {
        return 3.50;
    } else if (grade >= 65) {
        return 3.25;
    } else if (grade >= 60) {
        return 3.00;
    } else if (grade >= 55) {
        return 2.75;
    } else if (grade >= 50) {
        return 2.50;
    } else if (grade >= 45) {
        return 2.25;
    } else if (grade >= 40) {
        return 2.00;
    } else if (grade < 40) {
        return 0.0;
    } else {
        return "!! Invalid Number !!";
    }
}

function calculateLetterGrade(grade) {
    if (grade > 100) {
        return 'Imvalide Number';
    } else
    if (grade >= 80) {
        return 'A+';
    } else if (grade >= 75) {
        return 'A';
    } else if (grade >= 70) {
        return 'A-';
    } else if (grade >= 65) {
        return 'B+';
    } else if (grade >= 60) {
        return 'B';
    } else if (grade >= 55) {
        return 'B-';
    } else if (grade >= 50) {
        return 'C+';
    } else if (grade >= 45) {
        return 'C';
    } else if (grade >= 40) {
        return 'D';
    } else if (grade < 40) {
        return 'F';
    } else {
        return 'Invalid Number';
    }
}
