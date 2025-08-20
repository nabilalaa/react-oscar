import Link from "next/link";

export default function Card({
  title,
  body,
  image,
  href,
  release_date,
  vote_average,
}) {
  return (
    <Link
      href={`${href}`}
      className="group  flex-shrink-0 rounded-3xl shadow-sm overflow-hidden  w-[250px]  relative"
    >
      {/* <div className="bg-amber-100/50 absolute bg- w-full h-full"></div> */}
      <img
        src={
          image
            ? `https://image.tmdb.org/t/p/w500${image}`
            : "https://placehold.co/600x400"
        }
        className="rounded-3xl h-full justify-center w-full grid object-cover"
        alt="movie.title"
      />
      <div className=" px-5 py-3 rounded-3xl absolute h-1/2 flex flex-col justify-evenly  -bottom-[100%] transition-all group-hover:bottom-0  w-full mainColor z-10">
        <h2 href="#" className=" font-bold md:text-2xl line-clamp-2">
          {title}
        </h2>
        <span className="text-[#14213d] pt-2 font-semibold">
          {release_date}
        </span>

        <div className=" grid-cols-2 flex  justify-between">
          <div className="font-black flex flex-col">
            <span className=" text-xl">IMDB SCORE</span>
            <span className="text-3xl flex gap-x-1 items-center">
              {/* {vote_average} */}
              {Number(vote_average).toFixed(1)}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
