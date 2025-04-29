const Hoby = ({myData}) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden w-full p-6">
        <h1 className="text-3xl font-bold text-blue-600">
        <i className="bi-bullseye me-2"></i>Hobi
        </h1>
        <div className="flex justify-evenly items-center w-full mt-6">
        {myData.hobies.map((hobi, index) => (
            <div key={index} className="flex flex-col justify-center items-center text-gray-600 cursor-default hover:text-blue-500 hover:scale-115 transition-all duration-200">
                <i className={`bi-${hobi.icon} text-4xl`}></i>
                <span>{hobi.hoby}</span>
            </div>
        ))}
        </div>
    </div>
  )
}

export default Hoby
