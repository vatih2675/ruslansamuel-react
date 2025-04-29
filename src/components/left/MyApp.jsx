import Bmi from "./app/Bmi";
import Calculator from "./app/Calculator";
import Drawing from "./app/Drawing";

const MyApp = () => {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden w-full p-6 mt-6">
            <h1 className="text-3xl font-bold text-blue-600">
                <i className="bi-app-indicator me-2"></i>Aplikasi
            </h1>
            <div className="flex flex-wrap justify-center items-start gap-3 mt-6">
                <Calculator />
                {/* <Bmi /> */}
                <Drawing />
            </div>
        </div>
    );
}

export default MyApp
