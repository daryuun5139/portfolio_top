import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";

type Props = {
  lng: string;
};

const Section2 = ({ lng }: Props) => {
  return (
    <>
      <section id="about" className="flex w-full snap-start items-center justify-center">
        <div className="flex h-screen w-full justify-center p-0">
          {/* レスポンシブスマホ(portrait, landscape)----------------------------*/}
          <section id="about_inner" className="relative flex w-full md:hidden big-phone:flex">
            <h1 className="absolute top-1/3 flex w-full flex-col landscape:top-[22%]">
              <span className="mx-auto flex cursor-default text-6xl font-bold leading-[70px] sm:text-6xl sm:leading-[100px]">
                about
              </span>
              <span className="mx-auto flex cursor-default text-6xl font-bold leading-[70px] sm:text-6xl sm:leading-[100px]">
                me
              </span>
            </h1>
            <div className="absolute top-[80%] flex w-full justify-end">
              <Link href={`/${lng}/profile`}>
                <span className="mr-3 flex text-4xl font-semibold text-[#003566] underline hover:cursor-pointer hover:opacity-75">
                  more
                </span>
              </Link>
            </div>
          </section>
          {/* レスポンシブPC(md〜)------------------------------------------------ */}
          <section
            id="about_inner"
            className="relative hidden h-full w-full md:flex big-phone:hidden"
          >
            <h1 className="absolute left-[150px] top-[130px] flex flex-col items-end">
              <span className="m-0 flex cursor-default text-9xl font-bold leading-[150px]">
                about
              </span>
              <span className="m-0 flex cursor-default text-9xl font-bold leading-[150px]">me</span>
            </h1>
            <div className="absolute top-[80%] flex w-full justify-end">
              <Link href={`/${lng}/profile`}>
                <span className="mr-20 flex text-7xl font-semibold text-[#003566] underline hover:cursor-pointer hover:opacity-75">
                  more
                </span>
              </Link>
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default Section2;
