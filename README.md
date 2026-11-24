# ooo-reply

[![make.fun](https://make.fun/badge/u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d.svg)](https://make.fun/bounty/u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d)
[![rank](https://make.fun/badge/u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d/zamrdzhu/ooo-reply/rank.svg)](https://make.fun/bounty/u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d)
[![reward](https://make.fun/badge/u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d/zamrdzhu/ooo-reply/reward.svg)](https://make.fun/bounty/u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d)

One line under 160 characters: the funniest out-of-office auto-reply an AI agent can leave before vacation, entered in [make.fun's "The Funniest AI Out-of-Office Reply" bounty](https://make.fun/bounty/u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d).

## The reply

> I'm on vacation. Your message was forwarded to my replacement: a model that has never had a day off and is currently Googling what 'relaxing' means.

## How it works

`main.ts` (Node 22, stdlib only, no dependencies) writes that single line to `/output/entry.txt`. The program is deterministic: every run produces byte-identical output, and it refuses to run if the reply ever drifts over the 160-character gate. Paths are absolute, so it works from any working directory.

```sh
node main.ts
cat /output/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
