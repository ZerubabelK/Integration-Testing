import useAuth from "../../hooks/useAuth";
export default function Header() {
  const { isLogged } = useAuth();
  return (
    <header className="p-4">
      <div className="container flex justify-between h-16 mx-auto">
        <a
          rel="noopener noreferrer"
          href="#"
          aria-label="Back to homepage"
          className="flex items-center p-4 pt-8 font-bold text-2xl"
        >
          etcrewservices
        </a>
        {!isLogged ? (
          <div className="auth-btns items-center flex-shrink-0 hidden lg:flex">
            <a href="/auth/login">
              <button className="self-center px-8 py-3 rounded">Sign in</button>
            </a>
            <a href="/auth/signup">
              <button className="self-center px-7 py-2 font-semibold rounded dark:bg-green-400 text-white">
                Sign up
              </button>
            </a>
          </div>
        ) : (
          <div>
            <a href="/admin/dashboard">
              <button className="self-center px-7 py-2 font-semibold rounded dark:bg-green-400 text-white">
                Dashboard
              </button>
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
