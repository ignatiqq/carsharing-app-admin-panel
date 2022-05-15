import pen from "assets/icons/pen.svg";
import List from "assets/icons/List.svg";
import CityIcon from "assets/icons/cityIcon.svg";

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
    }
]

export default sidebarLinks;