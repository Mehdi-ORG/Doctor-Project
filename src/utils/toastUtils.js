import { toast } from "react-toastify";

export const showToast = {
  success: (message) => {
    toast.success(message, {
      position: "bottom-right",
      autoClose: 2000,
      icon: false,
      closeOnClick: true,
      theme: "colored",
      closeButton: false,
    });
  },
  error: (message) => {
    toast.warn(message, {
      position: "bottom-right",
      autoClose: 2000,
      icon: false,
      closeOnClick: true,
      theme: "colored",
      closeButton: false,
    });
  },
};
