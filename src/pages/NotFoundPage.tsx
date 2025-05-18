import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-black text-green-400 flex items-center justify-center px-4">
      <div className="max-w-lg w-full bg-gray-900 p-6 rounded-lg shadow-xl border border-green-600 text-center space-y-4">
        <h1 className="text-4xl font-bold glitch-text">404: Simulation Not Found</h1>
        <p className="text-sm text-gray-400">
          The file you’re looking for may have been corrupted, deleted, or never existed in this dimension.
        </p>
        <Link
          to="/"
          className="mt-4 inline-block bg-green-500 hover:bg-green-600 text-black font-semibold px-4 py-2 rounded transition"
        >
          Return to Safe Zone
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
