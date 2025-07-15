import React from "react";
const HomeStats = () => {
  return (
    <>
      <div className="text-center mt-10" id="howitworks">
        <h2 className="text-gray-800 font-extrabold text-[30px] md:text-[40px]">
          HOW IT WORKS
        </h2>
      </div>
      <div className="p-14 grid md:grid-cols-2 gap-5">
        <div className="rounded-lg border-4 border-gray-100 bg-white p-4 shadow-sm transition hover:shadow-lg sm:p-6">
          <div className="text-lg my-4 font-semibold">
            <label className="bg-green-600 pl-3 pr-3 p-2 rounded-full text-white">
              Step - 1
            </label>
          </div>
          <div className="md:p-1 lg:p-1 sm:p-0">
            <a href="#">
              <h3 className="text-lg font-semibold text-green-700">
                Sign Up & Create Your Profile
              </h3>
            </a>

            <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 md:text-justify sm:text-center">
            Get started with MOCK-AI in just a few clicks! Sign up and create your profile by sharing details like your industry, role, and career goals. This allows us to personalize your mock interview experience, ensuring tailored questions and feedback that align with your career aspirations.
            </p>

            <a
              href="#"
              className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-green-600"
            >
              Find out more
              <span
                aria-hidden="true"
                className="block transition-all group-hover:ms-0.5 rtl:rotate-180"
              >
                &rarr;
              </span>
            </a>
          </div>
        </div>
        <div className="rounded-lg border-4 border-gray-100 bg-white p-4 shadow-sm transition hover:shadow-lg sm:p-6">
          <div className="text-lg my-4 font-semibold">
            <label className="bg-green-600 pl-3 pr-3 p-2 rounded-full text-white">
              Step - 2
            </label>
          </div>
          <div className="md:p-1 lg:p-1 sm:p-0">
            <a href="#">
              <h3 className="text-lg text-green-700 font-semibold">
                Choose Your Interview Type
              </h3>
            </a>

            <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 text-justify">
            Choose from a diverse range of interview formats, including technical, behavioral, and case-based interviews. Whether you're aiming for a software engineering position or a marketing role, MOCK-AI crafts personalized mock interview scenarios designed to mirror real-world challenges and enhance your preparation.
            </p>

            <a
              href="#"
              className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-green-600"
            >
              Find out more
              <span
                aria-hidden="true"
                className="block transition-all group-hover:ms-0.5 rtl:rotate-180"
              >
                &rarr;
              </span>
            </a>
          </div>
        </div>
        <div className="rounded-lg border-4 border-gray-100 bg-white p-4 shadow-sm transition hover:shadow-lg sm:p-6">
          <div className="text-lg my-4 font-semibold">
            <label className="bg-green-600 pl-3 pr-3 p-2 rounded-full text-white">
              Step - 3
            </label>
          </div>
          <div className="md:p-1 lg:p-1 sm:p-0">
            <a href="#">
              <h3 className="mt-0.5 text-lg font-semibold text-green-700">
                AI-Driven Mock Interview
              </h3>
            </a>

            <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 text-justify">
            Immerse yourself in a dynamic, real-time mock interview powered by advanced AI. Respond to role-specific questions while the AI adapts to your answers, creating an authentic interview experience. Practice unlimited times to sharpen your skills, boost confidence, and perfect your responses.
            </p>

            <a
              href="#"
              className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-green-600"
            >
              Find out more
              <span
                aria-hidden="true"
                className="block transition-all group-hover:ms-0.5 rtl:rotate-180"
              >
                &rarr;
              </span>
            </a>
          </div>
        </div>
        <div className="rounded-lg border-4 border-gray-100 bg-white p-4 shadow-sm transition hover:shadow-lg sm:p-6">
          <div className="text-lg my-4 font-semibold">
            <label className="bg-green-600 pl-3 pr-3 p-2 rounded-full text-white">
              Step - 4
            </label>
          </div>
          <div className="md:p-1 lg:p-1 sm:p-0">
            <a href="#">
              <h3 className="mt-0.5 text-lg font-semibold text-green-700">
                Get Detailed Feedback
              </h3>
            </a>

            <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 text-justify">
            Get instant, AI-driven feedback after your mock interview, highlighting your strengths and areas for growth. MOCK-AI offers detailed insights, personalized suggestions, and expert tips to refine your responses. Leverage this feedback to improve continuously, build confidence, and maximize your chances of success in real interviews.
            </p>

            <a
              href="#"
              className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-green-600"
            >
              Find out more
              <span
                aria-hidden="true"
                className="block transition-all group-hover:ms-0.5 rtl:rotate-180"
              >
                &rarr;
              </span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeStats;
