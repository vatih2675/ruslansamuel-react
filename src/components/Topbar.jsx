const Topbar = ({myData, tanggalHariIni, jamBerjalan}) => {
    


    return (
      <nav className="sticky top-0 bg-white shadow-md px-20 flex justify-between items-center z-10">
        <a
          href="/"
          className="py-3 flex justify-center items-center gap-2 font-bold text-2xl text-blue-700 uppercase"
        >
          <img
            src={`public/images/avatar/${myData.profilePicture}`}
            alt="Profile"
            className="w-10 rounded-full bg-gray-200"
          />
          <span>{myData.title}</span>
          <i className="bi-patch-check-fill"></i>
        </a>
        <div className="flex flex-col justify-center items-end text-sm text-gray-500 font-mono cursor-default">
          <span>
            <i className="bi-calendar3 me-1"></i>
            {tanggalHariIni}
          </span>
          <span>
            <i className="bi-clock me-1"></i>
            {jamBerjalan}
          </span>
        </div>
      </nav>
    );
}

export default Topbar
