import { useNavigate, useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axiosAPI from '../axiosAPI.ts';
import { Button, Container, Form } from 'react-bootstrap';

const EditPost = () => {
  const {id} = useParams<{ id: string }>();
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const navigate = useNavigate();
  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axiosAPI.get(`/posts/${id}.json`);
        const postData = response.data;
        setTitle(postData.title);
        setBody(postData.body);
      } catch (error) {
        console.error('error fetching post:', error);
      }
    };
    (async () => {
      await fetchPost();
    })();
  }, [id]);
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      await axiosAPI.put(`/posts/${id}.json`, {title, body, createdAt: new Date().toISOString()});
      navigate(`/posts/${id}`);
    } catch (error) {
      console.error('error updating post:', error);
    }
  }
  return (
    <Container>
      <h1 className="text-primary my-4">Редактировать пост</h1>
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
        <Button variant='primary' type='submit' className='mt-3'>Сохранить</Button>
      </Form>
    </Container>
  );
};

export default EditPost;