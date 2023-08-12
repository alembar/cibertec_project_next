import toast, { Toaster } from "react-hot-toast";

interface IToast{
    message: string
    type: string
}

const successToast = (props: any) => toast.success(props);
const errorToast = (props: any) => toast.error(props);
const warningToast = (props: any) => toast(props);

const messageToast = (props:any)=>{
    switch (props.type) {
        case "success":
            toast.success(props.message)
            break;
        case "error":
            toast.error(props.message);
            break;
        case "warning":
            toast(props.message);
            break;
        default:
            toast(props.message);
            break;
    }
}

export { messageToast, Toaster };
