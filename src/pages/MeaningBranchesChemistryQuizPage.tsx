import QuizExperience from '../components/QuizExperience';
import { meaningBranchesChemistryQuiz } from '../data/meaningBranchesChemistryQuiz';

export default function MeaningBranchesChemistryQuizPage() {
  return (
    <QuizExperience
      questions={meaningBranchesChemistryQuiz}
      lessonPath="/lessons/meaning-branches-importance-chemistry"
      lessonTitle="Meaning, Branches & Importance of Chemistry"
      description="Ten questions on what chemistry studies, its five traditional branches and its importance in everyday life. There is no timer."
      sidebarTip="Start by identifying the question being asked: what is a substance made of, what does it do, or how does it change? Then think about which branch of chemistry studies that question."
    />
  );
}
