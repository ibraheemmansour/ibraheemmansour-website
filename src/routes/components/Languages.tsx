import languages from '../data/languages.json';
const languagesHtml = [];

for (let i = 0; i < languages.length; i++) {
 let language = (
    <div class="bar-container">
        <div class="h4">{languages[i].text}</div>
        <div class="bar-background width-100">
            <div id={languages[i].id} class={"bar width-" + languages[i].level}></div>
        </div>
    </div>
 )
 
 languagesHtml.push(language);
}

const LanguagesSection = () => (
    <section class="resume-section" id="languages">
        <div class="resume-section-content">
            <h2 class="mb-5">Languages</h2>
            {languagesHtml}
        </div>
    </section>
);

export default LanguagesSection;