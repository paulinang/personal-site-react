import overwatchBixbyGif from '../assets/images/projects/overwatch-league-fan.gif';
import moodwatchGif from '../assets/images/projects/moodwatch.gif';

const projects = {
  personalSite: {
    title: 'Personal Site with React.js',
    github: 'https://github.com/paulinang/personal-site-react',
    summary:
      "My personal website that you're currently exploring! A frontend focused project for React and HTML/CSS skills I have been learning in my spare time.",
    techUsed: 'Javascript, React, HTML/CSS',
  },
  overwatchBixby: {
    title: 'Overwatch League Fan - Bixby voice assistant app',
    github: 'https://github.com/paulinang/overwatchLeagueFan-bixby-capsule',
    summary:
      "A Bixby voice assistant app that gives schedule and match info for the professional eSports Overwatch League. As the same Bixby developer tools I use for work are available to the public, I decided to create my own application in my spare time to put myself in the external developer's shoes. I chose a personal interest (video gaming) to build an app around and published it on the Bixby martketplace in en-US. This gave me insight into the external dev process to allow me to be a better advocate for them.",
    techUsed:
      'Bixby modeling language and views, Javascript, PandaScore API for eSports data',
    image: overwatchBixbyGif,
  },
  hackbrightMoodwatch: {
    title: 'MoodWatch - Mental health tracking web app',
    github: 'https://github.com/paulinang/moodwatch',
    summary:
      "For my 2016 software engineering fellowship at Hackbright Academy, I built an app for tracking mental wellness. Users could create accounts and track moods as numerical ratings to be visualized. To keep users on track, there are special user accounts for 'doctors' to review moods and medication, as well as Cron job to monitor activity and email users reminders.",
    techUsed:
      'Python, Flask, PostgreSQL, Pandas library for statistical analysis, Cron jobs and Flask-Mail for scheduled email alerts, JS, HTML/CSS, Chart.js library for data visualization',
    image: moodwatchGif,
  },
};

export default projects;
