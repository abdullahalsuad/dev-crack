import Link from "next/link";
import GitStarButton from "../button/GitStarButton";
import GuideBtn from "../button/GuideBtn";

const CTASection = () => {
  return (
    <section className="py-20 font-inter bg-[#000000]">
      <div className="max-w-7xl mx-auto bg-gray-900 rounded-xl p-8 sm:p-12 shadow-lg border border-gray-800 text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 leading-tight">
          Want to{" "}
          <span className="bg-gradient-to-r from-green-500 to-teal-400 bg-clip-text text-transparent">
            Contribute?
          </span>
        </h2>
        <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto mb-8">
          Join our community of developers and help make DevCrack even better.
          Whether you're fixing bugs, adding features, or improving
          documentation, every contribution matters.
        </p>

        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Link href="https://github.com/abdullahalsuad/dev-crack/blob/main/CONTRIBUTING.md">
            <GuideBtn />
          </Link>

          <Link
            href="https://github.com/abdullahalsuad/dev-crack"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitStarButton />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
