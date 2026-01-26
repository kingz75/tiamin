import React, { useEffect, useRef, useState } from 'react'
import abtall from '../../assets/images/abtall.png'
import abtImg2 from '../../assets/images/abtImg2.png'
import abtImgsm from '../../assets/images/abtImgsmall.png'
import abtbg from '../../assets/images/abt-bg.png'

export default function SectionTwo() {
    const leftRef = useRef(null)
    const [leftHeight, setLeftHeight] = useState(null)

    useEffect(() => {
        if (leftRef.current) {
            setLeftHeight(leftRef.current.offsetHeight)
        }
    }, [])

    return (
        <section className="w-full py-20" style={{ backgroundImage: `url(${abtbg})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
            <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto px-4">

                {/* LEFT CONTENT (HEIGHT SOURCE) */}
                <div ref={leftRef} className="w-full lg:w-[60%]">
                    <span className="text-[#EEC044] text-[24px] leading-[36px]">
                        About Tiamin Group
                    </span>

                    <h2 className="text-4xl lg:text-[36px] leading-[43px] font-bold mt-4">
                        Leading Manufacturing and Agricultural Company of the 21st Century.
                    </h2>

                    <p className="text-[#878680] text-[16px] mt-6 leading-[23px]">
                        Tiamin Group’s diverse portfolio includes road construction, rice
                        processing, farming, charcoal production, commodity exchange, and
                        international gold trading in Dubai.
                    </p>

                    <p className="text-[#878680] mt-4 leading-[23px]">
                        Headquartered in Kano and Bauchi, Nigeria, with a combined workforce
                        of around 600 employees, Tiamin Group prides itself on its ethical
                        practices and relentless pursuit of success.
                    </p>

                    <p className="mt-6 text-[24px] leading-[36px] text-[#4BAF47]">
                        Modern agriculture types
                    </p>

                    <p className="text-[#878680] text-[16px] font-bold mt-2">
                        Safely Grown | Clean energy | Non GMO
                    </p>

                    <button className="mt-8 bg-[#4BAF47] transition text-[#FFFFFF] text-[14px] leading-[30px] px-6 py-3 rounded-lg font-medium">
                        Discover More
                    </button>
                </div>

                {/* RIGHT IMAGES (HEIGHT DEPENDS ON LEFT ON DESKTOP) */}
                <div
                    className="w-full lg:w-[40%]"
                    style={{ height: leftHeight && window.innerWidth > 1024 ? leftHeight : 'auto' }}
                >
                    {/* LEFT STACK */}
                    <div className="flex flex-col gap-4 flex-1 h-full">
                        <img
                            src={abtall}
                            alt="Manufacturing facility"
                            className="flex-1 object-contain"
                        />


                    </div>

                    {/* RIGHT TALL IMAGE */}

                </div>

            </div>
        </section>
    )
}
