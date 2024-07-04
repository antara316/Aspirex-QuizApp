// server/routes/quizRoutes.js
import express from "express";
const router = express.Router();
import quizController from"../controllers/quizController.js";

router.post("/create", quizController.createQuiz);
router.get("/all", quizController.getAllQuizzes);
router.get("/:id", quizController.getQuizById);
router.post("/:id/submit", quizController.submitQuiz);
export default router;
