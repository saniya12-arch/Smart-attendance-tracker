let barChart, lineChart;

function updateDashboard() {

  let total = +document.getElementById("total").value || 0;
  let present = +document.getElementById("present").value || 0;
  let late = +document.getElementById("late").value || 0;

  let absent = total - present;

  document.getElementById("totalDisplay").innerText = total;
  document.getElementById("presentDisplay").innerText = present;
  document.getElementById("absentDisplay").innerText = absent;
  document.getElementById("lateDisplay").innerText = late;

  updateCharts(present, absent, late);
}

function updateCharts(present, absent, late) {

  if (barChart) barChart.destroy();
  if (lineChart) lineChart.destroy();

  // BAR CHART
  barChart = new Chart(document.getElementById("barChart"), {
    type: "bar",
    data: {
      labels: ["Present", "Absent", "Late"],
      datasets: [{
        label: "Students",
        data: [present, absent, late]
      }]
    }
  });

  // LINE CHART (dummy weekly)
  lineChart = new Chart(document.getElementById("lineChart"), {
    type: "line",
    data: {
      labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      datasets: [{
        label: "Absent",
        data: [
          Math.random()*10,
          Math.random()*10,
          Math.random()*10,
          Math.random()*10,
          Math.random()*10,
          Math.random()*10
        ]
      }]
    }
  });
}
