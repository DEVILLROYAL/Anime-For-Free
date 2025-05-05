import LatestCompleted from "@/components/LatestCompleted";
import LatestEpisodes from "@/components/LatestEpisodes";
import Slidebtn from "@/components/Slidebtn";
import Slider from "@/components/Slider";
import TopAnimes from "@/components/TopAnimes";
import Trend from "@/components/Trend";
import UpcomingAnime from "@/components/UpcomingAnime";

export default async function Home() {

  return (
    <>
         <Slider/>
         <LatestEpisodes/>
         <Trend/>
         <LatestCompleted/>
         <UpcomingAnime/>
         <TopAnimes/>
    </>
  );
}
