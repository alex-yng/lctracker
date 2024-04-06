import SideNav from "@/components/userapp/SideNav";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <SideNav />
      {children}
    </div>
  );
};

export default layout;
