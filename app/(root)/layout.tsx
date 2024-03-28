import Header from "@/components/Header";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Header isHome />
      {children}
    </div>
  );
};

export default layout;