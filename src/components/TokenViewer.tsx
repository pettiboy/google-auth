import { Copy,  } from "lucide-react";
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Textarea } from "../components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

interface TokenViewerProps {
  token: string;
}

const TokenViewer: React.FC<TokenViewerProps> = ({ token }) => {
  const { toast } = useToast();

  const handleCopy = () => {
    navigator.clipboard
      .writeText(token)
      .catch((err) =>
        toast({ title: "Failed to copy token", description: err })
      )
      .finally(() => {
        toast({ title: "Token copied to clipboard!", color: "success" });
      });
  };

  return (
    <>
      <Card className="h-full flex flex-col">
        <CardHeader className="flex items-center flex-row justify-between">
          <CardTitle className="text-lg font-semibold">Raw JWT Token</CardTitle>
          <Button onClick={handleCopy} className="ml-2">
            <Copy className="mr-1 h-4 w-4" />
            Copy
          </Button>
        </CardHeader>
        <CardContent className="flex-grow">
          <Textarea
            readOnly
            autoResize
            value={token}
            className="overflow-auto"
          />
        </CardContent>
      </Card>
    </>
  );
};

export default TokenViewer;
