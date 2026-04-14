import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center px-4 font-poppins">
      <div className="text-center">
        {/* 404 Heading */}
        <h1 className="text-9xl font-bold text-primary_one_600 mb-4">404</h1>

        {/* Title */}
        <h2 className="text-4xl font-bold text-heading mb-3">Page not found</h2>

        {/* Description */}
        <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto leading-relaxed">
          Sorry, we couldn't find the page you're looking for. It might have been moved or deleted.
        </p>

        {/* Decorative Line */}
        <div className="h-1 w-20 bg-primary_one_600 mx-auto mb-8 rounded-full"></div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/dashboard">
            <button className="bg-primary_one_600 hover:bg-primary_one_700 text-white font-semibold px-8 py-3 rounded-full transition-all duration-200 shadow-md hover:shadow-lg">
              Go to Dashboard
            </button>
          </Link>
          <Link href="/">
            <button className="border-2 border-primary_one_600 text-primary_one_600 hover:bg-primary_one_50 font-semibold px-8 py-3 rounded-full transition-all duration-200">
              Go Home
            </button>
          </Link>
        </div>

        {/* Footer Text */}
        <p className="text-sm text-gray-500 mt-12">
          Error code: <span className="font-mono font-semibold">404</span>
        </p>
      </div>
    </div>
  );
}
