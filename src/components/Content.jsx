import { useState } from "react";
import cv_ulan from "../assets/documents/CV Ulan.pdf";
import Profile from "./right/profile/Profile";
import Formal from "./right/education/Formal";
import Hoby from "./right/profile/Hoby";
import Skills from "./right/profile/Skills";
import Map from "./right/profile/Map";
import NonFormal from "./right/education/NonFormal";
import Experience from "./right/Experience";
import About from "./left/About";
import Galery from "./left/Galery";
import Contact from "./right/Contact";
import MyApp from "./left/MyApp";
import Calendar from "./left/Calendar";

const Content = ({ myData, galery, tanggalHariIni }) => {
  const [socialActive, setSocialActive] = useState(false);
  const handleClickSosial = () => {
    setSocialActive(!socialActive);
  };
  const handleClickDownloadCv = () => {
    window.open(cv_ulan);
  };

  const [profileActive, setProfileActive] = useState(true);
  const [educationActive, setEducationActive] = useState(false);
  const [experienceActive, setExperienceActive] = useState(false);
  const [contactActive, setContactActive] = useState(false);

  const handleClickProfile = () => {
    setProfileActive(true);
    setEducationActive(false);
    setExperienceActive(false);
    setContactActive(false);
  };

  const handleClickEducation = () => {
    setProfileActive(false);
    setEducationActive(true);
    setExperienceActive(false);
    setContactActive(false);
  };

  const handleClickExperience = () => {
    setProfileActive(false);
    setEducationActive(false);
    setExperienceActive(true);
    setContactActive(false);
  };

  const handleClickContact = () => {
    setProfileActive(false);
    setEducationActive(false);
    setExperienceActive(false);
    setContactActive(true);
  };

  const yearNow = new Date().getFullYear();

  // console.log(myData.social)

  return (
    <main className="px-20 py-6 w-full">
      <div className="flex justify-center items-start gap-6">
        <div className="w-8/12">
          <div className="bg-white rounded-lg shadow-md overflow-hidden w-full">
            <img
              src="images/bg/01.jpg"
              alt="Banner"
              className="h-50 w-full object-cover"
            />
            <div className="p-4 relative w-full">
              <img
                src={`images/avatar/${myData.profilePicture}`}
                alt="Profile"
                className="absolute -top-12 bg-gray-200 w-36 rounded-full cursor-pointer border-4 border-white shadow-md"
              />
              <div className="flex justify-between items-center w-full">
                <div className="flex flex-col justify-center items-start w-full ps-40 cursor-default pointer-events-none">
                  <h1 className="text-2xl text-blue-700 uppercase">
                    {myData.title} <i className="bi-patch-check-fill"></i>
                  </h1>
                  <span className="text-gray-500">({myData.alias})</span>
                </div>
                <div className="flex justify-end items-center gap-2 w-full relative">
                  <div
                    onClick={handleClickDownloadCv}
                    className="h-12 px-6 flex justify-center items-center bg-red-100 hover:bg-red-500 text-red-500 hover:text-white rounded-full cursor-pointer transition-all duration-200 hover:ring-1 hover:ring-red-300 hover:shadow-md"
                  >
                    <i className="bi-download me-2"></i>Download CV
                  </div>
                  <div
                    onClick={handleClickSosial}
                    className="size-12  flex justify-center items-center bg-gray-100 text-gray-400 hover:text-gray-700 rounded-full cursor-pointer transition-all duration-200 hover:ring-1 hover:ring-gray-300 hover:shadow-md"
                  >
                    <i className="bi-wechat"></i>
                  </div>
                  <div
                    className={`absolute bottom-13 right-0 ${
                      socialActive ? "flex" : "hidden"
                    } flex-col justify-center items-center rounded-md shadow-lg bg-white py-2 transition-all duration-200`}
                  >
                    {myData.social.map((social, index) => (
                      <a
                        key={index}
                        href={`https://${
                          social.app === "whatsapp"
                            ? "wa.me"
                            : social.app + ".com"
                        }/${social.account}`}
                        target="_blank"
                        className="px-4 py-1 w-full text-gray-400 hover:text-gray-700 transition-all duration-200 capitalize"
                      >
                        <i className={`bi-${social.app} me-2`}></i>
                        {social.app}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-evenly items-center w-full py-5 mt-2 border-b border-gray-200 cursor-default pointer-events-none">
              <div className="w-fit flex justify-center items-center gap-1 text-xl text-slate-500">
                <i className="bi-code-slash"></i>
                {myData.job}
              </div>
              <div className="w-fit flex justify-center items-center gap-1 text-xl text-slate-500">
                <i className="bi-geo-alt"></i>
                {myData.address.province}, {myData.address.country}
              </div>
              <div className="w-fit flex justify-center items-center gap-1 text-xl text-slate-500">
                <i className="bi-cake2"></i>
                {yearNow - 1993} Tahun
              </div>
            </div>
            <div className="flex justify-center items-center w-full">
              <div
                onClick={handleClickProfile}
                className={`cursor-pointer transition-all duration-200 w-fit text-lg py-3 px-4 font-bold ${
                  profileActive ? "bg-blue-50 text-blue-600" : "text-slate-600"
                }`}
              >
                Profil
              </div>
              <div
                onClick={handleClickEducation}
                className={`cursor-pointer transition-all duration-200 w-fit text-lg py-3 px-4 font-bold ${
                  educationActive
                    ? "bg-blue-50 text-blue-600"
                    : "text-slate-600"
                }`}
              >
                Pendidikan
              </div>
              <div
                onClick={handleClickExperience}
                className={`cursor-pointer transition-all duration-200 w-fit text-lg py-3 px-4 font-bold ${
                  experienceActive
                    ? "bg-blue-50 text-blue-600"
                    : "text-slate-600"
                }`}
              >
                Pengalaman Kerja
              </div>
              <div
                onClick={handleClickContact}
                className={`cursor-pointer transition-all duration-200 w-fit text-lg py-3 px-4 font-bold ${
                  contactActive ? "bg-blue-50 text-blue-600" : "text-slate-600"
                }`}
              >
                Kontak
              </div>
            </div>
          </div>
          <div
            className={`mt-6 flex flex-col justify-center items-center gap-6 transition-all duration-200 ${
              profileActive ? "flex" : "hidden"
            }`}
          >
            <Profile myData={myData} />
            <Hoby myData={myData} />
            <Skills myData={myData} />
            <Map myData={myData} />
          </div>
          <div
            className={`mt-6 flex flex-col justify-center items-center gap-6 transition-all duration-200 ${
              educationActive ? "flex" : "hidden"
            }`}
          >
            <Formal myData={myData} />
            <NonFormal myData={myData} />
          </div>
          <div
            className={`mt-6 flex flex-col justify-center items-center gap-6 transition-all duration-200 ${
              experienceActive ? "flex" : "hidden"
            }`}
          >
            <Experience myData={myData} />
          </div>
          <div
            className={`mt-6 flex flex-col justify-center items-center gap-6 transition-all duration-200 ${
              contactActive ? "flex" : "hidden"
            }`}
          >
            <Contact />
          </div>
        </div>
        <div className="w-4/12">
          <About />
          <Galery galery={galery} />
          <MyApp />
          <Calendar tanggalHariIni={tanggalHariIni} />
        </div>
      </div>
    </main>
  );
};

export default Content;
