const Formal = ({myData}) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden w-full p-6">
      <h1 className="text-3xl font-bold text-blue-600">
        <i className="bi-book me-2"></i>Pendidikan Formal
      </h1>
      <div className="flex flex-col justify-center items-center w-full mt-6 gap-4">
        {myData.education.formal.map((formal, index) => (
          <div key={index} className="flex justify-start items-center text-gray-500 cursor-default gap-4 w-full">
            <img src={`src/assets/images/bg/${formal.image}`} alt="Image" className="size-20 object-cover object-center rounded-md" />
            <div className="flex flex-col justify-center items-start gap-1">
              <h1 className="font-bold text-3xl text-gray-800 hover:text-blue-600 transition-all duration-200 cursor-pointer">{formal.school}</h1>
              <div className="flex justify-start items-center gap-4 text-sm">
                <span className={formal.major == null ? 'hidden' : 'inline-block'}><i className="bi-bookmark-star"></i> Jurusan {formal.major}</span>
                <span><i className="bi-geo-alt"></i> {formal.location}</span>
                <span><i className="bi-calendar-check"></i> {formal.in} - {formal.out}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Formal
