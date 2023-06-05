import Card from "../atom/Card";
import { useSelector } from "react-redux";
import * as timeago from "timeago.js";

function Activities() {
  const { notification } = useSelector((state) => state.user);
  return (
    <Card extra={"w-full h-full p-3"}>
      <div className="relative mb-3 flex items-center justify-between pt-1">
        <h4 className="text-xl font-bold text-navy-700 dark:text-white">
          Notifications
        </h4>
      </div>
      <div className="flex flex-col">
        {/* the custom checkbox desing added in src/index.js */}
        {notification.map((x) => (
          <div key={x.uuid} className="mt-3 gap-3">
            <div className="text-base font-medium text-navy-700 dark:text-white flex justify-between">
              <span>{x.message}</span>
              <span>{timeago.format(x.created)}</span>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}

export default Activities;
