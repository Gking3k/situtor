import QuizExperience from '../components/QuizExperience';
import { chemicalHazardsSafetyQuiz } from '../data/chemicalHazardsSafetyQuiz';

export default function ChemicalHazardsSafetyQuizPage() {
  return <QuizExperience questions={chemicalHazardsSafetyQuiz} lessonPath="/lessons/chemical-effects-and-safety" lessonTitle="Chemical Hazards, Safety and Environmental Effects" description="Ten questions on exposure, chemical effects, laboratory safety and environmental protection." sidebarTip="For each scenario, identify the possible harm and the safest authorised action." />;
}
