import { Suspense } from "react";
import Loading from "./components/loading";
import AmazonPrimeMovies from "./components/amazonPrimeMovies";
import PopularMovies from "./components/popularMovies";
import MoviesOfTheMonth from "./components/moviesOfTheMonth";
export default async function Index() {
  //

  return (
    <>
      <Suspense fallback={<Loading />}>
        <PopularMovies />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <AmazonPrimeMovies />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <MoviesOfTheMonth />
      </Suspense>
    </>
  );
}
