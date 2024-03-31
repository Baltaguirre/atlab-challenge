import { Lusitana, Inter, Cutive_Mono } from "next/font/google";

export const lusitana = Lusitana({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const inter = Inter({ subsets: ["latin"], display: "swap" });

export const cutiveMono = Cutive_Mono({
  subsets: ["latin", "latin-ext"],
  weight: ["400"],
});
