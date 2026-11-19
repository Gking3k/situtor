import QuizExperience from '../components/QuizExperience';
import { separationTechniquesQuizzes } from '../data/separationTechniquesQuizzes';
import { getSeparationTechniquesLesson } from '../data/separationTechniquesLessons';
import NotFoundPage from './NotFoundPage';

export default function SeparationTechniquesQuizPage({ lessonId }: { lessonId: string }) {
  const lesson = getSeparationTechniquesLesson(lessonId);
  const questions = separationTechniquesQuizzes[lessonId];

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
