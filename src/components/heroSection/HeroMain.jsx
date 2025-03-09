import HeroText from "./HeroText";
import HeroPic from "./HeroPic";

const HeroMain = () => {
  return (
    <div className="pt-40 pb-16">
      <div className="flex md:flex-row sm:flex-col max-w-[1200px] justify-between items-center relative px-5">
        {/* Add left padding or margin to HeroText container */}
        <div className="md:pl-10 sm:pl-5"> {/* Adjust padding as needed */}
          <HeroText />
        </div>
        <HeroPic />
      </div>
    </div>
  );
};

export default HeroMain;