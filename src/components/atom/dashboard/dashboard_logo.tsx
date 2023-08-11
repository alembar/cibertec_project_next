/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import logo from "../../../assets/images/logoecosolution.png"
const DashboardLogo = () =>{
    return (
        <div>
            <Link href="/">
                <img src={logo.src} alt="" className="w-56 h-auto"/>
            </Link>
        </div>
    );
}
export {DashboardLogo}