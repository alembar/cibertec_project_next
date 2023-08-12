import Link from "next/link";

const MenuItem = (props: any) => {
    return (
        <div className="py-2 text-White font-medium hover:underline">
            <Link
                href={`/${props.href}`}
                className="flex flex-row justify-center items-center"
            >
                {props.icon}
                <p className="pl-3">{props.data}</p>
            </Link>
        </div>
    );
};

export {MenuItem}
