# react-responsive-decorator

A higher-order component / decorator wrapper around [enquire.js](http://wicky.nillia.ms/enquire.js/) that injects `media()` into component props.

This library uses [json2mq](https://github.com/akiran/json2mq) internally to convert media queries from object to string format. See [enquire.js's API](http://wicky.nillia.ms/enquire.js/#api) for more info.

```javascript
import React from 'react';
import Responsive from 'react-responsive-decorator';

@Responsive
class MyComponent extends React.Component {

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
```

Or, if you'd rather return a wrapped, Higher Order component, export like so:

```javascript
import React from 'react';
import Responsive from 'react-responsive-decorator';

class MyComponent extends React.Component {
  (...)
}

export default Responsive(MyComponent);
```


Credits
=======
This code has been adapted from https://github.com/akiran/react-responsive-mixin in order to remove the mixin dependency.
