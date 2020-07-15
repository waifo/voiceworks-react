import React from "react";

const initialState = { error: null, info: null };

class ErrorBoundary extends React.Component {
  state = initialState;

  componentDidCatch(error, info) {
    this.props.onError(error, info?.componentStack);
    this.setState({ error, info });
  }
  resetErrorBoundary = () => {
    return;
  };

  render() {
    const { error, info } = this.state;
    const { fallback, FallbackComponent, fallbackRenderer } = this.props;
    if (error) {
      const props = {
        componentStack: info?.componentStack,
        error,
        resetErrorBoundary: this.resetErrorBoundary,
      };
      if (React.isValidElement(fallback)) return fallback;
      if (typeof FallbackComponent === "function")
        return <FallbackComponent {...props} />;
      if (typeof fallbackRenderer === "function")
        return fallbackRenderer(props);
      throw new Error(
        "Error Boundary component requires either a fallback, FallbackComponent, or fallbackRenderer as prop"
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
