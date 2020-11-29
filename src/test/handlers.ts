// src/mocks/handlers.js
import { rest } from 'msw'
const originalPath = 'http://localhost:3000';

const jobs = [
{
      id: "10dddabd-2b7d-4503-b70b-30f1a78b464b",
      type: "Full Time",
      url: "https://jobs.github.com/positions/10dddabd-2b7d-4503-b70b-30f1a78b464b",
      created_at: "Sat Nov 28 00:52:19 UTC 2020",
      company: "E Shells Inc.",
      company_url: "http://www.shells.com",
      location: "Los Angeles/Partially Remote",
      title: "Senior Front End Designer/Developer Needed - Shells.com",
      description: "<p>We are looking for an experienced and talented senior developer / designer that fits the qualifications and dynamic needs for our front-end systems. This position will oversee two developers as well as act in a semi Project Managerial role to handle milestones and tasks for this position and over-seen developers. Application for this position will require two thorough interviews to test knowledge and integrity of programming languages and methods pursuing to applicable development.</p>\n<p>This position works directly with the VP of Operations, CEO and CTO and will be required to show presence in the Gardena, CA office at times per request by management.</p>\n<p>Please have all proof of work via GitHub, GitLab, or an equivalent portfolio to demonstrate skills and knowledge.</p>\n<p>Shells.com is a cloud desktop host bringing affordable desktop computing to every device with an internet connection and web browser. Our aim is to increase and maintain customer satisfaction while maintaining steady growth metrics. Working with shells provides competitive pay rates, and full health benefits at no cost to the employee.</p>\n<p>Instagram: @shellscom | Twitter: @shellsdotcom | Facebook: @shellsdotcom</p>\n<p>This job will work full time in a remote and IN office capacity directly under the VP of Operations. This position will receive a laptop and internet connection.</p>\n<p>Due to COVID-19, we at Shells.com allow and encourage our employees to reduce time at the office and work from home. For training, as needed and various reasons employees may need to be in our office, we provide masks, gloves, face-guards hand sanitizer, and have open space to keep employees 6 feet apart. All employees entering the facility will have their temperature checked.</p>\n<p>Responsibilities</p>\n<ul>\n<li>HTML / HTML5CSS</li>\n<li>Proficient in JavaScript</li>\n<li>Proficient in REACT</li>\n<li>Proficient design skills</li>\n<li>Good design skills, or mediator skills to accomplish design requirements</li>\n<li>Low level understanding of Internet protocols, including http, http2, quic, websocket</li>\n<li>Understanding of Windows and Linux Kernel</li>\n<li>Have solid knowledge of Linux Ubuntu and developing and deploying web services on Ubuntu Server</li>\n<li>Able to understand back end infrastructure easily and maintain both front and back end assets</li>\n<li>Developing front end website architecture.</li>\n<li>Designing user interactions on web pages.</li>\n<li>Developing back end website applications.Creating servers and databases for functionality.</li>\n<li>Ensuring cross-platform optimization for mobile devices.</li>\n<li>Ensuring responsiveness of applications.</li>\n<li>Working alongside graphic designers for web design features.</li>\n<li>Seeing through a project from conception to finished product.</li>\n<li>Designing and developing APIs.</li>\n<li>Meeting both technical and consumer needs.</li>\n<li>Staying abreast of developments in web applications and programming languages.</li>\n<li>Meeting with the development team to discuss user interface ideas and applications.</li>\n<li>Reviewing application requirements and interface designs.</li>\n<li>Identifying web-based user interactions.</li>\n<li>Developing and implementing highly-responsive user interface components using React concepts.</li>\n<li>Writing application interface codes using JavaScript following React.js workflows.</li>\n<li>Troubleshooting interface software and debugging application codes.</li>\n<li>Developing and implementing front-end architecture to support user interface concepts.</li>\n<li>Monitoring and improving front-end performance.</li>\n</ul>\n<p>Qualifications / Requirements</p>\n<ul>\n<li>3-5 Years Minimum Front End Development Experience with Proof</li>\n<li>3-5 Years Minimum Design Experience with Proof</li>\n<li>Able to travel to Gardena, CA Office on occasion (Lives within 1hr driving)</li>\n<li>Proficient Design Skills with Designing Modern Web Pages with Proof</li>\n<li>In-depth knowledge of JavaScript, CSS, HTML and front-end languages.</li>\n<li>Knowledge of REACT tools including React.js, Webpack, Enzyme, Redux, and Flux.</li>\n<li>Experience with user interface design.</li>\n<li>Experience with browser-based debugging and performance testing software.</li>\n</ul>\n",
      how_to_apply: "<p>Email your resume to <a href=\"mailto:careers@shells.com\">careers@shells.com</a></p>\n",
      company_logo: "https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBa1NSIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--d9c2664ef0c5ac5334cc00336aba75cf11d10c3b/Shells%2002.jpg"
}
]

export const handlers = [
  rest.get('http://localhost/positions.json', (req, res, ctx) => {
    // return res((res) => {
    //   // Respond with a 200 status code
    //   ctx.status(200)
    //   res.headers.set('Content-Type', 'application/json')
    //   ctx.json(jobs)
    //   return res
    // })
    return res(ctx.json(jobs));
  }),
]