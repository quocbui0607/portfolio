export default function Footer() {
  return (
    <div className="container flex flex-col items-center justify-center py-4 space-y-2 text-[#9f9fa9]">
      <div className="max-w-3xl text-xs leading-relaxed text-center sm:text-sm text-balance text-[#9f9fa9]">
        <span className="block sm:inline">©2025</span>
        <span className="hidden sm:inline"> · </span>
        <span className="block sm:inline">
          Built with <span className="font-medium text-white">Next.js</span>,{" "}
          <span className="font-medium text-white">React</span> and{" "}
          <span className="font-medium text-white">Tailwind CSS</span>
        </span>
        <span className="hidden sm:inline"> · </span>
        <span className="block sm:inline">
          Coded in <span className="font-medium text-white">VisualCode</span>
        </span>
      </div>
      <div className="text-xs text-center sm:text-sm text-[#9f9fa9]">
        Developed by{" "}
        <a
          target="_blank"
          rel="noreferrer"
          className="font-medium transition-colors text-[#00DF9A] hover:text-[#00DF9A]/80"
          href="https://github.com/quocbui0607"
        >
          Warren Quoc Bui
        </a>
      </div>
    </div>
  );
}
