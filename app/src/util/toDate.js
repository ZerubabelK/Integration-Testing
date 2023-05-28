export default (string) => {
  const date = new Date(string);

  const options = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };
  return date.toLocaleDateString("en-US", options);
};
