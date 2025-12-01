export default function HomePage() {
  return (
    <div className="gap-10">
      <h1 className="text-cyan-500 font-bold text-4xl">(Warren) Quoc Bui</h1>
      <h1 className="text-gray-500 mt-2 sm: text-3xl md:text-4xl font-bold">
        Chasing tasks by day, learning issues by night!
      </h1>

      <ul className="mt-6 text-white sm:text-2xl list-disc px-4">
        <li className="mt-2">
          I am Quoc Bui (Warren), developer from Vietnam.
        </li>
        <li className="mt-2">
          I just got{" "}
          <span className="text-cyan-300">
            United States Permanent Resident
          </span>
        </li>
        <li className="mt-2">
          I am a dedicated Software Engineer with 4+ years experiences
          specializing in full-stack application development with mostly in
          <span className="text-cyan-300"> Banking domain</span>.
        </li>
        <li className="mt-2">
          I enjoy developing solutions with teammates using modern technologies
          like NodeJS (Express), Javascript/Typescript, Golang, ReactJS.
        </li>
        <li className="mt-2">
          I am aiming to be talented software developers, not coder by taking
          lessons and practices as much as possible.
        </li>
        <li className="mt-2">
          I love helping people, especially in fixing issues related to
          customers and system. It will bring a lot of experiences that I will
          never not have chances to learn in any courses.
        </li>
      </ul>
    </div>
  );
}
