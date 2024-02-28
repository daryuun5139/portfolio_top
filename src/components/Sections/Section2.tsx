import ProfileContent from "../Others/ProfileContent";

type Props = {
  lng: string;
};

const Section2 = ({ lng }: Props) => {
  const sectionName = "profile";

  return (
    <>
      <section id="about" className="relative flex w-full snap-start items-center justify-center">
        {/* レスポンシブスマホ(portrait, landscape)----------------------------*/}
        <div className="absolute top-[50px] flex h-[calc(100%-50px)] w-full 2xs:top-[60px] 2xs:h-[calc(100%-60px)] xs:top-[65px] xs:h-[calc(100%-65px)] sm:top-[80px] sm:h-[calc(100%-80px)] md:hidden landscape:hidden">
          <div className="mx-auto flex h-full flex-col">
            <h1 className="flex pb-2 text-3xl 2xs:text-5xl xs:text-6xl sm:text-7xl">
              <span className="mx-auto flex cursor-default font-bold">about me</span>
            </h1>
            <div className="mx-auto flex h-[85%] cursor-default overflow-y-scroll px-5 pt-8">
              <ProfileContent lng={lng} ns={sectionName} />
            </div>
          </div>
        </div>
        {/* レスポンシブPC(md〜)------------------------------------------------ */}
        <div className="relative hidden h-full w-full md:flex big-phone:hidden">
          <div className="absolute left-[150px] top-[130px] flex">
            <h1 className="flex flex-col items-end">
              <span className="m-0 flex cursor-default text-9xl font-bold leading-[150px]">
                about
              </span>
              <span className="m-0 flex cursor-default text-9xl font-bold leading-[150px]">me</span>
            </h1>
            <div className="profileBox ml-20 mt-10 flex h-[500px] w-[700px] flex-col overflow-y-scroll rounded-xl border-4 border-[#003566] px-10 py-8">
              <ProfileContent lng={lng} ns={sectionName} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Section2;
