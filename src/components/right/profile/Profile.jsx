import { formatTanggal } from "../../../constants/functions";

const Profile = ({ myData }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden w-full p-6">
      <h1 className="text-3xl font-bold text-blue-600">
        <i className="bi-person-fill-check me-2"></i>Profil
      </h1>
      <div className="flex justify-center items-center gap-4 w-full mt-6">
        <div className="w-6/12 flex flex-col justify-center items-center gap-4">
          <div className="w-full flex justify-start items-center gap-2 px-4 py-2 rounded-md border border-gray-300 text-gray-600 cursor-default hover:shadow-md transition-all duration-200">
            <i className="bi-calendar3"></i>
            {myData.birthPlace}, {formatTanggal(myData.birthDate, false)}
          </div>
          <div className="w-full flex justify-start items-center gap-2 px-4 py-2 rounded-md border border-gray-300 text-gray-600 cursor-default hover:shadow-md transition-all duration-200">
            <i className="bi-heart"></i>
            {myData.marital}
          </div>
          <div className="w-full flex justify-start items-center gap-2 px-4 py-2 rounded-md border border-gray-300 text-gray-600 cursor-default hover:shadow-md transition-all duration-200">
            <i className="bi-geo-alt"></i>
            {myData.address.subdistrict}, {myData.address.city}
          </div>
          <a
            href={`mailto:${myData.contact.email}`}
            target="_blank"
            className="w-full flex justify-start items-center gap-2 px-4 py-2 rounded-md border border-gray-300 text-gray-600 cursor-pointer hover:text-blue-500 transition-all duration-200 hover:shadow-md"
          >
            <i className="bi-envelope-at"></i>
            {myData.contact.email}
          </a>
        </div>
        <div className="w-6/12 flex flex-col justify-center items-center gap-4">
          <div className="w-full flex justify-start items-center gap-2 px-4 py-2 rounded-md border border-gray-300 text-gray-600 cursor-default hover:shadow-md transition-all duration-200">
            <i
              className={
                myData.gender == "Laki-laki"
                  ? "bi-gender-male"
                  : "bi-gender-female"
              }
            ></i>
            {myData.gender}
          </div>
          <div className="w-full flex justify-start items-center gap-2 px-4 py-2 rounded-md border border-gray-300 text-gray-600 cursor-default hover:shadow-md transition-all duration-200">
            <i className="bi-moon-stars"></i>
            {myData.religion}
          </div>
          <a
            href={`https://wa.me/${myData.contact.phone}`}
            target="_blank"
            className="w-full flex justify-start items-center gap-2 px-4 py-2 rounded-md border border-gray-300 text-gray-600 cursor-pointer hover:text-blue-500 transition-all duration-200 hover:shadow-md"
          >
            <i className="bi-whatsapp"></i>+{myData.contact.phone}
          </a>
          <a
            href={`https://${myData.contact.website}`}
            target="_blank"
            className="w-full flex justify-start items-center gap-2 px-4 py-2 rounded-md border border-gray-300 text-gray-600 cursor-pointer hover:text-blue-500 transition-all duration-200 hover:shadow-md"
          >
            <i className="bi-browser-chrome"></i>
            {myData.contact.website}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Profile;
