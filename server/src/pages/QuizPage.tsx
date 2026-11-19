import QuizExperience from '../components/QuizExperience';
import { atomsIonsMoleculesQuiz } from '../data/atomsIonsMoleculesQuiz';

export default function QuizPage() {
  return (
    <QuizExperience
      questions={atomsIonsMoleculesQuiz}
      lessonPath="/lessons/atoms-ions-molecules"
      lessonTitle="Atoms, Ions & Molecules"
      description="Twelve questions that test definitions, particle reasoning, formula interpretation and multi-step ion calculations. Take your time — there is no timer."
      sidebarTip="Read each question carefully. Think about what changes — and what stays the same — when an atom becomes an ion."
    />
  );
}
