 
import { FaPlus } from "react-icons/fa6";
interface Item {
  value: string;
  text: string;
}

function ListItems() {
  const items: Item[] = [
    {
      value: "1",
      text: "Shared Videos"
    },
    {
      value: "$3804",
      text: "Co-owner Earnings"
    },
    {
      value: "317",
      text: "Co-owner Community"
    },
    {
      value: "$9510",
      text: "Funds Raised"
    }
  ];

  return (
    <>
      <div className="pt-[130px] flex justify-between w-full flex-wrap">
        <div className="md:pb-[20px]">
          <h4 className="text-h4">Releases</h4>
          <p>Videos that you upload in collaboration with aBit appear here.</p>
        </div>
        <div className="flex relative flex-wrap ">
          {items.map((item, index) => {
            return <div className="relative group" key={index}>
              <div className="w-[145px] relative before:block before:content-[''] before:bg-[#7A7A7A] before:w-[1px] before:absolute before:left-[-8px] before:h-full">
                <p className="text-p font-[700]">{item.value}</p>
                <p className="w-[71px] pt-[7px] text-[#696969] font-[400]">{item.text}</p>
              </div>
            </div>
          })}
        </div>
      </div>
      <div className="mt-[70px] flex flex-wrap gap-[24px]">
        <div className="bg-[#EDEDED] relative rounded-[24px] sm:w-full min-w-[283.64px] h-[312px] flex justify-center items-center">
          <div>
            <FaPlus className="text-[32px] text-[#95959591]" />
          </div>
          <div className="absolute bottom-[34px]">
          <p className="text-[#A0A0A0] w-[200px] text-p text-center abs">You haven’t uploaded any videos with aBit yet. Add now!</p>
          </div>
        </div>
        <div className="sm:w-full min-w-[283.64px]">
          <div className="bg-[url(https://s3-alpha-sig.figma.com/img/87c0/3d4c/1a546c66ea689708d7a03042db7eb340?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ULW4opCyBNR4gglbz5riXHrd9nhVXO2wbmK0BZbMIQBinj1i4IrB2yZuXnAiiDQHc6NDb~Btxti3vgWPw93IgFb3TWODD-M8AmnXQmo9HSB1ht595J4w-ztExu-mKtFIAIjphRslFPSKhXljVLQ4hg2~emFvAzsqBzjgMP810YQVzhR9Hig-vSa7D-IFdCsSjNl4liESfq04FvX8C2NbHmy7ugM4jRALpzFZ7myE3wsuxoAO~65ijEdPeuHe6gHXGTzhvJiH3Af7WTd7EG3urWPXpcoLXFycq8021QzzWW1wSuv-Bjr3a5JgCYbfBuetaybOzJu6YQCLdtycyBJLkA__)] sm:w-full  w-[283.64px] h-[312px] object-cover bg-cover bg-center rounded-[24px] bg-no-repeat">
            <div className=" text-skin-textwhite relative flex flex-col justify-between h-full">
              <h6 className="text-h6 pt-[20px] font-[700] pl-[14px]">The Sound of Silence</h6>
            <div className="bg-[#FFFFFF33] text-[12px] font-bold blur-background absolute text-center flex justify-center gap-[40px] bottom-[15px] w-[246.76px] rounded-[12px] mx-auto py-[10px] px-[20px] left-0 right-0 w">
              <div>
              <p>Shares</p>
              <p>317</p>
              </div>
              <div>
              <p>Shares</p>
              <p>317</p>
              </div>
              <div>
              <p>Shares</p>
              <p>317</p>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ListItems;
