import React, { useCallback } from "react";
import {
  GoogleLogin,
  useGoogleOneTapLogin,
  CredentialResponse,
} from "@react-oauth/google";

interface GoogleAuthProps {
  onSuccess: (credential: string) => void;
}

const GoogleAuth: React.FC<GoogleAuthProps> = ({ onSuccess }) => {
  const handleCredentialResponse = useCallback(
    (credentialResponse: CredentialResponse) => {
      if (credentialResponse.credential) {
        onSuccess(credentialResponse.credential);
      }
    },
    [onSuccess]
  );

  // Initialize Google One Tap.
  useGoogleOneTapLogin({
    onSuccess: handleCredentialResponse,
    onError: () => console.log("One Tap Login Failed"),
    auto_select: true,
  });

  const handleManualSignIn = (credentialResponse: CredentialResponse) => {
    handleCredentialResponse(credentialResponse);
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <p className="text-lg text-gray-900 dark:text-gray-100">Please sign in with Google:</p>
      <GoogleLogin
        onSuccess={handleManualSignIn}
        onError={() => console.log("Manual Login Failed")}
        useOneTap={false}
        auto_select
      />
    </div>
  );
};

export default GoogleAuth;
