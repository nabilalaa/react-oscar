import Link from "next/link";
import Card from "./components/card";
import { Suspense } from "react";
import Loading from "./components/loading";
export default async function Index() {
    const data = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
        {
            headers: {
                accept: "application/json",
                Authorization:
                    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NDE2ZmExMzA2YWM2ZTg0OGYyYjU5OTIwMWUxNWU1NSIsIm5iZiI6MTY4Nzg3MjM4MS4yNDQsInN1YiI6IjY0OWFlMzdkYTZkZGNiMDBjNjllZDI2YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PPPAW-ROhWjlbGsNsObG86vUC8YMKJqWBrg7oYyb_Fk",
            },
        }
    );
    const { results } = await data.json();

    // console.log(movies);
    return (
        <>
            <h2>movies</h2>
            <Suspense fallback={<Loading />}>
                <section className="flex  gap-3.5 overflow-x-auto py-14">
                    {results.map((movie) => {
                        return (
                            <Link key={movie.id} href={`${movie.id}`}>
                                <Card
                                    title={movie.title}
                                    body={movie.title}
                                    image={movie.backdrop_path}
                                />
                            </Link>
                        );
                    })}
                </section>
            </Suspense>
        </>
    );
}
