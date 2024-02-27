import Header from "@/components/Header/Header";
import Section1 from "@/components/Sections/Section1";
import Section2 from "@/components/Sections/Section2";
import Portfolio1 from "@/components/Sections/Portfolio1";
import Portfolio2 from "@/components/Sections/Portfolio2";
import Portfolio3 from "@/components/Sections/Portfolio3";
import Portfolio5 from "@/components/Sections/Portfolio5";
import Portfolio6 from "@/components/Sections/Portfolio6";

type ParamType = {
  params: { lng: string };
};

export default function Home({ params: { lng } }: ParamType) {
  return (
    <div className="relative w-full">
      <Header />
      <div className="h-screen w-full snap-y snap-mandatory overflow-hidden overflow-y-scroll">
        {/* セクション１ Title---------------------------------------------------------------------- */}
        <Section1 />
        {/* セクション２ About---------------------------------------------------------------------- */}
        <Section2 lng={lng} />
        {/* portfolio1 simple blog----------------------------------------------------------------- */}
        <Portfolio1 lng={lng} />
        {/* portfolio2 learn English with AI----------------------------------------------------------------- */}
        <Portfolio2 lng={lng} />
        {/* portfolio3 learn English with Video----------------------------------------------------------------- */}
        <Portfolio3 lng={lng} />
        {/* portfolio5 color palette---------------------------------------------------------------------- */}
        <Portfolio5 lng={lng} />
        {/* portfolio6 corporate site01---------------------------------------------------------------------- */}
        <Portfolio6 lng={lng} />
      </div>
    </div>
  );
}
