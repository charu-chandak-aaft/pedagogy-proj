'use client';
import { useSearchParams } from 'next/navigation';

export default function AuthError() {
  const searchParams = useSearchParams();
  const error = searchParams.get('error');

  return (
    <div className="p-10 text-center">
      <h1 className="text-2xl font-bold text-red-600">Login Error</h1>
      {error === 'AccessDenied' ? (
        <p className="mt-4 text-lg">You are not allowed to login with this email domain.</p>
      ) : (
        <p className="mt-4 text-lg">Something went wrong during login.</p>
      )}
    </div>
  );
}
