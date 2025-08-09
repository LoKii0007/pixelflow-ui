"use client";

// Zustand doesn't require a provider like Redux, but we can create one
// for consistency and potential future initialization logic
export function ZustandProvider({ children }) {
  return <>{children}</>;
}

// Export the provider as the default for easy migration
export default ZustandProvider;
