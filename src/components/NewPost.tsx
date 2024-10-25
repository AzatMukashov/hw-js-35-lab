import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosAPI from '../axiosAPI.ts';
import { Button, Container, Form } from 'react-bootstrap';

const NewPost: React.FC = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const navigate = useNavigate();
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      await axiosAPI.post('/posts.json', {title, body, createdAt: new Date().toISOString()});
      navigate('/');
    } catch (error) {
      console.error('error creating post:', error);
    }
  }
  return (
    <Container>
      <h1 className="text-primary my-4">Создать новый пост</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formTitle">
          <Form.Label>Заголовок</Form.Label>
          <Form.Control
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group controlId="formBody" className="mt-3">
          <Form.Label>Текст</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={body}
            onChange={(e) => setBody(e.target.value)}
            required
          />
        </Form.Group>
        <Button variant='primary' type='submit' className='mt-3'>Создать</Button>
      </Form>
    </Container>
  );
};

export default NewPost;