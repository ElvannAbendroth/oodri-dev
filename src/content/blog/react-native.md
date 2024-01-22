---
draft: false
title: "Devlog: React Native First Impression"
snippet: ""
image: {
    src: "https://media.discordapp.net/attachments/1015687534115815504/1199089586006143016/elvann_illustration_of_a_mobile_phone_with_nature_flat_design_v_7cfaf976-809c-4034-b87e-47bbfa0fe02d.png?ex=65c14633&is=65aed133&hm=8e9badbd0efb18bab5d78be9d7fb7474d74b9c4001876b64517e00dbeba53eb4&=&format=webp&quality=lossless&width=1197&height=671",
    alt: "full stack web development"
}
publishDate: "2024-01-22 09:00"
category: "Devlog"
author: "Audrey Downey"
tags: [devlog, fullstackopen]
---

React is a tool I've grown to really love working with over the past years. I've heard about **React Native** a lot online, and I've been excited to dive into it and finally learn what it's about.

"React Native" is the topic for the 10th part of the [Full-Stack Open Course](https://fullstackopen.com/) that I'm currently studying, and in the past couple of days I've been working on building the course project called "Rate Repository App" with React Native and Expo.  

## Here's what the Project looks like so far:

![Rate Repository App](https://im.ezgif.com/tmp/ezgif-1-1bc17c8304.gif)

It's pretty simple, it queries repositories from an external API and features them in a list.  There's also a secure jwt token authentication function.

## My Impressions

React Native is still new to me and I'll need to put a lot more time working with it to really feel like I get a good grasp of it, but here are my first impressions:

### 💙 Here are some of the things I've liked so far:

1. **It's built on top of React**Making it intuitive and easy to understand for developers coming from a React background.
2. **Great Tools & Libraries**: SiA lot of popular react libraries and tools are also available for the React Native ecosystem.  In my case, some of those for me are: Nativewind(Tailwind), Jest & Lucide Icons.
3. **Great API with great documentation**: finding the information I needed was very smooth and definitely contributed positively to the dev experience.


### ❌ Here are some of the thinks I've not liked as much:
1. **Problems with making Nativewind work**: I spent a lot of time trying to make Nativewind work with the application without success. For a while I almost made it work, but the tailwind code wasn't getting properly compiled and I couldn't use the `tailwind.config.js` variables, despite following the instructions.

2. **Debugging can be really tricky**:  Error messages given by the compile are ambiguous, it's often been really difficult to figure out where the problems were happening.  Maybe that's because I got so used to using Typescript over the past year?  At the beginning of the project, I also didn't manage to setup the React Native Debugger to work with my remote development environment (I wanted to develop using my physical iOS phone rather than an emulator).  

    While those problem could maybe have been solved given a bit more time, it's undeniable there's a level of extra complexity compared to web development.

3. **Flexbox Gap does not work**: I know that's small, but it really annoyed me a lot while styling.

## Conclusion

React Native seems to me like a great tool, and I think the fact that it's built on top of React makes it much easier to learn for anyone who knows React.  Nonetheless, I definitely personally don't find it as enjoyable as developing for web.  My next personal project is probably not going to be a React Native App, but I'd be okay working with it again in the future.


![Three phones with nature](https://media.discordapp.net/attachments/1015687534115815504/1199089685612478586/elvann_llustration_of_a_mobile_phone_app_with_nature_flat_desig_58d0bfd8-b770-4095-82ec-38edec7081bf.png?ex=65c1464b&is=65aed14b&hm=f0ce6285328043d1b7907c4d1a3a42ee8528bdef3600234c5baa2682def3a0c7&=&format=webp&quality=lossless&width=1197&height=671)