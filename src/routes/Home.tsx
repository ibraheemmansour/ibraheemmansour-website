const HomeSection = () => (
    <section class="resume-section" id="home">
        <div class="row">
            <div class="col-lg-5">
                <div class="image-container">
                    <img src="assets/img/main_photo.png" class="animated-image" alt="Animated Image" />
                </div>
            </div>
            <div class="col-lg-6 offset-lg-1 fixed-width">
                <div class="hello">Hello, It's Me</div>
                <h2 class="mb-0">Ibraheem</h2>
                <h1 class="text-primary">Mansour</h1>
                <div class="h4 mb-5">
                    And I'm a <span id="animated-text" class="text-primary"> </span>
                </div>
                <div class="subheading mb-4">
                    Beirut, Lebanon · (961) 3 062901 · 
                    <a href="mailto:ibraheemmansour@outlook.com">
                        ibraheemmansour@outlook.com
                    </a>
                </div>
                <div class="social-icons">
                    <a class="social-icon" href="http://lb.linkedin.com/in/IbraheemMansour" title="LinkedIn" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin"></i></a>
                    <a class="social-icon" href="https://twitter.com/@Ibraheem1334" title="Twitter" target="_blank" rel="noopener noreferrer"><i class="fab fa-twitter"></i></a>
                    <a class="social-icon" href="https://www.instagram.com/ibraheemmansour1992" title="Instagram" target="_blank" rel="noopener noreferrer"><i class="fab fa-instagram"></i></a>
                    <a class="social-icon" href="https://www.youtube.com/channel/UCFl20h5DWD0dtPD8jCIb8RA" title="YouTube" target="_blank" rel="noopener noreferrer"><i class="fab fa-youtube"></i></a>
                </div>
            </div>
        </div>
    </section>
);

export default HomeSection;