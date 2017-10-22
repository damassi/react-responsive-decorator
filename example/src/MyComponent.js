import React from 'react';
import Responsive from '../../src/index';

@Responsive
class MyComponent extends React.Component {

  static propTypes = {
    hey: React.PropTypes.string,
    you: React.PropTypes.bool
  }

  state = {
    isMobile: false
  }

  componentDidMount() {
    this.props.media({ minWidth: 768 }, () => {
      this.setState({
        isMobile: false
      });
    });

    this.props.media({ maxWidth: 768 }, () => {
      this.setState({
        isMobile: true
      });
    });
  }

  render() {
    const { isMobile } = this.state;

    return (
      <div>
        {isMobile ?
          <div>Mobile</div> :
          <div>Not mobile</div>
        }
      </div>
    );
  }
}

export default MyComponent;

