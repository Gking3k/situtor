import QuizExperience from '../components/QuizExperience';
import { carbonCompoundsQuizzes } from '../data/carbonCompoundsQuizzes';
import { getCarbonCompoundsLesson } from '../data/carbonCompoundsLessons';
import NotFoundPage from './NotFoundPage';

type Props = { lessonId: string };

export default function CarbonCompoundsQuizPage({ lessonId }: Props) {
  const lesson = getCarbonCompoundsLesson(lessonId);
  const questions = carbonCompoundsQuizzes[lessonId];
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
