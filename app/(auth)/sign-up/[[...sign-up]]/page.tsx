import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <main className='grid place-items-center h-screen'>
      <SignUp />
    </main>
  );
}
