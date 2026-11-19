import type { ReactNode } from 'react';
import type { LessonSection } from '../components/CurriculumLessonLayout';

export type CarbonLesson = {
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
  inspire: { label: 'Federal Ministry of Education — Carbon and its Compounds (SS1 Chemistry)', url: 'https://inspire.education.gov.ng/lessons/87/preview' },
  rscAllotropes: { label: 'Royal Society of Chemistry — Structure and bonding of carbon allotropes', url: 'https://edu.rsc.org/cpd/how-to-teach-structure-and-bonding-of-carbon-at-14-16/4020312.article' },
  rscCarbonates: { label: 'Royal Society of Chemistry — Tests for negative ions, including carbonate', url: 'https://edu.rsc.org/experiments/testing-for-negative-ions/758.article' },
  rscCombustion: { label: 'Royal Society of Chemistry — Identifying the products of combustion', url: 'https://edu.rsc.org/experiments/identifying-the-products-of-combustion-demonstration/707.article' },
  usgsCoal: { label: 'USGS — What are the types of coal?', url: 'https://www.usgs.gov/faqs/what-are-types-coal' },
  eiaCoal: { label: 'U.S. Energy Information Administration — Coal', url: 'https://www.eia.gov/kids/energy-sources/coal/' },
  cdcCo: { label: 'CDC — Carbon monoxide poisoning basics', url: 'https://www.cdc.gov/carbon-monoxide/about/' },
  nioshCo: { label: 'NIOSH — Carbon monoxide chemical hazard information', url: 'https://www.cdc.gov/niosh/npg/npgd0105.html' },
  eiaNaturalGas: { label: 'U.S. Energy Information Administration — Natural gas', url: 'https://www.eia.gov/kids/energy-sources/natural-gas/' },
  eiaRefining: { label: 'U.S. Energy Information Administration — How crude oil is refined', url: 'https://www.eia.gov/energyexplained/oil-and-petroleum-products/refining-crude-oil-the-refining-process.php' },
};

function Note({ children, tone = 'blue' }: { children: ReactNode; tone?: 'blue' | 'mint' | 'amber' | 'lavender' }) {
  return <aside className={`u10-note u10-note--${tone}`}>{children}</aside>;
}

function PlainWords({ children }: { children: ReactNode }) {
  return <aside className="u10-plain-words"><span>START WITH THE MAIN IDEA</span><div>{children}</div></aside>;
}

function DiagramCard({ children, caption, label }: { children: ReactNode; caption: string; label: string }) {
  return <figure className="u10-diagram-card"><div className="u10-diagram-scroll" role="group" tabIndex={0} aria-label={`${label}. Scroll horizontally on a narrow screen to inspect all labels.`}>{children}</div><figcaption>{caption}</figcaption></figure>;
}

function FormulaPanel({ title, formula, variables, steps }: { title: string; formula: ReactNode; variables: ReactNode; steps: { label: string; body: ReactNode }[] }) {
  return <div className="u10-formula-panel"><span className="u10-eyebrow">{title}</span><div className="u10-formula-panel__formula">{formula}</div><div className="u10-formula-panel__variables">{variables}</div><ol>{steps.map((step, index) => <li key={step.label}><strong>{index + 1}. {step.label}</strong><span>{step.body}</span></li>)}</ol></div>;
}

function DataTable({ headers, rows }: { headers: string[]; rows: ReactNode[][] }) {
  return <div className="u10-table-wrap"><table className="u10-table"><thead><tr>{headers.map((header) => <th key={header}>{header}</th>)}</tr></thead><tbody>{rows.map((row, rowIndex) => <tr key={rowIndex}>{row.map((cell, cellIndex) => <td key={cellIndex}>{cell}</td>)}</tr>)}</tbody></table></div>;
}

function WorkedExample({ title, given, steps, answer }: { title: string; given: ReactNode; steps: ReactNode[]; answer: ReactNode }) {
  return <div className="u10-worked-example"><div className="u10-worked-example__head"><span className="u10-eyebrow">WORKED EXAMPLE</span><h3>{title}</h3></div><div className="u10-worked-example__given"><strong>What we know</strong><div>{given}</div></div><ol>{steps.map((step, index) => <li key={index}><span>{index + 1}</span><div>{step}</div></li>)}</ol><div className="u10-worked-example__answer"><strong>Answer</strong><div>{answer}</div></div></div>;
}

function AllotropesDiagram() {
  return <DiagramCard label="Carbon allotropes comparison" caption="The drawings are simplified models. They show how the same carbon element can form different structures; they are not to scale.">
    <svg viewBox="0 0 1040 660" role="img" aria-labelledby="u10-allotrope-title u10-allotrope-desc">
      <title id="u10-allotrope-title">Four forms of carbon: diamond, graphite, graphene and fullerene</title>
      <desc id="u10-allotrope-desc">Four panels compare carbon structures. Diamond has a three-dimensional network with each carbon bonded to four neighbours. Graphite has stacked hexagonal layers with delocalised electrons. Graphene is one layer of graphite. Fullerene C60 is a hollow cage of sixty carbon atoms.</desc>
      <rect x="12" y="12" width="1016" height="636" rx="24" fill="#f8fbfd" stroke="#d7e6ed" strokeWidth="2"/>
      <g>
        <rect x="32" y="42" width="472" height="280" rx="18" fill="#fff" stroke="#cfe0e9" strokeWidth="2"/>
        <text x="268" y="78" textAnchor="middle" fontSize="24" fontWeight="900" fill="#285a75">DIAMOND</text>
        <text x="268" y="105" textAnchor="middle" fontSize="16" fill="#567287">Each carbon atom forms four covalent bonds</text>
        <g stroke="#5e849c" strokeWidth="7" strokeLinecap="round" fill="none">
          <path d="M155 190 L220 146 L290 190 L355 146 M155 190 L220 235 L290 190 L355 235 M220 146 L220 235 M290 190 L290 250 M155 190 L155 250 M355 146 L355 205"/>
          <path d="M220 146 L250 120 L320 164 L290 190 M220 235 L250 265 L320 220 L290 190" stroke="#9ab5c5" strokeWidth="4"/>
        </g>
        <g fill="#2e789b" stroke="#fff" strokeWidth="2"><circle cx="155" cy="190" r="14"/><circle cx="220" cy="146" r="14"/><circle cx="290" cy="190" r="14"/><circle cx="355" cy="146" r="14"/><circle cx="220" cy="235" r="14"/><circle cx="355" cy="235" r="14"/><circle cx="250" cy="120" r="12"/><circle cx="320" cy="164" r="12"/><circle cx="250" cy="265" r="12"/><circle cx="320" cy="220" r="12"/></g>
        <text x="268" y="303" textAnchor="middle" fontSize="15" fontWeight="700" fill="#45687d">Rigid 3D network · very hard · no free electrons</text>

        <rect x="536" y="42" width="472" height="280" rx="18" fill="#fff" stroke="#cfe0e9" strokeWidth="2"/>
        <text x="772" y="78" textAnchor="middle" fontSize="24" fontWeight="900" fill="#285a75">GRAPHITE</text>
        <text x="772" y="105" textAnchor="middle" fontSize="16" fill="#567287">Three covalent bonds per carbon in each layer</text>
        <g stroke="#4c819d" strokeWidth="4" fill="none" strokeLinejoin="round">
          <path d="M630 155 L660 138 L690 155 L720 138 L750 155 L780 138 L810 155 L840 138 L870 155 L900 138 L930 155"/>
          <path d="M630 185 L660 168 L690 185 L720 168 L750 185 L780 168 L810 185 L840 168 L870 185 L900 168 L930 185"/>
          <path d="M630 215 L660 198 L690 215 L720 198 L750 215 L780 198 L810 215 L840 198 L870 215 L900 198 L930 215"/>
        </g>
        <g fill="#4c819d"><circle cx="660" cy="138" r="6"/><circle cx="720" cy="138" r="6"/><circle cx="780" cy="138" r="6"/><circle cx="840" cy="138" r="6"/><circle cx="900" cy="138" r="6"/><circle cx="660" cy="168" r="6"/><circle cx="720" cy="168" r="6"/><circle cx="780" cy="168" r="6"/><circle cx="840" cy="168" r="6"/><circle cx="900" cy="168" r="6"/><circle cx="660" cy="198" r="6"/><circle cx="720" cy="198" r="6"/><circle cx="780" cy="198" r="6"/><circle cx="840" cy="198" r="6"/><circle cx="900" cy="198" r="6"/></g>
        <path d="M650 232 H910 M650 249 H910 M650 266 H910" stroke="#c28e43" strokeWidth="2.5" strokeDasharray="8 7"/>
        <text x="772" y="303" textAnchor="middle" fontSize="15" fontWeight="700" fill="#45687d">Layers slide · conducts through delocalised electrons</text>

        <g transform="translate(0 18)">
        <rect x="32" y="326" width="472" height="270" rx="18" fill="#fff" stroke="#cfe0e9" strokeWidth="2"/>
        <text x="268" y="362" textAnchor="middle" fontSize="24" fontWeight="900" fill="#285a75">GRAPHENE</text>
        <text x="268" y="389" textAnchor="middle" fontSize="16" fill="#567287">One single sheet of carbon atoms</text>
        <g stroke="#4c819d" strokeWidth="4" fill="none">
          <path d="M100 465 L135 445 L170 465 L205 445 L240 465 L275 445 L310 465 L345 445 L380 465 L415 445"/>
          <path d="M100 505 L135 485 L170 505 L205 485 L240 505 L275 485 L310 505 L345 485 L380 505 L415 485"/>
          <path d="M135 445 L135 485 M170 465 L170 505 M205 445 L205 485 M240 465 L240 505 M275 445 L275 485 M310 465 L310 505 M345 445 L345 485 M380 465 L380 505"/>
        </g>
        <g fill="#2e789b"><circle cx="100" cy="465" r="6"/><circle cx="135" cy="445" r="6"/><circle cx="170" cy="465" r="6"/><circle cx="205" cy="445" r="6"/><circle cx="240" cy="465" r="6"/><circle cx="275" cy="445" r="6"/><circle cx="310" cy="465" r="6"/><circle cx="345" cy="445" r="6"/><circle cx="380" cy="465" r="6"/><circle cx="415" cy="445" r="6"/></g>
        <text x="268" y="558" textAnchor="middle" fontSize="15" fontWeight="700" fill="#45687d">Very thin · strong · conducts electricity</text>

        <rect x="536" y="326" width="472" height="270" rx="18" fill="#fff" stroke="#cfe0e9" strokeWidth="2"/>
        <text x="772" y="362" textAnchor="middle" fontSize="24" fontWeight="900" fill="#285a75">FULLERENE (C₆₀)</text>
        <text x="772" y="389" textAnchor="middle" fontSize="16" fill="#567287">A hollow cage made from carbon atoms</text>
        <g stroke="#5689a2" strokeWidth="3" fill="#e9f3f8">
          <path d="M772 421 L830 439 L862 483 L840 530 L772 552 L704 530 L682 483 L714 439 Z"/>
          <path d="M714 439 L748 454 L772 421 L796 454 L830 439 M682 483 L727 483 L748 454 L796 454 L817 483 L862 483 M704 530 L727 483 L772 507 L817 483 L840 530 M748 454 L772 507 L796 454 M727 483 L772 552 L817 483" fill="none"/>
        </g>
        <g fill="#397f9e"><circle cx="772" cy="421" r="7"/><circle cx="714" cy="439" r="7"/><circle cx="830" cy="439" r="7"/><circle cx="682" cy="483" r="7"/><circle cx="862" cy="483" r="7"/><circle cx="704" cy="530" r="7"/><circle cx="840" cy="530" r="7"/><circle cx="772" cy="552" r="7"/></g>
        <text x="772" y="578" textAnchor="middle" fontSize="15" fontWeight="700" fill="#45687d">Molecular cage · includes C₆₀ and related structures</text>
        </g>
      </g>
    </svg>
  </DiagramCard>;
}

function CoalificationDiagram() {
  const stages = [
    ['PLANT REMAINS', 'Buried vegetation'],
    ['PEAT', 'Partly decayed plants'],
    ['LIGNITE', 'Brown coal; moist'],
    ['SUB-BITUMINOUS', 'Intermediate coal rank'],
    ['BITUMINOUS', 'Important industrial coal'],
    ['ANTHRACITE', 'Highest rank; carbon-rich'],
  ];
  return <DiagramCard label="Coal formation and ranks" caption="Coalification is a slow natural process over geological time. Peat is the precursor; lignite, sub-bituminous, bituminous and anthracite are the main coal ranks shown here.">
    <svg viewBox="0 0 1080 520" role="img" aria-labelledby="u10-coal-title u10-coal-desc">
      <title id="u10-coal-title">Coal formation and the main coal ranks</title>
      <desc id="u10-coal-desc">Buried plant remains become peat and then lignite, sub-bituminous coal, bituminous coal and anthracite as heat and pressure act over millions of years. A second panel shows industrial heating of coal without air to make coke, coal tar, coal gas and ammoniacal liquor.</desc>
      <defs><marker id="u10-coal-arrow" markerUnits="userSpaceOnUse" markerWidth="12" markerHeight="12" refX="11" refY="6" orient="auto"><path d="M0 0 L12 6 L0 12 Z" fill="#3f7894"/></marker></defs>
      <rect x="12" y="12" width="1056" height="496" rx="22" fill="#f8fbfd" stroke="#d7e6ed" strokeWidth="2"/>
      <text x="540" y="52" textAnchor="middle" fontSize="25" fontWeight="900" fill="#285b75">HOW COAL FORMS</text>
      {stages.map(([name,desc],i)=>{const x=30+i*170;const cx=x+72.5;return <g key={name}>
        <rect x={x} y="82" width="145" height="132" rx="14" fill={i<2?'#eef7ed':'#f3f4f6'} stroke="#cbdde7" strokeWidth="2"/>
        <circle cx={cx} cy="120" r="23" fill={['#6a9565','#8c7958','#92745b','#75675a','#524f4a','#343a40'][i]}/>
        {i===0&&<path d={`M${cx-13} 130 l13 -23 l13 23 M${cx} 107 v-13`} stroke="#dce8d5" strokeWidth="4" fill="none"/>}
        {i>0&&<path d={`M${cx-18} 126 q18 -25 36 0 q-18 20 -36 0`} fill="#d5c3a4" stroke="#6c665d" strokeWidth="2"/>}
        <text x={cx} y="166" textAnchor="middle" fontSize={i===3?12.5:14} fontWeight="900" fill="#315b73">{name}</text>
        <text x={cx} y="188" textAnchor="middle" fontSize="12" fill="#567287">{desc}</text>
        {i<5&&<path d={`M${x+149} 146 H${x+165}`} stroke="#3f7894" strokeWidth="3" markerEnd="url(#u10-coal-arrow)"/>}
      </g>})}
      <path d="M90 238 H990" stroke="#bd8b43" strokeWidth="3" strokeDasharray="9 7"/>
      <text x="540" y="265" textAnchor="middle" fontSize="17" fontWeight="800" fill="#94672f">Increasing burial, heat and pressure over millions of years</text>
      <rect x="34" y="294" width="1012" height="192" rx="16" fill="#fff" stroke="#d7e6ed" strokeWidth="2"/>
      <text x="540" y="330" textAnchor="middle" fontSize="21" fontWeight="900" fill="#285b75">INDUSTRIAL HEATING OF COAL (DESTRUCTIVE DISTILLATION)</text>
      <rect x="64" y="358" width="170" height="92" rx="12" fill="#f0f2f4" stroke="#71899a" strokeWidth="2"/>
      <text x="149" y="392" textAnchor="middle" fontSize="18" fontWeight="900" fill="#405b70">COAL</text><text x="149" y="418" textAnchor="middle" fontSize="14" fill="#536e80">Strongly heated</text>
      <path d="M244 404 H308" stroke="#3f7894" strokeWidth="4" markerEnd="url(#u10-coal-arrow)"/>
      <rect x="324" y="350" width="190" height="108" rx="12" fill="#fff5e9" stroke="#d4a46b" strokeWidth="2"/>
      <text x="419" y="385" textAnchor="middle" fontSize="18" fontWeight="900" fill="#865a2e">OVEN</text><text x="419" y="411" textAnchor="middle" fontSize="14" fill="#7b624b">Little or no air</text><text x="419" y="435" textAnchor="middle" fontSize="13" fill="#7b624b">Prevents ordinary burning</text>
      <path d="M524 404 H578" stroke="#3f7894" strokeWidth="4" markerEnd="url(#u10-coal-arrow)"/>
      <g>
        {[['COKE','Solid residue','#e8ecee'],['COAL TAR','Condensable liquid','#f6eadf'],['COAL GAS','Gas mixture','#e8f4fa'],['AMMONIACAL LIQUOR','Aqueous by-product','#eff6ee']].map(([name,desc,fill],i)=>{const x=594+(i%2)*218;const y=354+Math.floor(i/2)*62;return <g key={name}><rect x={x} y={y} width="202" height="52" rx="9" fill={fill} stroke="#cbdde7"/><text x={x+101} y={y+21} textAnchor="middle" fontSize={name==='AMMONIACAL LIQUOR'?12:14} fontWeight="900" fill="#315b73">{name}</text><text x={x+101} y={y+40} textAnchor="middle" fontSize="12" fill="#567287">{desc}</text></g>})}
      </g>
    </svg>
  </DiagramCard>;
}

function CarbonOxidesDiagram() {
  return <DiagramCard label="Comparison of carbon monoxide and carbon dioxide" caption="The bond drawings show the usual bond order: carbon monoxide has a triple bond, while carbon dioxide has two double bonds. The lower panel compares how oxygen supply changes the combustion product.">
    <svg viewBox="0 0 1040 500" role="img" aria-labelledby="u10-oxides-title u10-oxides-desc">
      <title id="u10-oxides-title">Carbon monoxide and carbon dioxide comparison</title>
      <desc id="u10-oxides-desc">Carbon monoxide is drawn as C≡O with a triple covalent bond. Carbon dioxide is drawn as O=C=O with two double bonds in a straight line. The lower panel contrasts incomplete and complete combustion.</desc>
      <rect x="12" y="12" width="1016" height="476" rx="22" fill="#f8fbfd" stroke="#d7e6ed" strokeWidth="2"/>
      <rect x="34" y="42" width="462" height="258" rx="18" fill="#fff4f1" stroke="#e8b7ad" strokeWidth="2"/>
      <rect x="544" y="42" width="462" height="258" rx="18" fill="#eef7fb" stroke="#c4dce8" strokeWidth="2"/>
      <text x="265" y="80" textAnchor="middle" fontSize="25" fontWeight="900" fill="#9f4339">CARBON MONOXIDE</text><text x="265" y="111" textAnchor="middle" fontSize="20" fontWeight="800" fill="#315b73">CO · carbon(II) oxide</text>
      <g><path d="M233 178 H287 M233 190 H287 M233 202 H287" stroke="#6c879a" strokeWidth="4" strokeLinecap="round"/><circle cx="190" cy="190" r="43" fill="#343f49" stroke="#fff" strokeWidth="4"/><circle cx="330" cy="190" r="43" fill="#df6658" stroke="#fff" strokeWidth="4"/><text x="190" y="201" textAnchor="middle" fontSize="31" fontWeight="900" fill="#fff">C</text><text x="330" y="201" textAnchor="middle" fontSize="31" fontWeight="900" fill="#fff">O</text></g>
      <text x="265" y="244" textAnchor="middle" fontSize="14" fontWeight="800" fill="#9f4339">C≡O · triple covalent bond</text><text x="265" y="270" textAnchor="middle" fontSize="15" fill="#765c59">Colourless, odourless and highly poisonous</text>
      <text x="775" y="80" textAnchor="middle" fontSize="25" fontWeight="900" fill="#286b8a">CARBON DIOXIDE</text><text x="775" y="111" textAnchor="middle" fontSize="20" fontWeight="800" fill="#315b73">CO₂ · carbon(IV) oxide</text>
      <g><path d="M693 183 H732 M693 197 H732 M818 183 H857 M818 197 H857" stroke="#6c879a" strokeWidth="4" strokeLinecap="round"/><circle cx="650" cy="190" r="43" fill="#df6658" stroke="#fff" strokeWidth="4"/><circle cx="775" cy="190" r="43" fill="#343f49" stroke="#fff" strokeWidth="4"/><circle cx="900" cy="190" r="43" fill="#df6658" stroke="#fff" strokeWidth="4"/><text x="650" y="201" textAnchor="middle" fontSize="31" fontWeight="900" fill="#fff">O</text><text x="775" y="201" textAnchor="middle" fontSize="31" fontWeight="900" fill="#fff">C</text><text x="900" y="201" textAnchor="middle" fontSize="31" fontWeight="900" fill="#fff">O</text></g>
      <text x="775" y="244" textAnchor="middle" fontSize="14" fontWeight="800" fill="#286b8a">O=C=O · two double bonds</text><text x="775" y="270" textAnchor="middle" fontSize="15" fill="#526f81">Colourless gas; turns limewater milky</text>
      <rect x="34" y="326" width="972" height="132" rx="16" fill="#fff" stroke="#d7e6ed" strokeWidth="2"/>
      <text x="520" y="358" textAnchor="middle" fontSize="20" fontWeight="900" fill="#315b73">OXYGEN SUPPLY CHANGES THE MAIN PRODUCT</text>
      <rect x="66" y="378" width="424" height="58" rx="10" fill="#fff0eb"/><text x="278" y="401" textAnchor="middle" fontSize="16" fontWeight="800" fill="#a24e3b">Limited oxygen · incomplete combustion</text><text x="278" y="423" textAnchor="middle" fontSize="19" fontWeight="900" fill="#7f4137">2C + O₂ → 2CO</text>
      <rect x="550" y="378" width="424" height="58" rx="10" fill="#eef7fb"/><text x="762" y="401" textAnchor="middle" fontSize="16" fontWeight="800" fill="#286b8a">Plenty of oxygen · complete combustion</text><text x="762" y="423" textAnchor="middle" fontSize="19" fontWeight="900" fill="#285a75">C + O₂ → CO₂</text>
    </svg>
  </DiagramCard>;
}

function LimewaterTestDiagram() {
  return <DiagramCard label="Test for carbon dioxide using limewater" caption="Carbon dioxide enters through a delivery tube that dips below the limewater surface. The bubbles rise through the solution. Carbon dioxide reacts with calcium hydroxide to form insoluble calcium carbonate, a white solid that makes the limewater look milky. With excess carbon dioxide, the solid can dissolve as soluble calcium hydrogencarbonate forms.">
    <svg viewBox="0 0 1000 500" role="img" aria-labelledby="u10-lime-title u10-lime-desc">
      <title id="u10-lime-title">Carbon dioxide test with limewater</title>
      <desc id="u10-lime-desc">A gas generator releases carbon dioxide when dilute acid reacts with a carbonate. The gas travels through a delivery tube, which enters the limewater vessel and dips below the liquid surface. Bubbles rise through the clear limewater. A white calcium carbonate precipitate forms and makes the solution cloudy. The reaction equation is shown below the apparatus.</desc>
      <defs>
        <marker id="u10-lime-arrow" markerUnits="userSpaceOnUse" markerWidth="12" markerHeight="12" refX="10" refY="6" orient="auto"><path d="M1 1 L10 6 L1 11 Z" fill="#3b829f"/></marker>
      </defs>
      <rect x="12" y="12" width="976" height="476" rx="22" fill="#f8fbfd" stroke="#d7e6ed" strokeWidth="2"/>
      <text x="500" y="50" textAnchor="middle" fontSize="23" fontWeight="900" fill="#285b75">THE LIMEWATER TEST FOR CARBON DIOXIDE</text>

      <rect x="48" y="112" width="220" height="208" rx="16" fill="#fff4ed" stroke="#e4c3a7" strokeWidth="2"/>
      <text x="158" y="145" textAnchor="middle" fontSize="18" fontWeight="900" fill="#875b35">GAS GENERATOR</text>
      <path d="M84 194 H124 L135 177 L153 212 L171 177 L189 212 L211 194 H232" stroke="#a27954" strokeWidth="5" fill="none"/>
      <text x="158" y="244" textAnchor="middle" fontSize="14" fill="#735b47">Dilute acid + carbonate</text>
      <text x="158" y="267" textAnchor="middle" fontSize="14" fill="#735b47">releases carbon dioxide</text>

      <rect x="300" y="122" width="180" height="54" rx="10" fill="#eef7fb" stroke="#bcd8e5" strokeWidth="1.5"/>
      <text x="390" y="145" textAnchor="middle" fontSize="14.5" fontWeight="900" fill="#286b8a">DELIVERY TUBE</text>
      <text x="390" y="164" textAnchor="middle" fontSize="13.5" fill="#567287">CO₂ flows to limewater</text>

      <rect x="586" y="116" width="146" height="218" rx="22" fill="#fff" stroke="#6f91a4" strokeWidth="5"/>
      <path d="M592 204 H726 V311 Q726 328 709 328 H609 Q592 328 592 311Z" fill="#d8edf2"/>
      <path d="M268 194 H500 V105 H654 V274" stroke="#3b829f" strokeWidth="6" fill="none" strokeLinecap="round" strokeLinejoin="round" markerEnd="url(#u10-lime-arrow)"/>
      <g fill="#fff" stroke="#72a9bd" strokeWidth="2"><circle cx="654" cy="289" r="7"/><circle cx="638" cy="268" r="6"/><circle cx="670" cy="249" r="6"/><circle cx="646" cy="228" r="5"/><circle cx="666" cy="211" r="4"/></g>
      <text x="659" y="364" textAnchor="middle" fontSize="18" fontWeight="900" fill="#315b73">LIMEWATER</text>
      <text x="659" y="386" textAnchor="middle" fontSize="14" fill="#567287">Clear at first · turns milky</text>

      <path d="M760 225 H810" stroke="#3b829f" strokeWidth="4" fill="none" markerEnd="url(#u10-lime-arrow)"/>
      <rect x="838" y="132" width="122" height="194" rx="14" fill="#fff" stroke="#d7e6ed" strokeWidth="2"/>
      <text x="899" y="163" textAnchor="middle" fontSize="15" fontWeight="900" fill="#315b73">OBSERVATION</text>
      <circle cx="899" cy="214" r="28" fill="#f4f5ee" stroke="#d1d5cc" strokeWidth="2"/>
      <g fill="#fff" stroke="#c5c7b6"><circle cx="887" cy="206" r="5"/><circle cx="906" cy="223" r="6"/><circle cx="913" cy="201" r="4"/></g>
      <text x="899" y="268" textAnchor="middle" fontSize="14" fill="#567287">White solid</text>
      <text x="899" y="289" textAnchor="middle" fontSize="14" fill="#567287">CaCO₃ forms</text>

      <rect x="48" y="408" width="912" height="42" rx="10" fill="#eaf4f8"/>
      <text x="504" y="425" textAnchor="middle" fontSize="16" fontWeight="900" fill="#285b75">CO₂ + Ca(OH)₂ → CaCO₃(s) + H₂O</text>
      <text x="504" y="442" textAnchor="middle" fontSize="11.5" fill="#567287">Carbon dioxide + limewater → white calcium carbonate + water</text>
      <rect x="48" y="458" width="912" height="20" rx="7" fill="#fff5e9" stroke="#ead5b8" strokeWidth=".8"/>
      <text x="504" y="472" textAnchor="middle" fontSize="11.5" fontWeight="700" fill="#795b3d">Teacher-supervised demonstration only. Wear eye protection; never inhale the gas.</text>
    </svg>
  </DiagramCard>;
}
function PetroleumTrapDiagram() {
  return <DiagramCard label="Formation and trapping of petroleum and natural gas" caption="A simplified model: microscopic marine organisms settle in oxygen-poor mud. Burial, heat and pressure over geological time can form petroleum and natural gas in source rocks. Hydrocarbons migrate into porous reservoir rock and collect beneath an impermeable cap rock. Because gas is generally less dense than oil and formation water, it commonly forms the upper layer in a trap.">
    <svg viewBox="0 0 1200 820" role="img" aria-labelledby="u10-trap-title u10-trap-desc">
      <title id="u10-trap-title">Formation and geological trapping of oil and natural gas</title>
      <desc id="u10-trap-desc">Three numbered stages show marine organic remains settling, burial under sediment with heat and pressure, and migration through connected pores. The lower geological cross-section labels overlying sedimentary rocks, impermeable cap rock, source rock, porous reservoir rock, gas cap, oil, formation water and a production well that penetrates the reservoir.</desc>
      <defs>
        <marker id="u10-trap-arrow" markerUnits="userSpaceOnUse" markerWidth="14" markerHeight="14" refX="12" refY="7" orient="auto"><path d="M1 1 L12 7 L1 13 Z" fill="#347e9c"/></marker>
      </defs>
      <rect x="12" y="12" width="1176" height="796" rx="22" fill="#f8fbfd" stroke="#d7e6ed" strokeWidth="2"/>
      <text x="600" y="48" textAnchor="middle" fontSize="25" fontWeight="900" fill="#285b75">HOW PETROLEUM AND NATURAL GAS ACCUMULATE</text>

      <g>
        <rect x="34" y="76" width="350" height="150" rx="15" fill="#eef7fb" stroke="#cfe0e9" strokeWidth="2"/>
        <circle cx="62" cy="105" r="16" fill="#3f829e"/><text x="62" y="111" textAnchor="middle" fontSize="16" fontWeight="900" fill="#fff">1</text>
        <text x="220" y="111" textAnchor="middle" fontSize="18" fontWeight="900" fill="#315b73">ORGANIC REMAINS</text>
        <text x="220" y="143" textAnchor="middle" fontSize="14.5" fill="#567287">Tiny sea organisms die and settle</text>
        <text x="220" y="164" textAnchor="middle" fontSize="14.5" fill="#567287">with fine mud on the sea floor.</text>
        <path d="M120 190 Q160 178 200 190 T280 190" stroke="#6b9b85" strokeWidth="5" fill="none"/><circle cx="150" cy="183" r="5" fill="#6b9b85"/><circle cx="190" cy="187" r="5" fill="#6b9b85"/><circle cx="230" cy="182" r="5" fill="#6b9b85"/>

        <rect x="425" y="76" width="350" height="150" rx="15" fill="#f7f2e8" stroke="#ded0b8" strokeWidth="2"/>
        <circle cx="453" cy="105" r="16" fill="#92795a"/><text x="453" y="111" textAnchor="middle" fontSize="16" fontWeight="900" fill="#fff">2</text>
        <text x="615" y="103" textAnchor="middle" fontSize="16.5" fontWeight="900" fill="#725b3f">BURIAL, HEAT</text>
        <text x="615" y="123" textAnchor="middle" fontSize="16.5" fontWeight="900" fill="#725b3f">AND PRESSURE</text>
        <text x="615" y="157" textAnchor="middle" fontSize="14" fill="#725b3f">More sediment builds up above the remains.</text>
        <text x="615" y="178" textAnchor="middle" fontSize="14" fill="#725b3f">Heat and pressure act over millions of years.</text>
        <path d="M505 198 H705 M505 208 H705 M505 218 H705" stroke="#a98e69" strokeWidth="4"/>

        <rect x="816" y="76" width="350" height="150" rx="15" fill="#eef7f2" stroke="#cfe3d7" strokeWidth="2"/>
        <circle cx="844" cy="105" r="16" fill="#3f829e"/><text x="844" y="111" textAnchor="middle" fontSize="16" fontWeight="900" fill="#fff">3</text>
        <text x="1000" y="111" textAnchor="middle" fontSize="18" fontWeight="900" fill="#315b73">MIGRATION</text>
        <text x="1000" y="143" textAnchor="middle" fontSize="14.5" fill="#567287">Oil and gas move through connected</text>
        <text x="1000" y="164" textAnchor="middle" fontSize="14.5" fill="#567287">pores and cracks in the rocks.</text>
        <path d="M875 194 H1085" stroke="#3983a0" strokeWidth="4" strokeDasharray="8 7" markerEnd="url(#u10-trap-arrow)"/>
        <path d="M389 151 H418 M780 151 H809" stroke="#347e9c" strokeWidth="4"/><path d="M408 143 L422 151 L408 159 Z M799 143 L813 151 L799 159 Z" fill="#347e9c"/>
      </g>

      <rect x="34" y="252" width="1132" height="536" rx="16" fill="#e8ddc7" stroke="#d3c3a8" strokeWidth="1.5"/>
      <path d="M34 330 Q240 292 430 326 T820 326 T1166 322 V408 Q980 438 790 410 T410 412 T34 408Z" fill="#9eada8"/>
      <path d="M34 408 Q245 378 455 412 T850 408 T1166 412 V788 H34Z" fill="#d7bd96"/>
      <text x="72" y="354" fontSize="17" fontWeight="900" fill="#405e66">IMPERMEABLE CAP ROCK</text>
      <text x="72" y="379" fontSize="14" fill="#405e66">The low-permeability seal helps prevent hydrocarbons escaping upwards.</text>
      <text x="72" y="454" fontSize="14.5" fontWeight="800" fill="#765d42">OVERLYING SEDIMENTARY ROCKS</text>

      <path d="M72 604 Q210 562 360 604 L360 710 H72Z" fill="#9d795c" stroke="#785a43" strokeWidth="3"/>
      <text x="216" y="638" textAnchor="middle" fontSize="17" fontWeight="900" fill="#fff">SOURCE ROCK</text>
      <text x="216" y="665" textAnchor="middle" fontSize="14" fill="#fff">Organic-rich rock where</text>
      <text x="216" y="687" textAnchor="middle" fontSize="14" fill="#fff">hydrocarbons form.</text>
      <path d="M365 620 Q455 578 550 530" stroke="#347e9c" strokeWidth="5" fill="none" strokeDasharray="10 8" markerEnd="url(#u10-trap-arrow)"/>
      <rect x="372" y="650" width="168" height="40" rx="8" fill="#f7fbfd" stroke="#c7dce6"/>
      <text x="456" y="667" textAnchor="middle" fontSize="13.5" fontWeight="900" fill="#286b8a">HYDROCARBON</text>
      <text x="456" y="682" textAnchor="middle" fontSize="13.5" fontWeight="900" fill="#286b8a">MIGRATION</text>

      <path d="M540 492 Q640 416 750 475 Q840 526 970 468 L970 640 Q840 696 750 640 Q640 586 540 640Z" fill="#e9f2f5" stroke="#668a9d" strokeWidth="3"/>
      <path d="M540 516 Q640 447 750 500 Q840 550 970 493 L970 542 Q840 599 750 547 Q640 493 540 568Z" fill="#e8c77d"/>
      <path d="M540 568 Q640 493 750 547 Q840 599 970 542 L970 640 Q840 696 750 640 Q640 586 540 640Z" fill="#526e84"/>
      <path d="M985 433 L945 482" stroke="#315b73" strokeWidth="2.5" fill="none"/>
      <rect x="990" y="397" width="154" height="58" rx="9" fill="#f7fbfd" stroke="#b9d0dc" strokeWidth="1.5"/>
      <text x="1067" y="420" textAnchor="middle" fontSize="14" fontWeight="900" fill="#315b73">GAS CAP</text>
      <text x="1067" y="439" textAnchor="middle" fontSize="11.5" fill="#567287">Gas collects above oil</text>
      <text x="755" y="542" textAnchor="middle" fontSize="16.5" fontWeight="900" fill="#71521f">OIL</text>
      <text x="755" y="610" textAnchor="middle" fontSize="16" fontWeight="900" fill="#fff">FORMATION WATER</text>

      <path d="M910 252 V686" stroke="#394e5d" strokeWidth="13"/>
      <path d="M883 252 H937" stroke="#394e5d" strokeWidth="8"/>
      <rect x="950" y="266" width="190" height="54" rx="8" fill="#fff" stroke="#cbdde7"/>
      <text x="1045" y="287" textAnchor="middle" fontSize="13" fontWeight="900" fill="#315b73">PRODUCTION WELL</text>
      <text x="1045" y="306" textAnchor="middle" fontSize="11.5" fill="#567287">Drilled wellbore / casing</text>
      <path d="M950 293 H922" stroke="#394e5d" strokeWidth="2.5" fill="none"/>
      <rect x="985" y="520" width="160" height="76" rx="9" fill="#f7fbfd" stroke="#b9d0dc" strokeWidth="1.5"/>
      <text x="1065" y="543" textAnchor="middle" fontSize="14" fontWeight="900" fill="#315b73">WELLBORE</text>
      <text x="1065" y="564" textAnchor="middle" fontSize="12.5" fill="#567287">Passes through the seal</text>
      <text x="1065" y="582" textAnchor="middle" fontSize="12.5" fill="#567287">and reaches the reservoir.</text>
      <path d="M985 558 H925" stroke="#394e5d" strokeWidth="2" fill="none"/>

      <rect x="520" y="704" width="340" height="62" rx="10" fill="#f7fbfd" stroke="#b9d0dc" strokeWidth="1.5"/>
      <text x="690" y="729" textAnchor="middle" fontSize="16" fontWeight="900" fill="#315b73">POROUS RESERVOIR ROCK</text>
      <text x="690" y="750" textAnchor="middle" fontSize="13.5" fill="#567287">Connected pores store and transmit fluids.</text>
      <text x="1090" y="770" textAnchor="end" fontSize="12.5" fill="#567287">Schematic · not to scale</text>
    </svg>
  </DiagramCard>;
}
function RefiningColumnDiagram() {
  const rows = [
    ['REFINERY GASES / LPG','Top outlet · lowest boiling range','Bottled gas and chemical feedstock'],
    ['PETROL / GASOLINE','Upper section','Motor-fuel blend components'],
    ['NAPHTHA','Upper-middle section','Important petrochemical feedstock'],
    ['KEROSENE','Middle section','Jet fuel and heating uses'],
    ['DIESEL / GAS OIL','Lower-middle section','Diesel fuel and further processing'],
    ['FUEL OIL','Lower section','Industrial and marine fuel uses'],
    ['RESIDUE / BITUMEN','Bottom · highest boiling range','Road surfacing and heavy products'],
  ];
  return <DiagramCard label="Fractional distillation of crude oil" caption="The column separates groups of hydrocarbons by boiling range. Fractions are mixtures, their temperature ranges overlap, and the exact outlet arrangement varies between refineries.">
    <svg viewBox="0 0 1160 790" role="img" aria-labelledby="u10-column-title u10-column-desc">
      <title id="u10-column-title">Fractionating column with petroleum fractions</title>
      <desc id="u10-column-desc">Crude oil is heated and fed into a fractionating column. The bottom is hot and the top is cooler. Vapours rise and condense at different heights according to boiling ranges. Outlets identify refinery gases, petrol, naphtha, kerosene, diesel or gas oil, fuel oil and residue.</desc>
      <defs><linearGradient id="u10-column-gradient" x1="0" x2="0" y1="1" y2="0"><stop offset="0" stopColor="#e9a45b"/><stop offset="1" stopColor="#d7edf5"/></linearGradient></defs>
      <rect x="12" y="12" width="1136" height="766" rx="22" fill="#f8fbfd" stroke="#d7e6ed" strokeWidth="2"/>
      <text x="580" y="50" textAnchor="middle" fontSize="26" fontWeight="900" fill="#285b75">FRACTIONAL DISTILLATION OF CRUDE OIL</text>
      <text x="580" y="78" textAnchor="middle" fontSize="16" fill="#567287">Separation depends on different boiling ranges</text>
      <text x="500" y="116" textAnchor="middle" fontSize="15" fontWeight="900" fill="#35758f">COOLER AT THE TOP</text>
      <rect x="350" y="144" width="300" height="526" rx="38" fill="url(#u10-column-gradient)" stroke="#587d91" strokeWidth="5"/>
      <path d="M370 205 H630 M370 266 H630 M370 327 H630 M370 388 H630 M370 449 H630 M370 510 H630 M370 571 H630 M370 632 H630" stroke="#7398aa" strokeWidth="3" opacity=".8"/>
      <path d="M500 620 V220" stroke="#2e7f9d" strokeWidth="7" fill="none"/>
      <path d="M486 226 L500 190 L514 226 Z" fill="#2e7f9d"/>
      <text x="520" y="245" fontSize="14" fontWeight="800" fill="#286b8a">Rising vapours</text>
      <text x="500" y="706" textAnchor="middle" fontSize="16" fontWeight="900" fill="#9a5c2f">HOTTER AT THE BOTTOM</text>
      <path d="M350 612 H250 V650 H190" stroke="#8b6b4c" strokeWidth="8" fill="none"/>
      <text x="190" y="626" textAnchor="end" fontSize="15" fontWeight="800" fill="#795c40">Heated crude oil</text><text x="190" y="646" textAnchor="end" fontSize="15" fontWeight="800" fill="#795c40">enters the column</text>
      {rows.map((row,i)=>{const y=145+i*73;return <g key={row[0]}>
        <path d={`M650 ${y+28} H700`} stroke="#547e94" strokeWidth="4"/>
        <circle cx="650" cy={y+28} r="6" fill="#2e7f9d"/>
        <rect x="710" y={y} width="410" height="64" rx="10" fill="#fff" stroke="#d7e6ed" strokeWidth="1.5"/>
        <text x="728" y={y+23} fontSize="15.5" fontWeight="900" fill="#285b75">{row[0]}</text>
        <text x="728" y={y+43} fontSize="12.5" fill="#567287">{row[1]}</text>
        <text x="728" y={y+58} fontSize="12.5" fill="#567287">{row[2]}</text>
      </g>})}
      <rect x="36" y="726" width="1088" height="34" rx="10" fill="#eef6f9"/><text x="580" y="749" textAnchor="middle" fontSize="14" fontWeight="700" fill="#315b73">Shorter molecules generally have lower boiling ranges and are collected higher; heavier fractions condense lower down.</text>
    </svg>
  </DiagramCard>;
}
function ConversionDiagram() {
  return <DiagramCard label="Cracking and reforming in petroleum refining" caption="Cracking breaks large molecules into smaller ones. Reforming rearranges molecular structures to produce components with improved fuel properties. Both are conversion processes, not simple separation.">
    <svg viewBox="0 0 1040 430" role="img" aria-labelledby="u10-conversion-title u10-conversion-desc">
      <title id="u10-conversion-title">Cracking and reforming compared</title>
      <desc id="u10-conversion-desc">Two process panels compare cracking, which splits a large hydrocarbon into smaller molecules, and catalytic reforming, which rearranges hydrocarbon structures. An example balanced cracking equation is shown.</desc>
      <rect x="12" y="12" width="1016" height="406" rx="22" fill="#f8fbfd" stroke="#d7e6ed" strokeWidth="2"/>
      <rect x="34" y="44" width="470" height="290" rx="17" fill="#fff7ed" stroke="#e5c79d" strokeWidth="2"/>
      <rect x="536" y="44" width="470" height="290" rx="17" fill="#eef7fb" stroke="#c6dfe9" strokeWidth="2"/>
      <text x="269" y="84" textAnchor="middle" fontSize="25" fontWeight="900" fill="#8b5d2f">CRACKING</text><text x="269" y="112" textAnchor="middle" fontSize="16" fill="#6f6254">Large hydrocarbon splits into smaller molecules</text>
      <rect x="73" y="145" width="150" height="70" rx="12" fill="#fff" stroke="#d7b58a" strokeWidth="2"/><text x="148" y="175" textAnchor="middle" fontSize="19" fontWeight="900" fill="#79542f">LONG CHAIN</text><text x="148" y="197" textAnchor="middle" fontSize="15" fill="#6f6254">Large alkane</text>
      <path d="M223 180 H275 M275 153 V207 M275 153 H318 M275 207 H318" stroke="#3b829f" strokeWidth="4" fill="none" strokeLinecap="round"/>
      <path d="M308 145 L330 153 L308 161 Z M308 199 L330 207 L308 215 Z" fill="#3b829f"/>
      <rect x="340" y="132" width="128" height="44" rx="10" fill="#fff" stroke="#d7b58a"/><text x="404" y="160" textAnchor="middle" fontSize="14.5" fontWeight="900" fill="#79542f">SMALL ALKANE</text>
      <rect x="340" y="185" width="128" height="44" rx="10" fill="#fff" stroke="#d7b58a"/><text x="404" y="213" textAnchor="middle" fontSize="15" fontWeight="900" fill="#79542f">ALKENE</text>
      <text x="269" y="275" textAnchor="middle" fontSize="18" fontWeight="900" fill="#79542f">C₁₀H₂₂ → C₈H₁₈ + C₂H₄</text><text x="269" y="302" textAnchor="middle" fontSize="14" fill="#6f6254">Heat · catalyst may be used</text>
      <text x="771" y="84" textAnchor="middle" fontSize="25" fontWeight="900" fill="#286b8a">REFORMING</text><text x="771" y="112" textAnchor="middle" fontSize="16" fill="#536f80">Molecules are rearranged into new structures</text>
      <rect x="560" y="145" width="190" height="70" rx="12" fill="#fff" stroke="#c5dce8" strokeWidth="2"/>
      <text x="655" y="173" textAnchor="middle" fontSize="15.5" fontWeight="900" fill="#285b75">STRAIGHT-CHAIN</text>
      <text x="655" y="196" textAnchor="middle" fontSize="14" fill="#567287">ALKANE · e.g. n-hexane</text>
      <path d="M750 180 H815" stroke="#3b829f" strokeWidth="5" fill="none"/>
      <path d="M807 171 L830 180 L807 189 Z" fill="#3b829f"/>
      <rect x="842" y="132" width="126" height="99" rx="10" fill="#fff" stroke="#c5dce8"/>
      <path d="M857 178 L880 153 L920 153 L944 178 L920 205 L880 205 Z" fill="none" stroke="#4385a0" strokeWidth="4"/>
      <text x="905" y="221" textAnchor="middle" fontSize="12.5" fontWeight="800" fill="#567287">CYCLIC PRODUCT</text>
      <text x="771" y="275" textAnchor="middle" fontSize="17" fontWeight="900" fill="#285b75">Can raise petrol octane rating</text>
      <text x="771" y="302" textAnchor="middle" fontSize="14" fill="#567287">May form branched, cyclic or aromatic molecules</text>
      <rect x="34" y="352" width="972" height="44" rx="10" fill="#edf5f8"/><text x="520" y="379" textAnchor="middle" fontSize="15" fontWeight="700" fill="#315b73">An alkene product from cracking can be used as a petrochemical starting material for polymers.</text>
    </svg>
  </DiagramCard>;
}
const lessons: CarbonLesson[] = [
  {
    id: 'structure-and-allotropes-of-carbon', lessonNumber: '01', title: 'Structure and allotropes of carbon', titleLead: 'One element.', titleAccent: 'Different structures.',
    summary: 'Discover why carbon can build many substances, and how the arrangement of carbon atoms gives diamond, graphite and other forms their different properties.', duration: '25–30 minutes',
    learningObjectives: ['State the atomic number and valency of carbon at this level.', 'Explain catenation and why carbon forms many compounds.', 'Define allotropy and identify important allotropes of carbon.', 'Compare the structures, properties and uses of diamond, graphite, graphene and fullerenes.', 'Relate electrical conductivity and hardness to bonding and structure.'],
    sections: [
      { id: 'carbon-atom', label: 'The carbon atom', kicker: 'START WITH THE ELEMENT', title: 'Why is carbon so important?', content: <>
        <PlainWords>Carbon is an element whose atoms can form strong bonds with other carbon atoms and with many other elements. This allows carbon to build an enormous variety of structures, from simple gases to the molecules found in living things.</PlainWords>
        <p>The chemical symbol for carbon is <strong>C</strong>. Its atomic number is <strong>6</strong>, meaning every carbon atom has six protons in its nucleus. A neutral carbon atom has six electrons, arranged 2,4 in the first two shells. Therefore, it has four electrons in its outer shell.</p>
        <DataTable headers={['Feature','Carbon'] } rows={[[<b>Symbol</b>,'C'],[<b>Atomic number</b>,'6'],[<b>Protons</b>,'6'],[<b>Electron arrangement</b>,'2,4'],[<b>Outer-shell electrons</b>,'4'],[<b>Common covalency</b>,'4 covalent bonds']]} />
        <h3>Three ideas explain carbon’s versatility</h3>
        <ul className="u10-list"><li><strong>Tetravalency:</strong> carbon commonly forms four covalent bonds because it has four outer-shell electrons.</li><li><strong>Catenation:</strong> carbon atoms can bond to one another to form long chains, branches and rings.</li><li><strong>Strong covalent bonding:</strong> carbon forms stable bonds with elements such as hydrogen, oxygen, nitrogen and sulfur.</li></ul>
        <Note tone="mint"><strong>Remember:</strong> Tetravalency describes the usual number of covalent bonds carbon forms. It does not mean a carbon atom always has a charge of 4+.</Note>
      </> },
      { id: 'catenation', label: 'Catenation and bonding', kicker: 'CONNECT STRUCTURE TO COMPOUNDS', title: 'How carbon atoms join together', content: <>
        <p>In a covalent bond, atoms share pairs of electrons. A carbon atom can share its four outer electrons with other atoms. When carbon shares electrons with other carbon atoms, it can build different skeletons.</p>
        <div className="u10-concept-grid"><article><strong>Chains</strong><p>Carbon atoms join end-to-end, as in a straight carbon chain.</p><div className="u10-mini-structure">C—C—C—C</div></article><article><strong>Branched chains</strong><p>A carbon chain can have smaller carbon groups attached to it.</p><div className="u10-mini-structure">C—C—C<br/>　　│<br/>　　C</div></article><article><strong>Rings</strong><p>Carbon atoms can join in a closed arrangement, forming a ring.</p><div className="u10-mini-structure">⬡</div></article></div>
        <p>This ability to form chains, branches and rings is called <strong>catenation</strong>. It is one reason why carbon forms so many compounds. The next unit will study hydrocarbons, which are compounds made only from carbon and hydrogen.</p>
      </> },
      { id: 'allotropy', label: 'Meaning of allotropy', kicker: 'SAME ELEMENT, DIFFERENT FORM', title: 'What is an allotrope?', content: <>
        <PlainWords>An allotrope is one of two or more different structural forms in which the same element exists in the same physical state. The atoms are the same element, but they are connected or arranged differently.</PlainWords>
        <p>Diamond and graphite are both made only of carbon atoms. However, the carbon atoms are joined in different patterns. Because the structures differ, their properties also differ. This phenomenon is called <strong>allotropy</strong>, and the different forms are called <strong>allotropes</strong>.</p>
        <AllotropesDiagram />
        <Note tone="amber">Do not say diamond and graphite are different elements. They are different forms of the same element: carbon.</Note>
      </> },
      { id: 'structures', label: 'Structures of carbon allotropes', kicker: 'LOOK CLOSELY AT THE ATOMS', title: 'Diamond, graphite, graphene and fullerene', content: <>
        <h3>Diamond</h3><p>Each carbon atom in diamond is covalently bonded to four other carbon atoms in a rigid three-dimensional network. The strong bonds extend throughout the structure. It takes a great deal of energy to disrupt this network.</p>
        <h3>Graphite</h3><p>Each carbon atom in graphite is bonded to three neighbouring carbon atoms in a flat layer of hexagonal rings. The fourth outer electron is delocalised, meaning it is not confined to one particular bond and can move through the layer. The layers are held together by much weaker attractions than the covalent bonds within each layer.</p>
        <h3>Graphene</h3><p>Graphene is a single layer of carbon atoms arranged in a hexagonal network. It is extremely thin and strong, and it conducts electricity because it has delocalised electrons.</p>
        <h3>Fullerenes</h3><p>Fullerenes are carbon structures whose atoms form hollow cages or tubes. Buckminsterfullerene, C₆₀, is a well-known cage-shaped molecule containing 60 carbon atoms. Carbon nanotubes are tube-shaped carbon structures.</p>
        <DataTable headers={['Allotrope','Bonding / arrangement','Important feature'] } rows={[[<b>Diamond</b>,'Each C bonded to 4 others in a 3D network','Very hard; does not conduct electricity'],[<b>Graphite</b>,'Each C bonded to 3 others in hexagonal layers','Soft/slippery; conducts electricity'],[<b>Graphene</b>,'One hexagonal layer of carbon atoms','Very thin, strong and conducting'],[<b>Fullerene</b>,'Hollow cages or tubes of carbon atoms','Useful in materials and nanotechnology']]} />
      </> },
      { id: 'properties-uses', label: 'Properties and uses', kicker: 'EXPLAIN THE REASON', title: 'Why do the allotropes behave differently?', content: <>
        <DataTable headers={['Property','Diamond','Graphite'] } rows={[[<b>Hardness</b>,'Extremely hard because strong bonds lock atoms in a 3D network.','Soft and slippery because layers can slide over one another.'],[<b>Electrical conductivity</b>,'Does not conduct under ordinary conditions because its electrons are used in bonding.','Conducts because delocalised electrons can move through the layers.'],[<b>Melting behaviour</b>,'Very high because many strong covalent bonds must be disrupted.','Very high because strong covalent bonds within the layers must be disrupted.'],[<b>Appearance</b>,'Usually transparent and crystalline when pure.','Dark grey/black and opaque.']]}/>
        <h3>Uses follow from properties</h3><ul className="u10-list"><li><strong>Diamond:</strong> cutting and drilling tools because of its hardness; jewellery because of its appearance and ability to reflect light.</li><li><strong>Graphite:</strong> pencil cores, lubricants and some electrodes because it is soft and conducts electricity.</li><li><strong>Graphene:</strong> research and advanced materials where thinness, strength and electrical conductivity are useful.</li><li><strong>Fullerenes and nanotubes:</strong> specialist research into materials, electronics and other technologies.</li></ul>
        <Note tone="blue">A useful exam answer does not only list a property. It links the property to the structure: graphite conducts because of mobile delocalised electrons, not simply because it is black or soft.</Note>
      </> },
      { id: 'carbon-combustion', label: 'Carbon and oxygen', kicker: 'A FIRST LOOK AT CARBON REACTIONS', title: 'Carbon burns in oxygen', content: <>
        <p>When carbon burns in a sufficient supply of oxygen, it forms carbon dioxide. If oxygen is limited, incomplete combustion can produce carbon monoxide. The next lesson examines carbon monoxide and carbon dioxide in more detail.</p>
        <FormulaPanel title="Complete combustion of carbon" formula={<span>C + O₂ → CO₂</span>} variables={<span>C = carbon; O₂ = oxygen molecules; CO₂ = carbon dioxide molecules. The arrow means “reacts to form”.</span>} steps={[{label:'Count the atoms before reaction',body:'Left side: 1 carbon atom and 2 oxygen atoms.'},{label:'Count the atoms after reaction',body:'Right side: 1 carbon atom and 2 oxygen atoms.'},{label:'Check the balance',body:'Both sides contain the same number of each type of atom, so the equation is balanced.'}]}/>
        <Note tone="amber">Burning carbon or fuels produces very hot gases and can produce poisonous carbon monoxide if oxygen is limited. Combustion demonstrations must be teacher-controlled in a suitable laboratory.</Note>
      </> },
    ],
    recap: ['Carbon has atomic number 6 and commonly forms four covalent bonds.', 'Catenation is the ability of carbon atoms to bond to one another in chains, branches and rings.', 'Allotropes are different structural forms of the same element in the same physical state.', 'Diamond is hard and does not conduct electricity; graphite is soft and conducts electricity because of its structure.', 'Graphene is one layer of graphite; fullerenes form hollow cages or tubes.'],
    quizPath: '/lessons/structure-and-allotropes-of-carbon/quiz', quizDescription: 'Check that you can connect carbon structure to the properties of its allotropes.', sidebarTip: 'When comparing allotropes, always ask: how many neighbours does each carbon bond to, and are there mobile electrons?',
    sources: [sources.inspire, sources.rscAllotropes], nextLesson: { title: 'Coal and coke', path: '/lessons/coal-and-coke' },
    quiz: { description: '12 questions on carbon structure, catenation, allotropy and structure–property relationships.', sidebarTip: 'Use the bonding arrangement to explain each property.', artLabel: 'CARBON', artCaption: 'One element · many structures' },
  },
  {
    id: 'coal-and-coke', lessonNumber: '02', title: 'Coal and coke', titleLead: 'From buried plants', titleAccent: 'to industrial carbon.', summary: 'Learn how coal forms over geological time, how coal ranks differ, and how heating coal without air produces coke and useful by-products.', duration: '25–30 minutes',
    learningObjectives: ['Explain the origin of coal and the process of coalification.', 'Put the main coal ranks in the correct order.', 'Distinguish coal formation from industrial destructive distillation.', 'Identify coke and the important by-products of coal processing.', 'Explain coal gasification at an introductory level and recognise environmental concerns.'],
    sections: [
      { id: 'fossil-fuel', label: 'Coal as a fossil fuel', kicker: 'UNDERSTAND THE RAW MATERIAL', title: 'What is coal?', content: <>
        <PlainWords>Coal is a naturally occurring, carbon-rich solid fuel formed from ancient plant material that was buried and changed by heat and pressure over a very long time. It is a mixture, not a lump of pure carbon.</PlainWords>
        <p>Long ago, large amounts of plant material accumulated in wet environments. When this material was buried by sediments, oxygen was limited and decay was incomplete. Over geological time, additional burial, heat and pressure changed the material. This slow process is called <strong>coalification</strong>.</p>
        <p>Coal is a <strong>fossil fuel</strong> because it formed from the remains of organisms over geological time. It is non-renewable on a human timescale: we use it far faster than new coal deposits can form.</p>
        <CoalificationDiagram />
      </> },
      { id: 'coal-ranks', label: 'Types of coal', kicker: 'COMPARE THE RANKS', title: 'Peat, lignite, bituminous and anthracite', content: <>
        <p>Coal rank describes how far the original plant material has changed during coalification. As rank increases, coal generally becomes more carbon-rich and drier, and its heating value usually increases. The sequence is commonly shown as peat, lignite, sub-bituminous, bituminous and anthracite.</p>
        <DataTable headers={['Material / rank','General description','Typical notes'] } rows={[[<b>Peat</b>,'Partly decayed plant material; coal precursor.','High moisture; not usually classed as true coal.'],[<b>Lignite</b>,'Low-rank brown coal.','High moisture and lower heating value.'],[<b>Sub-bituminous</b>,'Intermediate low-to-medium rank.','Generally more carbon-rich than lignite.'],[<b>Bituminous</b>,'Middle-to-high rank coal.','Important in electricity generation and coke manufacture.'],[<b>Anthracite</b>,'Highest coal rank.','Hard, shiny and carbon-rich; usually burns with less smoke than lower ranks.']]}/>
        <Note tone="blue">Different countries and textbooks may group coal ranks slightly differently. Remember the main progression and the general change in carbon content and moisture.</Note>
      </> },
      { id: 'destructive-distillation', label: 'Destructive distillation', kicker: 'INDUSTRIAL PROCESS', title: 'What happens when coal is heated without air?', content: <>
        <p><strong>Destructive distillation of coal</strong> means heating coal strongly in the absence of air (or with very little air). The coal does not undergo ordinary burning. Instead, heat breaks down some of the complex substances in it and separates products into solid, liquid and gaseous forms.</p>
        <div className="u10-process-grid"><article><span>01 · SOLID</span><h3>Coke</h3><p>A strong, porous, carbon-rich solid residue. It is used as a fuel and reducing agent in iron-making.</p></article><article><span>02 · LIQUID</span><h3>Coal tar</h3><p>A dark, thick mixture of many organic compounds. It can be processed to obtain chemical feedstocks.</p></article><article><span>03 · GAS</span><h3>Coal gas</h3><p>A mixture of gases that can burn. Its composition depends on the process used.</p></article><article><span>04 · AQUEOUS BY-PRODUCT</span><h3>Ammoniacal liquor</h3><p>A water-based mixture containing ammonia compounds and other dissolved substances.</p></article></div>
        <Note tone="amber">Destructive distillation is not the same as coalification. Coalification happens naturally over geological time; destructive distillation is an industrial heating process carried out under controlled conditions.</Note>
      </> },
      { id: 'coke-uses', label: 'Coke and its uses', kicker: 'WHY COKE MATTERS', title: 'Coke in metal production', content: <>
        <p>Coke is mostly carbon, but it is not chemically pure carbon. Its usefulness in iron production comes from two important roles:</p>
        <ul className="u10-list"><li>It provides heat when it burns.</li><li>It helps remove oxygen from iron oxide ores, producing iron. In the furnace, carbon monoxide is an important reducing gas.</li></ul>
        <FormulaPanel title="A simplified reduction equation" formula={<span>Fe₂O₃ + 3CO → 2Fe + 3CO₂</span>} variables={<span>Fe₂O₃ = iron(III) oxide; CO = carbon monoxide; Fe = iron; CO₂ = carbon dioxide.</span>} steps={[{label:'Identify the reactants',body:'Iron(III) oxide reacts with carbon monoxide. Carbon monoxide removes oxygen from the iron oxide.'},{label:'Identify the products',body:'Iron is formed, while carbon monoxide gains oxygen and becomes carbon dioxide.'},{label:'Check atom counts',body:'Left: Fe 2, C 3, O 6. Right: Fe 2, C 3, O 6. The equation is balanced.'}]}/>
        <p>This equation is a simplified model of a key chemical change in iron extraction. A real blast furnace contains several zones and reactions.</p>
      </> },
      { id: 'gasification', label: 'Gasification', kicker: 'TURNING SOLID CARBON INTO GAS', title: 'What is gasification?', content: <>
        <p><strong>Gasification</strong> converts a carbon-containing solid such as coke into a fuel gas by reacting it at high temperature with a controlled amount of oxygen, steam or both. It is not the same as simply burning all the carbon to carbon dioxide.</p>
        <FormulaPanel title="Formation of water gas" formula={<span>C + H₂O(g) → CO + H₂</span>} variables={<span>C = hot carbon; H₂O(g) = steam; CO = carbon monoxide; H₂ = hydrogen. The symbol (g) means gas.</span>} steps={[{label:'Steam contacts hot carbon',body:'Water vapour passes over very hot carbon-containing material.'},{label:'A chemical reaction occurs',body:'Carbon and steam form carbon monoxide and hydrogen, a mixture historically called water gas.'},{label:'Recognise the energy requirement',body:'The reaction absorbs heat, so energy must be supplied to keep it going.'}]}/>
        <p>The mixture of carbon monoxide and hydrogen can be used as a fuel or as a chemical feedstock after suitable processing. Carbon monoxide is poisonous, so gasification systems require industrial containment and monitoring.</p>
      </> },
      { id: 'environment', label: 'Uses and environmental effects', kicker: 'INDUSTRY AND RESPONSIBILITY', title: 'Benefits, limits and safety', content: <>
        <p>Coal has been used for heat, electricity generation, iron and steel production, and the manufacture of coke and chemical feedstocks. However, mining and burning coal can cause serious environmental and health problems.</p>
        <DataTable headers={['Issue','Why it matters','Ways impacts can be reduced'] } rows={[[<b>Dust and land disturbance</b>,'Mining can damage habitats and release dust.','Careful mine planning, dust control and land restoration.'],[<b>Sulfur dioxide and particulates</b>,'Combustion emissions can worsen air pollution.','Fuel treatment, filters and flue-gas cleaning.'],[<b>Carbon dioxide</b>,'Adds to the greenhouse effect and climate change.','Efficiency, lower-carbon energy and emission controls.'],[<b>Mine gases</b>,'Methane and other gases can create hazards.','Gas monitoring, ventilation and safe mine management.']]}/>
        <Note tone="amber">Never try to make coke, coal gas or water gas at home or in an ordinary classroom. High temperatures, flammable gases and poisonous carbon monoxide make these industrial processes hazardous.</Note>
      </> },
    ],
    recap: ['Coal formed from ancient plant material through coalification over geological time.', 'The usual rank sequence is peat → lignite → sub-bituminous → bituminous → anthracite.', 'Destructive distillation heats coal without air and produces coke, coal tar, coal gas and ammoniacal liquor.', 'Coke is a carbon-rich solid used as a fuel and reducing-agent source in iron production.', 'Gasification can produce a mixture containing carbon monoxide and hydrogen; CO is poisonous.'],
    quizPath: '/lessons/coal-and-coke/quiz', quizDescription: 'Check that you can distinguish coal formation, destructive distillation and gasification.', sidebarTip: 'Keep the three processes separate: coalification is natural, destructive distillation heats coal without air, and gasification converts carbon into fuel gas.',
    sources: [sources.inspire, sources.usgsCoal, sources.eiaCoal], nextLesson: { title: 'Carbon monoxide and carbon dioxide', path: '/lessons/oxides-of-carbon' },
    quiz: { description: '12 questions on coal rank, coke, destructive distillation and gasification.', sidebarTip: 'Read the conditions of each process carefully before choosing an answer.', artLabel: 'COAL', artCaption: 'A fossil fuel · industrial carbon' },
  },
  {
    id: 'oxides-of-carbon', lessonNumber: '03', title: 'Carbon monoxide and carbon dioxide', titleLead: 'Two oxides.', titleAccent: 'Very different effects.', summary: 'Compare carbon monoxide and carbon dioxide, learn how oxygen supply affects combustion, and understand useful tests, applications and safety risks.', duration: '25–30 minutes',
    learningObjectives: ['Write the formulae and names of carbon monoxide and carbon dioxide.', 'Explain how complete and incomplete combustion form different carbon oxides.', 'Compare their physical properties, uses and hazards.', 'Describe the limewater test for carbon dioxide and explain its observation.', 'Explain why carbon monoxide is especially dangerous.'],
    sections: [
      { id: 'two-oxides', label: 'The two oxides', kicker: 'START WITH THE FORMULAE', title: 'Carbon monoxide (CO) and carbon dioxide (CO₂)', content: <>
        <PlainWords>Carbon can combine with oxygen to form more than one oxide. Carbon monoxide contains one oxygen atom for each carbon atom (CO). Carbon dioxide contains two oxygen atoms for each carbon atom (CO₂). Their different formulae are linked to different chemical properties and hazards.</PlainWords>
        <CarbonOxidesDiagram />
        <DataTable headers={['Feature','Carbon monoxide','Carbon dioxide'] } rows={[[<b>Formula</b>,'CO','CO₂'],[<b>Common name</b>,'Carbon(II) oxide','Carbon(IV) oxide'],[<b>Appearance</b>,'Colourless gas','Colourless gas'],[<b>Smell</b>,'Odourless','Odourless'],[<b>Important effect</b>,'Highly poisonous when inhaled','Greenhouse gas; can displace oxygen in confined spaces'],[<b>Test</b>,'No simple safe classroom smell test','Turns limewater milky']]} />
      </> },
      { id: 'combustion', label: 'How they form', kicker: 'OXYGEN SUPPLY MATTERS', title: 'Complete and incomplete combustion', content: <>
        <p><strong>Combustion</strong> is a chemical reaction in which a substance reacts with oxygen, usually releasing heat and often light. Carbon forms carbon dioxide when it burns in sufficient oxygen. When oxygen is limited, carbon monoxide may form instead.</p>
        <FormulaPanel title="Complete combustion of carbon" formula={<span>C + O₂ → CO₂</span>} variables={<span>One carbon atom reacts with one oxygen molecule to make one carbon dioxide molecule.</span>} steps={[{label:'Count reactant atoms',body:'C = 1; O = 2.'},{label:'Count product atoms',body:'In CO₂, C = 1 and O = 2.'},{label:'Conclude',body:'The equation is balanced and represents complete combustion when oxygen is sufficient.'}]}/>
        <FormulaPanel title="Incomplete combustion of carbon" formula={<span>2C + O₂ → 2CO</span>} variables={<span>Two carbon atoms react with one oxygen molecule to form two carbon monoxide molecules.</span>} steps={[{label:'Count reactant atoms',body:'Left side: C = 2 and O = 2.'},{label:'Count product atoms',body:'Right side: two CO molecules contain C = 2 and O = 2.'},{label:'Conclude',body:'The equation is balanced. Each carbon atom has combined with only one oxygen atom.'}]}/>
        <Note tone="amber">Incomplete combustion can also produce solid carbon (soot). The actual products depend on the fuel, oxygen supply, temperature and mixing. Never deliberately create carbon monoxide for a school demonstration.</Note>
      </> },
      { id: 'carbon-monoxide', label: 'Carbon monoxide', kicker: 'PROPERTIES AND HAZARDS', title: 'Why carbon monoxide is dangerous', content: <>
        <p>Carbon monoxide is a colourless, odourless gas. A person cannot reliably detect it by sight or smell. When inhaled, it enters the blood and binds strongly to haemoglobin, the protein that normally carries oxygen. This reduces the blood’s ability to transport oxygen to body tissues.</p>
        <h3>Possible sources</h3><ul className="u10-list"><li>Incomplete burning of charcoal, wood, petrol, kerosene, gas or other carbon-containing fuels.</li><li>Generators, engines, stoves or grills used in poorly ventilated or enclosed spaces.</li><li>Faulty or poorly maintained fuel-burning appliances.</li></ul>
        <h3>Safety</h3><p>Fuel-burning equipment must be used according to manufacturer guidance, with appropriate ventilation and exhaust arrangements. Generators and charcoal-burning devices must not be operated inside homes, garages or enclosed spaces. Suspected carbon monoxide exposure is an emergency: move to fresh air if safe and seek urgent medical help.</p>
        <Note tone="amber"><strong>Critical safety point:</strong> Carbon monoxide has no warning smell. Do not use smell as a safety test, and never use a running generator indoors.</Note>
        <p>In industry, carbon monoxide can act as a reducing agent. For example, it can remove oxygen from iron(III) oxide in a simplified iron-extraction equation. Its usefulness in controlled industrial chemistry does not make it safe to breathe.</p>
        <FormulaPanel title="Carbon monoxide as a reducing agent" formula={<span>Fe₂O₃ + 3CO → 2Fe + 3CO₂</span>} variables={<span>Carbon monoxide removes oxygen from iron(III) oxide; it is changed into carbon dioxide.</span>} steps={[{label:'Start with iron(III) oxide',body:'The iron is chemically combined with oxygen in Fe₂O₃.'},{label:'Carbon monoxide takes oxygen',body:'CO gains oxygen and forms CO₂. Iron is left behind.'},{label:'Check balancing',body:'There are 2 Fe, 3 C and 6 O atoms on both sides.'}]}/>
      </> },
      { id: 'carbon-dioxide', label: 'Carbon dioxide', kicker: 'PROPERTIES AND USES', title: 'Carbon dioxide in everyday life and nature', content: <>
        <p>Carbon dioxide is a colourless, odourless gas. Plants use it during photosynthesis, and it is released during respiration, decomposition and combustion. It is also used in carbonated drinks, some fire extinguishers, refrigeration as dry ice, and in industrial processes.</p>
        <p>Carbon dioxide is a greenhouse gas. It absorbs some infrared radiation emitted by Earth’s surface and contributes to the greenhouse effect. An increase in atmospheric carbon dioxide from human activities contributes to global warming. In high concentrations, carbon dioxide can also displace oxygen in confined spaces and cause asphyxiation.</p>
        <h3>Preparation in the laboratory (teacher-supervised)</h3><p>Carbon dioxide can be produced when a dilute acid reacts with a carbonate, such as calcium carbonate. The reaction makes a salt, water and carbon dioxide gas.</p>
        <FormulaPanel title="Calcium carbonate and hydrochloric acid" formula={<span>CaCO₃ + 2HCl → CaCl₂ + H₂O + CO₂</span>} variables={<span>Calcium carbonate + hydrochloric acid → calcium chloride + water + carbon dioxide.</span>} steps={[{label:'Identify the carbonate',body:'CaCO₃ contains the carbonate ion, CO₃²⁻.'},{label:'Write the products',body:'The salt is calcium chloride (CaCl₂), with water and carbon dioxide also formed.'},{label:'Balance the equation',body:'Two HCl provide two H atoms for H₂O and two Cl atoms for CaCl₂. All atoms are balanced.'}]}/>
      </> },
      { id: 'limewater-test', label: 'Test for carbon dioxide', kicker: 'OBSERVATION AND EXPLANATION', title: 'Why does limewater turn milky?', content: <>
        <p><strong>Limewater</strong> is a dilute solution of calcium hydroxide, Ca(OH)₂. When carbon dioxide is bubbled through it, insoluble calcium carbonate forms as a white solid. This makes the limewater appear milky or cloudy.</p>
        <LimewaterTestDiagram />
        <FormulaPanel title="The limewater reaction" formula={<span>CO₂ + Ca(OH)₂ → CaCO₃ + H₂O</span>} variables={<span>Carbon dioxide + calcium hydroxide → calcium carbonate + water. CaCO₃ is the white precipitate.</span>} steps={[{label:'Carbon dioxide enters the solution',body:'CO₂ gas dissolves and reacts with calcium hydroxide.'},{label:'A solid forms',body:'Calcium carbonate, CaCO₃, is insoluble in water and appears as a white precipitate.'},{label:'Interpret the result',body:'The milky appearance is a positive test for carbon dioxide under the test conditions.'}]}/>
        <p>If excess carbon dioxide is passed through for long enough, the white calcium carbonate can react with more carbon dioxide and water to form soluble calcium hydrogencarbonate. The milkiness can then disappear.</p>
        <FormulaPanel title="What happens with excess carbon dioxide?" formula={<span>CaCO₃ + CO₂ + H₂O → Ca(HCO₃)₂</span>} variables={<span>Solid calcium carbonate reacts with carbon dioxide and water to form soluble calcium hydrogencarbonate.</span>} steps={[{label:'Start with the white solid',body:'CaCO₃ is the precipitate that made limewater milky.'},{label:'Add more carbon dioxide and water',body:'The solid is converted into dissolved calcium hydrogencarbonate.'},{label:'Observe',body:'As the solid dissolves, the cloudy appearance can clear.'}]}/>
      </> },
      { id: 'compare-and-environment', label: 'Compare and remember', kicker: 'CHECK YOUR UNDERSTANDING', title: 'Do not confuse the two gases', content: <>
        <ul className="u10-list"><li><strong>CO:</strong> one oxygen atom per carbon atom; produced by incomplete combustion; highly poisonous; no reliable smell.</li><li><strong>CO₂:</strong> two oxygen atoms per carbon atom; main product of complete carbon combustion; turns limewater milky; greenhouse gas.</li></ul>
        <Note tone="mint">Both gases are colourless and odourless. This is why the formula, source and chemical test are more useful than trying to identify a gas by looking at it.</Note>
      </> },
    ],
    recap: ['Carbon monoxide is CO; carbon dioxide is CO₂.', 'Sufficient oxygen favours complete combustion to carbon dioxide; limited oxygen can form carbon monoxide and soot.', 'Carbon monoxide is colourless, odourless and highly poisonous because it reduces oxygen transport in blood.', 'Carbon dioxide is used by plants in photosynthesis and turns limewater milky.', 'Excess CO₂ can make the limewater precipitate dissolve by forming soluble calcium hydrogencarbonate.'],
    quizPath: '/lessons/oxides-of-carbon/quiz', quizDescription: 'Check that you can explain how each carbon oxide forms, behaves and is identified.', sidebarTip: 'Always connect CO or CO₂ to the oxygen supply, formula, reaction and hazard. Never identify carbon monoxide by smell.',
    sources: [sources.inspire, sources.cdcCo, sources.nioshCo, sources.rscCombustion], nextLesson: { title: 'Carbonic acid, carbonates and hydrogencarbonates', path: '/lessons/carbonates-and-hydrogencarbonates' },
    quiz: { description: '12 questions on carbon oxides, combustion, hazards, uses and the limewater test.', sidebarTip: 'Check the formula carefully: CO and CO₂ are different substances.', artLabel: 'CO / CO₂', artCaption: 'One atom of oxygen · two atoms of oxygen' },
  },
  {
    id: 'carbonates-and-hydrogencarbonates', lessonNumber: '04', title: 'Carbonic acid, carbonates and hydrogencarbonates', titleLead: 'Follow the carbon.', titleAccent: 'Understand the reactions.', summary: 'Learn how carbon dioxide dissolves in water, how carbonate and hydrogencarbonate ions differ, and how these compounds react with acids and heat.', duration: '25–30 minutes',
    learningObjectives: ['Explain how dissolved carbon dioxide forms a small amount of carbonic acid.', 'Identify carbonate and hydrogencarbonate ions by their formulae and charges.', 'Write and interpret acid reactions with carbonates and hydrogencarbonates.', 'Describe the limewater test for carbon dioxide.', 'Explain selected uses and thermal decomposition reactions of carbonates and hydrogencarbonates.'],
    sections: [
      { id: 'carbonic-acid', label: 'Carbonic acid', kicker: 'CARBON DIOXIDE IN WATER', title: 'How carbon dioxide forms carbonic acid', content: <>
        <PlainWords>When carbon dioxide dissolves in water, a small proportion reacts with water molecules to form carbonic acid. Carbonic acid is a weak acid, meaning it ionises only partially in water.</PlainWords>
        <FormulaPanel title="Formation of carbonic acid" formula={<span>CO₂(aq) + H₂O(l) ⇌ H₂CO₃(aq)</span>} variables={<span>(aq) means dissolved in water; (l) means liquid; ⇌ means the reaction can proceed in both directions and reaches equilibrium.</span>} steps={[{label:'Carbon dioxide dissolves',body:'Some CO₂ molecules enter the water and become dissolved.'},{label:'A small amount reacts',body:'Some dissolved CO₂ combines with water to form H₂CO₃, carbonic acid.'},{label:'Equilibrium is established',body:'The forward and reverse changes continue until their rates are equal. Not all dissolved CO₂ is present as carbonic acid.'}]}/>
        <p>Carbonic acid can release hydrogen ions in water in stages. A simplified first ionisation is shown below.</p>
        <div className="u10-equation-strip"><strong>H₂CO₃ ⇌ H⁺ + HCO₃⁻</strong><span>Carbonic acid ⇌ hydrogen ion + hydrogencarbonate ion</span></div>
        <p>This helps explain why dissolved carbon dioxide can make water slightly acidic. The actual chemistry of natural water also depends on other dissolved substances and its surroundings.</p>
      </> },
      { id: 'ions', label: 'Carbonate and hydrogencarbonate ions', kicker: 'COMPARE THE FORMULAE', title: 'Two related ions, different charges', content: <>
        <DataTable headers={['Ion','Formula','Overall charge','What the formula shows'] } rows={[[<b>Carbonate</b>,'CO₃²⁻','2−','One carbon and three oxygen atoms; overall charge 2−.'],[<b>Hydrogencarbonate</b>,'HCO₃⁻','1−','One hydrogen, one carbon and three oxygen atoms; overall charge 1−.']]}/>
        <p>The carbonate ion has a 2− charge. The hydrogencarbonate ion has one hydrogen atom and a 1− charge. These ions form salts with positive ions such as sodium, calcium and potassium.</p>
        <div className="u10-concept-grid"><article><strong>Calcium carbonate</strong><p>Formula: CaCO₃. Found in limestone, chalk and marble.</p></article><article><strong>Sodium carbonate</strong><p>Formula: Na₂CO₃. Used in washing and glass manufacture.</p></article><article><strong>Sodium hydrogencarbonate</strong><p>Formula: NaHCO₃. Also called baking soda or bicarbonate of soda.</p></article></div>
        <Note tone="amber">Do not confuse the subscript 3 in CO₃²⁻ with the 2− charge. The small 3 tells you there are three oxygen atoms; the superscript 2− tells you the whole ion has a charge of minus two.</Note>
      </> },
      { id: 'acid-reactions', label: 'Reactions with acids', kicker: 'A COMMON REACTION PATTERN', title: 'Why do carbonates fizz with acids?', content: <>
        <p>When an acid reacts with a carbonate, the products are a salt, water and carbon dioxide. The visible fizzing is caused by bubbles of carbon dioxide gas leaving the mixture.</p>
        <FormulaPanel title="Example: calcium carbonate with hydrochloric acid" formula={<span>CaCO₃(s) + 2HCl(aq) → CaCl₂(aq) + H₂O(l) + CO₂(g)</span>} variables={<span>CaCO₃ = calcium carbonate; HCl = hydrochloric acid; CaCl₂ = calcium chloride; H₂O = water; CO₂ = carbon dioxide. (s), (aq), (l) and (g) mean solid, aqueous, liquid and gas.</span>} steps={[{label:'Name the starting substances',body:'Calcium carbonate is the carbonate; hydrochloric acid supplies hydrogen ions and chloride ions.'},{label:'Form the salt',body:'The calcium ion combines with chloride ions to make calcium chloride, CaCl₂.'},{label:'Form water and carbon dioxide',body:'Hydrogen ions react with carbonate to produce water and carbon dioxide.'},{label:'Check the coefficients',body:'Two HCl are needed to supply two H atoms for H₂O and two Cl atoms for CaCl₂. The equation is balanced.'}]}/>
        <FormulaPanel title="Net ionic equation for a carbonate" formula={<span>CO₃²⁻ + 2H⁺ → CO₂ + H₂O</span>} variables={<span>The ions not involved in the main change are left out. This equation shows the chemical change common to acids reacting with carbonate ions.</span>} steps={[{label:'Start with the carbonate ion',body:'CO₃²⁻ contains one carbon and three oxygen atoms and has a 2− charge.'},{label:'Add two hydrogen ions',body:'Two H⁺ provide the two hydrogen atoms needed to make H₂O and balance the total charge.'},{label:'Products form',body:'Carbon dioxide gas and water are produced. Atoms and total charge are balanced.'}]}/>
        <h3>Hydrogencarbonates also release carbon dioxide</h3><FormulaPanel title="Example: sodium hydrogencarbonate with hydrochloric acid" formula={<span>NaHCO₃ + HCl → NaCl + H₂O + CO₂</span>} variables={<span>NaHCO₃ = sodium hydrogencarbonate; NaCl = sodium chloride.</span>} steps={[{label:'Identify the ions',body:'HCO₃⁻ is the hydrogencarbonate ion, with a 1− charge.'},{label:'Write the products',body:'The sodium salt is sodium chloride; water and carbon dioxide are also formed.'},{label:'Check the equation',body:'Na 1, H 2, C 1, O 3 and Cl 1 are balanced on both sides.'}]}/>
      </> },
      { id: 'tests', label: 'Tests and observations', kicker: 'FROM OBSERVATION TO EVIDENCE', title: 'Testing for carbonate and carbon dioxide', content: <>
        <p>A carbonate-containing solid can be tested by adding a small amount of dilute acid under teacher supervision. If a carbonate or hydrogencarbonate is present, bubbles of carbon dioxide may be released. The gas can be passed through limewater; a milky appearance indicates carbon dioxide.</p>
        <LimewaterTestDiagram />
        <DataTable headers={['Step','What you observe','What it suggests'] } rows={[[<b>Add dilute acid to sample</b>,'Effervescence (bubbles).','A gas is being produced; carbonate or hydrogencarbonate may be present.'],[<b>Pass gas into limewater</b>,'Limewater turns milky.','Carbon dioxide is present.'],[<b>Pass excess CO₂</b>,'Milkiness may clear.','Calcium hydrogencarbonate forms in solution.']]}/>
        <Note tone="blue">Effervescence alone does not prove the gas is carbon dioxide. The limewater test provides further evidence. In a laboratory, the whole procedure must follow teacher-approved safety rules.</Note>
      </> },
      { id: 'thermal-decomposition', label: 'Heating carbonates', kicker: 'A CHANGE CAUSED BY HEAT', title: 'Thermal decomposition', content: <>
        <p><strong>Thermal decomposition</strong> is the breakdown of a compound by heating. Many metal carbonates decompose when heated strongly, producing a metal oxide and carbon dioxide.</p>
        <FormulaPanel title="Heating calcium carbonate" formula={<span>CaCO₃(s) → CaO(s) + CO₂(g)</span>} variables={<span>Calcium carbonate → calcium oxide + carbon dioxide. CaO is also called quicklime.</span>} steps={[{label:'Apply heat',body:'Energy is supplied to the calcium carbonate.'},{label:'The compound breaks down',body:'One calcium carbonate formula unit forms one calcium oxide unit and one carbon dioxide molecule.'},{label:'Check atoms',body:'Ca = 1, C = 1 and O = 3 on both sides.'}]}/>
        <p>This reaction is important in lime and cement manufacture. The calcium oxide formed can react with water to produce calcium hydroxide, called slaked lime.</p>
        <div className="u10-equation-strip"><strong>CaO + H₂O → Ca(OH)₂</strong><span>Calcium oxide + water → calcium hydroxide</span></div>
        <h3>Heating sodium hydrogencarbonate</h3><p>Sodium hydrogencarbonate also decomposes on heating, producing sodium carbonate, carbon dioxide and water.</p>
        <div className="u10-equation-strip"><strong>2NaHCO₃ → Na₂CO₃ + CO₂ + H₂O</strong><span>Two formula units of sodium hydrogencarbonate form one formula unit of sodium carbonate, one carbon dioxide molecule and one water molecule.</span></div>
      </> },
      { id: 'uses-and-calculation', label: 'Uses and worked example', kicker: 'APPLY WHAT YOU KNOW', title: 'Everyday and industrial uses', content: <>
        <DataTable headers={['Compound','Common uses'] } rows={[[<b>Calcium carbonate (CaCO₃)</b>,'Limestone and marble in building; cement manufacture; agricultural lime; some antacid products.'],[<b>Sodium carbonate (Na₂CO₃)</b>,'Glass manufacture, detergents and water softening.'],[<b>Sodium hydrogencarbonate (NaHCO₃)</b>,'Baking, some cleaning products and selected antacid preparations.'],[<b>Magnesium carbonate (MgCO₃)</b>,'Some sports chalk and industrial products.']]}/>
        <WorkedExample title="How much carbon dioxide can form from 10.0 g of calcium carbonate?" given={<p>Assume pure CaCO₃ decomposes completely. Relative formula mass: CaCO₃ = 40 + 12 + (3 × 16) = 100. The equation is CaCO₃ → CaO + CO₂.</p>} steps={[<p><strong>Find the amount of CaCO₃.</strong><br/>Moles = mass ÷ molar mass = 10.0 g ÷ 100 g mol⁻¹ = 0.100 mol.</p>,<p><strong>Use the mole ratio.</strong><br/>The equation shows 1 mol CaCO₃ forms 1 mol CO₂. Therefore, CO₂ formed = 0.100 mol.</p>,<p><strong>Find the mass of CO₂.</strong><br/>Molar mass of CO₂ = 12 + (2 × 16) = 44 g mol⁻¹.<br/>Mass = 0.100 × 44 = 4.40 g.</p>]} answer={<p><strong>4.40 g of carbon dioxide</strong> can form, assuming complete decomposition and no losses.</p>}/>
      </> },
    ],
    recap: ['Dissolved carbon dioxide reacts with some water to form weak carbonic acid.', 'Carbonate is CO₃²⁻; hydrogencarbonate is HCO₃⁻.', 'Acid + carbonate or hydrogencarbonate produces a salt, water and carbon dioxide.', 'Carbon dioxide turns limewater milky because insoluble calcium carbonate forms.', 'Heating calcium carbonate gives calcium oxide and carbon dioxide.', 'Sodium hydrogencarbonate decomposes on heating to sodium carbonate, carbon dioxide and water.'],
    quizPath: '/lessons/carbonates-and-hydrogencarbonates/quiz', quizDescription: 'Check that you can interpret the ions, equations, tests and uses of carbonate compounds.', sidebarTip: 'Read every subscript and superscript. The subscript counts atoms; the superscript gives the ion charge.',
    sources: [sources.inspire, sources.rscCarbonates], nextLesson: { title: 'Crude oil and natural gas', path: '/lessons/petroleum-and-natural-gas' },
    quiz: { description: '12 questions on carbonic acid, carbonate ions, equations, tests and uses.', sidebarTip: 'Balance the equation by counting every atom on both sides.', artLabel: 'CO₃²⁻', artCaption: 'Carbonate chemistry' },
  },
  {
    id: 'petroleum-and-natural-gas', lessonNumber: '05', title: 'Crude oil and natural gas', titleLead: 'Fossil resources.', titleAccent: 'Mixtures from underground.', summary: 'Explore how petroleum and natural gas form, how they are trapped and extracted, what they contain, and why they are important to Nigeria and the wider world.', duration: '25–30 minutes',
    learningObjectives: ['Explain the simplified geological formation of petroleum and natural gas.', 'Describe source rock, reservoir rock, cap rock and a geological trap.', 'State the main components of crude oil and natural gas.', 'Outline how oil and gas are brought to the surface and processed.', 'Discuss important uses, economic value and environmental impacts.'],
    sections: [
      { id: 'formation', label: 'Formation of fossil resources', kicker: 'A PROCESS OVER GEOLOGICAL TIME', title: 'How do crude oil and natural gas form?', content: <>
        <PlainWords>Crude oil and natural gas formed from ancient organic matter buried beneath layers of sediment. Over millions of years, heat, pressure and geological changes transformed some of that buried material into mixtures rich in hydrocarbons.</PlainWords>
        <p>Much petroleum and natural gas began as microscopic organisms, such as plankton, that lived in ancient seas and lakes. When they died, their remains settled with fine mud. If buried in oxygen-poor conditions, some organic matter was preserved instead of fully decaying. Continued burial raised temperature and pressure and slowly changed the material into oil and natural gas.</p>
        <p>This is a simplified account. The exact conditions, source material and geological history vary from one petroleum basin to another.</p>
        <PetroleumTrapDiagram />
      </> },
      { id: 'traps-and-reservoirs', label: 'Rocks and traps', kicker: 'WHERE OIL AND GAS COLLECT', title: 'Source rock, reservoir rock and cap rock', content: <>
        <DataTable headers={['Term','Meaning','Why it matters'] } rows={[[<b>Source rock</b>,'Rock containing organic matter from which oil and gas can form.','It is the original source of the hydrocarbons.'],[<b>Migration</b>,'Movement of oil and gas through connected pore spaces or cracks.','Hydrocarbons may move away from the source rock.'],[<b>Reservoir rock</b>,'Porous and permeable rock that can store and transmit fluids.','Oil and gas accumulate in its pore spaces.'],[<b>Cap rock</b>,'A low-permeability or impermeable layer above the reservoir.','It helps prevent hydrocarbons from escaping upwards.'],[<b>Trap</b>,'A geological arrangement that holds migrating hydrocarbons.','It allows oil and gas to accumulate in a recoverable deposit.']]}/>
        <p>In a common reservoir trap, natural gas tends to collect above oil because it is less dense. Water is often found lower down. This is a general pattern, not a rule that describes every reservoir exactly.</p>
        <Note tone="blue">Crude oil is not normally found in a large underground lake. It occupies tiny connected spaces in porous rock, much like fluid held within a sponge, although the rock structure is far more complex.</Note>
      </> },
      { id: 'composition', label: 'Composition', kicker: 'WHAT IS IN THE MIXTURE?', title: 'Crude oil and natural gas are not pure substances', content: <>
        <h3>Crude oil</h3><p>Crude oil is a naturally occurring mixture of many hydrocarbons. Hydrocarbons contain only carbon and hydrogen. Different crude oils have different compositions. They may contain alkanes, cycloalkanes and aromatic hydrocarbons, as well as small amounts of compounds containing sulfur, nitrogen or oxygen and trace metals.</p>
        <h3>Natural gas</h3><p>Natural gas is a mixture of gases. Its main component is usually methane, CH₄. It can also contain ethane, propane, butanes, water vapour, carbon dioxide, nitrogen and, in some deposits, hydrogen sulfide. Processing removes unwanted substances before gas is supplied for many uses.</p>
        <DataTable headers={['Resource','Main constituents','Important point'] } rows={[[<b>Crude oil</b>,'Many liquid hydrocarbons and other compounds.','A complex mixture that must be separated and processed.'],[<b>Natural gas</b>,'Mainly methane in many supplies, with other gases.','Composition varies; raw gas may need treatment.'],[<b>Methane</b>,'CH₄','One carbon atom covalently bonded to four hydrogen atoms.']]}/>
        <div className="u10-equation-strip"><strong>CH₄</strong><span>Methane: 1 carbon atom + 4 hydrogen atoms in each molecule.</span></div>
      </> },
      { id: 'extraction-and-processing', label: 'Extraction and processing', kicker: 'FROM RESERVOIR TO USE', title: 'How oil and gas are extracted', content: <>
        <p>Geologists and engineers study underground rock formations to identify possible reservoirs. A well is drilled to reach the target rock. Oil, gas and water may rise because of natural reservoir pressure or may require pumps and other engineered systems. Offshore wells are drilled from platforms or specialised vessels.</p>
        <ol className="u10-step-list"><li><strong>Exploration:</strong> geological studies and geophysical surveys help identify possible traps.</li><li><strong>Drilling:</strong> a well is constructed through overlying rock into the reservoir.</li><li><strong>Production:</strong> fluids are brought to the surface under controlled pressure and safety systems.</li><li><strong>Separation:</strong> oil, natural gas and produced water are separated.</li><li><strong>Processing:</strong> impurities such as water, carbon dioxide and hydrogen sulfide may be removed from natural gas before supply.</li></ol>
        <Note tone="amber">Drilling, well control, gas treatment and oil separation are industrial operations. This lesson explains the stages conceptually; it is not a practical guide to drilling or handling petroleum.</Note>
      </> },
      { id: 'nigeria-and-uses', label: 'Uses and Nigerian context', kicker: 'ECONOMIC IMPORTANCE', title: 'Why petroleum and natural gas matter', content: <>
        <p>Petroleum and natural gas are important sources of energy and chemical raw materials. In Nigeria, oil and gas production has influenced exports, government revenue, employment, transport, electricity supply and industrial development. Their value depends on safe operations, investment, infrastructure, environmental management and how revenues are used.</p>
        <DataTable headers={['Use','Examples'] } rows={[[<b>Transport fuels</b>,'Petrol, diesel, aviation fuel and liquefied petroleum gas.'],[<b>Heat and electricity</b>,'Natural gas and some petroleum products used in power and industrial heat.'],[<b>Petrochemical feedstocks</b>,'Raw materials for plastics, synthetic fibres, solvents and other chemicals.'],[<b>Lubricants and materials</b>,'Lubricating oils, waxes, bitumen and related products.']]}/>
      </> },
      { id: 'impacts', label: 'Environmental impacts', kicker: 'BENEFITS AND RESPONSIBILITY', title: 'What must be managed?', content: <>
        <ul className="u10-list"><li><strong>Oil spills:</strong> can contaminate soil, rivers, wetlands and coastal ecosystems, harming organisms and livelihoods.</li><li><strong>Gas flaring:</strong> wastes a resource and releases carbon dioxide and other pollutants.</li><li><strong>Methane leakage:</strong> methane is a powerful greenhouse gas, so leaks during production and transport matter.</li><li><strong>Combustion:</strong> burning petroleum and natural gas releases carbon dioxide; poor combustion can also form carbon monoxide and particulates.</li><li><strong>Non-renewability:</strong> fossil resources take millions of years to form and are depleted by extraction.</li></ul>
        <Note tone="mint">Responsible management includes preventing spills, detecting and repairing leaks, reducing routine flaring, treating produced water, restoring affected areas and improving energy efficiency.</Note>
      </> },
    ],
    recap: ['Crude oil and natural gas formed from ancient organic matter over geological time.', 'Oil and gas migrate into porous reservoir rock and can be trapped beneath cap rock.', 'Crude oil is a complex mixture of hydrocarbons and other compounds.', 'Natural gas consists mainly of methane in many deposits, but its composition varies.', 'Oil and gas provide energy and chemical feedstocks but create environmental risks that must be managed.'],
    quizPath: '/lessons/petroleum-and-natural-gas/quiz', quizDescription: 'Check that you understand formation, geology, composition, extraction and impacts.', sidebarTip: 'Remember that crude oil is a mixture stored in rock pores, not a single pure compound or a vast underground lake.',
    sources: [sources.inspire, sources.eiaNaturalGas], nextLesson: { title: 'Petroleum refining and petrochemicals', path: '/lessons/petroleum-refining-and-petrochemicals' },
    quiz: { description: '12 questions on petroleum formation, traps, composition, extraction, uses and impacts.', sidebarTip: 'Separate the meanings of source rock, reservoir rock and cap rock.', artLabel: 'OIL + GAS', artCaption: 'Hydrocarbons below the surface' },
  },
  {
    id: 'petroleum-refining-and-petrochemicals', lessonNumber: '06', title: 'Petroleum refining and petrochemicals', titleLead: 'Separate the mixture.', titleAccent: 'Then transform it.', summary: 'Follow crude oil through a refinery: learn how fractions are separated by boiling range, how cracking and reforming change molecules, and how petrochemicals become useful materials.', duration: '30–35 minutes',
    learningObjectives: ['Explain why crude oil must be refined.', 'Describe the operation of a fractionating column and its temperature gradient.', 'Identify major petroleum fractions and their uses.', 'Distinguish separation by fractional distillation from conversion by cracking and reforming.', 'Explain how petroleum fractions provide petrochemical feedstocks.'],
    sections: [
      { id: 'why-refine', label: 'Why refine crude oil?', kicker: 'FROM RAW MIXTURE TO PRODUCTS', title: 'What does a refinery do?', content: <>
        <PlainWords>Crude oil contains many hydrocarbons mixed together. A refinery separates this mixture into groups with similar boiling ranges, then changes some molecules and removes unwanted substances to make products that are useful and meet required specifications.</PlainWords>
        <p>Crude oil is not ready to use as it comes from the ground. It may contain water, salts and other impurities. Refineries use several operations, commonly grouped as <strong>separation</strong>, <strong>conversion</strong> and <strong>treatment</strong>.</p>
        <div className="u10-process-grid"><article><span>01 · SEPARATION</span><h3>Fractional distillation</h3><p>Divides crude oil into fractions according to boiling ranges.</p></article><article><span>02 · CONVERSION</span><h3>Cracking and reforming</h3><p>Changes molecular size or arrangement to make more useful products.</p></article><article><span>03 · TREATMENT</span><h3>Cleaning and blending</h3><p>Removes or reduces impurities and blends streams to meet product requirements.</p></article></div>
      </> },
      { id: 'fractional-distillation', label: 'Fractional distillation', kicker: 'SEPARATION BY BOILING RANGE', title: 'How the fractionating column works', content: <>
        <p>Crude oil is heated so that much of it vaporises. The hot vapour–liquid mixture enters a fractionating column. The bottom of the column is hotter than the top. As vapours rise, they cool. Different groups of hydrocarbons condense at different heights because they have different boiling ranges.</p>
        <RefiningColumnDiagram />
        <ol className="u10-step-list"><li><strong>Heat the crude oil:</strong> a furnace heats the mixture so that many components vaporise.</li><li><strong>Feed the mixture into the column:</strong> the hot vapours enter near the lower part of the column.</li><li><strong>Vapours rise:</strong> the column is hot at the bottom and cooler towards the top.</li><li><strong>Fractions condense:</strong> groups condense at heights where the temperature is suitable for their boiling ranges.</li><li><strong>Collect and process:</strong> fractions leave through different outlets and may receive further treatment.</li></ol>
        <Note tone="blue">A fraction is still a mixture of hydrocarbons with similar boiling ranges. It is not usually one pure compound. Exact boiling ranges and outlet positions vary with crude oil and refinery design.</Note>
      </> },
      { id: 'fractions', label: 'Fractions and uses', kicker: 'CONNECT EACH FRACTION TO ITS USE', title: 'What comes out of the column?', content: <>
        <DataTable headers={['Fraction (approximate order)','General characteristics','Examples of uses'] } rows={[[<b>Refinery gases / LPG</b>,'Small molecules; very low boiling ranges.','Cooking and heating fuel; chemical feedstock.'],[<b>Petrol / gasoline</b>,'Relatively light and volatile.','Motor-fuel blend component.'],[<b>Naphtha</b>,'Light liquid fraction.','Important feedstock for petrochemicals and further refining.'],[<b>Kerosene</b>,'Middle fraction.','Aviation turbine fuel and heating uses, after treatment.'],[<b>Diesel / gas oil</b>,'Heavier than kerosene.','Diesel fuel and further conversion.'],[<b>Fuel oil</b>,'Heavy liquid fraction.','Some industrial and marine fuel uses.'],[<b>Residue / bitumen</b>,'Very heavy material with high boiling range.','Road surfacing and other heavy products.']]}/>
        <p>As a general pattern, smaller hydrocarbon molecules boil at lower temperatures and are collected higher in the column. Larger molecules usually have stronger attractions between molecules and higher boiling ranges, so they condense lower down.</p>
      </> },
      { id: 'cracking', label: 'Cracking', kicker: 'BREAKING LARGE MOLECULES', title: 'Why do refineries crack hydrocarbons?', content: <>
        <p>Some crude-oil fractions contain long-chain hydrocarbons that are less useful or less demanded than smaller molecules. <strong>Cracking</strong> breaks large hydrocarbon molecules into smaller molecules, often producing a mixture of shorter alkanes and alkenes. It uses high temperatures and may use a catalyst; the exact conditions depend on the process.</p>
        <ConversionDiagram />
        <FormulaPanel title="A balanced example of cracking" formula={<span>C₁₀H₂₂ → C₈H₁₈ + C₂H₄</span>} variables={<span>Decane → octane + ethene. The equation is an illustrative balanced example, not the only product pattern in an industrial cracker.</span>} steps={[{label:'Count carbon atoms',body:'The reactant has 10 carbon atoms. The products have 8 + 2 = 10 carbon atoms.'},{label:'Count hydrogen atoms',body:'The reactant has 22 hydrogen atoms. The products have 18 + 4 = 22 hydrogen atoms.'},{label:'Interpret the products',body:'Octane is a shorter alkane. Ethene is an alkene that can be used to make polymers and other chemicals.'}]}/>
        <Note tone="mint">Cracking is a chemical conversion process. Fractional distillation separates molecules that are already present; cracking changes the molecules themselves.</Note>
      </> },
      { id: 'reforming', label: 'Reforming', kicker: 'REARRANGING MOLECULES', title: 'What is catalytic reforming?', content: <>
        <p><strong>Reforming</strong> changes the structure of hydrocarbon molecules, often converting straight-chain hydrocarbons into branched-chain, cyclic or aromatic compounds. Catalysts and controlled high-temperature conditions are used. The aim can include producing petrol components with a higher octane rating.</p>
        <p>Octane rating is a measure of a fuel’s resistance to knocking in a spark-ignition engine. It is not simply a measure of how much energy is in the fuel. A higher octane rating helps the fuel resist premature ignition under engine conditions for which it is designed.</p>
        <div className="u10-equation-strip"><strong>C₆H₁₄ → C₆H₆ + 4H₂</strong><span>Illustrative overall change: hexane can be converted to benzene and hydrogen during catalytic reforming/dehydrocyclisation. Industrial routes involve catalysts and controlled conditions.</span></div>
        <Note tone="amber">Do not confuse reforming with cracking. Cracking splits molecules into smaller pieces; reforming rearranges their structures. The equation above is an example, not a universal reforming equation.</Note>
      </> },
      { id: 'petrochemicals', label: 'Petrochemicals', kicker: 'CHEMICAL RAW MATERIALS', title: 'From refinery fractions to everyday materials', content: <>
        <p><strong>Petrochemicals</strong> are chemicals made from petroleum or natural-gas feedstocks. Refineries and chemical plants provide raw materials such as ethene, propene, benzene and other compounds. These can be used to manufacture plastics, synthetic fibres, detergents, solvents, paints and many other products.</p>
        <h3>Example: making poly(ethene)</h3><p>Ethene molecules can join together by addition polymerisation. The double bond in each ethene molecule opens, allowing the molecules to link into a long chain. The repeating unit is shown in brackets.</p>
        <FormulaPanel title="Addition polymerisation of ethene" formula={<span>nCH₂=CH₂ → (—CH₂—CH₂—)ₙ</span>} variables={<span>n means a very large number of ethene molecules. The brackets show the repeating section of the polymer chain.</span>} steps={[{label:'Start with ethene',body:'Each ethene molecule has two carbon atoms joined by a double bond and four hydrogen atoms: CH₂=CH₂.'},{label:'The double bond opens',body:'The molecules form new carbon–carbon single bonds with neighbouring ethene molecules.'},{label:'A long chain forms',body:'Many ethene units join together to make poly(ethene), a polymer.'}]}/>
        <DataTable headers={['Feedstock / building block','Example product family'] } rows={[[<b>Ethene</b>,'Poly(ethene) plastics and other chemicals.'],[<b>Propene</b>,'Poly(propene) and chemical intermediates.'],[<b>Benzene and related aromatics</b>,'Solvents and intermediates for polymers, resins and other products.'],[<b>Natural gas components</b>,'Hydrogen and chemical feedstocks, including materials used in ammonia manufacture.']]}/>
        <h3>Responsible use</h3><p>Petrochemical materials are useful, but production and disposal can create pollution. Plastics should be designed, used, reused and managed responsibly. Recycling is helpful for suitable materials, but it does not remove the need to reduce unnecessary waste and prevent plastic from entering the environment.</p>
      </> },
    ],
    recap: ['Crude oil is refined by separation, conversion and treatment.', 'Fractional distillation separates fractions by boiling range in a column with a temperature gradient.', 'Fractions are mixtures; lighter fractions generally condense higher and heavier fractions lower down.', 'Cracking splits large hydrocarbons into smaller molecules, often producing alkanes and alkenes.', 'Reforming rearranges hydrocarbon structures and can improve petrol octane rating.', 'Petrochemical feedstocks are used to make polymers and many other useful chemicals.'],
    quizPath: '/lessons/petroleum-refining-and-petrochemicals/quiz', quizDescription: 'Check that you can explain the refinery sequence and distinguish its main processes.', sidebarTip: 'Ask what each refinery operation does: separate an existing mixture, change molecule size, rearrange molecules or remove impurities.',
    sources: [sources.inspire, sources.eiaRefining],
    quiz: { description: '12 questions on fractional distillation, fractions, cracking, reforming and petrochemicals.', sidebarTip: 'Do not mix up separation and chemical conversion.', artLabel: 'REFINERY', artCaption: 'Separate · convert · treat' },
  },
];

export const carbonCompoundsLessons: CarbonLesson[] = lessons;
export const getCarbonCompoundsLesson = (id?: string) => carbonCompoundsLessons.find((lesson) => lesson.id === id);
