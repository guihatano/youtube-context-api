type ContextType = {
  loading: boolean,
  authenticated: boolean,
  handleLogin: () => Promise<void>,
  handleLogout: () => void,
}

type User = {
  id: number,
  name: string,
  website: string,
}
