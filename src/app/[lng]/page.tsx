import Header from "@/components/Header/Header";
import Section1 from "@/components/Sections/Section1";
import Section2 from "@/components/Sections/Section2";
import Section3 from "@/components/Sections/Section3";
import Section4 from "@/components/Sections/Section4";
import Section5 from "@/components/Sections/Section5";
import Section6 from "@/components/Sections/Section6";

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
        <Section2 />
        {/* セクション３ portfolio1----------------------------------------------------------------- */}
        <Section3 lng={lng} />
        {/* セクション４ portfolio2----------------------------------------------------------------- */}
        <Section4 lng={lng} />
        {/* セクション５ portfolio3----------------------------------------------------------------- */}
        <Section5 lng={lng} />
        {/* セクション６ gallery ---------------------------------------------------------------------- */}
        <Section6 lng={lng} />
      </div>
    </div>
  );
}
