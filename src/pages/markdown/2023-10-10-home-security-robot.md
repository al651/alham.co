---
title: Home Security Robot
card_img: /media/2023-10-06-home-security-robot/my-messy-robot-design.avif
date: October 10, 2023
---

Back in May, I developed a home security proof of concept for my final year project at the University of Portsmouth. I finalised this idea after iterating through several other ideas because it combined my love of programming with my love of electronics and engineering.

The project was made in two main sections: the app and the robot.

## The App

The app was made in Flutter, below is a demo of the app.

<iframe id="QE4tuhMR4Xg" title="A demonstration of a connection to the camera on the robot." poster="maxresdefault"></iframe>

<figure>
    <figcaption>In the video I connect to the local IP address of the ESP32-CAM.</figcaption>
</figure>

## The Robot

Given more time, I could have made a nicer-looking and better-functioning robot, but since it was a proof of concept, I made this.

<figure>
    <img className="post-img" src="/media/2023-10-06-home-security-robot/my-messy-robot-design.avif" alt="My home security robot.">
    <figcaption>The final robot design.</figcaption>
</figure>

The robot was made using a simple car kit I found on Amazon, and I modified the design by drilling a bunch of holes in the plastic. In retrospect, there were better ways of mounting stuff to this chassis.

<iframe id="AAkUKtALuzk" title="Demonstration of the robot, showcasing its collision avoidance." poster="maxresdefault"></iframe>

<figure>
    <figcaption>A video demo of the robot, showcasing its collision avoidance.</figcaption>
</figure>

For those interested in more of the technical aspects of this project, I made the source code available on <a className="extlink" href="https://github.com/al651/Home_Security_Robot">Github</a> with further details in the <a className="extlink" href="https://github.com/al651/Home_Security_Robot/blob/main/README.md">README</a> file.
