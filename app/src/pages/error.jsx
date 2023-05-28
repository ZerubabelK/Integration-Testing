import React from "react";
import useAuth from "../hooks/useAuth";

function Error() {
  const { error } = useAuth();
  return (
    <div>
      <div class="pt-4 py-4 mx-auto flex flex-col justify-center items-center">
        <img
          width="600"
          class="mx-auto z-5 object-contain"
          src="/assets/404.png"
        />
        <div class="my-4">
          <span class="text-h4 font-weight-bold">Oops!</span>
          {error === null ? (
            <div class="mt-2 mb-7">
              <span class="text-h6 font-weight-bold mx-auto text--secondary">
                Sorry, the page you requested could not be found.
              </span>
            </div>
          ) : error.code === "401" ? (
            <div v-else-if="error.statusCode === 401" class="mt-2 mb-7">
              <span class="text-h6 font-weight-bold mx-auto text--secondary">
                Sorry, you are unauthorized to view this page.
              </span>
            </div>
          ) : (
            <div class="mt-2 mb-7">
              <span class="text-h6 font-weight-bold mx-auto text--secondary">
                Sorry, an error has occurred.
              </span>
            </div>
          )}
          <a class="mt-4 bg-sky-400 px-3 py-1 text-white rounded-lg" href="/">
            Back home
          </a>
        </div>
      </div>
    </div>
  );
}

export default Error;
