export const CATEGORIES = [
  "Family",
  "Friendship",
  "Relationship",
  "Workplace",
  "Money",
  "Trust",
  "Drama",
  "Emotional stories",
] as const;

export type StoryCategory = (typeof CATEGORIES)[number];

export type Story = {
  id: string;
  slug: string;
  title: string;
  intro: string;
  story: string;
  analysis: string;
  lesson: string;
  question: string;
  category: StoryCategory;
};

export const STORIES: Story[] = [
  {
    id: "s1",
    slug: "helped-coworker-get-promoted-took-credit",
    title:
      "I Helped My Coworker Get Promoted… Then They Took Credit for Everything I Did",
    intro:
      "I thought I was being a good teammate. Turns out, I was just making it easier for them to replace me.",
    story:
      "When my coworker first joined, they were completely lost. New systems, deadlines, office politics—it was a lot. I felt bad, so I started helping. At first, it was small things. Explaining workflows. Fixing a few mistakes before our manager noticed. Then it became more. “Hey, can you quickly check this?” turned into me basically rewriting entire reports. One night, we stayed late finishing a major project. Or at least, that’s what it looked like. In reality, I was doing most of it while they watched and asked questions. Before leaving, they smiled and said, “I seriously couldn’t have done this without you.” I believed them.\n\nA few weeks later, there was a big meeting. That same project was being presented to senior management. I sat there, expecting at least a small mention. Instead, they stood confidently and walked everyone through my ideas. “My strategy was to approach it this way…” “My solution was to restructure the process…” I remember staring at the screen, recognizing every single slide.\n\nThey got promoted that month. Later, when I casually said, “You could’ve at least mentioned I helped,” they laughed. “Come on, it was a team effort.” But somehow, only one of us benefited.",
    analysis:
      "This is a classic case of asymmetric contribution vs. recognition. In competitive environments, people may prioritize visibility over fairness. Also, informal help often goes undocumented—making it easy to erase.",
    lesson:
      "Helping is good—but make your contributions visible. Silent effort is often invisible effort.",
    question: "Would you confront them publicly—or let your work speak next time?",
    category: "Workplace",
  },
  {
    id: "s2",
    slug: "roommate-used-emergency-savings-acted-normal",
    title: "My Roommate Used My Emergency Savings… and Acted Like It Was Normal",
    intro: "I thought we trusted each other. I didn’t think that meant access to my money.",
    story:
      "I kept my emergency cash in a box inside my closet. Not hidden, exactly—but not something anyone should touch. One evening, I noticed it looked thinner. At first, I told myself I was imagining it. But the next day, I counted it. A large chunk was missing.\n\nMy stomach dropped. I waited until my roommate got home. Tried to sound calm. “Hey… did you take any money from my room?” They didn’t even hesitate. “Yeah, I needed it. I was gonna tell you.” Just like that.\n\nI blinked. “You… what?”\n\n“I’ll pay you back, don’t worry,” they said, scrolling on their phone like we were discussing groceries.\n\n“What did you need it for?”\n\nThey shrugged. “Stuff. I’ll handle it.”\n\nLater I found out it wasn’t for rent, or an emergency. It was for a trip. That’s when something shifted. It wasn’t just about the money anymore—it was the assumption that they were allowed.",
    analysis:
      "This reflects boundary violation combined with entitlement. The lack of urgency or apology shows a mismatch in values around ownership and respect.",
    lesson: "Trust doesn’t mean access. Financial boundaries should always be explicit.",
    question: "Would you involve legal action—or just cut them off?",
    category: "Money",
  },
  {
    id: "s3",
    slug: "gave-up-dream-job-family-didnt-notice",
    title: "I Gave Up My Dream Job for My Family… They Didn’t Even Notice",
    intro: "I thought sacrifice meant something. Apparently, it doesn’t always.",
    story:
      "I got the email at 2 AM. It was everything I’d worked for—a job offer in another city, better pay, better growth, everything. I stared at the screen for a long time. Then I thought about home. Things weren’t great. Family issues, health problems, constant stress. I knew leaving would make it harder for them. So I declined. I told myself, this is the right thing to do.\n\nMonths passed. Things slowly stabilized. One evening at dinner, someone casually said, “You should’ve done something bigger with your career by now.” I actually laughed, thinking it was a joke. It wasn’t.\n\nNo one remembered. No one knew. Or maybe… no one cared.\n\nThat was the moment I realized—my sacrifice only existed to me.",
    analysis:
      "Uncommunicated sacrifices often go unrecognized and unvalued. People judge based on visible outcomes, not hidden decisions.",
    lesson:
      "Don’t expect silent sacrifices to be acknowledged. Make choices you can live with—even if no one notices.",
    question: "Would you make the same decision again?",
    category: "Family",
  },
  {
    id: "s4",
    slug: "friend-invited-trip-made-me-pay-everything",
    title: "My Friend Invited Me on a Trip… Then Made Me Pay for Everything",
    intro:
      "It started as a fun getaway. It ended with me questioning the entire friendship.",
    story:
      "“Let’s take a trip,” they said. “It’ll be fun,” they said. And it was—at first.\n\nUntil the first bill came. “Oh, I forgot my wallet. Can you cover this?” No big deal. Then it happened again. And again. Fuel. Food. Hotel. Each time, there was an excuse. “I’ll send it later.” “My app isn’t working.”\n\nBy the last day, I had paid for almost everything. On the way back, I finally said, “Hey, just settle your part when you can.” They laughed. “Relax, you’re acting like I won’t pay you.”\n\nWeeks passed. Nothing.\n\nWhen I brought it up again, their tone changed. “Why are you making it such a big deal?”\n\nThat’s when I realized—it was never an accident.",
    analysis:
      "This shows gradual boundary pushing. Small asks build into larger exploitation when not addressed early.",
    lesson: "Address issues immediately. Delayed boundaries often become ignored boundaries.",
    question: "At what point would you have stopped paying?",
    category: "Friendship",
  },
  {
    id: "s5",
    slug: "covered-friends-mistake-took-the-blame",
    title: "I Covered for My Friend’s Mistake… and Took the Blame",
    intro: "I thought I was protecting them. I didn’t realize I was setting myself up.",
    story:
      "It was a small mistake. Something easily fixable—but noticeable. My friend panicked. “Please don’t tell anyone,” they said. “I’ll fix it.” I nodded. I trusted them.\n\nDays passed. It didn’t get fixed. Then it became a bigger issue. Management got involved.\n\nDuring the meeting, I kept waiting for them to speak up. They didn’t.\n\nSilence stretched across the room. Then someone asked, “Who handled this?” All eyes slowly turned to me.\n\nI glanced at my friend. They looked down.\n\nAnd just like that, I understood everything.",
    analysis:
      "Protecting others can backfire when accountability isn’t mutual. Silence, in this case, becomes a form of betrayal.",
    lesson: "Never take responsibility for something that isn’t yours.",
    question: "Would you expose them afterward?",
    category: "Trust",
  },
  {
    id: "s6",
    slug: "lent-car-friend-returned-damaged-denied",
    title: "I Lent My Car to a Friend… and They Returned It Like This",
    intro: "Some favors cost more than you expect.",
    story:
      "“Just a quick errand,” they said. I hesitated—but handed over the keys.\n\nA few hours later, they came back. Something felt off immediately. The car looked… different.\n\nI walked closer. A long scratch across the side. A dent near the back. My chest tightened. “What happened?”\n\nThey barely looked. “Nothing. It was like that.”\n\nI just stood there. “No, it wasn’t.”\n\nThey shrugged. “I didn’t notice anything.”\n\nThat response hurt more than the damage. Not the denial—but how easily they dismissed it.",
    analysis:
      "Denial avoids responsibility but destroys trust. It signals self-protection over honesty.",
    lesson: "If someone can’t admit small mistakes, they won’t handle bigger ones either.",
    question: "Would you push for compensation—or walk away?",
    category: "Friendship",
  },
  {
    id: "s7",
    slug: "sibling-shared-personal-news-before-ready",
    title: "My Sibling Shared My Personal News… Before I Was Ready",
    intro: "It was my moment to tell. They took it from me.",
    story:
      "I told them in confidence. “Please don’t tell anyone yet,” I said. They smiled. “Of course.”\n\nTwo days later, my phone wouldn’t stop ringing. Congratulations. Questions. Messages. I felt confused—until I asked, “Did you tell people?”\n\nThey looked surprised. “Yeah… I thought it was good news.”\n\nI didn’t know what to say. It was good news. But it wasn’t theirs to share.\n\nThat moment—the reactions, the calls—it all felt stolen.",
    analysis:
      "Even positive boundary violations can feel like betrayal. Control over personal narratives matters deeply.",
    lesson: "Always respect timing when someone shares something personal.",
    question: "Does good intention excuse crossing a boundary?",
    category: "Family",
  },
  {
    id: "s8",
    slug: "friends-had-group-chat-without-me",
    title: "I Found Out My Friends Had a Group Chat Without Me",
    intro: "It wasn’t what they said. It was what they didn’t include me in.",
    story:
      "It started with a small comment. “Oh yeah, we talked about that already.” We? I didn’t think much of it—until I saw it. A notification on someone’s phone. A group name I didn’t recognize.\n\nLater, I asked casually, “What group is that?” They hesitated. Just for a second. “Nothing, just random stuff.”\n\nBut I knew.\n\nWeeks of inside jokes suddenly made sense. Plans I wasn’t invited to. Conversations I never saw. When I finally asked directly, they said, “It’s not a big deal.”\n\nMaybe to them. But to me, it explained everything.",
    analysis:
      "Exclusion doesn’t have to be explicit to hurt. Subtle social separation can strongly impact belonging and identity.",
    lesson: "If you feel consistently left out, it’s probably not in your head.",
    question: "Would you leave the group—or confront them?",
    category: "Drama",
  },
  {
    id: "s9",
    slug: "boss-promised-raise-then-denied-it",
    title: "My Boss Promised Me a Raise… Then Denied It Happened",
    intro: "I trusted a verbal promise. That was my mistake.",
    story:
      "After finishing a major project, my boss called me in. “You did great work,” they said. “We’ll talk about a raise soon.” I walked out feeling recognized.\n\nMonths passed. Nothing happened. So I brought it up. They frowned slightly. “I don’t remember saying that.”\n\nI felt my stomach drop. “You mentioned it after the project,” I said.\n\nThey shook their head. “You must’ve misunderstood.”\n\nThat was it. No proof. No email. Just my word against theirs.\n\nAnd suddenly, my effort meant nothing.",
    analysis:
      "Power imbalance allows deniability. Without documentation, commitments can disappear.",
    lesson: "Always follow up important conversations in writing.",
    question: "Would you stay—or start looking elsewhere?",
    category: "Workplace",
  },
  {
    id: "s10",
    slug: "supported-partner-through-everything-until-left",
    title: "I Supported My Partner Through Everything… Until They Left Me",
    intro: "I stayed when things were hard. They left when it was my turn.",
    story:
      "When they lost their job, I stayed. When they felt lost, I stayed. Late-night talks. Stress. Uncertainty—I was there for all of it. “I don’t know what I’d do without you,” they once said. I believed that too.\n\nThen life shifted. I hit a rough phase—mentally, emotionally, everything. I needed support.\n\nAt first, they were distant. Then colder. Then one day, they said it. “This is just… too much for me.”\n\nI didn’t argue. I just sat there, thinking about all the times I stayed.\n\nAnd how, when it mattered most—they didn’t.",
    analysis:
      "This reflects imbalanced emotional investment. True support is tested when roles reverse.",
    lesson: "Pay attention to reciprocity. Support should go both ways.",
    question: "How do you recognize one-sided relationships early?",
    category: "Relationship",
  },
];

function normalizeSlug(input: unknown): string | null {
  if (typeof input !== "string") return null;
  const trimmed = input.trim();
  if (!trimmed) return null;
  try {
    return decodeURIComponent(trimmed).toLowerCase();
  } catch {
    return trimmed.toLowerCase();
  }
}

export function getStoryBySlug(slug: unknown): Story | undefined {
  const normalized = normalizeSlug(slug);
  if (!normalized) return undefined;
  return STORIES.find((s) => s.slug === normalized);
}

export function getStoriesByCategory(category?: StoryCategory): Story[] {
  if (!category) return STORIES;
  return STORIES.filter((s) => s.category === category);
}

export function getRelatedStories(slug: string, limit = 3): Story[] {
  const current = getStoryBySlug(slug);
  if (!current) return STORIES.filter((s) => s.slug !== slug).slice(0, limit);

  const sameCategory = STORIES.filter(
    (s) => s.slug !== slug && s.category === current.category,
  );
  if (sameCategory.length >= limit) return sameCategory.slice(0, limit);

  const fill = STORIES.filter((s) => s.slug !== slug && s.category !== current.category);
  return [...sameCategory, ...fill].slice(0, limit);
}

