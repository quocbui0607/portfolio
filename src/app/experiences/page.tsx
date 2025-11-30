const experiences = [
  {
    company: "Australia and New Zealand Banking (AnZ)",
    title: "Backend Developer",
    workingPeriod: "Dec 2024 - Sep 2025",
    teamSize: "10",
    workDescription:
      "Contribute to build services, deployed to CloudRun. Help to deliver features to support automation internal process. \n" +
      "Feature supported: KYC/ReKYC, ExtraCare, PubsubAPI, AccountClosure",
    workResponsibilities: [
      "Contribute new API to central API repository for new services to be able to communicate with gRPC protocol",
      "Fix vulnerabilities from Blackduck scan",
      "Apply terraform for creating new infrastructures in GCP",
      "Support 2-members, and others teams to integrate between Salesforce and the data product team",
      "Refactored code and developed utility packages/modules to enhance engineering best practices",
      "Discuss and built microservices to support the Join and Broker streams",
      "Supported code reviews, and ensuring code quality and best practices",
      "Fostered collaboration across multiple teams to improve system integration and efficiency",
      "Use Golang for building Cloudrun, deploy to GCP for handling business logic for services",
      "Support Leader to do production checklist for release feature",
      "Collaborated with Solution Design, BA, PO to analyze requirements",
    ],
    technologies: [
      "Golang",
      "Terraform",
      "GitHub Action",
      "GCP (CloudRun, KMS)",
      "Splunk",
    ],
  },
  {
    company: "National Australia Bank - HomeOwnership Domain",
    title: "Fullstack Developer",
    workingPeriod: "May 2022 - Dec 2024",
    teamSize: "12",
    workDescription:
      "Contribute to build miniapps/services for customers/bankers/brokers. Features supported: Borrowing power calculator, Repayment calculator, Scenario calculator, Fulfillment miniapp, Notification service",
    workResponsibilities: [
      "As a Feature Champion, I worked with BA, PO and leader to clarify the requirements, prepare documents for teammates, estimates the capacity needed for this feature.",
      "Contribute with teammates to build UI for NAB's customers with React, Jest and Enzyme unit-test framework.",
      "Support to test REST APIs and contribute new APIs built form Nodejs with self-testing by Postman.",
      "Perform router by header for A/B testing",
      "Fix issues with Dockerfile and securities, vulnerabilities by Snyk, Checkmarx scan",
      "Support Leader to do production checklist for release feature",
      "Support team members to fix bugs/ issues",
      "Supporting to onboard new miniapps, services to NAB's systems",
    ],
    technologies: [
      "Reactjs",
      "NodeJs",
      "GitHub",
      "Java",
      "HarnessCI",
      "Docker",
      "AWS",
      "LaunchDarkly",
      "Snyk",
    ],
  },
  {
    company: "FPT Software",
    title: "Frontend Developer",
    workingPeriod: "Jan 2021 - Mar 2022",
    teamSize: "6",
    workDescription:
      "Contribute to build a website for Petroleum managers to manage and approve documents about wells properties.",
    workResponsibilities: [
      "Support to build a website with Angular for Petroleum engineer to manage and create wells, and for managers to track, approve documents.",
      "Fix bugs frontend and support another members",
      "Clarify test cases with Testers",
      "Clarify requirements with BA, PO",
    ],
    technologies: ["Angular", "NodeJS", "Github"],
  },
  {
    company: "TADA Education",
    title: "Frontend Developer",
    workingPeriod: "Mar 2019 - Dec 2020",
    teamSize: "10",
    workDescription:
      "Contribute to build a website for students in highschools and universities to study and ask questions.",
    workResponsibilities: [
      "Contribute to build a website with Angular for handle logic for students to choose classes, ask questions. For \
tutors, to create streaming classes with Zoom",
      "Fix bugs frontend",
      "Clarify design with UI/UX Designer",
      "Clarify test cases with Testers",
      "Clarify requirements with BA, PO",
    ],
    technologies: ["Angular", "Bitbucket"],
  },
];

export default function ExperiencePage() {
  return (
    <div className="gap-10">
      <section className="mb-10">
        <h1 className="text-cyan-500 font-bold sm:text-3xl md:text-4xl">
          Experiences
        </h1>
        <h1 className="text-gray-500 mt-2 sm: text-3xl md:text-4xl font-bold">
          Practice makes perfect!
        </h1>

        <p className="mt-6 text-white sm:text-2xl">
          Throughout my journey as a developer, I have had the opportunity to
          work with some of great companies, which give me a lot of practical
          issues to learn from.
        </p>
      </section>

      <ol className="relative border-s border-gray-700">
        {experiences.map((item) => {
          return (
            <li key={item.company} className="mb-6 ms-6">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 bg-blue-900 dark:ring-gray-900">
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
                {item.company} - {item.title}
              </h3>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-500">
                {item.workingPeriod}
              </time>
              <p className="mb-1 text-base font-normal text-gray-400">
                <span className="italic text-cyan-100">Team size:</span>{" "}
                {item.teamSize}
              </p>
              <p className="mb-1 text-base font-normal text-gray-400">
                <span className="italic text-cyan-100">Description:</span>{" "}
                {item.workDescription}
              </p>
              <div className="mb-1 text-base font-normal text-gray-400">
                <span className="italic text-cyan-100">Responsibilities:</span>
                <ol className="list-disc px-4">
                  {item.workResponsibilities.map((responsibility) => {
                    return <li key={responsibility}>{responsibility}</li>;
                  })}
                </ol>
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
