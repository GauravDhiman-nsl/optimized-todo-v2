"use client";

import { ErrorBoundary as ReactErrorBoundary } from "react-error-boundary";
import { ErrorMessage, FallbackTitle, FallbackWrapper } from "./style";

function ErrorFallback({
  error,
  resetErrorBoundary,
}: Readonly<{
  error: Error;
  resetErrorBoundary: () => void;
}>) {
  return (
    <FallbackWrapper role="alert">
      <FallbackTitle>Oops, something went wrong.</FallbackTitle>
      <ErrorMessage>{error.message}</ErrorMessage>
      <button onClick={resetErrorBoundary}>Try Again</button>
    </FallbackWrapper>
  );
}

interface ErrorBoundaryProps {
  children: React.ReactNode;
  onResetState?: () => void;
}

export const ErrorBoundary = ({
  children,
  onResetState,
}: ErrorBoundaryProps) => {
  return (
    <ReactErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => {
        if (onResetState) {
          onResetState();
        }
        console.log("Error boundary has been reset.");
      }}
    >
      {children}
    </ReactErrorBoundary>
  );
};
