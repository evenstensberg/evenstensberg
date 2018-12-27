import React, {Component} from 'react';

import "./portfolio.scss";

function calculateAge(birthday) { // birthday is a date
    var ageDifMs = Date.now() - new Date(birthday).getTime();
    var ageDate = new Date(ageDifMs); // miliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }

class Portfolio extends Component {
    render() {
        return(
            <div className="portfolio">
                <h1>Even Stensberg ({calculateAge('1998-02-03')})</h1>
                <h1>evenstensberg@gmail.com</h1>
                <div className="section">
                    <div className="subsection">
                    <h2>Education</h2>
                    <h3>High School</h3>
                    <h4>
                        - Akademiet Heltberg Toppidrettsgymnasium, Molde, Norway 2014/2016, General Studies w/sports
                    </h4>
                    <h4>
                       - Soloer Videregaaende Skole, Flisa, Norway 2016/2017, General Studies
                    </h4>
                    <h3>University</h3>
                    <h4>
                        - Artic University of Norway, Tromsoe, Norway 2017/2020, Computer Science/Computer Information Science, Bachelor
                    </h4>
                    <h3>Certifications & Courses</h3>
                    <h4>
                        - Introduction to Databases, Online, 2011, Stanford University
                    </h4>
                    <h4>
                    - Machine Learning, Online, 2011, Stanford University
                    </h4>
                    <h4>
                    - Introduction to AI Advanced Track, Online, 2011, Stanford University
                    </h4>
                    <h4>
                    - Khan Academy, Coursera, Udacity, Online, 2011-2014, Web Development and Computer Science
                    </h4>
                    </div>
                    <div className="subsection">
                    <h2>Work Experience</h2>
                    <h3>
                        - Seasonal Job, Outdoor Maintenance, Lilleborg AS, Jun/Aug 2015
                    </h3>
                    <h3>
                        - Front End Developer S'16, <a href="https://dossiersolutions.com/">Dossier Solutions</a>, Jun/Aug 2016
                    </h3>
                    <h3>
                        - Software Engineer Contractor, Google, 2017
                    </h3>
                    <h3>
                        - Software Developer Contractor, Fin Tech, USA, 2017
                    </h3>
                    <h3>
                        - Front End Developer Intern S'18, <a href="https://www.teliacompany.com/en">Telia Company</a>, Jun/Aug 2018
                    </h3>
                    <h3>
                        - Front End Developer Full Time, <a href="https://www.teliacompany.com/en">Telia Company</a>, Sept/Current
                    </h3>
                    </div>
                  
                    <div className="subsection">
                    <h2>Volunteering</h2>
                    <h3>
                        -Soloer LAN(Leader/Founder of a LAN party), <a href="https://www.ostlendingen.no/solor/solor/kommunen-hadde-ikke-penger-unga-fikset-lan-selv/s/2-2.2757-1.8100772">article</a> in norwegian
                    </h3>
                    <h3>
                        - Moere og Romsdal Dataforening(Lead/Founder of a local computer club)
                    </h3>
                    <h3>
                        - GameOverHate (I was in Vienna to discuss discrimination and sexism in games in 2015), Vienna, <a href="http://gameoverhate.nerdy.canopus.uberspace.de/2015/10/06/gender-and-sexuality-event-was-a-success/">read more</a>
                    </h3>
                    <h3>
                        - Mentoring, now and then mentor students interested in Computer Science
                    </h3>
                    </div>
                    <div className="subsection">
                    <h2>Speaking</h2>
                    <h3>
                        - JSHeroes 2017, Cluj-Napoca, Romania <a href="https://www.youtube.com/watch?v=iKgJVh7bWlc">Full Config Jacket</a>
                    </h3>
                    <h3>
                    - The Gathering 2016, Hamar, Norway, React, a lightning fast framework
                    </h3>
                    <h3>
                    - SFNodeJS, San Fransisco, USA, <a href="https://www.youtube.com/watch?v=NEE-YE7tWPs">Making Tectonic Shifts in Node</a>
                    </h3>
                    <h3>
                    - Workshops on behalf of Moere og Romsdal Dataforening
                    </h3>
                    <h3>
                    - Hackathon for local youth from where I grew up, <a href="http://www.isolor.no/nyheter/even-vil-bidra-til-aa-oke-kompetansen-i-solor">article</a> in norwegian
                    </h3>
                    </div>
                    <div className="subsection">
                    <h2>
                        Interests
                    </h2>
                    <h3>- Soccer, stats found <a href="https://www.fotball.no/fotballdata/person/profil/?fiksId=3425533">here</a> :)</h3>
                    <h3>- Kayak</h3>
                    <h3>- Lift weights</h3>
                    </div>
                </div>
                <div className="section">
                <div  className="subsection">
                    <h2>References</h2>
                    <h4>Even Stensberg, born February 3, 1998, has been working for Dossier Solutions as a frontend developer for six weeks this summer. Even has been working with the Javascript front end to our application for capability management. His primary task has been including the Immutable.js library into our application.
                         Even has been a hard working employee and he has fulfilled all our expectations. Even is very talented, and has shown Javascript programming skills that I have not seen before from such a young employee. He is also capable of learning fast and to work independently keeping focus on his tasks.</h4>
            </div>
                </div>
            </div>
        )
    }
}

export default Portfolio;