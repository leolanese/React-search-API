import React from 'react';
import { useErrorBoundary } from './UseErrorBoundary';

const ErrorBoundary = ({ children }) => {
    const [error] = useErrorBoundary();

    if (error) {
        return <h1>An error happend: {error.message}</h1>;
    }

    return children;
}

export default ErrorBoundary;