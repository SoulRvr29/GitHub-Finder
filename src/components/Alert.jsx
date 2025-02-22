import { useContext } from "react";
import AlertContext from "./context/alert/AlertContext";
import { IoIosAlert } from "react-icons/io";

function Alert() {
  const { alert } = useContext(AlertContext);
  return (
    alert !== null && (
      <div className="flex items-center gap-2 my-2">
        {alert.type === "error" && (
          <IoIosAlert size={20} className="fill-error" />
        )}
        <p className="font-medium">{alert.msg}</p>
      </div>
    )
  );
}

export default Alert;
