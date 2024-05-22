const ExperienceSection = () => (
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
);

export default ExperienceSection;