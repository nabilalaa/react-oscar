import React from "react";
import Card from "./card";
export default function Carousel({ data }) {
    return (
        <section className="flex  gap-3.5 overflow-x-auto ">
            {data.map((movie) => {
                return (
                    <Card
                        key={movie.id}
                        href={movie.id}
                        title={movie.title}
                        body={movie.overview}
                        release_date={movie.release_date}
                        vote_average={movie.vote_average}
                        image={movie.poster_path}
                    />
                );
            })}
        </section>
    );
}
