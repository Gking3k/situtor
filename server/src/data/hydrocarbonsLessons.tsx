import type { ReactNode } from 'react';
import type { LessonSection } from '../components/CurriculumLessonLayout';

export type HydrocarbonLesson = {
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

const sources = {
  inspire: { label: 'Federal Ministry of Education — Hydrocarbons (SS2 Chemistry)', url: 'https://inspire.education.gov.ng/lessons/1421/preview' },
  nerdc: { label: 'Nigeria curriculum — Hydrocarbon learning outcomes', url: 'https://elearn.education.gov.ng/level/senior-secondary/page/492/' },
  iupac: { label: 'IUPAC Gold Book — Hydrocarbons', url: 'https://goldbook.iupac.org/terms/view/H02889' },
  openstax: { label: 'OpenStax Chemistry — Hydrocarbons', url: 'https://openstax.org/books/chemistry/pages/20-1-hydrocarbons' },
  openstaxOrganic: { label: 'OpenStax Organic Chemistry — Alkanes and isomers', url: 'https://openstax.org/books/organic-chemistry/pages/3-2-alkane-isomers' },
  rscNaming: { label: 'Royal Society of Chemistry — Hydrocarbon structures and formula patterns', url: 'https://edu.rsc.org/download?ac=517823' },
  nistHomologous: { label: 'NIST — Homologous series definition', url: 'https://www.nist.gov/glossary-term/38781' },
  rscBenzene: { label: 'Royal Society of Chemistry — Benzene structure and aromatic chemistry', url: 'https://edu.rsc.org/cpd/how-to-teach-aromatic-chemistry-at-post-16/4020965.article' },
  cdcBenzene: { label: 'CDC — Benzene chemical hazards and health effects', url: 'https://www.cdc.gov/chemical-emergencies/chemical-fact-sheets/benzene.html' },
};

function Note({ children, tone = 'blue' }: { children: ReactNode; tone?: 'blue' | 'mint' | 'amber' | 'lavender' }) {
  return <aside className={`u11-note u11-note--${tone}`}>{children}</aside>;
}

function PlainWords({ children }: { children: ReactNode }) {
  return <aside className="u11-plain-words"><span>START WITH THE MAIN IDEA</span><div>{children}</div></aside>;
}

function DiagramCard({ children, caption, label }: { children: ReactNode; caption: string; label: string }) {
  return <figure className="u11-diagram-card"><div className="u11-diagram-scroll" role="group" tabIndex={0} aria-label={`${label}. Scroll horizontally on a narrow screen to inspect all labels.`}>{children}</div><figcaption>{caption}</figcaption></figure>;
}

function DataTable({ headers, rows }: { headers: string[]; rows: ReactNode[][] }) {
  return <div className="u11-table-wrap"><table className="u11-table"><thead><tr>{headers.map((header) => <th key={header}>{header}</th>)}</tr></thead><tbody>{rows.map((row, rowIndex) => <tr key={rowIndex}>{row.map((cell, cellIndex) => <td key={cellIndex}>{cell}</td>)}</tr>)}</tbody></table></div>;
}

function FormulaPanel({ title, formula, variables, steps }: { title: string; formula: ReactNode; variables: ReactNode; steps: { label: string; body: ReactNode }[] }) {
  return <div className="u11-formula-panel"><span className="u11-eyebrow">{title}</span><div className="u11-formula-panel__formula">{formula}</div><div className="u11-formula-panel__variables">{variables}</div><ol>{steps.map((step, index) => <li key={step.label}><strong>{index + 1}. {step.label}</strong><span>{step.body}</span></li>)}</ol></div>;
}

function WorkedExample({ title, given, steps, answer }: { title: string; given: ReactNode; steps: ReactNode[]; answer: ReactNode }) {
  return <div className="u11-worked-example"><div className="u11-worked-example__head"><span className="u11-eyebrow">WORKED EXAMPLE</span><h3>{title}</h3></div><div className="u11-worked-example__given"><strong>What we know</strong><div>{given}</div></div><ol>{steps.map((step, index) => <li key={index}><span>{index + 1}</span><div>{step}</div></li>)}</ol><div className="u11-worked-example__answer"><strong>Answer</strong><div>{answer}</div></div></div>;
}

function ClassificationDiagram() {
  return <DiagramCard label="Classification of hydrocarbons" caption="This map shows the main families introduced in this unit. The displayed general formulae apply to simple open-chain examples with one multiple bond; rings and additional multiple bonds change the formula.">
    <svg viewBox="0 0 1040 500" role="img" aria-labelledby="u11-class-title u11-class-desc">
      <title id="u11-class-title">Hydrocarbon family classification</title>
      <desc id="u11-class-desc">Hydrocarbons contain carbon and hydrogen only. They are grouped into aliphatic families such as alkanes, alkenes, alkynes and cycloalkanes, and aromatic hydrocarbons such as benzene.</desc>
      <defs><marker id="u11-class-arrow" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto" markerUnits="userSpaceOnUse"><path d="M0 0 L9 4.5 L0 9 Z" fill="#4f829b"/></marker></defs>
      <rect x="15" y="15" width="1010" height="470" rx="24" fill="#f8fbfd" stroke="#d7e6ed" strokeWidth="2"/>
      <rect x="350" y="32" width="340" height="100" rx="17" fill="#eaf4f8" stroke="#a8c8d8" strokeWidth="2"/>
      <text x="520" y="68" textAnchor="middle" fontSize="25" fontWeight="850" fill="#285a75">HYDROCARBONS</text>
      <text x="520" y="94" textAnchor="middle" fontSize="16" fill="#567287"><tspan x="520" dy="0">Compounds containing carbon</tspan><tspan x="520" dy="20">and hydrogen only</tspan></text>
      <path d="M520 132 V160 H260 V190 M520 160 H780 V190" fill="none" stroke="#4f829b" strokeWidth="4" markerEnd="url(#u11-class-arrow)"/>
      <rect x="75" y="190" width="370" height="76" rx="14" fill="#eef7f2" stroke="#b8d8c7" strokeWidth="2"/><text x="260" y="220" textAnchor="middle" fontSize="23" fontWeight="850" fill="#32664f">ALIPHATIC</text><text x="260" y="241" textAnchor="middle" fontSize="14" fill="#557667"><tspan x="260" dy="0">Open chains and non-aromatic rings</tspan><tspan x="260" dy="17">(including cycloalkanes)</tspan></text>
      <rect x="595" y="190" width="370" height="76" rx="14" fill="#f4f1fa" stroke="#d7cdea" strokeWidth="2"/><text x="780" y="220" textAnchor="middle" fontSize="23" fontWeight="850" fill="#625482">AROMATIC</text><text x="780" y="241" textAnchor="middle" fontSize="14" fill="#71668b"><tspan x="780" dy="0">Stable delocalised ring systems</tspan><tspan x="780" dy="17">such as benzene</tspan></text>
      <path d="M260 266 V300 H130 V342 M260 300 H410 V342 M270 300 V342" fill="none" stroke="#6f9b86" strokeWidth="3"/>
      {[[65,'ALKANES','Only C–C','single bonds','CₙH₂ₙ₊₂'],[205,'ALKENES','One C=C','open chain','CₙH₂ₙ'],[345,'ALKYNES','One C≡C','open chain','CₙH₂ₙ₋₂']].map(([x,title,descA,descB,formula]) => <g key={String(title)}><rect x={Number(x)} y="342" width="130" height="110" rx="12" fill="#fff" stroke="#cfe0e9" strokeWidth="2"/><text x={Number(x)+65} y="371" textAnchor="middle" fontSize="16" fontWeight="850" fill="#285a75">{title}</text><text x={Number(x)+65} y="395" textAnchor="middle" fontSize="12" fill="#567287"><tspan x={Number(x)+65} dy="0">{descA}</tspan><tspan x={Number(x)+65} dy="14">{descB}</tspan></text><text x={Number(x)+65} y="435" textAnchor="middle" fontSize="15" fontWeight="800" fill="#327b97">{formula}</text></g>)}
      <path d="M780 266 V342" stroke="#8b7bb0" strokeWidth="3"/><rect x="690" y="342" width="180" height="110" rx="12" fill="#fff" stroke="#d7cdea" strokeWidth="2"/><polygon points="780,365 810,383 810,414 780,432 750,414 750,383" fill="none" stroke="#6e6092" strokeWidth="4"/><circle cx="780" cy="398" r="8" fill="#8b7bb0"/><text x="780" y="448" textAnchor="middle" fontSize="14" fontWeight="800" fill="#625482">BENZENE, C₆H₆</text>
      <text x="520" y="472" textAnchor="middle" fontSize="12" fill="#567287">Cycloalkanes are another aliphatic family; simple saturated rings follow CₙH₂ₙ.</text>
      <path d="M780 258 V342" stroke="#8b7bb0" strokeWidth="3"/><rect x="690" y="342" width="180" height="110" rx="12" fill="#fff" stroke="#d7cdea" strokeWidth="2"/><polygon points="780,365 810,383 810,414 780,432 750,414 750,383" fill="none" stroke="#6e6092" strokeWidth="4"/><circle cx="780" cy="398" r="8" fill="#8b7bb0"/><text x="780" y="448" textAnchor="middle" fontSize="14" fontWeight="800" fill="#625482">BENZENE, C₆H₆</text>
    </svg>
  </DiagramCard>;
}

function HomologousDiagram() {
  return <DiagramCard label="First members of the alkane and alkene homologous series" caption="Each step in a homologous series adds one –CH₂– group. The structures are displayed in a simplified straight-chain form.">
    <svg viewBox="0 0 1040 430" role="img" aria-labelledby="u11-hom-title u11-hom-desc">
      <title id="u11-hom-title">Homologous series examples</title><desc id="u11-hom-desc">Methane through butane are alkanes. Ethene through butene are alkenes. Each next member differs by CH2.</desc>
      <rect x="12" y="12" width="1016" height="406" rx="22" fill="#f8fbfd" stroke="#d7e6ed" strokeWidth="2"/>
      <text x="44" y="54" fontSize="22" fontWeight="850" fill="#285a75">ALKANES · GENERAL FORMULA CₙH₂ₙ₊₂</text>
      {[[75,'METHANE','CH₄','1 C'],[310,'ETHANE','C₂H₆','2 C'],[545,'PROPANE','C₃H₈','3 C'],[780,'BUTANE','C₄H₁₀','4 C']].map(([x,name,formula,count])=><g key={String(name)}><rect x={Number(x)} y="76" width="185" height="95" rx="12" fill="#fff" stroke="#cfe0e9" strokeWidth="2"/><text x={Number(x)+92} y="107" textAnchor="middle" fontSize="16" fontWeight="850" fill="#285a75">{name}</text><text x={Number(x)+92} y="137" textAnchor="middle" fontSize="22" fontWeight="800" fill="#327b97">{formula}</text><text x={Number(x)+92} y="158" textAnchor="middle" fontSize="13" fill="#567287">{count} carbon atom(s)</text></g>)}
      <path d="M270 124 H300 M505 124 H535 M740 124 H770" stroke="#4f829b" strokeWidth="3"/><text x="285" y="113" textAnchor="middle" fontSize="12" fill="#567287">+CH₂</text><text x="520" y="113" textAnchor="middle" fontSize="12" fill="#567287">+CH₂</text><text x="755" y="113" textAnchor="middle" fontSize="12" fill="#567287">+CH₂</text>
      <line x1="42" y1="198" x2="998" y2="198" stroke="#e2ebf0" strokeWidth="2"/>
      <text x="44" y="238" fontSize="22" fontWeight="850" fill="#32664f">ALKENES · ONE C=C · GENERAL FORMULA CₙH₂ₙ</text>
      {[[180,'ETHENE','C₂H₄','CH₂=CH₂'],[440,'PROPENE','C₃H₆','CH₂=CH–CH₃'],[700,'BUT-1-ENE','C₄H₈','CH₂=CH–CH₂–CH₃']].map(([x,name,formula,structure])=><g key={String(name)}><rect x={Number(x)} y="262" width="220" height="112" rx="12" fill="#fff" stroke="#cfe0e9" strokeWidth="2"/><text x={Number(x)+110} y="293" textAnchor="middle" fontSize="16" fontWeight="850" fill="#285a75">{name}</text><text x={Number(x)+110} y="322" textAnchor="middle" fontSize="21" fontWeight="800" fill="#327b97">{formula}</text><text x={Number(x)+110} y="350" textAnchor="middle" fontSize="14" fill="#567287">{structure}</text></g>)}
    </svg>
  </DiagramCard>;
}

function NamingStepsDiagram() {
  return <DiagramCard label="Four steps for naming a simple hydrocarbon" caption="For a simple branched alkene or alkyne, choose the longest chain that contains the multiple bond, number it from the nearest end, and give the multiple bond the lowest possible position number.">
    <svg viewBox="0 0 1040 380" role="img" aria-labelledby="u11-name-title u11-name-desc">
      <title id="u11-name-title">A step-by-step hydrocarbon naming guide</title><desc id="u11-name-desc">Four numbered stages: choose the parent chain, number from the end nearest the multiple bond, identify branches, and use the correct suffix.</desc>
      <defs><marker id="u11-name-arrow" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto" markerUnits="userSpaceOnUse"><path d="M0 0 L9 4.5 L0 9 Z" fill="#4f829b"/></marker></defs>
      <rect x="12" y="12" width="1016" height="356" rx="22" fill="#f8fbfd" stroke="#d7e6ed" strokeWidth="2"/>
      <g><rect x="35" y="75" width="205" height="220" rx="14" fill="#fff" stroke="#cfe0e9" strokeWidth="2"/><circle cx="63" cy="104" r="16" fill="#327b97"/><text x="63" y="110" textAnchor="middle" fontSize="16" fontWeight="850" fill="#fff">1</text><text x="137" y="150" textAnchor="middle" fontSize="16" fontWeight="850" fill="#285a75">CHOOSE THE PARENT</text><text x="137" y="190" textAnchor="middle" fontSize="14" fill="#567287"><tspan x="137" dy="0">Choose the longest</tspan><tspan x="137" dy="21">chain containing the</tspan><tspan x="137" dy="21">C=C or C≡C bond.</tspan></text></g>
      <g><rect x="292" y="75" width="205" height="220" rx="14" fill="#fff" stroke="#cfe0e9" strokeWidth="2"/><circle cx="320" cy="104" r="16" fill="#327b97"/><text x="320" y="110" textAnchor="middle" fontSize="16" fontWeight="850" fill="#fff">2</text><text x="394" y="150" textAnchor="middle" fontSize="16" fontWeight="850" fill="#285a75">NUMBER THE CHAIN</text><text x="394" y="190" textAnchor="middle" fontSize="14" fill="#567287"><tspan x="394" dy="0">Start at the end</tspan><tspan x="394" dy="21">nearest the multiple</tspan><tspan x="394" dy="21">bond.</tspan></text></g>
      <g><rect x="549" y="75" width="205" height="220" rx="14" fill="#fff" stroke="#cfe0e9" strokeWidth="2"/><circle cx="577" cy="104" r="16" fill="#327b97"/><text x="577" y="110" textAnchor="middle" fontSize="16" fontWeight="850" fill="#fff">3</text><text x="651" y="150" textAnchor="middle" fontSize="16" fontWeight="850" fill="#285a75">LOCATE BRANCHES</text><text x="651" y="190" textAnchor="middle" fontSize="14" fill="#567287"><tspan x="651" dy="0">Name side groups,</tspan><tspan x="651" dy="21">such as methyl, and</tspan><tspan x="651" dy="21">give their positions.</tspan></text></g>
      <g><rect x="806" y="75" width="205" height="220" rx="14" fill="#fff" stroke="#cfe0e9" strokeWidth="2"/><circle cx="834" cy="104" r="16" fill="#327b97"/><text x="834" y="110" textAnchor="middle" fontSize="16" fontWeight="850" fill="#fff">4</text><text x="908" y="150" textAnchor="middle" fontSize="16" fontWeight="850" fill="#285a75">ADD THE SUFFIX</text><text x="908" y="190" textAnchor="middle" fontSize="14" fill="#567287"><tspan x="908" dy="0">Use -ane, -ene or</tspan><tspan x="908" dy="21">-yne, and include</tspan><tspan x="908" dy="21">the bond position.</tspan></text></g>
      <path d="M245 174 H282 M502 174 H539 M759 174 H796" stroke="#4f829b" strokeWidth="4" markerEnd="url(#u11-name-arrow)"/>
      <text x="520" y="337" textAnchor="middle" fontSize="18" fontWeight="800" fill="#32664f">Example: CH₃–CH=CH–CH₃ = but-2-ene</text>
    </svg>
  </DiagramCard>;
}

function FamiliesDiagram() {
  return <DiagramCard label="Structures of an alkane, alkene and alkyne" caption="A single bond is one shared pair of electrons; a double bond represents two shared pairs; a triple bond represents three shared pairs. The line drawings show connectivity, not exact three-dimensional shape.">
    <svg viewBox="0 0 1040 380" role="img" aria-labelledby="u11-family-title u11-family-desc">
      <title id="u11-family-title">Ethane, ethene and ethyne structures</title><desc id="u11-family-desc">Ethane has a carbon-carbon single bond; ethene has a double bond; ethyne has a triple bond.</desc>
      <rect x="12" y="12" width="1016" height="356" rx="22" fill="#f8fbfd" stroke="#d7e6ed" strokeWidth="2"/>
      {[[40,'ALKANE · ETHANE','C₂H₆','H₃C—CH₃','Single C–C bond','Saturated'],[365,'ALKENE · ETHENE','C₂H₄','H₂C=CH₂','One C=C double bond','Unsaturated'],[690,'ALKYNE · ETHYNE','C₂H₂','HC≡CH','One C≡C triple bond','Unsaturated']].map(([x,title,formula,structure,bond,state])=><g key={String(title)}><rect x={Number(x)} y="55" width="300" height="248" rx="16" fill="#fff" stroke="#cfe0e9" strokeWidth="2"/><text x={Number(x)+150} y="92" textAnchor="middle" fontSize="19" fontWeight="850" fill="#285a75">{title}</text><text x={Number(x)+150} y="136" textAnchor="middle" fontSize="25" fontWeight="850" fill="#327b97">{formula}</text><text x={Number(x)+150} y="190" textAnchor="middle" fontSize="28" fontWeight="850" fill="#254e68">{structure}</text><text x={Number(x)+150} y="236" textAnchor="middle" fontSize="15" fill="#567287">{bond}</text><rect x={Number(x)+84} y="258" width="132" height="28" rx="14" fill={state==='Saturated'?'#eaf5ee':'#fff4e7'}/><text x={Number(x)+150} y="277" textAnchor="middle" fontSize="13" fontWeight="800" fill={state==='Saturated'?'#3c775b':'#95652d'}>{state}</text></g>)}
    </svg>
  </DiagramCard>;
}

function IsomerDiagram() {
  return <DiagramCard label="Structural isomers of butane" caption="Both structures contain four carbon atoms and ten hydrogen atoms. The atoms are connected differently, so the substances are different compounds with the same molecular formula.">
    <svg viewBox="0 0 1040 390" role="img" aria-labelledby="u11-isomer-title u11-isomer-desc">
      <title id="u11-isomer-title">Two structural isomers of butane</title><desc id="u11-isomer-desc">Normal butane is a straight four-carbon chain. 2-methylpropane has a central carbon attached to three methyl groups and one hydrogen.</desc>
      <rect x="12" y="12" width="1016" height="366" rx="22" fill="#f8fbfd" stroke="#d7e6ed" strokeWidth="2"/>
      <rect x="42" y="45" width="450" height="280" rx="16" fill="#fff" stroke="#cfe0e9" strokeWidth="2"/><rect x="548" y="45" width="450" height="280" rx="16" fill="#fff" stroke="#cfe0e9" strokeWidth="2"/>
      <text x="267" y="82" textAnchor="middle" fontSize="22" fontWeight="850" fill="#285a75">BUTANE</text><text x="267" y="108" textAnchor="middle" fontSize="17" fill="#567287">CH₃–CH₂–CH₂–CH₃</text>
      <path d="M120 190 H205 H290 H375" stroke="#3d7d9b" strokeWidth="8" strokeLinecap="round"/><g fill="#3d7d9b"><circle cx="120" cy="190" r="16"/><circle cx="205" cy="190" r="16"/><circle cx="290" cy="190" r="16"/><circle cx="375" cy="190" r="16"/></g><g fill="#fff" fontSize="12" fontWeight="850" textAnchor="middle"><text x="120" y="194">C</text><text x="205" y="194">C</text><text x="290" y="194">C</text><text x="375" y="194">C</text></g><text x="267" y="252" textAnchor="middle" fontSize="17" fill="#567287">Four carbon atoms in one continuous chain</text>
      <text x="773" y="82" textAnchor="middle" fontSize="22" fontWeight="850" fill="#285a75">2-METHYLPROPANE</text><text x="773" y="108" textAnchor="middle" fontSize="17" fill="#567287">(CH₃)₃CH</text>
      <path d="M773 184 L680 133 M773 184 L866 133 M773 184 V262" stroke="#3d7d9b" strokeWidth="8" strokeLinecap="round"/><g fill="#3d7d9b"><circle cx="773" cy="184" r="16"/><circle cx="680" cy="133" r="14"/><circle cx="866" cy="133" r="14"/><circle cx="773" cy="262" r="14"/></g><g fill="#fff" fontSize="12" fontWeight="850" textAnchor="middle"><text x="773" y="188">C</text><text x="680" y="137">C</text><text x="866" y="137">C</text><text x="773" y="266">C</text></g><text x="773" y="298" textAnchor="middle" fontSize="16" fill="#567287">Central carbon bonded to three methyl groups</text>
      <rect x="370" y="337" width="300" height="28" rx="14" fill="#eaf4f8"/><text x="520" y="357" textAnchor="middle" fontSize="15" fontWeight="850" fill="#285a75">Same formula: C₄H₁₀</text>
    </svg>
  </DiagramCard>;
}

function GeometricIsomerDiagram() {
  return <DiagramCard label="Geometric isomers of but-2-ene" caption="The C=C bond does not allow free rotation. In cis-but-2-ene, the two CH₃ groups are on the same side; in trans-but-2-ene, they are on opposite sides.">
    <svg viewBox="0 0 1040 370" role="img" aria-labelledby="u11-geometric-title u11-geometric-desc">
      <title id="u11-geometric-title">Cis and trans forms of but-2-ene</title><desc id="u11-geometric-desc">The two geometric isomers have the same atom connections but different arrangements around the carbon-carbon double bond.</desc>
      <rect x="12" y="12" width="1016" height="346" rx="22" fill="#f8fbfd" stroke="#d7e6ed" strokeWidth="2"/>
      <rect x="45" y="44" width="450" height="270" rx="16" fill="#fff" stroke="#cfe0e9" strokeWidth="2"/><rect x="545" y="44" width="450" height="270" rx="16" fill="#fff" stroke="#cfe0e9" strokeWidth="2"/>
      <text x="270" y="80" textAnchor="middle" fontSize="22" fontWeight="850" fill="#285a75">CIS-BUT-2-ENE</text><text x="770" y="80" textAnchor="middle" fontSize="22" fontWeight="850" fill="#285a75">TRANS-BUT-2-ENE</text>
      <path d="M190 182 H350 M190 192 H350" stroke="#327b97" strokeWidth="5"/><path d="M190 182 L125 125 M190 192 L125 252 M350 182 L415 125 M350 192 L415 252" stroke="#6b8da1" strokeWidth="4"/><text x="125" y="111" textAnchor="middle" fontSize="17" fontWeight="800" fill="#986a33">CH₃</text><text x="415" y="111" textAnchor="middle" fontSize="17" fontWeight="800" fill="#986a33">CH₃</text><text x="125" y="278" textAnchor="middle" fontSize="17" fill="#567287">H</text><text x="415" y="278" textAnchor="middle" fontSize="17" fill="#567287">H</text>
      <path d="M680 182 H840 M680 192 H840" stroke="#327b97" strokeWidth="5"/><path d="M680 182 L615 125 M680 192 L615 252 M840 182 L905 125 M840 192 L905 252" stroke="#6b8da1" strokeWidth="4"/><text x="615" y="111" textAnchor="middle" fontSize="17" fontWeight="800" fill="#986a33">CH₃</text><text x="905" y="278" textAnchor="middle" fontSize="17" fontWeight="800" fill="#986a33">CH₃</text><text x="615" y="278" textAnchor="middle" fontSize="17" fill="#567287">H</text><text x="905" y="111" textAnchor="middle" fontSize="17" fill="#567287">H</text>
      <text x="270" y="300" textAnchor="middle" fontSize="14" fill="#567287">Methyl groups on the same side</text><text x="770" y="300" textAnchor="middle" fontSize="14" fill="#567287">Methyl groups on opposite sides</text>
    </svg>
  </DiagramCard>;
}

function BenzeneDiagram() {
  return <DiagramCard label="Benzene ring and delocalised electrons" caption="Each carbon atom is bonded to one hydrogen. The six carbon–carbon bonds are equivalent because six π electrons are delocalised around the ring; the circle represents this shared electron system.">
    <svg width="1040" height="490" viewBox="0 0 1040 490" role="img" aria-labelledby="u11-benzene-title u11-benzene-desc">
      <title id="u11-benzene-title">Benzene and delocalised bonding</title>
      <desc id="u11-benzene-desc">A planar hexagonal ring containing six carbon atoms. Each carbon is bonded to one hydrogen atom. The bonds around the ring are drawn as six separate segments that stop before the carbon labels. A circle inside the ring represents six delocalised pi electrons shared around the ring.</desc>
      <rect x="12" y="12" width="1016" height="466" rx="22" fill="#f8fbfd" stroke="#d7e6ed" strokeWidth="2"/>
      <text x="520" y="58" textAnchor="middle" fontSize="25" fontWeight="850" fill="#285a75">BENZENE · C₆H₆</text>

      {/* Six C–C bonds are separate segments. Each segment stops before the carbon label so no line runs through a C. */}
      <g stroke="#327b97" strokeWidth="6" strokeLinecap="round" fill="none">
        <path d="M540.8 138 L620.2 184"/>
        <path d="M641 220 L641 312"/>
        <path d="M620.2 348 L540.8 394"/>
        <path d="M499.2 394 L419.8 348"/>
        <path d="M399 312 L399 220"/>
        <path d="M419.8 184 L499.2 138"/>
      </g>

      {/* Delocalised pi-electron system inside the ring. */}
      <circle cx="520" cy="281" r="72" fill="none" stroke="#bd8b3f" strokeWidth="6" strokeDasharray="11 8"/>
      <text x="520" y="273" textAnchor="middle" fontSize="16" fontWeight="850" fill="#986a33">6 π</text>
      <text x="520" y="296" textAnchor="middle" fontSize="16" fontWeight="850" fill="#986a33">ELECTRONS</text>

      {/* C–H bonds radiate outwards. They begin beyond each carbon label and stop before the H label. */}
      <g stroke="#8ba6b7" strokeWidth="3.5" strokeLinecap="round">
        <path d="M520 104 V88"/>
        <path d="M659 185.5 L680 174"/>
        <path d="M659 346.5 L680 358"/>
        <path d="M520 428 V448"/>
        <path d="M381 346.5 L360 358"/>
        <path d="M381 185.5 L360 174"/>
      </g>

      {/* Carbon labels sit on clean backing discs; the C–C bonds do not cross the letters. */}
      <g fill="#eaf4f8">
        <circle cx="520" cy="126" r="20"/>
        <circle cx="641" cy="196" r="20"/>
        <circle cx="641" cy="336" r="20"/>
        <circle cx="520" cy="406" r="20"/>
        <circle cx="399" cy="336" r="20"/>
        <circle cx="399" cy="196" r="20"/>
      </g>
      <g fill="#285a75" fontSize="19" fontWeight="850" textAnchor="middle">
        <text x="520" y="133">C</text>
        <text x="641" y="203">C</text>
        <text x="641" y="343">C</text>
        <text x="520" y="413">C</text>
        <text x="399" y="343">C</text>
        <text x="399" y="203">C</text>
      </g>

      {/* One hydrogen is attached to each carbon. */}
      <g fill="#567287" fontSize="17" fontWeight="750" textAnchor="middle">
        <text x="520" y="82">H</text>
        <text x="696" y="180">H</text>
        <text x="696" y="366">H</text>
        <text x="520" y="468">H</text>
        <text x="344" y="366">H</text>
        <text x="344" y="180">H</text>
      </g>

      {/* Plain-language explanation cards, clear of the ring and its labels. */}
      <rect x="58" y="150" width="252" height="142" rx="16" fill="#fff" stroke="#cfe0e9" strokeWidth="2"/>
      <text x="184" y="181" textAnchor="middle" fontSize="16" fontWeight="850" fill="#285a75">WHAT THE CIRCLE</text>
      <text x="184" y="202" textAnchor="middle" fontSize="16" fontWeight="850" fill="#285a75">REPRESENTS</text>
      <text x="184" y="235" textAnchor="middle" fontSize="15" fill="#567287">Six π electrons are</text>
      <text x="184" y="257" textAnchor="middle" fontSize="15" fill="#567287">shared around the</text>
      <text x="184" y="279" textAnchor="middle" fontSize="15" fill="#567287">whole carbon ring.</text>

      <rect x="730" y="150" width="252" height="142" rx="16" fill="#fff" stroke="#cfe0e9" strokeWidth="2"/>
      <text x="856" y="185" textAnchor="middle" fontSize="18" fontWeight="850" fill="#285a75">BOND LENGTHS</text>
      <text x="856" y="222" textAnchor="middle" fontSize="14" fill="#567287">All six C–C bonds</text>
      <text x="856" y="242" textAnchor="middle" fontSize="14" fill="#567287">have equal length.</text>
      <text x="856" y="264" textAnchor="middle" fontSize="14" fill="#567287">Each lies between</text>
      <text x="856" y="284" textAnchor="middle" fontSize="14" fill="#567287">single and double bonds.</text>
    </svg>
  </DiagramCard>;
}

const lessons: HydrocarbonLesson[] = [
  {
    id: 'hydrocarbon-classes', lessonNumber: '01', title: 'Hydrocarbons and their classes', titleLead: 'Only carbon and hydrogen.', titleAccent: 'Many possible structures.', summary: 'Start with the meaning of hydrocarbons, then learn how carbon atoms link into chains and rings and how the main hydrocarbon families are classified.', duration: '25–30 minutes',
    learningObjectives: ['Define a hydrocarbon and identify examples from their formulas.', 'Explain why carbon can form four covalent bonds and link to other carbon atoms.', 'Distinguish aliphatic and aromatic hydrocarbons.', 'Classify alkanes, alkenes, alkynes and simple cyclic hydrocarbons.', 'Use the structural features of a molecule to identify its family.'],
    sections: [
      { id: 'meaning-and-examples', label: 'Meaning of hydrocarbons', kicker: 'THE SIMPLE DEFINITION', title: 'What is a hydrocarbon?', content: <>
        <PlainWords>A hydrocarbon is a compound made of only two elements: carbon and hydrogen. If a compound contains oxygen, nitrogen, chlorine or another element as well as carbon and hydrogen, it is not a hydrocarbon.</PlainWords>
        <p>Hydrocarbons are important in fuels and in the chemical industry. Methane in natural gas, propane in cooking gas, and many substances in petrol are hydrocarbons. Plastics and other materials can also be manufactured from hydrocarbon starting materials.</p>
        <DataTable headers={['Formula','Name','Hydrocarbon?','Reason']} rows={[[<b>CH₄</b>,'Methane','Yes','Contains only carbon and hydrogen.'],[<b>C₂H₆</b>,'Ethane','Yes','Contains only carbon and hydrogen.'],[<b>C₆H₆</b>,'Benzene','Yes','Contains only carbon and hydrogen.'],[<b>C₂H₅OH</b>,'Ethanol','No','Contains oxygen as well as carbon and hydrogen.'],[<b>CH₃Cl</b>,'Chloromethane','No','Contains chlorine.']]}/>
        <Note tone="mint">A quick check: look at every element symbol in the formula. A hydrocarbon contains C and H only—nothing else.</Note>
      </> },
      { id: 'carbon-bonding', label: 'Why carbon forms many compounds', kicker: 'THE STRUCTURAL REASON', title: 'Four bonds and carbon chains', content: <>
        <p>A carbon atom has atomic number 6 and the electron arrangement 2,4. It has four electrons in its outer shell. Carbon commonly shares electrons with other atoms to make four covalent bonds. A covalent bond is a shared pair of electrons between atoms.</p>
        <p>Carbon can bond to another carbon atom. This ability to form carbon–carbon bonds is called <strong>catenation</strong>. Carbon atoms can connect into long chains, branched chains and rings. They can also form single, double and triple bonds. This helps explain why there are so many different hydrocarbons.</p>
        <div className="u11-concept-grid"><article><strong>Single bond</strong><p>One shared pair of electrons between two atoms. Written C–C.</p></article><article><strong>Double bond</strong><p>Two shared pairs between two carbon atoms. Written C=C.</p></article><article><strong>Triple bond</strong><p>Three shared pairs between two carbon atoms. Written C≡C.</p></article><article><strong>Catenation</strong><p>Carbon atoms join to other carbon atoms to make chains, branches and rings.</p></article></div>
        <Note>Do not think that carbon usually forms a C⁴⁺ ion in hydrocarbons. It mainly forms covalent bonds by sharing electrons.</Note>
      </> },
      { id: 'classification', label: 'Main hydrocarbon classes', kicker: 'SORTING BY STRUCTURE', title: 'How are hydrocarbons classified?', content: <>
        <ClassificationDiagram />
        <p><strong>Aliphatic hydrocarbons</strong> include open-chain molecules and some non-aromatic rings. In this unit, the main open-chain families are alkanes, alkenes and alkynes. <strong>Aromatic hydrocarbons</strong> include benzene and compounds with similar stable, delocalised ring systems.</p>
        <DataTable headers={['Family','Important bond feature','Example']} rows={[[<b>Alkane</b>,'Only carbon–carbon single bonds.','Ethane, C₂H₆'],[<b>Alkene</b>,'At least one carbon–carbon double bond.','Ethene, C₂H₄'],[<b>Alkyne</b>,'At least one carbon–carbon triple bond.','Ethyne, C₂H₂'],[<b>Aromatic</b>,'A delocalised ring system.','Benzene, C₆H₆']]} />
      </> },
      { id: 'recognition', label: 'Recognising a family', kicker: 'APPLY THE CLASSIFICATION', title: 'Use bonds and structure as clues', content: <>
        <p>To identify a hydrocarbon family, inspect the carbon skeleton and the bonds between carbon atoms. A formula can help, but the structural formula gives more direct evidence of the bond type.</p>
        <ol className="u11-step-list"><li><strong>Check the elements:</strong> if the compound contains only C and H, it is a hydrocarbon.</li><li><strong>Look for a ring:</strong> decide whether it is a non-aromatic carbon ring or an aromatic ring.</li><li><strong>Inspect carbon–carbon bonds:</strong> only single bonds suggests an alkane; a C=C indicates an alkene; a C≡C indicates an alkyne.</li><li><strong>Check the whole structure:</strong> a compound with more than one type of feature may need a more specific name than a simple family label.</li></ol>
        <WorkedExample title="Classify the compound CH₃–CH=CH₂" given={<p>The structure contains only carbon and hydrogen, and it has three carbon atoms. The middle and last carbon atoms are joined by a double bond.</p>} steps={[<p><strong>Check the elements.</strong><br/>Only C and H are present, so it is a hydrocarbon.</p>,<p><strong>Inspect the carbon–carbon bonds.</strong><br/>There is one C=C double bond, so it is unsaturated.</p>,<p><strong>Name its family.</strong><br/>A hydrocarbon with a carbon–carbon double bond belongs to the alkene family.</p>]} answer={<p><strong>Propene, an alkene.</strong> Its molecular formula is C₃H₆.</p>}/>
      </> },
    ],
    recap: ['A hydrocarbon contains carbon and hydrogen only.', 'Carbon commonly forms four covalent bonds and can bond to itself by catenation.', 'Alkanes contain only C–C single bonds; alkenes contain C=C; alkynes contain C≡C.', 'Aromatic hydrocarbons such as benzene contain a delocalised ring system.', 'Use the atoms and bonds in a structure to classify a hydrocarbon.'],
    quizPath: '/lessons/hydrocarbon-classes/quiz', quizDescription: 'Check your understanding of the definition, carbon bonding and the main hydrocarbon families.', sidebarTip: 'Read the structural formula carefully. The type of carbon–carbon bond is a major clue to the family.', sources: [sources.inspire, sources.iupac, sources.openstax], nextLesson: { title: 'Homologous series and naming', path: '/lessons/homologous-series-and-naming' }, quiz: { description: '12 questions on the definition, catenation, bonding and classification of hydrocarbons.', sidebarTip: 'A hydrocarbon contains C and H only.', artLabel: 'C + H', artCaption: 'The elements in every hydrocarbon' },
  },
  {
    id: 'homologous-series-and-naming', lessonNumber: '02', title: 'Homologous series and naming', titleLead: 'Find the pattern.', titleAccent: 'Then name the structure.', summary: 'Learn how members of a homologous series are related, how general formulae identify simple families, and how to name straight-chain and simply branched hydrocarbons.', duration: '30–35 minutes',
    learningObjectives: ['Define a homologous series and state its main characteristics.', 'Explain why consecutive members differ by CH₂.', 'Use the general formulae for simple alkanes, alkenes and alkynes.', 'Recognise carbon-chain prefixes and hydrocarbon suffixes.', 'Name simple straight-chain and branched alkanes, alkenes and alkynes.'],
    sections: [
      { id: 'homologous-series', label: 'Meaning and features', kicker: 'A FAMILY WITH A PATTERN', title: 'What is a homologous series?', content: <>
        <PlainWords>A homologous series is a family of compounds with the same main structural feature and general formula. Members follow a pattern: each next member differs from the previous one by one –CH₂– group.</PlainWords>
        <p>For example, methane is CH₄, ethane is C₂H₆ and propane is C₃H₈. Moving from methane to ethane adds one carbon and two hydrogen atoms—one CH₂ group. Moving from ethane to propane adds another CH₂ group.</p>
        <DataTable headers={['Characteristic','What it means','Example']} rows={[[<b>Same functional feature</b>,'Members have the same type of bonding or functional group.','Alkenes have a C=C bond.'],[<b>Same general formula</b>,'A formula pattern represents all simple members of that family.','Alkanes: CₙH₂ₙ₊₂.'],[<b>CH₂ difference</b>,'Successive members differ by one CH₂ unit.','C₂H₆ → C₃H₈.'],[<b>Similar chemical reactions</b>,'Members tend to react in similar ways because they share the same key structural feature.','Alkenes undergo addition at C=C.'],[<b>Gradual physical changes</b>,'Boiling point and other physical properties change progressively with size.','Longer chains usually have higher boiling points.']]}/>
      </> },
      { id: 'general-formulae', label: 'General formulae', kicker: 'A SHORTCUT FOR A WHOLE FAMILY', title: 'Use n to represent the number of carbon atoms', content: <>
        <p>In a general formula, <strong>n</strong> is a whole number representing the number of carbon atoms in a member of the series. The subscript tells you how many atoms of each element are present.</p>
        <FormulaPanel title="Simple open-chain formulae" formula={<span>Alkane: CₙH₂ₙ₊₂<br/>Alkene: CₙH₂ₙ<br/>Alkyne: CₙH₂ₙ₋₂</span>} variables={<span>These formulae apply to open-chain hydrocarbons with one carbon–carbon double bond (alkenes) or one triple bond (alkynes). They do not cover every cyclic or multiply unsaturated structure.</span>} steps={[{label:'Choose n',body:'Set n equal to the number of carbon atoms in the molecule.'},{label:'Substitute into the family formula',body:'For an alkane with n = 4, use CₙH₂ₙ₊₂ to get C₄H₁₀.'},{label:'Check the family',body:'Make sure the structure fits the stated formula conditions, such as one C=C for the simple alkene formula.'}]}/>
        <HomologousDiagram />
        <WorkedExample title="Find the formula of an alkane with 6 carbon atoms" given={<p>The compound is an open-chain alkane, and n = 6.</p>} steps={[<p><strong>Write the alkane general formula.</strong><br/>CₙH₂ₙ₊₂.</p>,<p><strong>Substitute n = 6.</strong><br/>Hydrogen number = 2(6) + 2 = 14.</p>,<p><strong>Write the molecular formula.</strong><br/>There are 6 carbon atoms and 14 hydrogen atoms.</p>]} answer={<p><strong>C₆H₁₄, hexane.</strong></p>}/>
      </> },
      { id: 'prefixes-and-suffixes', label: 'Prefixes and suffixes', kicker: 'HOW THE NAME IS BUILT', title: 'Carbon prefixes and family endings', content: <>
        <DataTable headers={['Carbon atoms','Prefix','Alkane name','One double bond example']} rows={[[1,'meth-','methane','No one-carbon alkene exists.'],[2,'eth-','ethane','ethene'],[3,'prop-','propane','propene'],[4,'but-','butane','butene'],[5,'pent-','pentane','pentene'],[6,'hex-','hexane','hexene'],[7,'hept-','heptane','heptene'],[8,'oct-','octane','octene']]}/>
        <p>The <strong>prefix</strong> tells you how many carbon atoms are in the parent chain. The <strong>suffix</strong> identifies the family: <strong>-ane</strong> for an alkane, <strong>-ene</strong> for an alkene and <strong>-yne</strong> for an alkyne.</p>
        <div className="u11-equation-strip"><strong>eth + ene = ethene</strong><span>Two carbon atoms + a carbon–carbon double bond.</span></div>
        <Note tone="amber">An alkene or alkyne needs at least two carbon atoms because a C=C or C≡C bond must connect two carbon atoms.</Note>
      </> },
      { id: 'naming-rules', label: 'Naming simple hydrocarbons', kicker: 'A METHOD YOU CAN REPEAT', title: 'Name the parent chain and the bond position', content: <>
        <NamingStepsDiagram />
        <ol className="u11-step-list"><li><strong>Choose the parent chain:</strong> take the longest continuous carbon chain. For an alkene or alkyne, the parent chain must include the multiple bond.</li><li><strong>Number the chain:</strong> start from the end that gives the multiple bond the lowest possible number.</li><li><strong>Locate branches:</strong> identify side chains such as methyl (–CH₃) and ethyl (–CH₂CH₃), then give their positions.</li><li><strong>Complete the name:</strong> use the prefix, position number when needed, and the correct suffix.</li></ol>
        <DataTable headers={['Structure','Name','Why']} rows={[[<b>CH₃–CH₂–CH₃</b>,'Propane','Three carbons; all C–C bonds are single.'],[<b>CH₂=CH–CH₃</b>,'Prop-1-ene (often written propene)','Three carbons; double bond begins at carbon 1.'],[<b>CH₃–CH=CH–CH₃</b>,'But-2-ene','Four carbons; double bond begins at carbon 2.'],[<b>HC≡C–CH₃</b>,'Prop-1-yne','Three carbons; triple bond begins at carbon 1.'],[<b>CH₃–CH(CH₃)–CH₃</b>,'2-methylpropane','Three-carbon parent chain with a methyl group at carbon 2.']]}/>
        <Note>Some introductory materials omit the bond locant when only one position is possible, such as propene. Including the locant, prop-1-ene, makes the numbering explicit.</Note>
      </> },
    ],
    recap: ['Members of a homologous series share a structural feature and general formula.', 'Consecutive members differ by CH₂.', 'For simple open chains: alkanes CₙH₂ₙ₊₂, alkenes CₙH₂ₙ and alkynes CₙH₂ₙ₋₂.', 'The prefix indicates the number of carbon atoms; the suffix identifies the family.', 'For an alkene or alkyne, number the parent chain from the end nearest the multiple bond.'],
    quizPath: '/lessons/homologous-series-and-naming/quiz', quizDescription: 'Practise general formulae, homologous-series patterns, prefixes, suffixes and introductory naming.', sidebarTip: 'For alkenes and alkynes, give the multiple bond the lowest possible position number.', sources: [sources.inspire, sources.nerdc, sources.rscNaming, sources.nistHomologous, sources.openstax], nextLesson: { title: 'Alkanes, alkenes and alkynes', path: '/lessons/alkanes-alkenes-alkynes' }, quiz: { description: '12 questions on homologous series, general formulae and naming.', sidebarTip: 'Check the chain length and the position of the multiple bond.', artLabel: 'CₙHₘ', artCaption: 'Recognise the pattern' },
  },
  {
    id: 'alkanes-alkenes-alkynes', lessonNumber: '03', title: 'Alkanes, alkenes and alkynes', titleLead: 'Compare their bonds.', titleAccent: 'Understand their reactions.', summary: 'Explore the structures and properties of saturated and unsaturated hydrocarbons, then follow the most important reactions and learn how bromine water can test for a carbon–carbon double bond.', duration: '35–40 minutes',
    learningObjectives: ['Compare the bonding in alkanes, alkenes and alkynes.', 'Explain the meaning of saturated and unsaturated hydrocarbons.', 'Describe important physical properties of simple hydrocarbons.', 'Write and interpret combustion, substitution and addition equations.', 'Explain the bromine-water test for a carbon–carbon double bond.', 'Describe addition polymerisation using ethene.'],
    sections: [
      { id: 'bonding-and-saturation', label: 'Bonding and saturation', kicker: 'WHAT THE BONDS TELL YOU', title: 'Single, double and triple bonds', content: <>
        <PlainWords>Alkanes have only single bonds between carbon atoms. Alkenes have at least one carbon–carbon double bond. Alkynes have at least one carbon–carbon triple bond. The double and triple bonds allow these molecules to undergo addition reactions that ordinary alkanes do not undergo in the same way.</PlainWords>
        <FamiliesDiagram />
        <p><strong>Saturated</strong> means that the carbon chain has only carbon–carbon single bonds and therefore carries the maximum number of hydrogen atoms for that open-chain structure. Alkanes are saturated. <strong>Unsaturated</strong> means that the structure contains a carbon–carbon double or triple bond. Alkenes and alkynes are unsaturated.</p>
        <Note tone="mint">A carbon–hydrogen bond is also a single covalent bond. When describing an alkane as having only single bonds, we mean it has no carbon–carbon double or triple bond.</Note>
      </> },
      { id: 'physical-properties', label: 'Physical properties', kicker: 'HOW THE MOLECULES BEHAVE', title: 'What do simple hydrocarbons have in common?', content: <>
        <p>Many simple hydrocarbons are non-polar. This means their electrical charge is not strongly separated into positive and negative ends. Water is polar, so most hydrocarbons do not dissolve well in water. Many hydrocarbons mix more readily with non-polar organic liquids.</p>
        <DataTable headers={['Property','General pattern','Why it matters']} rows={[[<b>Solubility in water</b>,'Usually very low.','Most hydrocarbon molecules are non-polar, unlike water.'],[<b>Density</b>,'Many common liquid hydrocarbons are less dense than water.','An oil layer may float on water, although density varies by substance.'],[<b>Boiling point</b>,'Usually rises as the molecules become larger in a homologous series.','Larger molecules generally have stronger attractions between molecules.'],[<b>Physical state</b>,'Small members are often gases; larger members can be liquids or solids.','Molecular size affects melting and boiling behaviour.'],[<b>Flammability</b>,'Many hydrocarbons burn in oxygen.','Their combustion releases energy and forms products such as CO₂ and water when complete.']]}/>
        <p>These are broad patterns, not statements that every hydrocarbon behaves identically. Branching, ring structure and molecular shape can also affect physical properties.</p>
      </> },
      { id: 'combustion', label: 'Combustion', kicker: 'REACTION WITH OXYGEN', title: 'Complete and incomplete combustion', content: <>
        <p><strong>Combustion</strong> is a reaction in which a substance burns in oxygen and releases energy. When a hydrocarbon burns with enough oxygen, complete combustion produces carbon dioxide and water. When oxygen is limited, incomplete combustion may produce carbon monoxide and/or carbon (soot), as well as water.</p>
        <FormulaPanel title="Complete combustion of methane" formula={<span>CH₄ + 2O₂ → CO₂ + 2H₂O</span>} variables={<span>CH₄ = methane; O₂ = oxygen; CO₂ = carbon dioxide; H₂O = water. The coefficient 2 means two molecules or moles.</span>} steps={[{label:'Count carbon',body:'There is 1 carbon in CH₄, so place 1 CO₂ on the product side.'},{label:'Count hydrogen',body:'There are 4 hydrogen atoms in CH₄. Each H₂O has 2, so make 2H₂O.'},{label:'Count oxygen',body:'The products contain 2 oxygen atoms in CO₂ and 2 in 2H₂O: 4 total. Use 2O₂ to provide 4 oxygen atoms.'}]}/>
        <FormulaPanel title="One possible incomplete combustion equation" formula={<span>2CH₄ + 3O₂ → 2CO + 4H₂O</span>} variables={<span>CO is carbon monoxide. This equation illustrates incomplete combustion; other oxygen-limited conditions can produce carbon (soot).</span>} steps={[{label:'Count carbon and hydrogen',body:'Two methane molecules contain 2 carbon atoms and 8 hydrogen atoms. Two CO and four H₂O contain the same totals.'},{label:'Count oxygen',body:'The products contain 2 oxygen atoms in 2CO and 4 in 4H₂O: 6 in total. Three O₂ molecules provide 6.'},{label:'Compare the products',body:'Limited oxygen can produce toxic carbon monoxide rather than all carbon becoming carbon dioxide.'}]}/>
        <Note tone="amber">Carbon monoxide is a poisonous gas. It has no reliable smell or colour to warn people. Fuel-burning appliances must be correctly installed, maintained and ventilated; never test combustion gases by smelling them.</Note>
      </> },
      { id: 'reactions-and-tests', label: 'Characteristic reactions and tests', kicker: 'HOW UNSATURATION IS IDENTIFIED', title: 'Substitution, addition and the bromine-water test', content: <>
        <h3>Alkanes: substitution</h3><p>Alkanes are relatively less reactive than alkenes under ordinary conditions. One important reaction is substitution with a halogen such as chlorine in ultraviolet light. A hydrogen atom is replaced by a chlorine atom.</p>
        <div className="u11-equation-strip"><strong>CH₄ + Cl₂ → CH₃Cl + HCl</strong><span>Methane + chlorine → chloromethane + hydrogen chloride (in ultraviolet light).</span></div><ol className="u11-step-list"><li><strong>Read the left side:</strong> CH₄ is one methane molecule; Cl₂ is one chlorine molecule made of two chlorine atoms.</li><li><strong>Read the right side:</strong> CH₃Cl is chloromethane; HCl is hydrogen chloride.</li><li><strong>Check what changed:</strong> one H atom in methane was replaced by one Cl atom. There are 1 C, 4 H and 2 Cl atoms on each side.</li></ol>
        <h3>Alkenes: addition</h3><p>In an addition reaction, atoms add across the carbon–carbon double bond. The double bond becomes a single bond as new bonds form.</p>
        <div className="u11-equation-strip"><strong>CH₂=CH₂ + Br₂ → CH₂Br–CH₂Br</strong><span>Ethene + bromine → 1,2-dibromoethane.</span></div><ol className="u11-step-list"><li><strong>Identify the reactants:</strong> CH₂=CH₂ is ethene and Br₂ is a bromine molecule containing two bromine atoms.</li><li><strong>Follow the double bond:</strong> the C=C becomes a C–C single bond while one Br atom attaches to each carbon.</li><li><strong>Check the product:</strong> CH₂Br–CH₂Br has two C atoms, four H atoms and two Br atoms, matching the reactants.</li></ol>
        <p><strong>Bromine-water test:</strong> bromine water is orange/brown. When it is added to a sample containing a reactive C=C bond under the test conditions, its colour is discharged to colourless as bromine adds across the double bond. An alkane does not normally decolourise bromine water in the absence of ultraviolet light.</p>
        <Note tone="blue">The bromine-water test is a useful test for a carbon–carbon double bond at this level. It should be performed only as a teacher-approved demonstration or practical using eye protection and proper handling because bromine is hazardous.</Note>
        <h3>Alkynes: addition</h3><p>A carbon–carbon triple bond can also undergo addition. Hydrogen can add in stages. For example, adding one mole of hydrogen to ethyne can form ethene; adding another can form ethane, under suitable catalytic conditions.</p>
        <div className="u11-equation-strip"><strong>HC≡CH + H₂ → H₂C=CH₂</strong><span>Ethyne + hydrogen → ethene (one addition step).</span></div><p>There are two carbon atoms on each side. Ethyne has two hydrogen atoms; the H₂ molecule supplies two more, giving four hydrogen atoms in ethene. The triple bond is reduced to a double bond.</p>
      </> },
      { id: 'polymerisation', label: 'Addition polymerisation', kicker: 'SMALL MOLECULES JOIN', title: 'How ethene forms poly(ethene)', content: <>
        <p>Many ethene molecules can join together to make a long-chain polymer. This is called <strong>addition polymerisation</strong>. The C=C double bond in each ethene molecule opens, allowing each molecule to link to neighbouring units. The repeating section is written inside square brackets.</p>
        <FormulaPanel title="Addition polymerisation of ethene" formula={<span>nCH₂=CH₂ → [–CH₂–CH₂–]ₙ</span>} variables={<span>n means a very large number of ethene molecules. The bracketed –CH₂–CH₂– section is the repeating unit in poly(ethene).</span>} steps={[{label:'Start with ethene',body:'Each ethene molecule has two carbon atoms and one C=C double bond.'},{label:'Open the double bond',body:'The double bond changes to a single bond as new links form between neighbouring molecules.'},{label:'Build the chain',body:'Many ethene molecules join to form a long polymer chain called poly(ethene).'}]}/>
        <p>Poly(ethene) is used in bags, packaging, containers, pipes and insulation. Its properties depend on the polymer structure and manufacturing conditions. Plastic products are useful, but poor disposal can cause long-lasting pollution.</p>
      </> },
    ],
    recap: ['Alkanes are saturated and contain only C–C single bonds; alkenes and alkynes are unsaturated.', 'Many small hydrocarbons are non-polar, poorly soluble in water and flammable.', 'Complete combustion produces carbon dioxide and water; incomplete combustion can produce poisonous carbon monoxide and/or soot.', 'Alkanes can undergo substitution; alkenes and alkynes commonly undergo addition.', 'Bromine water changes from orange/brown to colourless when it reacts with a suitable C=C bond.', 'Ethene can undergo addition polymerisation to form poly(ethene).'],
    quizPath: '/lessons/alkanes-alkenes-alkynes/quiz', quizDescription: 'Apply bonding, physical properties, combustion equations, addition reactions and the bromine-water test.', sidebarTip: 'For every equation, identify the reaction type first, then count carbon, hydrogen, oxygen and halogen atoms on both sides.', sources: [sources.inspire, sources.openstax, sources.rscNaming], nextLesson: { title: 'Isomerism', path: '/lessons/isomerism' }, quiz: { description: '12 questions on alkane, alkene and alkyne structures, properties and reactions.', sidebarTip: 'A double or triple bond is the key structural clue for an unsaturated hydrocarbon.', artLabel: 'C–C / C=C / C≡C', artCaption: 'Three types of carbon bonding' },
  },
  {
    id: 'isomerism', lessonNumber: '04', title: 'Isomerism', titleLead: 'Same formula.', titleAccent: 'Different arrangement.', summary: 'Learn how compounds can share a molecular formula but have different structures. Compare chain and position isomerism, then understand cis–trans isomerism around a carbon–carbon double bond.', duration: '30–35 minutes',
    learningObjectives: ['Define isomerism and identify molecular formulae that can have isomers.', 'Distinguish molecular formula, structural formula and displayed formula.', 'Draw and compare the chain isomers of butane.', 'Explain position isomerism in a simple alkene.', 'Describe cis–trans geometric isomerism and the condition needed for it.'],
    sections: [
      { id: 'meaning-of-isomerism', label: 'Meaning of isomerism', kicker: 'SAME ATOM COUNT, DIFFERENT STRUCTURE', title: 'What are isomers?', content: <>
        <PlainWords>Isomers are different compounds that have the same molecular formula but a different arrangement of their atoms. The formula tells you how many atoms of each element are present; it does not always tell you how those atoms are connected or positioned.</PlainWords>
        <p>For example, two compounds can both have the formula C₄H₁₀. In one, the four carbon atoms form a continuous chain. In the other, the carbon skeleton is branched. Because their atoms are connected differently, they are different substances.</p>
        <DataTable headers={['Representation','What it tells you','Example']} rows={[[<b>Molecular formula</b>,'The number of each type of atom in one molecule.','C₄H₁₀'],[<b>Condensed structural formula</b>,'How atoms/groups connect in a compact form.','CH₃CH₂CH₂CH₃'],[<b>Displayed formula</b>,'Shows each atom and each covalent bond.','Every C–C and C–H bond is drawn.'],[<b>Isomers</b>,'Same molecular formula but different arrangements.','Butane and 2-methylpropane.']]}/>
      </> },
      { id: 'structural-isomerism', label: 'Structural isomerism', kicker: 'DIFFERENT CONNECTIONS', title: 'Chain and position isomerism', content: <>
        <h3>Chain isomerism</h3><p>Chain isomers have the same molecular formula but different arrangements of the carbon skeleton. Butane and 2-methylpropane are chain isomers.</p>
        <IsomerDiagram />
        <h3>Position isomerism</h3><p>Position isomers have the same carbon skeleton and the same family-defining feature, but the position of a multiple bond or substituent differs. For example, but-1-ene and but-2-ene both have the formula C₄H₈, but their C=C bonds are in different positions.</p>
        <div className="u11-equation-strip"><strong>But-1-ene: CH₂=CH–CH₂–CH₃</strong><span>The double bond starts at carbon 1.</span></div>
        <div className="u11-equation-strip"><strong>But-2-ene: CH₃–CH=CH–CH₃</strong><span>The double bond starts at carbon 2.</span></div>
      </> },
      { id: 'geometric-isomerism', label: 'Geometric isomerism', kicker: 'DIFFERENT POSITIONS IN SPACE', title: 'Why a double bond can produce cis and trans forms', content: <>
        <p>A carbon–carbon single bond can usually rotate, so groups can move around that bond. A carbon–carbon double bond is more rigid and does not allow free rotation without breaking the π bond. This can create two different arrangements called geometric isomers.</p>
        <GeometricIsomerDiagram />
        <p>In <strong>cis-but-2-ene</strong>, the two methyl (CH₃) groups are on the same side of the double bond. In <strong>trans-but-2-ene</strong>, they are on opposite sides.</p>
        <Note tone="amber">Not every alkene has cis–trans isomers. Each carbon atom in the C=C bond must be attached to two different groups. If one carbon has two identical groups, this type of geometric isomerism is not possible.</Note>
      </> },
      { id: 'checking-isomers', label: 'How to check isomers', kicker: 'A RELIABLE METHOD', title: 'Compare formula first, then structure', content: <>
        <ol className="u11-step-list"><li><strong>Compare molecular formulae:</strong> if the atom counts differ, the compounds are not isomers.</li><li><strong>Compare connections:</strong> check whether the carbon skeleton or position of a multiple bond changes.</li><li><strong>Check spatial arrangement:</strong> for a C=C bond, see whether groups can be arranged on the same or opposite sides without changing which atoms are connected.</li><li><strong>Check valency:</strong> every carbon must have four bonds in ordinary neutral hydrocarbon structures; hydrogen has one.</li></ol>
        <WorkedExample title="Are but-1-ene and but-2-ene isomers?" given={<p>But-1-ene is CH₂=CH–CH₂–CH₃. But-2-ene is CH₃–CH=CH–CH₃.</p>} steps={[<p><strong>Compare the molecular formula.</strong><br/>Both contain 4 carbon atoms and 8 hydrogen atoms: C₄H₈.</p>,<p><strong>Compare the structures.</strong><br/>Both have a four-carbon chain, but the double bond is in a different position.</p>,<p><strong>Classify the relationship.</strong><br/>They are members of the alkene family with the same molecular formula and different double-bond positions.</p>]} answer={<p><strong>Yes. They are position isomers.</strong></p>}/>
      </> },
    ],
    recap: ['Isomers have the same molecular formula but different arrangements.', 'Chain isomers have different carbon skeletons.', 'Position isomers differ in the position of a bond or substituent.', 'Geometric isomers have different arrangements around a rigid C=C bond.', 'For cis–trans isomerism, each carbon in the C=C bond must carry two different groups.'],
    quizPath: '/lessons/isomerism/quiz', quizDescription: 'Test your ability to compare molecular formulae, identify structural isomers and explain cis–trans arrangements.', sidebarTip: 'Do not call two drawings isomers until you have checked that their molecular formulae are the same.', sources: [sources.inspire, sources.nerdc, sources.openstaxOrganic, sources.openstax], nextLesson: { title: 'Aromatic hydrocarbons', path: '/lessons/aromatic-hydrocarbons' }, quiz: { description: '12 questions on chain, position and geometric isomerism.', sidebarTip: 'Same molecular formula is essential; then compare the arrangement.', artLabel: 'ISOMERS', artCaption: 'Same formula, different arrangement' },
  },
  {
    id: 'aromatic-hydrocarbons', lessonNumber: '05', title: 'Aromatic hydrocarbons', titleLead: 'A special ring.', titleAccent: 'A shared electron system.', summary: 'Explore benzene as the introductory aromatic hydrocarbon. Learn how its six carbon atoms are arranged, what delocalised electrons mean, and why benzene behaves differently from a typical alkene.', duration: '25–30 minutes',
    learningObjectives: ['Define aromatic hydrocarbons at an introductory level.', 'State the molecular formula and describe the ring structure of benzene.', 'Explain delocalised electrons using a clear model.', 'Interpret the circle representation and understand Kekulé structures as resonance drawings.', 'Compare the typical reactions of benzene and alkenes.', 'Recognise important safety hazards associated with benzene.'],
    sections: [
      { id: 'aromatic-family', label: 'Aromatic hydrocarbons', kicker: 'THE BENZENE FAMILY', title: 'What makes a hydrocarbon aromatic?', content: <>
        <PlainWords>An aromatic hydrocarbon is a hydrocarbon with a special stable ring system in which π electrons are shared, or delocalised, around the ring. Benzene is the best-known introductory example.</PlainWords>
        <p>Aliphatic hydrocarbons include open chains and non-aromatic carbon rings. Aromatic hydrocarbons have a different kind of ring bonding. The word “aromatic” is a chemical family name; it does not mean that every aromatic compound has a pleasant smell.</p>
        <DataTable headers={['Feature','Aliphatic example','Aromatic example']} rows={[[<b>Structure</b>,'Propane: open carbon chain.','Benzene: six-carbon ring.'],[<b>Bonding</b>,'May have single, double or triple bonds.','Has a delocalised π-electron system.'],[<b>Formula example</b>,'Propane: C₃H₈.','Benzene: C₆H₆.'],[<b>Typical reaction pattern</b>,'Alkenes commonly undergo addition.','Benzene commonly undergoes substitution while retaining its aromatic ring.']]}/>
      </> },
      { id: 'benzene-structure', label: 'Structure of benzene', kicker: 'SIX CARBONS IN A RING', title: 'Understanding C₆H₆', content: <>
        <p>Benzene has the molecular formula <strong>C₆H₆</strong>. It contains six carbon atoms arranged in a flat hexagonal ring. Each carbon is also bonded to one hydrogen atom.</p>
        <BenzeneDiagram />
        <p>Each carbon contributes one electron to a shared π-electron system above and below the plane of the ring. These electrons are not confined to one particular pair of carbon atoms. They are <strong>delocalised</strong> across the six-carbon ring.</p>
        <p>In a simple Lewis/Kekulé drawing, benzene is often shown with alternating single and double bonds. Those drawings are useful representations, but they are not a picture of three fixed single bonds and three fixed double bonds in the real molecule. All six carbon–carbon bonds are equivalent and have the same intermediate character.</p>
        <Note tone="mint">The circle inside a hexagon is a shortcut for the delocalised π-electron system. It does not mean that there is a separate atom or ring of liquid inside benzene.</Note>
      </> },
      { id: 'properties-and-reactions', label: 'Properties and reactions', kicker: 'WHY BENZENE IS DIFFERENT', title: 'Benzene tends to preserve its ring', content: <>
        <p>Benzene is a colourless, volatile liquid with a characteristic smell, but smelling it is not a safe way to identify it. It is flammable, does not mix well with water and is hazardous to health.</p>
        <p>Typical alkenes readily undergo addition across a C=C bond. Benzene is more stable because its π electrons are delocalised around the ring. Many of its characteristic reactions are <strong>substitution reactions</strong>: one hydrogen atom is replaced by another atom or group while the aromatic ring is retained.</p>
        <div className="u11-equation-strip"><strong>C₆H₆ + Br₂ → C₆H₅Br + HBr</strong><span>Illustrative bromination equation: benzene + bromine → bromobenzene + hydrogen bromide, using a suitable catalyst such as FeBr₃.</span></div><ol className="u11-step-list"><li><strong>Identify what enters:</strong> C₆H₆ is benzene and Br₂ is bromine.</li><li><strong>Identify what changes:</strong> one hydrogen attached to the ring is replaced by one bromine atom, forming C₆H₅Br.</li><li><strong>Account for the remaining atoms:</strong> the removed hydrogen joins the other bromine atom to form HBr. Carbon, hydrogen and bromine atoms are conserved.</li></ol>
        <DataTable headers={['Substance','Typical reaction emphasised at this level','Main idea']} rows={[[<b>Ethene</b>,'Addition with bromine.','The C=C bond opens and atoms add across it.'],[<b>Benzene</b>,'Substitution with bromine under catalytic conditions.','A hydrogen is replaced and the aromatic ring is retained.']]}/>
        <Note tone="amber">Benzene is a known human carcinogen. It can cause serious health effects, including blood and bone-marrow damage. It must not be handled, smelled or used in student experiments. This lesson is for understanding its chemistry only.</Note>
      </> },
      { id: 'uses-and-safety', label: 'Uses and safety', kicker: 'INDUSTRIAL IMPORTANCE AND RISK', title: 'Why benzene matters—and why it must be controlled', content: <>
        <p>Benzene is used mainly as an industrial starting material to manufacture other chemicals. These chemicals can be used in producing plastics, synthetic fibres, resins, detergents and other materials. Direct use of benzene is restricted because of its toxicity and cancer risk.</p>
        <p>Workers who may be exposed require engineered controls, monitoring and protective procedures. Benzene should never be treated as an ordinary household solvent or a substance for classroom handling.</p>
        <DataTable headers={['Useful role','Safety point']} rows={[[<b>Chemical feedstock</b>,'Used in controlled industrial processes to make other chemicals.'],[<b>Laboratory reference compound</b>,'May appear in professional chemical study, but not for unsupervised student handling.'],[<b>Health hazard</b>,'Exposure can occur by breathing vapour or through skin contact; strict controls are required.']]}/>
      </> },
    ],
    recap: ['Benzene, C₆H₆, is the introductory example of an aromatic hydrocarbon.', 'Its six carbon atoms form a planar hexagonal ring, with one hydrogen attached to each carbon.', 'Six π electrons are delocalised around the ring; all six C–C bonds are equivalent.', 'Kekulé drawings are resonance representations, not alternating fixed bonds in the actual structure.', 'Benzene commonly undergoes substitution rather than ordinary alkene-style addition.', 'Benzene is carcinogenic and must not be handled or smelled by students.'],
    quizPath: '/lessons/aromatic-hydrocarbons/quiz', quizDescription: 'Check your understanding of benzene structure, delocalisation, aromatic reactions and safety.', sidebarTip: 'The circle in a benzene ring represents delocalised π electrons; benzene does not have three permanently fixed double bonds.', sources: [sources.inspire, sources.nerdc, sources.rscBenzene, sources.openstax, sources.cdcBenzene], quiz: { description: '12 questions on aromatic hydrocarbons, benzene structure, reactions and safety.', sidebarTip: 'Remember why benzene tends to undergo substitution and why it is hazardous.', artLabel: 'C₆H₆', artCaption: 'Benzene and its aromatic ring' },
  },
];

export const hydrocarbonsLessons = lessons;
export const getHydrocarbonsLesson = (id?: string) => hydrocarbonsLessons.find((lesson) => lesson.id === id);
