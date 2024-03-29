import React from 'react';
import Container from '@mui/material/Container'
import SvgIcon from '@mui/material/SvgIcon';
import { makeStyles } from '@mui/styles';
import useScrollbarSize from 'react-scrollbar-size';

import ResumeBackground from '../images/resume-background.jpg';

import eboLogo from '../images/logos/ebo.png';
import skylineLogo from '../images/logos/skyline.png';

import { ReactComponent as FootBallIcon } from '../images/svg/football.svg';
import { ReactComponent as BicycleIcon } from '../images/svg/bicycle.svg';
import { ReactComponent as LearningIcon } from '../images/svg/learning.svg';
import { ReactComponent as BarIcon } from '../images/svg/bar.svg';

import SkillSlider from '../components/SkillSlider';
import SkillSpeedometer from '../components/SkillSpeedometer';
import Experience from '../components/Experience';
import Education from '../components/Education';
import Language from '../components/Language';

const useStyles = (props) => makeStyles({
  container: {
    maxWidth: '100%',
    height: '100%'
  },
  headerMaskEnd: {
    height: 50,
    position: 'fixed',
    top: 0,
    left: 0,
    maxWidth: `calc(100vw - ${props.scrollBarWidth}px) !important`,
    backgroundImage: `linear-gradient(to bottom, rgba(10, 10, 10, 0.5), rgba(10, 10, 10, 0.5)),
      url(${ResumeBackground})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
    zIndex: 10,
  },
  headerMaskStart: {
    height: 50,
    marginTop: 49,
    position: 'fixed',
    top: 0,
    left: 0,
    maxWidth: `calc(100vw - ${props.scrollBarWidth}px) !important`,
    backgroundImage: `linear-gradient(to bottom, rgba(10, 10, 10, 0.5), rgba(10, 10, 10, 0.5)),
      url(${ResumeBackground})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
    '-webkit-mask-image': '-webkit-gradient(linear, center top, center bottom, from(rgba(0,0,0,1)), to(rgba(0,0,0,0)))',
    zIndex: 10,
  },
  background: {
    backgroundImage: `linear-gradient(to bottom, rgba(10, 10, 10, 0.5), rgba(10, 10, 10, 0.5)),
      url(${ResumeBackground})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
    height: '100%',
    width: '100%',
    margin: 0,
    padding: 0,
  },
  scroller: {
    height: '100%',
    width: '100%',
    overflow: 'auto',
  },
  wrapper: {
    width: '100%',
    height: '100%',
    overflow: 'auto',
  },
  firstColumn: {
    float: 'left',
    marginTop: '70px !important',
    marginLeft: '30px !important',
    maxWidth: '100%',

    // Media query: 500px
    "@media (max-width: 500px)": {
      marginLeft: '0px !important',
    }
  },
  secondColumn: {
    float: 'left',
    marginTop: '70px !important',
    marginLeft: '30px !important',
    maxWidth: '100%',

    // Media query: 1225px
    "@media (max-width: 1225px)": {
      marginTop: '-40px !important',
    },
    // Media query: 500px
    "@media (max-width: 500px)": {
      marginLeft: '0px !important',
    }
  },
  thirdColumn: {
    float: 'left',
    marginTop: '70px !important',
    marginLeft: '30px !important',
    maxWidth: '100%',

    // Media query: 17550px
    "@media (max-width: 1755px)": {
      marginTop: '-40px !important',
    },
    // Media query: 500px
    "@media (max-width: 500px)": {
      marginLeft: '0px !important',
    }
  },
  wide: {
    maxWidth: 650,
  },
  normal: {
    maxWidth: 575,
  },
  narrow: {
    maxWidth: 500,
  },
  third: {
    height: 270, // 270 x 3 + 2x margin (20) = 850
  },
  halve: {
    height: 415, // 415 x 2 + 1x margin (20) = 850
  },
  twoFifths: {
    height: 332, // 332 + 498 + 1x margin (20) = 850
  },
  threeFifths: {
    height: 498,
  },
  section: {
    // border: '1px solid #0c3e52',
    marginBottom: '20px',
    maxWidth: '100%'
  },
  sectionTitle: {
    fontFamily: 'Motor Oil 1937 M54',
    fontSize: 25,
    color: '#ffffff',
    marginTop: 20,
    marginLeft: 20,
    marginBottom: 50,
    borderBottom: '3px solid #0c3e52',
    display: 'inline-block',
  },
  personalContainer: {
    marginTop: '-20px !important',
    paddingLeft: '20px !important',
  },
  personalSkills: {
    color: '#999',
  },
  hobbiesContainer: {
    width: '100%',
    height: 200,
    marginTop: '-15px !important',
  },
  hobbiesRowContainer: {
    width: '100%',
    height: 100,
    float: 'left'
  },
  hobby: {
    maxWidth: 60,
    height: 60,
    alignItem: 'center',
    border: '1px solid white',
    borderRadius: 50,
    float: 'left',
    marginLeft: '100px !important',
    marginRight: '-30px !important'
  },
  hobbyText: {
    color: 'white',
    fontFamily: 'Motor Oil 1937 M54',
    fontWeight: 'bold',
    padding: '0px !important',
    textAlign: 'center'
  },
  footballIcon: {
    color: 'white',
    width: '30px !important',
    height: '30px !important',
    margin: '15px !important'
  },
  bicycleIcon: {
    color: 'white',
    width: '40px !important',
    height: '40px !important',
    margin: '10px !important'
  },
  learningIcon: {
    color: 'white',
    width: '40px !important',
    height: '40px !important',
    margin: '10px !important'
  },
  barIcon: {
    color: 'white',
    width: '40px !important',
    height: '40px !important',
    margin: '10px !important'
  }
});

const Resume = function() {
  const { height, width } = useScrollbarSize();
  const props = {
    scrollBarWidth: width
  };
  const classes = useStyles(props)();

  const developmentSkills = [
    { name: "Python", abbreviation: "Py", percentage: 90 },
    { name: "Golang", abbreviation: "Go", percentage: 60 },
    { name: "Javascript", abbreviation: "Js", percentage: 80 },
    { name: "Java, C#, C++", abbreviation: "OO", percentage: 90 },
    { name: "Databases", abbreviation: "SQL", percentage: 80 }
  ];

  const operationsSkills = [
    { name: "Ansible", percentage: 100, },
    { name: "Docker", percentage: 90, },
    { name: "Kubernetes", percentage: 70 },
    { name: "OpenSearch", percentage: 80 },
    { name: "Jenkins", percentage: 70 }
  ];

  const experiences = [
    { image: eboLogo, timeline: "Oct 2021 - Present", title: "e-BO Enterprises", subtitle: "DevOps Engineer" },
    { image: eboLogo, timeline: "Feb 2020 - Oct 2021", title: "e-BO Enterprises", subtitle: "System Engineer" },
    { image: eboLogo, timeline: "Apr 2019 - Jan 2020", title: "e-BO Enterprises", subtitle: "Master Thesis, Student Job" },
    { image: skylineLogo, timeline: "Feb 2017 - Aug 2017", title: "Skyline Communications", subtitle: "Bachelor Thesis, Student Job" },
  ]

  const educations = [
    { title: "Master of Information Engineering Technology", subtitle: "Ghent University", subsubtitle: "2017 - 2019" },
    { title: "Bachelor of Electronics ICT", subtitle: "Odisee University College", subsubtitle: "2014 - 2017" },
    { title: "Economics & Mathematics", subtitle: "Atheneum Ypres", subsubtitle: "2007 - 2014" },
  ]

  const languages = [
    { name: "Dutch", percentage: 100, },
    { name: "English", percentage: 90, },
    { name: "French", percentage: 60 },

  ];

  return (
    <Container className={`${classes.container}`} maxWidth={false} disableGutters>
      
      {/* Transparancy gradient header = Fade out content */}
      <Container className={`${classes.headerMaskEnd}`} maxWidth={false} disableGutters/>
      <Container className={`${classes.headerMaskStart}`} maxWidth={false} disableGutters/>

      {/* Actual background and content */}
      <Container className={`${classes.background}`} maxWidth={false} disableGutters>
        <Container className={`${classes.scroller}`} maxWidth={false} disableGutters>
          <Container className={`${classes.wrapper}`} maxWidth={false} disableGutters>

            <Container className={`${classes.firstColumn} ${classes.wide}`} maxWidth={false} disableGutters>
              
              {/* Programming Skills */}
              <Container className={`${classes.section} ${classes.halve}`} maxWidth={false} disableGutters>
                <h2 className={`${classes.sectionTitle}`}>DEVELOPMENT SKILLS</h2>
                
                <Container className={`${classes.developerContainer}`} maxWidth={false} disableGutters>
                  {
                    developmentSkills.map((skill, index) =>
                      <SkillSlider 
                      key={`SkillSlider ${index}`}
                        name={skill.name} 
                        abbreviation={skill.abbreviation} 
                        percentage={skill.percentage}
                      />
                    )
                  }
                </Container>
              </Container>

              {/* SecDevOps Skills */}
              <Container className={`${classes.section} ${classes.halve}`} maxWidth={false} disableGutters>
                <h2 className={`${classes.sectionTitle}`}>OPERATIONS SKILLS</h2>

                <Container className={`${classes.operationsContainer}`} maxWidth={false} disableGutters>
                  {
                    operationsSkills.map((skill, index) =>
                      <SkillSpeedometer
                        key={`SkillSpeedometer ${index}`}
                        name={skill.name}
                        percentage={skill.percentage}
                        row={ index / 3 }
                      />
                    )
                  }
                </Container>
              </Container>

            </Container>

            <Container className={`${classes.secondColumn} ${classes.normal}`} maxWidth={false} disableGutters>

              {/* Experience */}
              <Container className={`${classes.section} ${classes.threeFifths}`} maxWidth={false} disableGutters>
                <h2 className={`${classes.sectionTitle}`}>EXPERIENCE</h2>
                
                <Container className={`${classes.experienceContainer}`} maxWidth={false} disableGutters>
                  {
                    experiences.map((experience, index) =>
                      <Experience 
                        key={`Experience ${index}`}
                        image={experience.image}
                        timeline={experience.timeline}
                        title={experience.title} 
                        subtitle={experience.subtitle} 
                        last={((index + 1) % (experiences.length))}
                      />
                    )
                  }
                </Container>
              </Container>

              {/* Education */}
              <Container className={`${classes.section} ${classes.twoFifths}`} maxWidth={false} disableGutters>
                <h2 className={`${classes.sectionTitle}`}>EDUCATION</h2>

                <Container className={`${classes.educationContainer}`} maxWidth={false} disableGutters>
                  {
                      educations.map((education, index) =>
                        <Education 
                          key={`Experience ${index}`}
                          title={education.title} 
                          subtitle={education.subtitle} 
                          subsubtitle={education.subsubtitle}
                        />
                      )
                    }
                </Container>
              </Container>

            </Container>

            <Container className={`${classes.thirdColumn} ${classes.narrow}`} maxWidth={false} disableGutters>
            
              {/* Languages */}
              <Container className={`${classes.section} ${classes.third}`} maxWidth={false} disableGutters>
                <h2 className={`${classes.sectionTitle}`}>LANGUAGES</h2> 

                <Container className={`${classes.languageContainer}`} maxWidth={false} disableGutters>
                  {
                    languages.map((language, index) =>
                      <Language 
                      key={`SkillSlider ${index}`}
                        name={language.name} 
                        percentage={language.percentage}
                      />
                    )
                  }
                </Container>
              </Container>

              {/* Personal Skills */}
              <Container className={`${classes.section} ${classes.third}`} maxWidth={false} disableGutters>
                <h2 className={`${classes.sectionTitle}`}>PERSONAL SKILLS</h2>

                <Container className={`${classes.personalContainer}`} maxWidth={false} disableGutters>
                  <p className={`${classes.personalSkills}`}>Amibition - Creativity - Team player - Honest</p>
                  <p className={`${classes.personalSkills}`}>Hard Working - Productive - Planning &amp; strategy</p>
                  <p className={`${classes.personalSkills}`}>Problem solving - Dedication - Curiosity - Patience</p>
                  <p className={`${classes.personalSkills}`}>Desire to learn - Reflective</p>
                </Container>
              </Container>

              {/* Hobbies & Interests */}
              <Container className={`${classes.section} ${classes.third}`} maxWidth={false} disableGutters>
                <h2 className={`${classes.sectionTitle}`}>HOBBIES &amp; INTERESTS</h2>

                <Container className={`${classes.hobbiesContainer}`} maxWidth={false} disableGutters>
                  <Container className={`${classes.hobbiesRowContainer}`} maxWidth={false} disableGutters>
                    
                    <Container className={`${classes.hobby}`} maxWidth={false} disableGutters>
                      <Container className={`${classes.hobbyContainer}`} maxWidth={false} disableGutters>
                        <SvgIcon className={`${classes.footballIcon}`} component={FootBallIcon} viewBox="0 0 500 500" />
                      </Container>
                      <Container className={`${classes.hobbyText}`}>Football</Container>
                    </Container>

                    <Container className={`${classes.hobby}`} maxWidth={false} disableGutters>
                      <Container className={`${classes.hobbyContainer}`} maxWidth={false} disableGutters>
                        <SvgIcon className={`${classes.bicycleIcon}`} component={BicycleIcon} viewBox="0 0 650 500" />
                      </Container>
                      <Container className={`${classes.hobbyText}`}>Bicycling</Container>
                    </Container>

                  </Container>
                  <Container className={`${classes.hobbiesRowContainer}`} maxWidth={false} disableGutters>
                    
                    <Container className={`${classes.hobby}`} maxWidth={false} disableGutters>
                      <Container className={`${classes.hobbyContainer}`} maxWidth={false} disableGutters>
                        <SvgIcon className={`${classes.learningIcon}`} component={LearningIcon} viewBox="0 0 650 500" />
                      </Container>
                      <Container className={`${classes.hobbyText}`}>Learning</Container>
                    </Container>

                    <Container className={`${classes.hobby}`} maxWidth={false} disableGutters>
                      <Container className={`${classes.hobbyContainer}`} maxWidth={false} disableGutters>
                        <SvgIcon className={`${classes.barIcon}`} component={BarIcon} viewBox="0 0 650 500" />
                      </Container>
                      <Container className={`${classes.hobbyText}`}>Bar</Container>
                    </Container>

                  </Container>
                </Container>

              </Container>

            </Container>

          </Container>
        </Container>
      </Container>
    </Container>
  );
};

export default Resume;