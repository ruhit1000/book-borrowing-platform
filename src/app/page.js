import Banner from "@/components/HomePage/Banner";
import BannerTop from "@/components/HomePage/BannerTop";
import Featured from "@/components/HomePage/Featured";
import Stats from "@/components/HomePage/Stats";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <BannerTop />
      <Banner />
      <Stats />
      {/* <Featured /> */}
    </div>
  );
}
