"use client";

import Image from "next/image";
import NavigationDesktop from "./_components/navigation-desktop";
import { MenuIcon, PlayCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "./_components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./_components/ui/sheet";
import NavigationMobile from "./_components/navigation-mobile";
import ContentSection from "./_components/ContentSection";
import ContentSectionVertical from "./_components/ContentSectionVertical";

import { sportsData } from "./_data/sports";
import { entertainmentData } from "./_data/entertainment";
import { recentlyData } from "./_data/recently";
import { watchlistData } from "./_data/watchlist";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "./_components/ui/popover";
import Link from "next/link";

export default function Home() {
  const [selectedSportsIndex, setSelectedSportsIndex] = useState(0);
  const [selectedEntertainmentIndex, setSelectedEntertainmentIndex] =
    useState(-1);
  const [selectedRecentlyIndex, setSelectedRecentlyIndex] = useState(-1);
  const [selectedWatchlistIndex, setSelectedWatchlistIndex] = useState(-1);
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const [activeSection, setActiveSection] = useState<
    "sports" | "entertainment" | "recently" | "watchlist"
  >("sports");

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const preloadImages = async () => {
      const allData = [
        ...sportsData,
        ...entertainmentData,
        ...recentlyData,
        ...watchlistData,
      ];
      const imagePromises = allData.map((item) => {
        return new Promise((resolve, reject) => {
          const img = new globalThis.Image();
          img.src = item.bannerImage;
          img.onload = resolve;
          img.onerror = reject;
          img.crossOrigin = "anonymous";
        });
      });

      try {
        await Promise.all(imagePromises);
        setIsLoading(false);
      } catch (error) {
        console.error("Failed to preload images:", error);
        setIsLoading(false);
      }
    };

    preloadImages();
  }, []);

  const selectedItem =
    activeSection === "sports"
      ? sportsData[selectedSportsIndex]
      : activeSection === "entertainment"
      ? entertainmentData[selectedEntertainmentIndex]
      : activeSection === "recently"
      ? recentlyData[selectedRecentlyIndex]
      : watchlistData[selectedWatchlistIndex];

  return (
    <div className="relative z-10 max-w-[1920px] mx-auto">
      {/* MOBILE MENU */}
      <Sheet>
        <SheetTrigger asChild>
          <Button
            className="absolute top-4 right-4 z-30 md:hidden bg-transparent border border-white/20"
            size={"icon"}
          >
            <MenuIcon className="opacity-45" />
          </Button>
        </SheetTrigger>
        <SheetContent className="bg border-l-transparent text-white min-w-[85%] overflow-y-auto [&::-webkit-scrollbar]:hidden">
          <SheetHeader>
            <SheetTitle className="mb-5">
              {/* LOGO */}
              <Image
                src="/logo.svg"
                width={100}
                height={45}
                alt="NOW"
                className="w-14 rotate-180"
              />
            </SheetTitle>
          </SheetHeader>
          <NavigationMobile />
        </SheetContent>
      </Sheet>
      <div className="absolute bg-gradient-to-tr from-[#001211] via-[#001211] to-[transparent] bg-[length:100%_100%] w-1/2 h-full z-20 top-0 left-0"></div>
      {/* CARD SELECTED IMAGE BACKGROUND */}
      <div className="absolute w-[85%] max-h-60 z-10 right-0 top-0">
        {isLoading ? (
          <div className="w-full h-[540px] bg-gradient-to-r from-gray-800/30 to-gray-700/20 animate-pulse flex items-center justify-center">
            <div className="text-white/70">Loading content...</div>
          </div>
        ) : (
          <Image
            src={selectedItem.bannerImage}
            width={1920}
            height={540}
            alt={selectedItem.altText}
            className={`w-full h-auto object-cover z-0 ${
              shouldAnimate ? "animate__animated animate__fadeIn" : ""
            }`}
            quality={85}
            priority={true}
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P+/HgAEtAI8V7yQCgAAAABJRU5ErkJggg=="
          />
        )}
        <div className="absolute bg-gradient-to-b from-[#000] via-[#001211] to-[transparent] bg-[length:100%_100%] w-full h-40 z-20 top-0 left-0 opacity-75"></div>
      </div>

      {/* HEADER & INFOS WRAP */}
      <div className="pl-4 md:pl-8">
        <header className="w-full pt-4 md:pt-10 relative z-20">
          {/* LOGO */}
          <Image
            src="/logo.svg"
            width={100}
            height={45}
            alt="NOW"
            className="w-14 md:w-16 lg:w-20 absolute opacity-90 rotate-180 animate__animated animate__fadeIn"
          />

          <NavigationDesktop />
        </header>

        {/* CARD GENERAL INFOS */}
        <div className="relative z-20 py-8 text-white/95 space-y-3">
          {/* CARD CATEGORY LOGO */}
          {selectedItem.categoryImage && (
            <p className="relative w-[75px] h-[10px]">
              <Image
                src={selectedItem.categoryImage}
                width={112}
                height={15}
                alt="category"
                className="absolute w-full h-auto object-cover z-0 animate__animated animate__fadeIn animate__delay-0.5s"
                quality={100}
              />
            </p>
          )}

          {/* CARD TITLE */}
          <h1
            className={`flex items-start justify-start uppercase font-extralight text-4xl text-wrap max-w-80 truncate min-h-20 max-h-20 ${
              shouldAnimate ? "animate__animated animate__fadeInUp" : ""
            }`}
            onAnimationEnd={() => setShouldAnimate(false)}
          >
            {selectedItem.title}
          </h1>
          <Link
            href={`https://youtube.com/results?search_query=${selectedItem.title} trailer`}
            target="_blank"
            className="absolute animate-pulse rounded-full bg-teal-500/55 top-16 right-5"
          >
            <PlayCircle
              className="text-teal-100"
              size={40}
              style={{ strokeWidth: 0.5 }}
            />
          </Link>

          {/* CARD INFOS */}
          <div className="text-xs animate__animated animate__fadeIn animate__delay-1.06s">
            {selectedItem.genre && (
              <>
                {selectedItem.genre}{" "}
                <span className="opacity-45 font-bold">&bull;</span>
              </>
            )}{" "}
            {selectedItem.duration && (
              <>
                {selectedItem.duration}{" "}
                <span className="opacity-45 font-bold">&bull;</span>
              </>
            )}{" "}
            {selectedItem.year && (
              <>
                {selectedItem.year}{" "}
                <span className="opacity-45 font-bold">&bull;</span>{" "}
              </>
            )}
            <span className="inline-flex items-center justify-between gap-1 w-fit">
              {selectedItem.classAge && (
                <>
                  <span className="border border-white/20 rounded-sm px-1">
                    {selectedItem.classAge}
                  </span>
                </>
              )}
              {selectedItem.classification && (
                <>
                  <span className="border border-white/20 rounded-sm px-1">
                    {selectedItem.classification}
                  </span>
                </>
              )}
            </span>
          </div>

          {/* CARD SHORT DESCRIPTION */}
          {selectedItem.description && (
            <p className="flex items-start justify-start text-sm max-w-80 animate__animated animate__fadeIn animate__delay-1.07s">
              {selectedItem.description}
            </p>
          )}
        </div>
        {/* CATEGORY BREADCRUMBS */}
        <h3 className="relative z-20 animate__animated animate__fadeIn animate__delay-1.07s">
          {selectedItem.sectionName}
          <span className="opacity-45 ml-4">Home</span>
        </h3>
      </div>

      {/* CARDS CONTENT */}
      <div id="scroll-container" className="relative z-30">
        {/* TOP MASK */}
        <div className="bg-gradient-to-b from-[#001211] via-[rgba(0,18,17,0.85)] to-[transparent] bg-[length:100%_100%] h-[50px] w-full absolute left-0 right-0 top-0 z-40"></div>

        {/* BOTTOM MASK */}
        <div className="bg-gradient-to-t from-[#001211] via-[rgba(0,18,17,0.85)] to-[transparent] bg-[length:100%_100%] h-[50px] w-full absolute left-0 right-0 bottom-0 z-40"></div>

        {/* CARDS WRAPPER */}
        <div className="ml-4 md:ml-8 overflow-y-auto [&::-webkit-scrollbar]:hidden max-h-[65dvh] md:max-h-[45dvh] h-fit relative z-30  bg-gradient-to-t from-[#001211] via-[#001211] to-[rgba(0,18,17,0.8)] bg-[length:100%_100%]">
          {/* Sports Data */}
          <div
            className={`flex overflow-x-auto [&::-webkit-scrollbar]:hidden relative z-20 pl-2`}
          >
            <ContentSection
              viewallText=""
              sectionName={sportsData[0].sectionName}
              data={sportsData}
              selectedIndex={selectedSportsIndex}
              setSelectedIndex={(index) => {
                setSelectedSportsIndex(index);
                setActiveSection("sports");
                setShouldAnimate(true);
              }}
              showViewAllAtStart={false}
            />
          </div>

          {/* Entertainment Data */}
          <div
            className={`flex overflow-x-auto [&::-webkit-scrollbar]:hidden relative z-20 pl-2`}
          >
            <ContentSection
              viewallText={entertainmentData[0].viewAllText}
              sectionName={entertainmentData[0].sectionName}
              data={entertainmentData}
              selectedIndex={selectedEntertainmentIndex}
              setSelectedIndex={(index) => {
                setSelectedEntertainmentIndex(index);
                setActiveSection("entertainment");
                setShouldAnimate(true);
              }}
              showViewAllAtStart={true}
            />
          </div>

          {/* Recently Added Data */}
          <div
            className={`flex overflow-x-auto [&::-webkit-scrollbar]:hidden relative z-20 pl-2`}
          >
            <ContentSectionVertical
              viewallText={recentlyData[0].viewAllText}
              sectionName={recentlyData[0].sectionName}
              data={recentlyData}
              selectedIndex={selectedRecentlyIndex}
              setSelectedIndex={(index) => {
                setSelectedRecentlyIndex(index);
                setActiveSection("recently");
                setShouldAnimate(true);
              }}
              showViewAllAtStart={true}
            />
          </div>

          {/* Watchlist Data */}
          <div
            className={`flex overflow-x-auto [&::-webkit-scrollbar]:hidden relative z-20 pl-2 mb-12`}
          >
            <ContentSection
              viewallText={watchlistData[0].viewAllText}
              sectionName={watchlistData[0].sectionName}
              data={watchlistData}
              selectedIndex={selectedWatchlistIndex}
              setSelectedIndex={(index) => {
                setSelectedWatchlistIndex(index);
                setActiveSection("watchlist");
                setShouldAnimate(true);
              }}
              showViewAllAtStart={true}
              showViewAllAtEnd={false}
            />
          </div>
        </div>
      </div>

      {/* DISCLAIM SECTION */}
      <div className="fixed bottom-5 right-2 z-30">
        <Popover>
          <PopoverTrigger>
            <span className="text-[9px] p-3 border rounded-lg opacity-75 hover:opacity-100 hover:bg-[rgba(0,18,17,0.85)] hover:border-[rgba(0,18,17,0.85)] hover:text-yellow-400">
              Disclaimer
            </span>
          </PopoverTrigger>
          <PopoverContent className="bg text-yellow-500 border-[rgba(0,18,17,0.95)]">
            <p className="text-[10px]">
              This is not a commercial project. It has been created solely for
              the purpose of practical learning and educational development. No
              financial gain is being sought, and the work is not intended for
              commercial distribution or sale. Images and text content
              copyrights belong to <em>SKY UK Limited</em>.
            </p>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
}
