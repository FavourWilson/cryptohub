import toast from "react-hot-toast";
import {
  CheckCircleS,
  ExclamationTriangle,
  InformationCircle,
  XCircle,
} from "../atom/Icons";
import Text from "../atom/Text";

const Alert = ({ icon = "info", title, text, interval }) => {
    toast.custom((t) => (
      <div
        className={`${
          t.visible ? "animate-enter" : "animate-leave"
        } flex justify-center shadow-lg`}
      >
        <div
          style={{ zIndex: 9999 }}
          className="absolute flex w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-2xl z-50"
        >
          <div
            className={`flex items-center justify-center w-12 text-white ${
              icon === "success"
                ? "bg-emerald-500"
                : icon === "danger"
                ? "bg-red-500"
                : icon === "warning"
                ? "bg-yellow-400"
                : icon === "info"
                ? "bg-blue-500"
                : ""
            }`}
          >
            {icon === "success" ? (
              <CheckCircleS />
            ) : icon === "danger" ? (
              <XCircle />
            ) : icon === "warning" ? (
              <ExclamationTriangle />
            ) : icon === "info" ? (
              <InformationCircle />
            ) : (
              ""
            )}
          </div>

          <div className="px-4 py-2 -mx-3">
            <div className="mx-3">
              <span
                className={`font-semibold ${
                  icon === "success"
                    ? "text-emerald-500"
                    : icon === "danger"
                    ? "text-red-500"
                    : icon === "warning"
                    ? "text-yellow-400"
                    : icon === "info"
                    ? "text-blue-500"
                    : ""
                }`}
              >
                {title}
              </span>
              <Text type="p" className="text-sm text-gray-600">
                {text} gdgdgdgd
              </Text>
            </div>
          </div>
        </div>
      </div>
    ), {duration: interval, position: 'top-right'});
};

export default Alert;
