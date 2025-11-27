"use client";
import { usePathname, useRouter } from "next/navigation";

const menu = [
  { label: "Introduction", href: "/", key: "introduction" },
  { label: "About me", href: "/about", key: "about" },
  { label: "Education", href: "/education", key: "education" },
  { label: "Experiences", href: "/experiences", key: "experiences" },
  { label: "Achievements", href: "/achievements", key: "achievements" },
  { label: "Skill & Tools", href: "/skills", key: "skills" },
];

interface Props {
  setIsShow: any;
  isShow: boolean;
}

export default function Sidebar({ isShow, setIsShow }: Props) {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className="flex flex-col gap-1">
      <a
        className="px-2 py-2 w-full flex text-[#00df9a] flex content-center md:hidden border-b-1"
        href="/"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="size-[25] mr-2"
        >
          <path d="M13 5H19V11"></path>
          <path d="M19 5L5 19"></path>
        </svg>
        <h1 className="text-xl md:text-2xl font-bold">warren.quocbui.dev</h1>
      </a>

      {menu.map((item) => {
        const isActive =
          (pathname === "/" && item.href === "/") || pathname === item.href;

        return (
          <a
            key={item.key}
            className="px-2 md:text-xl cursor-pointer mt-2"
            onClick={() => {
              setIsShow(false);
              router.push(item.href);
            }}
          >
            <p
              className={
                isActive
                  ? "py-2 px-4 rounded-lg text-[#fafafa] bg-[#2a2627]"
                  : "py-2 px-4 rounded-lg text-[#fafafa] hover:bg-[#2a2627]"
              }
            >
              {item.label}
            </p>
          </a>
        );
      })}
    </div>
  );
}
