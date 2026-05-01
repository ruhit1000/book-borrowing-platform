import Banner from "@/components/HomePage/Banner";
import BannerTop from "@/components/HomePage/BannerTop";
import Category from "@/components/HomePage/Category";
import Featured from "@/components/HomePage/Featured";
import HowBookNextWorks from "@/components/HomePage/HowBookNextWorks";
import Stats from "@/components/HomePage/Stats";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <BannerTop />
      <Banner />
      <Stats />
      <Category />
      <Featured />
      <HowBookNextWorks />
    </div>
  );
}
