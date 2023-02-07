import { publicProcedure, router } from "../trpc";

export const moviesRouter = router({
  getPopularMovies: publicProcedure.query(async () => {
    return {
      data: "some",
    };
  }),
});
