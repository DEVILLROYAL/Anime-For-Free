import LatestCompleted from "@/components/Home/LatestCompleted";
import LatestEpisodes from "@/components/Home/LatestEpisodes";
import Slider from "@/components/Home/Slider";
import TopAnimes from "@/components/Home/TopAnimes";
import Trend from "@/components/Home/Trend";
import UpcomingAnime from "@/components/Home/UpcomingAnime";
import YouList from "@/components/YouList";

export default async function Home() {

  return (
    <>
         <Slider/>
         <Trend/>
         <LatestEpisodes/>
         <TopAnimes/>
         <LatestCompleted/>
         <UpcomingAnime/>
         <YouList/>
    </>
  );
}
