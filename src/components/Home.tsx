import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import axiosAPI from '../axiosAPI.ts';
import { Post } from '../types';

const Home: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axiosAPI.get('/posts.json');
        const postsData = response.data;
        const postsArray = postsData ? Object.keys(postsData).map(key => ({id: key, ...postsData[key]})) : [];
        setPosts(postsArray);
      } catch (error) {
        console.error('error fetching posts:', error);
      }
    };
    (async () => {
      await fetchPosts();
    })();
  }, []);
  return (
    <Container>
      <Row>
        <Col>
          <h1 className="text-primary my-4">Домашняя страница</h1>
          {posts.map(post => (
            <Card className="mb-4" key={post.id}>
              <Card.Body>
                <Card.Title>{post.title}</Card.Title>
                <Card.Text>{post.body.substring(0, 100)} ...</Card.Text>
                <Link to={`/posts/${post.id}`}>
                  <Button variant="primary">read more</Button>
                </Link>
              </Card.Body>
            </Card>
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
