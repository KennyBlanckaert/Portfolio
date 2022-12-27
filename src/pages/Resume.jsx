import React from 'react';
import Container from '@mui/material/Container'
import { makeStyles } from '@mui/styles';

import ResumeBackground from '../images/resume-background.jpg';

import SkillSlider from '../components/SkillSlider';
import SkillSpeedometer from '../components/SkillSpeedometer';
import Experience from '../components/Experience';

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
  column: {
    float: 'left',
    marginTop: '70px !important',
    marginLeft: '30px !important',
    maxWidth: '100%'
  },
  wide: {
    maxWidth: 650,
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
    { timelineStart: "Oct 2021", timelineEnd: "Present", title: "E-BO ENTERPRISES", subtitle: "DevOps Engineer" },
    { timelineStart: "Feb 2020", timelineEnd: "Oct 2021", title: "E-BO ENTERPRISES", subtitle: "System Engineer" },
    { timelineStart: "Apr 2019", timelineEnd: "Jan 2020", title: "E-BO ENTERPRISES", subtitle: "Master Thesis, Student Job" },
    { timelineStart: "Feb 2017", timelineEnd: "Aug 2017", title: "SKYLINE COMMUNICATIONS", subtitle: "Bachelor Thesis, Student Job" },
  ]

  return (
    <Container className={`${classes.background}`} maxWidth={false} disableGutters>
      <Container className={`${classes.overlay}`} maxWidth={false} disableGutters>
        <Container className={`${classes.wrapper}`} maxWidth={false} disableGutters>

          <Container className={`${classes.column} ${classes.wide}`} maxWidth={false} disableGutters>
            
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

          <Container className={`${classes.column} ${classes.wide}`} maxWidth={false} disableGutters>

            {/* Experience */}
            <Container className={`${classes.section} ${classes.threeFifths}`} maxWidth={false} disableGutters>
              <h2 className={`${classes.sectionTitle}`}>EXPERIENCE</h2>
              
              <Container className={`${classes.experienceContainer}`} maxWidth={false} disableGutters>
                {
                  experiences.map((experience, index) =>
                    <Experience 
                      key={`Experience ${index}`}
                      timelineStart={experience.timelineStart}
                      timelineEnd={experience.timelineEnd}
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

              </Container>
            </Container>

          </Container>

          <Container className={`${classes.column} ${classes.narrow}`} maxWidth={false} disableGutters>
          
            {/* Languages */}
            <Container className={`${classes.section} ${classes.third}`} maxWidth={false} disableGutters>
              <h2 className={`${classes.sectionTitle}`}>LANGUAGES</h2> 

              <Container className={`${classes.languageContainer}`} maxWidth={false} disableGutters>

              </Container>
            </Container>

            {/* Personal Skills */}
            <Container className={`${classes.section} ${classes.third}`} maxWidth={false} disableGutters>
              <h2 className={`${classes.sectionTitle}`}>PERSONAL SKILLS</h2>

              <Container className={`${classes.personalContainer}`} maxWidth={false} disableGutters>

              </Container>
            </Container>

            {/* Hobbies & Interests */}
            <Container className={`${classes.section} ${classes.third}`} maxWidth={false} disableGutters>
              <h2 className={`${classes.sectionTitle}`}>HOBBIES &amp; INTERESTS</h2>

              <Container className={`${classes.hobbiesContainer}`} maxWidth={false} disableGutters>

              </Container>
            </Container>

          </Container>

        </Container>
      </Container>
    </Container>
  );
};

export default Resume;