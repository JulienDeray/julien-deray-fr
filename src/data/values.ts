export interface Principle {
  icon: string;
  title: string;
  body: string;
}

export interface Mantra {
  icon: string;
  title: string;
}

// "How I Operate" — aviation-inspired operational discipline, the signature thread.
export const operate: Principle[] = [
  {
    icon: '🧭',
    title: 'Crew Resource Management',
    body: 'Authority is clear, but any voice can flag a risk. Psychological safety is an operational requirement, not a perk.',
  },
  {
    icon: '📋',
    title: 'Structured Briefings',
    body: 'Before we fly, we brief. Shared intent, known risks, clear roles — so execution is fast and surprises are rare.',
  },
  {
    icon: '🔁',
    title: 'Blameless Debriefs',
    body: 'After every flight, we debrief the system, not the person. Incidents are gifts: the cheapest way to learn.',
  },
  {
    icon: '⚖️',
    title: 'Just Culture',
    body: 'A line between honest mistakes and recklessness. People report freely because reporting is rewarded, not punished.',
  },
  {
    icon: '📈',
    title: 'Continuous Improvement',
    body: 'Small, compounding gains over heroic rewrites. Measure, adjust, repeat — the boring path to high performance.',
  },
];

// Personal mantras.
export const mantras: Mantra[] = [
  { icon: '⚔️', title: 'Discipline = Freedom' },
  { icon: '🏁', title: 'Stop starting, start finishing' },
  { icon: '🪞', title: 'How you do anything is how you do everything' },
  { icon: '🎭', title: 'Ego is the enemy' },
];
