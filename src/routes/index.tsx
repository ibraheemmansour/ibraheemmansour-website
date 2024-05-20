export default function Home() {
  return (
    <main>
        {/* Navigation */}
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
            <a class="navbar-brand js-scroll-trigger" href="#page-top">
                <span class="d-block d-lg-none">Ibraheem Mansour</span>
                <span class="d-none d-lg-block"><img class="img-fluid img-profile rounded-circle mx-auto mb-2" src="assets/img/profile.JPG" alt="Ibraheem Mansour" /></span>
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="navbar-nav">
                    <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#about">About</a></li>
                    <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#publications">Publications</a></li>
                    <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#experience">Experience</a></li>
                    <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#education">Education</a></li>
                    <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#skills">Skills</a></li>
                    {/* <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#interests">Interests</a></li> */}
                    <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#languages">Languages</a></li>
                    {/* <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#favorites">Favorites</a></li> */}
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
                        I hold a Master's degree in Computer and Communications Engineering and have over seven years of experience in full-stack software development tailored to client needs. I am single and, in my free time, I enjoy writing, reading, watching films, and hiking.
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
                    <h2 class="mb-3">Publications</h2>
                    <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div class="flex-grow-1">
                            <h3 class="mb-2">Creative Writing</h3>
                            <div class="publication-container mb-4">
                                <div class="cover-image">
                                    <a href="https://www.amazon.com/Generosity-Unfinished-Childhood-Ibraheem-Mansour-ebook/dp/B0D3KDJLY9" target="_blank" rel="noopener noreferrer">
                                        <img src="assets/img/publications/creative_writing/the_generosity_of_an_unfinished_childhood.jpg" alt="The Generosity of an Unfinished Childhood" />
                                    </a>                                    
                                </div>
                                <div class="content">
                                    <a href="https://www.amazon.com/Generosity-Unfinished-Childhood-Ibraheem-Mansour-ebook/dp/B0D3KDJLY9" target="_blank" rel="noopener noreferrer">
                                        <div class="title">The Generosity of an Unfinished Childhood</div>
                                    </a>
                                    <div class="subtitle">Short Story</div>
                                    <div class="description">
                                        In the seaside community of Bir Byat, a family-run chocolate shop became a beacon of happiness in a sea of sorrow. When their son, George, aged ten, attempted to present a unique chocolate gift to an important community member, it set off a series of events challenging the fragile balance between hope and despair, leaving behind a tale that shook the entire country.
                                    </div>
                                </div>
                            </div>
                            <div class="publication-container mb-4">
                                <div class="cover-image">
                                    <img src="assets/img/publications/creative_writing/in_search_of_a_name.jpg" alt="The Generosity of an Unfinished Childhood" />
                                </div>
                                <div class="content">
                                    <div class="title">In Search of a Name</div>
                                    <div class="subtitle">Novel <span class="book-status">(Work in Progress)</span></div>
                                    <div class="description">
                                        A story of betrayal set in the ruthless world of organized crime. Two soldiers from the same crime family, once friends, now engage in a relentless game of cat and mouse across the new frontier of Pacifica. Amidst their conflict, an innocent life gets caught in the crossfire.
                                    </div>
                                </div>
                            </div>
                            <div class="publication-container mb-4">
                                <div class="cover-image">
                                    <img src="assets/img/publications/creative_writing/the_tree_that_knew_too_much.jpg" alt="The Generosity of an Unfinished Childhood" />
                                </div>
                                <div class="content">
                                    <div class="title">The Tree That Knew Too Much</div>
                                    <div class="subtitle">Novel <span class="book-status">(Future Work)</span></div>
                                    <div class="description">                                    
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div class="flex-grow-1">
                            <h3 class="mb-2">IEEE</h3>
                            <div class="publication-container mb-4">
                                <div class="cover-image">
                                    <a href="https://www.springerprofessional.de/en/prediction-of-football-matches-results-using-neural-networks/16079454" target="_blank" rel="noopener noreferrer">
                                        <img src="assets/img/publications/ieee/prediction_of_football_matches.jpg" alt="Prediction of Football Matches’ Results Using Neural Networks" />
                                    </a>
                                </div>
                                <div class="content">
                                    <a href="https://www.springerprofessional.de/en/prediction-of-football-matches-results-using-neural-networks/16079454" target="_blank" rel="noopener noreferrer">
                                        <div class="title">Prediction of Football Matches’ Results Using Neural Networks</div>
                                    </a>
                                    <div class="description">
                                        In this paper, learning with a teacher artificial neural network to predict the results of football matches is presented. This type of network requires training via examples. When the training is complete, the network can be tested to check the results of new examples. In this application, the training examples are the results of previous matches, which the network will use to predict the results of new ones.
                                    </div>
                                </div>
                            </div>

                            <div class="publication-container mb-4">
                                <div class="cover-image">
                                    <a href="https://drive.google.com/file/d/1JSnWH-clSNpOgGem1Pvc5OAgdz1v7w4v/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                                        <img src="assets/img/publications/ieee/speed_warning_public_safety_via_gps.jpg" alt="Speed, Warning, and Public Safety via GPS" />
                                    </a>
                                </div>
                                <div class="content">
                                    <a href="https://drive.google.com/file/d/1JSnWH-clSNpOgGem1Pvc5OAgdz1v7w4v/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                                        <div class="title">Speed, Warning, and Public Safety via GPS</div>
                                    </a>
                                    <div class="description">
                                        <p>
                                            Despite the rational balance of speed limits on freeways, many drivers tend to surpass them, jeopardizing public safety. To mitigate the impacts of speeding, governments employ various methods, including radars, police patrols, and speed bumps. However, there remains a need for a procedure to fine drivers even without these methods. The number of radars in Lebanon is still limited, and drivers often disregard speed bumps and evade police patrols without penalties.
                                        </p>
                                        <p>
                                            The "Speed, Warning, and Public Safety via GPS" system automatically fines speeding drivers when they exceed the set speed limit, transmitting their ticketing information to the police. Additionally, it alerts drivers when they are approaching this limit and provides authorities with traffic violation statistics.
                                        </p>
                                        <p>
                                            Its main components include a GPS receiver, a microcontroller, and an Ethernet Shield. The GPS detects the driver's position and speed, sending the data to the microcontroller, which compares the speed to the limit of the detected position stored in its memory. Upon exceeding the limit, the microcontroller sends a data signal containing essential driver information through the Ethernet Shield to the police database.
                                        </p>
                                        <p>
                                            The project also supplies authorities with information regarding locations where traffic violations commonly occur, along with details about each violator. Being a university project, its primary limitation is its configuration to a limited number of areas. To extend its functionality nationwide, future engineers must incorporate areas covering all of Lebanon.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
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
                            <ol class=" mb-0">
                                <li>
                                    <b>TTV OptikApi Identity/Provisioning**</b>: A web portal for user authentication and provisioning, built with C#, MS SQL, MySQL, and Redis.
                                </li>
                                <li>
                                    <b>EAS Mobile App</b> A Flutter-based mobile application that uses socket.io to send push notifications in response to alerts.
                                </li>
                                <li>
                                    <b>NaaSMon Mobile App</b> Developed with React Native and a Python backend API, this app lists and filters Network Security Groups (NSGs), including their networks, locations, and performance metrics.
                                </li>
                                <li>
                                    <b>AccountManager Web App</b> A React.js web application designed for CRUD operations, enabling efficient user account management.
                                </li>
                                <li>
                                    <b>OPUS Subscriber API</b> A Node.js application that verifies subscriber information and caches it in Redis.
                                </li>
                                <li>
                                    <b>ChatChannels</b> A Mediaroom PF app that enables group chats for users watching TV together.
                                </li>
                                <li>
                                    <b>VideoPortal VR</b> A React VR application for Samsung GearVR that retrieves and displays lists of Video on Demand (VOD) content from an API.
                                </li>
                            </ol>
                        </div>
                        <div class="flex-shrink-0">
                            <span class="text-primary">September 2016 - Present</span>
                        </div>
                    </div>
                    <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div class="flex-grow-1">
                        <h3 class="mb-0">Solution Specialist Trainee</h3>
                        <div class="subheading mb-3">ISS International Software Solutions · Internship</div>
                        <ul class=" mb-0">
                            <li>
                                Created SharePoint web parts using .NET, HTML, and AngularJS.
                            </li>
                            <li>
                                Developed a Loan Calculator based on a Client-Side Model, utilized within a Banking
                            application.
                            </li>
                        </ul>
                        </div>
                        <div class="flex-shrink-0"><span class="text-primary">April 2016 - May 2016</span></div>
                    </div>
                    <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div class="flex-grow-1">
                            <h3 class="mb-0">System Engineer Trainee</h3>
                            <div class="subheading mb-3">Automation and Computer Technologies · Internship</div>
                            <ul class=" mb-0">
                            <li>
                                Joined ACT's Enterprise Services Department as a System Engineer.
                            </li>
                            <li>
                                Completed courses and tasks covering UNIX Fundamentals, Solaris Intermediate Administration, Solaris Advanced Administration, and Introduction to Backups and Restores.
                            </li>
                        </ul>
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
                            <div class="subheading mb-3">Lebanese Baccalaureate Certificate</div>
                            <div>Life Science</div>
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
                            <div class="skill-name">Adobe Photoshop</div>
                            <div class="skill-rating">
                                <div class="circle"></div>
                                <div class="circle"></div>
                                <div class="circle"></div>
                                <div class="circle empty"></div>
                                <div class="circle empty"></div>
                            </div>
                        </div>
                        <div class="skill">
                            <div class="skill-name">Adobe Illustrator</div>
                            <div class="skill-rating">
                                <div class="circle"></div>
                                <div class="circle"></div>
                                <div class="circle"></div>
                                <div class="circle empty"></div>
                                <div class="circle empty"></div>
                            </div>
                        </div>
                        <div class="skill">
                            <div class="skill-name">Adobe After Effects</div>
                            <div class="skill-rating">
                                <div class="circle"></div>
                                <div class="circle"></div>
                                <div class="circle"></div>
                                <div class="circle empty"></div>
                                <div class="circle empty"></div>
                            </div>
                        </div>
                        <div class="skill">
                            <div class="skill-name">Adobe Premiere</div>
                            <div class="skill-rating">
                                <div class="circle"></div>
                                <div class="circle"></div>
                                <div class="circle"></div>
                                <div class="circle empty"></div>
                                <div class="circle empty"></div>
                            </div>
                        </div>
                        <div class="skill">
                            <div class="skill-name">Adobe InDesign</div>
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
                                <div class="circle empty"></div>
                                <div class="circle empty"></div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </section>
            <hr class="m-0" />

            {/* Interests */}
            {/* <section class="resume-section" id="interests">
                <div class="resume-section-content">
                    <h2 class="mb-5">Interests</h2>
                    <p>Apart from being a software developer, I enjoy most of my time being outdoors. In the winter, I am an avid skier and novice ice climber. During the warmer months here in Colorado, I enjoy mountain biking, free climbing, and kayaking.</p>
                    <p class="mb-5">When forced indoors, I follow a number of sci-fi and fantasy genre movies and television shows, I am an aspiring chef, and I spend a large amount of my free time exploring the latest technology advancements in the front-end web development world.</p>
                    <div class="social-icons">
                        <div class="social-icon"><i class="fa-solid fa-film"></i></div>
                        <div class="social-icon"><i class="fa-solid fa-pen"></i></div>
                        <div class="social-icon"><i class="fa-solid fa-book-open-reader"></i></div>
                        <div class="social-icon"><i class="fas fa-hiking"></i></div>
                    </div>
                </div>
            </section>
            <hr class="m-0" /> */}

            {/* Languages */}
            <section class="resume-section" id="languages">
                <div class="resume-section-content">
                    <h2 class="mb-5">Languages</h2>
                    <div class="bar-container">
                        <div class="h4">Arabic</div>
                        <div class="bar-background" style="width: 100%;">
                            <div class="bar" style="width: 90%;"></div>
                        </div>
                    </div>
                    <div class="bar-container">
                        <div class="h4">English</div>
                        <div class="bar-background" style="width: 100%;">
                            <div class="bar" style="width: 75%;"></div>
                        </div>
                    </div>
                    <div class="bar-container">
                        <div class="h4">French</div>
                        <div class="bar-background" style="width: 100%;">
                            <div class="bar" style="width: 45%;"></div>
                        </div>
                    </div>
                </div>
            </section>
            <hr class="m-0" />

           {/* Favorites */}
           {/* <section class="resume-section" id="favorites">
            <div class="resume-section-content">
                <h2 class="mb-5">Favorites</h2>
                <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                    <ol class="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                        <img class="d-block w-100" src="https://via.placeholder.com/800x400" alt="First slide" />
                        <div class="carousel-caption d-none d-md-block">
                            <h5>First slide label</h5>
                        </div>
                        </div>
                        <div class="carousel-item">
                        <img class="d-block w-100" src="https://via.placeholder.com/800x400" alt="Second slide" />
                        <div class="carousel-caption d-none d-md-block">
                            <h5>Second slide label</h5>
                        </div>
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>
            </div>
           </section> */}
        </div>
        {/* Bootstrap core JS */}
        <script src="scripts/bootstrap.bundle.min.js"></script>
        {/* Core theme JS */}
        <script src="js/scripts.js"></script>
        <link rel="stylesheet" href="scripts/bootstrap.css" />
    </main>
  );
}
