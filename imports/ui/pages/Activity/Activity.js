import React from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import autobind from 'react-autobind';
import Posts from '../../components/Posts/Posts';
import Photos from '../../components/Photos/Photos';

// EXAMPLE: ES2015/ES6 Class Component
// A.K.A. "Stateful Component"
// Big idea: it has the ability to keep state and make use of React's lifecycle methods.

class Activity extends React.Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 1 };
    autobind(this);

    // Without autobind() we need to do this:
    // this.handleSelectTab = this.handleSelectTab.bind(this);
  }

  handleSelectTab(activeTab) {
    this.setState({ activeTab: activeTab });
    // Short-hand for this could be this.setState({ activeTab });
  }

  render() {
    return (
      <div className="Activity">
        <h4 className="page-header">Recent Activity</h4>
        <Tabs activeKey={this.state.activeTab} onSelect={this.handleSelectTab}>
          <Tab eventKey={1} title="Posts">
            <Posts />
          </Tab>
          <Tab eventKey={2} title="Photos">
            <Photos />
          </Tab>
        </Tabs>
      </div>
    );
  }
}

Activity.propTypes = {
  // prop: PropTypes.string.isRequired,
};

export default Activity;
