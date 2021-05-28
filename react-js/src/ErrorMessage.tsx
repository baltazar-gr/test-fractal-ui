import * as React from 'react';
import { Message, Layer, BugIcon } from '@bma98/fractal-ui';

interface State {
    hasError: boolean;
    errorMessage: string;
    errorTitle: string;
}

type ErrorMessageProps = typeof Layer & {
    onError?: (error: Error, componentStack: string) => void;
}

export class ErrorMessage extends React.Component<ErrorMessageProps, State> {
    constructor(props: ErrorMessageProps) {
        super(props);
        this.state = { hasError: false, errorMessage: '', errorTitle: '' };
    }

    static getDerivedStateFromError(error: Error): State {
        return { hasError: true, errorMessage: error.message, errorTitle: error.name };
    }

    componentDidCatch(error: Error, info: React.ErrorInfo): void {
        const { onError } = this.props;
        if (onError) onError(error, info.componentStack);
    }

    renderErrorIcon = (color: string): JSX.Element => <BugIcon width={20} fill={color} />;

    render() {
        if (this.state.hasError) {
            return (
                <Message
                    messageType={'danger'}
                    title={this.state.errorTitle}
                    description={this.state.errorMessage}
                    icon={this.renderErrorIcon}
                    {...this.props}
                />
            );
        }

        return <Layer {...this.props}>{this.props.children}</Layer>;
    }
}
