import { Button, Col, Container, Form, Row } from "react-bootstrap";

const Contact = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h1 className="text-primary">Связь с нами</h1>
          <p>
            Не стесняйтесь обращаться к нам через контактную форму нижу или
            через наши каналы в социальных сетях.
          </p>
          <Form>
            <Form.Group controlId="formName">
              <Form.Label>Имя</Form.Label>
              <Form.Control type="text" placeholder="Введите ваше имя" />
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Label>Почта</Form.Label>
              <Form.Control type="email" placeholder="Введите вашу почту" />
            </Form.Group>
            <Form.Group controlId="formMessage">
              <Form.Label>Сообщение</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Ваше сообщение"
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="mt-1">
              Отправить
            </Button>
          </Form>
          <h3>Наше местоположение</h3>
          <p>123 Главная улица, Город, Страна</p>
          <h3>Подписывайтесь на нас</h3>
          <ul>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Instagram</li>
            <li>TikTok</li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
