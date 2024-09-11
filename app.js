function showDetails() {
    // Get values from inputs
    const studentName = document.getElementById('studentName').value;
    const className = document.getElementById('class').value;
    const fullMarks = document.getElementById('fullMarks').value;
    const obtainedMarks = document.getElementById('obtainedMarks').value;
    
    // Display the categorized information
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        <div class="category"><strong>Student Name:</strong> ${studentName}</div>
        <div class="category"><strong>Class:</strong> ${className}</div>
        <div class="category"><strong>Full Marks:</strong> ${fullMarks}</div>
        <div class="category"><strong>Obtained Marks:</strong> ${obtainedMarks}</div>
    `;
}