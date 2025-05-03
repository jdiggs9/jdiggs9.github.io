document.getElementById("introForm").addEventListener("submit", function(e){
    e.preventDefault();
    if (!document.getElementById("agreement").checked) {
        alert("You must agree to the terms!");
        return;
    }

    let resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `
        <h3>Your BYO Intro:</h3>
        <p><strong>Name:</strong> ${document.getElementById("name").value}</p>
        <p><strong>Mascot:</strong> ${document.getElementById("mascot").value}</p>
        <p><strong>Image:</strong> (see uploaded image)</p>
        <p><strong>Image Caption:</strong> ${document.getElementById("caption").value}</p>
        <p><strong>Personal Background:</strong> ${document.getElementById("personalBackground").value}</p>
        <p><strong>Professional Background:</strong> ${document.getElementById("professionalBackground").value}</p>
        <p><strong>Academic Background:</strong> ${document.getElementById("academicBackground").value}</p>
        <p><strong>Web Development Background:</strong> ${document.getElementById("webDevBackground").value}</p>
        <p><strong>Primary Platform:</strong> ${document.getElementById("platform").value}</p>
        <p><strong>Courses:</strong> ${Array.from(document.querySelectorAll(".course")).map(input => input.value).join(", ")}</p>
        <p><strong>Funny Thing:</strong> ${document.getElementById("funnyThing").value}</p>
        <p><strong>Anything Else:</strong> ${document.getElementById("anythingElse").value}</p>
        <p><a href="byo_intro.html">Reset and do it again</a></p>
    `;
    document.getElementById("introForm").style.display = "none";
});

function addCourse() {
    let container = document.getElementById("coursesContainer");
    let input = document.createElement("input");
    input.type = "text";
    input.placeholder = "Course Name";
    input.className = "course";
    container.appendChild(input);

    let delButton = document.createElement("button");
    delButton.textContent = "Delete";
    delButton.type = "button";
    delButton.onclick = function() {
        container.removeChild(input);
        container.removeChild(delButton);
    };
    container.appendChild(delButton);
}
