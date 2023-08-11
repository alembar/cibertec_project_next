import { MenuItem } from "@/components/atom/dashboard/menu";
import { FaGauge, FaUser } from "react-icons/fa6";

const MenuOptions = () => {
    return (
        <div className="w-4/5 pt-5 flex flex-col items-center">
            <MenuItem icon={<FaGauge />} data="Dashboard" href="/" />
            <MenuItem
                icon={<FaGauge />}
                data="Cotizaciones"
                href="cotizacion"
            />
            <MenuItem icon={<FaUser />} data="Clientes" href="cliente" />
        </div>
    );
};

export { MenuOptions };
