import React, { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Col, Row } from 'react-bootstrap';

import Comments from './Comments';
import MyButton from './UI/button/MyButton';
import MyInput from './UI/input/MyInput';
import Description from './Description';
import CommentForm from './CommentForm';

export default function CardPage({ currUser, items }) {
  const [posts, setPosts] = useState([]);
  const [post, setPost] = useState({ title: '', body: '' });
  const [onePage, setOnePage] = useState({});

  const { id } = useParams();

  useEffect(() => {
    fetch(`/api/cardpage/${id}`)
      .then((res) => res.json())
      .then((data) => setOneCard(data));
  }, []);

  console.log('>>>>>>>>', oneCard);

  const addNewPost = (e) => {
    e.preventDefault();
    const newPost = {
      id: Date.now(),
      title: post.title,
      description: post.description,
    };
    console.log(newPost);
    setPosts([...posts, newPost]);
    setPost({ title: '', description: '' });
  };
  const addNewComment = (newPost) => {
    setPosts([...posts, newPost]);
  };
  const removeComment = (post) => {
    setPosts(posts.filter((el) => el.id !== post.id));
  };

  return (
    <div>
      <Row>
        <Card>
          <Col sm={4}>
            <Card.Img variant="top" src={oneCard.image} />
          </Col>

          <Col sm={4}>
            <Card.Body>
              <Card.Title>{oneCard.title}</Card.Title>
              <Card.Text>{oneCard.location}</Card.Text>
              <Card.Text>
                {oneCard.description}
              </Card.Text>
            </Card.Body>
            <Card.Body>
              <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
          </Col>
        </Card>
      </Row>

      <div className="App">
        {currUser.id ? (<CommentForm create={addNewComment} />)
          : (<h3>Войдите, чтобы оставлять комментарии</h3>)}

        <h1 style={{ textAlign: 'center' }}>
          Комментарии
        </h1>
        {posts.length !== 0
          ? <Comments remove={removeComment} posts={posts} title="Комментарии" />
          : <h2 style={{ textAlign: 'center' }}>Комментариев пока еще нет</h2>}
      </div>
    </div>
  );
}
