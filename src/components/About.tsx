import { Card, Col, Container, Row } from "react-bootstrap";

const About = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h1 className="text-primary my-4">О нас</h1>
          <p>
            Мы - компания, которая ценит совершенство. Наша цель - превзойти
            ожидания клиентов и предоставить превосходную ценность.
          </p>
          <h3 className="my-4">Наша команда</h3>
          <Row>
            <Col md={4}>
              <Card className="mb-4">
                <Card.Img variant="top" src="https://via.placeholder.com/150" />
                <Card.Body>
                  <Card.Title>Джон До</Card.Title>
                  <Card.Text>
                    Генеральный директор и основатель. Джон руководит компанией,
                    стремясь к росту и инновациям.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="mb-4">
                <Card.Img variant="top" src="https://via.placeholder.com/150" />
                <Card.Body>
                  <Card.Title>Джейн Смит</Card.Title>
                  <Card.Text>
                    Главный операционный директор. Джейн обеспечивает
                    бесперебойную и эффективную работу.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="mb-4">
                <Card.Img variant="top" src="https://via.placeholder.com/150" />
                <Card.Body>
                  <Card.Title>Эмили Джонсон</Card.Title>
                  <Card.Text>
                    Технический директор. Эмили управляет нашими
                    технологическими инновациями и IT-инфраструктурой.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <h3>Наша история</h3>
          <p>
            Наша компания, основанная в 2010 году, выросла из небольшого
            стартапа в ведущего игрока отрасли.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
