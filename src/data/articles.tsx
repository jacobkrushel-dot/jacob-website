import React from "react";

export interface Article {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: React.ReactNode;
}

export const articles: Article[] = [
  {
    slug: "build-health-learnings",
    title: "I co-founded a B2B SaaS company. Here's what I'd do differently.",
    date: "January 21, 2026",
    excerpt:
      "Reflections on co-founding Build Health and the lessons learned about whitespace markets, automation, pricing, growth channels, and personal redlines.",
    content: (
      <>
        <p>
          This isn't a shutdown story or post-mortem. It's a reflection on decisions that made sense at the time, and what I understand differently now.
        </p>
        <p>
          I recently stepped back from the B2B SaaS company I co-founded, Build Health. The business is still operating today, doing roughly $1M in ARR and running profitably.
        </p>
        <p>
          Looking back, there are several decisions that made sense at the time, but that I'd approach very differently if I were starting again. I'm writing these down partly for my future self, and partly in case they're useful to anyone else building in messy, real-world conditions.
        </p>

        <h2>Lesson 1: Avoid conflating a "whitespace" with a long tail.</h2>
        <p>
          I've always been drawn to overlooked, niche opportunities. That instinct led us to build tools for non-English-speaking SMBs (e.g. nail salons, massage spas), a segment clearly underserved by modern software.
        </p>
        <p>
          What I eventually realized is that the "whitespace" we thought we'd found was, in many ways, a long tail of businesses that were slow to adopt existing technologies for structural reasons. The fact that a group isn't served doesn't always mean it should be.
        </p>
        <p>
          If I did it again, I would make sure I had an airtight explanation for WHY a perceived whitespace exists. We thought we had this of course, but we learned that our WHY focused on symptoms of the problem rather than the root cause. For example, yes it's true that customer support, onboarding and payment flows, etc. are primarily made for English speakers. But is that WHY these non-English-speaking business owners did not adopt a product? Or did the makers of that product decide (explicitly or implicitly) that these businesses were not viable to support at scale?
        </p>

        <h2>Lesson 2: If your plan is to do something manual first and automate later, you better be sure you can automate!</h2>
        <p>
          We leaned heavily on a "do things that don't scale" philosophy early on — manually onboarding customers, running support in multiple languages, handling edge cases by hand. The assumption was that we'd automate it all once we found product-market fit. What we underestimated was how hard some of those manual processes would be to automate in a cost-effective way, and how much technical and operational debt accumulates when you delay that work.
        </p>

        <h2>Lesson 3: Define your personal redlines before you need them.</h2>
        <p>
          At various points, I found myself asking questions like:
        </p>
        <ul>
          <li>What is my realistic upside?</li>
          <li>What opportunity cost am I accepting by staying?</li>
          <li>Do I have Stockholm syndrome, or am I staying for the right reasons?</li>
          <li>If I step away, am I a quitter? Do I lack grit?</li>
          <li>If we make this one change, will the situation improve?</li>
        </ul>
        <p>
          Without predefined thresholds, those decisions tend to drag on far longer than they should. Emotion fills the vacuum: fear of being seen as a failure, sunk cost fallacy, fixation on the possibility that one more iteration might change everything.
        </p>
        <p>
          If I did this again, I'd define clear personal redlines upfront. Not as an exit plan, but as decision hygiene. Pre-committing to those thresholds wouldn't have made the outcome different, but it would have made the decision clearer, healthier, and far less draining.
        </p>

        <h2>Conclusion</h2>
        <p>
          Build is still alive and growing. It's a testament to the team that we could step in so many potholes and still build a profitable, growing business with hundreds of customers who depend on it. Hopefully, if you're reading this, you can learn from my mistakes. And if you'd like to talk through your own challenges and how these lessons might apply to your context, don't hesitate to reach out.
        </p>
      </>
    ),
  },
  {
    slug: "lululemon-mirror-acquisition",
    title: "Lululemon's Acquisition of Mirror",
    date: "July 1, 2020",
    excerpt:
      "Examining why Lululemon paid $500M for an at-home fitness startup, and what it means for the future of retail and fitness.",
    content: (
      <>
        <p>
          This week, Lululemon announced it would acquire Mirror, an at-home fitness startup, for $500 million. On the surface, it's an athletic apparel company buying a hardware/software fitness platform. But the strategic logic runs deeper.
        </p>

        <h2>Why This Deal Makes Sense</h2>
        <p>
          Lululemon has always been more than just a clothing company. Their stores function as community hubs, hosting yoga classes and running clubs. They've built a brand around the aspirational fitness lifestyle, not just the gear you wear while pursuing it.
        </p>
        <p>
          Mirror extends this into the home. At $1,495 for the hardware plus $39/month for classes, it's positioned squarely at Lululemon's affluent, fitness-obsessed customer base. The overlap is almost too perfect.
        </p>

        <h2>The Peloton Comparison</h2>
        <p>
          The obvious comparison is Peloton, which has built a $20+ billion business on connected fitness. But Mirror is different in a few key ways:
        </p>
        <ul>
          <li><strong>Form factor:</strong> Mirror is literally a mirror when not in use — it disappears into your home rather than demanding dedicated space like a bike or treadmill.</li>
          <li><strong>Workout variety:</strong> Because you're not attached to any equipment, Mirror can offer everything from boxing to barre to meditation.</li>
          <li><strong>Price point:</strong> Significantly cheaper than Peloton's bikes and treadmills.</li>
        </ul>

        <h2>What Lululemon Gets</h2>
        <p>
          Beyond the product itself, Lululemon gets something even more valuable: a direct, ongoing relationship with their customers. Instead of selling you leggings twice a year, they can now have a daily touchpoint in your home.
        </p>
        <p>
          This is the holy grail of retail — moving from transactional relationships to subscription-based recurring revenue. Nike, Adidas, and others have been trying to crack this code. Lululemon just bought their way in.
        </p>

        <h2>The Risks</h2>
        <p>
          Of course, nothing is guaranteed. Hardware is hard. Lululemon has no experience managing a tech company. And the at-home fitness market, while growing rapidly during COVID, may cool off as gyms reopen.
        </p>
        <p>
          But at $500 million — less than 2% of Lululemon's market cap — the bet is relatively small for the potential upside. If it works, Lululemon will have built a moat that competitors will struggle to cross.
        </p>

        <h2>The Bottom Line</h2>
        <p>
          This acquisition makes strategic sense on multiple dimensions. It extends Lululemon's brand into new territory, creates recurring revenue, and deepens customer relationships. Whether they can execute is another question entirely — but the vision is sound.
        </p>
      </>
    ),
  },
  {
    slug: "is-mba-worth-it",
    title: "Is an MBA worth it?",
    date: "June 22, 2020",
    excerpt:
      "A personal reflection on the value of business school, the real costs and benefits, and who should (and shouldn't) pursue one.",
    content: (
      <>
        <p>
          I get asked this question a lot, usually by people earlier in their careers who are trying to figure out their next move. My answer is frustratingly nuanced: it depends.
        </p>

        <h2>The Real Costs</h2>
        <p>
          Let's start with the obvious: an MBA is expensive. At a top program, you're looking at $150,000+ in tuition alone. Add living expenses, and you're closer to $200,000.
        </p>
        <p>
          But tuition is only part of the cost. The bigger number is opportunity cost — two years of salary you're not earning. If you're making $100,000 a year, that's another $200,000. Your total investment is pushing $400,000.
        </p>
        <p>
          That's a lot of money. Anyone telling you otherwise isn't being honest.
        </p>

        <h2>What You Actually Get</h2>
        <p>So what do you get for that $400,000? A few things:</p>
        <ul>
          <li><strong>Access to recruiting pipelines:</strong> Consulting and banking firms recruit almost exclusively from MBA programs. If you want to work at McKinsey or Goldman, an MBA is essentially required.</li>
          <li><strong>Career switching:</strong> An MBA provides a socially acceptable way to completely reinvent yourself professionally.</li>
          <li><strong>Network:</strong> Your classmates will become founders, executives, and investors. These relationships compound over decades.</li>
          <li><strong>Two years to think:</strong> In a world that demands constant productivity, business school gives you rare permission to step back and figure things out.</li>
        </ul>

        <h2>Who Should Get One</h2>
        <p>Based on my experience, an MBA makes the most sense if you fall into one of these categories:</p>
        <p>
          <strong>Career switchers:</strong> If you're an engineer who wants to move into product management, or a teacher who wants to break into consulting, an MBA provides the credentials and network to make that leap.
        </p>
        <p>
          <strong>Credential-dependent paths:</strong> Some career paths — particularly in consulting and finance — effectively require an MBA from a top school. If that's where you want to go, you probably need the degree.
        </p>
        <p>
          <strong>People who want to build a network:</strong> If you're planning to start a company, raise money, or work in an industry where relationships matter, the network alone might be worth it.
        </p>

        <h2>Who Should Skip It</h2>
        <p>On the flip side, you probably shouldn't get an MBA if:</p>
        <p>
          <strong>You're already on a good trajectory:</strong> If you're growing quickly at a tech company and learning a lot, an MBA might actually slow you down. Two years is a long time in a fast-moving industry.
        </p>
        <p>
          <strong>You want to start a company right now:</strong> Business school is great for networking and learning, but it's not a substitute for actually building something. If you have a startup idea you're excited about, just go do it.
        </p>
        <p>
          <strong>You're doing it because you don't know what else to do:</strong> This is the worst reason to get an MBA. Business school won't give you answers — it'll just delay the questions while making you $400,000 poorer.
        </p>

        <h2>My Personal Take</h2>
        <p>
          I don't regret my MBA. It opened doors, introduced me to people I never would have met, and gave me time to think about what I wanted to do. The ROI was positive.
        </p>
        <p>
          But I also recognize I'm biased by my own experience. The truth is that for many people, the same outcomes are achievable through other paths — paths that don't require $400,000 and two years.
        </p>
        <p>
          If you're considering an MBA, my advice is simple: be brutally honest with yourself about why you want it and what you expect to get out of it. If the reasons are clear and the path makes sense, go for it. If you're just looking for someone to give you permission to take a break and figure things out, there are cheaper ways to do that.
        </p>
      </>
    ),
  },
  {
    slug: "movie-theaters-covid",
    title: "Movie Theaters and Covid-19",
    date: "June 15, 2020",
    excerpt:
      "How the pandemic is accelerating changes in movie distribution and what it means for the future of theatrical exhibition.",
    content: (
      <>
        <p>
          Movie theaters were already struggling before COVID-19. The pandemic didn't create their problems — it accelerated them.
        </p>

        <h2>The Pre-COVID Reality</h2>
        <p>
          The theatrical exhibition business has been under pressure for years. Attendance has been flat or declining since the early 2000s, masked only by rising ticket prices. The average American goes to the movies about four times a year, down from nearly five times in 2002.
        </p>
        <p>
          Meanwhile, home viewing has become dramatically better. 65-inch 4K TVs cost a few hundred dollars. Streaming services offer endless content. The gap between the theatrical experience and the home experience has narrowed considerably.
        </p>

        <h2>What COVID Changed</h2>
        <p>
          The pandemic forced studios to experiment with something they'd long resisted: releasing major films directly to streaming or premium video-on-demand.
        </p>
        <p>
          Universal released Trolls World Tour directly to PVOD and made nearly $100 million in three weeks — reportedly more than the first film made in five months of theatrical release. Suddenly, the unthinkable was thinkable.
        </p>
        <p>
          Disney released Mulan on Disney+ for $30. Warner Bros. announced its entire 2021 slate would debut simultaneously on HBO Max and in theaters. The theatrical window — traditionally 75-90 days of exclusivity — was collapsing.
        </p>

        <h2>The Exhibitor's Dilemma</h2>
        <p>
          Theater owners are caught in an impossible position. Their business model depends on exclusivity — the idea that if you want to see the new Marvel movie, you have to come to them. Without exclusivity, their value proposition weakens dramatically.
        </p>
        <p>
          AMC and other chains have pushed back hard, threatening to boycott films that don't respect the theatrical window. But their leverage is limited. Studios control the content. And increasingly, studios either own their own streaming platforms (Disney+, HBO Max, Peacock) or are discovering they can make money without theaters at all.
        </p>

        <h2>What Survives</h2>
        <p>
          I don't think theaters disappear entirely. Some types of films — big spectacles, horror movies, cultural events — genuinely benefit from the theatrical experience. Opening weekend for a Marvel movie is an event. Watching a horror film with a crowd is genuinely scarier.
        </p>
        <p>
          But the industry will likely contract significantly. We'll have fewer theaters, showing fewer films, focused on the event-movie experience. The middle ground — mid-budget dramas, comedies, smaller films — will move entirely to streaming.
        </p>

        <h2>The Bigger Picture</h2>
        <p>
          What's happening to theaters is part of a larger unbundling of entertainment. We used to go to the movies because that's where movies were. Now content is everywhere, and we increasingly watch whatever we want, whenever we want, wherever we want.
        </p>
        <p>
          Theaters that survive will need to offer something streaming can't — whether that's a genuinely premium experience (luxury seating, better food, pristine presentation) or the social experience of watching with a crowd. The ones that are just "a big room with a screen" won't make it.
        </p>
        <p>
          COVID-19 didn't kill movie theaters. But it did accelerate a reckoning that was coming anyway. The theatrical business that emerges from this will be smaller, more focused, and — hopefully — better at delivering experiences worth leaving your couch for.
        </p>
      </>
    ),
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}
