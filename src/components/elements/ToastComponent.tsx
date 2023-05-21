/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { XMarkIcon } from "@heroicons/react/24/outline";
import { ToastContainer } from "react-toastify";
import Image from "next/image";
import success from "../../../public/static/icons/success.svg";
import error from "../../../public/static/icons/error.svg";

function ToastCloseButton({closeToast}: {closeToast?: () => void}){
  return(
  <div>
    <button onClick={closeToast} className="outline-none rounded-md focus:outline-pallete-primary focus:outline-2">
      <XMarkIcon className="w-5 h-5 stroke-white  hover:stroke-red-500" />
    </button>
  </div>
  )
}

export default function ToastComponent() {
  return (
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        closeOnClick={false}
        draggable={true}
        pauseOnHover={true}
        closeButton={<ToastCloseButton />}
        toastStyle={{ backgroundColor: "#000B1C" }}
        progressStyle={{ backgroundColor: "#01E5FB" }}
        icon={({ type }) => (type === "success" ? <Image width={50} height={50} src={success} alt="Sucesso"/> : <Image width={50} height={50} src={error} alt="Erro"/>)}
      />
  );
}