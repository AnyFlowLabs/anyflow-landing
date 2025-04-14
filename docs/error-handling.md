# Error Handling in AnyFlow

This document describes the error handling system implemented in the AnyFlow application.

## Overview

The error handling system consists of multiple layers to ensure a robust user experience and proper error tracking:

1. **Global Error Page** - A dedicated error page for handling routing errors
2. **ErrorBoundary Component** - A React component for catching and displaying runtime errors
3. **Global Error Handlers** - JavaScript handlers for uncaught errors and promise rejections
4. **Utility Functions** - Helper functions for logging and formatting errors

## Components

### 1. Global Error Page (`src/pages/error.tsx`)

The global error page is integrated with React Router and provides user-friendly error messages for routing-related errors.

- Uses React Router's `useRouteError` hook to access error details
- Displays appropriate messages based on error type (404, 500, etc.)
- Provides navigation options to go back, refresh, or return home
- Adapts styling based on light/dark mode

### 2. ErrorBoundary Component (`src/components/ErrorBoundary.tsx`)

A class component that implements React's error boundary pattern to catch JavaScript errors in the component tree.

- Catches errors during rendering, in lifecycle methods, and in constructors
- Provides a fallback UI when errors occur
- Logs detailed error information to the console
- Can be nested at different levels of the component tree for more granular error handling

Usage:

```tsx
<ErrorBoundary>
  <ComponentThatMightError />
</ErrorBoundary>
```

### 3. Global Error Handlers (`src/utils/errorHandler.ts`)

Utility functions for setting up global error handling:

- `setupGlobalErrorHandlers()` - Sets up listeners for uncaught errors and unhandled promise rejections
- `logError()` - Centralized error logging function (can be extended to report to services like Sentry)
- `formatErrorMessage()` - Formats error objects into user-friendly messages
- `isNetworkError()` - Utility to check if an error is network-related

### 4. Router Configuration (`src/routes/routes.tsx`)

The router is configured to use the error page for handling route-level errors:

```tsx
{
  path: "/some-route",
  element: <SomeComponent />,
  errorElement: <ErrorPage />
}
```

## Error Handling Strategy

1. **Component-Level Errors**: Use try/catch blocks for synchronous code and proper async/await error handling for asynchronous code.

2. **UI Component Tree Errors**: Wrap critical UI sections with `<ErrorBoundary>` to prevent the entire app from crashing.

3. **Route-Level Errors**: The router configuration includes `errorElement` properties to handle route-specific errors.

4. **Global Uncaught Errors**: Captured by the event listeners set up in `setupGlobalErrorHandlers()`.

## Best Practices

1. **Always use async/await with try/catch** for asynchronous operations:

```tsx
try {
  const data = await fetchData();
  setData(data);
} catch (error) {
  setError(formatErrorMessage(error));
}
```

2. **Use the ErrorBoundary component** around critical parts of your application:

```tsx
<ErrorBoundary>
  <CriticalComponent />
</ErrorBoundary>
```

3. **Log contextual information** with errors to help with debugging:

```tsx
try {
  // some operation
} catch (error) {
  logError(error, { userId, action: 'saving_profile' });
}
```

4. **Provide user-friendly error messages** instead of technical details in the UI:

```tsx
<Alert status="error">
  {isNetworkError(error) 
    ? "Please check your internet connection" 
    : formatErrorMessage(error)}
</Alert>
```

## Future Improvements

1. **Integration with error tracking services** like Sentry
2. **More specific error types** for different parts of the application
3. **Automatic retry mechanisms** for network errors
4. **Offline support** with appropriate error messaging
5. **Error analytics** to track common error patterns

## Maintenance

When adding new features, ensure that proper error handling is included from the start. This should include:

1. Component-level error boundaries where appropriate
2. Try/catch blocks for operations that might fail
3. User-friendly error messages
4. Proper error logging 