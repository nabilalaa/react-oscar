import React from "react";
import Card from "./card";
export default async function PopularMovies() {
  const response = await fetch(
    "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",

    {
      next: {
        revalidate: 86400,
      },
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NDE2ZmExMzA2YWM2ZTg0OGYyYjU5OTIwMWUxNWU1NSIsIm5iZiI6MTY4Nzg3MjM4MS4yNDQsInN1YiI6IjY0OWFlMzdkYTZkZGNiMDBjNjllZDI2YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PPPAW-ROhWjlbGsNsObG86vUC8YMKJqWBrg7oYyb_Fk",
      },
    }
  );
  const movies = await response.json();
  return (
    <>
      <div className="flex justify-between items-center my-8">
        <div className="flex items-center">
          <div className="provider ml-4"> الافلام الشائعة </div>
        </div>
        <a className="p-2 px-4 rounded-xl border-2 border-[#fca311] text-xs font-bold hover:bg-[#fca311] hover:text-[#14213d]">
          شاهد المزيد
        </a>
      </div>
      <section className="flex  gap-3.5 overflow-x-auto ">
        {movies.results.map((movie) => {
          return (
            <Card
              key={movie.id}
              href={movie.id}
              title={movie.title}
              body={movie.overview}
              release_date={movie.release_date}
              vote_average={movie.vote_average}
              image={
                movie.poster_path ? movie.poster_path : movie.backdrop_path
              }
            />
          );
        })}
      </section>
    </>
  );
}
