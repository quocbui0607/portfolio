"use client";

import GithubLogo from "@/assets/img/githubIcon.svg";
import LinkedInLogo from "@/assets/img/linkedin.svg";
import MailLogo from "@/assets/img/email.svg";
import CVLogo from "@/assets/img/resume.svg";

const ContactLinks = () => {
  return (
    <ul className="w-full flex justify-end content-center">
      <li className="mr-4 size-[25] flex flex-wrap justify-center items-center">
        <a
          target="_blank"
          href="https://github.com/quocbui0607/quocbui0607/blob/main/Quoc%20Bui%20CV.pdf"
          className="text-2xl w-[25]"
        >
          <img
            src={CVLogo.src}
            alt="Resume Logo"
            className="hover:bg-[#00df9a] rounded-full"
          />
        </a>
      </li>

      <li className="mr-4 size-[25] flex flex-wrap justify-center items-center">
        <a href="mailto:bmquoc0607@gmail.com" className="fill-current w-[25]">
          <img
            src={MailLogo.src}
            alt="Email Logo"
            className="hover:bg-[#00df9a] rounded-full"
          />
        </a>
      </li>

      <li className="mr-4 size-[25] flex flex-wrap justify-center items-center">
        <a
          target="_blank"
          href="https://www.linkedin.com/in/quoc-bui-368515163/"
          className="w-[25]"
        >
          <img
            className="hover:bg-[#00df9a]"
            src={LinkedInLogo.src}
            alt="Linkedin Logo"
          />
        </a>
      </li>

      <li className="mr-4 size-[25] flex flex-wrap justify-center items-center">
        <a
          target="_blank"
          href="https://github.com/quocbui0607"
          className="w-[25]"
        >
          <img
            src={GithubLogo.src}
            alt="Github Logo"
            className="hover:bg-[#00df9a] rounded-full "
          />
        </a>
      </li>
    </ul>
  );
};

interface Props {
  setIsShow: any;
  isShow: boolean;
}

export default function NavBar({ isShow, setIsShow }: Props) {
  return (
    <div className="w-full px-[1.5rem] h-[60] flex items-center bg-violet-100 grid grid-cols-2 dark:bg-violet-300">
      <div className="flex flex-wrap items-center relative">
        <a
          className="w-full flex text-[#00df9a] flex content-center hidden md:flex"
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
            className="size-[25] mr-4"
          >
            <path d="M13 5H19V11"></path>
            <path d="M19 5L5 19"></path>
          </svg>
          <h1 className="text-2xl font-bold">warren.quocbui.dev</h1>
        </a>

        <button
          className="p-2 block md:hidden"
          onClick={() => setIsShow(!isShow)}
        >
          {isShow ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          )}
        </button>
      </div>

      <div className="flex justify-end">
        <div className="w-1/3 block">
          <ContactLinks></ContactLinks>
        </div>
      </div>
    </div>
  );
}
