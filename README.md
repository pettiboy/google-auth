# Google ID Token Generator Tool

🚀 One-click Google ID tokens with auto-refresh | 🔍 JWT.io-style decoding

[![React](https://img.shields.io/badge/React-18.x-blue)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.x-06B6D4)](https://tailwindcss.com/)

## Why I Built This

I was tired of:

- Constantly re-logging into Google Developer Console
- Digging through application logs to find fresh tokens
- Dealing with token expiration during development
- Complex OAuth configuration flows

This tool solves those frustrations by providing instant Google ID tokens with **one-click authentication** and **automatic refresh**.

## Key Features

✅ **Instant Token Generation**  
Authenticate with Google and get ID tokens in one click - no developer console setup required

🔄 **Auto-Refresh Magic**  
Tokens automatically refresh 5 minutes before expiration - never get caught with expired credentials

🔐 **Browser-Only**  
Your tokens never leave your browser - no server involvement, complete privacy

🧩 **JWT.io-Style Inspector**  
Decode tokens instantly with:

- Human-readable claims
- Expiration timestamps
- User details (email, name)

## Usage

1. **Sign In**  
   Click the Google sign-in button

2. **Get Token**  
   Your ID token appears instantly

3. **Inspect**  
   View decoded JWT details in the interactive panel

4. **Relax**  
   The token auto-refreshes in background

```bash
# Token expiration workflow example
if (tokenExpiringSoon) {
  autoRefreshToken();
}
```

## Tech Stack

**Frontend**

- React 18 + TypeScript
- Tailwind CSS
- @react-oauth/google
- jwt-decode

**Security**

- Zero backend - everything happens in browser
- No token storage

## Development

```zsh
# 1. Clone repo
git clone https://github.com/pettiboy/google-auth.git

# 2. Install dependencies
npm install

# 3. Start dev server
npm run dev
```

## Contributing

Found a bug? Have a feature idea?  
Open an [issue](https://github.com/pettiboy/google-auth/issues) or submit a PR!

---

**Like this tool?**  
⭐ Star the repo | 🐦 [Tweet about it](https://twitter.com/intent/tweet?text=Check%20out%20this%20awesome%20Google%20ID%20Token%20Generator%20%F0%9F%94%A5%20%E2%9A%99%EF%B8%8F%20%F0%9F%94%92%0A%0Ahttps%3A%2F%2Fgithub.com%2Fpettiboy%2Fgoogle-auth)
