import Bg from "../../assets/images/keybg.jpg";
import Keyimage from "../../assets/images/keyimage.png";
import { FaCheckSquare } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaRegCheckSquare } from "react-icons/fa";

export default function Milestones() {
  const items = [
    "Founded in 2012, initially delivering water and environmental engineering projects.",
    "Transitioned into engineering consultancy for oil and gas projects.",
    "Licensed by NUPRC (upstream) and NMDPRA (midstream/downstream).",
    "Delivered over 25 LPG, CNG, and terminal projects for private sector clients.",
    "Cozym Academy launched to strengthen local technical capacity.",
    "Expanding focus on pipelines, gas processing, terminals, and flare elimination systems.",
  ];

  return (
    <section
      className="   bg-cover bg-center flex  px-[170px] pb-[60px] "
      style={{
        backgroundImage: `url(${Bg})`,
      }}
    >
      <div className="relative z-10 max-w-[px]     text-[#012A42]">
        {/* Yellow Header as Image */}
        <div className="-mt-10 mb-9 ml-16">
          <img src={Keyimage} alt="Key Milestones" className=" " />
        </div>

        {/* Bullet List */}
        <div className="space-y-5 flex justify-start flex-col ">
          {items.map((text, index) => (
            <div key={index} className="flex items-start gap-3">
              <FaRegCheckSquare className="text-[#F9AB24] text-2xl mt-1" />
              <p className="text-lg font-semibold text-[#012A42]">{text}</p>
            </div>
          ))}
        </div>

        {/* Button */}
        <Link to="/" className="inline-block mt-10">
          <button className="px-10 py-4 bg-[#012A42] text-white rounded-lg text-lg font-semibold shadow-lg hover:bg-[#033759] transition">
            Home
          </button>
        </Link>
      </div>
    </section>
  );
}
