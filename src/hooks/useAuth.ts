export const isAuthenticated = (): boolean => {
  return !!localStorage.getItem("key");
};

export const login = (key: string) => {
  localStorage.setItem("key", key);
};

export const logout = () => {
  localStorage.removeItem("key");
};
