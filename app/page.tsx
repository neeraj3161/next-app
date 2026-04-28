import Link from 'next/link';
import React from 'react';

export default function Home() {
  return (
    <div>
      <h1>Welcome to the Home Page!</h1>
      <p>This is the main landing page of the application.</p>
      <button><Link href="/about">About Us</Link></button>
    </div>
  );
}