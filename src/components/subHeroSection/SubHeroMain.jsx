const SubHeroMain = () => {
  return (
    <>
    <div className="w-full bg-transparent border-lightGrey text-lightGrey flex flex-wrap uppercase xl:text-2xl md:text-xl sm:text-lg py-6 md:flex-row sm:flex-col items-left pl-5 gap-6">
      <p className="md:block sm:hidden">Fast Learner</p>
      <p className="md:block sm:hidden">Team Work</p>
      <p>Details Master</p>

      {/* Resume Button */}
      
      
    </div>
    <div className="w-100 bg-transparent border-lightGrey text-lightGrey flex flex-wrap uppercase xl:text-2xl md:text-xl sm:text-lg py-6 md:flex-row sm:flex-col sm:w-5 items-left pl-5 gap-6">
      <a
        href="https://drive.google.com/file/d/1yK7Ln8KF2SBKDn-82FCLBgnjL07jVlKO/view?usp=drive_link" // Change to your resume link
        download
        className="  px-6 py-3 text-lightGrey  border-cyan border font-semibold bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg  hover:shadow-xl transition-all duration-300 hover:scale-105 hover:from-blue-500 hover:to-white"
      >
        Resume
      </a>
      </div>
    
      
    

    </>
  );
};

export default SubHeroMain;
