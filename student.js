function go(page){
  window.location.href = page;
}

let students = [];

function addStudent() {
  let name = document.getElementById("name").value;
  let total = +document.getElementById("totalDays").value;
  let present = +document.getElementById("presentDays").value;

  let absent = total - present;

  let performance = "";

  let percent = (present / total) * 100;

  if(percent >= 90) performance = "Excellent";
  else if(percent >= 75) performance = "Good";
  else if(percent >= 50) performance = "Average";
  else performance = "Poor";

  students.push({name, total, present, absent, performance});

  displayStudents();
}

function displayStudents() {
  let container = document.getElementById("studentList");
  container.innerHTML = "";

  students.forEach(s => {
    container.innerHTML += `
      <div class="card">
        <h3>${s.name}</h3>
        <p>Total: ${s.total}</p>
        <p>Present: ${s.present}</p>
        <p>Absent: ${s.absent}</p>
        <p>Performance: ${s.performance}</p>
      </div>
    `;
  });
}
