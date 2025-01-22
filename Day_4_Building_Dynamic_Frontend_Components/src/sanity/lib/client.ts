import { createClient } from 'next-sanity';

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'qqxycy13',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2025-10-01', // Stable API version
  useCdn: true, // For fresh data, use false
});

// Debug client object
console.log('Sanity Client Initialized:', client);
