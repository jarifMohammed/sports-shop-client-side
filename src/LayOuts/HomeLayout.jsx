import { Outlet } from "react-router-dom";
import { Slide, Fade, Bounce } from "react-awesome-reveal";

import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import Slider from "../Components/Slider";
import Categories from "../Components/Category";
import FeaturedEquipment from "../Components/FeaturedEquipment";
import Member from "../Components/Member";

const HomeLayout = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white">
      <section className="w-11/12 mx-auto py-3">
        <NavBar />
      </section>

      <section className="mt-5">
        {/* Slide-up effect for the Slider */}
        <Slide direction="up" triggerOnce>
          <Slider />
        </Slide>
      </section>

      <main>
        <Outlet />

        {/* Fade-in effect for Categories */}
        <Fade triggerOnce>
          <Categories />
        </Fade>

        <div className="w-11/12 mx-auto">
          {/* Slide-up effect for Featured Equipment */}
          <Slide direction="up" triggerOnce>
            <FeaturedEquipment />
          </Slide>
        </div>

        <div className="w-11/12 mx-auto mt-5">
          {/* Bounce effect for Member section */}
          <Bounce triggerOnce>
            <Member />
          </Bounce>
        </div>
      </main>

      <section>
        {/* Fade-in effect for Footer */}
        <Fade triggerOnce>
          <Footer />
        </Fade>
      </section>
    </div>
  );
};

export default HomeLayout;
