import { Link, useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axiosAPI from '../axiosAPI.ts';
import { Container, Card, Button } from 'react-bootstrap';
import { Post } from '../types';

const PostDetail = () => {
  const {id} = useParams<{ id: string }>();
  const [post, setPost] = useState<Post | null>(null);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axiosAPI.get(`/posts/${id}.json`);
        setPost({id, ...response.data});
      } catch (error) {
        console.error('error fetching post:', error);
      }
    };
    (async () => {
      await fetchPost();
    })();
  }, [id]);
  const handleDelete = async () => {
    try {
      await axiosAPI.delete(`/posts/${id}.json`);
      navigate('/');
    } catch (error) {
      console.error('error deleting post:', error);
    }
  };
  if (!post) {
    return <p>loading...</p>;
  }
  return (
    <Container>
      <Card.Body>
        <Card.Title>{post.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{new Date(post.createdAt).toLocaleDateString()}</Card.Subtitle>
        <Card.Text>{post.body}</Card.Text>
        <Button variant="danger" onClick={handleDelete} className="me-3">Удалить</Button>
        <Link to={`/posts/${id}/edit`}>
          <Button variant="primary">Редактировать</Button>
        </Link>
      </Card.Body>
    </Container>
  );
};

export default PostDetail;