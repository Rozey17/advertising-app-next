import Link from "next/link";
import { useAuth } from "../auth/useAuth";
// import { SearchBar } from "./AutoSelectField";

export const Navbar = () => {
  const { logout, authenticated } = useAuth();

  return (
    // <header className="min-h-screen bg-gray-100">
    <nav className="flex items-center justify-between p-6 h-20 bg-white shadow-sm">
      <div className="py-5 px-3 rounded-full bg-gradient-to-r from-indigo-700 to-blue-500 text-sm text-white font-semibold shadow-lg hover:cursor-pointer hover:shadow-lg">
        <Link href="/">ANNONCE 45</Link>
      </div>
      <Link href="/ad/create">
        <button className="flex items-center h-10 px-3 bg-blue-500 hover:bg-blue-700 text-white uppercase rounded-lg shadow-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              // stroke-linecap="round"
              // stroke-linejoin="round"
              // stroke-width="2"
              d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          Déposer Une Annonce
        </button>
      </Link>
      {/* <SearchBar /> */}
      {authenticated ? (
        <button
          className="flex items-center h-10 px-3 bg-blue-500 hover:bg-blue-700 text-white uppercase rounded-lg shadow-lg"
          onClick={logout}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              // stroke-linecap="round"
              // stroke-linejoin="round"
              // stroke-width="2"
              d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
            />
          </svg>
          Déconnexion
        </button>
      ) : (
        <Link href="/auth">
          <button className="flex items-center h-10 px-3 bg-blue-500 hover:bg-blue-700 text-white uppercase rounded-lg shadow-lg">
            Se Connecter
          </button>
        </Link>
      )}
    </nav>
    // </header>
  );
};
