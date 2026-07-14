'use client';

import { useEffect, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Swal from 'sweetalert2';

function CallbackContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const token = searchParams?.get('token');

    if (token) {
      // 1. Save Token
      localStorage.setItem('auth_token', token);
      localStorage.setItem('userType', 'corporate');

      // 2. Success Alert
      Swal.fire({
        icon: 'success',
        title: 'Login Successful',
        text: 'Welcome back!',
        timer: 1500,
        showConfirmButton: false,
      }).then(() => {
        // 3. Force reload to Dashboard to update headers
        window.location.href = '/';
      });
    } else {
      // If no token, send back to login
      router.push('/signin');
    }
  }, [searchParams, router]);

  return (
    <div className="flex h-screen items-center justify-center text-xl font-bold">
      Authenticating with Google...
    </div>
  );
}

// Next.js requires wrapping useSearchParams in Suspense
export default function GoogleCallbackPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CallbackContent />
    </Suspense>
  );
}