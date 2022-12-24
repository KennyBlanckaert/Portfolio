import React from 'react';
import Container from '@mui/material/Container'
import { makeStyles } from '@mui/styles';

import ResumeBackground from '../images/resume-background.jpg';

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
    // overflow: 'scroll',
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
  },
  wide: {
    maxWidth: 650,
  },
  narrow: {
    maxWidth: 500,
  },
  section: {
    border: '1px solid #0c3e52',
    marginBottom: '20px'
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
  }
});

const Resume = function() {
  const classes = useStyles();

  return (
      <Container className={`${classes.background}`} maxWidth={false} disableGutters>
        <Container className={`${classes.overlay}`} maxWidth={false} disableGutters>
          <Container className={`${classes.wrapper}`} maxWidth={false} disableGutters>

            <Container className={`${classes.column} ${classes.wide}`} maxWidth={false} disableGutters>
              
              {/* Programming Skills */}
              <Container className={`${classes.section} ${classes.halve}`} maxWidth={false} disableGutters>

              </Container>

              {/* SecDevOps Skills */}
              <Container className={`${classes.section} ${classes.halve}`} maxWidth={false} disableGutters>

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