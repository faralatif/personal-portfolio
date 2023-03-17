const data = [
    {
      title: "PYTHON DJANGO INTERNSHIP",
      date: "Ongoing",
      desc: "currently pursuing Internship in Python django at Brototype.",
    },
    {
      title: "CERTIFIED PENETRATION TESTER",
      date: "Aug 31, 2022",
      desc: "Completed CPT course from REDTEAM Hacker Academy, KOCHI.",
    },
    {
      title: "UNDER-GRADUATION",
      date: "Jul 31, 2022",
      desc: "Completed B.tech in ECE from Government Engineering College, Kozhikode with 7.02 CGPA.",
    },
    {
      title: "HIGHER SECONDARY",
      date: "Mar 31, 2017",
      desc: "Sucessfully Completed my HSE from GHSS, PATTAMBI with 93.3%.",
    },
    {
      title: "HIGH SCHOOL",
      date: "Mar 31, 2015",
      desc: "Completed my High School from MES INTERNATIONAL SCHOOL, PATTAMBI with 9.6 CGPA.",
    },
  ];
  
  const timelineContainer = document.getElementById("timelineContainer");
  const timelines = data.map((timeline, i) => {
    return `
          <div class="row content" key='${i}'>
              <div class="col-lg-1 col-md-2 col-sm-3">
                  <div class="verticalLine"></div>
                  <div class="badgeEle mt-2 mb-2"></div>
                  <div class="verticalLine"></div>
              </div>
              <div class="col-lg-11 col-md-10 col-sm-9">
                  <div class="card shadow">
                      <div class="card-body">
                          <div class="d-flex justify-content-between">
                              <h5>${timeline.title}</h5>
                              <h4>${timeline.date}</h4>
                          </div>
                          <p class="mt-3">${timeline.desc}</p>
                      </div>
                  </div>
              </div>
          </div>
      `;
  }).join('');
  
  timelineContainer.innerHTML = timelines;