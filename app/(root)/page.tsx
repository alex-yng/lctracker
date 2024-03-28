import Footer from "@/components/Footer";
import Features from "@/components/home/Features";
import Hero from "@/components/home/Hero";
import Preview from "@/components/home/Preview";

const Home = () => {
  return (
    <main className='pt-40 h-screen'>
      <Hero />
      {/* <Preview />
      <Features /> */}
      <Footer />
    </main>
  );
};

export default Home;
