import React from 'react';
import Container from '@mui/material/Container'
import SvgIcon from '@mui/material/SvgIcon';
import { makeStyles } from '@mui/styles';

import ResumeBackground from '../images/resume-background.jpg';

import { ReactComponent as FootBallIcon } from '../images/svg/football.svg';
import { ReactComponent as BicycleIcon } from '../images/svg/bicycle.svg';
import { ReactComponent as LearningIcon } from '../images/svg/learning.svg';
import { ReactComponent as BarIcon } from '../images/svg/bar.svg';

import SkillSlider from '../components/SkillSlider';
import SkillSpeedometer from '../components/SkillSpeedometer';
import Experience from '../components/Experience';
import Education from '../components/Education';
import Language from '../components/Language';

const useStyles = makeStyles({
  background: {
    backgroundImage: `url(${ResumeBackground})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
    height: '100%',
    width: '100%',
    margin: 0,
    padding: 0,
  },
  overlay: {
    backgroundColor: 'rgba(10, 10, 10, 0.5)',
    height: '100%',
    width: '100%',
    overflow: 'auto',
  },
  wrapper: {
    width: '100%',
  },
  firstColumn: {
    float: 'left',
    marginTop: '70px !important',
    marginLeft: '30px !important',
    maxWidth: '100%',

    "@media (max-width: 500px)": {
      marginLeft: '0px !important',
    }
  },
  secondColumn: {
    float: 'left',
    marginTop: '70px !important',
    marginLeft: '30px !important',
    maxWidth: '100%',

    "@media (max-width: 1225px)": {
      marginTop: '-40px !important',
    },
    "@media (max-width: 500px)": {
      marginLeft: '0px !important',
    }
  },
  thirdColumn: {
    float: 'left',
    marginTop: '70px !important',
    marginLeft: '30px !important',
    maxWidth: '100%',

    "@media (max-width: 1755px)": {
      marginTop: '-40px !important',
    },
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
  const classes = useStyles();

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
    { timelineEnd: "Present", timelineStart: "Oct 2021", title: "e-BO Enterprises", subtitle: "DevOps Engineer" },
    { timelineEnd: "Oct 2021", timelineStart: "Feb 2020", title: "e-BO Enterprises", subtitle: "System Engineer" },
    { timelineEnd: "Jan 2020", timelineStart: "Apr 2019", title: "e-BO Enterprises", subtitle: "Master Thesis, Student Job" },
    { timelineEnd: "Aug 2017", timelineStart: "Feb 2017", title: "Skyline Communications", subtitle: "Bachelor Thesis, Student Job" },
  ]

  const educations = [
    { title: "Master of Information Engineering Technology", subtitle: "Ghent University" },
    { title: "Bachelor of Electronics ICT", subtitle: "Odisee University College" },
    { title: "Economics & Mathematics", subtitle: "Atheneum Ypres" },
  ]

  const languages = [
    { name: "Dutch", percentage: 100, },
    { name: "English", percentage: 90, },
    { name: "French", percentage: 60 },

  ];

  return (
    <Container className={`${classes.background}`} maxWidth={false} disableGutters>
      <Container className={`${classes.overlay}`} maxWidth={false} disableGutters>
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
                      timelineEnd={experience.timelineEnd}
                      timelineStart={experience.timelineStart}
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
  );
};

export default Resume;