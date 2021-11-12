import { Fragment } from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import classes from "./about.module.css";
import imagesrc from "../assets/myportimg.jpg";
import CustomButton from "../components/UI/CustomButton";
import GitHubIcon from "@material-ui/icons/GitHub";


const About = () => {
  return (
    <Fragment>
      <Container fluid >
        <Row>
          <Col sm={12}>
            <img src={imagesrc} alt="profile pic" className={classes.profile} />
            
            <CustomButton size="lg" type="success" className={classes.btn}>
              <span className={classes.icon}>
                <GitHubIcon />
              </span> 
              <a rel="noreferrer" className={classes.anchor} target="_blank" href="https://github.com/manisrini/">View Profile</a> 
            </CustomButton>
          </Col>
          <Col sm={12}>
            <Card className={classes.card}>
              <Card.Header as="h1" className={classes.title}>
                ABOUT ME
              </Card.Header>
              <Card.Text className={classes.content}>
                <span className={ classes.firstline}>Hi I am Manikandan S.</span>
                <br />I am a passionate programmer and a full stack developer who works hard to solve real
                world problems.I  aim to develop softwares which makes people lives easier. I have worked in MERN stack and Python/Django stack. I love to work in various domains like
                <strong> <ul style={{ textAlign: 'center', listStyle:'none' }} ><li >Web development</li><li>Cloud Computing</li><li>App development</li><li> Computer Vision</li></ul>  </strong>.
                </Card.Text >
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default About;
