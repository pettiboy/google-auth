import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Textarea } from "../components/ui/textarea";

interface JwtDecoderProps {
  token: string;
}

function base64UrlDecode(str: string) {
  const base64 = str.replace(/-/g, "+").replace(/_/g, "/");
  try {
    return decodeURIComponent(
      atob(base64)
        .split("")
        .map((c) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
        .join("")
    );
  } catch (error) {
    console.error("Error decoding base64 string", error);
    return "";
  }
}

const JwtDecoder: React.FC<JwtDecoderProps> = ({ token }) => {
  const parts = token.split(".");
  if (parts.length !== 3) {
    return <p className="text-red-500">Invalid JWT token.</p>;
  }

  const [encodedHeader, encodedPayload, signature] = parts;
  let header = {};
  let payload = {};

  try {
    header = JSON.parse(base64UrlDecode(encodedHeader));
    payload = JSON.parse(base64UrlDecode(encodedPayload));
  } catch (error) {
    console.error("Error parsing JWT parts", error);
  }

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>JWT Header</CardTitle>
        </CardHeader>
        <CardContent>
          <Textarea
            readOnly
            autoResize
            value={JSON.stringify(header, null, 2)}
          />
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>JWT Payload</CardTitle>
        </CardHeader>
        <CardContent>
          <Textarea
            readOnly
            autoResize
            value={JSON.stringify(payload, null, 2)}
          />
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>JWT Signature</CardTitle>
        </CardHeader>
        <CardContent>
          <Textarea readOnly autoResize value={signature} />
        </CardContent>
      </Card>
    </div>
  );
};

export default JwtDecoder;
