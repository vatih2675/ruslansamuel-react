const Drawing = () => {
    return (
        <>
            <span className="p-4 rounded-xl border border-gray-200 text-gray-600 hover:border-blue-400 hover:text-blue-700 cursor-pointer hover:shadow-md transition-all duration-200">Kanvas Gambar</span>
            <section className={`fixed top-0 bottom-0 right-0 left-0 bg-gradient-to-r from-sky-200/75 via-sky-100/75 to-sky-200/75 hidden justify-center items-center transition-all duration-200 w-full h-screen opacity-100 z-30`}>
                <canvas id="canvas" className="w-full h-full bg-white"></canvas>
                <div className="nav fixed rounded-l-3xl right-0 p-3 flex flex-col gap-3 bg-gray-200 ring-4 ring-gray-400">
                    <div className="clr w-7 h-7 ring-2 ring-white rounded-full hover:scale-125 duration-300" data-clr="#000000"></div>
                    <div className="clr w-7 h-7 ring-2 ring-white rounded-full hover:scale-125 duration-300" data-clr="#ef626c"></div>
                    <div className="clr w-7 h-7 ring-2 ring-white rounded-full hover:scale-125 duration-300" data-clr="#fdec03"></div>
                    <div className="clr w-7 h-7 ring-2 ring-white rounded-full hover:scale-125 duration-300" data-clr="#24d102"></div>
                    <div className="clr w-7 h-7 ring-2 ring-gray-400 rounded-full hover:scale-125 duration-300" data-clr="#ffffff"></div>
                    <span className="border border-gray-400 my-1"></span>
                    <button className="save w-7 h-7 ring-2 ring-white rounded-full hover:scale-125 duration-300 bg-sky-700 text-white"><i className="bi bi-download"></i></button>
                    <button className="clear w-7 h-7 ring-2 ring-white rounded-full hover:scale-125 duration-300 bg-red-500 text-white" id="drawingSectionClose"><i className="bi bi-x-lg"></i></button>
                </div>
            </section>
        </>
    );
}

export default Drawing
