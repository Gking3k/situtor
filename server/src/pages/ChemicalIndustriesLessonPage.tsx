import { useParams } from 'react-router-dom';
import CurriculumLessonLayout from '../components/CurriculumLessonLayout';
import { getChemicalIndustriesLesson } from '../data/chemicalIndustriesLessons';
import NotFoundPage from './NotFoundPage';

export default function ChemicalIndustriesLessonPage() {
  const { lessonId } = useParams<{ lessonId: string }>();
  const lesson = getChemicalIndustriesLesson(lessonId);

  if (!lesson) return <NotFoundPage />;

  return (
    <CurriculumLessonLayout
      unitNumber="02"
      unitTitle="Chemical Industries"
      lessonNumber={lesson.lessonNumber}
      lessonTitle={lesson.title}
      titleLead={lesson.titleLead}
      titleAccent={lesson.titleAccent}
      summary={lesson.summary}
      duration={lesson.duration}
      learningObjectives={lesson.learningObjectives}
      sections={lesson.sections}
      recap={lesson.recap}
      quizPath={lesson.quizPath}
      quizDescription={lesson.quizDescription}
      sidebarTip={lesson.sidebarTip}
      sources={lesson.sources}
      nextLesson={lesson.nextLesson}
    />
  );
}
