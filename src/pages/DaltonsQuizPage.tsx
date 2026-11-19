import QuizExperience from '../components/QuizExperience';
import { daltonsAtomicTheoryQuiz } from '../data/daltonsAtomicTheoryQuiz';

export default function DaltonsQuizPage() {
  return (
    <QuizExperience
      questions={daltonsAtomicTheoryQuiz}
      lessonPath="/lessons/daltons-atomic-theory"
      lessonTitle="Dalton’s Atomic Theory"
      description="Twelve questions on Dalton’s postulates, experimental evidence, isotope reasoning and the difference between chemical and nuclear changes. There is no timer."
      sidebarTip="Remember to separate Dalton’s original ideas from what later experiments taught scientists about the atom."
    />
  );
}
