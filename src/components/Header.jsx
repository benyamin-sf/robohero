export default function Header() {
  const toggleMobileMenu = () => {
    const mobileMenu = document.getElementById("mobile-menu");
    const isHidden = mobileMenu.classList.contains("hidden");
    mobileMenu.classList.toggle("hidden", !isHidden);
  };

  return (
    <header className="flex items-center justify-between p-4 lg:px-20">
      <h1
        className="text-3xl font-light md:text-4xl lg:text-5xl"
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
      >
        BSF.IO
      </h1>

      {/* Desktop navigation */}
      <nav className="hidden items-center gap-12 md:flex">
        <a
          href="#"
          className="z-50 text-base tracking-wider uppercase transition-colors hover:text-gray-300"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1000"
        >
          company
        </a>
        <a
          href="#"
          className="z-50 text-base tracking-wider uppercase transition-colors hover:text-gray-300"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          features
        </a>
        <a
          href="#"
          className="z-50 text-base tracking-wider uppercase transition-colors hover:text-gray-300"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="2000"
        >
          resources
        </a>
        <a
          href="#"
          className="z-50 text-base tracking-wider uppercase transition-colors hover:text-gray-300"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="2500"
        >
          docs
        </a>
      </nav>

      {/* Sign-in button */}
      <button
        type="button"
        className="z-50 hidden cursor-pointer rounded-full border-none bg-[#a7a7a7] px-8 py-3 font-medium text-black transition-all duration-500 hover:bg-white md:block"
      >
        Signin
      </button>

      {/* Mobile menu button */}
      <button
        type="button"
        onClick={toggleMobileMenu}
        className="z-50 cursor-pointer p-2 text-3xl md:hidden"
      >
        <i className="bx bx-menu"></i>
      </button>

      {/* Mobile sidebar */}
      <div
        id="mobile-menu"
        className="fixed top-20 right-0 bottom-0 left-0 z-40 hidden bg-black p-5 pt-8 opacity-70 backdrop-blur-md md:hidden"
      >
        <nav className="flex flex-col items-center gap-6">
          <a
            href="#"
            className="z-50 text-base tracking-wider uppercase transition-colors hover:text-gray-300"
          >
            company
          </a>
          <a
            href="#"
            className="z-50 text-base tracking-wider uppercase transition-colors hover:text-gray-300"
          >
            features
          </a>
          <a
            href="#"
            className="z-50 text-base tracking-wider uppercase transition-colors hover:text-gray-300"
          >
            resources
          </a>
          <a
            href="#"
            className="z-50 text-base tracking-wider uppercase transition-colors hover:text-gray-300"
          >
            docs
          </a>
        </nav>
      </div>
    </header>
  );
}
