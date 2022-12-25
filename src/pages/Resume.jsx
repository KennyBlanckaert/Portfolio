import React from 'react';
import Container from '@mui/material/Container'
import { makeStyles } from '@mui/styles';

import ResumeBackground from '../images/resume-background.jpg';

import SkillSlider from '../components/SkillSlider';

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
    border: '1px solid #0c3e52',
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
});

const Resume = function() {
  const classes = useStyles();

  const softwareSkills = [
    { name: "Python", abbreviation: "Py", percentage: 90 },
    { name: "Golang", abbreviation: "Go", percentage: 60 },
    { name: "Javascript", abbreviation: "Js", percentage: 80 },
    { name: "Java, C#, C++", abbreviation: "OO", percentage: 90 },
    { name: "Databases", abbreviation: "SQL", percentage: 80 },
  ]

  return (
    <Container className={`${classes.background}`} maxWidth={false} disableGutters>
      <Container className={`${classes.overlay}`} maxWidth={false} disableGutters>
        <Container className={`${classes.wrapper}`} maxWidth={false} disableGutters>

          <Container className={`${classes.column} ${classes.wide}`} maxWidth={false} disableGutters>
            
            {/* Programming Skills */}
            <Container className={`${classes.section} ${classes.halve}`} maxWidth={false} disableGutters>
              <h2 className={`${classes.sectionTitle}`}>PROGRAMMING SKILLS</h2>
              {
                softwareSkills.map((skill) =>
                  <SkillSlider 
                    key={skill.name}
                    name={skill.name} 
                    abbreviation={skill.abbreviation} 
                    percentage={skill.percentage}
                  />
                )
              }
            </Container>

            {/* SecDevOps Skills */}
            <Container className={`${classes.section} ${classes.halve}`} maxWidth={false} disableGutters>
              <h2 className={`${classes.sectionTitle}`}>OPERATION SKILLS</h2>

            </Container>

          </Container>

          <Container className={`${classes.column} ${classes.wide}`} maxWidth={false} disableGutters>

            {/* Eduction */}
            <Container className={`${classes.section} ${classes.threeFifths}`} maxWidth={false} disableGutters>

            </Container>

            {/* Experience */}
            <Container className={`${classes.section} ${classes.twoFifths}`} maxWidth={false} disableGutters>

            </Container>

          </Container>

          <Container className={`${classes.column} ${classes.narrow}`} maxWidth={false} disableGutters>
          
            {/* Languages */}
            <Container className={`${classes.section} ${classes.third}`} maxWidth={false} disableGutters>

            </Container>

            {/* Personal Skills */}
            <Container className={`${classes.section} ${classes.third}`} maxWidth={false} disableGutters>

            </Container>

            {/* Hobbies & Interests */}
            <Container className={`${classes.section} ${classes.third}`} maxWidth={false} disableGutters>

            </Container>

          </Container>

        </Container>
      </Container>
    </Container>
  );
};

export default Resume;