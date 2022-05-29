import pen from "assets/icons/pen.svg";
import List from "assets/icons/List.svg";
import CityIcon from "assets/icons/cityIcon.svg";
import PointIcon from "assets/icons/pointIcon.svg";
import RateTypesIcon from "assets/icons/rateTypesIcon.svg";

const sidebarLinks = [
    {
        name: "Карточка автомобиля",
        icon: pen,
        path: "/dashboard/car/create"
    },
    {
        name: "Заказы",
        icon: pen,
        path: "/dashboard/order"
    },
    {
        name: "Список Авто",
        icon: List,
        path: "/dashboard/car"
    },
    {
        name: "Список Городов",
        icon: CityIcon,
        path: "/dashboard/city"
    },
    {
        name: "Список точек",
        icon: PointIcon,
        path: "/dashboard/point"
    },
    {
        name: "Список тарифов",
        icon: RateTypesIcon,
        path: "/dashboard/rateType"
    }
]

export default sidebarLinks;