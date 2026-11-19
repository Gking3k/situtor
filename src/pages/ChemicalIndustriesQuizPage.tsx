import { useParams } from 'react-router-dom';
import QuizExperience from '../components/QuizExperience';
import { chemicalIndustriesQuizzes } from '../data/chemicalIndustriesQuizzes';
import { getChemicalIndustriesLesson } from '../data/chemicalIndustriesLessons';
import NotFoundPage from './NotFoundPage';

export default function ChemicalIndustriesQuizPage() {
  const { lessonId } = useParams<{ lessonId: string }>();
  const lesson = getChemicalIndustriesLesson(lessonId);
  const questions = lessonId ? chemicalIndustriesQuizzes[lessonId] : undefined;

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
