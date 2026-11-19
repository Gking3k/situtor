import QuizExperience from '../components/QuizExperience';
import { getParticulateNatureLesson } from '../data/particulateNatureLessons';
import { particulateNatureQuizzes } from '../data/particulateNatureQuizzes';
import NotFoundPage from './NotFoundPage';

export default function ParticulateNatureQuizPage({ lessonId }: { lessonId: string }) {
  const lesson = getParticulateNatureLesson(lessonId);
  const questions = particulateNatureQuizzes[lessonId];
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
