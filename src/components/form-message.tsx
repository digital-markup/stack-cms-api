import { CheckCircle, OctagonX } from "lucide-react";

export type Message =
  | { success: string }
  | { error: string }
  | { message: string };

export function FormMessage({ message }: { message: Message }) {
  return (
    <div className="flex flex-col gap-2 w-full max-w-md text-sm">
      {"success" in message && (
        <div className="text-green-600 flex gap-x-2 items-center border-l-2 border-foreground px-4 bg-green-50 rounded-lg">
          <CheckCircle />
          {message.success}
        </div>
      )}
      {"error" in message && (
        <div className="text-destructive flex gap-x-2 items-center border-l-2 border-destructive-foreground p-2 bg-red-50 rounded-lg my-4">
          <OctagonX />
          {message.error}
        </div>
      )}
      {"message" in message && (
        <div className="text-black border-l-2 px-4">{message.message}</div>
      )}
    </div>
  );
}
