const Skills = ({myData}) => {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden w-full px-6 pt-6 pb-3">
            <h1 className="text-3xl font-bold text-blue-600">
                <i className="bi-bullseye me-2"></i>Skill / Keahlian
            </h1>
            <div className="flex flex-wrap justify-center items-center w-full mt-3">
                {myData.skills.map((skl, index) => (
                <div key={index} className="flex w-2/12 flex-col justify-center items-center text-gray-600 cursor-default hover:text-blue-500 hover:scale-115 transition-all duration-200 my-3">
                    <i className={`bi-${skl.icon} text-4xl`}></i>
                    <span className="text-sm">{skl.skill}</span>
                </div>
                ))}
            </div>
        </div>
    );
}

export default Skills
