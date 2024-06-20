---
title: Remote Firework Ignition
card_img: /media/2023-10-01-remote-firework-ignition/london-fireworks.jpg
date:  April 20, 2024
---

A few years ago I had an idea to create a remote firework firing system. The idea came from wanting to create something using RF signals which I had ordered boards to play with. It fascinated me that I could remotely trigger something without the unreliability of bluetooth and without an internet connection. Even before starting research for this project, I knew that I was likely not the first to come up with this idea. At first, I wasn't planning on making something different but just wanted to make something cool and learn from it.

## First RF Test

<iframe id="0uI0bi6iBv8" title="Demo of RF signals being sent to the computer and its output." poster="maxresdefault"></iframe>

<figure>
    <figcaption>First RF signal test shows the computer recieved output of the RF signal.</figcaption>
</figure>

This initial test was to see if I could get the RF signals working with a generic RF remote I bought online, which I intended to use for the fireworks activator. The initial tests were a success! As you see from the video, my remote sends the signals, the reciever recieves it, and the computer displays what it receives.

<zoom>
    <img className="post-img" src="/media/2023-10-01-remote-firework-ignition/rf-signal-reciever-XY-MK-5V.jpg" alt="The RF reciever board that was used." width="400">
</zoom>

<figure>
    <figcaption>The RF reciever I used. XY-MK-5V RF Reciever Module 433MHz</figcaption>
</figure>

## Second RF Test

<iframe id="fq4xKHjIwF4" title="Demo of the RF signal used to change the colour of an RGB LED." poster="maxresdefault"></iframe>

<figure>
    <figcaption>Second RF signal test shows the RF signal controlling an RGB LED.</figcaption>
</figure>

<iframe id="gy3nSZKkDFQ" title="Demo of the RF signal used to change the colour of an RGB LED." poster="maxresdefault"></iframe>

<figure>
    <figcaption>Here I programmed the LED to use more colours.</figcaption>
</figure>

After successfully conducting my RGB LED tests, I feel confident about this project's potential. Using this board, it seemed that I could trigger a firework remotely, which is a significant realisation and step forward.

Initially, I struggled because I found more difficulties to consider as I thought about it. I knew I would be using E-matches to trigger the fireworks fuses, but how would I even source those? What voltage do those require? My initial job was to get my hands on some of these.

<zoom>
    <img className="post-img" src="/media/2023-10-01-remote-firework-ignition/talon-e-match.jpg" alt="A single Talon electronic match" width="600">
</zoom>

<figure>
    <figcaption>Talon E-match</figcaption>
</figure>

## Firework Test

After doing some research on E-matches, they seemed to be readily available on specialist fireworks-selling sites. I found they also take very little to fire, two or three 18650 batteries would do the trick, so I used two for testing.

<zoom>
    <img className="post-img" src="/media/2023-10-01-remote-firework-ignition/18650-battery.png" alt="A single 18650 rechargeable battery." width="400">
</zoom>

<figure>
    <figcaption>18650 Rechargeable Battery</figcaption>
</figure>

Before I get this to work on an E-match I wanted to see if I could deliver enough voltage to trigger anything remotely through an RF signal.

<iframe id="zHjUKfPjhPM" title="Demo of the RF signal being sent to a relay to light up an LED." poster="maxresdefault"></iframe>

<figure>
    <figcaption>An RF signal turns an LED on briefly.</figcaption>
</figure>

The prototype has reached a stage where an E-match could be attached to trigger a firework. Of course, I would prioritise adding more safety features before testing it on a real firework, but how about a small fuse instead?

<iframe id="3tdBnFd1Pgs" title="An e-match igniting a fuse from a distance using an RF signal." poster="maxresdefault"></iframe>

<figure>
    <figcaption>The e-match ignites a fuse, triggered by an RF signal.</figcaption>
</figure>

I had triggered maybe two E-matches before this clip, but it was very cool to finally have something I could show on camera. Unfortunately, I burned the alligator clips on my helping hand soldering station to get this shot, but I think it was worth it.

<zoom>
<img className="post-img" src="/media/2023-10-01-remote-firework-ignition/burnt-alligator-clip.jpg" alt="" width="1000">
</zoom>

<figure>
    <figcaption>Burnt alligator clip ):</figcaption>
</figure>

This project has been an absolute joy, even though I've had to work on it during a time when I couldn't test it on fireworks due to legal restrictions in the UK. I'm considering revisiting this project with an update when I can test it on real fireworks and with additional safety features. Despite the limitations, this has been a fantastic learning experience for me, and I've thoroughly enjoyed every moment.

## More thoughts

Initially, I said I wanted to use RF because it particularly fascinated me over technology such as Bluetooth. Still, doing some research after I completed this project, I found that Bluetooth systems similar to this one were surprisingly expensive and usually came with an app that would have to be downloaded on the user's phone. I have a habit of seeing something that seems simple to me and thinking that I could make it cheaper, and this did intrigue me, especially since I have recently learned to use Flutter for my Home Security Robot project.

For now though I think I'm happy to put this project down and move on to the next. 😄