//only available for Class Component, not function
import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom';


export default class ErrorBoundary extends Component {
    state = { hasError: false, reDirect: false };
    static getDerivedStateFromError() {
        return {hasError: true};
    }
    componentDidCatch(error,info) {
        console.error("ErrorBoundary caught an error", error, info);
        setTimeout(() => this.setState({redirect: true}), 5000);
    }

    render() {
        if (this.state.reDirect) {
            return <Redirect to="/" />;
        } else if (this.state.hasError) {
            return (
                <h1>
                    This listing has an error. <Link to="/">Clickhere</Link> to go back to the Homepage or wait 5 seconds.
                </h1>
            )

        }
        return this.props.children
    }
}
