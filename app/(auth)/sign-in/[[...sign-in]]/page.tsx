import { SignIn } from "@clerk/nextjs";

export const Signin = () => {
  return (
    <section className='h-screen w-full grid place-items-center'>
      <SignIn />
    </section>
  );
};

export default Signin;
