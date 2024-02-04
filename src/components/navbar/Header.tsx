import React, { useState } from "react";
import logo from "../../assets/aBit.png";
import { Link } from "react-router-dom";
import { MdOutlineMenu } from "react-icons/md";
import { IoMdClose } from "react-icons/io";

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex justify-between items-center w-[90%] mx-auto h-[110px]">
      <div>
        <img src={logo} alt="aBit-logo" />
      </div>

      <div className="flex items-center gap-2">
        <div className="text-link mr-[12px] font-bold text-skin-button border-[#764CC2] border-2 px-[18px] py-[12.5px] rounded-full border-solid">
          <Link to="/">Share new video</Link>
        </div>

        <div className="hidden lg:block">
          <MdOutlineMenu onClick={() => setOpen(!open)} className="text-2xl" />
        </div>
        <div
          className={`flex items-center ${
            open
              ? "lg:absolute lg:flex-col lg:gap-4 lg:p-4 lg:bg-skin-blue lg:w-full lg:h-screen lg:inset-0 z-10"
              : ""
          }`}
        >
          <div className="flex items-center lg:flex-col lg:w-full "> 
            <div className="lg:w-full lg:flex lg:pb-[50px] lg:justify-end">
              <IoMdClose onClick={() => setOpen(!open)} className={`text-2xl ${open ? "block" : "hidden"}`} />
            </div>
            <div
              className={`flex items-center justify-between gap-2 p-[10px]  ${
                open ? "block" : "lg:hidden"
              }   lg:w-full`}
            >
              <img
                src="https://s3-alpha-sig.figma.com/img/e429/0fe3/3cf727787d97b30f43e9d5d593811c05?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FD-7ktgCPAxgnBXWLdPcAswLkzSr4-NglEIuZyuwCsujs-agfOQf50gXBK2MG6lVSmyguIvqEZjZaRuTBOdpZ~T6YYrxb7nCWAyf1ISGqPlV5sL7ppfVamowAew00q94Ui1X2PwhRHgXG8xzmtMwRAbDcKAzy2J8kbMtrVfYUeRAjyzSY8GIVjIFfy6hr-3uFkzJTOUJGFu27OR8Zs5asOCXueWy1RLsp~TTYIwp0a2DeZOm15EYaWYM46A~IIiwmqQmhSHAkFkhhoihJfZV3JARWa4ErGhPVvpc3ztEza~S-DF9SnnylSjxaXlIUwVTQCQWCkxgjcwfwckkOwDlZw__"
                className="hover:opacity-100 opacity-[32%] w-[28px] h-[28px]"
                alt="Image"
              />
              <p className="hidden lg:block">Check your Wallet</p>
            </div>
            <div
              className={`p-[10px] justify-between  flex items-center gap-2   ${
                open ? "block" : "lg:hidden"
              }  lg:w-full`}
            >
              <img
                src="https://s3-alpha-sig.figma.com/img/d4b0/9a75/31214bab4d4da0e74f722e59ea7df6a7?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bbFeCPbV9IvtDXl01Uoj5liGX88oN979CTaO6Wqhr5ne~MKiZWhhP0Pc6TnpxrYDQBBZez2ejb3HaJ-ds8bt3~~MkWCoMz8n3KNp6Yi6Hx3rNpAYnvBGwXDdQ~WggD3QfuD9NjSVIkucrNZkbJJu4wORM53C1UgdbVMxs~JETXxVOG5dhuN2iOL9xJQQ26ml9Lud-mQYaS4cx-m1ZFqdkGALylLMJiKcxl9xhmxpQqEO7TwIDpO~ptGt~7r0fU16KFQylmdmJjwwWJm5Mcfmn5M~TkKiteY2WMcN8d~90j~lin1fsirdTgvZ4plopR2x4kf8RzusM8SJa~qlh-S9BQ__"
                className="hover:opacity-100 opacity-[32%] w-[36px] h-[36px]"
                alt="Image"
              />
              <p className="hidden lg:block">Notification</p>
            </div>
          </div>
          {/* profile screen */}
          <div
            className={`flex items-center gap-[15px] lg:w-full  ${
              open ? "block" : "lg:hidden"
            } lg:justify-between`}
          >
            <img
              src="https://s3-alpha-sig.figma.com/img/fa88/725b/e918233d4da7ccd1a24a48ff69f54227?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FGLyWnTlGCGuydtH6vvOScdkyET4THiymHYdeVzff~xM6cTAPGOEw8CHlmgB4P-yy5gqMOyFb6HQfsPLP-WgYMjQ4tSkDT~YKmAjfNIe3pK-EYUyb9c2mW7XgbvLE-AV1~nGL1amZPaCocRjBNCucSVi-wfsPqGtImufYVpSksmdHtfmNnJXv5LWSiONBX9bOvpQLEoHIL0OHOYNPDuwgKzgs-8pHcDLfuHpjP66J3ffOvbVa5--FQNnE36kn3Oqlp4ohMARpDIIncllMMIYLSWMX89lXmG5MOSDQxwVUUtprZFB4D8nfd2llOu8sdIyP2Jmo-g7tIYNDFAfUvHn7A__"
              className="w-[31px] h-[32px] rounded-full border-2 border-[#000]"
            />
            <p className="hidden lg:block">Your profile</p>
            <img
              src="https://s3-alpha-sig.figma.com/img/77f1/bcd4/30c1e1ab750b92d3674e360cc2c1876a?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mvElHSjz04rxGzEzXgxMQ4GrYe3T1w4C9pMaKzb1B3xgkzeiyrh8efLpJv8a~Y9G3MYG0YI689vc86FMqR~hf5CqsYpgGrNENkQj80emt~0cwmv2t9ypCOZatIn8aH8Hs7l9oSOo3ZstDn6~-hXC~Xvbiwcj6QETE5q2NB6cjmtM6Q6an88jqPkXAmJ1u1EpRBpy2FA~txeVuwchaq42jttBBsLhkZmfDWmOO8LnDzicOefUrEc6~xDBSwhtzqxHIzGeY2ZHa6UW~uJ-yd2-ecIvej~YOWo0C9lmBqmHaPYuVTVPcPfYUcHaL7RmEXOiS6iaBxOJJZm7XbZMrK6ypw__"
              className="w-[24px] h-[24px] opacity-[40%]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
