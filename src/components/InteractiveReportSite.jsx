import {
  BarChart3,
  BookOpen,
  ChevronRight,
  Download,
  ExternalLink,
  FileText,
  HeartHandshake,
  Mail,
  Megaphone,
  Network,
  Shield,
  Sparkles,
  Target,
  Users,
} from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";

const assetPath = (path) => `${import.meta.env.BASE_URL}${path}`;

const navItems = [
  { href: "#safety", label: "Safety" },
  { href: "#lived-experience", label: "Lived experience" },
  { href: "#outlook", label: "Outlook" },
  { href: "#institutions", label: "Institutions" },
  { href: "#collective-impact", label: "Grassroots vs legacy" },
  { href: "#funding", label: "Funding" },
  { href: "#path-forward", label: "Path forward" },
  { href: "#action", label: "Action" },
];

const heroStats = [
  { value: 1400, suffix: "+", label: "voices of Jewish Canadians from coast to coast", tone: "blue" },
  { value: 92.5, suffix: "%", label: "feel more concerned and less safe over the last 24 months", tone: "coral" },
  { value: 90.2, suffix: "%", label: "say the community was ill prepared for the aftermath of 10/7", tone: "gold" },
  { value: 93.6, suffix: "%", label: "say recognizably Jewish people and institutions need enhanced security", tone: "sky" },
];

const pillars = [
  ["Clarity", "A national snapshot of Jewish life in Canada, grounded in community input of our shared lived experience.", BarChart3],
  ["Community impact", "A stronger pipeline from donors to doers supporting collaborative, meaningful action towards shared goals.", Users],
  ["Accountability", "Year-over-year impartial tracking of priorities, resource allocations and impact, showcasing community satisfaction and ROI through tangible outcomes.", Target],
];

const cityPins = [
  { city: "Vancouver", className: "cis-pin-vancouver", note: "West Coast respondents represented in the national sample." },
  { city: "Calgary", className: "cis-pin-calgary", note: "Prairie community voices included." },
  { city: "Winnipeg", className: "cis-pin-winnipeg", note: "Central Canada participation represented." },
  { city: "Toronto", className: "cis-pin-toronto", note: "Major respondent concentration and institutional hub." },
  { city: "Ottawa", className: "cis-pin-ottawa", note: "Policy-centred community perspective included." },
  { city: "Montreal", className: "cis-pin-montreal", note: "Major Jewish centre represented." },
  { city: "Halifax", className: "cis-pin-halifax", note: "Atlantic Canada included in the consultation." },
];

const sexParticipation = [
  { label: "Female", value: 67.2, color: "#e99ab8" },
  { label: "Male", value: 31.3, color: "#1f6fff" },
  { label: "Prefer not to say", value: 1.5, color: "#9bc7ff" },
];

const ageDemographics = [
  ["20-24", 0.5],
  ["25-29", 0.5],
  ["30-34", 2.9],
  ["35-39", 3.3],
  ["40-44", 9.8],
  ["45-49", 8.1],
  ["50-54", 9.8],
  ["55-59", 12.0],
  ["60-64", 11.2],
  ["65-69", 14.4],
  ["70-74", 9.8],
  ["75-79", 8.9],
  ["80-84", 4.1],
  ["85-89", 1.2],
  ["90+", 0.2],
  ["No answer", 3.3],
];

const priorities = [
  ["Safety", "The highest-ranked need across the community."],
  ["Antisemitism", "More effective methods for combatting antisemitism."],
  ["Youth engagement", "Future resilience depends on younger community members."],
  ["Community mobilization", "People want faster, broader, more coordinated action."],
  ["Training & education", "Practical tools, readiness, and empowerment."],
  ["Advocacy & lobbying", "Focused influence with policy makers and institutions."],
  ["PR / communications", "Clearer public messaging and stronger visibility."],
  ["Policy & research", "Evidence to guide smarter long-term strategy."],
];

const safetyStats = [
  ["The Jewish community was well prepared for the antisemitic threats post 10/7.", 90.2, "Disagree", "Despite decades spent and hundreds of millions raised to combat antisemitism, only 3.6% agreed the community was well prepared."],
  ["I feel more concerned and less safe as a Jew in Canada.", 92.5, "Agree", "A near-consensus signal of heightened vulnerability after October 7."],
];

const wordClouds = [
  {
    title: "Antisemitism / lived experience",
    image: "assets/wordclouds/wordcloud-01-antisemitism-lived-experience.png",
    alt: "Word cloud emphasizing unsafe, fear, harassment, protests, anxiety, vandalism, graffiti, online hate, intimidation, and threats.",
    chips: ["fear", "harassment", "vandalism", "online hate", "isolation", "identity visibility"],
    quote: "I feel unsafe. Reporting antisemitism leads nowhere.",
  },
  {
    title: "Current approach / how we improve",
    image: "assets/wordclouds/wordcloud-02-current-approach-how-we-improve.png",
    alt: "Word cloud emphasizing coordination, transparent communication, resource allocation, accountability, measurable outcomes, fund grassroots, and preparedness.",
    chips: ["coordination", "accountability", "resource allocation", "transparent communication", "fund grassroots"],
    quote: "Coordinate the ecosystem and show measurable outcomes.",
  },
  {
    title: "Hope / collective fighting spirit",
    image: "assets/wordclouds/wordcloud-03-hope-future.png",
    alt: "Word cloud emphasizing overcome threats, future generations, gratitude, grassroots critical role, meaning and purpose, and growing stronger.",
    chips: ["future generations", "gratitude", "meaning", "grassroots", "unity"],
    quote: "If we confront this successfully, future generations will look back with gratitude.",
  },
];

const identityPressures = [
  ["I can show my Jewish identity in public without fear", 63, 18.8, "Disagree", "agree", "coral"],
  ["Jewish symbols in public spaces are likely to be targeted for vandalism", 84.6, 5.4, "Agree", "disagree", "blue"],
  ["Recognizably Jewish individuals and institutions require enhanced security", 93.6, 1.5, "Agree", "disagree", "blue"],
  ["We must immediately improve security in Jewish community settings", 89.6, 3.3, "Agree", "disagree", "gold"],
];

const outlookStats = [
  ["The next generation will experience more antisemitism", 72.9, "Agree", "coral"],
  ["Adversaries are overwhelming community capacity", 67.7, "Agree", "coral"],
  ["The Jewish people will overcome today\u2019s threats", 53.4, "Agree", "blue"],
  ["United with allies, the community is stronger than opponents", 48.5, "Agree", "blue"],
  ["Dangers will shrink in the coming years", 69.7, "Disagree", "gold"],
];

const institutionRatings = [
  { name: "B\u2019nai Brith Canada", values: [9.4, 8.0, 16.2, 32.4, 28.0, 6.0] },
  { name: "Friends of Simon Wiesenthal Center", values: [12.2, 7.8, 23.8, 24.0, 19.2, 13.0] },
  { name: "The Abraham Global Peace Initiative (AGPI)", values: [10.2, 6.0, 24.4, 17.0, 11.8, 30.6] },
  { name: "Jewish Security Network (JSN)", values: [17.2, 4.4, 21.0, 20.6, 10.0, 26.8] },
  { name: "Canadian Jewish Political Affairs Committee (CJPAC)", values: [16.2, 8.4, 25.8, 23.4, 7.6, 18.6] },
  { name: "Centre for Israel & Jewish Affairs (CIJA)", values: [23.8, 9.0, 17.4, 29.8, 13.2, 6.8] },
  { name: "UJA Federation", values: [24.4, 11.4, 18.8, 26.2, 12.6, 6.6] },
];

const priorityPerformance = [
  { label: "Security preparedness", priority: 92, performance: 26, size: 90, note: "90.2% disagreed that the community was well prepared after October 7." },
  { label: "Public communications", priority: 78, performance: 34, size: 68, note: "Respondents call for clearer strategy, visibility, and measurable outcomes." },
  { label: "Community mobilization", priority: 82, performance: 58, size: 64, note: "Grassroots groups are perceived as stronger at mobilizing the community." },
  { label: "Policy and legislation", priority: 64, performance: 70, size: 58, note: "Legacy organizations are perceived as stronger in policy and legislation." },
  { label: "Unity and belonging", priority: 76, performance: 67, size: 70, note: "Grassroots efforts lead the weighted impact score for unity and belonging." },
  { label: "Transparency and allocation", priority: 88, performance: 30, size: 80, note: "Funding disparity raises questions about efficiency and impact." },
];

const comparisonScores = [
  ["Policy & legislation", 29.7, 70.3],
  ["Media coverage", 41, 59],
  ["Community safety", 47.5, 52.5],
  ["Education-system support", 52.6, 47.4],
  ["Community mobilization", 57.1, 42.9],
  ["Supportive public opinion", 58.9, 41.1],
  ["Unity & belonging", 67.3, 32.7],
];

const rawComparisonScores = [
  ["Improves policies & legislation", 12.3, 8.1, 23.8, 10.7, 33.3, 11.9],
  ["Wins favorable media coverage", 11.5, 12.9, 28.5, 10.1, 20.8, 16.2],
  ["Improves community safety", 18.8, 7.7, 31.7, 8.9, 20.6, 12.3],
  ["Wins support in the education system", 21.0, 9.3, 25.0, 8.1, 19.0, 17.6],
  ["Effectively mobilizes the Jewish community", 16.2, 11.3, 43.2, 7.5, 12.7, 9.1],
  ["Wins supportive public opinion", 14.9, 15.0, 36.6, 6.7, 12.3, 14.5],
  ["Increases Jewish community unity & belonging", 17.2, 9.9, 51.5, 5.0, 8.3, 8.1],
];

const fundingDisparity = [
  ["Legacy get nearly all funding; grassroots almost none", 34.7],
  ["Legacy get much more funding; grassroots far less", 44.9],
  ["Both receive an equal share", 1.1],
  ["Grassroots get much more; legacy far less", 0.2],
  ["Grassroots get nearly all funding; legacy almost none", 0.2],
  ["No answer", 18.9],
];

const fightingSpirit = [
  ["Future generations will look back with gratitude if antisemitism is confronted successfully", 81.3],
  ["Empowered grassroots initiatives will play a critical role", 80.6],
  ["Today\u2019s fight is another chapter in Jewish history", 76.0],
  ["Fighting antisemitism contributes to meaning and purpose", 75.8],
  ["Jews are growing stronger as a people", 68.9],
];

const identityDebate = [
  ["Agree", 33.3, "cis-satisfied"],
  ["Disagree", 31.8, "cis-unsatisfied"],
  ["Neutral", 29.3, "cis-neutral"],
  ["Do not know", 5.6, "cis-unknown"],
];

const leadershipThemes = [
  ["Internal cohesion", "Support for grassroots received particularly low ratings, while trust and collaboration earned only moderate marks."],
  ["External relations", "Satisfaction was low to moderately low, especially for relationships with influential institutions, allies, and public brand communications."],
  ["Offense", "Confronting threats and holding adversaries accountable drew moderately low satisfaction."],
  ["Defense", "Defensive actions were somewhat stronger, hovering closer to neutral than other leadership roles."],
  ["Innovation", "Respondents reported fairly low satisfaction with the development of new strategies for the current threat environment."],
];

const actionConnections = [
  ["Follow news and updates", 81.1],
  ["Participate in events and programs", 62.6],
  ["Donate to initiatives", 56.4],
  ["Fight independently against antisemitism", 49.8],
  ["Volunteer for initiatives", 40.0],
  ["Work in an organization fighting antisemitism", 12.6],
  ["Lead an organization fighting antisemitism", 10.6],
];

const pathForward = [
  ["Measure annually", "Institutionalize the Community Impact Study as an annual benchmark with year-over-year progress tracking.", BarChart3],
  ["Coordinate the ecosystem", "Define roles across legacy institutions, grassroots groups, donors, and volunteers based on demonstrated strengths.", Network],
  ["Fund visible impact", "Equip donors with decision-grade data so capital can flow toward measurable outcomes, not just activity.", HeartHandshake],
  ["Mobilize advocates", "Develop a broader pipeline of trained community responders and leaders ready to act at every level.", Megaphone],
  ["Improve transparency", "Communicate priorities, resource allocation, and outcomes in clear language that rebuilds confidence.", FileText],
];

const lojCards = [
  ["Protect", "Safety Infrastructure & Preparedness", Shield, ["Security capability built through JFORCE support.", "National framework launched through the Community Safety Council of Canada.", "Bubble Zone protections expanded across 5 Ontario cities."]],
  ["Empower", "Training & Community Resilience", Sparkles, ["Scalable skills and preparedness education portal built.", "1,200+ Magen Academy graduates trained.", "Grassroots program expansion underway across Canada."]],
  ["Amplify", "Advocacy, Awareness & Coordination", Megaphone, ["BubbleZones.ca created for community education and adoption.", "Faith-based organizations enabled to access protective frameworks.", "Coordinated critical communications strategy advancing through AMP Initiative."]],
];

const formMailto = "mailto:hello@lionsofjudah.org?subject=Community%20Impact%20Study%20interest";

function useInView(options = {}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      setVisible(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.18, ...options },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [options]);

  return [ref, visible];
}

function ScrollReveal({ children, className = "", as: Tag = "div" }) {
  const [ref, visible] = useInView();
  return (
    <Tag ref={ref} className={`${className} cis-reveal ${visible ? "is-visible" : ""}`}>
      {children}
    </Tag>
  );
}

function AnimatedStat({ value, suffix = "", decimals, label, tone }) {
  const [ref, visible] = useInView();
  const [display, setDisplay] = useState(0);
  const places = decimals ?? (Number.isInteger(value) ? 0 : 1);

  useEffect(() => {
    if (!visible) return undefined;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      setDisplay(value);
      return undefined;
    }

    let frame;
    const start = performance.now();
    const duration = 850;
    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(value * eased);
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [value, visible]);

  const number = places === 0 ? Math.round(display).toLocaleString() : display.toFixed(places);

  return (
    <div ref={ref} className={`cis-stat-card cis-stat-${tone}`}>
      <strong>{number}{suffix}</strong>
      <span>{label}</span>
    </div>
  );
}

function SectionHeader({ eyebrow, title, copy, id }) {
  return (
    <ScrollReveal className="cis-section-header" id={id}>
      <p className="cis-eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {copy ? <p>{copy}</p> : null}
    </ScrollReveal>
  );
}

function Takeaway({ children }) {
  return <ScrollReveal className="cis-takeaway" as="p">{children}</ScrollReveal>;
}

function MetricBar({ label, value, response, caption }) {
  return (
    <ScrollReveal className="cis-metric-bar" as="article">
      <div>
        <h3>{label}</h3>
        <p>{caption}</p>
      </div>
      <div className="cis-bar-shell" aria-label={`${value}% ${response}`}>
        <span style={{ "--bar-width": `${value}%` }} />
        <strong>{value}% {response}</strong>
      </div>
    </ScrollReveal>
  );
}

function PercentRow({ label, value, suffix = "" }) {
  return (
    <article className="cis-addition-row">
      <div>
        <span>{label}</span>
        <strong>{value.toFixed(1)}%{suffix}</strong>
      </div>
      <div className="cis-addition-bar" aria-label={`${label}: ${value}%${suffix}`}>
        <i style={{ "--bar-width": `${value}%` }} />
      </div>
    </article>
  );
}

function InteractiveCanadaMap() {
  const [active, setActive] = useState(cityPins[3]);

  return (
    <div className="cis-map-card cis-map-interactive" aria-label="Interactive Canada participation map">
      <div className="cis-map-outline" aria-hidden="true">CANADA</div>
      {cityPins.map((pin) => (
        <button
          className={`cis-map-star ${pin.className}`}
          key={pin.city}
          type="button"
          onFocus={() => setActive(pin)}
          onMouseEnter={() => setActive(pin)}
          aria-label={`${pin.city}: ${pin.note}`}
        >
          ✡
        </button>
      ))}
      <div className="cis-map-tooltip" role="status">
        <strong>{active.city}</strong>
        <span>{active.note}</span>
      </div>
    </div>
  );
}

function DemographicBar({ item }) {
  return (
    <div className="cis-demo-bar-row">
      <div>
        <span>{item.label}</span>
        <strong>{item.value}%</strong>
      </div>
      <div className="cis-demo-bar-shell" aria-label={`${item.label}: ${item.value}%`}>
        <span style={{ width: `${item.value}%`, background: item.color }} />
      </div>
    </div>
  );
}

function AgeBar({ label, value }) {
  return (
    <div className="cis-age-row">
      <span>{label}</span>
      <div className="cis-age-bar-shell" aria-label={`${label}: ${value}%`}>
        <i style={{ width: `${Math.max(value * 6, 3)}%` }} />
      </div>
      <strong>{value.toFixed(1)}%</strong>
    </div>
  );
}

function WordCloudCard({ cloud }) {
  return (
    <ScrollReveal className="cis-word-card" as="article">
      <div className="cis-word-card-copy">
        <h3>{cloud.title}</h3>
        <p>{cloud.alt}</p>
      </div>
      <img src={assetPath(cloud.image)} alt={cloud.alt} loading="lazy" />
      <div className="cis-word-voice">
        <strong>Respondent voice</strong>
        <p>{cloud.quote}</p>
      </div>
      <ul aria-label={`${cloud.title} theme filters`}>
        {cloud.chips.map((chip) => <li key={chip}>{chip}</li>)}
      </ul>
    </ScrollReveal>
  );
}

function IdentityGauge({ item }) {
  const [label, primary, secondary, primaryLabel, secondaryLabel, tone] = item;
  return (
    <ScrollReveal className="cis-gauge-card" as="article">
      <div className="cis-gauge-heading">
        <h3>{label}</h3>
        <strong>{primary}% <span>{primaryLabel}</span></strong>
      </div>
      <div className={`cis-gauge cis-gauge-${tone}`}>
        <span style={{ "--bar-width": `${primary}%` }} />
      </div>
      <p><strong>{primary}%</strong> {primaryLabel.toLowerCase()}; <strong>{secondary}%</strong> {secondaryLabel}.</p>
    </ScrollReveal>
  );
}

function LikertStackedBar({ org }) {
  const [one, two, three, four, five, unknown] = org.values;
  const unsatisfied = one + two;
  const satisfied = four + five;
  const segments = [
    [one, "cis-score-1", "1. Not satisfied"],
    [two, "cis-score-2", "2"],
    [three, "cis-score-3", "3. Indifferent"],
    [four, "cis-score-4", "4"],
    [five, "cis-score-5", "5. Extremely satisfied"],
    [unknown, "cis-score-dk", "Do not know"],
  ];

  return (
    <article className="cis-org-row cis-likert-row">
      <div className="cis-org-title">
        <h3>{org.name}</h3>
        <p>{satisfied.toFixed(1)}% satisfied · {unsatisfied.toFixed(1)}% not satisfied · {unknown.toFixed(1)}% do not know</p>
      </div>
      <div className="cis-stacked-bar" aria-label={`${org.name} full satisfaction distribution`}>
        {segments.map(([value, className, label]) => (
          <span key={label} className={className} style={{ width: `${value}%` }} title={`${label}: ${value}%`} />
        ))}
      </div>
    </article>
  );
}

function PriorityPerformanceChart() {
  const [active, setActive] = useState(priorityPerformance[0]);

  return (
    <div className="cis-bubble-chart-wrap">
      <svg className="cis-bubble-chart" viewBox="0 0 100 100" role="img" aria-label="Priority versus performance bubble chart">
        <line x1="12" y1="86" x2="92" y2="86" />
        <line x1="12" y1="86" x2="12" y2="8" />
        <text x="52" y="98">Performance / confidence</text>
        <text x="2" y="46" transform="rotate(-90 2 46)">Priority</text>
        {priorityPerformance.map((item) => {
          const x = 12 + item.performance * 0.8;
          const y = 86 - item.priority * 0.78;
          return (
            <g key={item.label}>
              <button
                aria-label={`${item.label}: ${item.priority}% priority and ${item.performance}% performance. ${item.note}`}
                onFocus={() => setActive(item)}
                onMouseEnter={() => setActive(item)}
              >
                <circle cx={x} cy={y} r={4 + item.size / 24} />
              </button>
            </g>
          );
        })}
      </svg>
      <article className="cis-bubble-note">
        <h3>{active.label}</h3>
        <p>{active.note}</p>
      </article>
    </div>
  );
}

function ComparisonBar({ row }) {
  const [label, grassroots, legacy] = row;
  return (
    <article className="cis-comparison-row">
      <h3>{label}</h3>
      <div className="cis-comparison-bar">
        <span className="cis-grassroots" style={{ "--bar-width": `${grassroots}%` }}>{grassroots}%</span>
        <span className="cis-legacy" style={{ "--bar-width": `${legacy}%` }}>{legacy}%</span>
      </div>
    </article>
  );
}

function ExpandableDataPanel({ title, children }) {
  return (
    <details className="cis-rating-details">
      <summary>{title}</summary>
      <div className="cis-table-scroll">{children}</div>
    </details>
  );
}

function RawComparisonTable() {
  return (
    <table>
      <thead>
        <tr>
          <th>Activity</th>
          <th>Grassroots</th>
          <th>Lean grassroots</th>
          <th>Equal</th>
          <th>Lean legacy</th>
          <th>Legacy</th>
          <th>DK</th>
        </tr>
      </thead>
      <tbody>
        {rawComparisonScores.map(([activity, grassroots, leanGrassroots, equal, leanLegacy, legacy, unknown]) => (
          <tr key={activity}>
            <th>{activity}</th>
            <td>{grassroots.toFixed(1)}%</td>
            <td>{leanGrassroots.toFixed(1)}%</td>
            <td>{equal.toFixed(1)}%</td>
            <td>{leanLegacy.toFixed(1)}%</td>
            <td>{legacy.toFixed(1)}%</td>
            <td>{unknown.toFixed(1)}%</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function FundingDisparityVisual() {
  return (
    <div className="cis-funding-grid">
      <article className="cis-funding-feature">
        <strong>79.6%</strong>
        <p>say legacy organizations get nearly all or much more funding while grassroots receive almost none or far less.</p>
        <div className="cis-funding-pyramid" aria-hidden="true">
          <span className="cis-pyramid-legacy">Legacy funding concentration</span>
          <span className="cis-pyramid-grassroots">Grassroots share</span>
        </div>
      </article>
      <div className="cis-funding-list">
        {fundingDisparity.map(([label, value]) => <PercentRow key={label} label={label} value={value} />)}
      </div>
    </div>
  );
}

function LeadCaptureForm() {
  return (
    <form className="cis-lead-form" action={formMailto} method="post" encType="text/plain">
      <div className="cis-form-grid">
        <label>First Name<input name="first-name" autoComplete="given-name" required /></label>
        <label>Last Name<input name="last-name" autoComplete="family-name" required /></label>
        <label>Email<input name="email" type="email" autoComplete="email" required /></label>
        <label>Contact #<input name="phone" type="tel" autoComplete="tel" /></label>
        <label className="cis-form-full">Organization <span>(optional)</span><input name="organization" autoComplete="organization" /></label>
      </div>
      <fieldset>
        <legend>Options of interest</legend>
        <label><input type="checkbox" name="interest" value="Sign up for next year's study" />Sign up for next year&rsquo;s study</label>
        <label><input type="checkbox" name="interest" value="Request the full report" />Request the full report</label>
      </fieldset>
      <label className="cis-question-field">Submit questions for next year<textarea name="questions" rows="4" /></label>
      <p className="cis-form-note">Form integration can be connected to a CRM or hosted form provider; this draft uses an email fallback to hello@lionsofjudah.org.</p>
      <button type="submit" className="cis-button cis-button-primary">Submit interest <ChevronRight size={18} /></button>
    </form>
  );
}

function JumpNav() {
  const options = useMemo(() => navItems, []);
  const onChange = (event) => {
    const target = document.querySelector(event.target.value);
    if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="cis-progress-nav" aria-label="Report section navigation">
      <div className="cis-progress-nav-inner">
        {navItems.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
      </div>
      <label className="cis-mobile-jump">
        <span>Jump to</span>
        <select onChange={onChange} defaultValue="">
          <option value="" disabled>Choose section</option>
          {options.map((item) => <option key={item.href} value={item.href}>{item.label}</option>)}
        </select>
      </label>
    </div>
  );
}

export default function InteractiveReportSite() {
  return (
    <main className="cis-site cis-interactive-site">
      <header className="cis-nav">
        <a href="#top" className="cis-brand" aria-label="Community Impact Report home">
          <img src={assetPath("assets/logos/loj-logo.png")} alt="" aria-hidden="true" />
          <span>Community Impact Report</span>
        </a>
        <nav aria-label="Primary navigation">
          {navItems.slice(0, 5).map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
        </nav>
      </header>
      <JumpNav />

      <section className="cis-hero" id="top">
        <div className="cis-hero-grid">
          <div className="cis-hero-copy">
            <p className="cis-eyebrow">CIS-2025-26 Executive Report</p>
            <h1 className="cis-visually-hidden">Community Impact Report 2025-26</h1>
            <img className="cis-hero-logo" src={assetPath("assets/logos/cir-logo.png")} alt="2025-26 Community Impact Report" />
            <p className="cis-hero-slogan">What Gets Measured&hellip; Gets Improved.</p>
            <p className="cis-hero-intro">A national snapshot of Jewish Canadian priorities, institutional trust, safety and community resilience.</p>
            <div className="cis-hero-actions">
              <a href="#action" className="cis-button cis-button-primary">Take action <ChevronRight size={18} /></a>
              <a href="#safety" className="cis-button cis-button-secondary">Explore findings <ExternalLink size={17} /></a>
            </div>
          </div>
          <div className="cis-hero-panel">
            <img src={assetPath("assets/logos/loj-logo.png")} alt="Lions of Judah" />
            <strong>Protect. Empower. Amplify.</strong>
            <span>Independent community study conducted with Logos Insights.</span>
          </div>
        </div>
        <div className="cis-stat-grid">
          {heroStats.map((stat) => <AnimatedStat key={stat.label} {...stat} />)}
        </div>
      </section>

      <section className="cis-section cis-intro" id="findings">
        <SectionHeader eyebrow="Why this matters" title="From anecdotes to evidence, from concern to coordinated action." copy="The 2025-26 Community Impact Report underscores the importance of this moment: heightened antisemitism, strained institutional capacity, and a community asking for clearer priorities, visible results, and shared accountability." />
        <p className="cis-section-lede">Achieving these critical goals requires impartial, data-driven analysis of the challenges we face. LOJ engaged Logos Insights, a professional research firm specializing in campaign impact analysis for multi-national organizations and NGOs.</p>
        <div className="cis-card-grid cis-three">
          {pillars.map(([title, copy, Icon]) => (
            <ScrollReveal className="cis-icon-card" as="article" key={title}><Icon /><h3>{title}</h3><p>{copy}</p></ScrollReveal>
          ))}
        </div>
        <div className="cis-report-callout">
          <strong>Need the full report?</strong>
          <p>Request the full executive report or methodology package for deeper tables, definitions, and survey context.</p>
          <a href="mailto:hello@lionsofjudah.org?subject=Full%20Community%20Impact%20Report%20Request">Request report <ChevronRight size={16} /></a>
        </div>
      </section>

      <section className="cis-section cis-audience">
        <SectionHeader eyebrow="Our national voice" title="A broad grassroots consultation of major Jewish centres across Canada." copy="Data driven, professionally conducted and designed to empower." />
        <div className="cis-map-grid">
          <InteractiveCanadaMap />
          <div className="cis-audience-panel">
            <h3>Major cities represented</h3>
            <div className="cis-chip-grid">{cityPins.map((pin) => <span key={pin.city}>{pin.city}</span>)}</div>
            <div className="cis-demo-chart"><h4>Participation by gender</h4>{sexParticipation.map((item) => <DemographicBar item={item} key={item.label} />)}</div>
            <div className="cis-age-chart"><h4>Age demographics</h4>{ageDemographics.map(([label, value]) => <AgeBar key={label} label={label} value={value} />)}</div>
          </div>
        </div>
      </section>

      <section className="cis-section cis-priorities">
        <SectionHeader eyebrow="Community agenda" title="The clearest priority is safety." copy="Respondents ranked immediate safety and more effective methods for combatting antisemitism ahead of broader advocacy, communications, and research needs." />
        <div className="cis-priority-list">
          {priorities.map(([title, copy], index) => (
            <ScrollReveal key={title} className="cis-priority-item" as="article"><span>{String(index + 1).padStart(2, "0")}</span><div><h3>{title}</h3><p>{copy}</p></div></ScrollReveal>
          ))}
        </div>
      </section>

      <section className="cis-section cis-safety cis-section-band" id="safety">
        <SectionHeader eyebrow="Lived experience" title="The safety signal is stark." copy="The strongest findings show a community that feels less safe and underprepared for the threats it has faced." />
        <div className="cis-metric-grid">{safetyStats.map(([label, value, response, caption]) => <MetricBar key={label} label={label} value={value} response={response} caption={caption} />)}</div>
        <Takeaway>The community&rsquo;s fear and exhaustion are part of the threat environment itself, not background noise. Safety strategy needs to be evaluated by perceived impact, not activity alone.</Takeaway>
      </section>

      <section className="cis-section cis-word-clouds" id="lived-experience">
        <SectionHeader eyebrow="The language of lived experience" title="Community sentiment in respondents&rsquo; own words." copy="Word clouds become more useful when paired with themes and short respondent voice cards." />
        <div className="cis-word-grid">{wordClouds.map((cloud) => <WordCloudCard cloud={cloud} key={cloud.title} />)}</div>
      </section>

      <section className="cis-section cis-identity">
        <SectionHeader eyebrow="Jewish identity in public" title="Threat perception is changing everyday visibility." copy="The report points to pressure on recognizably Jewish symbols, institutions, individuals, and ordinary expressions of Jewish identity." />
        <div className="cis-gauge-grid">{identityPressures.map((item) => <IdentityGauge item={item} key={item[0]} />)}</div>
      </section>

      <section className="cis-section cis-outlook cis-section-band" id="outlook">
        <SectionHeader eyebrow="Forward outlook" title="Concern is high, but resilience remains visible." copy="Respondents see the threat environment worsening while still holding onto collective strength, allyship, and future responsibility." />
        <div className="cis-outlook-grid">{outlookStats.map(([label, value, response, tone]) => <ScrollReveal className={`cis-outlook-card cis-outlook-${tone}`} as="article" key={label}><strong>{value.toFixed(1)}%</strong><h3>{label}</h3><p>{response}</p></ScrollReveal>)}</div>
      </section>

      <section className="cis-section cis-spirit">
        <SectionHeader eyebrow="Collective fighting spirit" title="Hope is not passive; respondents connect it to action." copy="The hope findings locate resilience in responsibility, grassroots empowerment, meaning, and future generations." />
        <div className="cis-spirit-grid">
          <div className="cis-spirit-bars">{fightingSpirit.map(([label, value]) => <PercentRow key={label} label={label} value={value} suffix=" agree" />)}</div>
          <article className="cis-identity-debate"><h3>Jewish identity as public provocation</h3><p>Respondents were more split on making Jewish identity more obvious to provoke discussion or debate.</p>{identityDebate.map(([label, value, colorClass]) => <div className="cis-debate-row" key={label}><span>{label}</span><div><i className={colorClass} style={{ width: `${value}%` }} /></div><strong>{value.toFixed(1)}%</strong></div>)}</article>
        </div>
      </section>

      <section className="cis-section cis-institutions" id="institutions">
        <SectionHeader eyebrow="Institutional satisfaction" title="Confidence is mixed, and visibility gaps matter." copy="The data compares community-reported satisfaction with named organizations. This should be read as perception data, not an institutional audit." />
        <div className="cis-legend cis-scale-legend"><span><i className="cis-score-1" /> 1</span><span><i className="cis-score-2" /> 2</span><span><i className="cis-score-3" /> 3</span><span><i className="cis-score-4" /> 4</span><span><i className="cis-score-5" /> 5</span><span><i className="cis-score-dk" /> Do not know</span></div>
        <div className="cis-org-list">{institutionRatings.map((org) => <LikertStackedBar org={org} key={org.name} />)}</div>
        <Takeaway>B&rsquo;nai Brith Canada reflects the strongest satisfaction profile in this dataset, while UJA Federation registers the highest combined dissatisfaction. High &ldquo;do not know&rdquo; responses point to a broader visibility gap.</Takeaway>
        <section className="cis-leadership">
          <h3 className="cis-subsection-title">Community-wide leadership themes</h3>
          <div className="cis-leadership-grid">{leadershipThemes.map(([title, copy]) => <article className="cis-leadership-card" key={title}><h3>{title}</h3><p>{copy}</p></article>)}</div>
        </section>
      </section>

      <section className="cis-section cis-priority-performance cis-section-band">
        <SectionHeader eyebrow="Priority vs performance" title="Higher-priority needs show lower confidence in delivery." copy="Bubble size represents urgency. The strongest pattern is a mismatch between what the community considers important and where it sees strong delivery." />
        <PriorityPerformanceChart />
        <Takeaway>The more important an area is to respondents, the less confidence they report in how legacy organizations are performing there.</Takeaway>
      </section>

      <section className="cis-section cis-comparison" id="collective-impact">
        <SectionHeader eyebrow="On-the-ground impact: legacy and grassroots" title="The opportunity is complementary strength, not a zero-sum competition." copy="Weighted scores show legacy organizations perceived as stronger in formal policy and media work, while grassroots efforts are perceived as stronger in mobilization, public opinion, unity, and belonging." />
        <div className="cis-comparison-legend"><span className="cis-grassroots-label">Grassroots perceived stronger</span><span className="cis-legacy-label">Legacy perceived stronger</span></div>
        <div className="cis-comparison-list">{comparisonScores.map((row) => <ComparisonBar row={row} key={row[0]} />)}</div>
        <ExpandableDataPanel title="View weighted methodology and raw response data"><p className="cis-method-copy">Weighted scores count extreme responses as 2 points and lean responses as 1 point, then compare proportional grassroots and legacy weights.</p><RawComparisonTable /></ExpandableDataPanel>
        <Takeaway>Equal or near-equal grassroots impact despite major resource disparity suggests an efficiency question: how much more could grassroots initiatives achieve with structure, guidance, and resources?</Takeaway>
      </section>

      <section className="cis-section cis-funding cis-section-band" id="funding">
        <SectionHeader eyebrow="Resource allocation" title="Funding disparity is part of the impact story." copy="A combined 79.6% say large established organizations receive nearly all or much more funding while grassroots efforts receive almost none or far less." />
        <FundingDisparityVisual />
        <Takeaway>The report points toward a more balanced, integrated, and efficient approach to tackling community needs, rather than treating any one organization as the sole voice or solution.</Takeaway>
      </section>

      <section className="cis-section cis-path" id="path-forward">
        <SectionHeader eyebrow="Path forward" title="Turn the findings into measurable community action." copy="This marks the completion of Stage One of the 2025-26 Community Impact Report, delivering a clear, community-grounded understanding of where things stand today." />
        <div className="cis-card-grid cis-path-grid">{pathForward.map(([title, copy, Icon]) => <ScrollReveal className="cis-action-card" as="article" key={title}><Icon /><h3>{title}</h3><p>{copy}</p></ScrollReveal>)}</div>
      </section>

      <section className="cis-section cis-action-readiness">
        <SectionHeader eyebrow="Personal connections to action" title="The audience is not only concerned; it is reachable and ready." copy="Respondents described roles ranging from following news to donating, volunteering, joining events, and taking independent action." />
        <div className="cis-action-funnel">{actionConnections.map(([label, value]) => <PercentRow key={label} label={label} value={value} suffix=" yes" />)}</div>
        <Takeaway>Action readiness is already present. The opportunity is to turn participation into coordinated, measurable community capacity.</Takeaway>
      </section>

      <section className="cis-section cis-loj">
        <SectionHeader eyebrow="Introducing the Lions of Judah (LOJ)" title="A community think tank&hellip; with teeth." copy="Established to meet the evolving needs of the diaspora Jewish community in a post October 7 reality, LOJ performs as a think tank, conducting rigorous, ground-level research to establish goals, identify strengths, expose critical gaps, and align resources and efforts to have greatest impact." />
        <p className="cis-loj-lede">By surfacing critical, real community insights, LOJ is positioned not just as a research body, but as a grassroots solutions accelerator driving toward a safer, stronger, and more coordinated Jewish Canada.</p>
        <div className="cis-card-grid cis-three">{lojCards.map(([title, subtitle, Icon, bullets]) => <article className="cis-loj-card" key={title}><Icon /><h3>{title}</h3><strong>{subtitle}</strong><ul>{bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul></article>)}</div>
      </section>

      <section className="cis-section cis-cta" id="action">
        <div>
          <p className="cis-eyebrow">Calls to action</p>
          <h2>Help shape the next year of community impact.</h2>
          <p>Join the next study, submit questions, collaborate, or read the methodology behind the 2025-26 Community Impact Study.</p>
          <div className="cis-cta-links"><a href="https://lionsofjudah.org/support-loj" target="_blank" rel="noreferrer">Support or collaborate <ExternalLink size={15} /></a><a href="https://lionsofjudah.org/research-statement-methods" target="_blank" rel="noreferrer">Read the methodology <BookOpen size={15} /></a><a href="https://lionsofjudah.org" target="_blank" rel="noreferrer">Learn more about LOJ <ExternalLink size={15} /></a><a href="mailto:hello@lionsofjudah.org"><Mail size={15} /> hello@lionsofjudah.org</a></div>
        </div>
        <LeadCaptureForm />
      </section>

      <footer className="cis-footer">
        <div><strong>Community Impact Report 2025-26</strong><p>The 2025-26 Community Impact Study, Report and Strategic Guidance were commissioned by the Lions of Judah and supported by thousands of community members who shared perspectives on safety, advocacy, education, communal structures, lived experiences, concerns, and aspirations.</p><p>The Lions of Judah express deep gratitude to professionals, volunteers, organizational partners, and contributors: AK, BC, C, CG, DF, DS, DW, LG, MR, & TMG.</p></div>
        <div className="cis-footer-legal"><p>© 2026 Lions of Judah Org. All rights reserved. Content is intellectual property of Lions of Judah, partners, or affiliates unless otherwise stated.</p><p>Permission is granted to reference or share excerpts for non-commercial purposes with clear attribution. No commercial reproduction, modification, or distribution without prior written consent.</p><a href="mailto:hello@lionsofjudah.org"><Mail size={16} /> hello@lionsofjudah.org</a><a href="https://lionsofjudah.org/research-statement-methods" target="_blank" rel="noreferrer"><Download size={16} /> Research methods</a></div>
      </footer>
    </main>
  );
}
