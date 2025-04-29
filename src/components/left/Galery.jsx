const Galery = ({galery}) => {
    return (
      <div className="bg-white rounded-lg shadow-md overflow-hidden w-full p-6 mt-6">
        <h1 className="text-3xl font-bold text-blue-600">
          <i className="bi-images me-2"></i>Galery
        </h1>
        <div className="flex flex-wrap justify-center items-start gap-3 mt-6">
          {galery.map((img, index) => (
            <img
              key={index}
              src={`/src/assets/images/albums/${img}`}
              alt="Albums"
              className="size-28 object-cover object-center rounded-md cursor-pointer hover:scale-120 transition-all duration-200 hover:shadow-lg"
            />
          ))}
        </div>
      </div>
    );
}

export default Galery
