import Spline from "@splinetool/react-spline";

export default function Hero() {
  return (
    <section className="min-h-[calc(90vh - 6rem)] flex flex-col items-center justify-between lg:mt-16 lg:flex-row">
      <div
        className="z-10 mt-[85%] ml-[5%] max-w-xl md:mt-[60%] lg:mt-0"
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
      >
        {/* Tag box with gradient border */}
        <div className="relative h-10 w-[95%] rounded-full bg-gradient-to-r from-[#656565] to-[#e99b63] shadow-[0_0_15px_rgba(255,255,255,0.4)] sm:w-48">
          <div className="absolute inset-[3px] flex items-center justify-center gap-1 rounded-full bg-black uppercase">
            <i className="bx bx-diamond"></i>
            introducing
          </div>
        </div>

        {/* Main heading */}
        <h1 className="my-8 text-3xl font-semibold tracking-wider uppercase sm:text-4xl md:text-5xl lg:text-6xl">
          mail for
          <br />
          developers
        </h1>

        {/* Description */}
        <p className="max-w-[25rem] text-base tracking-wider text-gray-400 uppercase sm:text-lg lg:max-w-[30rem]">
          the best way to reach people, instead of ending up in spam folders.
          deliver transactional and marketing emails at scale.
        </p>

        {/* CTA Buttons */}
        <div className="my-12 flex items-center gap-4">
          <a
            className="flex items-center gap-x-1 rounded-full border border-[#2a2a2a] px-4 py-2 text-sm font-semibold tracking-wider capitalize transition-all duration-300 hover:bg-[#191613] sm:px-5 sm:py-3 sm:text-lg"
            href="#"
          >
            Documentations
            <i className="bx bx-link-external"></i>
          </a>
          <a
            className="flex items-center gap-x-1 rounded-full border border-[#2a2a2a] bg-gray-300 px-8 py-2 text-sm font-semibold tracking-wider text-black capitalize transition-all duration-300 hover:bg-[#191613] hover:text-white sm:px-10 sm:py-3 sm:text-lg"
            href="#"
          >
            get started
            <i className="bx bx-link-external"></i>
          </a>
        </div>
      </div>

      {/* 3D model */}
      <Spline
        className="absolute top-[-20%] bottom-0 -mt-24 -mr-48 sm:left-[-2%] lg:top-0 lg:left-[25%]"
        style={{ width: "50rem" }}
        scene="https://prod.spline.design/UrSTPpXsQli-86rR/scene.splinecode"
        data-aos="fade-zoom-in"
        data-aos-easing="ease-in-back"
        data-aos-delay="300"
        data-aos-offset="0"
        data-aos-duration="3000"
      />
    </section>
  );
}
