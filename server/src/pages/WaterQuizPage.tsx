import QuizExperience from '../components/QuizExperience';
import { getWaterLesson } from '../data/waterLessons';
import { waterQuizzes } from '../data/waterQuizzes';
import NotFoundPage from './NotFoundPage';

type Props = { lessonId: string };

export default function WaterQuizPage({ lessonId }: Props) {
  const lesson = getWaterLesson(lessonId);
  const questions = waterQuizzes[lessonId];
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
