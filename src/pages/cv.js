import Helmet from 'react-helmet';
import React from 'react';

import PageBlock from '../components/PageBlock';
import Project from '../components/Project';
import WorkExperience from '../components/WorkExperience';
import SkillSet from '../components/SkillSet';
import Contact from '../components/Contact';

const CV = () => (
  <div>
    <Helmet title="Viktor Kalajo | Curriculum Vitae (CV)" />
    <PageBlock>
      <h1>
        <span>Web developer</span>
        Viktor Kalajo
      </h1>
      <p>
        I have about 6 years of experience in the web development industry and I consider front end
        development in general and JavaScript in particular as my core competences.
      </p>
      <p>
        The last couple of years my primary focus has been with technologies and frameworks such as{' '}
        <strong>React</strong>, <strong>Node</strong> and <strong>Express</strong>. I'm also
        well-versed in general front end stuff such as HTML, CSS, build tools, accessibility, SEO
        and performance.
      </p>
      <p>Clients I've worked with include Spotify, SVT and MTG.</p>
    </PageBlock>

    <PageBlock>
      <h2>Work experience</h2>

      <WorkExperience
        title="Senior interface developer"
        employer="Creuna"
        from="Q1 2014"
        to="Q1 2018"
      />

      <WorkExperience title="Developer" employer="Self-employed" from="Q1 2011" to="present" />
    </PageBlock>

    <PageBlock>
      <h2>Highlighted projects</h2>

      <Project
        title="SVT Sport (via Creuna)"
        from="Q3 2014"
        to="Q2 2017"
        image={{ src: 'assets/img/case-svt-sport.jpg', alt: 'Screenshot SVT Sport' }}
        tags={[
          'React',
          'Node',
          'Express',
          'Heroku',
          'Webpack',
          'MongoDB',
          'Redis',
          'Scrum',
          'Isomorphism',
          'Universal app',
          'Akamai'
        ]}
      >
        <p>
          SVT site for sport news, <a href="https://svt.se/sport">svtsport.se</a>. Isomorphic /
          universal SPA built using <strong>React</strong>, <strong>Node</strong> and{' '}
          <strong>Express</strong>. High demands on performance and accessibility with ~500k unique
          visitors per week. My role was as a developer and Scrum master.
        </p>
      </Project>

      <Project
        title="Akademibokhandeln (via creuna)"
        from="Q2 2017"
        to="Q1 2018"
        tags={[
          'Python',
          'Django',
          'React',
          'PostgreSQL',
          'Heroku',
          'ElasticSearch',
          'Redis',
          'Docker'
        ]}
      >
        <p>
          E-commerce site <a href="https://www.akademibokhandeln.se/">akademibokhandeln.se</a> for
          books built using technologies such as <strong>Django (Python)</strong>,{' '}
          <strong>React</strong> and <strong>ElasticSearch</strong>. I was the lead front end
          deveoper during my time on this project, but i also had the opertunity to work on the back
          end with Django.
        </p>
      </Project>

      <Project
        title="Thrive"
        from="Q1 2016"
        to="present"
        image={{ src: 'assets/img/case-thrive.png', alt: 'Screenshot Thrive' }}
        tags={['React', 'Redux', 'Node', 'Express', 'Heroku', 'MongoDB', 'REST']}
      >
        <p>
          Survey tool to facilitate the process of creating sustainable and efficient teams. Single
          page application built using <strong>React</strong>, <strong>Redux</strong>,{' '}
          <strong>Node</strong>, <strong>MongoDB</strong>, <strong>Heroku</strong> and{' '}
          <strong>CloudFlare</strong>. I was responsible for the entire tech stack in this project.
        </p>
      </Project>

      <Project
        title="MTG Viasat Set Top Box interface (Via Creuna)"
        from="Q1 2015"
        to="Q2 2015"
        tags={['Angular']}
      >
        <p>
          Prototype for a Set Top Box built using Angular. I were the lead developer on this
          project.
        </p>
      </Project>

      <Project
        title="Spotify Intranet (Via Creuna)"
        from="Q1 2014"
        to="Q4 2014"
        tags={['Angular', 'Python', 'Django']}
      >
        <p>
          Intranet for Spotify built using Angular & Django. I worked on the front end with Angular
          in this project.
        </p>
      </Project>
    </PageBlock>

    <PageBlock>
      <h2>Technical skills</h2>

      <SkillSet
        level="Highly skilled"
        levelDescription="Delivers extra high quality, takes lead within the expertice area and validates colleagues work."
        skills={['JavaScript', 'React', 'HTML', 'CSS', 'Front end architecture', 'jQuery', 'GIT']}
      />

      <SkillSet
        level="Skilled"
        levelDescription="Works independently within the expertise area."
        skills={[
          'Onpage SEO',
          'Node',
          'Express',
          'Heroku',
          'Django',
          'Python',
          'Scrum',
          'GIT',
          'Performance optimization',
          'Accessabilty',
          'Angular'
        ]}
      />

      <SkillSet
        level="Still learning"
        levelDescription="Some experience within the area but still needs support and quality validation."
        skills={[
          'System architecture',
          'Document databases',
          'Relational databases',
          'Search engines'
        ]}
      />
    </PageBlock>
    <PageBlock pageBreak="avoid">
      <h2>Education</h2>
      <h3>
        <span>Q3 2008 - Q4 2013</span>Master of Science
      </h3>
      <p>
        <a href="http://www.csc.kth.se/utbildning/kth/kompetensinriktning/progdesignindek/">
          Software Design
        </a>{' '}
        and{' '}
        <a href="http://www.kth.se/utbildning/program/civilingenjor/industriell-ekonomi/civilingenjor-industriell-ekonomi-300-hp-1.4891">
          Industrial Economics and Management
        </a>{' '}
        at <a href="http://www.kth.se/en">Royal Institute of Technology</a>.
      </p>
      <h3>Relevant coursework</h3>
      <ul>
        <li>
          <a href="http://www.kth.se/student/kurser/kurs/DH2460?l=en">
            Software Design - Business - Leadership
          </a>
        </li>
        <li>
          <a href="http://www.kth.se/student/kurser/kurs/ME2015?l=en">
            Project Management: Leadership and Control
          </a>
        </li>
        <li>
          <a href="http://www.kth.se/student/kurser/kurs/ME2017?l=en">
            Project Management: Leading Project-based Operations
          </a>
        </li>
        <li>
          <a href="http://www.kth.se/student/kurser/kurs/ME1304?l=en">Leadership</a>
        </li>
        <li>
          <a href="http://www.kth.se/student/kurser/kurs/ME1301?l=en">Industrial Management</a>
        </li>
        <li>
          <a href="http://www.kth.se/student/kurser/kurs/DD1334?l=en">Database Technology</a>
        </li>
        <li>
          <a href="http://www.kth.se/student/kurser/kurs/DH2460?l=en">Human-Computer Interaction</a>
        </li>
        <li>
          <a href="http://www.kth.se/student/kurser/kurs/DH2622?l=en">Interaction Programming </a>
        </li>
        <li>
          <a href="http://www.kth.se/student/kurser/kurs/DD2390?l=en">Internet Programming </a>
        </li>
        <li>
          <a href="http://www.kth.se/student/kurser/kurs/DD2385?l=en">Software Engineering</a>
        </li>
      </ul>
    </PageBlock>
    <PageBlock>
      <h2>Contact</h2>
      <Contact email="viktor.kalajo@gmail.com" phone="+46 73 313 70 33" />
    </PageBlock>
  </div>
);

export default CV;
