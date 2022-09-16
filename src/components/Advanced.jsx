import React from "react";
import brand from "../images/icon-brand-recognition.svg";
import detail from "../images/icon-detailed-records.svg";
import fully from "../images/icon-fully-customizable.svg";

const Advanced = () => {
  return (
    <div>
      <section className="bg-gray-100 pt-32 pb-10 lg:pb-40">
        <div className="div max-width">
          <h2 className="text-4xl font-bold text-slate-500 mb-3 text-center">
            Advanced Statistics
          </h2>
          <p className="text-slate-400 text-center mb-10 lg:mb-20">
            Track now your links are preforming across the web with our advanced
            statiatics dashboard.
          </p>

          <div className="relative card grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            <div className="line"></div>
            <article className="bg-white p-5 rounded relative">
              <img
                src={brand}
                alt=""
                className="p-3 bg-slate-800 rounded-full -mt-12"
              />
              <h3 className="text-slate-800 text-lg mt-5 mb-2 font-bold">
                Brand Recognition
              </h3>
              <p className="text-slate-400 text-sm">
                Boost your brand recognition with each click. Generic links
                don’t mean a thing. Branded links help instil confidence in your
                content.
              </p>
            </article>
            <article className="bg-white p-5 rounded relative">
              <img
                src={detail}
                alt=""
                className="p-3 bg-slate-800 rounded-full -mt-12"
              />
              <h3 className="text-slate-800 text-lg mt-5 mb-2 font-bold">
                Detailed Records
              </h3>
              <p className="text-slate-400 text-sm">
                Gain insights into who is clicking your links. Knowing when and
                where people engage with your content helps inform better
                decisions.
              </p>
            </article>
            <article className="bg-white p-5 rounded relative">
              <img
                src={fully}
                alt=""
                className="p-3 bg-slate-800 rounded-full -mt-12"
              />
              <h3 className="text-slate-800 text-lg mt-5 mb-2 font-bold">
                Fully Customizable
              </h3>
              <p className="text-slate-400 text-sm">
                Improve brand awareness and content discoverability through
                customizable links, supercharging audience engagement.
              </p>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Advanced;
