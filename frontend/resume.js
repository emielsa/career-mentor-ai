function generateResume() {
    const fullName = document.getElementById("fullName").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const degree = document.getElementById("degree").value;
    const institution = document.getElementById("institution").value;
    const year = document.getElementById("year").value;
    const experience = document.getElementById("experience").value;
    const skills = document.getElementById("skills").value;
  
    const resumeHTML = `
      <h2>${fullName}</h2>
      <p><strong>Email:</strong> ${email} | <strong>Phone:</strong> ${phone}</p>
      <hr>
      <h3>Education</h3>
      <p>${degree} from ${institution} (${year})</p>
      <h3>Experience</h3>
      <p>${experience.replace(/\n/g, "<br>")}</p>
      <h3>Skills</h3>
      <p>${skills.replace(/\n/g, ", ")}</p>
    `;
  
    document.getElementById("resumePreview").innerHTML = resumeHTML;
  }
  
  function downloadPDF() {
    const element = document.getElementById("resumePreview");
  
    if (!element.innerHTML.trim()) {
      alert("Please generate your resume first.");
      return;
    }
  
    // Clone the element to avoid live UI glitches
    const clone = element.cloneNode(true);
    clone.style.padding = "20px";
    clone.style.background = "white";
  
    // Create a hidden container to render the content for PDF
    const hiddenContainer = document.createElement('div');
    hiddenContainer.style.position = 'absolute';
    hiddenContainer.style.left = '-9999px';
    hiddenContainer.appendChild(clone);
    document.body.appendChild(hiddenContainer);
  
    const opt = {
      margin: 0,
      filename: 'my-resume.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };
  
    html2pdf().set(opt).from(clone).save().then(() => {
      document.body.removeChild(hiddenContainer); // Clean up
    });
  }
  
  