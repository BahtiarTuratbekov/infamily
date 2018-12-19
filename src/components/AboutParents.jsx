import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../css/AdoptiveParent.css';
import { Jumbotron, Grid, Row, Col, Image } from 'react-bootstrap';
import Carousel from 'nuka-carousel';

export default class Home extends Component {
  render() {
      return (
        <div>
          <div className="slider-list">
            <div className="slider-slide">
              <h1>InFamily</h1>
                  <Carousel>
                    <img height={300} alt="300x300" src="https://flytothesky.ru/wp-content/uploads/2017/06/98687-696x392.jpg" />
                    <img height={300} alt="300x300" src="http://linesa.ru/uploads/posts/2016-03/1457265800_1.jpg" />
                    <img height={300} alt="300x300" src="http://www.garmoniazhizni.com/wp-content/uploads/2015/11/vzaimoponimanie-v-seme.jpg" />
                  </Carousel>
            </div>
          </div>
          <Grid>
            <Jumbotron>
              <h2>О приемных родителях</h2>
              <Row className="show-grid text-center">
                <Col xs={12} sm={4} className="cat-wrapper">
                  <Image src="https://flytothesky.ru/wp-content/uploads/2017/06/98687-696x392.jpg" circle className="picture"/>
                  <Link to="/info">
                  <h3>Базовые советы по решению конфликтов</h3>
                  </Link>
                </Col>
                <Col xs={12} sm={4} className="cat-wrapper">
                  <Image src="http://linesa.ru/uploads/posts/2016-03/1457265800_1.jpg" circle className="picture"/>
                  <Link to="/docs">
                  <h3>Как сохранить взаимопонимание</h3>
                  </Link>
                </Col>
                <Col xs={12} sm={4} className="cat-wrapper">
                  <Image src="http://www.garmoniazhizni.com/wp-content/uploads/2015/11/vzaimoponimanie-v-seme.jpg" circle className="picture"/>
                  <Link to="/test">
                  <h3>Досуг"</h3>
                  </Link>
                </Col>
              </Row>
            </Jumbotron>
          </Grid>
        </div>
    )
  }
}
