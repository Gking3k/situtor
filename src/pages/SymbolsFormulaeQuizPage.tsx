import QuizExperience from '../components/QuizExperience';
import { getSymbolsFormulaeLesson } from '../data/symbolsFormulaeLessons';
import { symbolsFormulaeQuizzes } from '../data/symbolsFormulaeQuizzes';
import NotFoundPage from './NotFoundPage';

type Props = { lessonId: string };

export default function SymbolsFormulaeQuizPage({ lessonId }: Props) {
  const lesson = getSymbolsFormulaeLesson(lessonId);
  const questions = symbolsFormulaeQuizzes[lessonId];
  if (!lesson || !questions) return <NotFoundPage />;

  return (
    <QuizExperience
      questions={questions}
      lessonPath={`/lessons/${lesson.id}`}
      lessonTitle={lesson.title}
      description={lesson.quiz.description}
      sidebarTip={lesson.quiz.sidebarTip}
      artLabel={lesson.quiz.artLabel}
      artCaption={lesson.quiz.artCaption}
    />
  );
}
