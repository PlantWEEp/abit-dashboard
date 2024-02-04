 
import logo from "../../assets/foooter-logo.png";

interface MenuItem {
  id: number;
  name: string;
  href: string;
}

function Footer() {
  const menus: MenuItem[] = [
    {
      id: 1,
      name: "Home",
      href: "/",
    },
    {
      id: 2,
      name: "Are you a Creator?",
      href: "/",
    },
    {
      id: 3,
      name: "Support",
      href: "/",
    },
  ];

  return (
    <>
      <div className="mt-[240px] w-[90%] mx-auto py-[140px] flex justify-between sm:flex-col sm:gap-[40px]">
        <div>
          <img src={logo} alt="footer-logo" />
          <h6 className="pt-[10px] w-[313px] text-h6">
            Changing the way in which creators and fans interact.
          </h6>
        </div>
        <div className="border-l-[2px] pl-[20px]"> 
            <ul className="text-p font-[700] flex gap-[18px] flex-col">
              {menus.map((menu, index) => {
                return <li key={index}>{menu.name}</li>;
              })}
            </ul> 
        </div>
      </div>
    </>
  );
}

export default Footer;
