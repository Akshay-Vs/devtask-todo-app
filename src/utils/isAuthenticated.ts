export const isAuthenticated = (): boolean => {
  const authState = localStorage.getItem("isAuthenticated");
  console.log("isAuthenticated: ", authState);
  return authState === "true";
};
