function addCourseInput() {
    const div = document.createElement("div");
    div.innerHTML = '<input type="text" placeholder="Course Name" class="courseInput">';
    document.getElementById("coursesInput").appendChild(div);
}

function saveDetails() {
    const name = document.getElementById("fullName").value;
    const usn = document.getElementById("usn").value;
    const college = document.getElementById("college").value;

    if (!name || !usn || !college) {
        alert("Please fill all details!");
        return;
    }

    // ✅ Show Dashboard
    document.getElementById("studentForm").style.display = "none";
    document.getElementById("dashboard").style.display = "flex";

    // ✅ Show student details
    document.getElementById("studentName").textContent = name;
    document.getElementById("studentDetails").textContent = `${usn} | ${college}`;
    document.getElementById("welcomeText").textContent = `Welcome back, ${name}!`;

    // ✅ Assignments
    const assignments = [
        document.getElementById("ass1").value,
        document.getElementById("ass2").value,
        document.getElementById("ass3").value
    ];

    const assignmentList = document.getElementById("assignmentList");
    assignmentList.innerHTML = "";
    assignments.forEach((status, i) => {
        const li = document.createElement("li");
        li.textContent = `Assignment ${i + 1}: ${status}`;
        assignmentList.appendChild(li);
    });

    // ✅ Courses
    const courses = document.querySelectorAll(".courseInput");
    const courseList = document.getElementById("courseList");
    courseList.innerHTML = "";
    courses.forEach(c => {
        if (c.value.trim() !== "") {
            const div = document.createElement("div");
            div.className = "course-card";
            div.innerHTML = `<p>${c.value}</p>`;
            courseList.appendChild(div);
        }
    });

    // ✅ Change submit button to green
    document.getElementById("submitBtn").style.background = "green";
    document.getElementById("submitBtn").style.color = "white";
}

function showSection(sectionId) {
    document.querySelectorAll(".section").forEach(sec => sec.style.display = "none");
    document.getElementById(sectionId).style.display = "block";
}

function logout() {
    location.reload();
}