import CybersoftFE from "@/assets/img/Cybersoft-FE.png";
import CybersoftNodeJS from "@/assets/img/Cybersoft-Nodejs.png";
import AWS from "@/assets/img/AWS.png";
import CKAD from "@/assets/img/CKAD.png";

export default function AchievementPage() {
  return (
    <div className="gap-10">
      <section className="mb-10">
        <h1 className="text-cyan-500 font-bold sm:text-3xl md:text-4xl">
          Achievements
        </h1>
        <h1 className="text-gray-500 mt-2 sm: text-3xl md:text-4xl font-bold">
          Where there is a will, there is a way!
        </h1>

        <p className="mt-6 text-white sm:text-2xl">
          During the journey, I never want to stop learning. Keep learning and
          keep growing, like Steve Jobs has said:
        </p>
        <p className="mt-6 sm:text-2xl text-cyan-200 italic text-center">
          "Stay hunger, stay foolish."
        </p>
      </section>

      <div className="lg:flex lg:grid lg:grid-cols-4 flex-cols justify-center justify-items-center">
        <div className="w-[160] block rounded-lg border-width-1 p-4 bg-gray-600 hover:bg-gray-800 mt-2">
          <img
            src={CybersoftFE.src}
            className="w-full h-[160px] rounded-xl"
          ></img>
          <p className="pt-4 text-center text-cyan-300">FRONTEND</p>
          <p className="text-center text-cyan-300">(7 months)</p>
        </div>

        <div className="w-[160]  block rounded-lg border-width-1 p-4 bg-gray-600 hover:bg-gray-800 mt-2">
          <img
            src={CybersoftNodeJS.src}
            className="w-full h-[160px] rounded-xl"
          ></img>
          <p className="pt-4 text-center text-cyan-300">NodeJS</p>
          <p className="text-center text-cyan-300">(2 months)</p>
        </div>

        <a
          target="_blank"
          href="https://github.com/quocbui0607/quocbui0607/blob/main/AWS%20Certified%20Cloud%20Practitioner%20certificate.pdf"
          className="w-[160] block rounded-lg border-width-1 p-4 bg-gray-600 hover:bg-gray-800 mt-2"
        >
          <img src={AWS.src} className="rounded-xl"></img>

          <p className="p-4 text-center text-cyan-300 underline decoration-solid">
            AWS Certified Cloud Practitioner
          </p>
        </a>

        <a
          target="_blank"
          href="https://github.com/quocbui0607/quocbui0607/blob/main/CKAD%20certificate.pdf"
          className="w-[160] block rounded-lg border-width-1 p-4 bg-gray-600 hover:bg-gray-800 mt-2"
        >
          <img src={CKAD.src} className="rounded-xl"></img>
          <p className="p-4 text-center text-cyan-300 underline decoration-solid">
            Certified Kubernetes Application Developer
          </p>
        </a>
      </div>
    </div>
  );
}
