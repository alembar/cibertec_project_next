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
const ButtonComp = (props: any) => {
    return (
        <Link href={props.href} className={`${props.className} border min-h-min p-2 font-bold`}>
            {props.data}
        </Link>
    );
};
const CustomButton = (props: any) => {
    return (
        <button
            onClick={props.onClick}
            className={`${props.className} min-h-min p-2 font-bold`}
        >
            {props.data}
        </button>
    );
};

const SubmitButton = (props: any) =>{
    return(
        <button className="mt-3 font-bold text-White bg-DarkBlue py-2 w-full" type='submit'>{props.children}</button>
    )
}

export { ButtonLink, ButtonComp, SubmitButton, CustomButton };