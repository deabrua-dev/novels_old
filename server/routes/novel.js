import { Router } from "express";
import {
  getAll,
  getCount,
  createNovel,
  reviewOnNovel,
  addStarRating,
  getNovels,
  searchForNovel,
  getNovel,
  addViewCount,
  getReviews,
  getGenres,
  savedUnSavedByUser,
  getNovelsByAuthor,
  getNovelsByYear,
  countByYear,
  countByAuthor,
  updateNovel,
  countSearch,
} from "../controllers/novel.js";
import { checkAuth } from "../middleware/checkAuth.js";

const router = Router();

router.get("/all", getAll);
router.get("/count", getCount);

router.get("/novels", getNovels);
router.get("/get/:id", getNovel);
router.get("/reviews/:id", getReviews);
router.get("/genres/:id", getGenres);

router.get("/year/:year", getNovelsByYear);
router.get("/author/:author", getNovelsByAuthor);

router.get("/countByYear/:year", countByYear);
router.get("/countByAuthor/:author", countByAuthor);
router.get("/search/:searchQuery", searchForNovel);
router.get("/countSearch/:searchQuery", countSearch);

router.post("/addViewCount/:id", addViewCount);
router.post("/create", checkAuth, createNovel);
router.post("/update/:id", checkAuth, updateNovel);
router.post("/save/:id", checkAuth, savedUnSavedByUser);
router.post("/unsave/:id", checkAuth, savedUnSavedByUser);
router.post("/review/:id", checkAuth, reviewOnNovel);
router.post("/rating/:id", checkAuth, addStarRating);

export default router;
