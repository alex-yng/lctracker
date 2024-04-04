import { UserButton } from "@clerk/nextjs";

const UserHeader = () => {
  return (
    <div>
      <UserButton afterSignOutUrl='/' />
    </div>
  );
};

export default UserHeader;
