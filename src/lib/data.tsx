import {
  Link,
  ChartNoAxesCombined,
  QrCode,
  Library,
  Home,
  LayoutDashboard,
} from "lucide-react";

import { Feature } from "@/types";

export const snipFeatures: Feature[] = [
  {
    icon: <Link />,
    title: "Customize your links",
    content:
      "With Snip, you can create custom shortened URLs that not only save space but also enhance your branding.",
  },
  {
    icon: <ChartNoAxesCombined />,
    title: "Track your performance",
    content:
      "Easily track link performance to understand engagement and optimize your strategies.",
  },
  {
    icon: <QrCode />,
    title: "Generate QR codes",
    content:
      "Generate QR codes for your links to share with your audience and boost engagement.",
  },
  {
    icon: <Library />,
    title: "Manage your creations",
    content:
      "With Snip, you can manage your links and QR codes, all in one place. You can create, edit, and delete links as well as generate QR codes for your links.",
  },
];

export const links = [
  {
    title: "Home",
    href: "/",
    Icon: Home,
  },
  {
    title: "Dashboard",
    href: "/private",
    Icon: LayoutDashboard,
  },
  {
    title: "Custom links",
    href: "/private/urls",
    Icon: Link,
  },
  {
    title: "QR codes",
    href: "/private/qrs",
    Icon: QrCode,
  },
];
