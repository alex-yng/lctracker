import ModeToggle from "@/components/ModeToggle";
import Header from "@/components/landing/Header";
import MobileHeader from "@/components/landing/MobileHeader";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Header />
      <MobileHeader />
      {children}
      <div className='fixed bottom-5 right-5'>
        <ModeToggle />
      </div>
    </div>
  );
};

export default layout;
