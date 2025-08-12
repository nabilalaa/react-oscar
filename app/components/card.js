export default function Card({ title, body, image }) {
    return (
        <div className="flex-shrink-0 rounded-3xl shadow-sm  w-[300px] relative h-[500px]">
            <div className="bg-amber-100/50 absolute bg- w-full h-full"></div>
            <img
                src={`https://image.tmdb.org/t/p/w500${image}`}
                className="rounded-t-3xl justify-center h-56 w-full grid object-cover"
                alt="movie.title"
            />
            <div className="group px-5 py-3 grid z-10">
                <h2
                    href="#"
                    className="group-hover:text-cyan-700 font-bold md:text-2xl line-clamp-2"
                >
                    {title}
                </h2>
                <span className="text-slate-400 pt-2 font-semibold">
                    (2023)
                </span>
                <div className="h-14">
                    {/* <span className="line-clamp-3 py-2 h-14  text-sm font-light leading-relaxed">
                        {body}
                    </span> */}
                </div>
                <div className=" grid-cols-2 flex group justify-between">
                    <div className="font-black flex flex-col">
                        <span className="text-yellow-500 text-xl">
                            IMDB SCORE
                        </span>
                        <span className="text-3xl flex gap-x-1 items-center group-hover:text-yellow-600">
                            8.8
                        </span>
                    </div>
                    <div className="flex flex-col items-end">
                        <div className="h-7" />
                        <span className="text-3xl  font-bold  gap-x-2 text-slate-300">
                            # 8
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
