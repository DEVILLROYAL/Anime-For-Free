import LatestCompleted from "@/components/LatestCompleted";
import LatestEpisodes from "@/components/LatestEpisodes";
import Slider from "@/components/Slider";
import TopAnimes from "@/components/TopAnimes";
import Trend from "@/components/Trend";
import UpcomingAnime from "@/components/UpcomingAnime";

export default async function Home() {

  return (
    <>
         <Slider/>
         <Trend/>
         <LatestEpisodes/>
         <LatestCompleted/>
         <UpcomingAnime/>
         <TopAnimes/>
    </>
  );
}
