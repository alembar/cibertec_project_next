import Link from "next/link";

const ButtonLink = (props: any) =>{
    return (
        <Link
            href={props.href}
            className="min-h-min p-2 font-bold underline text-RedWine"
        >
            {props.data}
        </Link>
    );
}

export { ButtonLink };