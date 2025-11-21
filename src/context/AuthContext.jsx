import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Check for existing auth token on mount
  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem('brewAndBiteToken');
      
      if (token) {
        // TODO: Verify token with backend
        // Example:
        // try {
        //   const response = await fetch('/api/auth/verify', {
        //     headers: { 'Authorization': `Bearer ${token}` }
        //   });
        //   const data = await response.json();
        //   if (data.user) {
        //     setUser(data.user);
        //   }
        // } catch (error) {
        //   localStorage.removeItem('brewAndBiteToken');
        // }
        
        // Mock user for now
        setUser({ id: 1, name: 'John Doe', email: 'john@example.com' });
      }
      
      setLoading(false);
    };

    checkAuth();
  }, []);

  const login = async (email, password) => {
    // TODO: Replace with actual API call
    // Example:
    // const response = await fetch('/api/auth/login', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ email, password })
    // });
    // const data = await response.json();
    // if (data.token) {
    //   localStorage.setItem('brewAndBiteToken', data.token);
    //   setUser(data.user);
    //   return { success: true };
    // }
    
    // Mock login
    const mockUser = { id: 1, name: 'John Doe', email };
    localStorage.setItem('brewAndBiteToken', 'mock-token-123');
    setUser(mockUser);
    return { success: true };
  };

  const register = async (name, email, password) => {
    // TODO: Replace with actual API call
    // Similar to login function above
    
    const mockUser = { id: 1, name, email };
    localStorage.setItem('brewAndBiteToken', 'mock-token-123');
    setUser(mockUser);
    return { success: true };
  };

  const logout = () => {
    localStorage.removeItem('brewAndBiteToken');
    setUser(null);
  };

  const value = {
    user,
    loading,
    login,
    register,
    logout,
    isAuthenticated: !!user,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};