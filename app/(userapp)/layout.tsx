import UserHeader from "@/components/userapp/UserHeader";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <UserHeader />
      {children}
    </div>
  );
};

export default layout;
