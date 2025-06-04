'use client';

import React from 'react';
// import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// import { ThemeProvider } from 'next-themes'; // If dark mode toggle is implemented

// const queryClient = new QueryClient();

type AppProvidersProps = {
  children: React.ReactNode;
};

export function AppProviders({ children }: AppProvidersProps) {
  // Example for ThemeProvider if you add a theme toggle
  // return (
  //   <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
  //     <QueryClientProvider client={queryClient}>
  //       {children}
  //     </QueryClientProvider>
  //   </ThemeProvider>
  // );

  // Basic provider, can be expanded
  return <>{children}</>;
}
