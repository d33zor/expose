'use client';
import React from 'react';
import { Next13ProgressBar } from 'next13-progressbar';
import { Suspense } from 'react';

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <Suspense>
      {children}
      <Next13ProgressBar
        height='2px'
        color='white'
        options={{ showSpinner: false }}
        showOnShallow
      />
    </Suspense>
  );
};

export default Providers;
