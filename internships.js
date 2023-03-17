
const data = [
  {
    title: "CYBER SECURITY",
    dur:"Duration : 2 Days",
    desc: "Organized by IIT Palakkad",
    
  },
  {
    title: "AR MAGIC 3.0",
    dur:"Duration : 1 Day",
    desc: "Organized by MEA Perinthalmana",
    
  },
  {
    title: "JAVA PROGRAMMING",
    dur:"Duration : 20 Days",
    desc: "Organized by IEEE GECK ",
    
  }
  
];

const internshipContainer = document.getElementById("internshipContents");
const internship = data.map((internship, i) => {
  return `
    <div class="col-lg-12" key=${i}>
        <div class="card shadow ">
            <div class="card-body">
                
                <h3>${internship.title}</h3>
                <p class="mt-3">${internship.desc}</p>
                <p class="mt-3">${internship.dur}</p>
                
            </div>
        </div>
    </div>
      `;
}).join('');

internshipContainer.innerHTML = internship;
