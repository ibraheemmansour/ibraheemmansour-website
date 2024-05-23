import HomeSection from './components/Home';
import AboutSection from './components/About';
import PublicationsSection from './components/Publications';
import ExperienceSection from './components/Experience';
import EducationSection from './components/Education';
import SkillsSection from './components/Skills';

export default function Home() {
  return (
    <main>
        {/* Navigation */}
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
            <a class="navbar-brand js-scroll-trigger" href="#page-top">
                <span class="d-block d-lg-none">Ibraheem Mansour</span>
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="navbar-nav">
                    <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#home">Home</a></li>
                    <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#about">About Me</a></li>
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
        <div class="container">
            {/* Home */}
            <HomeSection />
            <hr class="m-0" />

            {/* About */}
            <AboutSection />
            <hr class="m-0" />

            {/* Publications */}
            <PublicationsSection />
            <hr class="m-0" />

            {/* Experience */}
            <ExperienceSection />
            <hr class="m-0" />

            {/* Education */}
            <EducationSection />
            <hr class="m-0" />

            {/* Skills */}
            <SkillsSection />       
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
    </main>
  );
}
