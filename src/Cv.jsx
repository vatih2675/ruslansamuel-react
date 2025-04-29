import { myData } from "./constants/index";
import { formatTanggal } from "./constants/functions";
import Left from "./components/CV/Left";
import Right from "./components/CV/Right";

export default function Cv() {
  const myAddress =
    myData.address.street +
    ", " +
    myData.address.village +
    ", " +
    myData.address.subdistrict +
    ", " +
    myData.address.city +
    " " +
    myData.address.postalCode;

  return (
    <section className="w-full sm:w-[210mm] h-full sm:h-[297mm] bg-white mx-auto shadow-md p-10 flex justify-start items-start overflow-hidden">
      <Left
        myData={myData}
        myAddress={myAddress}
        formatTanggal={formatTanggal}
      />
      <Right myData={myData} />
    </section>
  );
}
