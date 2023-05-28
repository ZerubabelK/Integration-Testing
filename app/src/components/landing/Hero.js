export default function Hero() {
  return (
    <section>
      <div className="container flex flex-col justify-center p-4 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
        <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
          <h1 className="text-5xl font-bold leading-none sm:text-6xl">
            Track your items
            <span className="dark:text-green-400"> in real time.</span>
          </h1>
          <p className="mt-6 mb-8 text-lg sm:mb-12">
            Order and keep track of your items in real time.
            <br />
            Never lose track of your items again.
          </p>
          <div className="get_started flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
            <a
              href="https://play.google.com/store/games"
              target="__blank"
              className="px-9 py-3 text-lg font-semibold rounded dark:bg-green-400 text-white"
            >
              Get Started
            </a>
          </div>
        </div>
        <div className="hero-img hidden lg:flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
          <img
            src="assets/hero.svg"
            alt=""
            className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
          />
        </div>
      </div>
    </section>
  );
}
