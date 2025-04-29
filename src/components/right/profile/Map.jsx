const Map = ({myData}) => {
    const fullAddress = `${myData.address.street}, ${myData.address.village}, Kec. ${myData.address.subdistrict}, ${myData.address.city}, ${myData.address.postalCode} `;
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden w-full p-6">
            <h1 className="text-3xl font-bold text-blue-600">
                <i className="bi-geo-alt me-2"></i>Lokasi
            </h1>
            <iframe src={myData.address.gmap} className="mt-6 rounded-lg" loading="lazy" width="100%" height="250"></iframe>
            <p className="w-full text-center mt-3 text-gray-700 cursor-default">{fullAddress}</p>
        </div>
    );
}

export default Map
