import React from "react";

// replace with your real images
import Img1 from "../../../assets/images/img1.jpg";
import Img2 from "../../../assets/images/img2.jpg";
import Img3 from "../../../assets/images/img3.jpg";
import Img4 from "../../../assets/images/img4.jpg";
import Img5 from "../../../assets/images/img5.jpg";
import Img6 from "../../../assets/images/img6.jpg";
import Img7 from "../../../assets/images/img7.jpg";
import Img8 from "../../../assets/images/img8.jpg";
import Img9 from "../../../assets/images/img9.jpg";
import Img10 from "../../../assets/images/img10.jpg";
import Img11 from "../../../assets/images/img11.jpg";
import Img12 from "../../../assets/images/img12.jpg";

/* ---------- Image Card ---------- */
function ImageCard({ img }) {
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden self-start">
      <img src={img} alt="" className="w-full h-64 object-cover" />
    </div>
  );
}

/* ---------- Gallery Card ---------- */
function GalleryCard({ img, title }) {
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden text-center">
      <div className="p-4">
        <h4 className="text-[16px] font-extrabold text-gray-800">{title}</h4>
      </div>
      <img src={img} alt={title} className="w-full h-56 object-cover" />
    </div>
  );
}

/* ---------- Main Section ---------- */
export default function GallerySection() {
  return (
    <section className="py-16 px-20">
      <div className="max-w-7xl mx-auto space-y-20">
        {/* Row 1 */}
        <div className="grid lg:grid-cols-[280px_1fr] gap-8 items-center">
          <h3 className="text-[#4BAF47] font-extrabold text-[30px] leading-[45px]">
            Precleaning, Parboiling & Milling Unit
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <GalleryCard img={Img1} title="Quality Standards" />
            <GalleryCard img={Img2} title="Organic Farming" />
            <GalleryCard img={Img3} title="Agriculture Products" />
          </div>
        </div>

        {/* Row 2 */}
        <div className="grid lg:grid-cols-[280px_1fr] gap-8 items-center">
          <h3 className="text-[#4BAF47] font-extrabold text-[30px] leading-[45px]">
            Equitorial Guinea Ambassador’s visit to Bauchi
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <ImageCard img={Img4} />
            <ImageCard img={Img5} />
            <ImageCard img={Img6} />
          </div>
        </div>

        {/* Row 3 */}
        <div className="grid lg:grid-cols-[280px_1fr] gap-8 items-center">
          <h3 className="text-[#4BAF47] font-extrabold text-[30px] leading-[45px]">
            Farm Pictures Visits to the Rice Mill in Bauchi:
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <ImageCard img={Img7} />
            <ImageCard img={Img8} />
            <ImageCard img={Img9} />
          </div>
        </div>

        {/* Row 4 */}
        <div className="grid lg:grid-cols-[280px_1fr] gap-8 items-center">
          <h3 className="text-[#4BAF47] font-extrabold text-[30px] leading-[45px] ">
            Tripartite MOU with RIFAN and the Egyptian Government
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <ImageCard img={Img10} />
            <ImageCard img={Img11} />
            <ImageCard img={Img12} />
          </div>
        </div>
      </div>
    </section>
  );
}
