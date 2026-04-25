let attendanceChart, genderChart, topChart;

function generate() {

  let total = Number(document.getElementById("total").value);
  let present = Number(document.getElementById("present").value);
  let absent = Number(document.getElementById("absent").value);
  let late = Number(document.getElementById("late").value);

  let male = Number(document.getElementById("male").value);
  let female = Number(document.getElementById("female").value);

  let top = [
    Number(document.getElementById("top1").value),
    Number(document.getElementById("top2").value),
    Number(document.getElementById("top3").value),
    Number(document.getElementById("top4").value),
    Number(document.getElementById("top5").value)
  ];

  // Update cards
  document.getElementById("c_total").innerText = total;
  document.getElementById("c_present").innerText = present;
  document.getElementById("c_absent").innerText = absent;
  document.getElementById("c_late").innerText = late;

  // DESTROY OLD CHARTS
  if (attendanceChart) attendanceChart.destroy();
  if (genderChart) genderChart.destroy();
  if (topChart) topChart.destroy();

  // ATTENDANCE CHART
  attendanceChart = new Chart(document.getElementById("attendanceChart"), {
    type: "bar",
    data: {
      labels: ["Present", "Absent", "Late"],
      datasets: [{
        data: [present, absent, late]
      }]
    }
  });

  // GENDER CHART
  genderChart = new Chart(document.getElementById("genderChart"), {
    type: "pie",
    data: {
      labels: ["Male", "Female"],
      datasets: [{
        data: [male, female]
      }]
    }
  });

  // TOP STUDENTS CHART
  topChart = new Chart(document.getElementById("topChart"), {
    type: "line",
    data: {
      labels: ["S1", "S2", "S3", "S4", "S5"],
      datasets: [{
        data: top
      }]
    }
  });

}
