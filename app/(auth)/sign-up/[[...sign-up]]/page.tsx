import { SignUp } from "@clerk/nextjs";

export const Signup = () => {
  return (
    <section className='h-screen w-full grid place-items-center'>
      <SignUp />
    </section>
  );
};

export default Signup;
