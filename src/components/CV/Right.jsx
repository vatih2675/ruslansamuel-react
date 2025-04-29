export default function Right({myData}){
  return (
    <section className="w-8/12 h-full ps-4 flex flex-col justify-between items-start">
      <h5 className="text-xl">CV / DAFTAR RIWAYAT HIDUP</h5>
      <h1 className="text-sky-600 font-bold uppercase text-[2.76rem]">
        {myData.name}
      </h1>
      <div className="w-full">
        <h1 className="font-bold text-2xl underline text-sky-600">
          TENTANG SAYA
        </h1>
        <p className="text-justify text-sm">{myData.about}</p>
      </div>
      <div className="w-full">
        <h1 className="font-bold text-2xl underline text-sky-600">
          PENDIDIKAN FORMAL
        </h1>
        <div className="w-full flex flex-col gap-2 text-sm">
          {myData.education.formal.map((frm, index) => (
            <div
              key={index}
              className="w-full flex justify-between items-center"
            >
              <div className="w-full flex flex-col">
                <p className="w-full border-b border-sky-600 font-black uppercase">
                  {frm.school}
                  {frm.major != null ? " (" + frm.major + ")" : ""}
                </p>
                <p className="text-gray-700">{frm.location}</p>
              </div>
              <div className="w-[22%] h-full flex justify-start items-center px-2">
                {frm.in} -{frm.out}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full">
        <h1 className="font-bold text-2xl underline text-sky-600">
          PENDIDIKAN NON FORMAL
        </h1>
        <div className="w-full flex flex-col gap-2 text-xs">
          {myData.education.nonformal.map((nfrm, index) => (
            <div
              key={index}
              className="w-full flex justify-between items-center"
            >
              <div className="w-full flex flex-col">
                <p className="w-full border-b border-sky-600 font-black uppercase">
                  {nfrm.title}
                </p>
                <p className="text-gray-700">{nfrm.organizer}</p>
              </div>
              <div className="w-[28%] h-full flex justify-start items-center px-2">
                {nfrm.time}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full">
        <h1 className="font-bold text-2xl underline text-sky-600">
          PENGALAMAN KERJA
        </h1>
        <div className="w-full flex flex-col gap-2 text-xs">
          {myData.experience.map((exp, index) => (
            <div
              key={index}
              className="w-full flex justify-between items-center"
            >
              <div className="w-full flex flex-col">
                <p className="w-full border-b border-sky-600 font-black uppercase">
                  {exp.job}
                </p>
                <p className="text-gray-700">{exp.company}</p>
              </div>
              <div className="w-[36%] h-full flex justify-start items-center px-2">
                {exp.time2}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
