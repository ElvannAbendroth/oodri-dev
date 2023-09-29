---
draft: false
title: "Leaflink"
snippet: "A Linktree clone build with NextJS 13, Tailwind, Radix UI & MongoDB"
image: {
    src: "/src/assets/portfolio/leaflink.jpg",
    alt: "Leaflink App"
}
publishDate: "2023-09-08 11:39"
category: "Full-stack App"
tags: []
stack: [NextJS 13, Tailwind, MongoDB, Vercel]
links: {
    demo: 'https://leaflink.vercel.app/',
    github: 'https://github.com/ElvannAbendroth/leaflink'
}
---



## About this Project

A [Linktree](https://linktr.ee/) clone built using Next, NextAuth, Tailwind & MongoDB.  This project is an learning experiment on how to build a simple, modern fullstack web application using **NextJS 13** and server components.

The goal of this app was to create a simple content management system that allowing users to create an account & login, manage a public page featuring links, and share their public page with the world.


## User Features
- Account Creation & Management
- Profile Customization
- Links Creation & Management
- Basic Statistics: All Times total clicks & most clicked links
- Soft Delete & Archive Page
- Beautiful & Responsive UI

## Technical Features

- **NextJS 13**'& the new `/app` dir,
- Server & Client Components
- API Routes and Middlewares
- Credentials Authentication using **NextAuth.js**
- Database on **MongoDB**
- UI Components built using **Radix UI** & **[shadcn/ui](https://ui.shadcn.com/)**
- Styled using **Tailwind CSS**
- Written in **TypeScript**
- Error Handling & Data Validation using **Zod**
- Beautiful Loading UI & Toaster Notifications
- Forms using debounce for better UX
## Roadmap

This project reached a state where it has fulfilled its purposes, which was to get familiar with NetJS13, nonetheless, here are a couple features I would like to add later on add:

- [ ] Google Authentication with **NextAuth.js**
- [ ] Theme Customization for user's public page
- [ ] Analytics for page visits & click rates
- [ ] Analytics display for All-times, Year, 30 days & 7 days
- [ ] Adding custom images to links
- [ ] Password Recovery System

## Security & User Information Notice

All of the user data for this web app are stored in a MongoDB Database, and passwords are being safely encrypted using **bcrypt**.