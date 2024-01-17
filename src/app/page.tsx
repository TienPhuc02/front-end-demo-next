import HomePageLayout from "@/layout/homepage/app.homepage";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";

export default async function Home() {
  const session = await getServerSession(authOptions);
  console.log("🚀 ~ Home ~ session:", session);
  return (
    <div>
      <HomePageLayout />
    </div>
  );
}
