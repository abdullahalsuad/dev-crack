"use client";

import React from "react";
import Swal from "sweetalert2";

//  blog
const blogs = [
  {
    title: "From Chaos to Clarity: Why Dev Crack Exists",
    image:
      "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?auto=format&fit=crop&w=800&q=80",
    summary:
      "Discover how Dev Crack simplifies the complex process of interview preparation and the story behind its creation.",
    slug: "why-dev-crack-exists",
  },
  {
    title: "Ace Your Interview in 7 Days: The Dev Crack Way",
    image:
      "https://images.unsplash.com/photo-1556155092-490a1ba16284?auto=format&fit=crop&w=800&q=80",
    summary:
      "Learn a detailed daily strategy and routine to prepare for your interview in just 7 days using Dev Crack.",
    slug: "7-days-interview-plan",
  },
  {
    title: "Top 10 JavaScript Interview Questions (With Expert Answers)",
    image:
      "https://images.unsplash.com/photo-1517433456452-f9633a875f6f?auto=format&fit=crop&w=800&q=80",
    summary:
      "An analysis of the most frequently asked JavaScript questions along with accurate answers for both interviewees and interviewers.",
    slug: "top-10-js-questions",
  },
  {
    title: "Interviewers’ Toolkit: Save Hours with Dev Crack",
    image:
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80",
    summary:
      "How Dev Crack can help interviewers save time—from question set creation to grilling candidates effectively.",
    slug: "interviewers-toolkit",
  },
  {
    title: "Your First Open Source PR: Contribute to Dev Crack",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
    summary:
      "A beginner’s guide to starting open source contributions with Dev Crack—including the PR process, guidelines, and motivation.",
    slug: "contribute-to-dev-crack",
  },
  {
    title: "The Ultimate Tech Interview Roadmap (Frontend, Backend, Fullstack)",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
    summary:
      "A complete roadmap for frontend, backend, and fullstack interviews, along with practice content from Dev Crack.",
    slug: "tech-interview-roadmap",
  },
];

export default function page() {
  // read more button interact
  const handleReadMore = () => {
    // alert("stay with us , this features coming soon");
    Swal.fire({
      title: "Stay connected!",
      text: "We are working on it.",
      icon: "info",
      confirmButtonText: "OKAY",
      confirmButtonColor: "#2563EB", // nice blue color
    });
  };
  return (
    <>
      <h2 className="text-center text-3xl my-2">Level Up Your Dev Game</h2>
      <p className="text-xl text-center">
        Read bite-sized guides, interview prep tips, and open source playbooks —
        <br />
        straight from Dev Crack.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        {blogs.map((post, index) => (
          <div
            key={index}
            className="border rounded-lg    bg-white  overflow-hidden shadow-md transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl cursor-pointer"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">{post.title}</h2>
              <p className="text-gray-600 mb-2">{post.summary}</p>
              <a
                onClick={() => handleReadMore()}
                // href={`/blog/${post.slug}`}
                className="text-[#006be6] hover:underline"
              >
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
