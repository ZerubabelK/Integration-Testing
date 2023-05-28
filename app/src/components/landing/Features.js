export default function Features() {
  return (
    <section className="">
      <div className="container max-w-xl p-6 py-8 mx-auto space-y-10 lg:px-8 lg:max-w-7xl">
        <div className="pb-0">
          <h2 className="text-3xl font-bold tracking-tight text-center sm:text-5xl dark:text-black-50">
            Features
          </h2>
          <p className="max-w-3xl mx-auto mt-4 text-xl text-center dark:text-gray-400">
            What we are all about.
          </p>
        </div>
        <div className="grid lg:gap-16 lg:grid-cols-2 lg:items-center">
          <div>
            <h3 className="text-2xl font-bold tracking-tight sm:text-3xl dark:text-black-50">
              Get the best out of your travels
            </h3>
            <p className="mt-3 text-lg dark:text-gray-400">
              Order and keep track of your items while you are on the go. Make
              your flights much more enjoyable.
            </p>
            <div className="mt-12 space-y-12">
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-green-400 dark:text-gray-900">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="w-7 h-7"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium leading-6 dark:text-black-50">
                    Easy to use
                  </h4>
                  <p className="mt-2 dark:text-gray-400">
                    Our system provides an easy to use interface with simple
                    functionalities.
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-green-400 dark:text-gray-900">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="w-7 h-7"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium leading-6 dark:text-black-50">
                    Real time tracking
                  </h4>
                  <p className="mt-2 dark:text-gray-400">
                    Track your items in real time. Never lose track of your
                    items again.
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-green-400 dark:text-gray-900">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="w-7 h-7"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium leading-6 dark:text-black-50">
                    Multi platform support
                  </h4>
                  <p className="mt-2 dark:text-gray-400">
                    Our service is available on all platforms. You can use it on
                    your phone, tablet or computer.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="aircraft hidden lg:flex mt-10 lg:mt-0">
            <img
              src="assets/aircraft.svg"
              alt="aircraft"
              className="mx-auto rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
