import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <main className="grid h-screen place-items-center">
      <SignUp afterSignUpUrl="/dashboard" />
    </main>
  );
}
