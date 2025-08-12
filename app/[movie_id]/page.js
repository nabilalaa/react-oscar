const Movie = async ({ params }) => {
    const { movie_id } = await params;
    const dataMovies = await fetch(
        `https://api.themoviedb.org/3/movie/${movie_id}`,
        {
            headers: {
                accept: "application/json",
                Authorization:
                    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NDE2ZmExMzA2YWM2ZTg0OGYyYjU5OTIwMWUxNWU1NSIsIm5iZiI6MTY4Nzg3MjM4MS4yNDQsInN1YiI6IjY0OWFlMzdkYTZkZGNiMDBjNjllZDI2YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PPPAW-ROhWjlbGsNsObG86vUC8YMKJqWBrg7oYyb_Fk",
            },
        }
    );
    const movie = await dataMovies.json();

    const dataCredits = await fetch(
        `https://api.themoviedb.org/3/movie/${movie_id}/credits`,
        {
            headers: {
                accept: "application/json",
                Authorization:
                    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NDE2ZmExMzA2YWM2ZTg0OGYyYjU5OTIwMWUxNWU1NSIsIm5iZiI6MTY4Nzg3MjM4MS4yNDQsInN1YiI6IjY0OWFlMzdkYTZkZGNiMDBjNjllZDI2YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PPPAW-ROhWjlbGsNsObG86vUC8YMKJqWBrg7oYyb_Fk",
            },
        }
    );

    const { cast } = await dataCredits.json();

    return (
        <>
            <header
                className="w-full bg-center bg-cover relative text-white"
                style={{
                    backgroundImage: `url(
                    "https://image.tmdb.org/t/p/original${movie.backdrop_path}"
                )`,
                }}
            >
                <div className="overlay w-full h-full bg-amber-300/50 ">
                    <section className="about p-4 mt-14 w-full h-full">
                        <div className="container">
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-[20%_80%] gap-8">
                                <div className="m-auto">
                                    <img
                                        className=""
                                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                        alt=""
                                    />
                                </div>
                                <div className="flex flex-col justify-center">
                                    <h1 className="mb-4">{movie.title}</h1>
                                    <p className="mb-4">{movie.overview}</p>
                                    <p className="mb-4">
                                        <span className="text-mainColor text-xl capitalize">
                                            الميزانية :{" "}
                                        </span>{" "}
                                        5
                                    </p>
                                    <p className="mb-4">
                                        <span className="text-mainColor text-xl capitalize">
                                            تاريخ الانتاج :{" "}
                                        </span>{" "}
                                        2025-07-29
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </header>
            <section className="credits mt-8">
                <div className="container">
                    <div className="grid grid-cols-[repeat(auto-fit,minmax(170px,1fr))] gap-4">
                        {cast.slice(0, 10).map((actor) => {
                            return (
                                <div
                                    key={actor.id}
                                    className="credit rounded-2xl bg-amber-300"
                                >
                                    <img
                                        className={`p-2 rounded-tl-2xl rounded-tr-2xl ${
                                            actor.profile_path ||
                                            "h-[323px] object-cover"
                                        }`}
                                        src={
                                            actor.profile_path
                                                ? `https://image.tmdb.org/t/p/w500${actor.profile_path}`
                                                : "https://media.istockphoto.com/id/1327592506/vector/default-avatar-photo-placeholder-icon-grey-profile-picture-business-man.jpg?s=612x612&w=0&k=20&c=BpR0FVaEa5F24GIw7K8nMWiiGmbb8qmhfkpXcp1dhQg="
                                        }
                                        alt=""
                                    />
                                    <p className="p-2 text-white font-bold text-center">
                                        {actor.name}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Movie;
