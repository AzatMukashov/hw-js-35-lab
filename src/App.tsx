import './App.css'
import { Route, BrowserRouter as Router, Routes, NavLink } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home.tsx';
import About from './components/About.tsx';
import Contact from './components/Contact.tsx';
import NewPost from './components/NewPost.tsx';
import PostDetail from './components/PostDetail.tsx';
import EditPost from './components/EditPost.tsx';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar bg="primary" variant="dark" expand="lg">
          <Container>
            <Navbar.Brand href="/">Мой вебсайт</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link as={NavLink} to="/" end>Дом</Nav.Link>
                <Nav.Link as={NavLink} to="/new-post" end>Добавить пост</Nav.Link>
                <Nav.Link as={NavLink} to="/about" end>О нас</Nav.Link>
                <Nav.Link as={NavLink} to="/contact" end>Контакт</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Container className="mt-4">
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/new-post" element={<NewPost/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/posts/:id" element={<PostDetail/>}/>
            <Route path="/posts/:id/edit" element={<EditPost/>}/>
          </Routes>
        </Container>
      </div>
    </Router>
  );
};
export default App
