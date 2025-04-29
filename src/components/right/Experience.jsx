const Experience = ({myData}) => {
    return (
      <div className="bg-white rounded-lg shadow-md overflow-hidden w-full p-6">
        <h1 className="text-3xl font-bold text-blue-600">
          <i className="bi-person-workspace me-2"></i>Pengalaman Kerja
        </h1>
        <div className="flex flex-col justify-center items-center w-full mt-6 gap-4">
          {myData.experience.map((experience, index) => (
            <div
              key={index}
              className="flex justify-start items-center text-gray-500 cursor-default gap-4 w-full"
            >
              <img
                src={`images/bg/${experience.image}`}
                alt="Image"
                className="size-20 object-cover object-center rounded-md"
              />
              <div className="flex flex-col justify-center items-start gap-1">
                <h1 className="font-bold text-xl text-gray-800 hover:text-blue-600 transition-all duration-200 cursor-pointer">
                  {experience.job}
                </h1>
                <div className="flex justify-start items-center gap-4 text-sm">
                  <span>
                    <i className="bi-buildings"></i> {experience.company}
                  </span>
                  <span>
                    <i className="bi-calendar-check"></i> {experience.time}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
}

export default Experience
