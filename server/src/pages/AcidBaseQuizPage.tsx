import QuizExperience from '../components/QuizExperience';
import { acidsBasesSaltsQuizzes } from '../data/acidsBasesSaltsQuizzes';
import { getAcidsBasesSaltsLesson } from '../data/acidsBasesSaltsLessons';
import NotFoundPage from './NotFoundPage';

type Props = { lessonId: string };

export default function AcidBaseQuizPage({ lessonId }: Props) {
  const lesson = getAcidsBasesSaltsLesson(lessonId);
  const questions = acidsBasesSaltsQuizzes[lessonId];
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
