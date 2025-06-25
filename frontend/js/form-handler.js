// Populate job title from query
window.onload = function () {
    const urlParams = new URLSearchParams(window.location.search);
    const job = urlParams.get("job");
    document.getElementById("jobTitle").innerText = job;
    document.getElementById("jobName").value = job;
  
    document.getElementById("jobForm").addEventListener("submit", function (e) {
      e.preventDefault();
      const data = new FormData(this);
      const details = {};
      data.forEach((value, key) => {
        details[key] = value;
      });
      localStorage.setItem("applicationData", JSON.stringify(details));
      window.location.href = "success.html";
    });
  };
  