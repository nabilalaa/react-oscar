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
    const Amazon = await fetch(
        "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&page=1&sort_by=popularity.desc&with_companies=210099",
        {
            headers: {
                accept: "application/json",
                Authorization:
                    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NDE2ZmExMzA2YWM2ZTg0OGYyYjU5OTIwMWUxNWU1NSIsIm5iZiI6MTY4Nzg3MjM4MS4yNDQsInN1YiI6IjY0OWFlMzdkYTZkZGNiMDBjNjllZDI2YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PPPAW-ROhWjlbGsNsObG86vUC8YMKJqWBrg7oYyb_Fk",
            },
        }
    );
    const resultsAmazon = await Amazon.json();

    console.log(resultsAmazon);
    https: return (
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
            <h2>amazon movies</h2>
            <section className="flex  gap-3.5 overflow-x-auto py-14">
                {resultsAmazon.results.map((movie) => {
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
        </>
    );
}
