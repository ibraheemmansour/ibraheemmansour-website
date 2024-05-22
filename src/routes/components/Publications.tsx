const PublicationsSection = () => (
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
                                A story of betrayal set in the ruthless world of organized crime. Two soldiers from the same crime family, once friends, now engage in a game of cat and mouse across the new promised land, Pacifica. Amid their conflict, an innocent life gets caught in the crossfire.
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
);

export default PublicationsSection;