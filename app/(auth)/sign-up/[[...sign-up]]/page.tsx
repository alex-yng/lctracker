import { SignUp } from "@clerk/nextjs";

const Page = () => {
  return (
    <section className='h-screen w-full grid place-items-center'>
      <SignUp />
    </section>
  );
};

export default Page;
