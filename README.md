![Reworkd](https://github.com/awtkns/reworkd/blob/main/public/social.png)

<p align="center">
  <em>🤖 Making your life easier 🤖</em></br>
  <sub>Revolutionizing responses with the power of AI</sub>
</p>
<p align="center">
 <a href="https://confetti.dev/" target="_blank">
  <img alt="Deployment Success" src="https://img.shields.io/github/deployments/awtkns/confetti/production?color=2334D058&label=Deployment" />
 </a>
 <img alt="Health Check" src="https://img.shields.io/github/actions/workflow/status/awtkns/confetti/healthcheck.yml?label=Health%20Check&color=2334D058" />
 <img alt="License" src="https://img.shields.io/github/license/awtkns/confetti?color=2334D058" />
 <img alt="Node version" src="https://img.shields.io/static/v1?label=node&message=%20%3E=16.0.0&logo=node.js&color=2334D058" /> 
</p>

<p align="center">
<a href="https://reworkd.ai">🔗 Short link</a>
<span>&nbsp;&nbsp;•&nbsp;&nbsp;</span>
<a href="#-getting-started">🤝 Contribute</a>
</p>

---

## 📖 About
Reworkd revolutionizes responses with the power of AI. We are a team of developers and designers who are 
passionate about building products that make a difference. We are currently working on a product that will 
help you create better responses to your customers.

## 🚀 Tech Stack

- ✅ **Bootstrapping**: [create-t3-app](https://create.t3.gg).
- ✅ **Framework**: [Nextjs 13 + Typescript](https://nextjs.org/).
- ✅ **ORM**: [Prisma](https://prisma.io).
- ✅ **Database**: [Planetscale](https://planetscale.com/).
- ✅ **Realtime**: [Supabase](https://supabase.com/).
- ✅ **Styling**: [TailwindCSS + HeadlessUI](https://tailwindcss.com).
- ✅ **Typescript Schema Validation**: [Zod](https://github.com/colinhacks/zod).
- ✅ **End-to-end typesafe API**: [tRPC](https://trpc.io/).

## 👨‍🚀 Getting Started

> 🚧 You will need [Nodejs +16 (LTS recommended)](https://nodejs.org/en/) installed.

1. Fork this project:

- [Click here](https://github.com/awtkns/confetti/fork).

2. Clone the repository:

```bash
git clone git@github.com:YOU_USER/confetti.git
```

3. Install dependencies:

```bash
npm install
```

4. Create a `.env` file with the following content:

> 🚧 The environment variables must match the following [schema](https://github.com/awtkns/confetti/blob/main/src/env/schema.mjs#L8).

```bash
# Next Auth Secrets
DATABASE_URL=
NEXTAUTH_SECRET=
NEXTAUTH_URL=
OPENAI_ORGANIZATION=
OPENAI_API_KEY=
```

5. Ready 🥳, now run:

```bash
npm run dev # for next app
npm run dev:plasmo # for extension
```
