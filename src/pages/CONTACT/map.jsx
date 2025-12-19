import MapPreview from "../../assets/back/mapbg.png";

export default function Map() {
  return (
    <div className="w-full flex justify-center py-8 sm:py-10 bg-white max-w-[1370px] mx-auto px-4 sm:px-8 md:px-16 lg:px-[100px]">
      <div className="w-full bg-[#F8F7F1] rounded-lg grid grid-cols-1 md:grid-cols-2 overflow-hidden">
        {/* RIGHT — FORM */}
        <div className="px-4 sm:px-8 md:px-12 lg:px-[50px] py-8 sm:py-12 md:py-16 lg:py-[100px] flex flex-col justify-center text-xs sm:text-sm lg:text-[14px] order-1 md:order-2">
          <p className="text-lg sm:text-xl lg:text-[24px] text-[#002B45] mb-1">
            Contact us
          </p>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-semibold text-[#002B45] mb-6 sm:mb-8">
            Write a Message
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full p-2 sm:p-3 rounded-lg bg-[#DEE1DD] text-[#002B45] outline-none"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full p-2 sm:p-3 rounded-lg bg-[#DEE1DD] text-[#002B45] outline-none"
            />
          </div>

          <textarea
            placeholder="Write a Message"
            className="w-full p-2 sm:p-3 h-24 sm:h-32 lg:h-40 rounded-lg bg-[#DEE1DD] text-[#002B45] outline-none mb-4 sm:mb-6"
          />

          <button className="bg-[#002B45] text-white px-6 sm:px-8 lg:px-10 py-3 sm:py-4 rounded-lg w-fit hover:opacity-90">
            Send a Message
          </button>
        </div>

        {/* LEFT — MAP WITH IMAGE OVERLAY */}
        <div className="w-full relative h-64 sm:h-80 md:h-96 lg:h-full order-2 md:order-1">
          {/* MAP */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d76315.81798438779!2d7.471204543737575!3d9.063472604014645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf56c37ed8c23%3A0x7bae1b3c8bb36329!2sCozym%20Limited!5e0!3m2!1sen!2sng!4v1765451752979!5m2!1sen!2sng"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full"
          ></iframe>

          {/* OVERLAY IMAGE */}
          <img
            src={MapPreview}
            alt="Map preview"
            className="absolute top-14 sm:top-20 md:top-32 lg:top-40 left-2 sm:left-4 w-20 sm:w-24 md:w-32 lg:w-auto h-auto rounded-lg shadow-lg border"
          />
        </div>
      </div>
    </div>
  );
}
