import { Suspense } from "react";
import Loading from "./components/loading";
import Carousel from "./components/Carousel";
export default async function Index() {
    const responseNowPlaying = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
        {
            headers: {
                accept: "application/json",
                Authorization:
                    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NDE2ZmExMzA2YWM2ZTg0OGYyYjU5OTIwMWUxNWU1NSIsIm5iZiI6MTY4Nzg3MjM4MS4yNDQsInN1YiI6IjY0OWFlMzdkYTZkZGNiMDBjNjllZDI2YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PPPAW-ROhWjlbGsNsObG86vUC8YMKJqWBrg7oYyb_Fk",
            },
        }
    );
    const dataNowPlaying = await responseNowPlaying.json();

    const responseAmazonPrime = await fetch(
        "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&page=1&sort_by=popularity.desc&with_companies=210099",
        {
            headers: {
                accept: "application/json",
                Authorization:
                    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NDE2ZmExMzA2YWM2ZTg0OGYyYjU5OTIwMWUxNWU1NSIsIm5iZiI6MTY4Nzg3MjM4MS4yNDQsInN1YiI6IjY0OWFlMzdkYTZkZGNiMDBjNjllZDI2YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PPPAW-ROhWjlbGsNsObG86vUC8YMKJqWBrg7oYyb_Fk",
            },
        }
    );
    const dataAmazonPrime = await responseAmazonPrime.json();

    // console.log("----" + resultsAmazon);

    return (
        <>
            <div className="flex justify-between items-center ">
                <div className="flex items-center">
                    <div className="provider py-8 ml-4"> الافلام الشائعة </div>
                </div>
                <a className="p-2 px-4 rounded-xl border-2 border-[#fca311] text-xs font-bold hover:bg-[#fca311] hover:text-[#14213d]">
                    شاهد المزيد
                </a>
            </div>
            <div className="relative">
                <Suspense fallback={<Loading />}>
                    <Carousel data={dataNowPlaying.results} />
                </Suspense>
            </div>
            <div className="flex justify-between items-center ">
                <div className="flex items-center">
                    <div className="provider py-8 ml-4 capitalize">
                        افلام amazon prime
                    </div>
                </div>
                <a className="p-2 px-4 rounded-xl border-2 border-[#fca311] text-xs font-bold hover:bg-[#fca311] hover:text-[#14213d]">
                    شاهد المزيد
                </a>
            </div>
            <div className="relative">
                <Suspense fallback={<Loading />}>
                    <Carousel data={dataAmazonPrime.results} />
                </Suspense>
            </div>
        </>
    );
}
