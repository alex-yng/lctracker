import SideNav from "@/components/userapp/SideNav";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <SideNav />
      <main className="ml-16">{children}</main>
    </div>
  );
};

export default layout;
