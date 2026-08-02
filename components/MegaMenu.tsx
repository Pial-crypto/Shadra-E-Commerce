"use client";
import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "@/components/ui/navigation-menu";

export const MegaMenu = () => {
  return (
    <NavigationMenu>

  <NavigationMenuList>

    <NavigationMenuItem>

      <NavigationMenuTrigger className="bg-yellow-500 hover:bg-yellow-600 text-white">

        ☰ All Categories

      </NavigationMenuTrigger>

      <NavigationMenuContent>

        <div className="w-[320px] p-3">

          <Link
            href="/category/power-bank"
            className="block rounded-lg p-3 hover:bg-muted"
          >
            🔋 Power Banks
          </Link>

          <Link
            href="/category/chargers"
            className="block rounded-lg p-3 hover:bg-muted"
          >
            🔌 Chargers
          </Link>

          <Link
            href="/category/headphones"
            className="block rounded-lg p-3 hover:bg-muted"
          >
            🎧 Headphones
          </Link>

          <Link
            href="/category/earbuds"
            className="block rounded-lg p-3 hover:bg-muted"
          >
            🎵 Earbuds
          </Link>

          <Link
            href="/category/lights"
            className="block rounded-lg p-3 hover:bg-muted"
          >
            💡 Lights
          </Link>

          <Link
            href="/category/accessories"
            className="block rounded-lg p-3 hover:bg-muted"
          >
            🎁 Accessories
          </Link>

        </div>

      </NavigationMenuContent>

    </NavigationMenuItem>

  </NavigationMenuList>

</NavigationMenu>

)
}