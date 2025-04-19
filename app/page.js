import Navbar from "@/components/Navbar";
import SearchScript from "@/components/SearchScript";
import Slider from "@/components/Slider";
import Trend from "@/components/Trend";
import UpcomingAnime from "@/components/UpcomingAnime";

export default function Home() {
  return (
    <>
         <Navbar/>
         <Slider/>
         <Trend/>
         <UpcomingAnime/>
    </>
  );
}
