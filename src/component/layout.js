import React from 'react';
import Navigation from './nav';

// Higher Order Component (HOC) function
const withLogger = (WrappedComponent) => {
  // Returns a new component
  class WithLogger extends React.Component {
    componentDidMount() {
      console.log(`Component ${WrappedComponent.name} is mounted`);
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  return WithLogger;
};

// Example component
const SimpleMessage = () => {
  return <div>
    Simple Message: Hello, world!</div>;
};

// Applying the HOC to the component
const SimpleMessageWithLogger = withLogger(SimpleMessage);

export default SimpleMessageWithLogger;
