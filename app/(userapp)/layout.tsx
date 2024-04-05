import UserHeader from "@/components/userapp/UserHeader";
import Link from "next/link";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <UserHeader />
      {children}
    </div>
  );
};

export default layout;
