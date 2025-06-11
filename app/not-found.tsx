// app/not-found.tsx
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">404 - Page Not Found</h2>
        <p className="mb-4">Sorry, we couldn't find what you were looking for.</p>
        <Link 
          href="/" 
          className="text-blue-500 hover:text-blue-700"
        >
          Go back home
        </Link>
      </div>
    </div>
  )
}