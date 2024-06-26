//import { resourcesLinks, platformLinks, communityLinks } from "../constants";
import { Link } from "react-router-dom";
import logo from "../assets/profile-pictures/logodevsoft.png"

const Footer = () => {
  return (
    <footer className="bg-background-secondary w-full rounded-tl-[50px] rounded-tr-[50px] pt-10 pb-10 md:pt-20 px-5 sm:px-10 lg:px-20">
      <section className="flex flex-col lg:flex-row lgitems-start lg:justify-between gap-x-32 gap-y-10">
        <section>
        <div className="flex flex-col sm:flex-row items-center justify-center w-full animate-flip-up animate-once animate-ease-in-out">
        <img src={logo} className="w-48 h-48 m-0 p-0 sm:w-72 md:w-96" alt="logo" />
        <h1 className="text-2xl sm:text-6xl lg:text-2xl text-center tracking-wide sm:ml-[-6.9rem] mt-4 sm:mt-0 md:ml-[-5.9rem]">
          STUDIO <span className="bg-gradient-to-r from-cyan-500 to-emerald-500 text-transparent bg-clip-text transition-transform duration-300 hover:scale-105">DEVSOFT</span>
        </h1>
      </div>
          <ul className="inline-flex gap-x-4">
            <li>
              <Link
                href="/"
                target="_blank"
                className="flex items-center justify-center w-12 h-12 bg-background box-content rounded-full transition-colors"
              >
                <i className="fi fi-brands-twitter-alt"></i>
              </Link>
            </li>
            <li>
              <Link
                href="/"
                target="_blank"
                className="flex items-center justify-center w-12 h-12 bg-background box-content rounded-full transition-colors"
              >
                <i className="fi fi-brands-instagram"></i>
              </Link>
            </li>
            <li>
              <Link
                href="/"
                target="_blank"
                className="flex items-center justify-center w-12 h-12 bg-background box-content rounded-full transition-colors"
              >
                <i className="fi fi-brands-github"></i>
              </Link>
            </li>
            <li>
              <Link
                href="/"
                target="_blank"
                className="flex items-center justify-center w-12 h-12 bg-background box-content rounded-full transition-colors"
              >
                <i className="fi fi-brands-linkedin"></i>
              </Link>
            </li>
          </ul>
          <hr className="my-8 max-w-xs border border-border" />
          <p className="max-w-sm text-muted-foreground">
            Selling premium products, designed to elevate your everyday experience.
          </p>
        </section>
        <section className="flex-1">
          <ul className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-y-10">
            <li>
              <h5 className="uppercase font-light tracking-widest mb-5">Menu</h5>
              <ul className="space-y-5">
                <li>
                  <Link href="#" className="underline">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Store
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Articles
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <h5 className="uppercase font-light tracking-widest mb-5">Utility pages</h5>
              <ul className="space-y-5">
                <li>
                  <Link href="#" className="hover:underline">
                    Shipping
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    404 Not Found
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Support
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <h5 className="uppercase font-light tracking-widest mb-5">Contact us</h5>
              <ul className="space-y-5">
                <li className="flex gap-4">
                  <i className="fi fi-rr-envelope text-2xl"></i>
                  <div>
                    <h5 className="font-medium">Email</h5>
                    <p className="text-sm text-muted-foreground">studiodevsoft@gmail.com</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <i className="fi fi-rr-mobile-notch text-2xl"></i>
                  <div>
                    <h5 className="font-medium">Phone</h5>
                    <p className="text-sm text-muted-foreground">(+54) 3816 26 25 36</p>
                  </div>
                </li>
              </ul>
            </li>
          </ul>
        </section>
      </section>
      <hr className="mt-20 mb-10 border-border" />
      <section className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-y-8">
        <p className="text-center">
          Copyright &copy; Designed by{' '}
          <Link href="https://www.jotre.dev" target="_blank" className="underline font-bold">
           StudioDevSoft
          </Link>
        </p>
        <div className="flex items-center justify-center gap-x-4">
          <Link href="/" className="hover:underline">
            Terms and Conditions
          </Link>
          <span>|</span>
          <Link href="/" className="hover:underline">
            Privacy Policy
          </Link>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
