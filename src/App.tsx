import React, { useState, useEffect, useCallback } from "react";
import { googleLogout } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import GoogleAuth from "./components/GoogleAuth";
import TokenViewer from "./components/TokenViewer";
import JwtDecoder from "./components/JwtDecoder";
import Footer from "./components/Footer";

export interface DecodedToken {
  exp: number;
  email?: string;
  name?: string;
  [key: string]: unknown;
}

const App: React.FC = () => {
  const [token, setToken] = useState<string | null>(null);
  const [user, setUser] = useState<DecodedToken | null>(null);

  const handleCredentialResponse = useCallback((credential: string) => {
    if (credential) {
      setToken(credential);
      try {
        const decoded: DecodedToken = jwtDecode(credential);
        setUser(decoded);
      } catch (err) {
        console.error("Failed to decode token", err);
      }
    }
  }, []);

  // Setup silent token refresh 5 minutes before expiration.
  useEffect(() => {
    console.log("Setting up token refresh timer", token);
    if (token) {
      let decoded: DecodedToken;
      try {
        decoded = jwtDecode(token);
      } catch (err) {
        console.error("Error decoding token:", err);
        return;
      }
      const expTime = decoded.exp * 1000;
      const now = Date.now();
      const refreshDelay = expTime - now - 5 * 60 * 1000;
      const timeout = refreshDelay > 0 ? refreshDelay : 0;
      const timer = setTimeout(() => {
        if (
          window.google &&
          window.google.accounts &&
          window.google.accounts.id
        ) {
          window.google.accounts.id.prompt((notification: unknown) => {
            console.log("Silent prompt notification:", notification);
          });
        }
      }, timeout);
      return () => clearTimeout(timer);
    }
  }, [token]);

  const handleLogout = () => {
    googleLogout();
    setToken(null);
    setUser(null);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background-light dark:bg-background-dark">
      <div className="flex-grow container mx-auto p-4">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-900 dark:text-gray-100">
          Google Auth Demo
        </h1>
        {token ? (
          <>
            <div className="text-center mb-4">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
                Welcome, {user?.name || user?.email}
              </h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <TokenViewer token={token} onLogout={handleLogout} />
              <JwtDecoder token={token} />
            </div>
          </>
        ) : (
          <GoogleAuth onSuccess={handleCredentialResponse} />
        )}
      </div>
      <Footer />
    </div>
  );
};

export default App;
