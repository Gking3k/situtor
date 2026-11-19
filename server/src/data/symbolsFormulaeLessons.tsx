import type { ReactNode } from 'react';
import type { LessonSection } from '../components/CurriculumLessonLayout';

export type SymbolsFormulaeLesson = {
  id: string;
  lessonNumber: string;
  title: string;
  titleLead: string;
  titleAccent: string;
  summary: string;
  duration: string;
  learningObjectives: string[];
  sections: LessonSection[];
  recap: string[];
  quizPath: string;
  quizDescription: string;
  sidebarTip: string;
  sources: { label: string; url: string }[];
  nextLesson?: { title: string; path: string };
  quiz: { description: string; sidebarTip: string; artLabel: string; artCaption: string };
};

type Tone = 'mint' | 'yellow' | 'blue' | 'lavender' | 'peach';

function Note({ children, tone = 'info' }: { children: ReactNode; tone?: 'info' | 'caution' | 'success' }) {
  return <aside className={`u5-note u5-note--${tone}`}>{children}</aside>;
}

function DataTable({ headers, rows }: { headers: string[]; rows: ReactNode[][] }) {
  return <div className="u5-table-wrap"><table className="u5-table"><thead><tr>{headers.map((header) => <th key={header}>{header}</th>)}</tr></thead><tbody>{rows.map((row, index) => <tr key={index}>{row.map((cell, cellIndex) => <td key={`${index}-${cellIndex}`}>{cell}</td>)}</tr>)}</tbody></table></div>;
}

function Steps({ items }: { items: { title: string; detail: ReactNode }[] }) {
  return <div className="u5-steps">{items.map((item, index) => <article key={item.title}><span>{String(index + 1).padStart(2, '0')}</span><div><h3>{item.title}</h3><p>{item.detail}</p></div></article>)}</div>;
}

function ConceptGrid({ items }: { items: { title: string; detail: ReactNode; example: ReactNode; tone?: Tone }[] }) {
  return <div className="u5-concept-grid">{items.map((item) => <article className={`u5-concept-card u5-concept-card--${item.tone ?? 'mint'}`} key={item.title}><h3>{item.title}</h3><p>{item.detail}</p><div>{item.example}</div></article>)}</div>;
}

function FormulaPanel({ title, formula, steps }: { title: string; formula: ReactNode; steps: { label: string; detail: ReactNode }[] }) {
  return <div className="u5-formula-panel"><span className="u5-kicker">{title}</span><div className="u5-formula-panel__formula">{formula}</div><ol>{steps.map((step, index) => <li key={step.label}><b>{index + 1}. {step.label}</b><span>{step.detail}</span></li>)}</ol></div>;
}

function ElementSymbolChart() {
  const elements = [
    ['1','H','Hydrogen'],['2','He','Helium'],['3','Li','Lithium'],['4','Be','Beryllium'],['5','B','Boron'],
    ['6','C','Carbon'],['7','N','Nitrogen'],['8','O','Oxygen'],['9','F','Fluorine'],['10','Ne','Neon'],
    ['11','Na','Sodium'],['12','Mg','Magnesium'],['13','Al','Aluminium'],['14','Si','Silicon'],['15','P','Phosphorus'],
    ['16','S','Sulfur'],['17','Cl','Chlorine'],['18','Ar','Argon'],['19','K','Potassium'],['20','Ca','Calcium'],
  ];
  return <div className="u5-diagram-card"><div className="u5-element-grid" role="group" aria-label="First twenty elements and their chemical symbols">{elements.map(([number, symbol, name]) => <article key={symbol}><small>{number}</small><strong>{symbol}</strong><span>{name}</span></article>)}</div><p className="u5-diagram-caption">The first twenty elements in atomic-number order. Each element has a unique symbol used in formulae and equations.</p></div>;
}

function ValencyFormulaDiagram() {
  return <div className="u5-diagram-card"><svg viewBox="0 0 820 390" role="img" aria-labelledby="u5-valency-title u5-valency-desc"><title id="u5-valency-title">Using ionic charges to write a neutral formula</title><desc id="u5-valency-desc">Three worked panels show aluminium three plus and oxide two minus combining in a two to three ratio to form aluminium oxide Al2O3; calcium two plus and chloride one minus forming calcium chloride CaCl2; and calcium two plus with nitrate one minus forming Ca(NO3)2 with brackets around the repeated polyatomic ion.</desc>
    <rect x="14" y="14" width="250" height="360" rx="16" fill="#f0f7fc" stroke="#cbdde9"/><rect x="285" y="14" width="250" height="360" rx="16" fill="#f2faf6" stroke="#cce6d8"/><rect x="556" y="14" width="250" height="360" rx="16" fill="#faf6ff" stroke="#e1d8f0"/>
    <text x="34" y="44" fontSize="15" fontWeight="700" fill="#24445d">Example A · Al₂O₃</text>
    <text x="34" y="82" fontSize="16" fill="#24445d">Al³⁺</text><text x="155" y="82" fontSize="16" fill="#24445d">O²⁻</text>
    <path d="M58 96 L132 145 M178 96 L104 145" stroke="#3985a0" strokeWidth="2.4"/><text x="98" y="167" textAnchor="middle" fontSize="12" fill="#526b7d">Cross the charge numbers</text>
    <rect x="49" y="190" width="180" height="72" rx="12" fill="#fff" stroke="#d4e2eb"/><text x="139" y="235" textAnchor="middle" fontSize="35" fontWeight="800" fill="#1d526d">Al₂O₃</text>
    <text x="139" y="287" textAnchor="middle" fontSize="12" fontWeight="700" fill="#315d75">2 × (+3) = +6</text><text x="139" y="307" textAnchor="middle" fontSize="12" fontWeight="700" fill="#315d75">3 × (−2) = −6</text><text x="139" y="342" textAnchor="middle" fontSize="12" fill="#496779">Total charge = 0</text>
    <text x="305" y="44" fontSize="15" fontWeight="700" fill="#24445d">Example B · CaCl₂</text>
    <text x="320" y="82" fontSize="16" fill="#24445d">Ca²⁺</text><text x="444" y="82" fontSize="16" fill="#24445d">Cl⁻</text>
    <path d="M346 96 L420 145 M468 96 L394 145" stroke="#3c9273" strokeWidth="2.4"/><text x="410" y="167" textAnchor="middle" fontSize="12" fill="#526b7d">Cross, then omit 1</text>
    <rect x="320" y="190" width="180" height="72" rx="12" fill="#fff" stroke="#d4e2eb"/><text x="410" y="235" textAnchor="middle" fontSize="35" fontWeight="800" fill="#24694f">CaCl₂</text>
    <text x="410" y="287" textAnchor="middle" fontSize="12" fontWeight="700" fill="#315d75">1 × (+2) = +2</text><text x="410" y="307" textAnchor="middle" fontSize="12" fontWeight="700" fill="#315d75">2 × (−1) = −2</text><text x="410" y="342" textAnchor="middle" fontSize="12" fill="#496779">Total charge = 0</text>
    <text x="576" y="44" fontSize="15" fontWeight="700" fill="#24445d">Example C · Ca(NO₃)₂</text>
    <text x="587" y="82" fontSize="16" fill="#24445d">Ca²⁺</text><text x="692" y="82" fontSize="16" fill="#24445d">NO₃⁻</text>
    <path d="M612 96 L681 145 M729 96 L660 145" stroke="#8c6ab0" strokeWidth="2.4"/><text x="681" y="167" textAnchor="middle" fontSize="12" fill="#526b7d">Keep nitrate together</text>
    <rect x="587" y="190" width="190" height="72" rx="12" fill="#fff" stroke="#ded5ed"/><text x="682" y="235" textAnchor="middle" fontSize="33" fontWeight="800" fill="#65458a">Ca(NO₃)₂</text>
    <text x="682" y="287" textAnchor="middle" fontSize="12" fontWeight="700" fill="#5b4b78">1 × (+2) = +2</text><text x="682" y="307" textAnchor="middle" fontSize="12" fontWeight="700" fill="#5b4b78">2 × (−1) = −2</text><text x="682" y="342" textAnchor="middle" fontSize="12" fill="#496779">Brackets show two nitrate ions</text>
  </svg><p className="u5-diagram-caption">The numerical charge values help determine the smallest ratio that makes the compound electrically neutral. The final formula does not include the ion charges.</p></div>;
}

function NamingDecisionDiagram() {
  return <div className="u5-diagram-card"><svg viewBox="0 0 800 340" role="img" aria-labelledby="u5-naming-title u5-naming-desc"><title id="u5-naming-title">A guide to naming simple inorganic compounds</title><desc id="u5-naming-desc">A decision diagram asks whether a compound is ionic or molecular. Ionic compounds are named cation first and anion second, with ide for a simple monatomic anion, an unchanged name for a polyatomic ion, and a Roman numeral when a metal has variable charge. Molecular compounds use prefixes for atom counts and ide on the second element.</desc>
    <rect x="310" y="12" width="180" height="48" rx="12" fill="#173e59"/><text x="400" y="42" fill="#fff" textAnchor="middle" fontSize="16" fontWeight="700">Identify the compound</text>
    <path d="M400 60 V87 M400 87 H200 V116 M400 87 H600 V116" fill="none" stroke="#7e98ab" strokeWidth="2.2"/>
    <rect x="75" y="116" width="250" height="50" rx="10" fill="#eaf5fb" stroke="#b8d8e6"/><text x="200" y="146" textAnchor="middle" fill="#244e68" fontSize="15" fontWeight="700">Ionic compound</text>
    <rect x="475" y="116" width="250" height="50" rx="10" fill="#f3effb" stroke="#d9cdec"/><text x="600" y="146" textAnchor="middle" fill="#61487e" fontSize="15" fontWeight="700">Molecular compound</text>
    <path d="M200 166 V190 M600 166 V190" stroke="#7e98ab" strokeWidth="2.2"/>
    <rect x="34" y="190" width="332" height="124" rx="12" fill="#fff" stroke="#d9e5ed"/><text x="52" y="218" fontSize="13" fontWeight="700" fill="#23455f">Name the positive ion first</text><text x="52" y="243" fontSize="12" fill="#526b7d">Then name the negative ion.</text><text x="52" y="265" fontSize="12" fill="#526b7d">• One-element anion: root + “-ide”</text><text x="52" y="286" fontSize="12" fill="#526b7d">• Polyatomic ion: retain its established name</text><text x="52" y="305" fontSize="11" fill="#8a5b25">Variable metal charge? Add Roman numeral.</text>
    <rect x="434" y="190" width="332" height="124" rx="12" fill="#fff" stroke="#e2d8ef"/><text x="452" y="218" fontSize="13" fontWeight="700" fill="#5a4377">Use prefixes for atom counts</text><text x="452" y="243" fontSize="12" fill="#526b7d">mono-, di-, tri-, tetra-, penta- …</text><text x="452" y="265" fontSize="12" fill="#526b7d">The first element keeps its element name.</text><text x="452" y="286" fontSize="12" fill="#526b7d">The second element ends in “-ide”.</text><text x="452" y="305" fontSize="11" fill="#8a5b25">Do not use ionic charge-crossing rules here.</text>
  </svg><p className="u5-diagram-caption">This is an introductory decision guide for common inorganic compounds. Complex coordination compounds, acid nomenclature and organic naming use additional rules.</p></div>;
}

function EmpiricalFormulaFlowDiagram() {
  const boxes = [
    ['1','Start with mass or %','Convert % to grams in a 100 g sample'],
    ['2','Convert to moles','Divide each element mass by its Aᵣ'],
    ['3','Find simplest ratio','Divide every mole value by the smallest'],
    ['4','Make whole numbers','Multiply all ratios if fractions remain'],
    ['5','Empirical formula','Write the simplest whole-number subscripts'],
    ['6','Molecular formula','Use Mᵣ ÷ empirical formula mass'],
  ];
  return <div className="u5-diagram-card"><div className="u5-flow-grid" role="group" aria-label="Six stages for calculating empirical and molecular formulae">{boxes.map(([number,title,detail],index)=><article key={number}><span>{number}</span><div><strong>{title}</strong><p>{detail}</p></div>{index < boxes.length - 1 && <i aria-hidden="true">↓</i>}</article>)}</div><p className="u5-diagram-caption">Follow the stages in order. Formulae are based on atom-number ratios, so convert masses to moles before comparing the elements.</p></div>;
}

function LawsComparisonDiagram() {
  const particle = (x: number, y: number, label: string, fill: string) => (
    <g>
      <circle cx={x} cy={y} r="13" fill={fill} stroke="#29495e" strokeWidth="1.5" />
      <text x={x} y={y + 4} textAnchor="middle" fontSize="10" fontWeight="800" fill="#fff">{label}</text>
    </g>
  );

  return (
    <div className="u5-diagram-card u5-laws-diagram">
      <div className="u5-laws-grid" role="group" aria-label="Three laws of chemical combination, shown in separate responsive panels">
        <article className="u5-laws-panel">
          <svg viewBox="12 0 350 510" role="img" aria-labelledby="u5-laws-mass-title u5-laws-mass-desc">
            <title id="u5-laws-mass-title">Law of conservation of mass</title>
            <desc id="u5-laws-mass-desc">One carbon atom and one oxygen molecule rearrange to form one carbon dioxide molecule. The same one carbon atom and two oxygen atoms are present before and after. Twelve grams of carbon plus thirty-two grams of oxygen equals forty-four grams of carbon dioxide in a closed system.</desc>
            <rect x="12" y="12" width="350" height="486" rx="18" fill="#eff7fc" stroke="#c9dce8" strokeWidth="1.4" />
            <text x="34" y="49" fontSize="16" fontWeight="800" fill="#244a66">1 · Conservation of mass</text>
            <text x="34" y="77" fontSize="12" fill="#526b7d">Matter is not lost in a closed system.</text>

            <rect x="30" y="96" width="314" height="183" rx="14" fill="#fff" stroke="#9db7c8" strokeWidth="2" />
            <rect x="42" y="106" width="112" height="22" rx="11" fill="#e6f1f8" />
            <text x="98" y="121" textAnchor="middle" fontSize="10" fontWeight="800" letterSpacing=".5" fill="#41647c">BEFORE</text>
            <rect x="218" y="106" width="112" height="22" rx="11" fill="#e8f5ee" />
            <text x="274" y="121" textAnchor="middle" fontSize="10" fontWeight="800" letterSpacing=".5" fill="#39705a">AFTER</text>

            {/* Reactants: one carbon atom and one double-bonded oxygen molecule. */}
            {particle(63, 184, 'C', '#657b8b')}
            <line x1="139" y1="181" x2="171" y2="181" stroke="#315b75" strokeWidth="3" strokeLinecap="round" />
            <line x1="139" y1="187" x2="171" y2="187" stroke="#315b75" strokeWidth="2" strokeLinecap="round" />
            {particle(133, 184, 'O', '#d45b54')}
            {particle(177, 184, 'O', '#d45b54')}
            <text x="108" y="224" textAnchor="middle" fontSize="12" fontWeight="700" fill="#526b7d">C + O₂</text>

            <path d="M194 184 H222 M213 176 L222 184 L213 192" fill="none" stroke="#3c718e" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />

            {/* Product: linear O=C=O. Shifted inward so no atom touches the card edge. */}
            <line x1="255" y1="181" x2="277" y2="181" stroke="#315b75" strokeWidth="3" strokeLinecap="round" />
            <line x1="255" y1="187" x2="277" y2="187" stroke="#315b75" strokeWidth="2" strokeLinecap="round" />
            <line x1="293" y1="181" x2="315" y2="181" stroke="#315b75" strokeWidth="3" strokeLinecap="round" />
            <line x1="293" y1="187" x2="315" y2="187" stroke="#315b75" strokeWidth="2" strokeLinecap="round" />
            {particle(248, 184, 'O', '#d45b54')}
            {particle(286, 184, 'C', '#657b8b')}
            {particle(324, 184, 'O', '#d45b54')}
            <text x="286" y="224" textAnchor="middle" fontSize="12" fontWeight="700" fill="#526b7d">CO₂</text>
            <text x="187" y="260" textAnchor="middle" fontSize="10" fill="#71879a">Same 1 C and 2 O atoms before and after</text>

            <text x="34" y="316" fontSize="11" fontWeight="800" letterSpacing=".4" fill="#41647c">MASS BEFORE REACTION</text>
            <text x="34" y="340" fontSize="13" fontWeight="700" fill="#24516f">12 g C + 32 g O₂ = 44 g</text>
            <text x="34" y="372" fontSize="11" fontWeight="800" letterSpacing=".4" fill="#41647c">MASS AFTER REACTION</text>
            <text x="34" y="396" fontSize="13" fontWeight="700" fill="#24516f">44 g CO₂</text>
            <rect x="32" y="425" width="310" height="49" rx="11" fill="#dceef7" />
            <text x="187" y="455" textAnchor="middle" fontSize="20" fontWeight="800" fill="#244a66">44 g = 44 g</text>
          </svg>
          <p className="u5-laws-panel-caption">The same atoms are rearranged; none are created or destroyed in this reaction.</p>
        </article>

        <article className="u5-laws-panel">
          <svg viewBox="385 0 350 510" role="img" aria-labelledby="u5-laws-composition-title u5-laws-composition-desc">
            <title id="u5-laws-composition-title">Law of constant composition</title>
            <desc id="u5-laws-composition-desc">Two samples of pure water contain hydrogen and oxygen in the same mass ratio. Sample A has two grams of hydrogen and sixteen grams of oxygen. Sample B has one gram of hydrogen and eight grams of oxygen. Both simplify to a one to eight ratio.</desc>
            <rect x="385" y="12" width="350" height="486" rx="18" fill="#f2faf6" stroke="#cfe7db" strokeWidth="1.4" />
            <text x="407" y="49" fontSize="16" fontWeight="800" fill="#245942">2 · Constant composition</text>
            <text x="407" y="77" fontSize="12" fill="#526b7d">A pure compound has a fixed mass ratio.</text>

            <rect x="402" y="105" width="150" height="183" rx="13" fill="#fff" stroke="#b8d9c8" strokeWidth="1.3" />
            <rect x="568" y="105" width="150" height="183" rx="13" fill="#fff" stroke="#b8d9c8" strokeWidth="1.3" />
            <text x="477" y="136" textAnchor="middle" fontSize="13" fontWeight="800" fill="#245942">Sample A</text>
            <text x="643" y="136" textAnchor="middle" fontSize="13" fontWeight="800" fill="#245942">Sample B</text>
            <text x="477" y="174" textAnchor="middle" fontSize="12" fill="#526b7d">Hydrogen</text>
            <text x="477" y="194" textAnchor="middle" fontSize="17" fontWeight="800" fill="#245942">2 g</text>
            <line x1="423" y1="208" x2="531" y2="208" stroke="#e4eee8" />
            <text x="477" y="234" textAnchor="middle" fontSize="12" fill="#526b7d">Oxygen</text>
            <text x="477" y="257" textAnchor="middle" fontSize="17" fontWeight="800" fill="#245942">16 g</text>
            <text x="643" y="174" textAnchor="middle" fontSize="12" fill="#526b7d">Hydrogen</text>
            <text x="643" y="194" textAnchor="middle" fontSize="17" fontWeight="800" fill="#245942">1 g</text>
            <line x1="589" y1="208" x2="697" y2="208" stroke="#e4eee8" />
            <text x="643" y="234" textAnchor="middle" fontSize="12" fill="#526b7d">Oxygen</text>
            <text x="643" y="257" textAnchor="middle" fontSize="17" fontWeight="800" fill="#245942">8 g</text>

            <text x="560" y="326" textAnchor="middle" fontSize="12" fontWeight="700" fill="#245942">Simplify each H : O mass ratio</text>
            <rect x="407" y="346" width="142" height="48" rx="10" fill="#e2f2e9" />
            <rect x="571" y="346" width="142" height="48" rx="10" fill="#e2f2e9" />
            <text x="478" y="376" textAnchor="middle" fontSize="16" fontWeight="800" fill="#245942">2 : 16 = 1 : 8</text>
            <text x="642" y="376" textAnchor="middle" fontSize="16" fontWeight="800" fill="#245942">1 : 8</text>
            <text x="560" y="438" textAnchor="middle" fontSize="12" fontWeight="700" fill="#245942">Both samples have the same H : O ratio.</text>
            <text x="560" y="461" textAnchor="middle" fontSize="11" fill="#526b7d">The sample size changes; the composition does not.</text>
          </svg>
          <p className="u5-laws-panel-caption">Pure water has the same hydrogen-to-oxygen mass ratio regardless of sample size.</p>
        </article>

        <article className="u5-laws-panel">
          <svg viewBox="758 0 350 510" role="img" aria-labelledby="u5-laws-proportions-title u5-laws-proportions-desc">
            <title id="u5-laws-proportions-title">Law of multiple proportions</title>
            <desc id="u5-laws-proportions-desc">For a fixed mass of twelve grams of carbon, carbon monoxide contains sixteen grams of oxygen while carbon dioxide contains thirty-two grams. The oxygen masses are in a one to two whole-number ratio.</desc>
            <rect x="758" y="12" width="350" height="486" rx="18" fill="#fff8ed" stroke="#efdec1" strokeWidth="1.4" />
            <text x="780" y="49" fontSize="16" fontWeight="800" fill="#80541b">3 · Multiple proportions</text>
            <text x="780" y="77" fontSize="12" fill="#526b7d">Keep the carbon mass fixed at 12 g.</text>

            <rect x="775" y="105" width="150" height="174" rx="13" fill="#fff" stroke="#e8d4ad" strokeWidth="1.3" />
            <rect x="941" y="105" width="150" height="174" rx="13" fill="#fff" stroke="#e8d4ad" strokeWidth="1.3" />
            <text x="850" y="139" textAnchor="middle" fontSize="18" fontWeight="800" fill="#80541b">CO</text>
            <text x="1016" y="139" textAnchor="middle" fontSize="18" fontWeight="800" fill="#80541b">CO₂</text>
            <text x="850" y="180" textAnchor="middle" fontSize="12" fill="#526b7d">Carbon</text>
            <text x="850" y="201" textAnchor="middle" fontSize="16" fontWeight="800" fill="#80541b">12 g</text>
            <text x="850" y="235" textAnchor="middle" fontSize="12" fill="#526b7d">Oxygen</text>
            <text x="850" y="256" textAnchor="middle" fontSize="16" fontWeight="800" fill="#80541b">16 g</text>
            <text x="1016" y="180" textAnchor="middle" fontSize="12" fill="#526b7d">Carbon</text>
            <text x="1016" y="201" textAnchor="middle" fontSize="16" fontWeight="800" fill="#80541b">12 g</text>
            <text x="1016" y="235" textAnchor="middle" fontSize="12" fill="#526b7d">Oxygen</text>
            <text x="1016" y="256" textAnchor="middle" fontSize="16" fontWeight="800" fill="#80541b">32 g</text>

            <text x="933" y="316" textAnchor="middle" fontSize="12" fontWeight="700" fill="#80541b">Compare the oxygen masses</text>
            <text x="790" y="347" fontSize="11" fill="#80541b">CO · 16 g</text>
            <rect x="876" y="336" width="54" height="13" rx="6.5" fill="#e7b45f" />
            <text x="790" y="379" fontSize="11" fill="#80541b">CO₂ · 32 g</text>
            <rect x="876" y="368" width="108" height="13" rx="6.5" fill="#d99a3d" />
            <rect x="790" y="414" width="286" height="52" rx="11" fill="#fff0d5" />
            <text x="933" y="446" textAnchor="middle" fontSize="20" fontWeight="800" fill="#80541b">16 : 32 = 1 : 2</text>
          </svg>
          <p className="u5-laws-panel-caption">With the carbon mass fixed, the oxygen masses form a simple whole-number ratio.</p>
        </article>
      </div>
      <p className="u5-diagram-caption">Each law has its own panel. On narrow screens, the panels stack vertically so no part of the diagram is hidden in horizontal scrolling.</p>
    </div>
  );
}

function EquationBalanceDiagram() {
  const atom = (x: number, y: number, label: string, fill: string) => <g><circle cx={x} cy={y} r="13" fill={fill} stroke="#26465c" strokeWidth="1.3"/><text x={x} y={y + 4} textAnchor="middle" fontSize="10" fontWeight="800" fill="#fff">{label}</text></g>;
  return <div className="u5-diagram-card u5-balance-diagram"><svg viewBox="0 0 820 385" role="img" aria-labelledby="u5-balance-title u5-balance-desc"><title id="u5-balance-title">Particle model of the balanced formation of water</title><desc id="u5-balance-desc">On the left, two hydrogen molecules, each with a single bond between two hydrogen atoms, react with one oxygen molecule containing two oxygen atoms joined by a double bond. On the right, two separate water molecules are shown. Each water molecule has one oxygen atom joined to two hydrogen atoms by single bonds. The atom totals are four hydrogen and two oxygen on each side. The balanced equation is displayed in a separate strip below both panels.</desc>
    <rect x="14" y="12" width="350" height="280" rx="16" fill="#eff7fc" stroke="#c9dce8"/><rect x="456" y="12" width="350" height="280" rx="16" fill="#f3faf6" stroke="#cde6d9"/>
    <text x="34" y="43" fontSize="15" fontWeight="800" fill="#244a66">REACTANTS</text><text x="476" y="43" fontSize="15" fontWeight="800" fill="#245942">PRODUCTS</text>
    <text x="92" y="77" textAnchor="middle" fontSize="13" fontWeight="700" fill="#526b7d">2H₂</text>
    <line x1="68" y1="124" x2="104" y2="124" stroke="#315b75" strokeWidth="3.5" strokeLinecap="round"/><line x1="68" y1="177" x2="104" y2="177" stroke="#315b75" strokeWidth="3.5" strokeLinecap="round"/>
    {atom(68,124,'H','#518db4')}{atom(104,124,'H','#518db4')}{atom(68,177,'H','#518db4')}{atom(104,177,'H','#518db4')}
    <text x="258" y="77" textAnchor="middle" fontSize="13" fontWeight="700" fill="#526b7d">O₂</text>
    <line x1="238" y1="145" x2="278" y2="145" stroke="#315b75" strokeWidth="3.5" strokeLinecap="round"/><line x1="238" y1="151" x2="278" y2="151" stroke="#315b75" strokeWidth="2" strokeLinecap="round"/>
    {atom(238,148,'O','#d45b54')}{atom(278,148,'O','#d45b54')}
    <path d="M370 148 H444 m-12 -9 12 9 -12 9" fill="none" stroke="#3c718e" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round"/><text x="407" y="123" textAnchor="middle" fontSize="11" fill="#526b7d">react</text>
    <text x="631" y="77" textAnchor="middle" fontSize="13" fontWeight="700" fill="#526b7d">2H₂O</text>
    <line x1="620" y1="132" x2="592" y2="165" stroke="#315b75" strokeWidth="3.5" strokeLinecap="round"/><line x1="620" y1="132" x2="648" y2="165" stroke="#315b75" strokeWidth="3.5" strokeLinecap="round"/>
    <line x1="716" y1="132" x2="688" y2="165" stroke="#315b75" strokeWidth="3.5" strokeLinecap="round"/><line x1="716" y1="132" x2="744" y2="165" stroke="#315b75" strokeWidth="3.5" strokeLinecap="round"/>
    {atom(620,132,'O','#d45b54')}{atom(592,165,'H','#518db4')}{atom(648,165,'H','#518db4')}{atom(716,132,'O','#d45b54')}{atom(688,165,'H','#518db4')}{atom(744,165,'H','#518db4')}
    <rect x="34" y="213" width="310" height="62" rx="10" fill="#fff" stroke="#d7e4ed"/><text x="189" y="239" textAnchor="middle" fontSize="14" fontWeight="800" fill="#214c68">H atoms = 4 · O atoms = 2</text><text x="189" y="260" textAnchor="middle" fontSize="11" fill="#526b7d">Total atoms in the reactants</text>
    <rect x="476" y="213" width="310" height="62" rx="10" fill="#fff" stroke="#d6e7dd"/><text x="631" y="239" textAnchor="middle" fontSize="14" fontWeight="800" fill="#245942">H atoms = 4 · O atoms = 2</text><text x="631" y="260" textAnchor="middle" fontSize="11" fill="#526b7d">Total atoms in the products</text>
    <rect x="190" y="307" width="440" height="43" rx="11" fill="#edf4f8" stroke="#d8e5ec"/><text x="410" y="335" textAnchor="middle" fontSize="20" fontWeight="800" fill="#1c4e6c">2H₂ + O₂ → 2H₂O</text>
    <text x="410" y="372" textAnchor="middle" fontSize="11" fill="#64788a">Single line = single bond · Double line = double bond</text>
  </svg><p className="u5-diagram-caption">The coefficient 2 counts two molecules. The subscript ₂ belongs to each formula. The equation is placed below the particle panels so it does not overlap either side.</p></div>;
}

const sources = {
  inspire: { label: 'Federal Ministry of Education — SS1 Symbols, Formulae and Equations', url: 'https://inspire.education.gov.ng/lessons/742/preview' },
  nist: { label: 'NIST — Periodic Table of the Elements', url: 'https://www.nist.gov/pml/periodic-table-elements' },
  ionic: { label: 'OpenStax — Molecular and Ionic Compounds', url: 'https://openstax.org/books/chemistry/pages/2-6-molecular-and-ionic-compounds' },
  naming: { label: 'OpenStax — Chemical Nomenclature', url: 'https://openstax.org/books/chemistry-atoms-first-2e/pages/4-3-chemical-nomenclature' },
  formulas: { label: 'OpenStax — Determining Empirical and Molecular Formulas', url: 'https://openstax.org/books/chemistry-2e/pages/3-2-determining-empirical-and-molecular-formulas' },
  equations: { label: 'OpenStax — Writing and Balancing Chemical Equations', url: 'https://openstax.org/books/chemistry-2e/pages/4-1-writing-and-balancing-chemical-equations' },
  laws: { label: 'U.S. Department of Energy — Fundamentals Handbook: Laws of Chemical Combination', url: 'https://www.energy.gov/documents/doe-hdbk-1015-93vol1' },
};

const route = (id: string) => `/lessons/${id}`;
const quizRoute = (id: string) => `${route(id)}/quiz`;

export const symbolsFormulaeLessons: SymbolsFormulaeLesson[] = [
  {
    id: 'chemical-symbols-and-valency', lessonNumber: '01', title: 'Chemical symbols and valency', titleLead: 'The language of elements:', titleAccent: 'symbols and valency',
    summary: 'Learn how element symbols are written, how common valencies describe combining capacity, and how to use ion charges to write correct chemical formulae.', duration: '24–30 min',
    learningObjectives: ['Write correct symbols for the first twenty elements and common additional elements.','Distinguish an element symbol from a chemical formula.','Explain valency and recognise common valencies and polyatomic ions.','Write simple ionic formulae using charge balance, including formulae with polyatomic ions.'],
    sections: [
      { id: 'symbols-first-twenty', label: 'Element symbols', kicker: 'A UNIVERSAL CHEMICAL SHORTCUT', title: 'A symbol represents one chemical element', content: <>
        <p>A <strong>chemical symbol</strong> is the standard one- or two-letter abbreviation used to represent an element. The first letter is always a capital letter. If there is a second letter, it is lowercase. The case matters: <strong>Co</strong> is cobalt, while <strong>CO</strong> represents carbon and oxygen together in a formula.</p>
        <ElementSymbolChart />
        <p>The first twenty elements are especially useful because they appear often in introductory SS1 Chemistry. Other common symbols include Fe (iron), Cu (copper), Zn (zinc), Ag (silver), Au (gold), Pb (lead), Sn (tin), Hg (mercury), Br (bromine) and I (iodine).</p>
        <DataTable headers={['Symbol','Element','Why the symbol may look unusual']} rows={[[ 'Na','Sodium','From the Latin name natrium.'],['K','Potassium','From the Latin name kalium.'],['Fe','Iron','From the Latin name ferrum.'],['Cu','Copper','From the Latin name cuprum.'],['Ag','Silver','From the Latin name argentum.'],['Au','Gold','From the Latin name aurum.'],['Pb','Lead','From the Latin name plumbum.']]} />
        <Note tone="caution">Do not change the capitalisation of a symbol. A lowercase second letter is part of the symbol, not an optional decoration.</Note>
      </>},
      { id: 'symbols-formulae-difference', label: 'Symbols and formulae', kicker: 'ONE ELEMENT OR A SUBSTANCE?', title: 'A symbol and a formula do different jobs', content: <>
        <ConceptGrid items={[{ title: 'Element symbol', detail: 'Represents an atom of an element or the element itself in a chemical description.', example: 'Fe = iron; O = oxygen.', tone: 'blue' },{ title: 'Chemical formula', detail: 'Shows which elements are present and the relative numbers of their atoms or ions.', example: 'H₂O = two hydrogen atoms for each oxygen atom.', tone: 'mint' },{ title: 'Molecular formula', detail: 'Shows the actual number of each type of atom in one molecule.', example: 'C₆H₁₂O₆ = one glucose molecule.', tone: 'yellow' },{ title: 'Formula unit', detail: 'For an ionic solid, gives the simplest whole-number ratio of ions rather than a separate molecule.', example: 'NaCl = a 1:1 ratio of Na⁺ to Cl⁻ ions.', tone: 'lavender' }]} />
        <p>In a formula, a small number written after an element symbol is called a <strong>subscript</strong>. If no subscript is written, the number of atoms is one.</p>
        <DataTable headers={['Formula','What it tells us','Total atoms in one molecule or unit']} rows={[[ 'H₂O','2 H and 1 O','3 atoms'],['CO₂','1 C and 2 O','3 atoms'],['CaCl₂','1 Ca and 2 Cl','3 atoms in the formula unit'],['Al₂(SO₄)₃','2 Al, 3 S and 12 O','17 atoms in each formula unit']]} />
        <p>For Al₂(SO₄)₃, the outside subscript 3 multiplies everything inside the brackets: three sulfur atoms and 3 × 4 = 12 oxygen atoms.</p>
      </>},
      { id: 'valency-meaning', label: 'Understanding valency', kicker: 'COMBINING CAPACITY', title: 'Valency helps describe how atoms or ions combine', content: <>
        <p><strong>Valency</strong> is the combining capacity of an atom or group of atoms. At this introductory level, it is commonly represented by a whole number. For a simple ion, the valency is the magnitude of its charge: Na⁺ has valency 1 and Mg²⁺ has valency 2. The sign tells whether the ion is positive or negative; the valency number describes the combining capacity.</p>
        <DataTable headers={['Element','Symbol','Common introductory valency','Example']} rows={[[ 'Hydrogen','H','1','HCl'],['Oxygen','O','2','MgO'],['Sodium','Na','1','NaCl'],['Magnesium','Mg','2','MgCl₂'],['Aluminium','Al','3','Al₂O₃'],['Carbon','C','4','CH₄'],['Nitrogen','N','3','NH₃'],['Chlorine','Cl','1','NaCl'],['Calcium','Ca','2','CaCl₂'],['Sulfur','S','2, 4 or 6 in common compounds','H₂S, SO₂, SO₃']]} />
        <p>These are common introductory values, not a complete list of every oxidation state or bonding arrangement. Some elements, especially transition metals, can show more than one valency in different compounds.</p>
        <Note>Valency and oxidation number are related ideas but are not interchangeable in every chemical context. This lesson uses valency to write simple formulae; formal oxidation-number rules can be studied separately.</Note>
      </>},
      { id: 'common-radicals', label: 'Common ions and radicals', kicker: 'GROUPS THAT ACT AS UNITS', title: 'Some groups of atoms carry an overall charge', content: <>
        <p>A <strong>polyatomic ion</strong> is a group of bonded atoms with an overall electrical charge. Some school notes call these groups <strong>radicals</strong>. The atoms inside the group stay together when the group is used to form an ionic compound.</p>
        <DataTable headers={['Name','Formula','Charge','Valency']} rows={[[ 'Ammonium','NH₄⁺','+1','1'],['Hydroxide','OH⁻','−1','1'],['Nitrate','NO₃⁻','−1','1'],['Hydrogencarbonate','HCO₃⁻','−1','1'],['Carbonate','CO₃²⁻','−2','2'],['Sulfate','SO₄²⁻','−2','2'],['Phosphate','PO₄³⁻','−3','3']]} />
        <p>When a polyatomic ion appears more than once in a formula, put it in brackets and write the number outside. For example, Ca(NO₃)₂ contains two nitrate ions. The subscript 2 multiplies the whole NO₃ group.</p>
      </>},
      { id: 'writing-formulae', label: 'Writing ionic formulae', kicker: 'USE CHARGE BALANCE', title: 'The total positive and negative charges must cancel', content: <>
        <p>An ionic compound is electrically neutral overall. This means the total positive charge must equal the total negative charge. A useful classroom method is to cross the numerical charge values to become subscripts, then simplify the ratio if possible.</p>
        <ValencyFormulaDiagram />
        <Steps items={[{ title: 'Write the ions and charges', detail: 'For aluminium oxide, write Al³⁺ and O²⁻. The positive ion is written first.' },{ title: 'Cross the charge numbers', detail: 'The 3 becomes the subscript of oxygen and the 2 becomes the subscript of aluminium. This gives Al₂O₃.' },{ title: 'Remove unnecessary 1s and signs', detail: 'Do not write a subscript 1, and do not include ionic charge signs in the neutral compound formula.' },{ title: 'Check the total charge', detail: 'Two Al³⁺ ions give +6. Three O²⁻ ions give −6. The total is zero, so the formula is neutral.' }]} />
        <FormulaPanel title="Worked example · calcium nitrate" formula={<span>Ca²⁺ + NO₃⁻ → Ca(NO₃)₂</span>} steps={[{ label: 'Identify the ions', detail: 'Calcium is Ca²⁺. Nitrate is the polyatomic ion NO₃⁻.' },{ label: 'Find the smallest neutral ratio', detail: 'One calcium ion supplies +2. Two nitrate ions supply 2 × −1 = −2.' },{ label: 'Write the formula', detail: 'Write Ca first, then place nitrate in brackets with a subscript 2: Ca(NO₃)₂.' },{ label: 'Count the atoms', detail: 'There is 1 Ca, 2 N and 2 × 3 = 6 O atoms. The total charge is zero.' }]} />
        <Note tone="caution">The charge-crossing method is a shortcut for finding a neutral ratio. Always check the charges and simplify the subscripts to the smallest whole-number ratio. Do not change the internal formula of a polyatomic ion.</Note>
      </>},
    ],
    recap:['An element symbol begins with a capital letter; a second letter, if present, is lowercase.','A chemical formula gives the elements present and their relative numbers.','A missing subscript means one atom or ion of that type.','Valency describes combining capacity; common values are useful but some elements have variable valency.','Polyatomic ions keep their internal formula and charge when used as a group.','Ionic formulae must have a total positive charge equal to the total negative charge.'],
    quizPath:quizRoute('chemical-symbols-and-valency'), quizDescription:'Twelve questions on symbol recognition, valency, ion charges and multi-step formula writing.', sidebarTip:'Before accepting a formula, count the total positive and negative charges. They must cancel to zero.',
    sources:[sources.inspire,sources.nist,sources.ionic], nextLesson:{title:'Naming compounds',path:route('naming-compounds')},
    quiz:{description:'Interpret symbols and formulae, then apply valency and charge balance.',sidebarTip:'Check the ion charges and remember that a subscript outside brackets multiplies the entire group.',artLabel:'Al₂O₃',artCaption:'neutral ionic formula'},
  },
  {
    id: 'naming-compounds', lessonNumber: '02', title: 'Naming compounds', titleLead: 'Give each substance', titleAccent: 'a clear chemical name',
    summary: 'Learn introductory rules for naming common ionic and molecular compounds, including polyatomic ions and metals that can form ions with different charges.', duration: '22–28 min',
    learningObjectives:['Distinguish simple ionic compounds from simple molecular compounds.','Name binary ionic compounds using the cation name followed by an anion ending in -ide.','Name compounds containing common polyatomic ions.','Use Roman numerals to show the charge of a metal with variable charge.','Apply prefixes when naming simple molecular compounds made from non-metals.'],
    sections:[
      {id:'why-names-matter',label:'Why naming rules matter',kicker:'SYSTEMATIC COMMUNICATION',title:'A chemical name should identify the substance clearly',content:<>
        <p>A <strong>chemical name</strong> identifies a substance using agreed rules. A systematic name helps chemists distinguish compounds that may contain the same elements but in different ratios. For example, carbon monoxide (CO) and carbon dioxide (CO₂) both contain carbon and oxygen, but they are different compounds.</p>
        <NamingDecisionDiagram />
        <p>Begin by deciding whether the compound is ionic or molecular. The two types use different naming patterns, so do not apply one set of rules to every formula.</p>
      </>},
      {id:'binary-ionic-names',label:'Binary ionic compounds',kicker:'CATION FIRST, ANION SECOND',title:'For a simple ionic compound, name the positive ion first',content:<>
        <p>A <strong>binary compound</strong> contains two different elements. In a simple binary ionic compound, write the name of the metal (the cation) first. Then write the non-metal name with its ending changed to <strong>-ide</strong>.</p>
        <DataTable headers={['Formula','Cation name','Anion name','Compound name']} rows={[[ 'NaCl','Sodium','Chloride','Sodium chloride'],['MgO','Magnesium','Oxide','Magnesium oxide'],['CaF₂','Calcium','Fluoride','Calcium fluoride'],['Al₂S₃','Aluminium','Sulfide','Aluminium sulfide'],['KBr','Potassium','Bromide','Potassium bromide'],['Ca₃N₂','Calcium','Nitride','Calcium nitride']]} />
        <p>Do not use numerical prefixes such as di- or tri- for these simple ionic formulae. The ion charges determine the ratio in the formula; the name follows the ionic naming rule.</p>
      </>},
      {id:'polyatomic-names',label:'Polyatomic ions',kicker:'KEEP THE ION NAME',title:'A polyatomic ion usually keeps its established name',content:<>
        <p>When a compound contains a polyatomic ion, use the established name of that ion. Do not replace the ending of the entire group with -ide.</p>
        <DataTable headers={['Formula','Ions present','Name']} rows={[[ 'Na₂SO₄','Na⁺ and SO₄²⁻','Sodium sulfate'],['CaCO₃','Ca²⁺ and CO₃²⁻','Calcium carbonate'],['NH₄Cl','NH₄⁺ and Cl⁻','Ammonium chloride'],['Ca(OH)₂','Ca²⁺ and OH⁻','Calcium hydroxide'],['KNO₃','K⁺ and NO₃⁻','Potassium nitrate'],['NaHCO₃','Na⁺ and HCO₃⁻','Sodium hydrogencarbonate']]} />
        <p>The formula Ca(OH)₂ is calcium hydroxide. The subscript 2 shows there are two hydroxide ions, but the name does not become “calcium dihydroxide” under the ordinary ionic naming rule.</p>
      </>},
      {id:'variable-charge-metals',label:'Variable-charge metals',kicker:'ROMAN NUMERALS',title:'Use a Roman numeral when a metal can form different ion charges',content:<>
        <p>Some metals form more than one common ion. Iron, for example, can form Fe²⁺ and Fe³⁺. A Roman numeral in the compound name tells us the charge of the metal ion in that compound.</p>
        <DataTable headers={['Formula','Charge reasoning','Correct name']} rows={[[ 'FeCl₂','Two Cl⁻ ions total −2, so Fe is +2.','Iron(II) chloride'],['FeCl₃','Three Cl⁻ ions total −3, so Fe is +3.','Iron(III) chloride'],['Cu₂O','One O²⁻ needs two Cu⁺ ions.','Copper(I) oxide'],['CuO','One O²⁻ balances one Cu²⁺ ion.','Copper(II) oxide']]} />
        <Steps items={[{title:'Find the known ion charge',detail:'Chloride is −1 and oxide is −2. Use the total charge of all anions in the formula.'},{title:'Work out the metal charge',detail:'A neutral compound has total charge zero. The positive charge must balance the negative charge.'},{title:'Write the Roman numeral',detail:'Use I for +1, II for +2, III for +3 and IV for +4. The numeral shows the metal ion charge, not the number of metal atoms.'}]} />
        <Note tone="caution">The Roman numeral is not a subscript and does not tell you how many metal atoms are present. It indicates the oxidation state of the metal in that compound.</Note>
      </>},
      {id:'molecular-compound-names',label:'Molecular compounds',kicker:'PREFIXES SHOW ATOM NUMBERS',title:'Simple compounds of non-metals use numerical prefixes',content:<>
        <p>Many molecular compounds are made from non-metal elements. For simple binary molecular compounds, prefixes show how many atoms of each element are represented.</p>
        <DataTable headers={['Number','Prefix','Number','Prefix']} rows={[[ '1','mono-','6','hexa-'],['2','di-','7','hepta-'],['3','tri-','8','octa-'],['4','tetra-','9','nona-'],['5','penta-','10','deca-']]} />
        <DataTable headers={['Formula','Name','How to read it']} rows={[[ 'CO','Carbon monoxide','One carbon; one oxygen. “Mono-” is usually omitted for the first element.'],['CO₂','Carbon dioxide','One carbon; two oxygen atoms.'],['N₂O₄','Dinitrogen tetroxide','Two nitrogen; four oxygen atoms.'],['PCl₃','Phosphorus trichloride','One phosphorus; three chlorine atoms.'],['SF₆','Sulfur hexafluoride','One sulfur; six fluorine atoms.']]} />
        <p>For a simple binary molecular name, keep the first element's name. The second element has a modified ending, usually -ide, and receives the prefix that indicates its number.</p>
        <Note tone="caution">Do not use prefixes for ordinary ionic compounds such as NaCl or CaCl₂. Naming depends on the type of compound.</Note>
      </>},
      {id:'naming-practice-checks',label:'Name and formula checks',kicker:'MOVE IN BOTH DIRECTIONS',title:'Check that the name and formula agree',content:<>
        <ConceptGrid items={[{title:'Name → formula',detail:'Identify the ions or molecular prefixes, then write the correct symbols and subscripts.',example:'Calcium chloride → CaCl₂.',tone:'blue'},{title:'Formula → name',detail:'Classify the compound, then apply the correct naming pattern.',example:'Fe₂O₃ → iron(III) oxide.',tone:'mint'},{title:'Check brackets',detail:'A repeated polyatomic ion needs brackets around the whole group.',example:'Al(NO₃)₃ has three nitrate ions.',tone:'yellow'},{title:'Check variable charge',detail:'Work out the metal charge before choosing its Roman numeral.',example:'CuCl₂ → copper(II) chloride.',tone:'lavender'}]} />
      </>},
    ],
    recap:['Name an ionic compound by writing the cation name first and the anion name second.','A simple monatomic anion usually ends in -ide.','A polyatomic ion keeps its established ion name.','A Roman numeral indicates the charge or oxidation state of a variable-charge metal.','Simple binary molecular compounds use prefixes to show atom counts.','Do not use the same naming rule for ionic and molecular compounds.'],
    quizPath:quizRoute('naming-compounds'),quizDescription:'Twelve questions on naming and writing formulae, including variable-charge metals and polyatomic ions.',sidebarTip:'First classify the compound. Then choose the naming rule that matches that type.',sources:[sources.inspire,sources.naming,sources.ionic],nextLesson:{title:'Empirical and molecular formulae',path:route('empirical-and-molecular-formulae')},
    quiz:{description:'Name compounds and select formulae using the correct ionic or molecular rules.',sidebarTip:'For a variable-charge metal, calculate its ion charge before selecting the Roman numeral.',artLabel:'FeCl₃',artCaption:'iron(III) chloride'},
  },
  {
    id:'empirical-and-molecular-formulae',lessonNumber:'03',title:'Empirical and molecular formulae',titleLead:'From composition data',titleAccent:'to a chemical formula',summary:'Calculate empirical formulae from mass or percentage data, determine molecular formulae from relative mass, and calculate formula mass and percentage composition.',duration:'28–36 min',
    learningObjectives:['Explain the difference between empirical and molecular formulae.','Convert element masses or mass percentages into mole ratios.','Determine an empirical formula using a step-by-step method.','Use relative molecular mass to calculate a molecular formula.','Calculate relative formula mass, molar mass and percentage composition by mass.'],
    sections:[
      {id:'empirical-vs-molecular',label:'Two types of formula',kicker:'SIMPLEST RATIO OR ACTUAL COUNT?',title:'An empirical formula and a molecular formula answer different questions',content:<>
        <ConceptGrid items={[{title:'Empirical formula',detail:'Shows the simplest whole-number ratio of atoms or ions in a substance.',example:'Glucose has empirical formula CH₂O.',tone:'blue'},{title:'Molecular formula',detail:'Shows the actual number of each type of atom in one molecule.',example:'Glucose has molecular formula C₆H₁₂O₆.',tone:'mint'}]} />
        <p>The molecular formula can be the same as the empirical formula, or it can be a whole-number multiple of it. The empirical formula is always the simplest atom ratio.</p>
        <DataTable headers={['Substance','Molecular formula','Empirical formula','Relationship']} rows={[[ 'Water','H₂O','H₂O','Already simplest'],['Hydrogen peroxide','H₂O₂','HO','Molecular formula is 2 × empirical'],['Glucose','C₆H₁₂O₆','CH₂O','Molecular formula is 6 × empirical'],['Ethene','C₂H₄','CH₂','Molecular formula is 2 × empirical']]} />
      </>},
      {id:'convert-mass-to-moles',label:'Convert mass to mole amount',kicker:'WHY DIVIDE BY Aᵣ?',title:'Mass data must be converted into amounts of atoms',content:<>
        <p>A chemical formula describes the relative number of atoms, not the relative mass of each element. If a problem gives masses, convert each mass to an amount in moles before comparing the elements.</p>
        <FormulaPanel title="Amount in moles" formula={<span>n = m ÷ M</span>} steps={[{label:'n',detail:'Amount of substance, measured in moles (mol).'}, {label:'m',detail:'Mass of the sample or element, measured in grams (g).'}, {label:'M',detail:'Molar mass, measured in grams per mole (g mol⁻¹).'}, {label:'Divide',detail:'Divide the mass in grams by the molar mass in g mol⁻¹. The result is in moles.'}]} />
        <p>At this level, use suitable relative atomic masses such as C = 12, H = 1, N = 14 and O = 16 unless a question provides more precise values.</p>
        <Note>Always keep the unit with the value while working. For example, 24 g ÷ 12 g mol⁻¹ = 2 mol. The grams cancel, leaving moles.</Note>
      </>},
      {id:'empirical-worked-example',label:'Worked empirical formula',kicker:'PERCENTAGE COMPOSITION',title:'Calculate an empirical formula from percentage data',content:<>
        <EmpiricalFormulaFlowDiagram />
        <p>A compound contains 40.0% carbon, 6.7% hydrogen and 53.3% oxygen by mass. Find its empirical formula. Assume the sample contains only these three elements.</p>
        <Steps items={[{title:'Assume a 100 g sample',detail:'This turns the percentages into masses: 40.0 g C, 6.7 g H and 53.3 g O.'},{title:'Convert each mass to moles',detail:'C: 40.0 ÷ 12 = 3.33 mol. H: 6.7 ÷ 1 = 6.70 mol. O: 53.3 ÷ 16 = 3.33 mol.'},{title:'Divide by the smallest amount',detail:'Divide each value by 3.33. C ≈ 1.00, H ≈ 2.01, O ≈ 1.00. Round only when the ratios are clearly close to simple values.'},{title:'Write the simplest whole-number ratio',detail:'The ratio is 1 : 2 : 1. The empirical formula is CH₂O.'}]} />
        <Note tone="success">Check: the subscripts 1:2:1 cannot be reduced further, so CH₂O is already in its simplest whole-number ratio.</Note>
      </>},
      {id:'molecular-formula-worked',label:'Molecular formula',kicker:'USE THE RELATIVE MASS',title:'Multiply the empirical formula by a whole-number factor',content:<>
        <FormulaPanel title="Molecular formula factor" formula={<span>n = Mᵣ ÷ empirical formula mass</span>} steps={[{label:'Mᵣ',detail:'Relative molecular mass supplied by the question or determined experimentally. It has no unit.'},{label:'Empirical formula mass',detail:'Add the relative atomic masses in the empirical formula, including each subscript.'},{label:'Divide',detail:'Divide Mᵣ by the empirical formula mass. The result should be a whole number for a valid molecular formula.'},{label:'Multiply every subscript',detail:'Multiply all empirical formula subscripts by n. Do not multiply only one element.'}]} />
        <p>Continue the example. The empirical formula is CH₂O and the relative molecular mass is 180.</p>
        <Steps items={[{title:'Calculate the empirical formula mass',detail:'CH₂O = 12 + (2 × 1) + 16 = 30.'},{title:'Calculate the multiplier',detail:'n = 180 ÷ 30 = 6.'},{title:'Multiply every subscript by 6',detail:'(CH₂O) × 6 gives C₆H₁₂O₆.'},{title:'Check the mass',detail:'(6 × 12) + (12 × 1) + (6 × 16) = 72 + 12 + 96 = 180. The calculated mass agrees with the given value.'}]} />
        <div className="u5-equation-display">CH₂O × 6 → C₆H₁₂O₆</div>
      </>},
      {id:'formula-mass-percent-composition',label:'Formula mass and percentages',kicker:'CALCULATE THE MASS CONTRIBUTION',title:'A formula also lets you calculate percentage composition',content:<>
        <p><strong>Relative molecular mass (Mᵣ)</strong> is the sum of the relative atomic masses in a molecule. For an ionic solid, use the term <strong>relative formula mass</strong> because the formula represents a ratio of ions in a lattice rather than a separate molecule.</p>
        <p><strong>Molar mass</strong> is the mass of one mole of a substance, usually expressed in g mol⁻¹. Its numerical value is commonly the same as Mᵣ or relative formula mass when expressed using the same relative atomic masses.</p>
        <FormulaPanel title="Percentage by mass of an element" formula={<span>% element = (mass of that element in the formula ÷ Mᵣ) × 100</span>} steps={[{label:'Find the element contribution',detail:'Multiply the relative atomic mass by the number of atoms of that element in the formula.'},{label:'Find the total formula mass',detail:'Add the mass contributions of all elements.'},{label:'Divide and multiply by 100',detail:'Divide the element contribution by the total, then multiply by 100%.'}]} />
        <p>For glucose, C₆H₁₂O₆, use C = 12, H = 1 and O = 16:</p>
        <DataTable headers={['Element','Mass contribution','Percentage calculation','Result']} rows={[[ 'Carbon','6 × 12 = 72','72 ÷ 180 × 100','40.0%'],['Hydrogen','12 × 1 = 12','12 ÷ 180 × 100','6.7%'],['Oxygen','6 × 16 = 96','96 ÷ 180 × 100','53.3%']]} />
        <p>The percentages add to approximately 100% (small differences can occur from rounding).</p>
        <Note tone="caution">Do not confuse relative mass with molar mass. Mᵣ is dimensionless; molar mass has units such as g mol⁻¹. The numerical values are often the same, but the quantities and units are different.</Note>
      </>},
      {id:'formula-calculation-errors',label:'Common calculation errors',kicker:'CHECK YOUR WORK',title:'A valid formula must satisfy both the ratio and mass information',content:<>
        <ConceptGrid items={[{title:'Do not compare grams directly',detail:'Different elements have different atomic masses, so equal masses do not mean equal numbers of atoms.',example:'12 g C = 1 mol C; 16 g O = 1 mol O.',tone:'blue'},{title:'Use a whole-number ratio',detail:'If a ratio is close to 1.5, multiply all ratios by 2 to get 2:3.',example:'1 : 1.5 becomes 2 : 3.',tone:'yellow'},{title:'Multiply every subscript',detail:'A molecular formula is a whole-number multiple of the entire empirical formula.',example:'CH₂O × 6 = C₆H₁₂O₆.',tone:'mint'},{title:'Check the mass at the end',detail:'The molecular formula mass should agree with the supplied relative molecular mass.',example:'C₆H₁₂O₆ has Mᵣ = 180 using C=12, H=1, O=16.',tone:'lavender'}]} />
      </>},
    ],
    recap:['An empirical formula gives the simplest whole-number ratio of atoms.','A molecular formula gives the actual atom count in one molecule.','Convert mass to moles before finding the simplest ratio.','If a ratio includes a fraction such as 1.5, multiply all ratios to obtain whole numbers.','Molecular formula = empirical formula multiplied by Mᵣ divided by empirical formula mass.','Relative formula mass is used for ionic compounds; molar mass is expressed in g mol⁻¹.','Percentage composition is the element mass contribution divided by total formula mass, multiplied by 100.'],
    quizPath:quizRoute('empirical-and-molecular-formulae'),quizDescription:'Twelve calculation-based questions on empirical formulae, molecular formulae, relative mass and percentage composition.',sidebarTip:'Write every stage: mass → moles → divide by smallest → whole-number ratio → formula.',sources:[sources.inspire,sources.formulas,sources.ionic],nextLesson:{title:'Laws of chemical combination',path:route('laws-of-chemical-combination')},
    quiz:{description:'Solve multi-step composition calculations and check formula masses.',sidebarTip:'Keep units visible and check that your final molecular formula reproduces the given relative mass.',artLabel:'CH₂O → C₆H₁₂O₆',artCaption:'empirical to molecular'},
  },
  {
    id:'laws-of-chemical-combination',lessonNumber:'04',title:'Laws of chemical combination',titleLead:'Patterns behind reactions:',titleAccent:'three chemical laws',summary:'Use measured masses and simple ratios to understand conservation of mass, constant composition and multiple proportions.',duration:'25–32 min',
    learningObjectives:['State the law of conservation of mass.','Apply the law of constant composition to pure compounds.','Use mass data to illustrate the law of multiple proportions.','Distinguish the three laws and identify which one a set of results supports.'],
    sections:[
      {id:'why-laws',label:'Why laws are useful',kicker:'EXPERIMENTAL PATTERNS',title:'Chemical laws summarise patterns repeatedly observed in experiments',content:<>
        <p>A <strong>scientific law</strong> describes a consistent pattern observed in nature. In chemical combination, measurements of reactants and products reveal regular relationships between mass and composition. The laws do not replace explanations; they summarise patterns that chemical models must account for.</p>
        <LawsComparisonDiagram />
      </>},
      {id:'conservation-mass',label:'Conservation of mass',kicker:'TOTAL MASS IS CONSERVED',title:'The total mass of reactants equals the total mass of products in a closed system',content:<>
        <p>The <strong>law of conservation of mass</strong> states that, in an ordinary chemical reaction, the total mass remains constant. Matter is not created or destroyed in the reaction; atoms are rearranged into new substances.</p>
        <FormulaPanel title="Mass relationship" formula={<span>Total mass of reactants = Total mass of products</span>} steps={[{label:'Reactants',detail:'The substances present before the reaction begins.'},{label:'Products',detail:'The substances formed by the reaction.'},{label:'Closed system',detail:'No material enters or leaves. A gas produced by the reaction must remain inside the closed container to be included in the final mass.'}]} />
        <p><strong>Worked example:</strong> 12.0 g of carbon reacts completely with 32.0 g of oxygen to form carbon dioxide. What mass of carbon dioxide is produced?</p>
        <Steps items={[{title:'Write the mass relationship',detail:'Mass of reactants = mass of products.'},{title:'Add the reactant masses',detail:'12.0 g + 32.0 g = 44.0 g.'},{title:'State the product mass',detail:'If carbon dioxide is the only product and the reaction is complete, 44.0 g of carbon dioxide is formed.'},{title:'Check the result',detail:'The mass before reaction (44.0 g) equals the mass after reaction (44.0 g).'}]} />
        <div className="u5-equation-display">C(s) + O₂(g) → CO₂(g) &nbsp; · &nbsp; 12.0 g + 32.0 g = 44.0 g</div>
        <Note tone="caution">If a gas escapes from an open container, the measured mass of the container and its contents may decrease. That does not mean mass was destroyed; some matter left the system.</Note>
      </>},
      {id:'constant-composition',label:'Constant composition',kicker:'A PURE COMPOUND HAS A FIXED RATIO',title:'A pure compound has the same composition by mass wherever it comes from',content:<>
        <p>The <strong>law of constant composition</strong>, also called the law of definite proportions, states that a given pure compound always contains the same elements combined in the same fixed proportions by mass, regardless of its source or method of preparation.</p>
        <p>In water, H₂O, each molecule contains two hydrogen atoms and one oxygen atom. Using relative atomic masses H = 1 and O = 16, the mass contribution is 2 units of hydrogen to 16 units of oxygen.</p>
        <FormulaPanel title="Water mass ratio" formula={<span>H : O = (2 × 1) : (1 × 16) = 2 : 16 = 1 : 8</span>} steps={[{label:'Count the atoms',detail:'H₂O contains 2 hydrogen atoms and 1 oxygen atom.'},{label:'Use relative atomic masses',detail:'Hydrogen contributes 2 × 1 = 2. Oxygen contributes 1 × 16 = 16.'},{label:'Form the mass ratio',detail:'2 : 16 can be divided by 2 to give 1 : 8.'},{label:'Interpret',detail:'For every 1 g of hydrogen in pure water, there are 8 g of oxygen by mass.'}]} />
        <DataTable headers={['Water sample','Hydrogen mass','Oxygen mass','H:O mass ratio']} rows={[[ 'Sample A','2 g','16 g','1 : 8'],['Sample B','1 g','8 g','1 : 8'],['Sample C','5 g','40 g','1 : 8']]} />
        <Note tone="success">The sample size changes, but the composition ratio of the same pure compound stays the same.</Note>
      </>},
      {id:'multiple-proportions',label:'Multiple proportions',kicker:'TWO ELEMENTS, MORE THAN ONE COMPOUND',title:'When two elements form different compounds, their mass ratios can show small whole numbers',content:<>
        <p>The <strong>law of multiple proportions</strong> applies when the same two elements form more than one compound. If the mass of one element is fixed, the different masses of the other element that combine with it are in a simple whole-number ratio.</p>
        <p>Carbon and oxygen form carbon monoxide (CO) and carbon dioxide (CO₂). Fix the mass of carbon at 12 g:</p>
        <DataTable headers={['Compound','Carbon mass fixed','Oxygen mass','Formula']} rows={[[ 'Carbon monoxide','12 g','16 g','CO'],['Carbon dioxide','12 g','32 g','CO₂']]} />
        <Steps items={[{title:'Keep one element fixed',detail:'Both examples contain 12 g of carbon.'},{title:'Compare the other element',detail:'Carbon monoxide contains 16 g of oxygen; carbon dioxide contains 32 g.'},{title:'Write the ratio',detail:'16 : 32.'},{title:'Simplify',detail:'Divide both values by 16. The ratio becomes 1 : 2.'},{title:'State the conclusion',detail:'The oxygen masses that combine with the same mass of carbon are in the simple whole-number ratio 1 : 2.'}]} />
        <Note>Do not compare the oxygen masses until the carbon mass is fixed at the same value. Comparing unequal carbon masses would not test the law correctly.</Note>
      </>},
      {id:'compare-laws-and-extension',label:'Compare and apply the laws',kicker:'IDENTIFY THE PATTERN',title:'Choose the law that matches the evidence',content:<>
        <DataTable headers={['Law','What remains the same?','What the evidence compares']} rows={[[ 'Conservation of mass','Total mass in a closed system','Total reactant mass against total product mass'],['Constant composition','Mass ratio within one pure compound','Different samples or preparations of the same compound'],['Multiple proportions','Mass of one element held fixed','Masses of a second element in two or more compounds']]} />
        <p><strong>Supplementary note:</strong> Some school schemes also introduce the law of reciprocal proportions. It compares the masses of two elements that separately combine with a fixed mass of a third element with the ratio in which the first two elements combine with each other. This is an extension, not one of the three main laws listed in the Federal Ministry of Education's SS1 lesson overview.</p>
      </>},
    ],
    recap:['Conservation of mass: total mass of reactants equals total mass of products in a closed system.','Constant composition: one pure compound has a fixed composition by mass.','Multiple proportions: for a fixed mass of one element, masses of another element in different compounds form a simple whole-number ratio.','Water has a hydrogen-to-oxygen mass ratio of 1:8 using H = 1 and O = 16.','CO and CO₂ contain 12 g of carbon combined with 16 g and 32 g of oxygen respectively, giving a 1:2 ratio.','Always identify what is fixed and what is being compared before choosing a law.'],
    quizPath:quizRoute('laws-of-chemical-combination'),quizDescription:'Twelve questions using mass data, ratios and experimental evidence to distinguish the chemical laws.',sidebarTip:'For every ratio question, write down what is fixed first. Then compare only the quantity that changes.',sources:[sources.inspire,sources.laws,sources.equations],nextLesson:{title:'Writing and balancing chemical equations',path:route('writing-and-balancing-equations')},
    quiz:{description:'Interpret reaction masses and identify which law is supported by the data.',sidebarTip:'Conservation compares before and after; constant composition compares samples of one compound; multiple proportions compares two compounds.',artLabel:'1 : 8 · 1 : 2',artCaption:'mass ratios'},
  },
  {
    id:'writing-and-balancing-equations',lessonNumber:'05',title:'Writing and balancing chemical equations',titleLead:'Show a reaction clearly:',titleAccent:'write and balance equations',summary:'Translate word descriptions into chemical formulae, represent reactions with symbols and state symbols, and balance equations by changing coefficients only.',duration:'28–35 min',
    learningObjectives:['Identify reactants, products, coefficients, subscripts and state symbols.','Convert a word equation into a correct unbalanced formula equation.','Balance simple chemical equations using atom counts.','Explain why coefficients may change but subscripts must not be changed.','Use balanced equations to interpret simple particle and mole ratios.'],
    sections:[
      {id:'what-equation-shows',label:'Parts of an equation',kicker:'A CHEMICAL REACTION IN SYMBOLS',title:'A chemical equation shows what reacts and what is formed',content:<>
        <p>A <strong>chemical equation</strong> uses element symbols and chemical formulae to represent a chemical reaction. The substances present before the reaction are the <strong>reactants</strong>; the substances produced are the <strong>products</strong>.</p>
        <div className="u5-equation-display">2H₂(g) + O₂(g) → 2H₂O(l)</div>
        <DataTable headers={['Part','Meaning','In the example']} rows={[[ 'Reactants','Starting substances on the left.','H₂ and O₂'],['Products','Substances formed on the right.','H₂O'],['Plus sign (+)','Separates two reactants or products.','Between H₂ and O₂'],['Arrow (→)','Means “reacts to form” or “yields”.','Points to H₂O'],['Coefficient','Number placed before a formula; multiplies the whole formula.','2H₂ means two hydrogen molecules'],['Subscript','Small number within a formula; gives atoms in one formula.','H₂ contains two H atoms']]} />
        <p>A coefficient of 1 is usually not written. In 2H₂O, the coefficient 2 multiplies the whole water formula: there are 4 hydrogen atoms and 2 oxygen atoms represented.</p>
      </>},
      {id:'state-symbols',label:'State symbols',kicker:'SHOW THE PHYSICAL STATE',title:'State symbols tell us the form of each substance in the reaction',content:<>
        <DataTable headers={['Symbol','Meaning','Example']} rows={[[ '(s)','Solid','Mg(s) is solid magnesium.'],['(l)','Liquid','H₂O(l) is liquid water.'],['(g)','Gas','O₂(g) is oxygen gas.'],['(aq)','Aqueous: dissolved in water','NaCl(aq) is sodium chloride dissolved in water.']]} />
        <p>State symbols appear after a formula in brackets. They do not change the identity of the substance; they tell the reader which physical state or solution form is involved.</p>
        <Note tone="caution">The symbol (aq) does not mean “a liquid of any kind”. It specifically means the substance is dissolved in water.</Note>
      </>},
      {id:'word-to-formula',label:'Word to formula equation',kicker:'WRITE BEFORE YOU BALANCE',title:'Translate the reaction description into correct chemical formulae',content:<>
        <p>Consider: <strong>magnesium reacts with oxygen to form magnesium oxide</strong>.</p>
        <Steps items={[{title:'Identify the reactants and product',detail:'Reactants: magnesium and oxygen. Product: magnesium oxide.'},{title:'Write each correct formula',detail:'Magnesium is Mg. Oxygen gas is diatomic O₂. Magnesium oxide is MgO.'},{title:'Write the unbalanced equation',detail:'Mg + O₂ → MgO. This is called a skeleton equation because it shows the correct substances but has not yet been balanced.'},{title:'Count the atoms',detail:'Left: 1 Mg and 2 O. Right: 1 Mg and 1 O. Oxygen is not balanced.'}]} />
        <div className="u5-equation-display">Mg + O₂ → MgO &nbsp; (unbalanced)</div>
        <Note tone="caution">Do not write oxygen gas as O when you mean the ordinary elemental gas. Oxygen exists as O₂ molecules under ordinary conditions.</Note>
      </>},
      {id:'balancing-method',label:'Balance equations step by step',kicker:'CHANGE COEFFICIENTS, NOT FORMULAE',title:'Balance each element so its atom count is equal on both sides',content:<>
        <p>A balanced equation has the same number of atoms of every element on the left and right. This reflects conservation of atoms in an ordinary chemical reaction.</p>
        <EquationBalanceDiagram />
        <Steps items={[{title:'Write the correct unbalanced formula equation',detail:'For hydrogen reacting with oxygen: H₂ + O₂ → H₂O.'},{title:'Count atoms on both sides',detail:'Left: 2 H and 2 O. Right: 2 H and 1 O. Oxygen is unbalanced.'},{title:'Balance oxygen with a coefficient',detail:'Put 2 before H₂O: H₂ + O₂ → 2H₂O. The right side now has 4 H and 2 O.'},{title:'Balance hydrogen with a coefficient',detail:'Put 2 before H₂: 2H₂ + O₂ → 2H₂O. Both sides now have 4 H and 2 O.'},{title:'Check and use the smallest whole numbers',detail:'H: 4 = 4. O: 2 = 2. The coefficients 2:1:2 are already in the smallest whole-number ratio.'}]} />
        <Note tone="success">Balanced equation: 2H₂ + O₂ → 2H₂O. The coefficients have changed, but the H₂ and O₂ formulae have not.</Note>
      </>},
      {id:'more-balancing-examples',label:'More worked equations',kicker:'PRACTISE THE COUNTING METHOD',title:'Use the same method for different reactions',content:<>
        <DataTable headers={['Word description','Unbalanced formula equation','Balanced equation']} rows={[[ 'Magnesium + oxygen → magnesium oxide','Mg + O₂ → MgO','2Mg + O₂ → 2MgO'],['Sodium + chlorine → sodium chloride','Na + Cl₂ → NaCl','2Na + Cl₂ → 2NaCl'],['Calcium carbonate → calcium oxide + carbon dioxide','CaCO₃ → CaO + CO₂','CaCO₃ → CaO + CO₂'],['Zinc + hydrochloric acid → zinc chloride + hydrogen','Zn + HCl → ZnCl₂ + H₂','Zn + 2HCl → ZnCl₂ + H₂'],['Methane + oxygen → carbon dioxide + water','CH₄ + O₂ → CO₂ + H₂O','CH₄ + 2O₂ → CO₂ + 2H₂O']]} />
        <p>Notice that some equations are already balanced, such as the decomposition of calcium carbonate. Do not add coefficients unless the atom counts require them.</p>
        <p>For methane combustion, check carbon first (1 on each side), hydrogen next (4 on the left and 2 per water molecule, so use 2H₂O), and oxygen last (2 oxygen atoms are needed in CO₂ plus 2 in the two water molecules, so use 2O₂).</p>
      </>},
      {id:'equation-ratios-common-errors',label:'Equation ratios and common errors',kicker:'READ THE BALANCED EQUATION',title:'Coefficients give relative particle and mole ratios',content:<>
        <p>In 2H₂ + O₂ → 2H₂O, the coefficient ratio is 2 : 1 : 2. This means two hydrogen molecules react with one oxygen molecule to form two water molecules. On a mole scale, the equation also gives a 2 mol : 1 mol : 2 mol ratio.</p>
        <DataTable headers={['Element','Reactant side','Product side','Balanced?']} rows={[[ 'Hydrogen','2 × 2 = 4','2 × 2 = 4','Yes'],['Oxygen','1 × 2 = 2','2 × 1 = 2','Yes']]} />
        <ConceptGrid items={[{title:'Do not change a subscript',detail:'Changing H₂O to H₂O₂ changes water into hydrogen peroxide. It changes the substance.',example:'Keep H₂O; adjust the coefficient in front.',tone:'peach'},{title:'Multiply the whole formula',detail:'A coefficient applies to every atom in the formula that follows.',example:'3Ca(OH)₂ contains 3 Ca, 6 O and 6 H.',tone:'blue'},{title:'Check every element',detail:'Balancing only one element is not enough. Count all elements after each change.',example:'Check C, H and O in a combustion equation.',tone:'mint'},{title:'Use the simplest ratio',detail:'If all coefficients can be divided by the same whole number, simplify them.',example:'2 : 2 : 2 becomes 1 : 1 : 1.',tone:'yellow'}]} />
      </>},
    ],
    recap:['Reactants are written on the left; products are written on the right.','A coefficient multiplies an entire formula; a subscript belongs to the formula itself.','State symbols are (s), (l), (g) and (aq).','A skeleton equation has correct formulae but may not be balanced.','Balance an equation by changing coefficients only, never subscripts.','Count every atom on both sides and use the smallest whole-number coefficients.','Balanced coefficients give relative particle and mole ratios.'],
    quizPath:quizRoute('writing-and-balancing-equations'),quizDescription:'Twelve questions on formula interpretation, state symbols, conservation of atoms and multi-step equation balancing.',sidebarTip:'After every coefficient change, recount all atoms. Never alter a subscript to force a balance.',sources:[sources.inspire,sources.equations,sources.ionic],
    quiz:{description:'Balance equations, interpret state symbols and calculate the atom counts represented by coefficients.',sidebarTip:'Use an atom-count table and check every element on both sides before submitting.',artLabel:'2H₂ + O₂ → 2H₂O',artCaption:'balanced reaction'},
  },
];

export const getSymbolsFormulaeLesson = (lessonId?: string) => symbolsFormulaeLessons.find((lesson) => lesson.id === lessonId);
