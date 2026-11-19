import QuizExperience from '../components/QuizExperience';
import { scientificMethodQuiz } from '../data/scientificMethodQuiz';

export default function ScientificMethodQuizPage() {
  return <QuizExperience questions={scientificMethodQuiz} lessonPath="/lessons/scientific-method" lessonTitle="The Scientific Method" description="Ten questions on investigation, hypotheses, predictions, variables and evidence." sidebarTip="For an experiment, ask what is changed, what is measured and what is kept the same." />;
}
