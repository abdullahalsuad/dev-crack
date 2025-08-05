import Link from "next/link";
import Button from "../button/Button";

const JoinCommunity = () => {
  return (
    <section className="py-20  bg-[#000000] text-gray-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-15 text-center shadow-lg backdrop-blur-md">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
            🚀 Join Our{" "}
            <span className="bg-gradient-to-r from-green-500 to-teal-400 bg-clip-text text-transparent">
              Developer Community
            </span>
          </h2>
          <p className="text-gray-400 my-10 mb-8 text-base sm:text-lg leading-relaxed">
            Be part of a growing tech community where we build, share, and grow
            together. <br />
            Whether you are fixing bugs, adding features, or improving docs —
            your contribution drives us forward.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="https://discord.gg/hECbGhyY5b" target="_blank">
              <Button />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinCommunity;
