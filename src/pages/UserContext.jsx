import { createContext, useState, useContext, useEffect } from "react";
import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

const UserContext = createContext();

export const useUser = () => {
  return useContext(UserContext);
};

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // Loading state

  // Since we are using the Authenticator component, we don't need to manually check for the current user.
  useEffect(() => {
    // Automatically handle state management when the user is authenticated
    setLoading(false);
  }, []);

  const signIn = async (email, password) => {
    // Custom signIn logic (if you wish to implement additional logic here)
    try {
      const user = await Auth.signIn(email, password);
      setUser(user);
    } catch (error) {
      console.error("Error signing in", error);
    }
  };

  const signOut = async () => {
    try {
      await Auth.signOut();
      setUser(null);
    } catch (error) {
      console.error("Error signing out", error);
    }
  };

  if (loading) {
    return <div>Loading...</div>; // Replace with a custom loading spinner if needed
  }

  return (
    <UserContext.Provider value={{ user, signIn, signOut }}>
      <Authenticator.Provider>{children}</Authenticator.Provider>
    </UserContext.Provider>
  );
};
