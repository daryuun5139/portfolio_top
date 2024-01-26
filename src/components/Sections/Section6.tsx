import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

type Props = {};

const Section6 = (props: Props) => {
  const scrollInnerContents = () => {
    for (let i = 0; i < 10; i++) {
      <div key={i} className="relative flex h-[40%] w-[45%] bg-slate-200">
        <span className="absolute top-1/2 -translate-y-1/2 translate-x-[75%]">準備中{i}</span>
      </div>;
    }
  };

  return (
    <>
      <section id="gallery" className="flex w-full snap-start items-center justify-center">
        <Carousel className="h-full w-full">
          <CarouselContent className="h-full w-full">
            {/* id="gallery_title" ======================================================================== */}
            <CarouselItem className="flex h-screen w-full bg-purple-600 p-0">
              {/* レスポンシブスマホ(portrait, landscape)---------------------------------------*/}
              <section id="gallery_title" className="relative flex w-full">
                <h1 className="absolute top-1/3 flex w-full flex-col landscape:top-[22%]">
                  <span className="mx-auto flex cursor-default text-6xl font-bold leading-[70px] text-white sm:text-6xl sm:leading-[100px]">
                    gallery
                  </span>
                </h1>
                <div className="absolute top-[80%] flex w-full justify-end">
                  <CarouselNext id="CarouselNext_gallery" />
                  <label htmlFor="CarouselNext_gallery">
                    <span className="mr-3 flex text-4xl font-semibold text-white underline hover:cursor-pointer hover:opacity-75">
                      more⇒
                    </span>
                  </label>
                </div>
              </section>
            </CarouselItem>
            {/* id="gallery_contents" ======================================================================== */}
            <CarouselItem className="flex h-screen w-full bg-purple-600 p-0">
              {/* レスポンシブスマホ(portrait, landscape)---------------------------------------*/}
              <section id="gallery_contents" className="relative flex w-full justify-center">
                <div className="absolute top-[12%] flex h-[60%] w-full flex-col items-center landscape:top-[5%] landscape:h-[70%]">
                  <h1 className="mx-auto flex cursor-default text-5xl font-bold text-white">
                    gallery1
                  </h1>
                  <div className="mt-3 flex h-full w-[90%] flex-wrap justify-between gap-3 overflow-y-scroll pt-2">
                    {Array(10)
                      .fill(0)
                      .map((n, index) => (
                        <div
                          key={index}
                          className="relative flex h-[40%] w-[45%] bg-slate-200 landscape:h-[80%] landscape:w-[30%]"
                        >
                          <span className="absolute top-1/2 -translate-y-1/2 translate-x-1/2">
                            準備中{index + 1}
                          </span>
                        </div>
                      ))}
                  </div>
                </div>
                <div className="absolute top-[80%] flex w-full justify-start">
                  <CarouselPrevious id="CarouselPrevious_gallery" />
                  <label htmlFor="CarouselPrevious_gallery">
                    <span className="ml-3 flex text-4xl font-semibold text-white underline hover:cursor-pointer hover:opacity-75">
                      ⇐back
                    </span>
                  </label>
                </div>
              </section>
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </section>
    </>
  );
};

export default Section6;
