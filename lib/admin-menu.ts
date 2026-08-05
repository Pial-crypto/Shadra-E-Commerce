import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  Settings,
  Globe,
} from "lucide-react";

export const adminMenus = [
  {
    name: "Dashboard",
    href: "/admin/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Products",
    href: "/admin/products",
    icon: Package,
  },
  {
    name: "Orders",
    href: "/admin/orders",
    icon: ShoppingCart,
  },
//   {
//     name: "Website",
//     href: "/admin/website",
//     icon: Globe,
//   },
  {
    name: "Settings",
    href: "/admin/settings",
    icon: Settings,
  },
];