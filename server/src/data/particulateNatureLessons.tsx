import type { ReactNode } from 'react';
import type { LessonSection } from '../components/CurriculumLessonLayout';

export type ParticulateNatureLesson = {
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
  return <aside className={`u4-note u4-note--${tone}`}>{children}</aside>;
}

function DataTable({ headers, rows }: { headers: string[]; rows: ReactNode[][] }) {
  return <div className="u4-table-wrap"><table className="u4-table"><thead><tr>{headers.map((header) => <th key={header}>{header}</th>)}</tr></thead><tbody>{rows.map((row, index) => <tr key={index}>{row.map((cell, cellIndex) => <td key={`${index}-${cellIndex}`}>{cell}</td>)}</tr>)}</tbody></table></div>;
}

function Steps({ items }: { items: { title: string; detail: ReactNode }[] }) {
  return <div className="u4-steps">{items.map((item, index) => <article key={item.title}><span>{String(index + 1).padStart(2, '0')}</span><div><h3>{item.title}</h3><p>{item.detail}</p></div></article>)}</div>;
}

function ConceptGrid({ items }: { items: { title: string; detail: ReactNode; example: ReactNode; tone?: Tone }[] }) {
  return <div className="u4-concept-grid">{items.map((item) => <article className={`u4-concept-card u4-concept-card--${item.tone ?? 'mint'}`} key={item.title}><h3>{item.title}</h3><p>{item.detail}</p><div>{item.example}</div></article>)}</div>;
}

function FormulaPanel({ title, formula, steps }: { title: string; formula: ReactNode; steps: { label: string; detail: ReactNode }[] }) {
  return <div className="u4-formula-panel"><span className="u4-kicker">{title}</span><div className="u4-formula-panel__formula">{formula}</div><ol>{steps.map((step, index) => <li key={step.label}><b>{index + 1}. {step.label}</b><span>{step.detail}</span></li>)}</ol></div>;
}

function ParticleChangeDiagram() {
  const water = (x: number, y: number, rotate = 0) => <g transform={`translate(${x} ${y}) rotate(${rotate})`}><circle cx="0" cy="0" r="12" fill="#d95c58" stroke="#7d3836" strokeWidth="1.5"/><circle cx="-13" cy="-11" r="7" fill="#f8fbff" stroke="#64748b" strokeWidth="1.5"/><circle cx="13" cy="-11" r="7" fill="#f8fbff" stroke="#64748b" strokeWidth="1.5"/><path d="M-8 -7 L-3 -3 M8 -7 L3 -3" stroke="#64748b" strokeWidth="2"/></g>;
  const hydrogen = (x: number, y: number) => <g><circle cx={x} cy={y} r="9" fill="#f8fbff" stroke="#64748b" strokeWidth="1.7"/><circle cx={x + 22} cy={y} r="9" fill="#f8fbff" stroke="#64748b" strokeWidth="1.7"/><path d={`M${x + 9} ${y} H${x + 13}`} stroke="#475569" strokeWidth="3" strokeLinecap="round"/></g>;
  const oxygen = (x: number, y: number) => <g><circle cx={x} cy={y} r="12" fill="#d95c58" stroke="#7d3836" strokeWidth="1.7"/><circle cx={x + 27} cy={y} r="12" fill="#d95c58" stroke="#7d3836" strokeWidth="1.7"/><path d={`M${x + 12} ${y - 4} H${x + 15} M${x + 12} ${y + 4} H${x + 15}`} stroke="#7d3836" strokeWidth="2" strokeLinecap="round"/></g>;
  return <div className="u4-diagram-card"><svg viewBox="0 0 760 390" role="img" aria-labelledby="u4-change-title u4-change-desc"><title id="u4-change-title">Particle view of physical and chemical changes</title><desc id="u4-change-desc">The physical change panel shows water molecules remaining H2O while their arrangement changes from an ordered solid to a less ordered liquid. The chemical change panel shows two hydrogen molecules reacting with one oxygen molecule to produce two water molecules.</desc>
    <rect x="10" y="12" width="355" height="366" rx="18" fill="#eef7fb" stroke="#c6dce7"/><rect x="395" y="12" width="355" height="366" rx="18" fill="#fff7ed" stroke="#f1d8b6"/>
    <text x="30" y="42" fontSize="17" fontWeight="700" fill="#25465d">PHYSICAL CHANGE</text><text x="415" y="42" fontSize="17" fontWeight="700" fill="#854d0e">CHEMICAL CHANGE</text>
    <text x="32" y="70" fontSize="13" fill="#496579">Ice: ordered arrangement</text>
    {[[75,112],[145,112],[215,112],[285,112],[75,172],[145,172],[215,172],[285,172]].map(([x,y],i)=><g key={`ice-${i}`}>{water(x,y,(i%2)*12)}</g>)}
    <path d="M40 218 H330" stroke="#9bb7c6" strokeWidth="1.5" strokeDasharray="5 5"/><path d="M160 228 v26 m-7 -7 l7 7 7 -7" fill="none" stroke="#3b728c" strokeWidth="2.5"/><text x="181" y="247" fontSize="12" fill="#496579">melting</text>
    <text x="32" y="273" fontSize="13" fill="#496579">Liquid: molecules less ordered</text>
    {[[80,318],[145,300],[225,328],[290,305]].map(([x,y],i)=><g key={`liquid-${i}`}>{water(x,y,(i%2)*32)}</g>)}
    <text x="30" y="365" fontSize="11" fill="#496579">The molecules remain H₂O; spacing and motion change.</text>

    <text x="415" y="70" fontSize="13" fill="#8a5a1b">Reactants</text>
    {hydrogen(427,112)}{hydrogen(490,112)}{oxygen(570,112)}
    <text x="438" y="145" fontSize="11" fill="#854d0e">H₂</text><text x="501" y="145" fontSize="11" fill="#854d0e">H₂</text><text x="576" y="145" fontSize="11" fill="#854d0e">O₂</text>
    <path d="M438 177 H691 m-10 -8 10 8 -10 8" fill="none" stroke="#a16207" strokeWidth="2.5"/><text x="563" y="168" textAnchor="middle" fontSize="11" fill="#854d0e">reaction</text>
    <text x="415" y="220" fontSize="13" fill="#8a5a1b">Products: 2 water molecules</text>
    {water(500,286)}{water(640,286)}
    <text x="500" y="327" textAnchor="middle" fontSize="12" fill="#854d0e">H₂O</text><text x="640" y="327" textAnchor="middle" fontSize="12" fill="#854d0e">H₂O</text>
    <rect x="422" y="340" width="300" height="25" rx="7" fill="#fff1d9" stroke="#efd29b"/><text x="572" y="357" textAnchor="middle" fontSize="12" fontWeight="700" fill="#854d0e">2H₂ + O₂ → 2H₂O</text>
  </svg><p className="u4-diagram-caption">Schematic particle diagrams, not to scale. In the physical change, water molecules stay H₂O. In the chemical reaction, hydrogen and oxygen atoms are rearranged into water molecules; the balanced equation shows the atom ratio.</p></div>;
}

function AtomicModelsTimeline() {
  return <div className="u4-timeline-diagram" role="group" aria-label="Timeline of historical atomic models">
    <article><div className="u4-model-art u4-model-art--dalton"><span /></div><b>Dalton</b><small>Solid sphere</small><p>Atoms were treated as tiny, indivisible solid particles.</p></article>
    <article><div className="u4-model-art u4-model-art--thomson"><span /><i /><i /><i /><i /></div><b>Thomson</b><small>Plum-pudding model</small><p>Electrons embedded in a diffuse positive sphere.</p></article>
    <article><div className="u4-model-art u4-model-art--rutherford"><span /><i /><i /><i /></div><b>Rutherford</b><small>Nuclear model</small><p>A tiny positive nucleus; most of the atom is empty space.</p></article>
    <article><div className="u4-model-art u4-model-art--bohr"><span /><i /><i /><i /></div><b>Bohr</b><small>Shell model</small><p>Electrons occupy particular energy levels around the nucleus.</p></article>
    <article><div className="u4-model-art u4-model-art--chadwick"><span /><i /><i /><i /></div><b>Chadwick</b><small>Neutron added</small><p>The nucleus contains neutral neutrons as well as protons.</p></article>
  </div>;
}

function RutherfordExperimentDiagram() {
  return <div className="u4-diagram-card"><svg viewBox="0 0 760 350" role="img" aria-labelledby="u4-rutherford-title u4-rutherford-desc"><title id="u4-rutherford-title">Rutherford gold foil experiment</title><desc id="u4-rutherford-desc">A source emits alpha particles towards thin gold foil. Most pass straight through, some are deflected, and a very small number scatter backward.</desc>
    <rect x="26" y="122" width="112" height="102" rx="12" fill="#eef2ff" stroke="#7185a4" strokeWidth="2"/><circle cx="80" cy="173" r="26" fill="#fbbf24" stroke="#a16207" strokeWidth="2"/><text x="80" y="178" textAnchor="middle" fontSize="12" fontWeight="700" fill="#713f12">α source</text>
    <path d="M138 172 H300" stroke="#d97706" strokeWidth="4" strokeDasharray="8 6"/><path d="M290 164 l12 8 -12 8" fill="none" stroke="#d97706" strokeWidth="3"/>
    <rect x="304" y="88" width="12" height="170" fill="#facc15" stroke="#a16207" strokeWidth="2"/><text x="310" y="70" textAnchor="middle" fontSize="13" fill="#854d0e">Thin gold foil</text>
    <path d="M316 172 H690" stroke="#16a34a" strokeWidth="3" strokeDasharray="8 6"/><path d="M680 164 l12 8 -12 8" fill="none" stroke="#16a34a" strokeWidth="3"/><text x="515" y="153" fontSize="13" fill="#166534">Most pass straight through</text>
    <path d="M316 166 Q440 125 650 104" stroke="#2563eb" strokeWidth="3" strokeDasharray="7 5" fill="none"/><path d="M640 97 l12 7 -10 8" fill="none" stroke="#2563eb" strokeWidth="2"/><text x="445" y="91" fontSize="13" fill="#1d4ed8">Some are deflected</text>
    <path d="M304 174 Q276 214 226 224" stroke="#7c3aed" strokeWidth="3" strokeDasharray="7 5" fill="none"/><path d="M238 214 l-13 10 15 2" fill="none" stroke="#7c3aed" strokeWidth="2"/><text x="27" y="272" fontSize="13" fill="#6d28d9">Very few are scattered back towards the source</text>
    <path d="M330 172 H360" stroke="#334155" strokeWidth="1.5"/><circle cx="310" cy="172" r="4" fill="#a16207"/>
    <rect x="565" y="16" width="165" height="66" rx="10" fill="#f0fdf4" stroke="#a7d6b1"/><text x="580" y="40" fontSize="12" fontWeight="700" fill="#166534">What the pattern means</text><text x="580" y="58" fontSize="11" fill="#315d3b">A tiny, dense, positive nucleus</text>
    <text x="28" y="322" fontSize="12" fill="#526779">α particles are positively charged. Strong repulsion occurs only when they pass very close to the small positive nucleus.</text>
  </svg><p className="u4-diagram-caption">Conceptual diagram, not to scale. The experiment was carried out by Geiger and Marsden under Rutherford's direction.</p></div>;
}

function AtomStructureDiagram({ element = 'Sodium', symbol = 'Na', protons = 11, neutrons = 12, electrons = 11, shellCounts = [2, 8, 1] }: { element?: string; symbol?: string; protons?: number; neutrons?: number; electrons?: number; shellCounts?: number[] }) {
  const electronPositions = shellCounts.flatMap((count, shellIndex) => Array.from({ length: count }, (_, index) => {
    const radius = 52 + shellIndex * 39;
    const angle = (Math.PI * 2 * index / count) - Math.PI / 2 + shellIndex * 0.16;
    return { x: 210 + Math.cos(angle) * radius, y: 175 + Math.sin(angle) * radius, shell: shellIndex };
  }));
  const particles = Array.from({ length: protons + neutrons }, (_, index) => ({ x: 194 + (index % 5) * 8, y: 158 + Math.floor(index / 5) * 8, proton: index < protons }));
  return <div className="u4-diagram-card"><svg viewBox="0 0 660 380" role="img" aria-label={`${element} atom structure showing ${protons} protons, ${neutrons} neutrons and ${electrons} electrons in ${shellCounts.length} shells`}>
    <text x="34" y="38" fontSize="18" fontWeight="700" fill="#24465c">{element} atom: {symbol}</text>
    {shellCounts.map((_, index) => <circle key={index} cx="210" cy="175" r={52 + index * 39} fill="none" stroke={['#83b9c5','#8fa4d5','#b39bd5','#d2a17e'][index] ?? '#94a3b8'} strokeWidth="2.4" strokeDasharray="5 4"/>)}
    <circle cx="210" cy="175" r="35" fill="#e7eff8" stroke="#7186a0" strokeWidth="2"/>
    {particles.map((particle, index) => <circle key={index} cx={particle.x} cy={particle.y} r="4.1" fill={particle.proton ? '#d9534f' : '#3c82b7'} stroke="#173b56" strokeWidth=".8"/>)}
    {electronPositions.slice(0, electrons).map((electron, index) => <g key={index}><circle cx={electron.x} cy={electron.y} r="7" fill="#263e8b" stroke="#fff" strokeWidth="1.4"/><text x={electron.x} y={electron.y + 3.3} textAnchor="middle" fontSize="8" fill="#fff">−</text></g>)}
    {shellCounts.map((count,index)=><text key={index} x={420} y={93+index*37} fontSize="14" fill="#334e68">{['K','L','M','N'][index] ?? `Shell ${index+1}`} shell: <tspan fontWeight="700">{count} e⁻</tspan></text>)}
    <circle cx="426" cy="245" r="7" fill="#d9534f"/><text x="442" y="250" fontSize="13" fill="#334e68">Proton: +1</text>
    <circle cx="426" cy="274" r="7" fill="#3c82b7"/><text x="442" y="279" fontSize="13" fill="#334e68">Neutron: 0</text>
    <circle cx="426" cy="303" r="7" fill="#263e8b"/><text x="442" y="308" fontSize="13" fill="#334e68">Electron: −1</text>
    <text x="34" y="348" fontSize="12" fill="#526779">Nucleus = {protons} protons + {neutrons} neutrons · Total electrons shown = {electrons}</text>
  </svg><p className="u4-diagram-caption">Schematic and not drawn to scale. Electrons are shown on shells for introductory learning; real electrons are described using quantum-mechanical orbitals.</p></div>;
}

function ElectronShellDiagram({ title, symbol, shells }: { title: string; symbol: string; shells: number[] }) {
  const positions = shells.flatMap((count, shellIndex) => Array.from({ length: count }, (_, index) => {
    const radius = 46 + shellIndex * 38;
    const angle = (2 * Math.PI * index / count) - Math.PI / 2 + shellIndex * 0.2;
    return { x: 170 + radius * Math.cos(angle), y: 160 + radius * Math.sin(angle) };
  }));
  return <div className="u4-diagram-card"><svg viewBox="0 0 610 330" role="img" aria-label={`${title} Bohr-style shell diagram for ${symbol}`}>
    <text x="26" y="32" fontSize="18" fontWeight="700" fill="#24465c">{title}: {symbol}</text>
    {shells.map((_, index)=><circle key={index} cx="170" cy="160" r={46+index*38} fill="none" stroke={['#73b5c1','#9d98d0','#d49a70','#7b9ec9'][index]} strokeWidth="2.3" strokeDasharray="5 4"/>)}
    <circle cx="170" cy="160" r="20" fill="#e9edf6" stroke="#7186a0" strokeWidth="2"/><text x="170" y="164" textAnchor="middle" fontSize="11" fontWeight="700" fill="#334e68">{symbol}</text>
    {positions.map((p,index)=><g key={index}><circle cx={p.x} cy={p.y} r="7" fill="#263e8b" stroke="#fff" strokeWidth="1.5"/><text x={p.x} y={p.y+3} textAnchor="middle" fontSize="8" fontWeight="700" fill="#fff">−</text></g>)}
    <text x="390" y="88" fontSize="15" fontWeight="700" fill="#334e68">Electron arrangement</text>
    {shells.map((count,index)=><text key={index} x="390" y={124+index*34} fontSize="14" fill="#334e68">{['K','L','M','N'][index]} shell: <tspan fontWeight="700">{count}</tspan></text>)}
    <text x="390" y="270" fontSize="14" fill="#526779">Total electrons = {shells.reduce((sum,n)=>sum+n,0)}</text>
    <circle cx="396" cy="302" r="6" fill="#263e8b"/><text x="409" y="306" fontSize="11" fill="#526779">Each marked dot is one electron (−).</text>
  </svg><p className="u4-diagram-caption">The circles are shell guides, not physical tracks. Electrons are placed on the shells in the introductory first-20-element model. The drawing represents one atom, not a scale model.</p></div>;
}

function IsotopeComparisonDiagram() {
  const atom = (x: number, label: string, neutronCount: number) => {
    const total = 6 + neutronCount;
    const positions = total <= 12
      ? Array.from({ length: total }, (_, i) => ({ x: x - 18 + (i % 4) * 12, y: 124 - 12 + Math.floor(i / 4) * 12 }))
      : Array.from({ length: total }, (_, i) => ({ x: x - 24 + (i % 5) * 12, y: 124 - 12 + Math.floor(i / 5) * 12 }));
    return <g key={label}>
      <text x={x} y="34" textAnchor="middle" fontSize="16" fontWeight="700" fill="#24465c">{label}</text>
      <circle cx={x} cy="124" r="39" fill="#eef2f8" stroke="#91a1b9" strokeWidth="2"/>
      {positions.map((point, i) => <circle key={`nucleon-${i}`} cx={point.x} cy={point.y} r="5.2" fill={i < 6 ? '#d9534f' : '#3c82b7'} stroke={i < 6 ? '#7f3232' : '#1e4f75'} strokeWidth=".7"/>)}
      <circle cx={x} cy="124" r="67" fill="none" stroke="#88a0be" strokeWidth="2" strokeDasharray="5 4"/>
      {Array.from({ length: 6 }, (_, i) => { const angle = 2 * Math.PI * i / 6 - Math.PI / 2; return <circle key={`electron-${i}`} cx={x + 67 * Math.cos(angle)} cy={124 + 67 * Math.sin(angle)} r="5.5" fill="#263e8b" stroke="#fff" strokeWidth="1"/>; })}
      <text x={x} y="225" textAnchor="middle" fontSize="13" fill="#334e68">6 protons · {neutronCount} neutrons</text>
      <text x={x} y="247" textAnchor="middle" fontSize="12" fill="#526779">6 electrons · neutral atom</text>
    </g>;
  };
  return <div className="u4-diagram-card"><svg viewBox="0 0 650 292" role="img" aria-labelledby="u4-isotope-title u4-isotope-desc">
    <title id="u4-isotope-title">Carbon-12 and carbon-14 isotope comparison</title><desc id="u4-isotope-desc">Both carbon atoms have six protons and six electrons. Carbon-12 has six neutrons; carbon-14 has eight. Protons are red, neutrons blue and electrons dark blue on the shell guide.</desc>
    {atom(170,'Carbon-12 (¹²₆C)',6)}{atom(480,'Carbon-14 (¹⁴₆C)',8)}
    <path d="M325 124 h-34 m10 -8 -10 8 10 8" fill="none" stroke="#64748b" strokeWidth="2"/><text x="325" y="101" textAnchor="middle" fontSize="11" fill="#526779">same element</text>
    <g transform="translate(82 270)"><circle cx="0" cy="0" r="5" fill="#d9534f"/><text x="10" y="4" fontSize="11" fill="#526779">Proton</text><circle cx="90" cy="0" r="5" fill="#3c82b7"/><text x="100" y="4" fontSize="11" fill="#526779">Neutron</text><circle cx="184" cy="0" r="5" fill="#263e8b"/><text x="194" y="4" fontSize="11" fill="#526779">Electron</text></g>
  </svg><p className="u4-diagram-caption">Schematic particle counts, not to scale. Isotopes of the same element have the same number of protons but different numbers of neutrons. The shell guide is not a literal electron path.</p></div>;
}

function RelativeMassDiagram() {
  return <div className="u4-diagram-card"><svg viewBox="0 0 700 290" role="img" aria-label="Weighted average of two chlorine isotopes, with seventy-five percent chlorine-35 and twenty-five percent chlorine-37">
    <text x="30" y="35" fontSize="17" fontWeight="700" fill="#24465c">Illustrative chlorine isotope mixture</text>
    <rect x="80" y="80" width="390" height="44" rx="8" fill="#e4edf7"/><rect x="80" y="80" width="292.5" height="44" rx="8" fill="#6da9b3"/><rect x="372.5" y="80" width="97.5" height="44" rx="8" fill="#e6b66b"/>
    <text x="226" y="108" textAnchor="middle" fontSize="15" fontWeight="700" fill="#123b49">75% chlorine-35</text><text x="421" y="108" textAnchor="middle" fontSize="13" fontWeight="700" fill="#6e4515">25%</text>
    <text x="80" y="150" fontSize="12" fill="#526779">75 atoms out of every 100 (illustrative abundance)</text>
    <text x="30" y="195" fontSize="14" fill="#334e68">Weighted mean:</text><text x="30" y="225" fontSize="19" fontWeight="700" fill="#24465c">(35 × 75 + 37 × 25) ÷ 100 = 35.5</text>
    <text x="30" y="259" fontSize="12" fill="#526779">The average is not the mass number of one individual chlorine atom.</text>
  </svg><p className="u4-diagram-caption">Simplified percentages chosen for teaching the weighted-average method. Natural chlorine abundances and isotope masses are more precise and vary slightly by reference data.</p></div>;
}

function OrbitalShapesDiagram() {
  return <div className="u4-diagram-card"><svg viewBox="0 0 700 330" role="img" aria-labelledby="u4-orbital-title u4-orbital-desc">
    <title id="u4-orbital-title">S and p orbital shapes and electron occupancy</title><desc id="u4-orbital-desc">A spherical s orbital and a two-lobed p orbital are shown beside orbital box diagrams. The p subshell has three orbitals with a maximum of six electrons.</desc>
    <text x="30" y="34" fontSize="17" fontWeight="700" fill="#24465c">Orbital shapes and electron occupancy</text>
    <circle cx="150" cy="122" r="58" fill="#a8cbdc" fillOpacity=".55" stroke="#4f839a" strokeWidth="2"/><circle cx="150" cy="122" r="7" fill="#24465c"/><text x="150" y="205" textAnchor="middle" fontSize="16" fontWeight="700" fill="#334e68">s orbital</text><text x="150" y="226" textAnchor="middle" fontSize="12" fill="#526779">spherical · one orbital</text><text x="150" y="244" textAnchor="middle" fontSize="12" fill="#526779">maximum 2 electrons</text>
    <path d="M389 122 C372 99 347 75 327 88 C307 101 315 143 327 156 C347 169 372 145 389 122 Z" fill="#b7c5ee" fillOpacity=".72" stroke="#586ca8" strokeWidth="2"/><path d="M389 122 C406 99 431 75 451 88 C471 101 463 143 451 156 C431 169 406 145 389 122 Z" fill="#b7c5ee" fillOpacity=".72" stroke="#586ca8" strokeWidth="2"/><circle cx="389" cy="122" r="6" fill="#24465c"/><text x="389" y="205" textAnchor="middle" fontSize="16" fontWeight="700" fill="#334e68">p orbital</text><text x="389" y="226" textAnchor="middle" fontSize="12" fill="#526779">two main lobes · dumbbell shape</text><text x="389" y="244" textAnchor="middle" fontSize="12" fill="#526779">one of three p orbitals</text>
    <g transform="translate(520 77)"><text x="0" y="0" fontSize="13" fontWeight="700" fill="#334e68">Orbital boxes</text><rect x="0" y="18" width="45" height="34" rx="4" fill="#f1f5f9" stroke="#64748b"/><text x="22" y="42" textAnchor="middle" fontSize="18" fill="#1e3a5f">↑↓</text><text x="22" y="70" textAnchor="middle" fontSize="11" fill="#526779">s: 1 orbital</text><rect x="0" y="92" width="39" height="34" rx="4" fill="#f1f5f9" stroke="#64748b"/><rect x="45" y="92" width="39" height="34" rx="4" fill="#f1f5f9" stroke="#64748b"/><rect x="90" y="92" width="39" height="34" rx="4" fill="#f1f5f9" stroke="#64748b"/><text x="19" y="116" textAnchor="middle" fontSize="17" fill="#1e3a5f">↑↓</text><text x="64" y="116" textAnchor="middle" fontSize="17" fill="#1e3a5f">↑</text><text x="109" y="116" textAnchor="middle" fontSize="17" fill="#1e3a5f">↑</text><text x="64" y="146" textAnchor="middle" fontSize="11" fill="#526779">p: 3 orbitals</text></g>
    <g transform="translate(30 278)"><circle cx="0" cy="0" r="5" fill="#24465c"/><text x="12" y="4" fontSize="11" fill="#526779">Nucleus</text><text x="115" y="4" fontSize="11" fill="#526779">Each box represents one orbital; each arrow represents one electron.</text></g>
  </svg><p className="u4-diagram-caption">Schematic probability shapes, not solid surfaces or electron tracks. The p orbital is shown in one orientation; the three p orbitals point along mutually perpendicular directions.</p></div>;
}

const route = (id: string) => `/lessons/${id}`;
const quizRoute = (id: string) => `${route(id)}/quiz`;
const sources = {
  inspire: { label: 'Federal Ministry of Education — SS1 Particulate Nature of Matter', url: 'https://inspire.education.gov.ng/lessons/232/preview' },
  syllabus: { label: 'Nigeria SS1 Chemistry Scheme of Work — Particulate Nature of Matter', url: 'https://syllabus.ng/ss1-scheme-of-work/chemistry/' },
  openstaxPhysical: { label: 'OpenStax Chemistry — Physical and Chemical Properties', url: 'https://openstax.org/books/chemistry/pages/1-3-physical-and-chemical-properties' },
  openstaxModels: { label: 'OpenStax Chemistry — Evolution of Atomic Theory', url: 'https://openstax.org/books/chemistry/pages/2-2-evolution-of-atomic-theory' },
  openstaxStructure: { label: 'OpenStax Chemistry — Atomic Structure and Symbolism', url: 'https://openstax.org/books/chemistry-2e/pages/2-3-atomic-structure-and-symbolism' },
  openstaxEquation: { label: 'OpenStax Chemistry — Writing and Balancing Chemical Equations', url: 'https://openstax.org/books/chemistry-2e/pages/4-1-writing-and-balancing-chemical-equations' },
  rsc: { label: 'Royal Society of Chemistry — Structure of the Atom teaching resource', url: 'https://edu.rsc.org/structure-of-the-atom/everything-you-need-to-teach-the-structure-of-the-atom/4021579.article' },
  iupac: { label: 'IUPAC Gold Book — Relative atomic mass', url: 'https://goldbook.iupac.org/terms/view/R05258' },
  amu: { label: 'IUPAC Gold Book — Atomic mass constant', url: 'https://goldbook.iupac.org/terms/view/A00497' },
};

export const particulateNatureLessons: ParticulateNatureLesson[] = [
  {
    id: 'physical-and-chemical-changes', lessonNumber: '03', title: 'Physical and chemical changes', titleLead: 'When does matter', titleAccent: 'really change?',
    summary: 'Compare changes in form or state with changes that produce new substances, and use particle models and equations to explain the difference.', duration: '20–25 min',
    learningObjectives: ['Define physical change and chemical change.', 'Compare changes in particle arrangement with changes in chemical identity.', 'Classify familiar examples and justify the classification using evidence.', 'Interpret a simple balanced equation as a representation of a chemical change.'],
    sections: [
      { id: 'meaning-of-change', label: 'What is a change?', kicker: 'START WITH THE SUBSTANCE', title: 'Ask whether the chemical identity has changed', content: <>
        <p>Matter can change in appearance, size, shape, temperature or state. The important Chemistry question is: <strong>are the particles still the same chemical substance, or have new substances formed?</strong></p>
        <p>A <strong>physical change</strong> changes a substance's state, form or physical properties without changing its chemical composition. A <strong>chemical change</strong> produces one or more new substances with different chemical compositions and properties.</p>
        <ConceptGrid items={[{title:'Physical change',detail:'The substance remains chemically the same, although its form or state may change.',example:'Ice melts to liquid water. Both are H₂O.',tone:'blue'},{title:'Chemical change',detail:'Atoms are rearranged as chemical bonds break and form; new substances appear.',example:'Iron reacts with oxygen and moisture to form rust.',tone:'peach'}]} />
        <Note>Do not classify a change by appearance alone. A colour change can be evidence of a reaction, but it is not proof by itself. Consider what substances are present before and after.</Note>
      </> },
      { id: 'physical-particle-view', label: 'Physical changes', kicker: 'SAME PARTICLES, DIFFERENT ARRANGEMENT', title: 'Physical changes do not create a new chemical substance', content: <>
        <ParticleChangeDiagram />
        <p>When ice melts, the H₂O molecules do not turn into a different chemical. They gain energy and move more freely; the arrangement and movement change. Freezing is the reverse physical change.</p>
        <DataTable headers={['Physical change','What changes','What remains the same']} rows={[[ 'Melting ice', 'Solid becomes liquid; particles move more freely.', 'The particles remain H₂O molecules.' ],[ 'Dissolving sugar in water', 'Sugar particles spread through the water.', 'The sugar molecules do not become a new substance simply because they dissolve.' ],[ 'Cutting aluminium', 'Size and shape change.', 'The material remains aluminium.' ],[ 'Condensing steam', 'Gas becomes liquid.', 'The particles remain H₂O molecules.' ]]} />
        <Note tone="success">A physical change is often reversible by a physical process, but reversibility alone is not the definition. The key test is whether chemical composition changes.</Note>
      </> },
      { id: 'chemical-particle-view', label: 'Chemical changes', kicker: 'NEW SUBSTANCES FORM', title: 'Chemical changes involve rearrangement of atoms', content: <>
        <p>During a chemical reaction, atoms in the reactants are rearranged to form products. Bonds in the starting substances are broken, and new bonds form. The atoms themselves are conserved in an ordinary chemical reaction.</p>
        <p>Signs that may indicate a chemical change include gas formation, formation of a new solid (precipitate), a lasting colour change, a temperature change without external heating/cooling, or light being produced. Each sign is evidence to investigate, not a standalone definition.</p>
        <DataTable headers={['Example','Evidence of a chemical change','New substance(s) formed']} rows={[[ 'Burning magnesium', 'Bright white light and white solid remain.', 'Magnesium oxide.' ],[ 'Iron rusting', 'A reddish-brown coating forms over time.', 'Hydrated iron(III) oxide/rust mixture.' ],[ 'Soured milk', 'Taste, smell and composition change.', 'Several new substances are formed by microbial activity.' ],[ 'Cooking an egg', 'The proteins change structure and new properties appear.', 'A complex set of chemical changes occurs.' ]]} />
        <Note>Gas bubbles do not always mean a chemical reaction. Boiling water also makes bubbles, but it is a physical change because the vapour is still water.</Note>
      </> },
      { id: 'equation-walkthrough', label: 'Reading an equation', kicker: 'A CHEMICAL CHANGE IN SYMBOLS', title: 'How magnesium reacts with oxygen', content: <>
        <p>When magnesium burns in oxygen, the product is magnesium oxide. The word equation is:</p><div className="u4-equation-display">magnesium + oxygen → magnesium oxide</div>
        <p>The chemical formula equation before balancing is <strong>Mg + O₂ → MgO</strong>. This is not balanced yet: there are two oxygen atoms on the left but only one on the right.</p>
        <FormulaPanel title="Balanced equation" formula={<span>2Mg(s) + O₂(g) → 2MgO(s)</span>} steps={[
          {label:'Read the formulae',detail:'Mg is magnesium. O₂ is one oxygen molecule containing two oxygen atoms. MgO contains one magnesium atom and one oxygen atom per formula unit.'},
          {label:'Read the numbers in front',detail:'The coefficient 2 before Mg means two magnesium atoms. The coefficient 2 before MgO means two formula units of magnesium oxide.'},
          {label:'Count the atoms',detail:'Left: 2 Mg and 2 O. Right: 2 Mg and 2 O. The counts match, so the equation is balanced.'},
          {label:'Read the state symbols',detail:'(s) means solid; (g) means gas. The arrow means the reactants form the products.'},
        ]} />
        <Note tone="caution">Never change a chemical formula's subscript to balance an equation. Change coefficients in front of formulae. A subscript changes the identity of the substance.</Note>
      </> },
      { id: 'decision-practice', label: 'Classifying changes', kicker: 'APPLY THE TEST', title: 'Use the evidence to reach a reasoned conclusion', content: <>
        <Steps items={[{title:'Identify the starting material',detail:'State what substance is present before the change.'},{title:'Identify what is present afterwards',detail:'Ask whether it is still the same substance or whether a different chemical composition has formed.'},{title:'Use more than one clue',detail:'Consider particle identity, products, and observations such as heat, gas or precipitate.'},{title:'State and justify the classification',detail:'Name the change and explain why it is physical or chemical.'}]} />
        <DataTable headers={['Situation','Best classification','Reason']} rows={[[ 'A candle wax solid melts beside a flame.', 'Physical change', 'The wax changes from solid to liquid; its chemical identity is unchanged during melting.' ],[ 'Wax vapour burns in oxygen.', 'Chemical change', 'Combustion forms new substances such as carbon dioxide and water.' ],[ 'Salt dissolves in water and is later recovered by evaporation.', 'Physical change', 'Dissolving and evaporation separate the salt and water without making a new substance.' ],[ 'A match burns.', 'Chemical change', 'Combustion forms new substances and releases energy.' ]]} />
      </> },
    ],
    recap: ['A physical change affects form, state or physical properties without changing chemical composition.', 'A chemical change forms new substances through rearrangement of atoms.', 'Bubbles, colour changes and temperature changes are clues, not automatic proof of a reaction.', 'In ordinary chemical reactions, atoms are conserved.', 'Balanced equations show equal numbers of each type of atom on both sides.'],
    quizPath: quizRoute('physical-and-chemical-changes'), quizDescription: 'Twelve application and reasoning questions, including particle models and equation interpretation.', sidebarTip: 'For each example, identify the starting and final substances before deciding whether the change is physical or chemical.', sources: [sources.inspire, sources.openstaxPhysical, sources.openstaxEquation],
    nextLesson: {title:'Discovery and models of the atom',path:route('discovery-and-models-of-the-atom')},
    quiz: {description:'Classify changes, interpret particle evidence and read a balanced equation.',sidebarTip:'Do not confuse a visible sign with proof. Decide whether a new chemical substance formed.',artLabel:'Mg + O₂',artCaption:'chemical change'},
  },
  {
    id: 'discovery-and-models-of-the-atom', lessonNumber: '04', title: 'Discovery and models of the atom', titleLead: 'How did scientists', titleAccent: 'build the atomic model?',
    summary: 'Follow the evidence that changed scientists’ picture of the atom, from Dalton’s solid sphere to the modern nuclear and electron-cloud descriptions.', duration: '22–28 min',
    learningObjectives: ['Arrange the main historical atomic models in the correct order.', 'Describe the main contribution of Thomson, Rutherford, Bohr and Chadwick.', 'Interpret the results of Rutherford’s alpha-particle scattering experiment.', 'Explain why scientific models change when new evidence becomes available.'],
    sections: [
      {id:'why-models-change',label:'Models and evidence',kicker:'SCIENCE DEVELOPS',title:'A scientific model explains evidence; it can be improved',content:<>
        <p>An <strong>atomic model</strong> is a scientific representation used to explain the structure and behaviour of atoms. Atoms are too small to inspect directly with ordinary classroom tools, so scientists use experiments and indirect evidence to test models.</p>
        <p>A model is useful when it explains observations and makes predictions. If new evidence does not fit, scientists revise the model or develop a better one. The historical models below are important steps, not five equally accurate pictures of today's atom.</p>
        <Note>Learn the scientist, the experiment or evidence, the model proposed, and the limitation that led to further work. This is more useful than memorising names alone.</Note>
      </>},
      {id:'atomic-model-timeline',label:'Historical models',kicker:'FROM DALTON TO CHADWICK',title:'Each major discovery answered a new question',content:<>
        <AtomicModelsTimeline />
        <DataTable headers={['Scientist','Evidence or contribution','Model or conclusion']} rows={[
          ['John Dalton','Used chemical laws and measured combining ratios.','Matter consists of atoms; atoms of elements combine in simple whole-number ratios. His model treated atoms as solid and indivisible.'],
          ['J. J. Thomson','Cathode-ray experiments identified negatively charged electrons.','Proposed electrons embedded in a spread-out positive sphere: the plum-pudding model.'],
          ['Ernest Rutherford and colleagues','Alpha particles were directed at thin gold foil; most passed through and a few were strongly deflected.','Proposed a small, dense, positive nucleus and an atom that is mostly empty space.'],
          ['Niels Bohr','Used evidence from hydrogen’s line spectrum.','Proposed that electrons occupy specific allowed energy levels around the nucleus.'],
          ['James Chadwick','Experiments with beryllium radiation and paraffin wax gave evidence for a neutral nuclear particle.','Identified the neutron, helping explain nuclear mass and isotopes.'],
        ]} />
      </>},
      {id:'rutherford-experiment',label:'Rutherford experiment',kicker:'READ THE OBSERVATION',title:'The gold-foil experiment revealed a concentrated nucleus',content:<>
        <RutherfordExperimentDiagram />
        <Steps items={[{title:'Set up the experiment',detail:'A radioactive source produced positively charged alpha particles. A narrow beam was directed at a very thin sheet of gold foil.'},{title:'Observe the pattern',detail:'Most alpha particles passed through with little or no deflection. Some changed direction, and a very small number bounced back or were deflected through large angles.'},{title:'Make a deduction',detail:'Most of an atom must be empty space. Positive charge and most atomic mass must be concentrated in a very small central region: the nucleus.'},{title:'Revise the model',detail:'The solid sphere and plum-pudding models could not explain the scattering pattern. A nuclear model was needed.'}]} />
        <Note tone="success">The conclusion came from the overall pattern, especially the fact that only a very small fraction of alpha particles were strongly deflected.</Note>
      </>},
      {id:'bohr-and-neutron',label:'Bohr and Chadwick',kicker:'TWO FURTHER DEVELOPMENTS',title:'Energy levels and neutrons improved the model',content:<>
        <p><strong>Bohr’s model</strong> introduced allowed electron energy levels. An electron can occupy an allowed level; when it moves between levels, it absorbs or emits a specific amount of energy. The model helped explain the line spectrum of hydrogen.</p>
        <p><strong>Chadwick’s discovery of the neutron</strong> showed that the nucleus contains neutral particles as well as protons. Neutrons help account for the difference in mass between isotopes of the same element.</p>
        <DataTable headers={['Model or discovery','What it explained','What it did not fully explain']} rows={[
          ['Bohr shell model','Allowed energy levels and the hydrogen line spectrum.','It does not accurately describe the behaviour of all multi-electron atoms.'],
          ['Neutron discovery','Why nuclei can contain mass beyond the proton count; isotope differences.','It did not by itself provide the full modern quantum model.'],
          ['Modern quantum model','Electron behaviour using orbitals and probability distributions.','It is more mathematical than the introductory shell picture used at this level.'],
        ]} />
      </>},
      {id:'compare-models',label:'Compare the models',kicker:'USE SCIENTIFIC REASONING',title:'Choose the model that matches the evidence and level of detail',content:<>
        <p>For SS1, the Bohr-style shell diagram is a useful way to show introductory electron arrangement. It is not a literal photograph of electrons travelling in fixed circular tracks. At higher levels, orbitals and probability regions give a more accurate description.</p>
        <Note tone="caution">Avoid saying that Rutherford discovered the neutron. Rutherford’s nuclear model came first; Chadwick later identified the neutron.</Note>
      </>},
    ],
    recap:['Dalton proposed atoms as solid, indivisible particles.','Thomson discovered the electron and proposed the plum-pudding model.','Rutherford’s gold-foil experiment led to the nuclear model: a tiny positive nucleus and mostly empty space.','Bohr introduced allowed electron energy levels.','Chadwick discovered the neutron.','Scientific models are revised when new evidence requires it.'],
    quizPath:quizRoute('discovery-and-models-of-the-atom'),quizDescription:'Twelve evidence-based questions on experimental observations, deductions and the history of atomic models.',sidebarTip:'In experiment questions, separate what scientists observed from what they inferred from those observations.',sources:[sources.inspire,sources.openstaxModels,sources.rsc],
    nextLesson:{title:'Protons, neutrons and electrons',path:route('subatomic-particles')},
    quiz:{description:'Interpret experiment results and identify the model supported by the evidence.',sidebarTip:'Remember the order: Dalton, Thomson, Rutherford, Bohr, Chadwick.',artLabel:'ATOM MODEL',artCaption:'evidence and history'},
  },
  {
    id:'subatomic-particles',lessonNumber:'05',title:'Protons, neutrons and electrons',titleLead:'What is inside',titleAccent:'an atom?',summary:'Identify the three main subatomic particles, compare their charges, relative masses and locations, and calculate particle counts for atoms and ions.',duration:'22–27 min',
    learningObjectives:['Name the three main subatomic particles and state their locations.','Compare their relative charges and relative masses.','Calculate proton, neutron and electron numbers from atomic and mass numbers.','Determine the net charge of a simple ion from its proton and electron counts.'],
    sections:[
      {id:'atom-structure',label:'Inside the atom',kicker:'THE NUCLEUS AND ELECTRONS',title:'An atom has a tiny nucleus surrounded by electrons',content:<>
        <AtomStructureDiagram />
        <p>The <strong>nucleus</strong> is the small central region of an atom. It contains positively charged protons and neutral neutrons. Negatively charged electrons occupy regions around the nucleus.</p>
        <p>Most of the atom's mass is concentrated in the nucleus. The atom is mostly empty space when compared with the tiny size of the nucleus. The diagram is enlarged and simplified so that the parts can be seen.</p>
      </>},
      {id:'particle-properties',label:'Compare the particles',kicker:'CHARGE, MASS AND LOCATION',title:'The particles have different properties',content:<>
        <DataTable headers={['Particle','Relative charge','Approximate relative mass','Location']} rows={[
          ['Proton','+1','1','Nucleus'],['Neutron','0','1','Nucleus'],['Electron','−1','1/1836 (much smaller than 1)','Outside the nucleus, in electron regions/shells at this level'],
        ]} />
        <p>The relative masses of protons and neutrons are both close to 1 on this introductory scale. An electron has a much smaller mass, about 1/1836 of a proton's mass. That is why the mass number is usually calculated from protons and neutrons only.</p>
        <Note>“Relative mass 1” is a comparison, not a mass of one gram. A proton and neutron each have a mass close to 1 unified atomic mass unit (u).</Note>
      </>},
      {id:'neutral-atoms-and-ions',label:'Neutral atoms and ions',kicker:'COUNT THE CHARGES',title:'A neutral atom has equal numbers of protons and electrons',content:<>
        <p>Each proton contributes a charge of +1, and each electron contributes a charge of −1. A neutron has zero charge. In a neutral atom, the positive and negative charges cancel because the proton and electron counts are equal.</p>
        <FormulaPanel title="Net charge at this level" formula={<span>Charge = number of protons − number of electrons</span>} steps={[{label:'Count the protons',detail:'Protons contribute positive charge. For example, 11 protons contribute +11.'},{label:'Count the electrons',detail:'Electrons contribute negative charge. Ten electrons contribute −10.'},{label:'Subtract',detail:'11 − 10 = +1. The particle has one more positive charge than negative charge.'}]} />
        <p>For a common ion, only the electron count changes during ordinary chemical ion formation. The number of protons stays the same, so it remains the same element.</p>
      </>},
      {id:'worked-particle-counts',label:'Worked particle counts',kicker:'FOLLOW THE CALCULATION',title:'Find the particles in a sodium ion',content:<>
        <p>Consider a sodium ion written as <strong>²³₁₁Na⁺</strong>. The lower number 11 is the atomic number; the upper number 23 is the mass number; the + sign is the ion charge.</p>
        <Steps items={[{title:'Find the protons',detail:'Atomic number = number of protons. Sodium has 11 protons.'},{title:'Find the neutrons',detail:'Neutrons = mass number − atomic number = 23 − 11 = 12.'},{title:'Find the electrons',detail:'A neutral sodium atom has 11 electrons. Na⁺ has lost one electron, so it has 11 − 1 = 10 electrons.'},{title:'Check the charge',detail:'11 protons − 10 electrons = +1. This agrees with Na⁺.'}]} />
        <DataTable headers={['Species','Protons','Neutrons','Electrons','Net charge']} rows={[[ '²³₁₁Na⁺','11','12','10','+1' ],[ '³⁵₁₇Cl⁻','17','18','18','−1' ],[ '²⁴₁₂Mg²⁺','12','12','10','+2' ],[ '¹⁶₈O²⁻','8','8','10','−2' ]]} />
      </>},
      {id:'common-errors',label:'Common errors',kicker:'CHECK YOUR REASONING',title:'Do not confuse mass number, atomic number and charge',content:<>
        <ConceptGrid items={[{title:'Atomic number',detail:'Counts protons. It identifies the element.',example:'Every sodium atom or ion has 11 protons.',tone:'blue'},{title:'Mass number',detail:'Counts protons plus neutrons in one isotope.',example:'²³Na has 23 nucleons: 11 protons + 12 neutrons.',tone:'yellow'},{title:'Ion charge',detail:'Compares positive proton count with negative electron count.',example:'Na⁺ has one fewer electron than neutral Na.',tone:'peach'}]} />
        <Note tone="caution">Do not subtract the charge from the mass number to find neutrons. Neutrons depend on mass number and atomic number only: A − Z.</Note>
      </>},
    ],
    recap:['Protons (+1) and neutrons (0) are in the nucleus; electrons (−1) are outside it.','A neutral atom has equal proton and electron numbers.','Atomic number gives the proton number.','Mass number is protons plus neutrons.','For a simple ion, electron number changes; proton number stays the same.','Net charge = protons − electrons.'],
    quizPath:quizRoute('subatomic-particles'),quizDescription:'Twelve questions with multi-step particle counts, ion-charge calculations and interpretation of isotope symbols.',sidebarTip:'Write down P, N and E separately. Use A − Z for neutrons, then use the ion charge to check electrons.',sources:[sources.inspire,sources.openstaxStructure,sources.rsc],
    nextLesson:{title:'Electron arrangement around the nucleus',path:route('electron-arrangement')},
    quiz:{description:'Practise particle-count calculations and explain how an ion’s charge is formed.',sidebarTip:'Check your answer twice: particle counts must be whole numbers, and the charge must match p − e.',artLabel:'p⁺ n⁰ e⁻',artCaption:'subatomic particles'},
  },
  {
    id:'electron-arrangement',lessonNumber:'06',title:'Electron arrangement around the nucleus',titleLead:'How are electrons',titleAccent:'arranged in shells?',summary:'Learn the introductory shell model, write electron arrangements for the first 20 elements, and use arrangements to compare atoms and ions.',duration:'22–28 min',
    learningObjectives:['Explain what an electron shell represents in the introductory model.','Use the 2, 8, 8, 2 filling pattern for the first 20 elements.','Write and interpret shell arrangements for common atoms.','Compare the electron arrangements of simple ions and their parent atoms.'],
    sections:[
      {id:'shell-model',label:'Shells and energy',kicker:'A USEFUL INTRODUCTORY MODEL',title:'Electrons occupy allowed energy levels',content:<>
        <p>In the shell model used at this level, electrons are grouped into energy levels around the nucleus. The first shell is called <strong>K</strong>, the second <strong>L</strong>, the third <strong>M</strong> and the fourth <strong>N</strong>.</p>
        <p>Electrons fill lower-energy levels before higher-energy ones. For the first 20 elements, the familiar introductory distribution is <strong>2, 8, 8, 2</strong>. This gives shell arrangements such as sodium 2,8,1 and calcium 2,8,8,2.</p>
        <Note tone="caution">This first-20-element rule is an introductory filling pattern. The third shell can hold more than eight electrons in more advanced treatment; the 2,8,8,2 sequence reflects the order in which subshells fill for the first 20 elements.</Note>
      </>},
      {id:'worked-shell-arrangement',label:'Worked example',kicker:'SODIUM HAS 11 ELECTRONS',title:'Build the arrangement one shell at a time',content:<>
        <ElectronShellDiagram title="Sodium atom" symbol="Na" shells={[2,8,1]} />
        <Steps items={[{title:'Start with the electron total',detail:'A neutral sodium atom has atomic number 11, so it has 11 electrons.'},{title:'Fill the first shell',detail:'The K shell holds up to 2 electrons at this level. Place 2 there. 11 − 2 = 9 remain.'},{title:'Fill the second shell',detail:'The L shell holds up to 8 electrons. Place 8 there. 9 − 8 = 1 remains.'},{title:'Place the remaining electron',detail:'The one remaining electron goes into the M shell. The arrangement is 2,8,1.'},{title:'Check the total',detail:'2 + 8 + 1 = 11 electrons, matching the atomic number.'}]} />
      </>},
      {id:'first-twenty-table',label:'First 20 elements',kicker:'REFERENCE TABLE',title:'Use the atomic number to build shell arrangements',content:<>
        <DataTable headers={['Atomic no.','Element','Symbol','Shell arrangement']} rows={[
          ['1','Hydrogen','H','1'],['2','Helium','He','2'],['3','Lithium','Li','2,1'],['4','Beryllium','Be','2,2'],['5','Boron','B','2,3'],['6','Carbon','C','2,4'],['7','Nitrogen','N','2,5'],['8','Oxygen','O','2,6'],['9','Fluorine','F','2,7'],['10','Neon','Ne','2,8'],['11','Sodium','Na','2,8,1'],['12','Magnesium','Mg','2,8,2'],['13','Aluminium','Al','2,8,3'],['14','Silicon','Si','2,8,4'],['15','Phosphorus','P','2,8,5'],['16','Sulfur','S','2,8,6'],['17','Chlorine','Cl','2,8,7'],['18','Argon','Ar','2,8,8'],['19','Potassium','K','2,8,8,1'],['20','Calcium','Ca','2,8,8,2'],
        ]} />
        <Note>The arrangement numbers are written from the innermost shell outwards. Add them to confirm the total electron number.</Note>
      </>},
      {id:'ions-shells',label:'Electron arrangement in ions',kicker:'GAINING OR LOSING ELECTRONS',title:'An ion’s shell arrangement changes when electrons move',content:<>
        <DataTable headers={['Species','Electrons','Shell arrangement','What happened?']} rows={[[ 'Na','11','2,8,1','Neutral sodium atom' ],[ 'Na⁺','10','2,8','Lost one electron' ],[ 'Cl','17','2,8,7','Neutral chlorine atom' ],[ 'Cl⁻','18','2,8,8','Gained one electron' ],[ 'Mg²⁺','10','2,8','Lost two electrons' ],[ 'O²⁻','10','2,8','Gained two electrons' ]]} />
        <p>Notice that Na⁺ and Ne both have ten electrons, but they are not the same element. Element identity is fixed by proton number, not by electron arrangement alone.</p>
      </>},
      {id:'outer-shell',label:'Outer-shell electrons',kicker:'LINK TO CHEMICAL BEHAVIOUR',title:'The outer shell helps explain how atoms form ions and bonds',content:<>
        <p>The electrons in the outermost occupied shell are called <strong>outer-shell electrons</strong> or <strong>valence electrons</strong> in this introductory discussion. They are especially important in chemical bonding.</p>
        <p>For example, sodium has one outer-shell electron (2,8,1), while chlorine has seven (2,8,7). Sodium can lose one electron to form Na⁺; chlorine can gain one electron to form Cl⁻. The oppositely charged ions attract each other.</p>
        <Note>This lesson introduces shell patterns only. Detailed bonding, valency and formula writing are developed in later units.</Note>
      </>},
    ],
    recap:['K, L, M and N name the first four shells in the introductory model.','For the first 20 elements, use the 2,8,8,2 filling sequence.','The sum of shell electrons must equal the electron total.','Neutral atoms have electron number equal to atomic number.','Ions form when atoms gain or lose electrons; their proton number stays the same.'],
    quizPath:quizRoute('electron-arrangement'),quizDescription:'Twelve questions on shell arrangements, first-20-element patterns and ions, including multi-step electron counting.',sidebarTip:'Do not guess from the element name. Start with atomic number, then fill 2, 8, 8 and 2 for the first 20 elements.',sources:[sources.inspire,sources.rsc,sources.openstaxStructure],
    nextLesson:{title:'Atomic number, mass number and isotopes',path:route('atomic-number-mass-number-isotopes')},
    quiz:{description:'Build shell arrangements and reason from the electron counts of atoms and ions.',sidebarTip:'Add every shell to check the total. Remember that losing electrons makes a cation and gaining makes an anion.',artLabel:'2 · 8 · 8 · 2',artCaption:'first 20 elements'},
  },
  {
    id:'atomic-number-mass-number-isotopes',lessonNumber:'07',title:'Atomic number, mass number and isotopes',titleLead:'How do we identify',titleAccent:'an atom precisely?',summary:'Read nuclide symbols, calculate proton and neutron numbers, and compare isotopes without confusing isotope differences with ion charges.',duration:'23–28 min',
    learningObjectives:['Define atomic number and mass number.','Use nuclide notation to identify an isotope.','Calculate neutron and electron numbers for atoms and simple ions.','Explain why isotopes are atoms of the same element with different mass numbers.'],
    sections:[
      {id:'atomic-and-mass-number',label:'Atomic and mass numbers',kicker:'TWO NUMBERS, TWO MEANINGS',title:'Atomic number identifies the element; mass number counts nucleons',content:<>
        <p>The <strong>atomic number (Z)</strong> is the number of protons in the nucleus. It determines which element the atom is. The <strong>mass number (A)</strong> is the total number of protons and neutrons in the nucleus. Protons and neutrons together are called <strong>nucleons</strong>.</p>
        <FormulaPanel title="Two key relationships" formula={<span>A = Z + N &nbsp;&nbsp; and &nbsp;&nbsp; N = A − Z</span>} steps={[{label:'A means mass number',detail:'It is the total number of protons and neutrons in one nucleus.'},{label:'Z means atomic number',detail:'It is the proton number.'},{label:'N means neutron number',detail:'Subtract the proton number from the mass number to find neutrons.'},{label:'Read the signs',detail:'The plus sign (+) tells you to add proton and neutron counts. The minus sign (−) tells you to subtract. The equals sign (=) means both sides represent the same quantity.'}]} />
      </>},
      {id:'nuclide-notation',label:'Nuclide notation',kicker:'READ THE SYMBOL',title:'The upper-left and lower-left numbers carry different information',content:<>
        <div className="u4-nuclide-display"><span>²³</span><b>Na</b><sub>₁₁</sub><em>23 = mass number (A)</em><small>11 = atomic number (Z)</small></div>
        <p>Nuclide notation places the mass number at the upper left of the element symbol and the atomic number at the lower left. The element symbol tells you which element it is; Z and A let you calculate the nuclear particle numbers.</p>
        <Note>Some textbooks write the atomic number at the bottom left and the mass number at the top left. If a charge is present, it is normally shown at the upper right, for example ²³₁₁Na⁺.</Note>
      </>},
      {id:'worked-calculation',label:'Worked calculation',kicker:'FIND ALL THREE PARTICLES',title:'Calculate the particles in ³⁵₁₇Cl⁻',content:<>
        <Steps items={[{title:'Read the atomic number',detail:'Z = 17, so the ion contains 17 protons.'},{title:'Read the mass number',detail:'A = 35. Neutrons = A − Z = 35 − 17 = 18.'},{title:'Use the charge to find electrons',detail:'A −1 charge means there is one more electron than proton. Electrons = 17 + 1 = 18.'},{title:'Check the net charge',detail:'17 positive charges and 18 negative charges give 17 − 18 = −1, matching Cl⁻.'}]} />
        <DataTable headers={['Species','Z (protons)','A (p + n)','Neutrons','Electrons']} rows={[[ '²³₁₁Na⁺','11','23','12','10' ],[ '³⁵₁₇Cl⁻','17','35','18','18' ],[ '²⁴₁₂Mg²⁺','12','24','12','10' ],[ '¹⁶₈O²⁻','8','16','8','10' ]]} />
      </>},
      {id:'isotopes',label:'What are isotopes?',kicker:'SAME ELEMENT, DIFFERENT NEUTRONS',title:'Isotopes have the same proton number but different neutron numbers',content:<>
        <IsotopeComparisonDiagram />
        <p>Isotopes are atoms of the same element that have the same atomic number (same proton number) but different mass numbers because they contain different numbers of neutrons.</p>
        <p>Carbon-12 and carbon-14 are both carbon because each has six protons. A neutral atom of each has six electrons. Carbon-12 has six neutrons; carbon-14 has eight neutrons.</p>
        <DataTable headers={['Isotope','Protons','Neutrons','Electrons if neutral']} rows={[[ 'Carbon-12 (¹²C)','6','6','6' ],[ 'Carbon-13 (¹³C)','6','7','6' ],[ 'Carbon-14 (¹⁴C)','6','8','6' ]]} />
      </>},
      {id:'isotope-properties',label:'Properties of isotopes',kicker:'WHAT IS THE SAME AND WHAT DIFFERS?',title:'Isotopes usually have similar chemical behaviour but different masses',content:<>
        <p>For neutral atoms of the same element, isotopes have the same number of electrons and the same electron arrangement. This is why their chemical behaviour is very similar. Their masses differ because their neutron numbers differ.</p>
        <p>Some isotopes are stable; others are radioactive. Carbon-14 is radioactive and is used in radiocarbon dating of suitable once-living materials. Carbon-12 and carbon-13 are stable.</p>
        <Note tone="caution">Do not say isotopes have different atomic numbers. If the proton number changes, the atom becomes a different element.</Note>
      </>},
    ],
    recap:['Atomic number Z = number of protons.','Mass number A = protons + neutrons.','Neutron number N = A − Z.','For a neutral atom, electrons = protons.','For ions, adjust electrons according to the charge; the proton number identifies the element.','Isotopes have the same proton number but different neutron numbers.'],
    quizPath:quizRoute('atomic-number-mass-number-isotopes'),quizDescription:'Twelve multi-step questions using isotope notation, neutron calculations and ion charges.',sidebarTip:'Read the symbol carefully: top left is A, bottom left is Z, and the superscript charge tells you about electrons.',sources:[sources.inspire,sources.openstaxStructure,sources.rsc],
    nextLesson:{title:'Relative atomic mass',path:route('relative-atomic-mass')},
    quiz:{description:'Interpret nuclide notation and calculate proton, neutron and electron counts.',sidebarTip:'Use N = A − Z first. Then handle the electron number separately using the charge.',artLabel:'A = Z + N',artCaption:'isotope notation'},
  },
  {
    id:'relative-atomic-mass',lessonNumber:'08',title:'Relative atomic mass',titleLead:'Why do periodic-table masses',titleAccent:'often have decimals?',summary:'Understand the carbon-12 reference and calculate a weighted average from isotope masses and their natural abundances.',duration:'24–30 min',
    learningObjectives:['Explain what relative atomic mass represents.','State why carbon-12 is used as the reference standard.','Calculate a weighted average from isotope mass numbers and percentage abundances.','Interpret why an average atomic mass need not be a whole number.'],
    sections:[
      {id:'meaning-relative-mass',label:'Meaning and reference',kicker:'A WEIGHTED AVERAGE',title:'Relative atomic mass accounts for the isotopes of an element',content:<>
        <p>Most elements occur naturally as mixtures of isotopes. Each isotope has its own mass, and the isotopes may not be present in equal amounts. The <strong>relative atomic mass (Aᵣ)</strong> is the weighted average mass of the atoms of an element relative to one-twelfth of the mass of a carbon-12 atom.</p>
        <p>The carbon-12 atom is used as the reference. One unified atomic mass unit (u) is defined as one-twelfth of the mass of a carbon-12 atom. Relative atomic mass is a ratio, so it has no unit.</p>
        <Note tone="caution">Some versions of the Nigerian SS1 Inspire resource display “C-14” in one learning outcome. The scientifically accepted reference standard is carbon-12. This lesson uses C-12, consistent with IUPAC and the standard definition of relative atomic mass.</Note>
      </>},
      {id:'weighted-average-formula',label:'The formula',kicker:'WHAT EACH PART MEANS',title:'Multiply each isotope mass by its fractional abundance',content:<>
        <FormulaPanel title="Weighted-average formula" formula={<span>Aᵣ = Σ (isotope mass × fractional abundance)</span>} steps={[{label:'Isotope mass',detail:'Use the mass of each isotope. In introductory calculations, the mass number is often used as an approximation.'},{label:'The sigma symbol (Σ)',detail:'Σ is the Greek letter sigma. In this formula it means add together the contribution from every isotope in the sample.'},{label:'Fractional abundance',detail:'Convert a percentage to a decimal by dividing by 100. For example, 75% becomes 0.75. The fractions for all isotopes add to 1.'},{label:'Multiply',detail:'Multiply the mass of each isotope by the fraction of atoms represented by that isotope.'},{label:'Add',detail:'Add all the weighted contributions to obtain the relative atomic mass.'}]} />
        <p>If the abundances are given as percentages instead of decimals, use:</p><div className="u4-equation-display">Aᵣ = [(m₁ × %₁) + (m₂ × %₂) + …] ÷ 100</div>
        <p>Here m₁ and m₂ are isotope masses, while %₁ and %₂ are their percentage abundances. The percentages should add up to 100%.</p>
      </>},
      {id:'worked-relative-mass',label:'Worked example',kicker:'CHLORINE: TWO ISOTOPES',title:'Calculate the average when the abundances are 75% and 25%',content:<>
        <RelativeMassDiagram />
        <p>For this simplified example, suppose chlorine has 75% chlorine-35 and 25% chlorine-37.</p>
        <Steps items={[{title:'Write down the information',detail:'Chlorine-35: mass = 35, abundance = 75%. Chlorine-37: mass = 37, abundance = 25%.'},{title:'Multiply each mass by its percentage',detail:'35 × 75 = 2,625. Also, 37 × 25 = 925.'},{title:'Add the two contributions',detail:'2,625 + 925 = 3,550.'},{title:'Divide by 100',detail:'3,550 ÷ 100 = 35.5. The relative atomic mass for this simplified mixture is 35.5.'}]} />
        <Note tone="success">Check: 35.5 lies between 35 and 37, and it is closer to 35 because the chlorine-35 isotope is more abundant.</Note>
      </>},
      {id:'second-worked-example',label:'Second calculation',kicker:'THREE ISOTOPES',title:'A method for a mixture with three isotopes',content:<>
        <p>Suppose element X has three isotopes with the following simplified data:</p>
        <DataTable headers={['Isotope mass','Percentage abundance','Product']} rows={[[ '24','70%','24 × 70 = 1,680' ],[ '25','20%','25 × 20 = 500' ],[ '26','10%','26 × 10 = 260' ]]} />
        <p>Now add the products: 1,680 + 500 + 260 = 2,440. Divide by 100: 2,440 ÷ 100 = <strong>24.4</strong>.</p>
        <p>The percentages total 70 + 20 + 10 = 100%, so the data account for the whole sample. The answer 24.4 is a weighted average, not the mass number of an individual atom.</p>
      </>},
      {id:'check-and-common-errors',label:'Check the result',kicker:'AVOID COMMON ERRORS',title:'Use the abundance data to check whether the answer makes sense',content:<>
        <ConceptGrid items={[{title:'Percentages',detail:'All isotope abundances in a complete sample should add to 100%.',example:'75% + 25% = 100%.',tone:'blue'},{title:'Average range',detail:'The weighted average should lie between the smallest and largest isotope masses.',example:'A mixture of 35 and 37 cannot average to 38.',tone:'yellow'},{title:'Closer to the common isotope',detail:'The average is pulled towards the isotope with the larger abundance.',example:'75% of mass 35 pulls the average closer to 35.',tone:'mint'}]} />
        <Note tone="caution">Do not calculate a simple mean unless the isotopes are equally abundant. Relative atomic mass is weighted by abundance.</Note>
      </>},
    ],
    recap:['Relative atomic mass is a weighted average relative to one-twelfth of a carbon-12 atom.','Convert percentage abundance to a fraction by dividing by 100.','Multiply each isotope mass by its abundance fraction, then add the results.','The abundance percentages must total 100%.','The answer is usually not a whole number and has no unit.','The relative atomic mass is not the mass number of one particular atom.'],
    quizPath:quizRoute('relative-atomic-mass'),quizDescription:'Twelve questions including multi-isotope weighted-average calculations and error checking.',sidebarTip:'Show every multiplication, add the weighted values, then divide by 100 if you used percentages.',sources:[sources.inspire,sources.iupac,sources.amu,sources.openstaxStructure],
    nextLesson:{title:'Atomic orbitals and electron arrangement: extension',path:route('introductory-orbital-model')},
    quiz:{description:'Calculate weighted averages and diagnose incorrect relative-mass methods.',sidebarTip:'Check that abundances add to 100% and that your answer lies between the isotope masses.',artLabel:'Aᵣ = 35.5',artCaption:'weighted average'},
  },
  {
    id:'introductory-orbital-model',lessonNumber:'09',title:'Atomic orbitals and electron arrangement: extension',titleLead:'Beyond simple shells:',titleAccent:'what is an orbital?',summary:'An enrichment lesson introducing subshells and orbitals, explaining why electrons are described by probability regions rather than fixed circular paths.',duration:'18–24 min',
    learningObjectives:['Distinguish an electron shell, subshell and orbital.','Explain why an orbital is not a fixed circular path.','Recognise the basic shapes and capacities of s and p orbitals.','Read a few introductory orbital configurations without confusing them with shell notation.'],
    sections:[
      {id:'why-extension',label:'Why go beyond shells?',kicker:'ENRICHMENT — NOT A CORE SS1 REQUIREMENT',title:'The shell picture is useful, but it is simplified',content:<>
        <p>The shell model is a helpful introduction for the first 20 elements. In more detailed Chemistry, electrons are described using the quantum-mechanical model. This model does not treat electrons as tiny planets following exact circular tracks.</p>
        <p>Instead, an <strong>orbital</strong> describes a region around the nucleus where an electron is likely to be found. The mathematical model predicts probabilities, not a definite path.</p>
        <Note>This is an extension beyond the core SS1 particulate-nature outcomes. Learn the distinction and basic vocabulary first; detailed quantum calculations are not required here.</Note>
      </>},
      {id:'shell-subshell-orbital',label:'Shell, subshell and orbital',kicker:'THREE LEVELS OF DETAIL',title:'A shell contains subshells, and subshells contain orbitals',content:<>
        <DataTable headers={['Term','Meaning','Example']} rows={[[ 'Shell','A main energy level around the nucleus.','n = 1, 2, 3…'],['Subshell','A division within a shell, labelled s, p, d or f.','The second shell contains 2s and 2p subshells.'],['Orbital','A particular probability region within a subshell. Each orbital can hold up to two electrons.','The 2p subshell contains three p orbitals.']]} />
        <Note>Do not use “orbit” and “orbital” as if they mean the same thing. An orbit suggests a fixed path; an orbital is a probability distribution.</Note>
      </>},
      {id:'orbital-shapes',label:'Orbital shapes',kicker:'VISUALISE THE PROBABILITY REGIONS',title:'s and p orbitals have different shapes',content:<>
        <OrbitalShapesDiagram />
        <p>An <strong>s orbital</strong> is spherical in the simple shape model. A <strong>p orbital</strong> has two main lobes, often described as dumbbell-shaped. There are three p orbitals in a p subshell, oriented along three perpendicular directions.</p>
        <p>Each orbital can hold a maximum of two electrons. Therefore, an s subshell (one orbital) holds up to two electrons, while a p subshell (three orbitals) holds up to six electrons.</p>
      </>},
      {id:'intro-configurations',label:'Reading configurations',kicker:'A FIRST LOOK',title:'The superscript tells you how many electrons occupy a subshell',content:<>
        <p>In a notation such as <strong>1s² 2s² 2p⁴</strong>, the number before the letter identifies the shell, the letter identifies the subshell, and the superscript tells how many electrons are in that subshell.</p>
        <Steps items={[{title:'Read 1s²',detail:'The 1 means first shell. s is the subshell. The superscript 2 means two electrons occupy 1s.'},{title:'Read 2s²',detail:'Two electrons occupy the s subshell in the second shell.'},{title:'Read 2p⁴',detail:'Four electrons occupy the p subshell in the second shell.'},{title:'Add the superscripts',detail:'2 + 2 + 4 = 8 electrons. This is the electron configuration of a neutral oxygen atom.'}]} />
        <Note tone="caution">This notation is more detailed than the K,L,M,N shell arrangement. Do not mix up 2p⁴ with “fourth shell”; the leading 2 means second shell, and p is the subshell type.</Note>
      </>},
    ],
    recap:['The shell model is a useful introductory representation, not a literal picture of electron paths.','A shell contains subshells; subshells contain orbitals.','An orbital is a probability region, not a fixed circular route.','An s subshell has one orbital and holds up to two electrons.','A p subshell has three orbitals and holds up to six electrons.','In 1s² 2s² 2p⁴, the superscripts add to eight electrons.'],
    quizPath:quizRoute('introductory-orbital-model'),quizDescription:'Twelve extension questions on shell, subshell and orbital vocabulary, orbital capacity and simple configurations.',sidebarTip:'Read each symbol in order: shell number, subshell letter, then electron count in the superscript.',sources:[sources.rsc,sources.openstaxStructure],
    quiz:{description:'Check your understanding of shell, subshell and orbital distinctions.',sidebarTip:'An orbital is a probability region. One orbital can hold up to two electrons.',artLabel:'1s² 2s² 2p⁴',artCaption:'orbital notation'},
  },
];

export const getParticulateNatureLesson = (lessonId?: string) => particulateNatureLessons.find((lesson) => lesson.id === lessonId);
