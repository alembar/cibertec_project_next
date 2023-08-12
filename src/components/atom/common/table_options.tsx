import Link from "next/link";
import { FaPencil, FaTrashCan, FaEye } from "react-icons/fa6";
const TableOptions = (props: TableOptionsData) => {
    const values = props.allowed;
    const prevUrl = props.prevUrl;
    const id = props.id;
    return (
        <div className="flex flex-row w-full px-2 justify-center">
            {values.includes("view") ? (
                <div className="w-1/3 flex flex-row justify-center text-DarkBlue">
                    <Link href={`${prevUrl}/${id}/preview`}>
                        <FaEye />
                    </Link>
                </div>
            ) : null}
            {values.includes("edit") ? (
                <div className="w-1/3 flex flex-row justify-center text-DarkGreen">
                    <Link href={`${prevUrl}/${id}/edit`}>
                        <FaPencil />
                    </Link>
                </div>
            ) : null}
            {values.includes("delete") ? (
                <div className="w-1/3 flex flex-row justify-center text-RedWine">
                    <Link href={`${prevUrl}/${id}/delete`}>
                        <FaTrashCan />
                    </Link>
                </div>
            ) : null}
        </div>
    );
};
export { TableOptions };
