import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { signInAction } from "../actions/actions";
import { SubmitButton } from "@/components/submit-button";
import { FormMessage, Message } from "@/components/form-message";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default async function Login(props: { searchParams: Promise<Message> }) {
  const searchParams = await props.searchParams;
  return (
      <div className="container mx-auto px-16">
        <div className="flex justify-center items-center h-screen">
          <Card className="w-[350px]">
            <CardHeader>
              <CardTitle>Sign In</CardTitle>
              <CardDescription>
                Continue with your email and password
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="flex-1 flex flex-col min-w-64">
                <div className="flex flex-col gap-2 [&>input]:mb-3 mt-8">
                  <Label htmlFor="email">Email</Label>
                  <Input name="email" placeholder="you@example.com" required />
                  <div className="flex justify-between items-center">
                    <Label htmlFor="password">Password</Label>
                    <Link
                      className="text-xs text-foreground underline"
                      href="/forgot-password"
                    >
                      Forgot Password?
                    </Link>
                  </div>
                  <Input
                    type="password"
                    name="password"
                    placeholder="Your password"
                    required
                  />
                  <SubmitButton
                    pendingText="Signing In..."
                    formAction={signInAction}
                  >
                    Sign in
                  </SubmitButton>
                  <FormMessage message={searchParams} />
                </div>
              </form>
            </CardContent>
            <CardFooter>
              <p className="text-sm text-foreground">
                Don&apos;t have an account?
                <Link
                  className="text-foreground font-medium underline ml-2"
                  href="/sign-up"
                >
                  Sign up
                </Link>
              </p>
            </CardFooter>
          </Card>
        </div>
      </div>
  );
}
