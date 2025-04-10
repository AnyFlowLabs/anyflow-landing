/**
 * Global error handling utility for tracking and logging errors
 * This can be extended to send errors to monitoring services like Sentry
 */

/**
 * Log an error to the console with additional context
 */
export function logError(error: Error, context?: Record<string, any>): void {
    console.error(
        '[Application Error]',
        {
            name: error.name,
            message: error.message,
            stack: error.stack,
            ...context,
        }
    );

    // Here you could add additional reporting like Sentry
    // if (typeof window.Sentry !== 'undefined') {
    //   Sentry.captureException(error, { extra: context });
    // }
}

/**
 * Setup global error handlers
 */
export function setupGlobalErrorHandlers(): void {
    // Handle unhandled promise rejections
    window.addEventListener('unhandledrejection', (event) => {
        logError(
            event.reason instanceof Error ? event.reason : new Error(String(event.reason)),
            { type: 'unhandledRejection' }
        );
    });

    // Handle global errors
    window.addEventListener('error', (event) => {
        logError(
            event.error || new Error(event.message),
            {
                type: 'globalError',
                filename: event.filename,
                lineno: event.lineno,
                colno: event.colno,
            }
        );
    });

    // Override console.error to track errors
    const originalConsoleError = console.error;
    console.error = (...args) => {
        // Call the original console.error
        originalConsoleError(...args);

        // Process errors if they exist in arguments
        const errors = args.filter(arg => arg instanceof Error);
        if (errors.length > 0) {
            errors.forEach(error => {
                logError(error, { source: 'console.error' });
            });
        }
    };
}

/**
 * Format error message for display to users
 */
export function formatErrorMessage(error: unknown): string {
    if (error instanceof Error) {
        return error.message;
    }

    if (typeof error === 'string') {
        return error;
    }

    return 'An unexpected error occurred';
}

/**
 * Check if error is a network error
 */
export function isNetworkError(error: unknown): boolean {
    if (error instanceof Error) {
        return (
            error.message.includes('Network Error') ||
            error.message.includes('Failed to fetch') ||
            error.message.includes('NetworkError') ||
            !navigator.onLine
        );
    }
    return false;
} 