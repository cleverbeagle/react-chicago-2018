import React from 'react';
import PropTypes from 'prop-types';
import { Panel } from 'react-bootstrap';
import fetchData from '../FetchData/FetchData';

// EXAMPLE: Stateless Functional Component
// A.K.A. "Dumb Component" or "Stateless Component" or "Functional Component"
// Big idea: does NOT have state or lifecycle methods. Primary use is to display markup.

const Posts = ({ data }) => (
  <div>
    <h4>Posts</h4>
    {data.map(({ id, title, body }) => (
      <Panel key={id}>
        <h2>{title}</h2>
        <p>{body}</p>
      </Panel>
    ))}
  </div>
);

Posts.propTypes = {
  data: PropTypes.array.isRequired,
};

export default fetchData(Posts, 'https://jsonplaceholder.typicode.com/posts');
