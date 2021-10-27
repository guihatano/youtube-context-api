type ContextType = {
  loading: boolean,
  authenticated: boolean,
  handleLogin: () => Promise<void>,
  handleLogout: () => void,
}
