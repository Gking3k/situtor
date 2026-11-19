import QuizExperience from '../components/QuizExperience';
import { gasLawsQuizzes } from '../data/gasLawsQuizzes';
import { getGasLawsLesson } from '../data/gasLawsLessons';
import NotFoundPage from './NotFoundPage';

type Props = { lessonId: string };

export default function GasLawsQuizPage({ lessonId }: Props) {
  const lesson = getGasLawsLesson(lessonId);
  const questions = gasLawsQuizzes[lessonId];
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
