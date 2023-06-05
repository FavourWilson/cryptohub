import { useState } from "react";
import Drawer from "./Drawer";

const QuickAction = () => {
  const [open, setOpen] = useState(!!0);

  const Open = () => {
    setOpen(!open);
  };
  return (
    <>
      <div data-dial-init class="fixed right-6 bottom-6 group z-40">
        <button
          type="button"
          onClick={Open}
          data-dial-toggle="speed-dial-menu-default"
          aria-controls="speed-dial-menu-default"
          aria-expanded="false"
          class="flex items-center justify-center text-white bg-red-700 rounded-full px-5 py-3 hover:bg-red-800  focus:ring-4 focus:ring-red-300 focus:outline-none"
        >
          Quick Actions
        </button>
      </div>
      <Drawer open={open} setOpen={setOpen} />
    </>
  );
};

export default QuickAction;
