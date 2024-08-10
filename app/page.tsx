import Image from "next/image";
import HomeComponent from "./components/HomeComponent/HomeComponent";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <HomeComponent />
    </main>
  );
}
