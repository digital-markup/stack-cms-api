import { Blocks, CalendarRange, ChartColumnIcon, CreditCard, Dices, File, HandCoins, Headset, Layers, LayoutDashboard, Package, Receipt, Settings, Table, Truck } from "lucide-react";

/**
 * @title Ecommerce routes
 * @description Theses routes are for the ecom dashboard
 */
export const ecomRoutes = [
    {
        id: crypto.randomUUID(),
        group: "overview",
        items: [{
            title: "Dashboard",
            url: "/dashboard/home",
            icon: LayoutDashboard,
        },
        {
            title: "Analytics",
            url: "#",
            icon: ChartColumnIcon,
        },
        ],
    }, {
        id: crypto.randomUUID(),
        group: "Content management",
        items: [{
            title: "Posts",
            url: "#",
            icon: File,
        },
        {
            title: "Products",
            url: "/dashboard/products",
            icon: Package,
        },
        {
            title: "Categories",
            url: "/dashboard/category",
            icon: Dices,
        },
        {
            title: "Types",
            url: "/dashboard/category-types",
            icon: Blocks,
        },
        {
            title: "Custom",
            url: "/dashboard/custom",
            icon: Table,
        },
        ],
    }, {
        id: crypto.randomUUID(),
        group: "Order & sales",
        items: [{
            title: "Orders",
            url: "#",
            icon: CalendarRange,
        },
        {
            title: "Sales",
            url: "#",
            icon: HandCoins,
        },
        {
            title: "Payments",
            url: "#",
            icon: CreditCard,
        },
        {
            title: "Inventory",
            url: "#",
            icon: Layers,
        },
        {
            title: "Delivery",
            url: "#",
            icon: Truck,
        },
        ],
    }, {
        id: crypto.randomUUID(),
        group: "Application",
        items: [{
            title: "Settings",
            url: "#",
            icon: Settings,
        },
        {
            title: "Billing",
            url: "#",
            icon: Receipt,
        },
        {
            title: "Support",
            url: "#",
            icon: Headset,
        },
        ]
    }

];