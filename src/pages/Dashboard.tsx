import React from "react";
import coverimage from "../assets/coverimage.png";
import Listitems from "../components/list/Listitems";

function Dashboard() {
  return (
    <div>
      {/* Cover Image */}
      <div>
        <img
          src={coverimage}
          className="w-full object-cover h-[400px]"
          alt="coverimage"
        />
      </div>

      {/* Marquee Section */}
      <div className="marquee-container overflow-hidden whitespace-nowrap bg-skin-grey text-white font-marquee py-[20px]">
      <h5 className="inline-block animate-marquee text-h5">
        John Bill / Creator / Moved to NYC / 27.11.22 / Live now /
        John Bill / Creator / Moved to NYC / 27.11.22 / Live now /
        John Bill / Creator / Moved to NYC / 27.11.22 / Live now /
        John Bill / Creator / Moved to NYC / 27.11.22 / Live now /
        John Bill / Creator / Moved to NYC / 27.11.22 / Live now /
        John Bill / Creator / Moved to NYC / 27.11.22 / Live now/
        John Bill / Creator / Moved to NYC / 27.11.22 / Live now /
        John Bill / Creator / Moved to NYC / 27.11.22 / Live now /
        John Bill / Creator / Moved to NYC / 27.11.22 / Live now
      </h5>
    </div>

      {/* Main Content Container */}
      <div className="max-w-[1200px] mx-auto relative lg:w-[90%]">
        {/* Card Section */}
        <div className="max-w-[571px] m-r-auto bg-[#eee] rounded-[24px] absolute top-[-181px] md:relative md:top-0 mx-auto">
          <div className="flex gap-[30px] items-center md:flex-col md:gap-[15px]">
            {/* Image Section */}
            <div className="w-[234px] h-[234px]">
              <img
                src="https://s3-alpha-sig.figma.com/img/fa88/725b/e918233d4da7ccd1a24a48ff69f54227?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FGLyWnTlGCGuydtH6vvOScdkyET4THiymHYdeVzff~xM6cTAPGOEw8CHlmgB4P-yy5gqMOyFb6HQfsPLP-WgYMjQ4tSkDT~YKmAjfNIe3pK-EYUyb9c2mW7XgbvLE-AV1~nGL1amZPaCocRjBNCucSVi-wfsPqGtImufYVpSksmdHtfmNnJXv5LWSiONBX9bOvpQLEoHIL0OHOYNPDuwgKzgs-8pHcDLfuHpjP66J3ffOvbVa5--FQNnE36kn3Oqlp4ohMARpDIIncllMMIYLSWMX89lXmG5MOSDQxwVUUtprZFB4D8nfd2llOu8sdIyP2Jmo-g7tIYNDFAfUvHn7A__"
                className="min-w-[234px] h-[234px] border-r-[1px] rounded-t-[24px] rounded-l-[24px]"
                alt="profile"
              />
            </div>

            {/* Details Section */}
            <div className="flex items-center justify-between pr-[50px] flex-wrap gap-[30px] w-full md:p-[40px] md:gap-[15px]">
              <h5 className="text-h5 font-bold">DAN MACE</h5>
              <p className="text-link">/Johny_Films/</p>
              <div className="text-[#696969] text-p">
                <b>Bio</b>
                <p>
                  Simply a film fan creating original content for YouTube. Let’s
                  Collaborate.
                </p>
              </div>

              {/* Action Buttons Section */}
              <div className="flex">
                <div className="border border-r-0 text-center border-[#000] h-[30px] w-[129px] rounded-l-[8px]">
                  Creator
                </div>
                <div className="bg-[#000000A6] h-[30px] w-[129px] rounded-r-[8px]"></div>
              </div>
            </div>
          </div>
        </div>
        {/* Card ends */}
         <Listitems/>
      </div>
    </div>
  );
}

export default Dashboard;
