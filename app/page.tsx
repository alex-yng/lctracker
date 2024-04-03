import Hero from "@/components/home/Hero";
import Mission from "@/components/home/Mission";

const Home = () => {
  return (
    <main className='w-full min-h-screen grid place-content-center py-2 px-4 md:py-4 sm:px-8 md:px-12 lg:px-16'>
      <Hero />
      <Mission />
    </main>
  );
};

export default Home;
