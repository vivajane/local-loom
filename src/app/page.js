import Hero from "./components/Hero";
import Adornment from "./components/homepageCom/Adornment";
import Crafted from "./components/homepageCom/Crafted";
import Discover from "./components/homepageCom/Discover";
import Earth from "./components/homepageCom/Earth";
import Favourite from "./components/homepageCom/Favorite";
import StayConnected from "./components/homepageCom/StayConnected";
import Step from "./components/homepageCom/Step";
import WhatIs from "./components/homepageCom/WhatIs";
import Why from "./components/homepageCom/Why";


export default function Home() {
  return (
    <div className="py-23">
      <Step/>
      <Why/>
      <Earth/>
      <Discover/>
      <Adornment/>
      <Crafted/>
      <Favourite/>
      <WhatIs/>
      <StayConnected/>
    </div>
  );
}
