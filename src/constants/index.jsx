import {
  CircleHelp,
  Component,
  BookText,
  Box,
  Rocket,
  Building2,
  ShoppingBasket,
  Inbox,
  Home,
  Package,
  FolderKanban,
} from "lucide-react"

export const navbarLinks = [
  {
    title: "",
    links: [
      {
        label: "Dashboard",
        icon: Home,
        path: "/",
      },
      {
        label: "Kanban",
        icon: FolderKanban,
        path: "/",
      },
      {
        label: "Inbox",
        icon: Inbox,
        path: "/",
      },
      {
        label: "E-commerce",
        icon: ShoppingBasket,
        path: "/",
        hasDropdown: true,
        submenu: [
          {
            label: "Products",
            path: "/",
          },
          {
            label: "Billing",
            path: "/",
          },
          {
            label: "Invoice",
            path: "/",
          },
        ],
      },
      {
        label: "Users",
        icon: Building2,
        path: "/",
        hasDropdown: true,
        submenu: [
          {
            label: "User List",
            path: "/",
          },
          {
            label: "Profile",
            path: "/",
          },
          {
            label: "Settings",
            path: "/",
          },
        ],
      },
      {
        label: "Pages",
        icon: Rocket,
        path: "/",
        hasDropdown: true,
        submenu: [
          {
            label: "Pricing",
            path: "/",
          },
          {
            label: "Maintainance",
            path: "/",
          },
          {
            label: "404 not found",
            path: "/",
          },
          {
            label: "500 server error",
            path: "/",
          },
          
        ],
      },
      {
        label: "Authentication",
        icon: Package,
        path: "/",
        hasDropdown: true,
        submenu: [
          {
            label: "Sign in",
            path: "/",
          },
          {
            label: "Sign up",
            path: "/",
          },
          {
            label: "Forgot password",
            path: "/",
          },
          {
            label: "Reset password",
            path: "/",
          },
          {
            label: "Profile lock",
            path: "/",
          },
        ],
      },
      {
        label: "Buy Now",
        icon: Box,
        path: "/",
      },
      {
        label: "Docs",
        icon: BookText,
        path: "/",
      },
      {
        label: "Components",
        icon: Component,
        path: "/",
      },
      {
        label: "Help",
        icon: CircleHelp,
        path: "/",
      },
    ],
  },
  {
    title: "",
    links: [],
  },
  {
    title: "",
    links: [],
  },
  {
    title: "",
    links: [],
  },
]

export const overviewData = [
  {
    name: "Jan",
    total: 1500,
  },
  {
    name: "Feb",
    total: 2000,
  },
  {
    name: "Mar",
    total: 1000,
  },
  {
    name: "Apr",
    total: 5000,
  },
  {
    name: "May",
    total: 2000,
  },
  {
    name: "Jun",
    total: 5900,
  },
  {
    name: "Jul",
    total: 2000,
  },
  {
    name: "Aug",
    total: 5500,
  },
  {
    name: "Sep",
    total: 2000,
  },
  {
    name: "Oct",
    total: 4000,
  },
  {
    name: "Nov",
    total: 1500,
  },
  {
    name: "Dec",
    total: 2500,
  },
]



