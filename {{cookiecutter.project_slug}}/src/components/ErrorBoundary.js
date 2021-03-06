import { Component } from "react";
import { Navigate } from "react-router-dom";
import routes from "../routes";

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error(error);
  }

  render() {
    if (this.state.hasError) {
      this.setState({ hasError: false });
      return <Navigate to={routes.error} replace />;
    }

    return this.props.children;
  }
}
