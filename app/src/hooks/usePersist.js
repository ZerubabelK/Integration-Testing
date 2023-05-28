function usePersist() {
  return {
    set: (key, value) => {
      localStorage.setItem(key, value);
    },
    setToken: (cvalue, exdays) => {
      const d = new Date();
      d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
      let expires = "expires=" + d.toUTCString();
      document.cookie = "Bearer" + "=" + cvalue + ";" + expires + ";path=/";
    },
    getToken: () => {
      let name = "Bearer" + "=";
      let decodedCookie = decodeURIComponent(document.cookie);
      let ca = decodedCookie.split(";");
      for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === " ") {
          c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
          return c.substring(name.length, c.length);
        }
      }
      return "";
    },
    getValue: (key) => {
      return JSON.parse(localStorage.getItem(key));
    },
  };
}

export default usePersist;
