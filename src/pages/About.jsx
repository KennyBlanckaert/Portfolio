import React from 'react';
import Container from '@mui/material/Container'
import { makeStyles } from '@mui/styles';
import Gradient from 'rgt'

import SocialMediaBar from '../components/SocialMediaBar';

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
    width: '100%',
    maxWidth: '100%',
    paddingTop: 150,
    paddingLeft: 150,
    marginLeft: '0px !important',

    // Media query: 1000px
    "@media (max-width: 1000px)": {
      width: '80%',
      maxWidth: '80%',
      paddingLeft: 50
    },
    // Media query: 900px
    "@media (max-width: 500px)": {
      width: '80%',
      maxWidth: '80%',
      paddingTop: 80,
      paddingLeft: 50
    },
  },
  title: {
    fontFamily: 'Motor Oil 1937 M54',
    fontSize: 36,
    color: '#ffffff',
    marginTop: 20,
    marginLeft: 20,
    marginBottom: 100,
    borderBottom: '3px solid #0c3e52',
    display: 'inline-block',
  },
  introduction: {
    maxWidth: 800,
    color: 'white',
    fontSize: 18,
    textAlign: 'left',
    lineHeight: 1.3,
    marginTop: 20,
    marginLeft: 20
  },
  gradient: {
    marginLeft: '20px !important',
    paddingRight: 10
  }
});

const About = function() {
  const classes = useStyles();

  return (
    <Container className={`${classes.page}`} maxWidth={false} disableGutters>
      <Container className={`${classes.wrapper}`} maxWidth={false} disableGutters>
        <Container className={`${classes.content}`} maxWidth={false} disableGutters>
          <h2 className={`${classes.title}`}>ABOUT</h2>

          <p className={`${classes.introduction}`}>
            As a <Gradient className={`${classes.gradient}`} dir="left-to-right" from="#0c3e52" to="#0969a5">DevOps Engineer</Gradient>, I have extensive experience in the design and implementation of infrastructure and automation solutions. <br/>
            My expertise includes <Gradient className={`${classes.gradient}`} dir="left-to-right" from="#0c3e52" to="#0969a5">automating</Gradient> product installations and common tasks with Ansible, as well as designing and implementing <Gradient className={`${classes.gradient}`} dir="left-to-right" from="#0c3e52" to="#0969a5">continuous integration and delivery pipelines</Gradient> using Jenkins. <br/>
            I am skilled in a variety of <Gradient className={`${classes.gradient}`} dir="left-to-right" from="#0c3e52" to="#0969a5">programming languages</Gradient>, including Python, Golang, Java and Javascript.<br/>
            Additionally, I have experience with <Gradient className={`${classes.gradient}`} dir="left-to-right" from="#0c3e52" to="#0969a5">containerization technologies</Gradient> such as Docker and Kubernetes.
            I am dedicated to delivering high-quality, reliable and scalable systems that meet the needs of both development and operations teams. 
            I am also passionate about promoting collaboration and communication between development and operations teams to streamline the software development process and improve the overall quality of the product.
          </p>
        </Container>

        {/* Social media and Contacts icons */}
        <SocialMediaBar />

      </Container>
    </Container>
  );
};

export default About;