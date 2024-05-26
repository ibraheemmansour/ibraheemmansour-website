const HomeSection = () => (
    <section class="resume-section" id="home">
        <div class="row justify-content-around align-items-center">
            <div class="col-lg-8 col-sm-8 fixed-width mb-5">
                <div class="hello">Hello, It's Me</div>
                <h2 class="mb-0">Ibraheem</h2>
                <h1 class="text-primary">Mansour</h1>
                <div class="h4 mb-3">
                    And I'm a <span id="animated-text" class="text-primary">
                        Computer and Communications Engineer Graduate
                    </span>
                </div>
                <div class="mb-4">
                    Beirut, Lebanon · (961) 3 062901 · 
                    <a href="mailto:ibraheemmansour@outlook.com">
                        ibraheemmansour@outlook.com
                    </a>
                </div>
                <div class="social-icons">
                    <a class="social-icon mb-1" href="http://lb.linkedin.com/in/IbraheemMansour" title="LinkedIn" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin"></i></a>
                    <a class="social-icon mb-1" href="https://twitter.com/@Ibraheem1334" title="Twitter" target="_blank" rel="noopener noreferrer"><i class="fab fa-twitter"></i></a>
                    <a class="social-icon mb-1" href="https://www.instagram.com/ibraheemmansour1992" title="Instagram" target="_blank" rel="noopener noreferrer"><i class="fab fa-instagram"></i></a>
                    <a class="social-icon mb-1" href="https://www.youtube.com/channel/UCFl20h5DWD0dtPD8jCIb8RA" title="YouTube" target="_blank" rel="noopener noreferrer"><i class="fab fa-youtube"></i></a>
                    <a class="social-icon mb-1" href="https://github.com/ibraheemmansour" title="GitHub" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i></a>
                    <a class="social-icon mb-1" href="https://wa.me/9613062901" title="WhatsApp" target="_blank" rel="noopener noreferrer"><i class="fab fa-whatsapp"></i></a>
                    <a class="social-icon mb-1" href="https://www.goodreads.com/author/show/49698345.Ibraheem_Mansour" title="goodreads" target="_blank" rel="noopener noreferrer"><i class="fab"><img src="public/assets/img/icons/goodreads.png" alt="GoodReads" class="img img-fluid" /></i></a>
                    <a class="social-icon mb-1" href="https://www.amazon.com/stores/Ibraheem-Mansour/author/B0D3NXLWNS" title="Amazon" target="_blank" rel="noopener noreferrer"><i class="fab fa-amazon"></i></a>                    
                </div>
            </div>
            <div class="col-lg-4 col-sm-4 center-div">
                <div class="image-container">
                    <img src="assets/img/main_photo.png" class="animated-image" alt="Animated Image" />
                </div>
            </div>            
        </div>        
    </section>
);

export default HomeSection;