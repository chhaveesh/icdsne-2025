
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="max-w-md w-full px-4 py-8 text-center">
        <div className="mb-6">
          <div className="inline-block p-4 rounded-full bg-red-50 mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-10 h-10 text-red-500"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="8" x2="12" y2="12" />
              <line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-icds-dark mb-2">404</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Oops! The page you're looking for doesn't exist.
          </p>
        </div>
        
        <a
          href="/"
          className={cn(
            "inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full",
            "bg-icds-blue text-white font-medium",
            "shadow-md shadow-icds-blue/20 hover:shadow-lg hover:shadow-icds-blue/30",
            "transform transition-all duration-300 hover:-translate-y-1",
            "focus:outline-none focus:ring-2 focus:ring-icds-blue focus:ring-offset-2"
          )}
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
