import QuizExperience from '../components/QuizExperience';
import { hydrocarbonsQuizzes } from '../data/hydrocarbonsQuizzes';
import { getHydrocarbonsLesson } from '../data/hydrocarbonsLessons';
import NotFoundPage from './NotFoundPage';

type Props = { lessonId: string };

export default function HydrocarbonsQuizPage({ lessonId }: Props) {
  const lesson = getHydrocarbonsLesson(lessonId);
  const questions = hydrocarbonsQuizzes[lessonId];
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
