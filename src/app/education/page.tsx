export default function EducationPage() {
  return (
    <div className="gap-10 relative">
      <section className="mb-10 relative">
        <h1 className="text-cyan-500 font-bold sm:text-3xl md:text-4xl">
          Education
        </h1>
        <h1 className="text-gray-500 mt-2 sm: text-3xl md:text-4xl font-bold">
          On the way to success, there is no trace of lazy men!
        </h1>

        <p className="mt-6 text-white sm:text-2xl">
          Education has always been the cornerstone of my journey into the tech
          world. After get Biotechnology Bachelor, I pursued learning in
          Courses/Training on Udemy platform and Cybersoft Academy, has provided
          me a strong foundation in computer science and software development.
        </p>

        <p className="mt-6 text-white sm:text-2xl">
          I am planning to take second bachelor degree in Computer Science in
          United States.
        </p>
      </section>

      <ol className="relative border-s border-gray-700">
        <li className="mb-10 ms-6">
          <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 bg-blue-900">
            <svg
              className="w-2.5 h-2.5 text-blue-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"></path>
            </svg>
          </span>
          <h3 className="flex items-center mb-1 text-lg font-semibold text-white">
            Fullstack Bootcamp 10 - Cybersoft Academy
          </h3>
          <time className="block mb-2 text-sm font-normal leading-none text-gray-500">
            March 2021 - December 2021
          </time>
          <p className="mb-4 text-base font-normal text-gray-400">
            Completed Frontend developer courses (score: 3.7) and NodeJS
            developer (score: 3.0)
          </p>
        </li>
        <li className="mb-10 ms-6">
          <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-gray-900 bg-blue-900">
            <svg
              className="w-2.5 h-2.5 text-blue-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"></path>
            </svg>
          </span>
          <h3 className="flex items-center mb-1 text-lg font-semibold text-white">
            Data Sciences Course - IT Center of University of Sciences
          </h3>
          <time className="block mb-2 text-sm font-normal leading-none text-gray-500">
            June 2019 - Jun 2020
          </time>
          <p className="mb-4 text-base font-normal text-gray-400">
            Completed the Data Sciences courses
          </p>
        </li>
        <li className="mb-10 ms-6">
          <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 bg-blue-900">
            <svg
              className="w-2.5 h-2.5 text-blue-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"></path>
            </svg>
          </span>
          <h3 className="flex items-center mb-1 text-lg font-semibold text-white">
            Bachelor of Biotechnology - University of Sciences
          </h3>
          <time className="block mb-2 text-sm font-normal leading-none text-gray-500">
            October 2014 - August 2018
          </time>
          <p className="mb-4 text-base font-normal text-gray-400">
            GPA: 2.7 - Internship in IVF Laboratory at Hung Vuong Hospital
          </p>
        </li>
      </ol>
    </div>
  );
}
