import React, { useState, useEffect, useCallback } from "react";
import {
  GoogleLogin,
  useGoogleOneTapLogin,
  CredentialResponse,
  googleLogout,
} from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { Button } from "./components/ui/button";

interface DecodedToken {
  exp: number;
  email?: string;
  name?: string;
  [key: string]: unknown;
}

const App: React.FC = () => {
  const [token, setToken] = useState<string | null>(null);
  const [user, setUser] = useState<DecodedToken | null>(null);

  const handleCredentialResponse = useCallback(
    (credentialResponse: CredentialResponse) => {
      if (credentialResponse.credential) {
        setToken(credentialResponse.credential);
        try {
          const decoded: DecodedToken = jwtDecode(
            credentialResponse.credential
          );
          setUser(decoded);
        } catch (err) {
          console.error("Failed to decode token", err);
        }
      }
    },
    []
  );

  useGoogleOneTapLogin({
    onSuccess: handleCredentialResponse,
    onError: () => console.log("One Tap Login Failed"),
    auto_select: true,
  });

  const handleManualSignIn = (credentialResponse: CredentialResponse) => {
    handleCredentialResponse(credentialResponse);
  };

  useEffect(() => {
    if (token) {
      let decoded: DecodedToken;
      try {
        decoded = jwtDecode(token);
      } catch (err) {
        console.error("Error decoding token:", err);
        return;
      }
      const expTime = decoded.exp * 1000; // Convert expiration to milliseconds
      const now = Date.now();
      // Set the refresh to occur 5 minutes before expiration
      const refreshDelay = expTime - now - 5 * 60 * 1000;
      const timeout = refreshDelay > 0 ? refreshDelay : 0;
      const timer = setTimeout(() => {
        // Trigger the silent prompt to refresh the token.
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

  // Logout handler: call googleLogout and clear state
  const handleLogout = () => {
    googleLogout();
    setToken(null);
    setUser(null);
  };

  const handleCopy = () => {
    if (token) {
      navigator.clipboard
        .writeText(token)
        .then(() => alert("Token copied to clipboard!"))
        .catch((err) => console.error("Failed to copy token:", err));
    }
  };

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}>
      <h1>Google Auth Demo</h1>
      {token ? (
        <>
          <h2>Welcome, {user?.name || user?.email}</h2>
          <p>
            <strong>Latest Token:</strong>
          </p>
          <textarea
            readOnly
            rows={10}
            style={{ width: "100%", marginBottom: "1rem" }}
            value={token}
          />
          <Button onClick={handleCopy} style={{ marginRight: "1rem" }}>
            Copy Token
          </Button>
          <Button onClick={handleLogout}>Logout</Button>
        </>
      ) : (
        <>
          <p>Please sign in with Google:</p>
          <GoogleLogin
            onSuccess={handleManualSignIn}
            onError={() => console.log("Manual Login Failed")}
            useOneTap={false}
            auto_select
          />
        </>
      )}
    </div>
  );
};

export default App;
