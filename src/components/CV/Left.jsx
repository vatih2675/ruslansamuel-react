export default function Left({myData, myAddress, formatTanggal}) {
  return (
    <section className="w-4/12 h-full border-r-4 border-sky-600 pe-4 overflow-hidden flex flex-col justify-between items-center">
      <img
        src={`images/avatar/${myData.profilePicture}`}
        alt="Foto"
        className="rounded-full border-3 border-sky-500 shadow-md w-30 mx-auto"
      />
      <div className="w-full">
        <h1 className="font-bold text-2xl underline text-sky-600">
          DATA PRIBADI
        </h1>
        <div className="w-full flex flex-col gap-2 text-sm">
          <div className="w-full">
            <p className="text-gray-600">Nama :</p>
            <p className="font-bold">{myData.name}</p>
          </div>
          <div className="w-full">
            <p className="text-gray-600">Tempat, Tanggal Lahir :</p>
            <p className="font-bold">
              {myData.birthPlace}, {formatTanggal(myData.birthDate, false)}
            </p>
          </div>
          <div className="w-full">
            <p className="text-gray-600">Jenis Kelamin :</p>
            <p className="font-bold">{myData.gender}</p>
          </div>
          <div className="w-full">
            <p className="text-gray-600">Alamat :</p>
            <p className="font-bold">{myAddress}</p>
          </div>
          <div className="w-full">
            <p className="text-gray-600">Provinsi :</p>
            <p className="font-bold">{myData.address.province}</p>
          </div>
          <div className="w-full">
            <p className="text-gray-600">Negara :</p>
            <p className="font-bold">{myData.address.country}</p>
          </div>
          <div className="w-full">
            <p className="text-gray-600">No. Telp./HP/WA :</p>
            <p className="font-bold">+{myData.contact.phone}</p>
          </div>
          <div className="w-full">
            <p className="text-gray-600">Email & Website :</p>
            <p className="font-bold">{myData.contact.email}</p>
            <p className="font-bold">{myData.contact.website}</p>
          </div>
          <div className="w-full">
            <p className="text-gray-600">Media Sosial :</p>
            {myData.social.map((sm, index) => (
              <p key={index} className="font-bold">
                <i className={`bi-${sm.app} me-1`}></i>
                {sm.account}
              </p>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full">
        <h1 className="font-bold text-2xl underline text-sky-600">HOBI</h1>
        <div className="w-full text-sm">
          {myData.hobies.map((hb, index) => (
            <div key={index} className="flex justify-start items-center">
              <i className={`bi-${hb.icon} me-1`}></i>
              <p>{hb.hobby}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full">
        <h1 className="font-bold text-2xl underline text-sky-600 mb-1">
          SKILL / KEAHLIAN
        </h1>
        <div className="w-full text-xs flex flex-wrap gap-2">
          {myData.skills.map((skl, index) => (
            <div
              key={index}
              className="flex justify-start items-center rounded-full bg-gray-200 px-2"
            >
              {/* <i className={`bi-${skl.icon} me-1`}></i> */}
              <p>{skl.skill}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


