import $ from "jquery";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Ticker = () => {
  const location = useLocation();

  useEffect(() => {
    const el = $(".ticker");
    el.append(`<div class="border-y-2 border-main z-50 items-center flex" style="height:62px; background-color: #FFFFFF; overflow:hidden; z-index:9999; box-sizing: border-box; text-align: right; line-height:14px; block-size:62px; font-size: 12px; font-feature-settings: normal; text-size-adjust: 100%; padding:1px;padding: 0px; margin: 0px; width: 100%;">
   <div style="height:40px; padding:0px; margin:0px; width: 100%;">
   <iframe src="https://widget.coinlib.io/widget?type=horizontal_v2&theme=light&pref_coin_id=1505&invert_hover=no" width="100%" height="40px" scrolling="auto" marginwidth="0" marginheight="0" frameborder="0" border="0" style="border:0;margin:0;padding:0;"></iframe></div>
</div>`);
  }, [location]);
  return (
    <>
      <div className="w-full h-10 ticker mb-6"></div>
    </>
  );
};

export default Ticker;
