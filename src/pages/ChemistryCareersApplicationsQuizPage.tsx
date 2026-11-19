import QuizExperience from '../components/QuizExperience';
import { chemistryCareersQuiz } from '../data/chemistryCareersQuiz';

export default function ChemistryCareersApplicationsQuizPage() {
  return <QuizExperience questions={chemistryCareersQuiz} lessonPath="/lessons/chemistry-careers-and-applications" lessonTitle="Careers and Applications of Chemistry" description="Ten questions on chemistry careers, workplaces and practical applications." sidebarTip="Match each career or application to the kind of question it helps answer." />;
}
