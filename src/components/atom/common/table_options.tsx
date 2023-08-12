import Link from "next/link";
import { FaPencil, FaTrashCan, FaRegEye } from "react-icons/fa6"
const TableOptions = (props: TableOptionsData) => {
    const  values = props.allowed
    const prevUrl = props.prevUrl;
    const id = props.id
    return (
        <div className="flex flex-row w-full px-2 justify-center">
            {values.includes("view") ? (
                <div className="w-1/3 flex flex-row justify-center text-DarkBlue">
                    <Link href={`${props.prevUrl}/${id}/preview`}>
                        <FaRegEye />
                    </Link>
                </div>
            ) : null}
            {values.includes("edit") ? (
                <div className="w-1/3 flex flex-row justify-center text-DarkGreen">
                    <Link href={`${props.prevUrl}/${id}/edit`}>
                        <FaPencil />
                    </Link>
                </div>
            ) : null}
            {values.includes("delete") ? (
                <div className="w-1/3 flex flex-row justify-center text-RedWine">
                    <Link href={`${props.prevUrl}/${id}/delete`}>
                        <FaTrashCan />
                    </Link>
                </div>
            ) : null}
        </div>
    );
};
export {TableOptions}