import React from 'react';
import Container from '@mui/material/Container'
import { makeStyles } from '@mui/styles';
import Gradient from 'rgt'

const useStyles = makeStyles({
  page: {
    maxWidth: '100%',
    height: '100%',
    backgroundColor: '#0d0d0d',
  },
  wrapper: {
    maxWidth: '100%',
    height: '100%',
    overflowY: 'auto',
  },
  content: {
    width: '70%',
    maxWidth: '70%',
    paddingTop: 250,
  },
  h2: {
    margin: 0,
    padding: 0,
    color: 'white',
    fontSize: 80,
    textAlign: 'center'
  },
  h3: {
    margin: 0,
    padding: 0,
    color: 'white',
    fontSize: 60,
    textAlign: 'center'
  },
  gradient: {
    marginLeft: '20px !important',
    paddingRight: 10
  },
  introduction: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    marginTop: 40
  },
  bold: {
    fontWeight: 'bold'
  }
});

const About = function() {
  const classes = useStyles();

  return (
    <Container className={`${classes.page}`} maxWidth={false} disableGutters>
      <Container className={`${classes.wrapper}`} maxWidth={false} disableGutters>
        <Container className={`${classes.content}`} maxWidth={false} disableGutters>
          <h2 className={`${classes.h2}`}>Hi there!</h2>
          <h3 className={`${classes.h3}`}>I'm
            <Gradient className={`${classes.gradient}`} dir="left-to-right" from="#0c3e52" to="#0969a5">&nbsp;Kenny</Gradient>
          </h3>
          <p className={`${classes.introduction}`}>
            As a <Gradient className={`${classes.gradient}`} dir="left-to-right" from="#0c3e52" to="#0969a5">DevOps Engineer</Gradient>, I have extensive experience in the design and implementation of infrastructure and automation solutions. <br/>
            My expertise includes <Gradient className={`${classes.gradient}`} dir="left-to-right" from="#0c3e52" to="#0969a5">automating</Gradient> product installations and common tasks with Ansible, as well as designing and implementing <Gradient className={`${classes.gradient}`} dir="left-to-right" from="#0c3e52" to="#0969a5">continuous integration and delivery pipelines</Gradient> using Jenkins. <br/>
            I am skilled in a variety of <Gradient className={`${classes.gradient}`} dir="left-to-right" from="#0c3e52" to="#0969a5">programming languages</Gradient>, <br/>
            including Python, Golang, Java and C++.<br/>
            Additionally, I have experience with <Gradient className={`${classes.gradient}`} dir="left-to-right" from="#0c3e52" to="#0969a5">containerization technologies</Gradient> such as Docker and Kubernetes.
            I am dedicated to delivering high-quality, reliable and scalable systems that meet the needs of both development and operations teams. 
            I am also passionate about promoting collaboration and communication between development and operations teams to streamline the software development process and improve the overall quality of the product.
          </p>
        </Container>
      </Container>
    </Container>
  );
};

export default About;