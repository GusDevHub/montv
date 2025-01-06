"use client"
import Image from "next/image";
import NavigationDesktop from "./_components/navigation-desktop";
import { MenuIcon } from 'lucide-react';
import { useState } from "react";
import { Button } from "./_components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "./_components/ui/sheet";
import NavigationMobile from "./_components/navigation-mobile";
import ContentSection from "./_components/ContentSection";
import ContentSectionVertical from "./_components/ContentSectionVertical";

// Section Names
const sportsSection = "Premier League Highlights";
const entertainmentSection = "Entertainment";
const recentlySection = "Recently Added";
const watchlistSection = "Watchlist";

// View All Names
const viewAllRegular = "View All";
const viewallWatchlist = "My TV"

// Sports data
const sportsData = [
  {
    viewAllText: "",
    sectionName: sportsSection,
    categoryImage: "/sports/category/premier_league.png",
    bannerImage: "/sports/banners/premier.jpg",
    title: "Leicester V Man City",
    description: "Leicester City play to Manchester City at the King Power Stadium in the Premier League. (29.12)",
    classification: "U",
    classAge: "",
    duration: "3 mins",
    year: "2024",
    genre: "Football",
    altText: "premier",
  },
  {
    viewAllText: "",
    sectionName: sportsSection,
    categoryImage: "/sports/category/tennis.png",
    bannerImage: "/sports/banners/tennis.jpg",
    title: "Great Britain V Argentina",
    description: "British number one Katie Boulter competes in United Cup group-stage action, as the 28-year-old Brit goes up against Argentina's Nadia Podoroska in Sydney. (30.12)",
    classification: "",
    classAge: "0",
    duration: "3 hours",
    year: "",
    genre: "Tennis",
    altText: "tennis",
  },
  {
    viewAllText: "",
    sectionName: sportsSection,
    categoryImage: "/sports/category/darts.png",
    bannerImage: "/sports/banners/darts.jpg",
    title: "World Darts Championship D12: Afternoon Session",
    description: "Ricky Evans and Robert Owen complete the third-round action, while in the last 16, Gerwyn Price plays Jonny Clayton and reigning champion Luke Humphries faces Peter Wright. (29.12)",
    classification: "",
    classAge: "0",
    duration: "4 hours",
    year: "",
    genre: "Darts",
    altText: "darts",
  },
  {
    viewAllText: "",
    sectionName: sportsSection,
    categoryImage: "/sports/category/nfl.png",
    bannerImage: "/sports/banners/nfl.jpg",
    title: "Cowboys @ Eagles",
    description: "Officially out of the playoff reckoning, the 49ers host a Detroit Lions side who recently put together a franchise-record 13th win - staying on top of the NFC in the process. (30.12)",
    classification: "",
    classAge: "0",
    duration: "4 hours",
    year: "",
    genre: "American Football",
    altText: "nfl",
  },
  {
    viewAllText: "",
    sectionName: sportsSection,
    categoryImage: "/sports/category/cricket.png",
    bannerImage: "/sports/banners/cricket.jpg",
    title: "South Africa V Pakistan",
    description: "The fifth and final day of the second Test match between South Africa and Pakistan in Centurion. (30.12)",
    classification: "0",
    classAge: "",
    duration: "8h 30m",
    year: "",
    genre: "Cricket",
    altText: "cricket",
  },
  {
    viewAllText: "",
    sectionName: sportsSection,
    categoryImage: "/sports/category/football.png",
    bannerImage: "/sports/banners/football.jpg",
    title: "Sheff Utd V West Brom",
    description: "Monday Night Football comes from Old Trafford as Manchester United face Newcastle. Ruben Amorim has collected just seven points from his six Premier League games in charge so far...",
    classification: "S",
    classAge: "0",
    duration: "4h 30m",
    year: "",
    genre: "Football",
    altText: "football",
  },
];

// Entertainment data
const entertainmentData = [
  {
    viewAllText: viewAllRegular,
    sectionName: entertainmentSection,
    categoryImage: "/entertainment/category/atlantic.png",
    bannerImage: "/entertainment/banners/gameofthrones.jpg",
    title: "Game of Thrones",
    description: "The all-conquering, multi-Emmy-winning adaption of George R R Martin's rich yet brutal fantasy saga.",
    classification: "",
    classAge: "18",
    duration: "8 Seasons",
    year: "",
    genre: "Drama",
    altText: "Game of Thrones",
  },
  {
    viewAllText: viewAllRegular,
    sectionName: entertainmentSection,
    categoryImage: "/entertainment/category/atlantic.png",
    bannerImage: "/entertainment/banners/thepenguin.jpg",
    title: "The Penguin",
    description: "In the next chapter in Matt Reeves' epic The Batman saga, this thrilling crime drama follows Oswald 'OZ' Cobb's quest for power and control in a fractured Gotham City.",
    classification: "",
    classAge: "18",
    duration: "8 Episodes",
    year: "",
    genre: "Drama",
    altText: "The Penguin",
  },
  {
    viewAllText: viewAllRegular,
    sectionName: entertainmentSection,
    categoryImage: "/entertainment/category/atlantic.png",
    bannerImage: "/entertainment/banners/houseofthedragon.jpg",
    title: "House of the Dragon",
    description: "Based on George R R Martin's Fire & Blood, the BAFTA-winning series, set 200 years before the events of Game of Thrones, tells the story of House Targaryen.",
    classification: "",
    classAge: "18",
    duration: "2 Seasons",
    year: "",
    genre: "Drama",
    altText: "House of the Dragon",
  },
  {
    viewAllText: viewAllRegular,
    sectionName: entertainmentSection,
    categoryImage: "/entertainment/category/uandalibi.png",
    bannerImage: "/entertainment/banners/theredking.jpg",
    title: "The Red King",
    description: "Chilling folk-horror following police sergeant Grace Narayan, who is sent on a 'punishment posting' to an island with an eerie religion, where the cold case of a missing boy unearths buried secrets.",
    classification: "",
    classAge: "15",
    duration: "6 Episodes",
    year: "",
    genre: "Drama",
    altText: "The Red King",
  },
  {
    viewAllText: viewAllRegular,
    sectionName: entertainmentSection,
    categoryImage: "/entertainment/category/comedy.png",
    bannerImage: "/entertainment/banners/avenue5.jpg",
    title: "Avenue 5",
    description: "Hugh Laurie stars as the captain of luxury space cruiser Avenue 5 in this sci-fi comedy from Armando Iannucci, creator of The Thick Of It. What can possibly go wrong? A Sky...",
    classification: "",
    classAge: "15",
    duration: "2 Seasons",
    year: "",
    genre: "Comedy",
    altText: "Avenue 5",
  },
];

// Recently Added data
const recentlyData = [
  {
    viewAllText: viewAllRegular,
    sectionName: recentlySection,
    categoryImage: "/cinema/category/cinema.png",
    bannerImage: "/cinema/banners/thefallguy.jpg",
    bannerCaller: "/cinema/banners/thefallguy.webp",
    title: "The Fall Guy",
    description: "Down-and-out stuntman Ryan Gosling sets out to find the missing star of his ex-girlfriend's blockbuster. Action with Emily Blunt.",
    classification: "S",
    classAge: "12",
    duration: "2h 1m",
    year: "2024",
    genre: "Action",
    altText: "The Fall Guy",
  },
  {
    viewAllText: viewAllRegular,
    sectionName: recentlySection,
    categoryImage: "/cinema/category/cinema.png",
    bannerImage: "/cinema/banners/kungfupanda4.jpg",
    bannerCaller: "/cinema/banners/kungfupanda4.webp",
    title: "Kung Fu Panda 4",
    description: "Skadoosh! Jack Black's Po returns to find and train a new Dragon Warrior while a sorceress plans to summon all of his past enemies for revenge.",
    classification: "PG",
    classAge: "S",
    duration: "1h 29min",
    year: "",
    genre: "Animation",
    altText: "Kung Fu Panda 4",
  },
  {
    viewAllText: viewAllRegular,
    sectionName: recentlySection,
    categoryImage: "/cinema/category/cinema.png",
    bannerImage: "/cinema/banners/aquietplace.jpg",
    bannerCaller: "/cinema/banners/aquietplacedayone.webp",
    title: "A Quiet Place: Day One",
    description: "Spin-off horror prequel with Lupita Nyong'o and Joseph Quinn. A small group attempts to survive an invasion in New York City.",
    classification: "S",
    classAge: "15",
    duration: "1h 35m",
    year: "2024",
    genre: "Sci-Fi",
    altText: "A Quiet Place: Day One",
  },
  {
    viewAllText: viewAllRegular,
    sectionName: recentlySection,
    categoryImage: "/cinema/category/cinema.png",
    bannerImage: "/cinema/banners/godzillaxkong.jpg",
    bannerCaller: "/cinema/banners/godzillaxkongthenewempire.webp",
    title: "Godzilla X Kong: The New Empire",
    description: "Two ancient titans - Godzilla and Kong - clash in an epic battle against an undiscovered threat hidden within our world. Action-packed sci fi",
    classification: "S",
    classAge: "12",
    duration: "1h 49m",
    year: "2024",
    genre: "Action",
    altText: "Godzilla X Kong: The New Empire",
  },
  {
    viewAllText: viewAllRegular,
    sectionName: recentlySection,
    categoryImage: "/cinema/category/cinema.png",
    bannerImage: "/cinema/banners/wonka.jpg",
    bannerCaller: "/cinema/banners/wonka.webp",
    title: "Wonka",
    description: "This is the story of how the world's greatest inventor, magician and chocolate-maker became the Willy Wonka we know today.",
    classification: "PG",
    classAge: "S",
    duration: "1h 51m",
    year: "2024",
    genre: "Family",
    altText: "Wonka",
  },
  {
    viewAllText: viewAllRegular,
    sectionName: recentlySection,
    categoryImage: "/cinema/category/cinema.png",
    bannerImage: "/cinema/banners/dune.jpg",
    bannerCaller: "/cinema/banners/dunepart2.webp",
    title: "Dune: Part Two (2024)",
    description: "The son of a Duke seeks revenge against the conspirators who destroyed his family. Sci-fi sequel with Timothée Chalamet and Zendaya.",
    classification: "S",
    classAge: "12",
    duration: "2h 39m",
    year: "2024",
    genre: "Action",
    altText: "football",
  },
];

// Watchlist data
const watchlistData = [
  {
    viewAllText: viewallWatchlist,
    sectionName: watchlistSection,
    categoryImage: "/cinema/category/cinema.png",
    bannerImage: "/cinema/banners/pulpfiction.jpg",
    title: "Pulp Fiction",
    description: "Quentin Tarantino's iconic crime drama follows the intertwining tales of mobsters and criminals on the streets of LA. With John Travolta, Bruce Willis and Samuel L Jackson.",
    classification: "S",
    classAge: "18",
    duration: "2h 28m",
    year: "1994",
    genre: "Thriller",
    altText: "Pulp Fiction",
  },
];

export default function Home() {
  const [selectedSportsIndex, setSelectedSportsIndex] = useState(0);
  const [selectedEntertainmentIndex, setSelectedEntertainmentIndex] = useState(-1);
  const [selectedRecentlyIndex, setSelectedRecentlyIndex] = useState(-1);
  const [selectedWatchlistIndex, setSelectedWatchlistIndex] = useState(-1);
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const [activeSection, setActiveSection] = useState<'sports' | 'entertainment' | 'recently' | 'watchlist'>('sports');

  const selectedItem = activeSection === 'sports'
    ? sportsData[selectedSportsIndex]
    : activeSection === 'entertainment'
      ? entertainmentData[selectedEntertainmentIndex]
      : activeSection === 'recently'
        ? recentlyData[selectedRecentlyIndex]
        : watchlistData[selectedWatchlistIndex];

  return (
    <div className="relative z-10 max-w-[1920px] mx-auto">
      {/* MOBILE MENU */}
      <Sheet>
        <SheetTrigger asChild>
          <Button className="absolute top-4 right-4 z-30 md:hidden bg-transparent border border-white/20" size={"icon"}><MenuIcon className="opacity-45" /></Button>
        </SheetTrigger>
        <SheetContent className="bg border-l-transparent text-white min-w-[85%]">
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
        <Image
          src={selectedItem.bannerImage}
          width={1920}
          height={540}
          alt={selectedItem.altText}
          className={`w-full h-auto object-cover z-0 ${shouldAnimate ? 'animate__animated animate__fadeIn' : ''
            }`}
          quality={100}
        />
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
            className={`flex items-start justify-start uppercase font-extralight text-4xl text-wrap max-w-80 truncate min-h-20 max-h-20 ${shouldAnimate ? 'animate__animated animate__fadeInUp' : ''
              }`}
            onAnimationEnd={() => setShouldAnimate(false)}
          >
            {selectedItem.title}
          </h1>

          {/* CARD INFOS */}
          <div className="text-xs animate__animated animate__fadeIn animate__delay-1.06s">
            {selectedItem.genre && (
              <>{selectedItem.genre} <span className="opacity-45 font-bold">&bull;</span></>)} {selectedItem.duration && (
                <>{selectedItem.duration}{" "}
                  <span className="opacity-45 font-bold">&bull;</span></>)} {selectedItem.year && (
                    <>{selectedItem.year}{" "}
                      <span className="opacity-45 font-bold">&bull;</span>{" "}</>)}
            <span className="inline-flex items-center justify-between gap-1 w-fit">
              {selectedItem.classAge && (
                <><span className="border border-white/20 rounded-sm px-1">{selectedItem.classAge}</span></>)}
              {selectedItem.classification && (
                <><span className="border border-white/20 rounded-sm px-1">{selectedItem.classification}</span></>)}
            </span>
          </div>

          {/* CARD SHORT DESCRIPTION */}
          {selectedItem.description && (
            <p className="flex items-start justify-start text-sm max-w-80 animate__animated animate__fadeIn animate__delay-1.07s">{selectedItem.description}</p>
          )}
        </div>
        {/* CATEGORY BREADCRUMBS */}
        <h3 className="relative z-20 animate__animated animate__fadeIn animate__delay-1.07s">{selectedItem.sectionName}<span className="opacity-45 ml-4">Home</span></h3>
      </div>

      <div id="scroll-container" className="relative z-30">

        <div className="bg-gradient-to-b from-[#001211] via-[rgba(0,18,17,0.85)] to-[transparent] bg-[length:100%_100%] h-[50px] w-full absolute left-0 right-0 top-0 z-40"></div>

        <div className="bg-gradient-to-t from-[#001211] via-[rgba(0,18,17,0.85)] to-[transparent] bg-[length:100%_100%] h-[50px] w-full absolute left-0 right-0 bottom-0 z-40"></div>

        <div className="ml-4 md:ml-8 overflow-y-auto [&::-webkit-scrollbar]:hidden max-h-[55dvh] md:max-h-[45dvh] h-fit relative z-30  bg-gradient-to-t from-[#001211] via-[#001211] to-[rgba(0,18,17,0.8)] bg-[length:100%_100%]">

          {/* Sports Data */}
          <div className={`flex overflow-x-auto [&::-webkit-scrollbar]:hidden relative z-20 pl-2 animate__animated animate__fadeInUp animate__delay-1.5s`}>
            <ContentSection
              viewallText=""
              sectionName={sportsSection}
              data={sportsData}
              selectedIndex={selectedSportsIndex}
              setSelectedIndex={(index) => {
                setSelectedSportsIndex(index);
                setActiveSection('sports');
                setShouldAnimate(true);
              }}
              showViewAllAtStart={false}
            />
          </div>

          {/* Entertainment Data */}
          <div className={`flex overflow-x-auto [&::-webkit-scrollbar]:hidden relative z-20 pl-2 animate__animated animate__fadeInUp animate__delay-1s`}>
            <ContentSection
              viewallText={viewAllRegular}
              sectionName={entertainmentSection}
              data={entertainmentData}
              selectedIndex={selectedEntertainmentIndex}
              setSelectedIndex={(index) => {
                setSelectedEntertainmentIndex(index);
                setActiveSection('entertainment');
                setShouldAnimate(true);
              }}
              showViewAllAtStart={true}
            />
          </div>

          {/* Recently Added Data */}
          <div className={`flex overflow-x-auto [&::-webkit-scrollbar]:hidden relative z-20 pl-2 animate__animated animate__fadeInUp animate__delay-2s`}>
            <ContentSectionVertical
              viewallText={viewAllRegular}
              sectionName={recentlySection}
              data={recentlyData}
              selectedIndex={selectedRecentlyIndex}
              setSelectedIndex={(index) => {
                setSelectedRecentlyIndex(index);
                setActiveSection('recently');
                setShouldAnimate(true);
              }}
              showViewAllAtStart={true}
            />
          </div>

          {/* Watchlist Data */}
          <div className={`flex overflow-x-auto [&::-webkit-scrollbar]:hidden relative z-20 pl-2 mb-12 animate__animated animate__fadeInUp animate__delay-2.5s`}>
            <ContentSection
              viewallText={viewallWatchlist}
              sectionName={watchlistSection}
              data={watchlistData}
              selectedIndex={selectedWatchlistIndex}
              setSelectedIndex={(index) => {
                setSelectedWatchlistIndex(index);
                setActiveSection('watchlist');
                setShouldAnimate(true);
              }}
              showViewAllAtStart={true}
              showViewAllAtEnd={false}
            />
          </div>

        </div>
      </div>
    </div>
  );
}