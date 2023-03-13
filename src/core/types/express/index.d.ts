declare global {
  namespace Express {
    interface User {
      id: string;
      role: string;
    }
  }
}

export interface User {
  id: string;
  role: string;
}
