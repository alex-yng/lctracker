import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import fetchStats from "@/lib/fetchStats";

const Profile = async ({ username }: { username: string }) => {
  const data = await fetchStats(username);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Hello {username}!</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card Content</p>
      </CardContent>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </Card>
  );
};

export default Profile;
