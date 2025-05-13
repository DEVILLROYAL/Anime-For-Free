import LatestCompleted from "@/components/LatestCompleted";
import LatestEpisodes from "@/components/LatestEpisodes";
import Slider from "@/components/Slider";
import TopAnimes from "@/components/TopAnimes";
import Trend from "@/components/Trend";
import UpcomingAnime from "@/components/UpcomingAnime";
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
