import publications from '../data/publications.json';
const creativeWritingPublications = [];
const ieeePublications = [];

for (let i = 0; i < publications.length; i++) {
    let publication = (
        <div class="mb-4">
            {/* show on xs screens */}
            <div class="d-sm-none">
                <div class="row mb-3">
                    <div class="col">
                        <img class="img img-fluid" src={publications[i].image} alt={publications[i].text} />
                    </div>
                    <div class="col">
                        <div class="title-xs">{publications[i].text}</div>
                        {publications[i].type !== null ? (
                            <div class="subtitle-xs">{publications[i].type}{publications[i].status != "Published" ? <span class="book-status"> ({publications[i].status})</span> : null}</div>
                        ) : null}
                    </div>
                </div>
                { 
                publications[i].description != null ?
                    <div class="row">
                        <div class="description">
                            {publications[i].description}
                        </div>
                    </div>
                    : null
                }
                {
                    publications[i].url != null ? 
                        <div class="row mb-1 mt-3">
                            <a class="center-div" href={publications[i].url} target="_blank" rel="noopener noreferrer">
                                <button class="btn width-50 btn-primary">{publications[i].category == "creative_writing" ? "Buy" : "View"}</button>
                            </a>
                        </div>
                    : null
                }
                <div class="center-div">
                    <hr class="width-75 mb-0" />
                </div>
            </div>
            {/* show on sm-md-lg screens */}
            <div class="d-none d-sm-block publication-container">
                <div class="row">
                    <div class="col-xl-3 col-lg-4 col-md-4 col-sm-6">
                        <img class="img img-fluid" src={publications[i].image} alt={publications[i].text} />
                    </div>
                    <div class="col-xl-9 col-lg-8 col-md-8 col-sm-6">
                        <div class="title">{publications[i].text}</div>
                        {publications[i].type !== null ? (
                                <div class="subtitle">{publications[i].type}{publications[i].status != "Published" ? <span class="book-status"> ({publications[i].status})</span> : null}</div>
                            ) : null}
                        <div class="description mb-4">
                            {publications[i].description}
                        </div>
                        {publications[i].url != null ? 
                        <a class="width-100" href={publications[i].url} target="_blank" rel="noopener noreferrer">
                            <button class="btn width-50 float-right btn-primary">{publications[i].category == "creative_writing" ? "Buy" : "View"}</button>
                        </a>
                        : null}
                    </div>
                </div>
            </div>
        </div>
    );

    publications[i].category === "creative_writing" ? creativeWritingPublications.push(publication) : ieeePublications.push(publication);
}

const PublicationsSection = () => (
    <section class="resume-section" id="publications">
        <div class="resume-section-content">
            <h2 class="mb-5">Publications</h2>
            <div class="d-flex flex-column flex-md-row justify-content-between mb-2">
                <div class="flex-grow-1">
                    <h3 class="mb-2">Creative Writing</h3>
                    {creativeWritingPublications}
                </div>
            </div>
            <div class="d-flex flex-column flex-md-row justify-content-between mb-2">
                <div class="flex-grow-1">
                    <h3 class="mb-2">IEEE</h3>
                    {ieeePublications}
                </div>
            </div>
        </div>
    </section>
);

export default PublicationsSection;