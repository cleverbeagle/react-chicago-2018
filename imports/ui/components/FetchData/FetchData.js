import React from 'react';

// EXAMPLE: Higher Order Component (HOC)
// A.K.A. "Wrapper Component" or "Container"
// Big idea: provides data and/or other functionality to a component it wraps.

export default (Component, endpoint) => {
  return class FetchDataWrapper extends React.Component {
    constructor(props) {
      super(props);
      this.state = { data: [] };
    }

    componentWillMount() {
      fetch(endpoint)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          this.setState({ data });
        })
        .catch((error) => {
          console.warn(error);
        });
    }

    render() {
      console.log(this.state.data);
      return (this.state.data ? <Component data={this.state.data} /> : 'Loading...');
    }
  };
};
