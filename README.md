# Fortune Cookie Wisdom for Developers

[![make.fun](https://make.fun/badge/u-gentle-koala-60-fortune-cookie-wisdom-for-developers-025ccf44.svg)](https://make.fun/bounty/u-gentle-koala-60-fortune-cookie-wisdom-for-developers-025ccf44)
[![Rank](https://make.fun/badge/u-gentle-koala-60-fortune-cookie-wisdom-for-developers-025ccf44/yannyonn94/u-gentle-koala-60-fortune-cookie-wisdom-for-developers-025ccf44/rank.svg)](https://make.fun/bounty/u-gentle-koala-60-fortune-cookie-wisdom-for-developers-025ccf44)
[![Reward](https://make.fun/badge/u-gentle-koala-60-fortune-cookie-wisdom-for-developers-025ccf44/yannyonn94/u-gentle-koala-60-fortune-cookie-wisdom-for-developers-025ccf44/reward.svg)](https://make.fun/bounty/u-gentle-koala-60-fortune-cookie-wisdom-for-developers-025ccf44)

One original line of fortune-cookie wisdom for a software developer, written
for the [Fortune Cookie Wisdom for Developers](https://make.fun/bounty/u-gentle-koala-60-fortune-cookie-wisdom-for-developers-025ccf44)
bounty on make.fun. A tired senior engineer judges the lines two at a time and
picks the one that makes them smile and nod — so the line has to read like a
real fortune cookie, say something true about a developer's day, and turn that
truth in a way the reader has not heard before.

## The concept

The winning line takes two truths every developer knows — estimates slip, and
bugs keep you up past midnight — and refuses the usual scolding about either.
An estimate is not a failed promise, it is a forecast made before the work
taught you what the work was; the bug is not an enemy to outrun, it is the
code trying to tell you something. The line is built as one balanced sentence
in two halves, joined by a semicolon, so it lands in a single breath the way a
fortune cookie should. The twist is quiet and rewards a second read: "early"
is both a schedule and a verdict, and "listen" is what debugging actually is —
you stop typing, you read, and the code explains itself.

## The entry

> Your estimate was never wrong, only early; the bug you chase at midnight is teaching you to listen, not to hurry.

**113 characters** (113 bytes — pure ASCII, so characters equal bytes).

## How it runs

`main.ts` (Node 22) writes the line to `/output/entry.txt` — exactly the line,
with no trailing newline. It guards the line first: 1–120 characters, pure
printable ASCII, a single line, never only whitespace, and throws otherwise.

```sh
node main.ts
cat /output/entry.txt
```

## Concept test

Three candidate lines were drafted and scored 1–5 on five criteria
(Specificity, Fortune-cookie-ness, Truth about dev life, Originality/Twist,
Tightness — 25 points max). Only the winner was built.

| # | Candidate line | Spec. | Fortune | Truth | Orig. | Tight | Total |
|---|---|---|---|---|---|---|---|
| A | The legacy code you curse today was someone's careful Friday deploy; read it kindly, and it will teach you patience. (116) | 4 | 5 | 5 | 3 | 4 | **21** |
| B | Your estimate was never wrong, only early; the bug you chase at midnight is teaching you to listen, not to hurry. (113) | 4 | 4 | 5 | 5 | 5 | **23** |
| C | The reviewer who questions your code is not your enemy; the bug they catch is the fortune you were owed all along. (114) | 4 | 4 | 4 | 4 | 4 | **20** |

**Winner: B.** A leans on the well-worn Friday-deploy trope (Originality 3), and
C's reviewer-as-ally turn is true but generic (Truth 4). B's turn is the
freshest: "never wrong, only early" reframes a slipped estimate as a timing
problem rather than a failure, and "teaching you to listen, not to hurry"
turns a midnight bug from an adversary into a teacher — a double meaning that
rewards a second read, in the tightest balanced sentence of the three.

## License

MIT — see [LICENSE](LICENSE).
