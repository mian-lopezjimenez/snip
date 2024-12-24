import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import LoginForm from "@/components/login-form";

export default function LoginPage() {
  return (
    <main className="container mx-auto flex justify-center px-6 xl:px-0">
      <Card className="w-full md:w-[700px]">
        <CardHeader>
          <CardTitle className="text-center">Log In</CardTitle>
        </CardHeader>

        <CardContent>
          <LoginForm />
        </CardContent>
      </Card>
    </main>
  );
}
