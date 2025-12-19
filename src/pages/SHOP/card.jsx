import React, { useState } from "react";
import { FaSearch, FaComments } from "react-icons/fa";
import { IoPersonCircle } from "react-icons/io5";

import Newsimage1 from "../../assets/images/newsimage1.png";
import Newsimage2 from "../../assets/images/newsimage2.png";
import Newsimage3 from "../../assets/images/newsimage3.png";
import News1 from "../../assets/images/news1.png";
import News2 from "../../assets/images/news2.png";
import News3 from "../../assets/images/news3.png";

const columnContent = [
  /*  ID 1  */
  {
    title:
      "Gas Flaring Explained: Why It Happens and How It’s Being Turned into Energy",
    fullText: (
      <>
        Discover how Nigeria’s new cost-efficiency tax incentives are reshaping
        EPCC project economics. Learn how contractors can optimize costs, boost
        profitability, and stay competitive in the oil and gas sector.  
        <p className="text-[#F7C04A] text-[16px] font-bold mt-4 mb-2">
          From Waste to Opportunity
        </p>
        <p className="mb-4">
          Gas flaring in Nigeria has long been an environmental and economic
          challenge. The Nigerian Gas Flare Commercialisation Programme (NGFCP)
          is transforming this issue into opportunity by turning flare gas into
          a valuable resource.
        </p>
        <p>
          In December 2025, 28 companies received permits to capture and
          commercialise flare gas. The programme is expected to unlock
          $2 billion in investment, generate 100,000+ jobs, and contribute to
          sustainable energy development across Nigeria.
        </p>
        <p className="text-[#F7C04A] font-bold mt-4 mb-2">
          Why EPCC Contractors Matter
        </p>
        <p>
          EPCC contractors are at the heart of this transformation, delivering
          critical infrastructure and technical solutions.
        </p>
        <p className="font-bold mt-4 mb-1">Engineering & Construction</p>
        <p>
          Building gas processing plants, power generation units, and LPG
          terminals requires the expertise of skilled EPCC firms.
        </p>
        <p className=" font-bold mt-4 mb-1">Collaboration & Financing</p>
        <p>
          EPCC contractors can partner with investors and technology providers,
          ensuring large-scale projects are executed efficiently and
          commercially viable.
        </p>
        <p className=" font-bold mt-4 mb-1">Sustainability & ESG Compliance</p>
        <p>
          NGFCP projects align with environmental, social, and governance (ESG)
          goals, helping contractors reduce emissions and support Nigeria’s
          energy transition.
        </p>
        <p className="text-[#F7C04A] font-bold mt-4 mb-2">
          The Bigger Picture: Impact on Nigeria’s Energy Sector
        </p>
        <p className="mb-4">
          NGFCP projects could capture 250–300 million cubic feet of gas daily,
          generate ~3 GW of power, and produce substantial LPG volumes. For EPCC
          contractors, these projects represent more than just work — they are
          opportunities to lead innovative projects, enhance technical
          capabilities, and shape Nigeria’s sustainable energy future.
        </p>
        <p>
          The programme signals a new era in oil and gas infrastructure, where
          engineering excellence meets environmental responsibility and
          commercial opportunity.
        </p>
      </>
    ),
  },

  /*  ID 2  */
  {
    title: "From Oil And Gas To ‘all Energy’",
    fullText: (
      <>
        Discover how Nigeria’s new cost-efficiency tax incentives are reshaping
        EPCC project economics. Learn how contractors can optimize costs, boost
        profitability, and stay competitive in the oil and gas sector.  
        <p className="text-[#F7C04A] font-bold mb-2 mt-4">Introduction</p>
        <p>
          Nigeria’s oil and gas sector is undergoing a significant shift with
          the introduction of new cost-efficiency tax incentives for upstream
          operations. These incentives aim to reward contractors and operators
          who reduce project costs and optimize operations, creating new
          opportunities for EPCC (Engineering, Procurement, Construction, and
          Commissioning) contractors.
        </p>
        <p className="text-[#F7C04A] font-semibold mt-4 mb-2">
          What Are the New Incentives?
        </p>
        <p>
          The government’s reform, introduced in 2025, provides
          performance-based tax benefits for projects that demonstrate cost
          savings without compromising quality or safety. This policy
          encourages:
        </p>
        <ul className="list-disc list-inside mt-2">
          <li>Efficient project design and execution</li>
          <li>Reduced operating costs</li>
          <li>Innovation in procurement and construction methods</li>
          <li>
            For EPCC contractors, this is a chance to align operational
            excellence with financial rewards.
          </li>
        </ul>
        <p className="text-[#F7C04A] font-bold mt-4 mb-2">
          Opportunities for EPCC Contractors
        </p>
        <p className="font-semibold mt-2">1. Optimized Project Economics</p>
        <p>
          By delivering projects under budget and on time, EPCC firms can
          maximize profitability while benefiting from government tax
          incentives.
        </p>
        <p className="font-semibold mt-2">
          2. Competitive Advantage in Bidding
        </p>
        Cost-efficiency metrics can make contractors more attractive during
        tender processes, giving them an edge over competitors.
        <p className="font-semibold mt-2">3. Encouragement for Innovation</p>
        The incentives drive investment in new technologies, modular
        construction, and smart project management tools that reduce waste and
        improve productivity.
        <p className="text-[#F7C04A] font-semibold mt-4 mb-2">
          Impact on the Nigerian Oil & Gas Sector
        </p>
        If widely adopted, these incentives could:
        <ul className="list-disc list-inside mt-2">
          <li>Lower overall project execution costs</li>
          <li>Increase local content participation</li>
          <li>Improve financial sustainability of EPCC projects</li>
          <li>Boost investor confidence in the sector</li>
        </ul>
        <p className="text-[#F7C04A] font-semibold mt-4 mb-2">Conclusion</p>
        Nigeria’s cost-efficiency tax incentives mark a transformative step in
        EPCC project economics. Contractors who embrace innovative,
        cost-effective, and high-quality project delivery stand to benefit the
        most, positioning themselves as leaders in a more competitive,
        profitable, and sustainable oil and gas industry.
      </>
    ),
  },

  /*  ID 3 */
  {
    title: "Tackling The Energy Identity Crisis",
    fullText: (
      <>
        Learn what gas flaring is, why it happens in Nigeria, and how it’s being
        transformed into usable energy through innovative programs.
        <p className=" text-[#F7C04A] font-bold mb-2 mt-4">
          What is Gas Flaring?
        </p>
        <p>
          Gas flaring is the burning of natural gas released during oil
          extraction. While it ensures safety, it wastes valuable energy and
          contributes to air pollution and carbon emissions.
        </p>
        <p className="text-[#F7C04A] font-semibold mt-4 mb-2">
          Why Gas Flaring Happens
        </p>
        <ul className="list-disc list-inside">
          <li>
            Safety reasons: Excess gas is burned off to prevent explosions.
          </li>
          <li>Lack of infrastructure to capture the gas.</li>
          <li>Economic considerations.</li>
        </ul>
        <p className="text-[#F7C04A] font-semibold mt-4 mb-2">
          Turning Flared Gas into Energy
        </p>
        <p>
          Nigeria is now addressing this issue through the Nigerian Gas Flare
          Commercialisation Programme (NGFCP). The initiative allows companies
          to capture and use flare gas, turning it into:
        </p>
        <ul className="list-disc list-inside ">
          <li>Electricity through gas-to-power projects</li>
          <li>LPG for cooking fuel</li>
          <li>Industrial energy for factories and communities</li>
        </ul>
        <p>
          This transformation reduces pollution, provides clean energy, and
          creates jobs and investment opportunities.
        </p>
        <p className="text-[#F7C04A] font-bold mt-4 mb-2">
          The Role of EPCC Contractors
        </p>
        <p>
          EPCC (Engineering, Procurement, Construction, and Commissioning)
          contractors are key to this process. They design and build the
          facilities that:
        </p>
        <ul className="list-disc list-inside ">
          <li>Capture flare gas efficiently</li>
          <li>Process it into usable energy</li>
          <li>Ensure safe and sustainable operations</li>
        </ul>
        <p>
          By combining engineering expertise with innovative solutions, EPCC
          contractors help turn waste into a valuable energy resource.
        </p>
        <p className="text-[#F7C04A] font-bold mt-4 mb-2">Why It Matters</p>
        <p>Capturing flare gas is not just good for the environment, it:</p>
        <ul className="list-disc list-inside ">
          <li>Reduces carbon emissions</li>
          <li>Generates economic value from previously wasted resources</li>
          <li>Strengthens energy security in Nigeria</li>
        </ul>
        <p>
          With programs like NGFCP, gas flaring is gradually moving from a
          problem to a solution, offering both environmental and economic
          benefits.
        </p>
      </>
    ),
  },
];

/* COMPONENT  */

export default function BlogPage() {
  const [openPost, setOpenPost] = useState(null);

  const togglePost = (id) => {
    setOpenPost(openPost === id ? null : id);
  };

  const generateExcerpt = (fullText) => {
    const text = fullText.props.children
      .filter((item) => typeof item === "string")
      .join(" ");
    return text.split(" ").slice(0, 25).join(" ") + "...";
  };

  const posts = [
    {
      id: 1,
      image: Newsimage1,
      title:
        "Gas Flare Commercialisation Programme: Opportunities for EPCC Contractors in Nigeria",
      comments: "1 Comment",
      column: 0,
      date: "16 December 2025",
    },
    {
      id: 2,
      image: Newsimage2,
      title:
        "How New Cost-Efficiency Tax Incentives Could Transform EPCC Project Economics in Nigeria",
      comments: "1 Comment",
      column: 1,
      date: "05 July 2022",
    },
    {
      id: 3,
      image: Newsimage3,
      title:
        "Gas Flaring Explained: Why It Happens and How It’s Being Turned into Energy",
      comments: "5 Comments",
      column: 2,
      date: "05 July 2022",
    },
  ];

  const latestPosts = [
    {
      image: News1,
      author: "Caroline",
      title:
        "Gas Flare Commercialisation Programme: Opportunities for EPCC Contractors in ",
    },
    {
      image: News2,
      author: "Caroline",
      title:
        "How New Cost-Efficiency Tax Incentives Could Transform EPCC Project ",
    },
    {
      image: News3,
      author: "Caroline",
      title:
        "Gas Flaring Explained: Why It Happens and How It’s Being Turned into ",
    },
  ];

  return (
    <div className="w-full bg-white py-8 sm:py-12 px-4">
      <div className="max-w-[1100px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {/* RIGHT SIDEBAR */}
          <div className="space-y-6 sm:space-y-8 order-1 lg:order-2">
            {/* SEARCH */}
            <div className="flex items-center bg-[#012A42] rounded-lg px-3 sm:px-4 py-2 sm:py-3">
              <input
                type="text"
                placeholder="Search here..."
                className="flex-1 bg-transparent outline-none text-white placeholder:text-gray-300 text-sm sm:text-base"
              />
              <FaSearch className="text-white text-sm sm:text-base" />
            </div>

            {/* LATEST POSTS */}
            <div className="bg-[#FFF7E9] rounded-xl p-4 sm:p-6">
              <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-5">
                Latest Posts
              </h3>
              {latestPosts.map((post, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4"
                >
                  <img
                    src={post.image}
                    alt=""
                    className="w-12 h-10 sm:w-16 sm:h-14 object-cover rounded-md"
                  />
                  <div>
                    <span className="text-xs text-gray-500 flex items-center gap-1 mb-1">
                      <IoPersonCircle className="text-[#F7C04A] text-sm" />
                      by {post.author}
                    </span>
                    <p className="text-xs sm:text-sm font-semibold leading-snug">
                      {post.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CATEGORIES */}
            <div className="bg-[#FFF7E9] rounded-xl p-4 sm:p-6">
              <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">
                Categories
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm">
                <li>Industry News</li>
                <li>Oil and Gas</li>
                <li>Government</li>
              </ul>
            </div>

            {/* TAGS */}
            <div className="bg-[#FFF7E9] rounded-xl p-4 sm:p-6">
              <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">
                Tags
              </h3>
              <div className="flex flex-wrap gap-2">
                {["Oil and Gas", "Engineer", "News", "Projects", "Others"].map(
                  (tag, i) => (
                    <span
                      key={i}
                      className="px-2 sm:px-3 py-1 bg-white text-xs sm:text-sm rounded-md border hover:bg-[#FAA419] hover:text-white"
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>

          {/* POSTS */}
          <div className="col-span-1 lg:col-span-2 space-y-6 sm:space-y-8 lg:space-y-10 order-2 lg:order-1">
            {posts.map((post) => (
              <div
                key={post.id}
                className="rounded-xl overflow-hidden shadow-md border"
              >
                <img
                  src={post.image}
                  alt="Post"
                  className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover"
                />

                <div className="p-4 sm:p-5 lg:p-6">
                  <span className="inline-block bg-[#F7C04A] text-white text-xs px-2 sm:px-3 py-1 rounded-md">
                    {post.date}
                  </span>

                  <div className="flex items-center gap-2 sm:gap-4 text-xs sm:text-sm text-gray-500 mt-2">
                    <span className="flex items-center gap-1">
                      <IoPersonCircle className="text-[#F7C04A] text-sm sm:text-base" />{" "}
                      by Caroline
                    </span>
                    <span className="flex items-center gap-1">
                      <FaComments className="text-[#F7C04A] text-sm sm:text-base" />{" "}
                      {post.comments}
                    </span>
                  </div>

                  <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold mt-4">
                    {post.title}
                  </h2>

                  <div className="text-gray-600 mt-4">
                    {openPost === post.id
                      ? columnContent[post.column].fullText
                      : generateExcerpt(columnContent[post.column].fullText)}
                  </div>

                  <button
                    onClick={() => togglePost(post.id)}
                    className="mt-4 text-[#FAA419] font-semibold hover:underline"
                  >
                    {openPost === post.id ? "Read Less" : "Read More"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
