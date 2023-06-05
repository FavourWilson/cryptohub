import { Images } from "../../assets/images";
import Card from "../atom/Card";
import avatar from "../../assets/images/avatars/avatar4.png";
import Clipboard from "react-clipboard.js";
import { useState } from "react";

const Banner = ({ data, link }) => {
  const [txt, setTxt] = useState("copy")
  const [dLink] = useState(`${link.url}/auth/register/${link.code}`)

  const onSuccess = () => {
    setTxt("copied");
    setTimeout(() => {
      setTxt("copy");
    }, 2000);
  };

  return (
    <Card extra={"items-center w-full h-full pt-2 pb-[16px] px-[16px] bg-cover"}>
      {/* Background and profile */}
      <div
        className="relative mt-1 flex h-16 w-full justify-center rounded-xl bg-cover"
        style={{ backgroundImage: `url(${Images.banner})` }}
      >
        <div className="absolute -bottom-12 flex h-[87px] w-[87px] items-center justify-center rounded-full border-[4px] border-white bg-pink-400 dark:!border-navy-700">
          <img className="h-full w-full rounded-full" src={avatar} alt="" />
        </div>
      </div>

      {/* Name and position */}
      <div className="mt-16 flex flex-col items-center">
        <h4 className="text-xl font-bold text-navy-700 dark:text-white">
          {data.first_name} {data.last_name}
        </h4>
        <p className="text-base font-normal text-gray-700">{data.email}</p>
        <div className="w-full">
          <p className="font-base text-sm text-center">Refferal link={">"} <br /> <span className={`${txt=='copy'?'text-gray-600': 'text-gray-800'} Transform`}>{dLink}</span></p>
        </div>
        <div className="w-full pt-3">
          <Clipboard
            data-clipboard-text={dLink}
            onSuccess={onSuccess}
            className="uppercase col-span-3 inline-flex items-center justify-center w-full px-4 py-1.5 text-base font-semibold text-white transition-all duration-200 bg-minor border border-transparent rounded-md focus:outline-none hover:bg-main focus:bg-main"
          >
            {txt}
          </Clipboard>
        </div>
      </div>


    </Card>
  );
}

export default Banner;