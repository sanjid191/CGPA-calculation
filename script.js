function navigateTo(page) {
    window.location.href = page;
}


// Semester GPA Calculation starts here

let courses = [];
let subjectNumber = 1;

function addCourse() {
    const courseName = document.getElementById("course-name").value;
    const marks = parseInt(document.getElementById("marks").value);
    const credits = parseInt(document.getElementById("credits").value);

    if (isNaN(marks) || isNaN(credits)) {
        alert("Please enter valid marks and credits.");
        return;
    }

    const course = {
        subject: subjectNumber++,
        name: courseName,
        marks: marks,
        credits: credits
    };

    courses.push(course);

    displayCourses();
    calculateGPA();

    // Clear input fields
    document.getElementById("course-name").value = "";
    document.getElementById("marks").value = "";
    document.getElementById("credits").value = "";
}

function displayCourses() {
    const courseList = document.getElementById("course-list-body");
    courseList.innerHTML = "";
    courses.forEach(course => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${course.subject}</td>
            <td>${course.name}</td>
            <td>${course.marks}</td>
            <td>${course.credits}</td>
        `;
        courseList.appendChild(row);
    });
}

function calculateGPA() {
    let totalCredits = 0;
    let totalGradePoints = 0;

    courses.forEach(course => {
        totalCredits += course.credits;
        totalGradePoints += calculateGradePoints(course.marks) * course.credits;
    });

    const gpa = totalGradePoints / totalCredits;
    document.getElementById("final-gpa").textContent = gpa.toFixed(2);
}

function calculateGradePoints(marks) {
    if (marks >= 80) {
        return 4.00;
    } else if (marks >= 75) {
        return 3.75;
    } else if (marks >= 70) {
        return 3.50;
    } else if (marks >= 65) {
        return 3.25;
    } else if (marks >= 60) {
        return 3.00;
    } else if (marks >= 55) {
        return 2.75;
    } else if (marks >= 50) {
        return 2.50;
    } else if (marks >= 45) {
        return 2.25;
    } else if (marks >= 40) {
        return 2.00;
    } else {
        return 0.00;
    }
}
// Semester GPA Calculation ends here

// CGPA Calculation starts here

let semesters = [];

function addSemester() {
    const semesterInputs = document.getElementById("semesterInputs");
    const semesterNumber = semesters.length + 2;
    const newSemesterDiv = document.createElement("div");
    newSemesterDiv.classList.add("semester-input");
    newSemesterDiv.innerHTML = `
        <div>
            <label for="semesterNumber${semesterNumber}">Semester ${semesterNumber}:</label>
            <input type="number" id="semesterNumber${semesterNumber}" placeholder="Enter Semester Number" required>
            <br><br>
            <label for="totalCredits${semesterNumber}">Total Credits:</label>
            <input type="number" id="totalCredits${semesterNumber}" placeholder="Enter Total Credits" required>
            <br><br>
            <label for="semesterGPA${semesterNumber}">Semester GPA:</label>
            <input type="number" id="semesterGPA${semesterNumber}" step="0.01" placeholder="Enter Semester GPA" required>
        </div>
    `;
    semesterInputs.appendChild(newSemesterDiv);
    semesters.push({ credits: null, gpa: null });
}

function calculateCGPA() {
    let totalCredits = 0;
    let totalPoints = 0;

    for (let i = 0; i < semesters.length; i++) {
        const credits = parseFloat(document.getElementById(`totalCredits${i + 1}`).value);
        const gpa = parseFloat(document.getElementById(`semesterGPA${i + 1}`).value);

        if (!isNaN(credits) && !isNaN(gpa)) {
            totalCredits += credits;
            totalPoints += credits * gpa;
        }
    }

    if (totalCredits === 0) {
        alert("Please enter valid values for credits and GPA.");
        return;
    }

    const cgpa = totalPoints / totalCredits;
    const cgpaResultDiv = document.getElementById("cgpaResult");
    cgpaResultDiv.textContent = `Your CGPA is: ${cgpa.toFixed(2)}`;
}

// CGPA Calculation end here




// 2nd code to calculate CGPA


document.addEventListener("DOMContentLoaded", function () {
    const semesterForm = document.getElementById("semesterForm");
    const addSemesterBtn = document.getElementById("addSemester");
    const semesterList = document.getElementById("semesterList");
    const calculateCGPABtn = document.getElementById("calculateCGPA");

    let semesters = [];

    addSemesterBtn.addEventListener("click", function () {
        const semesterNumber = parseInt(document.getElementById("semester").value);
        const totalCredits = parseInt(document.getElementById("credits").value);
        const semesterGPA = parseFloat(document.getElementById("gpa").value);

        semesters.push({
            semester: semesterNumber,
            credits: totalCredits,
            gpa: semesterGPA
        });

        const semesterItem = document.createElement("div");
        semesterItem.innerHTML = `<p>Semester ${semesterNumber}: ${semesterGPA.toFixed(2)}</p>`;
        semesterList.appendChild(semesterItem);

        clearForm();
    });

    calculateCGPABtn.addEventListener("click", function () {
        const finalCGPA = calculateFinalCGPA(semesters);
        if (!isNaN(finalCGPA)) {
            document.getElementById("finalCGPA").innerText = `Final CGPA: ${finalCGPA.toFixed(2)}`;
        } else {
            document.getElementById("finalCGPA").innerText = "Please add at least one semester to calculate CGPA.";
        }
    });

    function calculateFinalCGPA(semesters) {
        if (semesters.length === 0) {
            return NaN;
        }

        let totalGradePoints = 0;
        let totalCredits = 0;

        for (let i = 0; i < semesters.length; i++) {
            totalGradePoints += semesters[i].gpa * semesters[i].credits;
            totalCredits += semesters[i].credits;
        }

        return totalGradePoints / totalCredits;
    }

    function clearForm() {
        document.getElementById("semester").value = "";
        document.getElementById("credits").value = "";
        document.getElementById("gpa").value = "";
    }
}); 

// 2nd code to calculate CGPA ends here  

