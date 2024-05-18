import { Title } from "solid-start";

export default function Home() {
  return (
    <main>
        {/* Navigation */}
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
            <a class="navbar-brand js-scroll-trigger" href="#page-top">
                <span class="d-block d-lg-none">Ibraheem Mansour</span>
                <span class="d-none d-lg-block"><img class="img-fluid img-profile rounded-circle mx-auto mb-2" src="src/assets/img/profile.JPG" alt="Ibraheem Mansour" /></span>
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="navbar-nav">
                    <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#about">About</a></li>
                    <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#publications">Publications</a></li>
                    <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#experience">Experience</a></li>
                    <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#education">Education</a></li>
                    <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#skills">Skills</a></li>
                    <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#interests">Interests</a></li>
                    <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#awards">Awards</a></li>
                </ul>
            </div>
        </nav>
        {/* Page Content */}
        <div class="container-fluid p-0">

          {/* About */}
          <section class="resume-section" id="about">
              <div class="resume-section-content">
                  <h1 class="mb-0">
                    Ibraheem <span class="text-primary">Mansour</span>
                  </h1>
                  <div class="subheading mb-5">
                    Zalka Main Street · Cité Moussa, Bloc A, 1st Floor · (961) 3 062901 · 
                    <a href="mailto:ibraheemmansour@outlook.com">
                      ibraheemmansour@outlook.com
                    </a>
                  </div>
                  <p class="lead mb-5">
                    Computer and Communications Engineering graduate (M.S.) with over seven years of experience in full-stack development, implementing, and testing software to meet specific client requirements. With a dedication to continual self-development, I enjoy working collaboratively or independently and have an eye for detail.
                  </p>
                  <div class="social-icons">
                    <a class="social-icon" href="http://lb.linkedin.com/in/IbraheemMansour" title="LinkedIn" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin"></i></a>
                    <a class="social-icon" href="https://twitter.com/@Ibraheem1334" title="Twitter" target="_blank" rel="noopener noreferrer"><i class="fab fa-twitter"></i></a>
                    <a class="social-icon" href="https://www.instagram.com/ibraheemmansour1992" title="Instagram" target="_blank" rel="noopener noreferrer"><i class="fab fa-instagram"></i></a>
                    <a class="social-icon" href="https://www.youtube.com/channel/UCFl20h5DWD0dtPD8jCIb8RA" title="YouTube" target="_blank" rel="noopener noreferrer"><i class="fab fa-youtube"></i></a>
                  </div>
              </div>
          </section>
          <hr class="m-0" />

            {/* Publications */}
            <section class="resume-section" id="publications">
            <div class="resume-section-content">
              <h2 class="mb-5">Publications</h2>        
            </div>
          </section>
          <hr class="m-0" />

          {/* Experience */}
          <section class="resume-section" id="experience">
            <div class="resume-section-content">
              <h2 class="mb-5">Experience</h2>
              <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
                <div class="flex-grow-1">
                  <h3 class="mb-0">Senior Application Developer</h3>
                  <div class="subheading mb-3">Telus / Grappa Systems</div>
                  <p>
                    - Designing, developing, and enhancing applications.
                  </p>
                  <p>
                    - Improving and adding functions to the current platform.
                  </p>
                  <p>
                    - Gathering and refining specifications and requirements based on technical needs.
                  </p>
                </div>
                <div class="flex-shrink-0"><span class="text-primary">September 2016 - Present</span></div>
              </div>
              <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
                  <div class="flex-grow-1">
                      <h3 class="mb-0">Solution Specialist Trainee</h3>
                      <div class="subheading mb-3">ISS International Software Solutions · Internship</div>
                      <p>
                        - Created SharePoint web parts using .NET, HTML, and AngularJS.
                      </p>
                      <p>
                        - Developed a Loan Calculator based on a Client-Side Model, utilized within a Banking
                      </p>
                  </div>
                  <div class="flex-shrink-0"><span class="text-primary">April 2016 - May 2016</span></div>
              </div>
              <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
                  <div class="flex-grow-1">
                      <h3 class="mb-0">System Engineer Trainee</h3>
                      <div class="subheading mb-3">Automation and Computer Technologies · Internship</div>
                      <p>
                        - Joined ACT's Enterprise Services Department as a System Engineer.
                      </p>
                      <p>
                        - Completed courses and tasks covering UNIX Fundamentals, Solaris Intermediate Administration, Solaris Advanced Administration, and Introduction to Backups and Restores.
                      </p>
                  </div>
                  <div class="flex-shrink-0"><span class="text-primary">September 2014</span></div>
              </div>
            </div>
          </section>
          <hr class="m-0" />

          {/* Education */}
          <section class="resume-section" id="education">
              <div class="resume-section-content">
                  <h2 class="mb-5">Education</h2>
                  <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
                      <div class="flex-grow-1">
                          <h3 class="mb-0">American University of Science and Technology</h3>
                          <div class="subheading mb-3">Master of Science</div>
                          <div>Computer and Communications Engineering</div>
                          <p>GPA: 3.56</p>
                      </div>
                      <div class="flex-shrink-0"><span class="text-primary">February 2017 - February 2019</span></div>
                  </div>
                  <div class="d-flex flex-column flex-md-row justify-content-between">
                      <div class="flex-grow-1">
                          <h3 class="mb-0">Nazih Bizri High School</h3>
                          <div class="subheading mb-3">Lebanese Baccalaureate Certificate (Life Science)</div>
                          <p>Result: 16.14 / 20</p>
                      </div>
                      <div class="flex-shrink-0"><span class="text-primary">May 2010</span></div>
                  </div>
              </div>
          </section>
          <hr class="m-0" />

          {/* Skills */}
          <section class="resume-section" id="skills">
              <div class="resume-section-content">
                  <h2 class="mb-5">Skills</h2>
                  <div class="">
                    <div class="section">
                        <div class="section-header">Applications</div>
                        <div class="skill">
                            <div class="skill-name">Photoshop</div>
                            <div class="skill-rating">
                                <div class="circle"></div>
                                <div class="circle"></div>
                                <div class="circle"></div>
                                <div class="circle empty"></div>
                                <div class="circle empty"></div>
                            </div>
                        </div>
                        <div class="skill">
                            <div class="skill-name">Illustrator</div>
                            <div class="skill-rating">
                                <div class="circle"></div>
                                <div class="circle"></div>
                                <div class="circle"></div>
                                <div class="circle empty"></div>
                                <div class="circle empty"></div>
                            </div>
                        </div>
                        <div class="skill">
                            <div class="skill-name">After Effects</div>
                            <div class="skill-rating">
                                <div class="circle"></div>
                                <div class="circle"></div>
                                <div class="circle"></div>
                                <div class="circle empty"></div>
                                <div class="circle empty"></div>
                            </div>
                        </div>
                        <div class="skill">
                            <div class="skill-name">Premiere</div>
                            <div class="skill-rating">
                                <div class="circle"></div>
                                <div class="circle"></div>
                                <div class="circle"></div>
                                <div class="circle empty"></div>
                                <div class="circle empty"></div>
                            </div>
                        </div>
                        <div class="skill">
                            <div class="skill-name">InDesign</div>
                            <div class="skill-rating">
                                <div class="circle"></div>
                                <div class="circle"></div>
                                <div class="circle"></div>
                                <div class="circle empty"></div>
                                <div class="circle empty"></div>
                            </div>
                        </div>
                        <div class="skill">
                            <div class="skill-name">MS Word</div>
                            <div class="skill-rating">
                                <div class="circle"></div>
                                <div class="circle"></div>
                                <div class="circle"></div>
                                <div class="circle"></div>
                                <div class="circle"></div>
                            </div>
                        </div>
                        <div class="skill">
                            <div class="skill-name">MS Excel</div>
                            <div class="skill-rating">
                                <div class="circle"></div>
                                <div class="circle"></div>
                                <div class="circle"></div>
                                <div class="circle"></div>
                                <div class="circle empty"></div>
                            </div>
                        </div>
                        <div class="skill">
                            <div class="skill-name">MS PowerPoint</div>
                            <div class="skill-rating">
                                <div class="circle"></div>
                                <div class="circle"></div>
                                <div class="circle"></div>
                                <div class="circle"></div>
                                <div class="circle empty"></div>
                            </div>
                        </div>
                    </div>
                    <div class="section">
                        <div class="section-header">Personal Skills</div>
                        <div class="skill">
                            <div class="skill-name">Organized</div>
                            <div class="skill-rating">
                                <div class="circle"></div>
                                <div class="circle"></div>
                                <div class="circle"></div>
                                <div class="circle"></div>
                                <div class="circle"></div>
                            </div>
                        </div>
                        <div class="skill">
                            <div class="skill-name">Calm</div>
                            <div class="skill-rating">
                                <div class="circle"></div>
                                <div class="circle"></div>
                                <div class="circle"></div>
                                <div class="circle"></div>
                                <div class="circle"></div>
                            </div>
                        </div>
                        <div class="skill">
                            <div class="skill-name">Hardworking</div>
                            <div class="skill-rating">
                                <div class="circle"></div>
                                <div class="circle"></div>
                                <div class="circle"></div>
                                <div class="circle"></div>
                                <div class="circle"></div>
                            </div>
                        </div>
                        <div class="skill">
                            <div class="skill-name">Time Management</div>
                            <div class="skill-rating">
                                <div class="circle"></div>
                                <div class="circle"></div>
                                <div class="circle"></div>
                                <div class="circle"></div>
                                <div class="circle"></div>
                            </div>
                        </div>
                    </div>
                    <div class="section">
                        <div class="section-header">Programming Languages</div>
                        <div class="skill">
                            <div class="skill-name">C#</div>
                            <div class="skill-rating">
                                <div class="circle"></div>
                                <div class="circle"></div>
                                <div class="circle"></div>
                                <div class="circle empty"></div>
                                <div class="circle empty"></div>
                            </div>
                        </div>
                        <div class="skill">
                            <div class="skill-name">Spring Boot - Java</div>
                            <div class="skill-rating">
                                <div class="circle"></div>
                                <div class="circle"></div>
                                <div class="circle"></div>
                                <div class="circle empty"></div>
                                <div class="circle empty"></div>
                            </div>
                        </div>
                        <div class="skill">
                            <div class="skill-name">HTML 5</div>
                            <div class="skill-rating">
                                <div class="circle"></div>
                                <div class="circle"></div>
                                <div class="circle"></div>
                                <div class="circle"></div>
                                <div class="circle empty"></div>
                            </div>
                        </div>
                        <div class="skill">
                            <div class="skill-name">CSS 3</div>
                            <div class="skill-rating">
                                <div class="circle"></div>
                                <div class="circle"></div>
                                <div class="circle"></div>
                                <div class="circle"></div>
                                <div class="circle empty"></div>
                            </div>
                        </div>
                        <div class="skill">
                            <div class="skill-name">JavaScript</div>
                            <div class="skill-rating">
                                <div class="circle"></div>
                                <div class="circle"></div>
                                <div class="circle"></div>
                                <div class="circle"></div>
                                <div class="circle empty"></div>
                            </div>
                        </div>
                        <div class="skill">
                            <div class="skill-name">ReactJS</div>
                            <div class="skill-rating">
                                <div class="circle"></div>
                                <div class="circle"></div>
                                <div class="circle"></div>
                                <div class="circle"></div>
                                <div class="circle empty"></div>
                            </div>
                        </div>
                        <div class="skill">
                            <div class="skill-name">Flutter</div>
                            <div class="skill-rating">
                                <div class="circle"></div>
                                <div class="circle"></div>
                                <div class="circle"></div>
                                <div class="circle empty"></div>
                                <div class="circle empty"></div>
                            </div>
                        </div>
                        <div class="skill">
                            <div class="skill-name">React Native</div>
                            <div class="skill-rating">
                                <div class="circle"></div>
                                <div class="circle"></div>
                                <div class="circle"></div>
                                <div class="circle empty"></div>
                                <div class="circle empty"></div>
                            </div>
                        </div>
                        <div class="skill">
                            <div class="skill-name">React VR</div>
                            <div class="skill-rating">
                                <div class="circle"></div>
                                <div class="circle"></div>
                                <div class="circle"></div>
                                <div class="circle empty"></div>
                                <div class="circle empty"></div>
                            </div>
                        </div>
                        <div class="skill">
                            <div class="skill-name">Mediaroom PF</div>
                            <div class="skill-rating">
                                <div class="circle"></div>
                                <div class="circle"></div>
                                <div class="circle"></div>
                                <div class="circle empty"></div>
                                <div class="circle empty"></div>
                            </div>
                        </div>
                    </div>
                    <div class="section">
                        <div class="section-header">Databases</div>
                        <div class="skill">
                            <div class="skill-name">MySQL</div>
                            <div class="skill-rating">
                                <div class="circle"></div>
                                <div class="circle"></div>
                                <div class="circle"></div>
                                <div class="circle"></div>
                                <div class="circle empty"></div>
                            </div>
                        </div>
                        <div class="skill">
                            <div class="skill-name">Microsoft SQL Server</div>
                            <div class="skill-rating">
                                <div class="circle"></div>
                                <div class="circle"></div>
                                <div class="circle"></div>
                                <div class="circle"></div>
                                <div class="circle empty"></div>
                            </div>
                        </div>
                        <div class="skill">
                            <div class="skill-name">MongoDB</div>
                            <div class="skill-rating">
                                <div class="circle"></div>
                                <div class="circle"></div>
                                <div class="circle"></div>
                                <div class="circle"></div>
                                <div class="circle empty"></div>
                            </div>
                        </div>
                        <div class="skill">
                            <div class="skill-name">Redis</div>
                            <div class="skill-rating">
                                <div class="circle"></div>
                                <div class="circle"></div>
                                <div class="circle"></div>
                                <div class="circle"></div>
                                <div class="circle empty"></div>
                            </div>
                        </div>
                    </div>
                    <div class="section">
                        <div class="section-header">DevOps Tools</div>
                        <div class="skill">
                            <div class="skill-name">Docker</div>
                            <div class="skill-rating">
                                <div class="circle"></div>
                                <div class="circle"></div>
                                <div class="circle"></div>
                                <div class="circle empty"></div>
                                <div class="circle empty"></div>
                            </div>
                        </div>
                        <div class="skill">
                            <div class="skill-name">Google Kubernetes Engine (GKE)</div>
                            <div class="skill-rating">
                                <div class="circle"></div>
                                <div class="circle"></div>
                                <div class="circle"></div>
                                <div class="circle empty"></div>
                                <div class="circle empty"></div>
                            </div>
                        </div>
                        <div class="skill">
                            <div class="skill-name">Harness</div>
                            <div class="skill-rating">
                                <div class="circle"></div>
                                <div class="circle"></div>
                                <div class="circle"></div>
                                <div class="circle empty"></div>
                                <div class="circle empty"></div>
                            </div>
                        </div>
                        <div class="skill">
                            <div class="skill-name">Splunk</div>
                            <div class="skill-rating">
                                <div class="circle"></div>
                                <div class="circle"></div>
                                <div class="circle"></div>
                                <div class="circle"></div>
                                <div class="circle empty"></div>
                            </div>
                        </div>
                        <div class="skill">
                            <div class="skill-name">Grafana</div>
                            <div class="skill-rating">
                                <div class="circle"></div>
                                <div class="circle"></div>
                                <div class="circle"></div>
                                <div class="circle empty"></div>
                                <div class="circle empty"></div>
                            </div>
                        </div>
                        <div class="skill">
                            <div class="skill-name">GitHub</div>
                            <div class="skill-rating">
                                <div class="circle"></div>
                                <div class="circle"></div>
                                <div class="circle"></div>
                                <div class="circle"></div>
                                <div class="circle empty"></div>
                            </div>
                        </div>
                        <div class="skill">
                            <div class="skill-name">Git</div>
                            <div class="skill-rating">
                                <div class="circle"></div>
                                <div class="circle"></div>
                                <div class="circle"></div>
                                <div class="circle"></div>
                                <div class="circle empty"></div>
                            </div>
                        </div>
                        <div class="skill">
                            <div class="skill-name">Bitbucket</div>
                            <div class="skill-rating">
                                <div class="circle"></div>
                                <div class="circle"></div>
                                <div class="circle"></div>
                                <div class="circle"></div>
                                <div class="circle empty"></div>
                            </div>
                        </div>

                        <div class="skill">
                            <div class="skill-name">Slack</div>
                            <div class="skill-rating">
                                <div class="circle"></div>
                                <div class="circle"></div>
                                <div class="circle"></div>
                                <div class="circle empty"></div>
                                <div class="circle empty"></div>
                            </div>
                        </div>
                        <div class="skill">
                            <div class="skill-name">Microsoft Teams</div>
                            <div class="skill-rating">
                                <div class="circle"></div>
                                <div class="circle"></div>
                                <div class="circle"></div>
                                <div class="circle"></div>
                                <div class="circle empty"></div>
                            </div>
                        </div>
                        <div class="skill">
                            <div class="skill-name">Jira</div>
                            <div class="skill-rating">
                                <div class="circle"></div>
                                <div class="circle"></div>
                                <div class="circle"></div>
                                <div class="circle"></div>
                                <div class="circle empty"></div>
                            </div>
                        </div>
                        <div class="skill">
                            <div class="skill-name">Confluence</div>
                            <div class="skill-rating">
                                <div class="circle"></div>
                                <div class="circle"></div>
                                <div class="circle"></div>
                                <div class="circle"></div>
                                <div class="circle empty"></div>
                            </div>
                        </div>
                        <div class="skill">
                            <div class="skill-name">Google Cloud Platform (GCP)</div>
                            <div class="skill-rating">
                                <div class="circle"></div>
                                <div class="circle"></div>
                                <div class="circle"></div>
                                <div class="circle empty"></div>
                                <div class="circle empty"></div>
                            </div>
                        </div>
                        <div class="skill">
                            <div class="skill-name">Postman</div>
                            <div class="skill-rating">
                                <div class="circle"></div>
                                <div class="circle"></div>
                                <div class="circle"></div>
                                <div class="circle"></div>
                                <div class="circle empty"></div>
                            </div>
                        </div>
                    </div>
                </div>
              </div>
          </section>
          <hr class="m-0" />

          {/* Interests */}
          <section class="resume-section" id="interests">
              <div class="resume-section-content">
                  <h2 class="mb-5">Interests</h2>
                  <p>Apart from being a web developer, I enjoy most of my time being outdoors. In the winter, I am an avid skier and novice ice climber. During the warmer months here in Colorado, I enjoy mountain biking, free climbing, and kayaking.</p>
                  <p class="mb-5">When forced indoors, I follow a number of sci-fi and fantasy genre movies and television shows, I am an aspiring chef, and I spend a large amount of my free time exploring the latest technology advancements in the front-end web development world.</p>
                  <div class="social-icons">
                    <a class="social-icon" href="http://lb.linkedin.com/in/IbraheemMansour" title="Cinema" target="_blank" rel="noopener noreferrer"><i class="fa-solid fa-film"></i></a>
                    <a class="social-icon" href="https://twitter.com/@Ibraheem1334" title="Twitter" target="_blank" rel="noopener noreferrer"><i class="fa-solid fa-pen"></i></a>
                    <a class="social-icon" href="https://www.instagram.com/ibraheemmansour1992" title="Instagram" target="_blank" rel="noopener noreferrer"><i class="fa-solid fa-book-open-reader"></i></a>
                    <a class="social-icon" href="https://www.youtube.com/channel/UCFl20h5DWD0dtPD8jCIb8RA" title="YouTube" target="_blank" rel="noopener noreferrer"><i class="fas fa-hiking"></i></a>
                  </div>
              </div>
          </section>
          <hr class="m-0" />

          {/* Awards */}
          <section class="resume-section" id="awards">
              <div class="resume-section-content">
                  <h2 class="mb-5">Awards & Certifications</h2>
                  <ul class="fa-ul mb-0">
                      <li>
                          <span class="fa-li"><i class="fas fa-trophy text-warning"></i></span>
                          Google Analytics Certified Developer
                      </li>
                      <li>
                          <span class="fa-li"><i class="fas fa-trophy text-warning"></i></span>
                          Mobile Web Specialist - Google Certification
                      </li>
                      <li>
                          <span class="fa-li"><i class="fas fa-trophy text-warning"></i></span>
                          1
                          <sup>st</sup>
                          Place - University of Colorado Boulder - Emerging Tech Competition 2009
                      </li>
                      <li>
                          <span class="fa-li"><i class="fas fa-trophy text-warning"></i></span>
                          1
                          <sup>st</sup>
                          Place - University of Colorado Boulder - Adobe Creative Jam 2008 (UI Design Category)
                      </li>
                      <li>
                          <span class="fa-li"><i class="fas fa-trophy text-warning"></i></span>
                          2
                          <sup>nd</sup>
                          Place - University of Colorado Boulder - Emerging Tech Competition 2008
                      </li>
                      <li>
                          <span class="fa-li"><i class="fas fa-trophy text-warning"></i></span>
                          1
                          <sup>st</sup>
                          Place - James Buchanan High School - Hackathon 2006
                      </li>
                      <li>
                          <span class="fa-li"><i class="fas fa-trophy text-warning"></i></span>
                          3
                          <sup>rd</sup>
                          Place - James Buchanan High School - Hackathon 2005
                      </li>
                  </ul>
              </div>
          </section>
        </div>
        {/* Bootstrap core JS */}
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
        {/* Core theme JS */}
        <script src="js/scripts.js"></script>
    </main>
  );
}
