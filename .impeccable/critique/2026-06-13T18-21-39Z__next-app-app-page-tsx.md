---
target: next-app/app/page.tsx
total_score: 25
p0_count: 1
p1_count: 3
timestamp: 2026-06-13T18-21-39Z
slug: next-app-app-page-tsx
---
## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 2 | Stat counter animation fires on mount (before user sees the counters); showreel button is icon-only with no visible label |
| 2 | Match Between System / Real World | 3 | Copy language is excellent; "Proof & useful signals" heading is vague — visitors expect actual proof, find a stats repeat |
| 3 | User Control and Freedom | 3 | Clear nav throughout, no trapping interactions |
| 4 | Consistency and Standards | 3 | "9+ years" in the stat counter vs "8+ years" in the awards list — same metric, different value |
| 5 | Error Prevention | 2 | 12+ dead links: 4 testimonial company links → `#`, 8 client logo links → `#0`. Counter animation fires before scroll target is visible |
| 6 | Recognition Rather Than Recall | 3 | Social links have text labels; tags on projects communicate category clearly |
| 7 | Flexibility and Efficiency | 2 | No primary CTA above the fold; only action is a "Scroll for More" token; contact path requires significant scrolling |
| 8 | Aesthetic and Minimalist Design | 3 | Same four stats shown twice (cards + awards list); hero marquee says "tech" × 6 — reads as broken |
| 9 | Error Recovery | 2 | Dead links (#0 scrolls to top, # does nothing); demo form shows disabled message on submit |
| 10 | Help and Documentation | 2 | No help; blog ("Practical notes") serves as soft educational entry — fine for a marketing page |
| **Total** | | **25/40** | **Acceptable — significant improvements needed** |

---

## Anti-Patterns Verdict

**LLM assessment**: This does NOT immediately read as AI-generated. The copy is the primary defense — "fewer strategy fog machines," "Mystery is for cinema, not client service," and "spaghetti-on-the-wall marketing" are genuinely distinctive, brand-first writing. The visual system (purple/lime dual-theme, floating illustrations, interactive border glow, noise overlay) is committed and distinctive. It doesn't fall into the editorial-typographic lane (no Fraunces + ruled separators + mono labels), nor into dark neon excess.

However, two patterns from the shared absolute bans list are present at low severity:
- The stats cards section (131+, 82%, 9+, 5) with animated counters approaches the hero-metric template. The copy on each card saves it ("Satisfied clients who trust the work", "because good work travels"), but the visual composition — four big animated numbers on cards — is a recognizable SaaS/agency reflex.
- The hero marquee repeating "tech" six times is the clearest tell. Not a banned pattern per se, but it looks like an incomplete customization of the template.

**Deterministic scan**: The automated detector found 0 issues. No gradient text, no side-stripe borders, no numbered section eyebrows, no glassmorphism-as-default. The detector's clean result is consistent with the LLM review — the underlying design system is well-executed; the issues here are at the content/interaction layer, not the CSS/markup layer.

---

## Overall Impression

The copy and visual system are Tikii's strongest assets — the page has real voice and real work behind it. The single biggest opportunity is fixing a trust gap: a founder evaluating Tikii can't click through to verify a single testimonial client, can't visit a client's site from their logo, and sees the same four stats repeated in two separate sections. The site presents Tikii as credible but then doesn't let visitors actually verify that credibility. Fix the dead links and the counter timing and the trust signal becomes as strong as the creative signal.

---

## What's Working

**1. Copy voice is genuinely distinctive.** "Fewer strategy fog machines," "rebuilding everything every quarter is not a growth strategy," "Mystery is for cinema, not client service" — this is the agency's personality on the page, not template filler. It passes the AI slop test for writing.

**2. Real work with real clients.** Five named case studies with distinctive project subtitles ("a heritage brand learns the algorithm," "from glitchy to global with a Shopify glow-up"), real portraits, named testimonials, and logos from actual clients. The content depth earns trust.

**3. Visual system is committed.** The dual-theme color system (purple/lime), border-glow interactive cards, floating hero illustrations, noise overlay, and the stacked services section with alternating backgrounds create a coherent and energetic visual language that doesn't read as generic.

---

## Priority Issues

**[P0] Hero marquee says "tech" × 6 — looks broken**
- **What**: The GSAP marquee in the hero (`marquee-right--gsap`) rotates six identical copies of the word "tech" with no variation. This is the first animated text a visitor sees.
- **Why it matters**: A one-word marquee reads as either a template placeholder that wasn't replaced, or so minimal it communicates nothing. A full-stack studio that does "Branding, Content, Marketing, E-commerce, Websites" has six better words.
- **Fix**: Replace with Tikii's actual service vocabulary — "Brand · Tech · Content · Growth · Commerce · Design" or similar. The marquee already has the right structure; just update the `<p>` text nodes.
- **Suggested command**: `/impeccable clarify`

**[P1] 12+ dead links break the credibility loop**
- **What**: All 8 client logo cards link to `href="#0"` (line 1733, scrolls page to top). All 4 testimonial company names link to `href="#"` (lines ~1540, 1576, 1612, 1648). A founder clicking to verify "Chandrani Pearls" or "Vedamorph" finds a non-functional link.
- **Why it matters**: The testimonials and client logos exist precisely to let visitors verify Tikii's credibility. Dead links here are the worst possible outcome — the proof signal breaks at the exact moment of verification. For a founder making a hiring decision, this reads as sloppy.
- **Fix**: Link client logos to the relevant case study pages (`/works/chandrani-pearls-shopify-switch`, `/works/vedamorph`, etc.) or to the client's own URLs if public. Link testimonial company names to case studies. Five case studies already exist for the main clients.
- **Suggested command**: `/impeccable harden`

**[P1] Stat counter animation is invisible — fires before scroll**
- **What**: `useHomeCounters` triggers on component mount with `requestAnimationFrame` (line 178). The counter cards are below the fold. By the time the user scrolls to them, the animation (0 → 131) has already completed. The user sees static numbers.
- **Why it matters**: The whole point of an animated counter is the in-view momentum that converts a number into a statement. When it fires on load, the investment in that animation is wasted and the numbers read as ordinary text.
- **Fix**: Wrap each counter's start in an `IntersectionObserver` that fires once when the element enters the viewport (`threshold: 0.3`). This is a ~15-line change to `useHomeCounters`.
- **Suggested command**: `/impeccable animate`

**[P1] Stats repeated twice — dilutes proof, not doubles it**
- **What**: The four metrics (131+ clients, 82% referrals, 9+/8+ years, 5 case studies) appear in the stats cards section (line 437–548) AND again in the "Proof & useful signals" awards list (line 1271–1455). Same numbers, different visual treatments, back-to-back on the same page.
- **Why it matters**: Seeing the same number twice doesn't double the trust signal — it halves it. "131+ clients" shown twice reads as padding, not proof. The "Proof" section heading promises more than a stats repeat delivers.
- **Fix**: The "Proof & useful signals" section should link to actual proof — specific case studies with outcomes, or the named testimonials. Replace the four stats rows with four named project outcomes: "Chandrani Pearls — 38% increase in Shopify conversion", etc. Or cut the awards section entirely and let the testimonials carry the proof weight.
- **Suggested command**: `/impeccable clarify`

**[P2] "9+ years" (counter) vs "8+ years" (awards list) — factual inconsistency**
- **What**: `stats-counter-3` animates to `9` with suffix `+` and description "Years of operations." The awards list (line 1378) shows "8+ years of operations." One is wrong.
- **Why it matters**: A founder who notices this inconsistency — and founders evaluating agencies look for exactly these things — will question the accuracy of all the other numbers.
- **Fix**: Align both to the same number. If the answer is 9, update `mxd-awards-list__title` at line 1379. If it's 8, update `homeCounters["stats-counter-3"].value` from `9` to `8`.
- **Suggested command**: `/impeccable harden`

---

## Persona Red Flags

**Jordan (First-Timer)** — *"What am I supposed to do here?"*
The hero has no primary CTA. Jordan lands on "Design, tech and some magic" and sees a scroll token ("Scroll for More"), a video with a play button, and three social links. The first clear action — "Tell us the brief" — requires scrolling past a full-viewport hero. Jordan has no invitation above the fold.

Red flags:
- No primary action visible without scrolling
- Play button on the video is icon-only (`ph-fill ph-play`) — Jordan may not recognize it as a video control vs a page button
- "Scroll for More * Scroll for More * Scroll for More" as a circular CTA is unusual; most first-timers treat this as decorative, not instructional

**Riley (Stress Tester)** — *"Let me click on every link."*
Clicks on "Chandrani Pearls" in a testimonial → nothing. Clicks on "Vedamorph" → nothing. Clicks on the Chandrani Pearls logo → scrolled to top. Clicks on the Samilton logo → scrolled to top. Clicks "Tell us the brief" → `/contact`. Submits the contact form → presumably works on that page (not tested here). Discovers the 9 vs 8 year inconsistency. Rates confidence: low.

Red flags:
- 12 non-functional links in the proof sections
- Year inconsistency
- `href="#0"` scrolling the page to the top is disorienting — feels like a navigation error

**Vikram the Founder** *(custom persona from PRODUCT.md)*
- **Profile**: Founder of a D2C or service brand, 35-45, based in India. Has budget, was referred by someone. Has 10 minutes to evaluate Tikii before a call.
- **Behaviors**: Reads the manifest copy, reads a testimonial, tries to click the client name to verify, looks at case studies, checks the blog to see if Tikii publishes, checks if logos are from real companies.
- **Red flags**:
  - Clicks "Chandrani Pearls" in the testimonial → `#` (can't verify the client exists)
  - Tries clicking the Chandrani Pearls logo → page scrolls to top (reads as error)
  - Sees the counter say "9+ years" then later reads "8+ years" — notices the discrepancy
  - Wants to share the page with a co-founder: "there's no proof you can click through"

---

## Minor Observations

- The avatar images in the stats cards section (line 467, 480) have `alt="Client portrait"` — generic. Since these same faces appear in the testimonials with names (Nisheeth Nayar, Amit Singhi), the alt text should match: `alt="Nisheeth Nayar, Director at Chandrani Pearls"`.
- The `<video>` tag sources (`/video/540x310_video.mp4`, `.webm`, `.ogv`) are the original Rayo template's demo reel, not Tikii footage. The autoplay preview and the showreel CTA create expectation mismatch — the preview isn't what the showreel link goes to.
- The "How we think" section sub-header ("Honest / Useful / Measurable") is right-column text, small size, likely missed on mobile. It carries the brand's values clearly, but its visibility at small viewport sizes deserves checking.
- The "Proof & useful signals" section has a third column (`.col-xl-2`) with a "2026" date on every row. This label is confusing — it implies these are awards or news items from 2026, not evergreen company facts. A founder may read this as "founded 2026" which would directly contradict the "8+ years" claim.

---

## Questions to Consider

- What should clicking a client logo do — visit the client's site, visit the case study, or do nothing? The current non-answer is the worst outcome.
- If the testimonials are the strongest trust signal, why are they below the case studies? Would moving one testimonial above the stats cards increase conversion?
- The hero "Design, tech and some magic" is witty — but does it communicate enough about what Tikii actually does? A founder who doesn't already know what Tikii is may need a second to parse it.
