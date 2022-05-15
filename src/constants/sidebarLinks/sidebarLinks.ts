import pen from "assets/icons/pen.svg";
import List from "assets/icons/List.svg";
import CityIcon from "assets/icons/cityIcon.svg";
import PointIcon from "assets/icons/pointIcon.svg";

const sidebarLinks = [
    {
        name: "Заказы",
        icon: pen,
        path: "/dashboard/orders"
    },
    {
        name: "Список Авто",
        icon: List,
        path: "/dashboard/cars"
    },
    {
        name: "Список Городов",
        icon: CityIcon,
        path: "/dashboard/cities"
    },
    {
        name: "Список точек",
        icon: PointIcon,
        path: "/dashboard/points"
    }
]

export default sidebarLinks;