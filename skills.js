
const data = [
  {
    title:"C++"
  },
  {
    title: "JAVA",
  },
  {
    title: "HTML",
  },
  {
    title: "C",
  },
  {
    title: "CSS",
  },
  {
    title: "JavaScript",
  },
  
];

const skillContainer = document.getElementById("skillContents");
const skill = data.map((skill, i) => {
  return `
    <div class="col-lg-4" key=${i}>
        <div class="card shadow ">
            <div class="card-body">
                
                <h3>${skill.title}</h3>
                
                
            </div>
        </div>
    </div>
      `;
}).join('');

skillContainer.innerHTML = skill;
