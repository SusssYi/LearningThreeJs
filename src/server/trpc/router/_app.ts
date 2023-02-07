import { router } from "../trpc";
import { exampleRouter } from "./example";
import { moviesRouter } from "./movies";

export const appRouter = router({
  example: exampleRouter,
  movies: moviesRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
