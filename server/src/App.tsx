import { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import SiteFooter from './components/SiteFooter';
import SiteHeader from './components/SiteHeader';
import AboutPage from './pages/AboutPage';
import DaltonsAtomicTheoryPage from './pages/DaltonsAtomicTheoryPage';
import DaltonsQuizPage from './pages/DaltonsQuizPage';
import ContactPage from './pages/ContactPage';
import ChemistryCareersApplicationsPage from './pages/ChemistryCareersApplicationsPage';
import ChemistryCareersApplicationsQuizPage from './pages/ChemistryCareersApplicationsQuizPage';
import ChemicalHazardsSafetyPage from './pages/ChemicalHazardsSafetyPage';
import ChemicalHazardsSafetyQuizPage from './pages/ChemicalHazardsSafetyQuizPage';
import ChemicalIndustriesLessonPage from './pages/ChemicalIndustriesLessonPage';
import ChemicalIndustriesQuizPage from './pages/ChemicalIndustriesQuizPage';
import ChemicalCombinationLessonPage from './pages/ChemicalCombinationLessonPage';
import ChemicalCombinationQuizPage from './pages/ChemicalCombinationQuizPage';
import GasLawsLessonPage from './pages/GasLawsLessonPage';
import GasLawsQuizPage from './pages/GasLawsQuizPage';
import WaterLessonPage from './pages/WaterLessonPage';
import WaterQuizPage from './pages/WaterQuizPage';
import CarbonCompoundsLessonPage from './pages/CarbonCompoundsLessonPage';
import CarbonCompoundsQuizPage from './pages/CarbonCompoundsQuizPage';
import HydrocarbonsLessonPage from './pages/HydrocarbonsLessonPage';
import HydrocarbonsQuizPage from './pages/HydrocarbonsQuizPage';
import AcidBaseLessonPage from './pages/AcidBaseLessonPage';
import AcidBaseQuizPage from './pages/AcidBaseQuizPage';
import ExplorePage from './pages/ExplorePage';
import FaqPage from './pages/FaqPage';
import HomePage from './pages/HomePage';
import LessonPreviewPage from './pages/LessonPreviewPage';
import MeaningBranchesChemistryPage from './pages/MeaningBranchesChemistryPage';
import MeaningBranchesChemistryQuizPage from './pages/MeaningBranchesChemistryQuizPage';
import NotFoundPage from './pages/NotFoundPage';
import ParticulateNatureLessonPage from './pages/ParticulateNatureLessonPage';
import ParticulateNatureQuizPage from './pages/ParticulateNatureQuizPage';
import PrivacyPage from './pages/PrivacyPage';
import ScientificMethodPage from './pages/ScientificMethodPage';
import ScientificMethodQuizPage from './pages/ScientificMethodQuizPage';
import SeparationTechniquesLessonPage from './pages/SeparationTechniquesLessonPage';
import SeparationTechniquesQuizPage from './pages/SeparationTechniquesQuizPage';
import SymbolsFormulaeLessonPage from './pages/SymbolsFormulaeLessonPage';
import SymbolsFormulaeQuizPage from './pages/SymbolsFormulaeQuizPage';
import QuizPage from './pages/QuizPage';
import RegisterPage from './pages/RegisterPage';
import VerifyEmailPage from './pages/VerifyEmailPage';
import LoginPage from './pages/LoginPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import ResetPasswordPage from './pages/ResetPasswordPage';
import StudentDashboardPage from './pages/StudentDashboardPage';
import AccountSettingsPage from './pages/AccountSettingsPage';
import { AuthProvider, RequireStudent } from './context/AuthContext';

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const targetId = hash.slice(1);
      requestAnimationFrame(() => document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' }));
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, [pathname, hash]);

  return null;
}

function AppRoutes() {
  return (
    <>
      <ScrollToTop />
      <SiteHeader />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/verify-email" element={<VerifyEmailPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/reset-password" element={<ResetPasswordPage />} />
        <Route path="/dashboard" element={<RequireStudent><StudentDashboardPage /></RequireStudent>} />
        <Route path="/account" element={<RequireStudent><AccountSettingsPage /></RequireStudent>} />
        <Route path="/explore" element={<ExplorePage />} />
        <Route path="/faqs" element={<FaqPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/lessons/meaning-branches-importance-chemistry" element={<MeaningBranchesChemistryPage />} />
        <Route path="/lessons/chemistry-careers-and-applications" element={<ChemistryCareersApplicationsPage />} />
        <Route path="/lessons/chemistry-careers-and-applications/quiz" element={<ChemistryCareersApplicationsQuizPage />} />
        <Route path="/lessons/chemical-effects-and-safety" element={<ChemicalHazardsSafetyPage />} />
        <Route path="/lessons/chemical-effects-and-safety/quiz" element={<ChemicalHazardsSafetyQuizPage />} />
        <Route path="/lessons/scientific-method" element={<ScientificMethodPage />} />
        <Route path="/lessons/scientific-method/quiz" element={<ScientificMethodQuizPage />} />
        <Route path="/lessons/meaning-branches-importance-chemistry/quiz" element={<MeaningBranchesChemistryQuizPage />} />
        <Route path="/lessons/atoms-ions-molecules" element={<LessonPreviewPage />} />
        <Route path="/lessons/daltons-atomic-theory" element={<DaltonsAtomicTheoryPage />} />
        <Route path="/lessons/daltons-atomic-theory/quiz" element={<DaltonsQuizPage />} />
        <Route path="/lessons/physical-and-chemical-changes/quiz" element={<ParticulateNatureQuizPage lessonId="physical-and-chemical-changes" />} />
        <Route path="/lessons/discovery-and-models-of-the-atom/quiz" element={<ParticulateNatureQuizPage lessonId="discovery-and-models-of-the-atom" />} />
        <Route path="/lessons/subatomic-particles/quiz" element={<ParticulateNatureQuizPage lessonId="subatomic-particles" />} />
        <Route path="/lessons/electron-arrangement/quiz" element={<ParticulateNatureQuizPage lessonId="electron-arrangement" />} />
        <Route path="/lessons/atomic-number-mass-number-isotopes/quiz" element={<ParticulateNatureQuizPage lessonId="atomic-number-mass-number-isotopes" />} />
        <Route path="/lessons/relative-atomic-mass/quiz" element={<ParticulateNatureQuizPage lessonId="relative-atomic-mass" />} />
        <Route path="/lessons/introductory-orbital-model/quiz" element={<ParticulateNatureQuizPage lessonId="introductory-orbital-model" />} />
        <Route path="/lessons/physical-and-chemical-changes" element={<ParticulateNatureLessonPage lessonId="physical-and-chemical-changes" />} />
        <Route path="/lessons/discovery-and-models-of-the-atom" element={<ParticulateNatureLessonPage lessonId="discovery-and-models-of-the-atom" />} />
        <Route path="/lessons/subatomic-particles" element={<ParticulateNatureLessonPage lessonId="subatomic-particles" />} />
        <Route path="/lessons/electron-arrangement" element={<ParticulateNatureLessonPage lessonId="electron-arrangement" />} />
        <Route path="/lessons/atomic-number-mass-number-isotopes" element={<ParticulateNatureLessonPage lessonId="atomic-number-mass-number-isotopes" />} />
        <Route path="/lessons/relative-atomic-mass" element={<ParticulateNatureLessonPage lessonId="relative-atomic-mass" />} />
        <Route path="/lessons/introductory-orbital-model" element={<ParticulateNatureLessonPage lessonId="introductory-orbital-model" />} />
        <Route path="/lessons/classifying-substances/quiz" element={<SeparationTechniquesQuizPage lessonId="classifying-substances" />} />
        <Route path="/lessons/filtration-decantation-evaporation/quiz" element={<SeparationTechniquesQuizPage lessonId="filtration-decantation-evaporation" />} />
        <Route path="/lessons/magnetic-separation-and-flotation/quiz" element={<SeparationTechniquesQuizPage lessonId="magnetic-separation-and-flotation" />} />
        <Route path="/lessons/crystallization/quiz" element={<SeparationTechniquesQuizPage lessonId="crystallization" />} />
        <Route path="/lessons/distillation/quiz" element={<SeparationTechniquesQuizPage lessonId="distillation" />} />
        <Route path="/lessons/chromatography-and-sublimation/quiz" element={<SeparationTechniquesQuizPage lessonId="chromatography-and-sublimation" />} />
        <Route path="/lessons/testing-purity/quiz" element={<SeparationTechniquesQuizPage lessonId="testing-purity" />} />
        <Route path="/lessons/classifying-substances" element={<SeparationTechniquesLessonPage lessonId="classifying-substances" />} />
        <Route path="/lessons/filtration-decantation-evaporation" element={<SeparationTechniquesLessonPage lessonId="filtration-decantation-evaporation" />} />
        <Route path="/lessons/magnetic-separation-and-flotation" element={<SeparationTechniquesLessonPage lessonId="magnetic-separation-and-flotation" />} />
        <Route path="/lessons/crystallization" element={<SeparationTechniquesLessonPage lessonId="crystallization" />} />
        <Route path="/lessons/distillation" element={<SeparationTechniquesLessonPage lessonId="distillation" />} />
        <Route path="/lessons/chromatography-and-sublimation" element={<SeparationTechniquesLessonPage lessonId="chromatography-and-sublimation" />} />
        <Route path="/lessons/testing-purity" element={<SeparationTechniquesLessonPage lessonId="testing-purity" />} />
        <Route path="/lessons/atoms-ions-molecules/quiz" element={<QuizPage />} />
        <Route path="/lessons/chemical-symbols-and-valency/quiz" element={<SymbolsFormulaeQuizPage lessonId="chemical-symbols-and-valency" />} />
        <Route path="/lessons/naming-compounds/quiz" element={<SymbolsFormulaeQuizPage lessonId="naming-compounds" />} />
        <Route path="/lessons/empirical-and-molecular-formulae/quiz" element={<SymbolsFormulaeQuizPage lessonId="empirical-and-molecular-formulae" />} />
        <Route path="/lessons/laws-of-chemical-combination/quiz" element={<SymbolsFormulaeQuizPage lessonId="laws-of-chemical-combination" />} />
        <Route path="/lessons/writing-and-balancing-equations/quiz" element={<SymbolsFormulaeQuizPage lessonId="writing-and-balancing-equations" />} />
        <Route path="/lessons/chemical-symbols-and-valency" element={<SymbolsFormulaeLessonPage lessonId="chemical-symbols-and-valency" />} />
        <Route path="/lessons/naming-compounds" element={<SymbolsFormulaeLessonPage lessonId="naming-compounds" />} />
        <Route path="/lessons/empirical-and-molecular-formulae" element={<SymbolsFormulaeLessonPage lessonId="empirical-and-molecular-formulae" />} />
        <Route path="/lessons/laws-of-chemical-combination" element={<SymbolsFormulaeLessonPage lessonId="laws-of-chemical-combination" />} />
        <Route path="/lessons/writing-and-balancing-equations" element={<SymbolsFormulaeLessonPage lessonId="writing-and-balancing-equations" />} />
        <Route path="/lessons/periodic-table-and-elements/quiz" element={<ChemicalCombinationQuizPage lessonId="periodic-table-and-elements" />} />
        <Route path="/lessons/electron-configuration/quiz" element={<ChemicalCombinationQuizPage lessonId="electron-configuration" />} />
        <Route path="/lessons/ionic-and-covalent-bonding/quiz" element={<ChemicalCombinationQuizPage lessonId="ionic-and-covalent-bonding" />} />
        <Route path="/lessons/coordinate-and-metallic-bonding/quiz" element={<ChemicalCombinationQuizPage lessonId="coordinate-and-metallic-bonding" />} />
        <Route path="/lessons/intermolecular-forces/quiz" element={<ChemicalCombinationQuizPage lessonId="intermolecular-forces" />} />
        <Route path="/lessons/states-and-kinetic-theory/quiz" element={<ChemicalCombinationQuizPage lessonId="states-and-kinetic-theory" />} />
        <Route path="/lessons/periodic-table-and-elements" element={<ChemicalCombinationLessonPage lessonId="periodic-table-and-elements" />} />
        <Route path="/lessons/electron-configuration" element={<ChemicalCombinationLessonPage lessonId="electron-configuration" />} />
        <Route path="/lessons/ionic-and-covalent-bonding" element={<ChemicalCombinationLessonPage lessonId="ionic-and-covalent-bonding" />} />
        <Route path="/lessons/coordinate-and-metallic-bonding" element={<ChemicalCombinationLessonPage lessonId="coordinate-and-metallic-bonding" />} />
        <Route path="/lessons/intermolecular-forces" element={<ChemicalCombinationLessonPage lessonId="intermolecular-forces" />} />
        <Route path="/lessons/states-and-kinetic-theory" element={<ChemicalCombinationLessonPage lessonId="states-and-kinetic-theory" />} />
        <Route path="/lessons/boyles-law/quiz" element={<GasLawsQuizPage lessonId="boyles-law" />} />
        <Route path="/lessons/charles-law/quiz" element={<GasLawsQuizPage lessonId="charles-law" />} />
        <Route path="/lessons/combined-gas-law/quiz" element={<GasLawsQuizPage lessonId="combined-gas-law" />} />
        <Route path="/lessons/partial-pressure-and-gas-laws/quiz" element={<GasLawsQuizPage lessonId="partial-pressure-and-gas-laws" />} />
        <Route path="/lessons/mole-and-molar-volume/quiz" element={<GasLawsQuizPage lessonId="mole-and-molar-volume" />} />
        <Route path="/lessons/ideal-gas-and-graham-law/quiz" element={<GasLawsQuizPage lessonId="ideal-gas-and-graham-law" />} />
        <Route path="/lessons/gas-law-calculations/quiz" element={<GasLawsQuizPage lessonId="gas-law-calculations" />} />
        <Route path="/lessons/boyles-law" element={<GasLawsLessonPage lessonId="boyles-law" />} />
        <Route path="/lessons/charles-law" element={<GasLawsLessonPage lessonId="charles-law" />} />
        <Route path="/lessons/combined-gas-law" element={<GasLawsLessonPage lessonId="combined-gas-law" />} />
        <Route path="/lessons/partial-pressure-and-gas-laws" element={<GasLawsLessonPage lessonId="partial-pressure-and-gas-laws" />} />
        <Route path="/lessons/mole-and-molar-volume" element={<GasLawsLessonPage lessonId="mole-and-molar-volume" />} />
        <Route path="/lessons/ideal-gas-and-graham-law" element={<GasLawsLessonPage lessonId="ideal-gas-and-graham-law" />} />
        <Route path="/lessons/gas-law-calculations" element={<GasLawsLessonPage lessonId="gas-law-calculations" />} />
        <Route path="/lessons/properties-of-acids-and-bases/quiz" element={<AcidBaseQuizPage lessonId="properties-of-acids-and-bases" />} />
        <Route path="/lessons/indicators-and-ph/quiz" element={<AcidBaseQuizPage lessonId="indicators-and-ph" />} />
        <Route path="/lessons/neutralization-and-salt-preparation/quiz" element={<AcidBaseQuizPage lessonId="neutralization-and-salt-preparation" />} />
        <Route path="/lessons/properties-of-salts/quiz" element={<AcidBaseQuizPage lessonId="properties-of-salts" />} />
        <Route path="/lessons/hygroscopic-deliquescent-efflorescent/quiz" element={<AcidBaseQuizPage lessonId="hygroscopic-deliquescent-efflorescent" />} />
        <Route path="/lessons/solubility-of-salts/quiz" element={<AcidBaseQuizPage lessonId="solubility-of-salts" />} />
        <Route path="/lessons/properties-of-acids-and-bases" element={<AcidBaseLessonPage lessonId="properties-of-acids-and-bases" />} />
        <Route path="/lessons/indicators-and-ph" element={<AcidBaseLessonPage lessonId="indicators-and-ph" />} />
        <Route path="/lessons/neutralization-and-salt-preparation" element={<AcidBaseLessonPage lessonId="neutralization-and-salt-preparation" />} />
        <Route path="/lessons/properties-of-salts" element={<AcidBaseLessonPage lessonId="properties-of-salts" />} />
        <Route path="/lessons/hygroscopic-deliquescent-efflorescent" element={<AcidBaseLessonPage lessonId="hygroscopic-deliquescent-efflorescent" />} />
        <Route path="/lessons/solubility-of-salts" element={<AcidBaseLessonPage lessonId="solubility-of-salts" />} />
        <Route path="/lessons/sources-and-types-of-water/quiz" element={<WaterQuizPage lessonId="sources-and-types-of-water" />} />
        <Route path="/lessons/properties-and-uses-of-water/quiz" element={<WaterQuizPage lessonId="properties-and-uses-of-water" />} />
        <Route path="/lessons/water-hardness-and-treatment/quiz" element={<WaterQuizPage lessonId="water-hardness-and-treatment" />} />
        <Route path="/lessons/water-pollution-and-purity/quiz" element={<WaterQuizPage lessonId="water-pollution-and-purity" />} />
        <Route path="/lessons/laboratory-preparation-of-water/quiz" element={<WaterQuizPage lessonId="laboratory-preparation-of-water" />} />
        <Route path="/lessons/sources-and-types-of-water" element={<WaterLessonPage lessonId="sources-and-types-of-water" />} />
        <Route path="/lessons/properties-and-uses-of-water" element={<WaterLessonPage lessonId="properties-and-uses-of-water" />} />
        <Route path="/lessons/water-hardness-and-treatment" element={<WaterLessonPage lessonId="water-hardness-and-treatment" />} />
        <Route path="/lessons/water-pollution-and-purity" element={<WaterLessonPage lessonId="water-pollution-and-purity" />} />
        <Route path="/lessons/laboratory-preparation-of-water" element={<WaterLessonPage lessonId="laboratory-preparation-of-water" />} />
        <Route path="/lessons/structure-and-allotropes-of-carbon/quiz" element={<CarbonCompoundsQuizPage lessonId="structure-and-allotropes-of-carbon" />} />
        <Route path="/lessons/coal-and-coke/quiz" element={<CarbonCompoundsQuizPage lessonId="coal-and-coke" />} />
        <Route path="/lessons/oxides-of-carbon/quiz" element={<CarbonCompoundsQuizPage lessonId="oxides-of-carbon" />} />
        <Route path="/lessons/carbonates-and-hydrogencarbonates/quiz" element={<CarbonCompoundsQuizPage lessonId="carbonates-and-hydrogencarbonates" />} />
        <Route path="/lessons/petroleum-and-natural-gas/quiz" element={<CarbonCompoundsQuizPage lessonId="petroleum-and-natural-gas" />} />
        <Route path="/lessons/petroleum-refining-and-petrochemicals/quiz" element={<CarbonCompoundsQuizPage lessonId="petroleum-refining-and-petrochemicals" />} />
        <Route path="/lessons/structure-and-allotropes-of-carbon" element={<CarbonCompoundsLessonPage lessonId="structure-and-allotropes-of-carbon" />} />
        <Route path="/lessons/coal-and-coke" element={<CarbonCompoundsLessonPage lessonId="coal-and-coke" />} />
        <Route path="/lessons/oxides-of-carbon" element={<CarbonCompoundsLessonPage lessonId="oxides-of-carbon" />} />
        <Route path="/lessons/carbonates-and-hydrogencarbonates" element={<CarbonCompoundsLessonPage lessonId="carbonates-and-hydrogencarbonates" />} />
        <Route path="/lessons/petroleum-and-natural-gas" element={<CarbonCompoundsLessonPage lessonId="petroleum-and-natural-gas" />} />
        <Route path="/lessons/petroleum-refining-and-petrochemicals" element={<CarbonCompoundsLessonPage lessonId="petroleum-refining-and-petrochemicals" />} />
        <Route path="/lessons/hydrocarbon-classes/quiz" element={<HydrocarbonsQuizPage lessonId="hydrocarbon-classes" />} />
        <Route path="/lessons/homologous-series-and-naming/quiz" element={<HydrocarbonsQuizPage lessonId="homologous-series-and-naming" />} />
        <Route path="/lessons/alkanes-alkenes-alkynes/quiz" element={<HydrocarbonsQuizPage lessonId="alkanes-alkenes-alkynes" />} />
        <Route path="/lessons/isomerism/quiz" element={<HydrocarbonsQuizPage lessonId="isomerism" />} />
        <Route path="/lessons/aromatic-hydrocarbons/quiz" element={<HydrocarbonsQuizPage lessonId="aromatic-hydrocarbons" />} />
        <Route path="/lessons/hydrocarbon-classes" element={<HydrocarbonsLessonPage lessonId="hydrocarbon-classes" />} />
        <Route path="/lessons/homologous-series-and-naming" element={<HydrocarbonsLessonPage lessonId="homologous-series-and-naming" />} />
        <Route path="/lessons/alkanes-alkenes-alkynes" element={<HydrocarbonsLessonPage lessonId="alkanes-alkenes-alkynes" />} />
        <Route path="/lessons/isomerism" element={<HydrocarbonsLessonPage lessonId="isomerism" />} />
        <Route path="/lessons/aromatic-hydrocarbons" element={<HydrocarbonsLessonPage lessonId="aromatic-hydrocarbons" />} />
        <Route path="/lessons/:lessonId/quiz" element={<ChemicalIndustriesQuizPage />} />
        <Route path="/lessons/:lessonId" element={<ChemicalIndustriesLessonPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <SiteFooter />
    </>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  );
}
