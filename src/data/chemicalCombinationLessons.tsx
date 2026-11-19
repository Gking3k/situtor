import type { ReactNode } from 'react';
import type { LessonSection } from '../components/CurriculumLessonLayout';

export type ChemicalCombinationLesson = {
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

type Tone = 'blue' | 'mint' | 'amber' | 'lavender' | 'rose';

function Note({ children, tone = 'blue' }: { children: ReactNode; tone?: Tone }) {
  return <aside className={`u6-note u6-note--${tone}`}>{children}</aside>;
}

function Table({ headers, rows }: { headers: string[]; rows: ReactNode[][] }) {
  return <div className="u6-table-wrap"><table className="u6-table"><thead><tr>{headers.map((h) => <th key={h}>{h}</th>)}</tr></thead><tbody>{rows.map((row, i) => <tr key={i}>{row.map((cell, j) => <td key={`${i}-${j}`}>{cell}</td>)}</tr>)}</tbody></table></div>;
}

function Steps({ items }: { items: { title: string; body: ReactNode }[] }) {
  return <div className="u6-steps">{items.map((item, i) => <article key={item.title}><span>{String(i + 1).padStart(2, '0')}</span><div><h3>{item.title}</h3><p>{item.body}</p></div></article>)}</div>;
}

function FormulaPanel({ title, formula, steps }: { title: string; formula: ReactNode; steps: { label: string; body: ReactNode }[] }) {
  return <div className="u6-formula"><span className="u6-kicker">{title}</span><div className="u6-formula__display">{formula}</div><ol>{steps.map((step, i) => <li key={step.label}><b>{i + 1}. {step.label}</b><span>{step.body}</span></li>)}</ol></div>;
}

function PeriodicTableDiagram() {
  const elements = [
    { n: 1, s: 'H', name: 'Hydrogen', g: 1, p: 1, t: 'nonmetal' }, { n: 2, s: 'He', name: 'Helium', g: 18, p: 1, t: 'noble' },
    { n: 3, s: 'Li', name: 'Lithium', g: 1, p: 2, t: 'metal' }, { n: 4, s: 'Be', name: 'Beryllium', g: 2, p: 2, t: 'metal' },
    { n: 5, s: 'B', name: 'Boron', g: 13, p: 2, t: 'metalloid' }, { n: 6, s: 'C', name: 'Carbon', g: 14, p: 2, t: 'nonmetal' }, { n: 7, s: 'N', name: 'Nitrogen', g: 15, p: 2, t: 'nonmetal' }, { n: 8, s: 'O', name: 'Oxygen', g: 16, p: 2, t: 'nonmetal' }, { n: 9, s: 'F', name: 'Fluorine', g: 17, p: 2, t: 'nonmetal' }, { n: 10, s: 'Ne', name: 'Neon', g: 18, p: 2, t: 'noble' },
    { n: 11, s: 'Na', name: 'Sodium', g: 1, p: 3, t: 'metal' }, { n: 12, s: 'Mg', name: 'Magnesium', g: 2, p: 3, t: 'metal' }, { n: 13, s: 'Al', name: 'Aluminium', g: 13, p: 3, t: 'metal' }, { n: 14, s: 'Si', name: 'Silicon', g: 14, p: 3, t: 'metalloid' }, { n: 15, s: 'P', name: 'Phosphorus', g: 15, p: 3, t: 'nonmetal' }, { n: 16, s: 'S', name: 'Sulfur', g: 16, p: 3, t: 'nonmetal' }, { n: 17, s: 'Cl', name: 'Chlorine', g: 17, p: 3, t: 'nonmetal' }, { n: 18, s: 'Ar', name: 'Argon', g: 18, p: 3, t: 'noble' },
    { n: 19, s: 'K', name: 'Potassium', g: 1, p: 4, t: 'metal' }, { n: 20, s: 'Ca', name: 'Calcium', g: 2, p: 4, t: 'metal' },
  ];
  return <div className="u6-diagram-card" role="region" tabIndex={0} aria-label="Scientific diagram. Scroll horizontally on narrow screens to view the full illustration."><div className="u6-periodic-scroll"><div className="u6-periodic-grid" role="group" aria-label="Positions of the first twenty elements in the periodic table"><div className="u6-periodic-corner">Period<br/>Group →</div>{Array.from({ length: 18 }, (_, i) => <div className="u6-group-number" key={i + 1}>{i + 1}</div>)}{[1, 2, 3, 4].map((period) => <div className="u6-period-row" key={period}><b>{period}</b>{Array.from({ length: 18 }, (_, index) => { const e = elements.find((item) => item.p === period && item.g === index + 1); return e ? <div key={e.s} className={`u6-element u6-element--${e.t}`} title={`${e.name}, atomic number ${e.n}`}><small>{e.n}</small><strong>{e.s}</strong><span>{e.name}</span></div> : <div key={`${period}-${index}`} className="u6-empty-cell" aria-hidden="true" />; })}</div>)}</div></div><div className="u6-legend"><span><i className="u6-dot u6-dot--metal"/> Metals</span><span><i className="u6-dot u6-dot--metalloid"/> Metalloids</span><span><i className="u6-dot u6-dot--nonmetal"/> Other nonmetals</span><span><i className="u6-dot u6-dot--noble"/> Noble gases</span></div><p className="u6-caption">The first 20 elements are placed by increasing atomic number. Groups are vertical columns; periods are horizontal rows. The transition-metal block between Groups 2 and 13 is outside this first-20 overview.</p></div>;
}

function PeriodGroupDiagram() {
  const periodThree = [
    { n: 11, s: 'Na', config: '2,8,1' }, { n: 12, s: 'Mg', config: '2,8,2' },
    { n: 13, s: 'Al', config: '2,8,3' }, { n: 14, s: 'Si', config: '2,8,4' },
    { n: 15, s: 'P', config: '2,8,5' }, { n: 16, s: 'S', config: '2,8,6' },
    { n: 17, s: 'Cl', config: '2,8,7' }, { n: 18, s: 'Ar', config: '2,8,8' },
  ];
  const cardX = (index: number) => 56 + index * 108;
  return (
    <div className="u6-diagram-card u6-fit-card" role="region" tabIndex={0} aria-label="Diagram comparing Group 1 and Period 3. Lithium and sodium are in Group 1. All eight Period 3 elements from sodium to argon are shown in order.">
      <svg viewBox="0 0 980 330" role="img" aria-labelledby="u6-period-group-title u6-period-group-desc">
        <title id="u6-period-group-title">How groups and periods are read</title>
        <desc id="u6-period-group-desc">Lithium is directly above sodium in Group 1. The full Period 3 sequence runs horizontally from sodium, magnesium, aluminium, silicon, phosphorus, sulfur, chlorine to argon. Lithium and sodium each have one outer-shell electron. All Period 3 atoms have three occupied shells.</desc>
        <rect x="18" y="16" width="944" height="294" rx="18" fill="#fbfdff" stroke="#dce7ef" />
        <g fontSize="14" fill="#536d81" fontWeight="800">
          <text x="102" y="48" textAnchor="middle">GROUP 1</text>
          <text x="515" y="48" textAnchor="middle">PERIOD 3</text>
        </g>
        {/* Period 3 guide is drawn first, so the element cards cover it.
            It remains visible in the gaps at the centre line without crossing labels. */}
        <path d="M102 177 H930" stroke="#2f8a73" strokeWidth="2.5" strokeDasharray="7 5" fill="none" />
        <path d="M930 177 l-11 -6 v12 z" fill="#2f8a73" />
        <g fill="#e8f3fb" stroke="#9cc2d8" strokeWidth="1.2">
          <rect x="56" y="68" width="92" height="52" rx="9" />
          <rect x="56" y="148" width="92" height="58" rx="9" />
        </g>
        <g textAnchor="middle" fill="#244a66">
          <text x="102" y="90" fontSize="12">3 · Li</text>
          <text x="102" y="108" fontSize="11">2,1</text>
          <text x="102" y="172" fontSize="12">11 · Na</text>
          <text x="102" y="191" fontSize="11">2,8,1</text>
        </g>
        {periodThree.slice(1).map((element, index) => {
          const x = cardX(index + 1);
          return <g key={element.s}>
            <rect x={x} y="148" width="92" height="58" rx="9" fill="#eaf6ef" stroke="#b8d9c8" strokeWidth="1.2" />
            <text x={x + 46} y="172" textAnchor="middle" fontSize="12" fill="#244a66">{element.n} · {element.s}</text>
            <text x={x + 46} y="191" textAnchor="middle" fontSize="11" fill="#244a66">{element.config}</text>
          </g>;
        })}
        <path d="M102 124 V142" stroke="#286b8b" strokeWidth="2.5" fill="none" />
        <path d="M96 136 L102 144 L108 136" stroke="#286b8b" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <g fontSize="11" fontWeight="700">
          <text x="102" y="256" textAnchor="middle" fill="#2b6987">Same group</text>
          <text x="102" y="274" textAnchor="middle" fill="#60788d" fontWeight="400">one outer electron</text>
          <text x="515" y="256" textAnchor="middle" fill="#2f7c65">Across Period 3</text>
          <text x="515" y="274" textAnchor="middle" fill="#60788d" fontWeight="400">three occupied shells; Na → Ar</text>
        </g>
      </svg>
      <p className="u6-caption">The vertical guide connects lithium and sodium in Group 1. The horizontal guide starts at sodium and includes all eight elements in Period 3, ending at argon. The arrow is a reading guide, not particle movement.</p>
    </div>
  );
}


const firstTwenty = [
  ['H','Hydrogen','1'],['He','Helium','2'],['Li','Lithium','2,1'],['Be','Beryllium','2,2'],['B','Boron','2,3'],['C','Carbon','2,4'],['N','Nitrogen','2,5'],['O','Oxygen','2,6'],['F','Fluorine','2,7'],['Ne','Neon','2,8'],
  ['Na','Sodium','2,8,1'],['Mg','Magnesium','2,8,2'],['Al','Aluminium','2,8,3'],['Si','Silicon','2,8,4'],['P','Phosphorus','2,8,5'],['S','Sulfur','2,8,6'],['Cl','Chlorine','2,8,7'],['Ar','Argon','2,8,8'],['K','Potassium','2,8,8,1'],['Ca','Calcium','2,8,8,2'],
];

function ElectronArrangementTable() {
  return <div className="u6-diagram-card" role="region" tabIndex={0} aria-label="Scientific diagram. Scroll horizontally on narrow screens to view the full illustration."><div className="u6-electron-grid">{firstTwenty.map(([symbol, name, arrangement], i) => <article key={symbol}><small>Z = {i + 1}</small><strong>{symbol}</strong><span>{name}</span><b>{arrangement}</b></article>)}</div><p className="u6-caption">Shell arrangements for neutral atoms of the first twenty elements. The values separated by commas show the number of electrons in each occupied shell.</p></div>;
}

function ShellAtomDiagram({ symbol, name, config, electrons }: { symbol: string; name: string; config: string; electrons: number[][] }) {
  const cx = 150; const cy = 150;
  return <article className="u6-shell-card"><svg viewBox="0 0 300 300" role="img" aria-label={`${name} atom shell diagram, electron arrangement ${config}`}><circle cx={cx} cy={cy} r="27" fill="#f3c96f" stroke="#bb8b32" strokeWidth="2"/><text x={cx} y={cy + 6} textAnchor="middle" fontSize="17" fontWeight="800" fill="#5d421c">{symbol}</text>{electrons.map((shell, i) => { const r = 53 + i * 36; const positions = shell.map((_, j) => { const angle = (-90 + 360 * j / shell.length) * Math.PI / 180; return { x: cx + r * Math.cos(angle), y: cy + r * Math.sin(angle) }; }); return <g key={i}><circle cx={cx} cy={cy} r={r} fill="none" stroke="#8ab7cb" strokeWidth="1.4" strokeDasharray="4 4"/>{positions.map((pos, j) => <circle key={j} cx={pos.x} cy={pos.y} r="5.5" fill="#247caa" stroke="#145572" strokeWidth="1"/> )}</g>; })}</svg><div><strong>{name} ({symbol})</strong><span>Electron arrangement: {config}</span></div></article>;
}

function ShellComparisonDiagram() {
  return (
    <div className="u6-shell-diagram-group">
      <div className="u6-shell-diagram">
        <ShellAtomDiagram symbol="Na" name="Sodium" config="2,8,1" electrons={[[1,2],[1,2,3,4,5,6,7,8],[1]]}/>
        <ShellAtomDiagram symbol="Cl" name="Chlorine" config="2,8,7" electrons={[[1,2],[1,2,3,4,5,6,7,8],[1,2,3,4,5,6,7]]}/>
      </div>
      <p className="u6-caption">How to read the model: the centre represents the nucleus (protons and neutrons are not drawn separately); each blue dot is one electron; each dashed circle represents an occupied shell. The drawings are schematic and are not to scale.</p>
    </div>
  );
}
function IonicTransferDiagram() {
  return (
    <div className="u6-diagram-card u6-fit-card" role="region" tabIndex={0} aria-label="Scientific diagram of electron transfer from sodium to chlorine. The dashed ring marks the vacant eighth electron position.">
      <svg viewBox="0 0 850 440" role="img" aria-labelledby="u6-ionic-title u6-ionic-desc">
        <title id="u6-ionic-title">One electron transfer from sodium to chlorine</title>
        <desc id="u6-ionic-desc">A sodium atom with one outer electron transfers that electron to a chlorine atom with seven outer electrons. A dashed empty circle marks chlorine's vacant eighth outer-shell position, and the transfer arrow points to it. Sodium becomes Na plus and chlorine becomes Cl minus. Inner shells are omitted from both atom drawings. The atom-level model is followed by the balanced reaction using chlorine gas, Cl2.</desc>
        <defs>
          <marker id="u6-ionic-transfer-head" viewBox="0 0 12 12" markerWidth="12" markerHeight="12" refX="10" refY="6" orient="auto" markerUnits="userSpaceOnUse">
            <path d="M1 1 L11 6 L1 11 L3.5 6 Z" fill="#287fa7" />
          </marker>
        </defs>
        <rect x="18" y="18" width="245" height="320" rx="16" fill="#eff7fc" stroke="#cbdfea" />
        <rect x="302" y="18" width="245" height="320" rx="16" fill="#fff8ed" stroke="#efdec2" />
        <rect x="588" y="18" width="244" height="320" rx="16" fill="#f0faf5" stroke="#cde7d9" />
        <g fontSize="14" fontWeight="800" textAnchor="middle">
          <text x="140" y="48" fill="#244a66">SODIUM ATOM</text>
          <text x="424" y="48" fill="#80551d">CHLORINE ATOM</text>
          <text x="710" y="48" fill="#28644f">RESULTING IONS</text>
        </g>
        <g>
          <circle cx="140" cy="175" r="27" fill="#e5c16e" stroke="#ad8637" />
          <text x="140" y="181" fontSize="14" textAnchor="middle" fill="#5b431a" fontWeight="800">Na</text>
          <circle cx="140" cy="175" r="66" fill="none" stroke="#81acc3" strokeDasharray="4 4" />
          <circle cx="206" cy="175" r="6" fill="#2480ad" />
          <text x="140" y="275" textAnchor="middle" fill="#48677d" fontSize="12">2,8,1</text>
          <text x="140" y="296" textAnchor="middle" fill="#48677d" fontSize="11">One outer electron</text>
          <text x="140" y="318" textAnchor="middle" fill="#718498" fontSize="9">Outer shell shown; inner shells omitted</text>
        </g>
        <g>
          <circle cx="424" cy="175" r="27" fill="#e5c16e" stroke="#ad8637" />
          <text x="424" y="181" fontSize="14" textAnchor="middle" fill="#5b431a" fontWeight="800">Cl</text>
          <circle cx="424" cy="175" r="66" fill="none" stroke="#cba36a" strokeDasharray="4 4" />
          <circle cx="470.7" cy="128.3" r="9" fill="#fff8ed" stroke="#287fa7" strokeWidth="2" strokeDasharray="3 2" />
          {[-90, 0, 45, 90, 135, 180, 225].map((deg) => { const a = deg * Math.PI / 180; return <circle key={deg} cx={424 + 66 * Math.cos(a)} cy={175 + 66 * Math.sin(a)} r="5.5" fill="#d45b54" />; })}
          <text x="424" y="275" textAnchor="middle" fill="#765a37" fontSize="12">2,8,7</text>
          <text x="424" y="296" textAnchor="middle" fill="#765a37" fontSize="11">Needs one electron</text>
          <text x="424" y="318" textAnchor="middle" fill="#8a765c" fontSize="9">Outer shell shown; inner shells omitted</text>
        </g>
        <rect x="276" y="61" width="296" height="31" rx="9" fill="#f8fbfd" stroke="#cfe0eb" />
        <text x="424" y="81" textAnchor="middle" fontSize="11" fontWeight="700" fill="#287fa7">One electron fills chlorine’s vacant 8th position</text>
        <path d="M212 175 C270 120 365 88 466 128" fill="none" stroke="#287fa7" strokeWidth="3.2" markerEnd="url(#u6-ionic-transfer-head)" />
        <g>
          <circle cx="665" cy="165" r="47" fill="#eaf4fb" stroke="#80aec8" strokeWidth="2" />
          <text x="665" y="172" textAnchor="middle" fontWeight="800" fontSize="21" fill="#24536f">Na⁺</text>
          <circle cx="756" cy="165" r="47" fill="#fff2e9" stroke="#dfa98d" strokeWidth="2" />
          <text x="756" y="172" textAnchor="middle" fontWeight="800" fontSize="21" fill="#8c4e39">Cl⁻</text>
          <text x="710" y="245" textAnchor="middle" fontSize="12" fontWeight="700" fill="#28644f">Opposite charges attract</text>
          <text x="710" y="275" textAnchor="middle" fontSize="12" fill="#48677d">Ion ratio = 1 : 1</text>
          <text x="710" y="305" textAnchor="middle" fontSize="10" fill="#48677d">Na⁺: 2,8  ·  Cl⁻: 2,8,8</text>
        </g>
        <text x="425" y="366" textAnchor="middle" fontSize="12" fontWeight="700" fill="#60788c">One atom-level transfer is shown above.</text>
        <text x="425" y="397" textAnchor="middle" fontSize="17" fontWeight="800" fill="#1d526d">2Na + Cl₂ → 2NaCl</text>
        <text x="425" y="420" textAnchor="middle" fontSize="11" fill="#72879a">In the overall reaction, chlorine enters as diatomic Cl₂, so two Na atoms form two NaCl formula units.</text>
      </svg>
      <p className="u6-caption">Electron transfer creates oppositely charged ions. The ionic bond is the electrostatic attraction between the positive and negative ions; solid sodium chloride forms a giant ionic lattice.</p>
    </div>
  );
}


function CovalentDiagram() {
  return <figure className="u6-diagram-figure"><div className="u6-diagram-card" role="region" tabIndex={0} aria-label="Covalent bonding in hydrogen and water. Scroll horizontally on narrow screens to view the full illustration."><svg viewBox="0 0 820 340" role="img" aria-labelledby="u6-covalent-title u6-covalent-desc"><title id="u6-covalent-title">Covalent sharing in hydrogen and water</title><desc id="u6-covalent-desc">Two panels show hydrogen atoms sharing one pair of electrons in H2 and oxygen sharing one pair with each of two hydrogen atoms in water. Different colours distinguish electrons contributed by different atoms.</desc><rect x="18" y="18" width="375" height="300" rx="17" fill="#eff7fc" stroke="#cbdfea"/><rect x="427" y="18" width="375" height="300" rx="17" fill="#f1faf5" stroke="#cce7d8"/><text x="205" y="50" textAnchor="middle" fill="#244a66" fontSize="16" fontWeight="800">HYDROGEN · H₂</text><text x="614" y="50" textAnchor="middle" fill="#28644f" fontSize="16" fontWeight="800">WATER · H₂O</text><circle cx="143" cy="163" r="42" fill="#e7f2fb" stroke="#78a9c6" strokeWidth="2"/><circle cx="247" cy="163" r="42" fill="#e7f2fb" stroke="#78a9c6" strokeWidth="2"/><text x="143" y="169" textAnchor="middle" fill="#23536f" fontSize="22" fontWeight="800">H</text><text x="247" y="169" textAnchor="middle" fill="#23536f" fontSize="22" fontWeight="800">H</text><ellipse cx="195" cy="163" rx="17" ry="9" fill="#fff" stroke="#b4cedd"/><circle cx="190" cy="163" r="4.5" fill="#267ba7"/><circle cx="200" cy="163" r="4.5" fill="#d58a45"/><text x="195" y="235" textAnchor="middle" fontSize="13" fill="#526b7d">One shared pair = one single bond</text><text x="614" y="112" textAnchor="middle" fontSize="12" fill="#526b7d">Oxygen shares one pair with each H.</text><circle cx="614" cy="194" r="47" fill="#fff0ed" stroke="#d98d82" strokeWidth="2"/><circle cx="500" cy="194" r="34" fill="#e7f2fb" stroke="#78a9c6" strokeWidth="2"/><circle cx="728" cy="194" r="34" fill="#e7f2fb" stroke="#78a9c6" strokeWidth="2"/><text x="614" y="201" textAnchor="middle" fill="#8c3c38" fontSize="22" fontWeight="800">O</text><circle cx="607" cy="150" r="3.5" fill="#8c3c38"/><circle cx="621" cy="150" r="3.5" fill="#8c3c38"/><circle cx="607" cy="238" r="3.5" fill="#8c3c38"/><circle cx="621" cy="238" r="3.5" fill="#8c3c38"/><text x="500" y="201" textAnchor="middle" fill="#23536f" fontSize="20" fontWeight="800">H</text><text x="728" y="201" textAnchor="middle" fill="#23536f" fontSize="20" fontWeight="800">H</text><ellipse cx="556" cy="194" rx="16" ry="8" fill="#fff" stroke="#b4cedd"/><ellipse cx="672" cy="194" rx="16" ry="8" fill="#fff" stroke="#b4cedd"/><circle cx="551" cy="194" r="4" fill="#267ba7"/><circle cx="561" cy="194" r="4" fill="#d58a45"/><circle cx="667" cy="194" r="4" fill="#d58a45"/><circle cx="677" cy="194" r="4" fill="#267ba7"/><text x="614" y="266" textAnchor="middle" fontSize="13" fill="#526b7d">Two O—H single covalent bonds</text></svg></div><figcaption className="u6-caption">A covalent bond is a shared pair of electrons. Each atom contributes one electron to the shared pair in these simple examples.</figcaption></figure>;
}

function CoordinateBondDiagram() {
  return (
    <div className="u6-diagram-card u6-coordinate-card u6-fit-card" role="region" tabIndex={0} aria-label="Formation of ammonium ion. On narrow screens, the before and after stages are stacked vertically.">
      <svg className="u6-diagram-desktop" viewBox="0 0 820 330" role="img" aria-labelledby="u6-coordinate-title u6-coordinate-desc">
        <title id="u6-coordinate-title">Formation of an ammonium ion by coordinate covalent bonding</title>
        <desc id="u6-coordinate-desc">Before: ammonia has three N-H bonds and a lone pair on nitrogen; H plus is the electron-pair acceptor. A clear arrow points from the lone pair towards H plus. After: nitrogen is bonded to four hydrogen atoms in the ammonium ion, NH4 plus.</desc>
        <defs><marker id="u6-coordinate-arrow" viewBox="0 0 13 13" markerWidth="13" markerHeight="13" refX="11" refY="6.5" orient="auto" markerUnits="userSpaceOnUse"><path d="M1 1 L12 6.5 L1 12 L4 6.5 Z" fill="#2e809b"/></marker></defs>
        <rect x="18" y="18" width="360" height="280" rx="16" fill="#f2f7fc" stroke="#cddfea" />
        <rect x="440" y="18" width="360" height="280" rx="16" fill="#f0faf5" stroke="#cde7d9" />
        <text x="198" y="49" textAnchor="middle" fontSize="16" fontWeight="800" fill="#244a66">BEFORE</text>
        <text x="620" y="49" textAnchor="middle" fontSize="16" fontWeight="800" fill="#28644f">AFTER</text>
        <circle cx="180" cy="174" r="30" fill="#dceef7" stroke="#80aec8" />
        <text x="180" y="181" textAnchor="middle" fontSize="20" fontWeight="800" fill="#24536f">N</text>
        <g stroke="#678da7" strokeWidth="2.2"><line x1="157" y1="155" x2="128" y2="138"/><line x1="203" y1="155" x2="232" y2="138"/><line x1="180" y1="204" x2="180" y2="225"/></g>
        <g fill="#8e5d3f" fontSize="16" fontWeight="700" textAnchor="middle"><text x="116" y="143">H</text><text x="244" y="143">H</text><text x="180" y="246">H</text></g>
        <text x="180" y="98" textAnchor="middle" fontSize="12" fontWeight="700" fill="#267ba7">Lone pair</text>
        <circle cx="173" cy="124" r="4.5" fill="#267ba7"/><circle cx="187" cy="124" r="4.5" fill="#267ba7"/>
        <text x="320" y="177" textAnchor="middle" fontSize="20" fontWeight="800" fill="#8c6045">H⁺</text>
        <rect x="224" y="70" width="132" height="27" rx="8" fill="#f8fbfd" stroke="#d4e4ed"/>
        <text x="290" y="88" textAnchor="middle" fontSize="10.5" fontWeight="700" fill="#2e809b">Lone pair donated</text>
        <path d="M194 126 C230 111 268 135 302 163" fill="none" stroke="#2e809b" strokeWidth="3.2" markerEnd="url(#u6-coordinate-arrow)" />
        <text x="180" y="274" textAnchor="middle" fontSize="11" fill="#526b7d">NH₃ has three N—H bonds and one lone pair.</text>
        <path d="M510 84 H500 V254 H510 M730 84 H740 V254 H730" fill="none" stroke="#668ca5" strokeWidth="2" />
        <circle cx="620" cy="159" r="29" fill="#dceef7" stroke="#80aec8" />
        <text x="620" y="166" textAnchor="middle" fontSize="20" fontWeight="800" fill="#24536f">N</text>
        <g stroke="#668ca5" strokeWidth="2.2"><line x1="620" y1="130" x2="620" y2="98"/><line x1="649" y1="159" x2="687" y2="159"/><line x1="591" y1="159" x2="553" y2="159"/><line x1="620" y1="188" x2="620" y2="220"/></g>
        <g fill="#8e5d3f" fontSize="17" fontWeight="700" textAnchor="middle"><text x="620" y="91">H</text><text x="704" y="165">H</text><text x="536" y="165">H</text><text x="620" y="241">H</text></g>
        <text x="620" y="278" textAnchor="middle" fontSize="13" fontWeight="800" fill="#28644f">[NH₄]⁺ · ammonium ion</text>
        <text x="410" y="320" textAnchor="middle" fontSize="12" fill="#60788c">NH₃ + H⁺ → NH₄⁺</text>
      </svg>
      <svg className="u6-diagram-mobile" viewBox="0 0 420 720" role="img" aria-labelledby="u6-coordinate-mobile-title u6-coordinate-mobile-desc">
        <title id="u6-coordinate-mobile-title">Ammonium ion formation, mobile layout</title>
        <desc id="u6-coordinate-mobile-desc">The upper panel shows ammonia donating its lone pair to a hydrogen ion. A clear arrow points from the nitrogen lone pair to H plus. The lower panel shows the resulting ammonium ion with nitrogen bonded to four hydrogen atoms.</desc>
        <defs><marker id="u6-coordinate-mobile-arrow" viewBox="0 0 13 13" markerWidth="13" markerHeight="13" refX="11" refY="6.5" orient="auto" markerUnits="userSpaceOnUse"><path d="M1 1 L12 6.5 L1 12 L4 6.5 Z" fill="#2e809b"/></marker></defs>
        <rect x="12" y="14" width="396" height="274" rx="16" fill="#f2f7fc" stroke="#cddfea" />
        <text x="210" y="46" textAnchor="middle" fontSize="16" fontWeight="800" fill="#244a66">BEFORE · AMMONIA + H⁺</text>
        <circle cx="112" cy="157" r="27" fill="#dceef7" stroke="#80aec8"/><text x="112" y="164" textAnchor="middle" fontSize="20" fontWeight="800" fill="#24536f">N</text>
        <g stroke="#678da7" strokeWidth="2"><line x1="88" y1="157" x2="59" y2="157"/><line x1="136" y1="157" x2="165" y2="157"/><line x1="112" y1="184" x2="112" y2="218"/></g>
        <g fill="#8e5d3f" fontSize="16" fontWeight="700" textAnchor="middle"><text x="48" y="163">H</text><text x="176" y="163">H</text><text x="112" y="239">H</text></g>
        <circle cx="105" cy="112" r="4.5" fill="#267ba7"/><circle cx="119" cy="112" r="4.5" fill="#267ba7"/>
        <text x="112" y="91" textAnchor="middle" fontSize="11" fill="#267ba7" fontWeight="700">Lone pair</text>
        <text x="322" y="151" textAnchor="middle" fontSize="22" fontWeight="800" fill="#8c6045">H⁺</text>
        <rect x="188" y="61" width="180" height="27" rx="8" fill="#f8fbfd" stroke="#d4e4ed"/>
        <text x="278" y="79" textAnchor="middle" fontSize="10.5" fontWeight="700" fill="#2e809b">Lone pair donated</text>
        <path d="M130 108 C190 75 253 90 296 139" fill="none" stroke="#2e809b" strokeWidth="3.2" markerEnd="url(#u6-coordinate-mobile-arrow)"/>
        <text x="210" y="270" textAnchor="middle" fontSize="12" fill="#526b7d">NH₃ contains three N—H bonds and one lone pair.</text>
        <rect x="12" y="306" width="396" height="398" rx="16" fill="#f0faf5" stroke="#cde7d9"/>
        <text x="210" y="340" textAnchor="middle" fontSize="16" fontWeight="800" fill="#28644f">AFTER · AMMONIUM ION</text>
        <circle cx="210" cy="492" r="29" fill="#dceef7" stroke="#80aec8"/><text x="210" y="499" textAnchor="middle" fontSize="20" fontWeight="800" fill="#24536f">N</text>
        <g stroke="#668ca5" strokeWidth="2.4"><line x1="210" y1="463" x2="210" y2="408"/><line x1="239" y1="492" x2="294" y2="492"/><line x1="181" y1="492" x2="126" y2="492"/><line x1="210" y1="521" x2="210" y2="576"/></g>
        <g fill="#8e5d3f" fontSize="19" fontWeight="700" textAnchor="middle"><text x="210" y="400">H</text><text x="310" y="499">H</text><text x="110" y="499">H</text><text x="210" y="600">H</text></g>
        <text x="210" y="638" textAnchor="middle" fontSize="15" fontWeight="800" fill="#28644f">NH₄⁺ · overall charge +1</text>
        <text x="210" y="675" textAnchor="middle" fontSize="16" fontWeight="800" fill="#244a66">NH₃ + H⁺ → NH₄⁺</text>
      </svg>
      <p className="u6-caption">The arrow points from the electron-pair donor (nitrogen) to the electron-pair acceptor (H⁺). After formation, all four N—H bonds in NH₄⁺ are equivalent.</p>
    </div>
  );
}


function MetallicLatticeDiagram() {
  const ions = [[90,100],[190,100],[290,100],[390,100],[90,190],[190,190],[290,190],[390,190],[90,280],[190,280],[290,280],[390,280]];
  // This is explicitly a monovalent-metal schematic: one delocalised electron per M+ core.
  const electrons = [[140,62],[240,62],[340,62],[140,145],[240,145],[340,145],[140,235],[240,235],[340,235],[140,325],[240,325],[340,325]];
  return (
    <div className="u6-diagram-card" role="region" tabIndex={0} aria-label="Scientific diagram of metallic bonding. Scroll horizontally on narrow screens.">
      <svg viewBox="0 0 500 390" role="img" aria-labelledby="u6-metal-title u6-metal-desc">
        <title id="u6-metal-title">Metallic lattice with delocalised electrons</title>
        <desc id="u6-metal-desc">Twelve positive M plus ion cores form a regular lattice. Twelve small negative electrons are shown between the cores to represent the delocalised electron sea in a simplified monovalent metal model.</desc>
        <rect x="10" y="10" width="480" height="370" rx="18" fill="#f2f8fc" stroke="#d4e4ee"/>
        <text x="250" y="38" textAnchor="middle" fontSize="11" fontWeight="700" fill="#526b7d">M⁺ = positive ion core   •   e⁻ = delocalised electron</text>
        {ions.map(([x,y],i)=><g key={`ion-${i}`}><circle cx={x} cy={y} r="25" fill="#dbeaf2" stroke="#6b9bb5" strokeWidth="1.8"/><text x={x} y={y+5} textAnchor="middle" fontSize="15" fontWeight="800" fill="#28536c">M⁺</text></g>)}
        {electrons.map(([x,y],i)=><g key={`electron-${i}`}><circle cx={x} cy={y} r="8" fill="#d58c43" stroke="#a96a2b"/><text x={x} y={y+3.5} textAnchor="middle" fontSize="8" fontWeight="800" fill="#fff">−</text></g>)}
        <path d="M55 350 H445" stroke="#4a819d" strokeWidth="1.5" strokeDasharray="5 5"/>
        <text x="250" y="367" textAnchor="middle" fontSize="11" fill="#526b7d">Electrons can move throughout the metal.</text>
      </svg>
      <p className="u6-caption">This is a simplified monovalent-metal model: one delocalised electron is shown for each M⁺ core. Metals that contribute more than one outer electron require a different charge/electron count. Metallic bonding is the attraction between the positive cores and the mobile electrons.</p>
    </div>
  );
}
function IntermolecularDiagram() {
  return (
    <div className="u6-diagram-card u6-fit-card" role="region" tabIndex={0} aria-label="Scientific diagram showing a hydrogen bond between two water molecules.">
      <svg viewBox="0 0 820 360" role="img" aria-labelledby="u6-imf-title u6-imf-desc">
        <title id="u6-imf-title">Hydrogen bonding between water molecules</title>
        <desc id="u6-imf-desc">Two bent water molecules each show oxygen with two separate lone pairs. Solid lines are covalent O-H bonds. A dashed line runs from the partially positive hydrogen on the first molecule to the partially negative oxygen of the second molecule, representing an intermolecular hydrogen bond.</desc>
        <rect x="18" y="18" width="784" height="324" rx="17" fill="#f8fbfd" stroke="#dce7ef" />
        <text x="410" y="50" textAnchor="middle" fontSize="16" fontWeight="800" fill="#244a66">HYDROGEN BONDING BETWEEN WATER MOLECULES</text>
        {/* First water molecule: two distinct lone-pair groups are shown above oxygen. */}
        <g>
          <circle cx="220" cy="160" r="38" fill="#fce7e4" stroke="#d38a82" strokeWidth="2" />
          <text x="220" y="167" textAnchor="middle" fontSize="22" fontWeight="800" fill="#8b403c">O</text>
          <circle cx="150" cy="220" r="27" fill="#e4f1fa" stroke="#80abc5" strokeWidth="2" />
          <circle cx="290" cy="220" r="27" fill="#e4f1fa" stroke="#80abc5" strokeWidth="2" />
          <text x="150" y="226" textAnchor="middle" fontSize="18" fontWeight="800" fill="#24536f">H</text>
          <text x="290" y="226" textAnchor="middle" fontSize="18" fontWeight="800" fill="#24536f">H</text>
          <line x1="190" y1="185" x2="169" y2="204" stroke="#496e87" strokeWidth="4" />
          <line x1="250" y1="185" x2="271" y2="204" stroke="#496e87" strokeWidth="4" />
          <g fill="#2b8c9e">
            <circle cx="204" cy="145" r="3.5"/><circle cx="213" cy="145" r="3.5"/>
            <circle cx="227" cy="145" r="3.5"/><circle cx="236" cy="145" r="3.5"/>
          </g>
          <text x="220" y="112" textAnchor="middle" fontSize="12" fontWeight="800" fill="#b25d4d">δ−</text>
          <text x="290" y="260" textAnchor="middle" fontSize="12" fontWeight="800" fill="#4b7c9b">δ+</text>
          <text x="220" y="292" textAnchor="middle" fontSize="12" fill="#526b7d">One water molecule</text>
        </g>
        {/* The dashed attraction is drawn before the acceptor molecule, so it stops cleanly at the oxygen edge and never crosses the lone-pair dots. */}
        <path d="M317 220 C390 184 475 136 567 148" stroke="#2b8c9e" strokeWidth="3" strokeDasharray="8 7" fill="none" />
        {/* Second water molecule: the incoming hydrogen-bond line meets the oxygen edge below the lone-pair groups. */}
        <g>
          <circle cx="600" cy="160" r="38" fill="#fce7e4" stroke="#d38a82" strokeWidth="2" />
          <text x="600" y="167" textAnchor="middle" fontSize="22" fontWeight="800" fill="#8b403c">O</text>
          <circle cx="530" cy="220" r="27" fill="#e4f1fa" stroke="#80abc5" strokeWidth="2" />
          <circle cx="670" cy="220" r="27" fill="#e4f1fa" stroke="#80abc5" strokeWidth="2" />
          <text x="530" y="226" textAnchor="middle" fontSize="18" fontWeight="800" fill="#24536f">H</text>
          <text x="670" y="226" textAnchor="middle" fontSize="18" fontWeight="800" fill="#24536f">H</text>
          <line x1="570" y1="185" x2="549" y2="204" stroke="#496e87" strokeWidth="4" />
          <line x1="630" y1="185" x2="651" y2="204" stroke="#496e87" strokeWidth="4" />
          <g fill="#2b8c9e">
            <circle cx="584" cy="145" r="3.5"/><circle cx="593" cy="145" r="3.5"/>
            <circle cx="607" cy="145" r="3.5"/><circle cx="616" cy="145" r="3.5"/>
          </g>
          <text x="600" y="112" textAnchor="middle" fontSize="12" fontWeight="800" fill="#b25d4d">δ−</text>
          <text x="530" y="260" textAnchor="middle" fontSize="12" fontWeight="800" fill="#4b7c9b">δ+</text>
          <text x="600" y="292" textAnchor="middle" fontSize="12" fill="#526b7d">Another water molecule</text>
        </g>
        <rect x="350" y="78" width="165" height="27" rx="8" fill="#f8fbfd" stroke="#dce7ef" />
        <text x="432.5" y="96" textAnchor="middle" fontSize="12" fontWeight="800" fill="#287c8e">Hydrogen bond</text>
        <text x="410" y="322" textAnchor="middle" fontSize="11" fill="#60788c">Each oxygen has two lone pairs; the dashed line is an attraction between separate molecules.</text>
      </svg>
      <p className="u6-caption">Solid lines show polar covalent O—H bonds within each water molecule. The dashed line shows attraction from δ⁺ H on the first molecule to δ⁻ O on the second. It is not a covalent bond.</p>
    </div>
  );
}


function StateParticlesDiagram() {
  const solid = Array.from({ length: 16 }, (_, i) => [76 + (i % 4) * 35, 83 + Math.floor(i / 4) * 35]);
  const liquid = [[330,82],[371,76],[415,88],[459,82],[344,119],[386,113],[428,123],[467,119],[331,158],[374,153],[418,165],[458,157],[350,196],[392,190],[435,199],[472,193]];
  const gas = [[604,77],[650,67],[700,87],[756,66],[619,119],[674,112],[735,132],[777,108],[601,166],[654,160],[710,177],[763,190],[629,211],[680,215],[729,216],[780,216]];
  return (
    <div className="u6-diagram-card u6-fit-card" role="region" tabIndex={0} aria-label="Particle diagrams for solid, liquid and gas. Each panel shows sixteen particles to make comparison easier.">
      <svg viewBox="0 0 820 330" role="img" aria-labelledby="u6-states-title u6-states-desc">
        <title id="u6-states-title">Particle arrangement and motion in solids, liquids and gases</title>
        <desc id="u6-states-desc">Each of three containers shows sixteen particles. Solid particles are close and ordered and vibrate around fixed positions. Liquid particles are close but irregular and slide past one another. Gas particles are widely spaced and move rapidly in random directions.</desc>
        <defs><marker id="u6-states-arrow" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto-start-reverse"><path d="M0 0 L6 3 L0 6 Z" fill="#6a8496"/></marker></defs>
        <g>
          <rect x="22" y="45" width="230" height="190" rx="16" fill="#eef6fc" stroke="#a9c8da" strokeWidth="2"/>
          <text x="137" y="29" textAnchor="middle" fontWeight="800" fontSize="16" fill="#285670">SOLID</text>
          {solid.map(([x,y],i)=><circle key={i} cx={x} cy={y} r="7.5" fill="#4a8eb6" stroke="#28617f"/>)}
          <path d="M45 83 H64 M45 118 H64 M45 153 H64" fill="none" stroke="#416d88" strokeWidth="1.6" markerStart="url(#u6-states-arrow)" markerEnd="url(#u6-states-arrow)"/>
          <text x="137" y="262" textAnchor="middle" fontSize="12" fill="#526b7d">Close, regular arrangement</text>
          <text x="137" y="280" textAnchor="middle" fontSize="11" fill="#526b7d">Vibrate around fixed positions</text>
        </g>
        <g>
          <rect x="295" y="45" width="230" height="190" rx="16" fill="#f1faf6" stroke="#b8d9c8" strokeWidth="2"/>
          <text x="410" y="29" textAnchor="middle" fontWeight="800" fontSize="16" fill="#2d6b55">LIQUID</text>
          {liquid.map(([x,y],i)=><circle key={i} cx={x} cy={y} r="7.5" fill="#51a18a" stroke="#2e755f"/>)}
          <g fill="none" stroke="#537f8b" strokeWidth="1.7" markerEnd="url(#u6-states-arrow)">
            <path d="M349 98 H374"/><path d="M417 145 L436 136"/><path d="M374 176 H397"/>
          </g>
          <text x="410" y="262" textAnchor="middle" fontSize="12" fill="#526b7d">Close, irregular arrangement</text>
          <text x="410" y="280" textAnchor="middle" fontSize="11" fill="#526b7d">Slide past one another</text>
        </g>
        <g>
          <rect x="568" y="45" width="230" height="190" rx="16" fill="#fff8ed" stroke="#e8d4ad" strokeWidth="2"/>
          <text x="683" y="29" textAnchor="middle" fontWeight="800" fontSize="16" fill="#80551d">GAS</text>
          {gas.map(([x,y],i)=><circle key={i} cx={x} cy={y} r="7.5" fill="#dc9a4f" stroke="#a96a2b"/>)}
          <g fill="none" stroke="#a96a2b" strokeWidth="1.7" markerEnd="url(#u6-states-arrow)">
            <path d="M615 96 L634 82"/><path d="M681 125 L666 142"/><path d="M735 91 L756 101"/><path d="M748 151 L766 140"/>
          </g>
          <text x="683" y="262" textAnchor="middle" fontSize="12" fill="#526b7d">Widely spaced particles</text>
          <text x="683" y="280" textAnchor="middle" fontSize="11" fill="#526b7d">Rapid, random motion</text>
        </g>
        <text x="410" y="312" textAnchor="middle" fontSize="10" fill="#718498">Sixteen particles are shown in each panel; the models are schematic and not to scale.</text>
      </svg>
      <p className="u6-caption">The same number of particles is shown in each container to help compare arrangement and movement. Particle sizes and empty spaces are not drawn to scale.</p>
    </div>
  );
}

function HeatingCurveDiagram() {
  const stages = [
    { number: '1', title: 'Solid warms', detail: 'Solid only · temperature rises' },
    { number: '2', title: 'Melting', detail: 'Solid + liquid · temperature stays constant' },
    { number: '3', title: 'Liquid warms', detail: 'Liquid only · temperature rises' },
    { number: '4', title: 'Boiling', detail: 'Liquid + gas · temperature stays constant' },
    { number: '5', title: 'Gas warms', detail: 'Gas only · temperature rises' },
  ];

  return (
    <div className="u6-diagram-card u6-fit-card u6-heating-curve-card" role="group" aria-label="Heating curve with five numbered stages and a separate stage key below the graph.">
      <svg className="u6-heating-curve-svg" viewBox="0 0 900 330" role="img" aria-labelledby="u6-heating-title u6-heating-desc">
        <title id="u6-heating-title">Heating curve for a pure substance</title>
        <desc id="u6-heating-desc">Temperature is plotted against heat supplied. The curve has five numbered stages: solid warming, melting at constant temperature, liquid warming, boiling at constant temperature, and gas warming. A separate key below the graph explains each numbered stage.</desc>
        <path d="M82 28 V270 H850" stroke="#435f73" strokeWidth="2.5" fill="none" />
        <path d="M110 230 L250 190 L390 190 L530 110 L670 110 L815 32" fill="none" stroke="#2d829b" strokeWidth="5" strokeLinejoin="round" strokeLinecap="round" />
        <g fill="#287d93">
          <circle cx="250" cy="190" r="5.5" />
          <circle cx="390" cy="190" r="5.5" />
          <circle cx="530" cy="110" r="5.5" />
          <circle cx="670" cy="110" r="5.5" />
        </g>
        {/* Number markers identify each curve segment. All descriptive labels live in the separate key below. */}
        <g fill="#244a66" stroke="#ffffff" strokeWidth="2">
          <circle cx="178" cy="210" r="13" />
          <circle cx="320" cy="190" r="13" />
          <circle cx="460" cy="150" r="13" />
          <circle cx="600" cy="110" r="13" />
          <circle cx="742" cy="71" r="13" />
        </g>
        <g fill="#ffffff" fontSize="11" fontWeight="800" textAnchor="middle" dominantBaseline="central">
          <text x="178" y="210">1</text>
          <text x="320" y="190">2</text>
          <text x="460" y="150">3</text>
          <text x="600" y="110">4</text>
          <text x="742" y="71">5</text>
        </g>
        <g fill="#36566d" fontSize="13" fontWeight="700">
          <text transform="translate(28 195) rotate(-90)">Temperature</text>
          <text x="755" y="312">Heat supplied</text>
        </g>
      </svg>
      <div className="u6-heating-stage-key" aria-label="Key to the five numbered stages of the heating curve">
        {stages.map((stage) => (
          <article key={stage.number}>
            <span aria-hidden="true">{stage.number}</span>
            <div>
              <strong>{stage.title}</strong>
              <small>{stage.detail}</small>
            </div>
          </article>
        ))}
      </div>
      <p className="u6-caption">Follow the numbered markers from left to right. The flat stages represent changes of state at constant temperature for a pure substance at fixed pressure.</p>
    </div>
  );
}


const periodicSources = [
  { label: 'Federal Ministry of Education — SS1 Chemical Combination', url: 'https://inspire.education.gov.ng/lessons/229/preview' },
  { label: 'OpenStax — The Periodic Table', url: 'https://openstax.org/books/chemistry-atoms-first/pages/3-summary' },
  { label: 'Creative Chemistry — Electronic configurations of the first 20 elements', url: 'https://www.creative-chemistry.org.uk/gcse/keyideas/periodic-table/electronic-configurations' },
];
const bondSources = [
  { label: 'Federal Ministry of Education — SS1 Chemical Combination', url: 'https://inspire.education.gov.ng/lessons/229/preview' },
  { label: 'OpenStax — Molecular and Ionic Compounds', url: 'https://openstax.org/books/chemistry/pages/2-6-molecular-and-ionic-compounds' },
  { label: 'OpenStax — Covalent Bonding', url: 'https://openstax.org/books/chemistry-2e/pages/7-2-covalent-bonding' },
];
const metallicSources = [
  { label: 'Royal Society of Chemistry — How to teach metallic bonding', url: 'https://edu.rsc.org/metallic-bonding/how-to-teach-metallic-bonding/4017471.article' },
  { label: 'Open University — Metallic bonding', url: 'https://www.open.edu/openlearn/science-maths-technology/chemistry/what-metal/content-section-2.1' },
];
const forceSources = [
  { label: 'OpenStax — Intermolecular Forces', url: 'https://openstax.org/books/chemistry/pages/10-1-intermolecular-forces' },
  { label: 'OpenStax — Chapter 10 Summary', url: 'https://openstax.org/books/chemistry/pages/10-summary' },
];
const stateSources = [
  { label: 'Federal Ministry of Education — SS1 Chemical Combination', url: 'https://inspire.education.gov.ng/lessons/229/preview' },
  { label: 'OpenStax — Phase Transitions', url: 'https://openstax.org/books/chemistry-2e/pages/10-3-phase-transitions' },
  { label: 'OpenStax — Kinetic Theory Summary', url: 'https://openstax.org/books/college-physics-2e/pages/13-section-summary' },
];

export const chemicalCombinationLessons: ChemicalCombinationLesson[] = [
  {
    id: 'periodic-table-and-elements', lessonNumber: '01', title: 'The periodic table', titleLead: 'The', titleAccent: 'periodic table', summary: 'Understand how the first twenty elements are arranged and how groups, periods and atomic numbers reveal patterns.', duration: '18–22 min',
    learningObjectives: ['Explain why elements are arranged by increasing atomic number.','Identify groups and periods in the periodic table.','Locate the first twenty elements and classify them as metals, metalloids, nonmetals or noble gases.','Use an element’s position to make simple predictions about its outer electrons.'],
    sections: [
      { id: 'element-order', label: 'Why elements are arranged', kicker: 'Start with atomic number', title: 'The table follows a meaningful order', content: <><p>The <b>periodic table</b> is a chart of all known chemical elements. It is arranged in order of increasing <b>atomic number</b>. Atomic number is the number of protons in the nucleus of an atom.</p><p>Hydrogen has atomic number 1, helium has 2, lithium has 3, and the sequence continues. The atomic number increases by one as you move from one element to the next in the table.</p><Note tone="mint">An element is identified by its proton number. If an atom has 12 protons, it is magnesium, whatever its number of neutrons or electrons.</Note><p>The word <i>periodic</i> refers to the way some chemical properties recur in patterns as atomic numbers increase.</p></> },
      { id: 'groups-periods', label: 'Groups and periods', kicker: 'Read rows and columns', title: 'Groups go down; periods go across', content: <><p>A <b>group</b> is a vertical column. A <b>period</b> is a horizontal row. In the main-group elements, members of the same group often have similar chemical properties because they have the same number of outer-shell electrons.</p><Table headers={['Position','Meaning','What it can tell you']} rows={[[<b>Group</b>,'Vertical column','For main-group elements, it is linked to the number of outer-shell electrons.'],[<b>Period</b>,'Horizontal row','The period number equals the number of occupied shells in the introductory shell model.']]}/><PeriodGroupDiagram/><p>For example, sodium (Na) is in Group 1 and Period 3. Its shell arrangement is 2,8,1: it has three occupied shells and one outer-shell electron. Magnesium (Mg) is in Group 2 and Period 3, with an arrangement of 2,8,2. Group 1 (apart from hydrogen) contains the alkali metals; Group 2 contains the alkaline earth metals; Group 17 contains the halogens; and Group 18 contains the noble gases.</p><Note>Hydrogen is placed above Group 1 because of its one electron, but it is a nonmetal and does not behave like the alkali metals in every respect. Helium is in Group 18 because its first shell is full with two electrons.</Note></> },
      { id: 'first-twenty', label: 'First twenty elements', kicker: 'Find the element', title: 'The first twenty elements', content: <><p>The SS1 learning outcome focuses on the first twenty elements. Learn their names, symbols and atomic numbers, then practise locating them by group and period.</p><PeriodicTableDiagram/><p>Metals among the first twenty include lithium, beryllium, sodium, magnesium, aluminium, potassium and calcium. Boron and silicon are commonly classified as metalloids. Hydrogen, carbon, nitrogen, oxygen, fluorine, phosphorus, sulfur and chlorine are nonmetals; helium, neon and argon are noble gases.</p><p>A <b>metalloid</b> has some properties intermediate between metals and nonmetals. Classification is a useful guide, but the exact properties of each element must still be considered.</p></> },
      { id: 'reading-position', label: 'Use position to reason', kicker: 'Apply the pattern', title: 'Make predictions from an element’s position', content: <><Steps items={[{title:'Find the atomic number',body:'Use it to identify the element and the number of protons in each atom.'},{title:'Find its period',body:'Count the occupied electron shells in the introductory shell model.'},{title:'Find its group',body:'For a main-group element, use the group to infer the number of outer-shell electrons.'},{title:'Connect to chemical behaviour',body:'Outer-shell electrons help explain why elements form ions or share electrons in bonds. The next lessons develop this connection.'}]}/><Note tone="amber">Do not assume every element in a vertical column behaves identically. Group patterns are useful, but there are exceptions and differences within groups.</Note><p>Compound naming and formula writing were taught in Unit 5. This unit uses familiar formulas such as NaCl and MgO to explain why elements combine; return to Unit 5 when you need the full naming rules.</p></> },
    ],
    recap: ['The periodic table arranges elements by increasing atomic number.','Groups are vertical columns; periods are horizontal rows.','Main-group elements in the same group often have the same number of outer-shell electrons.','The first twenty elements occupy Periods 1–4.','Atomic number identifies an element because it equals the number of protons.'],
    quizPath: '/lessons/periodic-table-and-elements/quiz', quizDescription: 'Use periodic-table positions, atomic numbers and element properties to solve twelve understanding questions.', sidebarTip: 'When locating an element, read its period and group separately. Then check that the atomic number matches.', sources: periodicSources,
    quiz: { description: 'A reasoning check on element order, groups, periods and classification.', sidebarTip: 'Atomic number counts protons; period counts occupied shells in this model.', artLabel: 'Periodic structure', artCaption: 'Read the table by rows and columns.' },
    nextLesson: { title: 'Electronic configuration', path: '/lessons/electron-configuration' },
  },
  {
    id: 'electron-configuration', lessonNumber: '02', title: 'Electronic configuration', titleLead: 'Electronic', titleAccent: 'configuration', summary: 'Work out how electrons are arranged in shells and connect electron arrangements to an element’s position and reactivity.', duration: '20–24 min',
    learningObjectives: ['Explain what an electron arrangement shows.','Write shell arrangements for neutral atoms of the first twenty elements.','Relate atomic number, occupied shells and outer-shell electrons.','Determine simple electron arrangements for common ions.'],
    sections: [
      { id: 'what-configuration-means', label: 'What configuration means', kicker: 'Count the electrons', title: 'An electron arrangement is a shell count', content: <><p><b>Electronic configuration</b> describes how electrons are distributed in an atom. At SS1 level, we use a simple shell arrangement such as <b>2,8,1</b> for sodium.</p><p>The commas separate shells. In 2,8,1, the first shell has 2 electrons, the second has 8 and the third has 1. Add the numbers to check the total: 2 + 8 + 1 = 11 electrons.</p><Note tone="mint">For a neutral atom, number of electrons = number of protons = atomic number. This lets you begin an electron arrangement from the periodic table.</Note></> },
      { id: 'filling-shells', label: 'Filling the shells', kicker: 'A reliable method', title: 'Fill the shells in the correct order', content: <><Steps items={[{title:'Find the atomic number',body:'For a neutral atom, this is the total number of electrons to arrange.'},{title:'Fill the first shell',body:'Place up to 2 electrons in the first shell.'},{title:'Fill the second shell',body:'For the first twenty elements, place up to 8 electrons in the second shell.'},{title:'Fill the third shell for this level',body:'For the first twenty elements, the simple shell arrangement uses up to 8 electrons in the third shell before the fourth shell begins.'},{title:'Check the total',body:'Add all shell numbers. The sum must equal the atom’s electron count.'}]}/><Note tone="amber">This is the introductory shell arrangement used for the first twenty elements. A shell can have a greater theoretical capacity; the simplified 2,8,8,2 sequence is not a universal rule for all elements.</Note><FormulaPanel title="Worked example · calcium" formula={<>Atomic number = 20 → <b>2,8,8,2</b></>} steps={[{label:'Start with 20 electrons',body:'A neutral calcium atom has 20 protons, so it also has 20 electrons.'},{label:'Fill the first shell',body:'Place 2 electrons. 20 − 2 = 18 remain.'},{label:'Fill the second shell',body:'Place 8 electrons. 18 − 8 = 10 remain.'},{label:'Fill the third shell',body:'Place 8 electrons. 10 − 8 = 2 remain.'},{label:'Place the remaining electrons',body:'Put the final 2 in the fourth shell. Check: 2 + 8 + 8 + 2 = 20.'}]}/></> },
      { id: 'first-twenty-arrangements', label: 'First twenty arrangements', kicker: 'Use the reference table', title: 'Learn the first twenty shell arrangements', content: <><ElectronArrangementTable/><p>Notice the patterns. Lithium is 2,1 and sodium is 2,8,1; both have one electron in the outer shell. Beryllium and magnesium both have two outer electrons. Neon and argon have full outer shells in this model.</p></> },
      { id: 'period-group-links', label: 'Link to the periodic table', kicker: 'Read the pattern', title: 'Use the arrangement to check group and period', content: <><ShellComparisonDiagram/><Table headers={['Feature','Sodium','Chlorine']} rows={[[<b>Atomic number</b>,'11','17'],[<b>Shell arrangement</b>,'2,8,1','2,8,7'],[<b>Occupied shells</b>,'3','3'],[<b>Outer electrons</b>,'1','7'],[<b>Period</b>,'3','3'],[<b>Group</b>,'1','17']]}/><p>Sodium and chlorine are in the same period because both have three occupied shells. They are in different groups because their outer-shell electron counts differ.</p></> },
      { id: 'ions-configurations', label: 'Electron arrangements of ions', kicker: 'Gain or lose electrons', title: 'Ions form by changing electron number', content: <><p>When an atom forms a simple ion, its proton number does not change. It gains or loses electrons. A positive ion forms when electrons are lost; a negative ion forms when electrons are gained.</p><FormulaPanel title="Worked example · sodium ion" formula={<>Na: 2,8,1 → Na⁺: <b>2,8</b></>} steps={[{label:'Start with neutral sodium',body:'Sodium has 11 electrons: 2,8,1.'},{label:'Remove one electron',body:'Na⁺ has lost one electron, so 11 − 1 = 10 electrons remain.'},{label:'Rearrange the remaining electrons',body:'The arrangement is 2,8. The nucleus still contains 11 protons, so the ion has a +1 charge.'}]}/><p>For chlorine, 2,8,7 becomes 2,8,8 when it gains one electron. The ion has 17 protons and 18 electrons, so its charge is −1.</p><Note>When you write an ion arrangement, do not change its atomic number. Only the electron count changes during ordinary ion formation.</Note></> },
    ],
    recap: ['Electronic configuration shows how electrons are arranged in shells.','For neutral atoms, electron number equals atomic number.','For the first twenty elements, use the shell pattern 2,8,8,2 as required.','Period tells you the number of occupied shells in this model.','Ions form by gaining or losing electrons; proton number stays unchanged.'],
    quizPath: '/lessons/electron-configuration/quiz', quizDescription: 'Calculate electron totals, shell arrangements, group and period links, and simple ion configurations.', sidebarTip: 'Write the total electron number first. Fill shells in order, then add the shell numbers to check your result.', sources: periodicSources,
    quiz: { description: 'Twelve application questions on shell arrangements and ions.', sidebarTip: 'For ions, calculate the changed electron total before arranging the shells.', artLabel: 'Electron shells', artCaption: 'Count first, then distribute electrons.' },
    nextLesson: { title: 'Ionic and covalent bonding', path: '/lessons/ionic-and-covalent-bonding' },
  },
  {
    id: 'ionic-and-covalent-bonding', lessonNumber: '03', title: 'Ionic and covalent bonding', titleLead: 'Ionic and', titleAccent: 'covalent bonding', summary: 'Compare how atoms transfer or share electrons, and connect each bonding model to the structure and properties of substances.', duration: '24–28 min',
    learningObjectives: ['Define chemical bonding and valence electrons.','Explain ionic bonding through electron transfer and electrostatic attraction.','Explain covalent bonding through shared electron pairs.','Compare the structures and properties of ionic and simple molecular substances.','Interpret simple formulae and formation equations.'],
    sections: [
      { id: 'why-bonds-form', label: 'Why atoms bond', kicker: 'Outer-shell electrons', title: 'Chemical bonds hold particles together', content: <><p>A <b>chemical bond</b> is an attractive force that holds atoms or ions together. The electrons in the outermost occupied shell are called <b>valence electrons</b>. They are especially important in bonding.</p><p>Atoms can become more stable by transferring or sharing electrons. The two main bonding types in this lesson are ionic and covalent bonding.</p><Note>Atoms do not make a conscious choice to bond. Bonding is explained by the changes in energy and electrostatic attractions that make the bonded arrangement more stable.</Note></> },
      { id: 'ionic-bonding', label: 'Ionic bonding', kicker: 'Transfer then attract', title: 'Ionic bonding forms oppositely charged ions', content: <><p><b>Ionic bonding</b> occurs when electrons are transferred from one atom to another, producing positive and negative ions. The ions attract one another because opposite electrical charges attract.</p><IonicTransferDiagram/><Steps items={[{title:'Sodium loses an electron',body:'A sodium atom has arrangement 2,8,1. It loses its one outer electron to form Na⁺ with arrangement 2,8.'},{title:'Chlorine gains an electron',body:'A chlorine atom has arrangement 2,8,7. It gains one electron to form Cl⁻ with arrangement 2,8,8.'},{title:'Opposite charges attract',body:'Na⁺ and Cl⁻ attract electrostatically. In solid sodium chloride, many ions form a repeating three-dimensional ionic lattice.'}]}/><p>The simplest ratio of Na⁺ to Cl⁻ is 1:1, so the formula unit is NaCl. Magnesium oxide also has a 1:1 ion ratio: Mg²⁺ and O²⁻ balance to give MgO.</p><FormulaPanel title="Formation equation · sodium chloride" formula={<>2Na + Cl₂ → 2NaCl</>} steps={[{label:'Read the reactants',body:'Na represents sodium atoms. Cl₂ represents chlorine molecules, each containing two chlorine atoms.'},{label:'Read the products',body:'NaCl represents one formula unit ratio of sodium ions to chloride ions. The coefficient 2 means two formula units are formed.'},{label:'Check atom counts',body:'There are 2 Na atoms and 2 Cl atoms on both sides. Atoms are conserved.'}]}/><Note tone="amber">Solid NaCl is not made of separate NaCl molecules. It forms a giant ionic lattice; NaCl is the simplest whole-number ratio of its ions.</Note></> },
      { id: 'ionic-properties', label: 'Ionic properties', kicker: 'Connect structure to behaviour', title: 'Why ionic substances behave as they do', content: <><Table headers={['Property','Explanation']} rows={[[<b>High melting point (often)</b>,'Strong electrostatic attractions throughout the lattice require substantial energy to overcome.'],[<b>Brittle</b>,'When layers shift, like charges can become adjacent and repel, causing the crystal to fracture.'],[<b>Conducts when molten or dissolved</b>,'Ions can move and carry charge.'],[<b>Does not conduct as a solid</b>,'The ions are held in fixed positions and cannot move through the solid.']]}/><Note>Solubility varies between ionic compounds. Do not state that every ionic compound dissolves easily in water.</Note></> },
      { id: 'covalent-bonding', label: 'Covalent bonding', kicker: 'Share electron pairs', title: 'Covalent bonds form when atoms share electrons', content: <><p><b>Covalent bonding</b> occurs when two atoms share one or more pairs of electrons. It is common between nonmetal atoms. A shared pair is one covalent bond; two shared pairs form a double bond; three form a triple bond.</p><CovalentDiagram/><Table headers={['Molecule','Shared pairs','Bond description']} rows={[[<b>H₂</b>,'1','One single H—H bond'],[<b>O₂</b>,'2','One double O=O bond'],[<b>N₂</b>,'3','One triple N≡N bond'],[<b>H₂O</b>,'2 in total','Two single O—H bonds']]}/><p>In water, oxygen shares one pair with each hydrogen. It also has two lone pairs, which are pairs of valence electrons not used in bonding.</p></> },
      { id: 'covalent-properties', label: 'Covalent properties', kicker: 'Do not overgeneralise', title: 'Simple molecules and giant covalent structures differ', content: <><p>Many simple molecular substances have relatively low melting and boiling points because the attractions between their molecules are weaker than the covalent bonds inside each molecule. When a simple molecular substance melts or boils, it is usually the intermolecular attractions that are overcome, not the covalent bonds inside the molecules.</p><p>However, not every covalent substance is a small molecule. Diamond and silicon dioxide form giant covalent networks and have very high melting points. This is why a statement such as “all covalent substances have low melting points” is incorrect.</p><Table headers={['Structure','Examples','Key idea']} rows={[[<b>Simple molecular</b>,'Water, carbon dioxide, methane','Strong covalent bonds inside molecules; weaker attractions between molecules.'],[<b>Giant covalent network</b>,'Diamond, silicon dioxide','A continuous network of covalent bonds extends through the structure.']]}/><Note tone="mint">When comparing ionic and covalent substances, identify the type of structure first. The word “covalent” alone does not tell you every physical property.</Note><p>Use Unit 5 for the full rules of writing and naming formulae. Here the focus is what the bonds and structures mean.</p></> },
    ],
    recap: ['Ionic bonding involves electron transfer and attraction between oppositely charged ions.','Covalent bonding involves shared pairs of electrons.','Solid ionic compounds form lattices, not separate molecules.','Ionic substances conduct when molten or in solution because ions can move.','Many simple molecular substances have low melting points, but giant covalent networks are very different.'],
    quizPath: '/lessons/ionic-and-covalent-bonding/quiz', quizDescription: 'Apply electron-transfer and electron-sharing models, interpret equations and compare structures and properties.', sidebarTip: 'Ask whether electrons are transferred or shared, then identify the particles present in the final structure.', sources: bondSources,
    quiz: { description: 'Twelve questions on ion formation, covalent sharing and structure-property reasoning.', sidebarTip: 'Track electrons and charges carefully. Distinguish a formula unit from a molecule.', artLabel: 'Chemical bonds', artCaption: 'Transfer or share outer electrons.' },
    nextLesson: { title: 'Coordinate covalent and metallic bonding', path: '/lessons/coordinate-and-metallic-bonding' },
  },
  {
    id: 'coordinate-and-metallic-bonding', lessonNumber: '04', title: 'Coordinate covalent and metallic bonding', titleLead: 'Coordinate covalent and', titleAccent: 'metallic bonding', summary: 'Study a shared pair donated by one atom and the attraction between metal ion cores and delocalised electrons.', duration: '20–24 min',
    learningObjectives: ['Define a coordinate covalent bond.','Explain ammonium-ion formation using a donated lone pair.','Describe the metallic bonding model.','Relate delocalised electrons and metal-ion layers to electrical conductivity, malleability and ductility.'],
    sections: [
      { id: 'coordinate-bond', label: 'Coordinate covalent bond', kicker: 'A shared pair with one donor', title: 'Both bonding electrons come from one atom', content: <><p>A <b>coordinate covalent bond</b> (also called a dative covalent bond) is a covalent bond in which both electrons in the shared pair are donated by the same atom. The donor must have a <b>lone pair</b>, a pair of outer electrons not already used in a bond. The acceptor must be able to accept that pair.</p><p>The bond is still covalent because the pair is shared between the bonded atoms after the bond forms. The special feature is the source of the pair at the moment of formation.</p></> },
      { id: 'ammonium-example', label: 'Ammonium example', kicker: 'Follow the electron pair', title: 'Ammonia can donate a lone pair to H⁺', content: <><CoordinateBondDiagram/><Steps items={[{title:'Identify the donor',body:'Nitrogen in NH₃ has a lone pair of electrons that is not used in the three N—H bonds.'},{title:'Identify the acceptor',body:'H⁺ is a hydrogen ion with no electron. It can accept a pair to form a bond.'},{title:'Show the donation',body:'The lone pair on nitrogen is donated to H⁺. A curved arrow or straight reaction arrow is drawn from the donor pair towards the acceptor.'},{title:'Write the product',body:'The ammonium ion NH₄⁺ forms. The overall equation is NH₃ + H⁺ → NH₄⁺.'}]}/><Note tone="amber">The arrow shows where the shared pair came from during formation. Once NH₄⁺ has formed, all four N—H bonds are equivalent; one is not permanently a different kind of bond.</Note></> },
      { id: 'other-coordinate-example', label: 'Another example', kicker: 'Apply the same idea', title: 'Water can also donate a lone pair', content: <><p>An oxygen atom in a water molecule has two lone pairs. One can be donated to H⁺ to form the hydronium ion, H₃O⁺.</p><FormulaPanel title="Formation of hydronium" formula={<>H₂O + H⁺ → H₃O⁺</>} steps={[{label:'Water is the donor',body:'Oxygen in H₂O has lone pairs available for donation.'},{label:'Hydrogen ion is the acceptor',body:'H⁺ accepts the electron pair.'},{label:'Check the charge',body:'Neutral H₂O plus a +1 ion gives a product with an overall +1 charge.'}]}/><p>The same donor–acceptor description is used for other coordinate bonds, but examples should always be checked to identify the actual lone-pair donor and electron-pair acceptor.</p></> },
      { id: 'metallic-bonding', label: 'Metallic bonding', kicker: 'A metal is a giant structure', title: 'Metal atoms form a lattice with mobile electrons', content: <><p>In the introductory metallic bonding model, outer electrons become <b>delocalised</b>. This means they are not attached to one particular atom and can move throughout the metal. The remaining positive metal ion cores are arranged in a regular, closely packed lattice.</p><MetallicLatticeDiagram/><p><b>Metallic bonding</b> is the electrostatic attraction between the positive metal ion cores and the delocalised electrons. This attraction extends throughout the structure.</p></> },
      { id: 'metal-properties', label: 'Metallic properties', kicker: 'Explain the evidence', title: 'The model explains important metal properties', content: <><Table headers={['Property','Particle-level explanation']} rows={[[<b>Electrical conductivity</b>,'Delocalised electrons can move through the metal and carry charge.'],[<b>Thermal conductivity</b>,'Mobile electrons help transfer energy through the structure.'],[<b>Malleability</b>,'Layers of metal ions can slide while the attraction to delocalised electrons continues to hold the structure together.'],[<b>Ductility</b>,'The structure can be drawn into wires without the metallic bonding simply disappearing.'],[<b>Often high melting points</b>,'A substantial amount of energy is needed to overcome metallic bonding, although metal melting points vary.']]}/><Note>Mercury is liquid at ordinary room temperature, so avoid saying that every metal is solid or has a high melting point.</Note><p>Compare the three bonding models: ionic bonding involves attractions between positive and negative ions; covalent bonding involves shared electron pairs; metallic bonding involves positive metal ion cores and delocalised electrons.</p></> },
    ],
    recap: ['A coordinate covalent bond is a shared pair donated by one atom.','NH₃ can donate a lone pair to H⁺ to form NH₄⁺.','H₂O can donate a lone pair to H⁺ to form H₃O⁺.','Metallic bonding is attraction between positive metal ion cores and delocalised electrons.','Mobile electrons explain electrical conductivity; sliding layers help explain malleability and ductility.'],
    quizPath: '/lessons/coordinate-and-metallic-bonding/quiz', quizDescription: 'Interpret donor–acceptor diagrams, ion equations and metallic structure-property relationships.', sidebarTip: 'For a coordinate bond, locate the atom that supplies both electrons. For a metal, identify the positive ion cores and mobile electrons.', sources: [...bondSources, ...metallicSources],
    quiz: { description: 'Twelve questions on coordinate-bond formation and metallic properties.', sidebarTip: 'Track the origin of the donated pair and the movement of delocalised electrons.', artLabel: 'Electron-pair donation', artCaption: 'Find the donor and the acceptor.' },
    nextLesson: { title: 'Intermolecular forces', path: '/lessons/intermolecular-forces' },
  },
  {
    id: 'intermolecular-forces', lessonNumber: '05', title: 'Intermolecular forces', titleLead: 'Intermolecular', titleAccent: 'forces', summary: 'Compare attractions between separate molecules and see how they influence boiling point, melting point and other physical properties.', duration: '22–26 min',
    learningObjectives: ['Distinguish intramolecular bonds from intermolecular attractions.','Describe London dispersion and dipole–dipole attractions.','Explain hydrogen bonding and identify suitable molecules.','Relate intermolecular attractions to physical properties without confusing them with covalent bonds.'],
    sections: [
      { id: 'inside-between', label: 'Inside or between?', kicker: 'Two different scales', title: 'Do not confuse bonds inside molecules with forces between them', content: <><p><b>Intramolecular</b> means within a molecule. A covalent O—H bond holds oxygen and hydrogen together inside one water molecule. <b>Intermolecular</b> means between separate molecules. An attraction between the hydrogen end of one water molecule and the oxygen end of another is intermolecular.</p><Note tone="mint">When water boils, the molecules separate from one another. The O—H covalent bonds inside each water molecule do not normally break during boiling.</Note></> },
      { id: 'dispersion', label: 'London dispersion', kicker: 'Present in all atoms and molecules', title: 'Temporary dipoles create dispersion attractions', content: <><p>Electrons are constantly moving. At a particular instant, the electron distribution in an atom or molecule may be uneven. This produces a temporary dipole: one region is slightly negative (δ−) and another is slightly positive (δ+). It can induce a dipole in a neighbouring particle. The resulting attraction is called a <b>London dispersion force</b>.</p><p>Dispersion forces occur between all atoms and molecules, including nonpolar particles such as noble-gas atoms and oxygen molecules. In general, larger particles with more electrons are more polarizable and can have stronger dispersion attractions.</p><Note>Dispersion forces are individually weak, but many such attractions acting together can noticeably affect boiling points and melting points.</Note></> },
      { id: 'dipole-dipole', label: 'Dipole–dipole attractions', kicker: 'Permanent molecular polarity', title: 'Polar molecules attract opposite partial charges', content: <><p>A <b>polar molecule</b> has an uneven distribution of electrical charge, giving it a partially positive end (δ+) and a partially negative end (δ−). In a dipole–dipole attraction, the δ+ end of one polar molecule is attracted to the δ− end of another.</p><p>Hydrogen chloride (HCl) is polar and can show dipole–dipole attractions. The molecules also experience London dispersion forces, because dispersion occurs in all molecules.</p></> },
      { id: 'hydrogen-bonding', label: 'Hydrogen bonding', kicker: 'A particularly strong attraction', title: 'Hydrogen bonding needs H bonded to N, O or F', content: <><p><b>Hydrogen bonding</b> is a particularly strong type of intermolecular attraction. It occurs when hydrogen is covalently bonded to a very electronegative atom—nitrogen, oxygen or fluorine—and is attracted to a lone pair on N, O or F in a neighbouring molecule.</p><IntermolecularDiagram/><p>Water molecules can form hydrogen bonds because each contains O—H bonds and oxygen has lone pairs. Ammonia (NH₃) and hydrogen fluoride (HF) can also form hydrogen bonds. Hydrogen chloride (HCl) is polar, but it is not normally used as a classic hydrogen-bonding example at this level.</p><Note tone="amber">The dashed hydrogen bond is between molecules. It is not the same as the solid covalent O—H bond inside one water molecule.</Note></> },
      { id: 'properties-and-van-der-waals', label: 'Effects and terminology', kicker: 'Explain physical properties', title: 'Intermolecular attractions affect physical behaviour', content: <><Table headers={['Attraction','Main idea','Example']} rows={[[<b>London dispersion</b>,'Temporary and induced dipoles; present in all particles.','Noble gases, I₂ and nonpolar molecules'],[<b>Dipole–dipole</b>,'Attraction between permanent partial charges in polar molecules.','HCl molecules'],[<b>Hydrogen bonding</b>,'Strong dipole attraction involving H bonded to N, O or F and a lone pair nearby.','Water, ammonia, hydrogen fluoride']]}/><p>Stronger attractions between molecules generally require more energy to separate. This often raises boiling points and can influence viscosity and surface tension. Molecular size and shape also matter, so do not rank substances using one factor alone.</p><p>Some textbooks use <b>van der Waals forces</b> as a broad term for intermolecular attractions; others use it more narrowly for dispersion and dipole-related forces. In this unit, the specific types are named separately to avoid confusion.</p></> },
    ],
    recap: ['Intramolecular bonds hold atoms together inside a molecule; intermolecular forces act between molecules.','London dispersion forces occur in all atoms and molecules.','Dipole–dipole attractions occur between polar molecules.','Hydrogen bonding is a special strong attraction involving H bonded to N, O or F.','Intermolecular attractions influence boiling point and other physical properties.'],
    quizPath: '/lessons/intermolecular-forces/quiz', quizDescription: 'Classify attractions, interpret molecular polarity and reason about boiling-point trends.', sidebarTip: 'First ask whether the attraction is inside one molecule or between two molecules. Then identify temporary or permanent partial charges.', sources: forceSources,
    quiz: { description: 'Twelve application questions on intermolecular attractions and properties.', sidebarTip: 'Hydrogen bonding requires H directly bonded to N, O or F; polarity alone is not enough.', artLabel: 'Molecular attractions', artCaption: 'Distinguish bonds within from forces between.' },
    nextLesson: { title: 'States of matter and kinetic theory', path: '/lessons/states-and-kinetic-theory' },
  },
  {
    id: 'states-and-kinetic-theory', lessonNumber: '06', title: 'States of matter and kinetic theory', titleLead: 'States of matter and', titleAccent: 'kinetic theory', summary: 'Use particle arrangement, movement and energy to explain solids, liquids, gases and changes of state.', duration: '22–26 min',
    learningObjectives: ['Describe particle arrangement and movement in solids, liquids and gases.','Use kinetic theory to explain pressure, diffusion and compressibility.','Name and explain changes of state.','Interpret a simple heating curve and explain why temperature can remain constant during a phase change.'],
    sections: [
      { id: 'kinetic-theory', label: 'Kinetic theory', kicker: 'Matter is made of moving particles', title: 'The kinetic model explains what we observe', content: <><p><b>Kinetic theory</b> explains the behaviour of matter by considering particles and their motion. Matter is made of tiny particles—atoms, molecules or ions. These particles are in continuous motion, and their average kinetic energy increases as temperature increases.</p><p><b>Kinetic energy</b> is energy of motion. In a solid, particles mainly vibrate around fixed positions. In a liquid and a gas, particles can move from place to place.</p><Note>Temperature is related to the average kinetic energy of particles. A higher temperature means greater average kinetic energy, not that every particle moves at exactly the same speed.</Note></> },
      { id: 'three-states', label: 'Three states', kicker: 'Compare the particle model', title: 'Solids, liquids and gases have different particle arrangements', content: <><StateParticlesDiagram/><Table headers={['Property','Solid','Liquid','Gas']} rows={[[<b>Shape</b>,'Fixed shape','Takes container shape','Fills container'],[<b>Volume</b>,'Fixed','Usually fixed','No fixed volume'],[<b>Particle spacing</b>,'Very close, regular','Close, irregular','Far apart'],[<b>Movement</b>,'Vibrate in place','Slide past one another','Rapid, random motion'],[<b>Compressibility</b>,'Very low','Low','High']]}/><p>Solids and liquids are difficult to compress because their particles are already close together. A gas can be compressed because there is much more empty space between its particles.</p></> },
      { id: 'pressure-diffusion', label: 'Pressure and diffusion', kicker: 'Use particle motion', title: 'Collisions and random movement explain gas behaviour', content: <><p>Gas particles move randomly and collide with the walls of their container. Each collision changes the particles’ momentum and exerts a tiny force on the wall. The combined effect of many collisions produces gas pressure.</p><p><b>Diffusion</b> is the net movement of particles from a region of higher concentration to a region of lower concentration because of random particle motion. Diffusion occurs in gases and liquids, but it is generally faster in gases because gas particles move rapidly and are farther apart.</p><p>When a gas is heated at constant volume, its particles have greater average kinetic energy and collide with the container walls more forcefully and frequently. This can increase the pressure. Detailed numerical gas-law calculations are covered in Unit 7.</p></> },
      { id: 'changes-of-state', label: 'Changes of state', kicker: 'Add or remove energy', title: 'A change of state changes arrangement and motion', content: <><Table headers={['Change','Direction','What happens']} rows={[[<b>Melting</b>,'Solid → liquid','Particles leave fixed positions and can move past one another.'],[<b>Freezing</b>,'Liquid → solid','Particles become arranged in fixed positions and vibrate.'],[<b>Vaporisation</b>,'Liquid → gas','Particles separate to form a gas.'],[<b>Condensation</b>,'Gas → liquid','Particles come closer together to form a liquid.'],[<b>Sublimation</b>,'Solid → gas','A solid changes directly to gas.'],[<b>Deposition</b>,'Gas → solid','A gas changes directly to solid.']]}/><FormulaPanel title="State-symbol example · ice melting" formula={<>H₂O(s) → H₂O(l)</>} steps={[{label:'Read H₂O',body:'The formula identifies water. The same formula is used in each state because the chemical substance remains water.'},{label:'Read (s)',body:'The state symbol s means solid. The starting water is ice.'},{label:'Read the arrow',body:'The arrow means changes into or forms.'},{label:'Read (l)',body:'The state symbol l means liquid. The product is liquid water.'}]}/><p>Melting and freezing are physical changes. The water molecules remain H₂O; their arrangement and motion change.</p></> },
      { id: 'heating-curve', label: 'Heating curve', kicker: 'Read a temperature graph', title: 'Temperature can pause during a phase change', content: <><HeatingCurveDiagram/><p>On a heating curve, a rising section means the substance’s temperature is increasing. A flat section means a change of state is taking place at a constant temperature for a pure substance at a fixed pressure.</p><p>During melting, energy is used to weaken or overcome attractions that hold particles in their solid arrangement. During boiling, energy helps separate liquid particles into gas. Because the energy is changing the arrangement rather than increasing average kinetic energy, the temperature stays constant during the phase-change section.</p><Note tone="amber">Do not say that particles stop moving during melting or boiling. They remain in motion; the energy is used to change the state.</Note></> },
    ],
    recap: ['Kinetic theory explains matter using particles, their motion and their attractions.','Solid particles vibrate around fixed positions; liquid particles slide past each other; gas particles move rapidly and randomly.','Gas pressure comes from collisions with container walls.','Diffusion is net movement from higher to lower concentration.','During a phase change, temperature remains constant while energy changes particle arrangement.'],
    quizPath: '/lessons/states-and-kinetic-theory/quiz', quizDescription: 'Interpret particle diagrams, explain pressure and diffusion, identify state changes and reason about a heating curve.', sidebarTip: 'For every change of state, identify the starting state, final state and how particle spacing and motion change.', sources: stateSources,
    quiz: { description: 'Twelve reasoning questions on particle motion, states, diffusion and heating curves.', sidebarTip: 'During a flat section of a heating curve, energy changes particle arrangement rather than raising temperature.', artLabel: 'Particle model', artCaption: 'Arrangement and movement explain state.' },
  },
];

export const getChemicalCombinationLesson = (id: string): ChemicalCombinationLesson | undefined => chemicalCombinationLessons.find((lesson) => lesson.id === id);
