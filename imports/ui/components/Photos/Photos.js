import React from 'react';
import PropTypes from 'prop-types';
import fetchData from '../FetchData/FetchData';

const Photos = ({ data }) => (
  <div>
    <h4>Photos</h4>
    {data.map(({ id, title, url }) => (
      <div key={id} className="Photos__photo">
        <p>{title}</p>
        <img src={url} alt={title} />
      </div>
    ))}
  </div>
);

Photos.propTypes = {
  data: PropTypes.array.isRequired,
};

export default fetchData(Photos, 'https://jsonplaceholder.typicode.com/photos');
