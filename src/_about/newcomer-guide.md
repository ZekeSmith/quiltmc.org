---
title: titles.about.newcomer-guide
layout: about-page
description: descriptions.about.newcomer-guide
---

This document is intended to be an overview of Quilt, and a way to address common questions and concerns by newcomers
to The Quilt Project, its ecosystem or its community spaces. If you've been linked here, please read this page in full,
as it may answer some questions you've been thinking about.

To start with, though, let's get the basics out of the way...

# What is Quilt?

Quilt is a new mod-loader project for Minecraft. As explained on [the main "About" page](/about/), it exists in order
to address the issues that have cropped up in other mod-loader projects over time, building upon the technical
foundations provided by The Fabric Project. It aims to excel in many areas -- not just when it comes to its
technology, but also in its decentralised and community-centric approaches to governance, its attempts to practice
user-friendly software design, and its inclusive, harm-reducing approach to community management.

While it's true that some of this work will appear abstract to some types of Quilt users, we believe that if a job is
worth doing, then it's worth doing right -- and we all strive to make the Minecraft modding sphere better through our
work.

# Why not just contribute to other mod-loaders?

As we have different goals and approaches to community management and governance (among other things), we realised that
starting a separate project was the best way to achieve our goals -- rather than trying to force other projects to
align with our ideals.

We aim for Quilt to be an alternative mod-loader for users, rather than directly competing with other mod-loader
projects. We believe that multiple projects that take different approaches to solving the problems that writing 
Minecraft mods presents will push the ecosystem forward in a more productive way than a single mod-loader monopoly,
and we hope that our work inspires other mod-loaders and motivates them to improve themselves alongside us.

We currently work directly with Forge on moderation-related issues, and we're looking to work with them on some 
technical problems. We also contribute relevant fixes to them, for cases where we've forked their projects -- such 
as with [QuiltFlower](https://github.com/quiltMC/quiltflower) and 
[ForgeFlower](https://github.com/MinecraftForge/ForgeFlower).

# Questions and Concerns

Below, you'll find a list of common questions and concerns. Because some answers are quite long, they've been 
collapsed -- please click or tap on them to read our response. Additionally, it's entirely possible that we've 
forgotten to cover something here -- we'd love to hear from you if you think of anything that needs adding!

{% admonition %}
{% details %}
{% summary %}What does Quilt provide over other mod-loaders?{% endsummary %}

At the time of writing, Quilt is in beta -- that means that it's still in a testing phase, so not everything we'd like 
to do has been done quite yet. It also means that many of the things we've done to the project itself are 
developer-oriented (although this can still result in better mods for everyone) -- because we believe it's important to
build a solid technical foundation before working on quality-of-life features.

Right now, the following things are already true:

* Quilt takes a community-focused approach to just about everything, making plenty of room for people to voice their
  opinions and weigh in on important development decisions before they happen, and working with the community to meet
  its members' needs in community spaces
* QuiltFlower, Quilt's decompiler project, has been vastly improved compared to FernFlower and the other FernFlower 
  forks used in the modding sphere, producing far more readable and more accurate decompiled code for modders to work
  with
* Quilt Mappings, Quilt's mappings project, does not have a clean-room policy, which means that developers are welcome 
  to use whatever mappings they'd prefer, and they'll still be able to get mod development support in Quilt community 
  spaces; we also hope that this will result in higher-quality names going forward
* Quilt's Standard Libraries (QSL) already provide a larger API surface than Fabric's API in some instances, such as
  the QSL dynamic recipe module and the resource loader improvements

The following improvements are also planned for a full release:

* Clearer errors when required mods are missing or mods are incompatible with each other -- user-friendly errors are
  a large focus of some of our work, and we're hoping to get some dedicated people working on that soon
* Automatic detection of QSL modules used by mods at compile-time, and automatic downloading of those modules at
  runtime, eliminating the requirement for users to download the entirety of QSL for Quilt mods using it to
  function (but this will be able to be reconfigured and disabled by users, if they'd prefer)
* An inclusive implementation for loader plugins, which will allow developers to modify how Quilt loads mods, and to
  load them from other sources -- for example, this would allow a project like Sponge to natively integrate its
  plugins with Quilt's Loader, if its developers wish to
* An intermediary mapping system called Hashed Mojmap which is automatically generated when new versions of Minecraft 
  are released, meaning that Quilt's core toolchain is usable on new snapshots immediately after they are 
  released -- Hashed Mojmap, unlike MCP and Intermediary, never requires human intervention to be released
* A new Gradle-based toolchain that replaces the existing one, which is currently based on Quilt's fork of Fabric's
  Loom
* The Chasm project, which will provide safer tooling for working with Java bytecode; acting as the backend for our
  Mixin implementation, but also allowing developers to easily add their own bytecode-manipulation tools -- This is a
  project with implications far wider than just the modding community, and we're very excited about it!

It's worth noting that while many of these improvements are developer-oriented, they should allow for higher-quality
mods that are more compatible with each other and require less development effort to maintain. Additionally, Quilt's
community-based approach attempts to focus on what's best for its developers, focusing on the things that they need
to write great mods while also taking the bigger picture into account, and avoiding playing favourites with larger 
mods or more well-known mod developers.

{% enddetails %}
{% endadmonition %}

{% admonition %}
{% details %}
{% summary %}What about the Fabric mods I already play?{% endsummary %}

If you already use Fabric, we have good news -- Quilt is also compatible with most Fabric mods! As long as the mods
don't make use of internal Fabric APIs, you should be able to add them to your `mods` folder as you always have and,
assuming you have our Quilted Fabric API installed ([which is part of QSL](https://modrinth.com/mod/qsl)), things 
should just work.

We plan on maintaining Fabric support for as long as we can -- we'll only stop it if it becomes infeasible to maintain
it as part of Quilt itself. That said, if it does happen, we'll be gifting that part of the project to the community,
and providing its new maintainers with as much help as we can.

{% enddetails %}
{% endadmonition %}

{% admonition %}
{% details %}
{% summary %}Won't this just further split the community?{% endsummary %}

This is a question we get a lot, and one that's clearly on a lot of people's minds. Instead of trying to predict the
future, though, let's break this one down a bit.

The concept of Minecraft modding has existed almost as long as Minecraft itself has -- with a very diverse range of
mods, mod-loaders and communities being created and finding their niches. That said, one mod-loader ended up taking
the crown for a very long time -- Forge.

As Forge's popularity grew and its range of mods expanded, many users became used to their workflow: they'd install
Forge, find some mods and, since Forge was the only really viable mod-loader for a long time, those mods probably
 just worked. Later on, other mod-loaders started appearing and disappearing. Liteloader showed 
up with its client-side modding framework. Rift appeared, and then died. Fabric appeared, and started gaining 
momentum -- and that's when the first major rift in compatibility between modern Minecraft mods formed.

Since then, there's been a lot of complaints about additional mod-loaders "fracturing the community". We don't have
a crystal ball, but of course the concept has some merit: as more mod-loaders pop up and more mods appear, it's
inevitable that users are going to run into mods that they want to play with, but that are incompatible with their 
favourite mod-loader. This can certainly be annoying, but it doesn't merit the harassment 
that many mod developers have gotten for refusing to bring their mods to a different mod-loader. We believe that
the benefits that come with providing users with more choice -- for example, motivating every project to do better, or 
the extra room for technical and modding innovation -- outweigh the inconveniences of fragmentation.

---

Regardless, it's difficult to say what precisely will happen. As is always the case with a project like this, the
earlier days of Quilt's life will most likely cause some friction in the modding sphere, as mod developers decide
whether they wish to support Quilt. This isn't one of Quilt's goals, nor is it our goal to try to eclipse other 
mod-loaders and force them into obscurity. Quilt is ultimately just trying to do its best in a crowded market, and that 
has both advantages and drawbacks.

Ultimately, though, we believe that the benefits of user choice outweigh the drawbacks of a shakeup of the modding
sphere. One of the reasons we decided to support Fabric mods on Quilt going forward was to try to help soften the
negative impact of its release -- but we've also been working with Forge on various issues, and we've been clear in our 
support for projects that attempt to make it easier for developers to create mods that work across mod-loaders.

That said, there's only so much we can do -- developers have the right to develop mods for the mod-loaders that they
choose, and we'd never wish to take that away from them. For most people, modding is a hobby -- there will never be a
good reason to deny developers more choice, and it's important that nobody tries to undermine their right to develop
mods using the tools that they prefer.

We all have the power to approach this issue in a mature way, and we owe it to the hard-working mod developers to do 
that. Speaking of which, if you're a mod developer that would like to look into writing cross-loader mods, please feel 
free to join us on Discord -- there are plenty of developers there that can point you in the right direction.

{% enddetails %}
{% endadmonition %}

{% admonition %}
{% details %}
{% summary %}What's different about Quilt's governance?{% endsummary %}

Most projects that you'll find on the Internet are governed in a top-down manner, as a form of strict hierarchy. This
often results in a tree-like or pyramid-like structure, in which the people at the top can, in one way or another,
decide the fate of the entire project, and exert influence on the people below them.

By contrast, Quilt uses a far less centralised structure. This results in a separation of responsibilities and control,
split between the teams that are best suited to deal with that particular part of the project. As of this writing,
Quilt's governmental structure is split into three major categories:

* The Admin Board
* The Community Team
* The Development Teams

While everyone that's a part of Quilt works alongside each other on a daily basis, there is no enforced structure of
superiority -- only a separation of responsibilities. Hierarchies exist where it's necessary and productive for them 
to, but they exist as a mechanism to further divide areas of work and to help staff members to specialise where they
need to, not to act as an explicit chain of internal authority.

For a full listing of our teams and who's part of them, please see [the Team Listings page](/about/teams/).

### The Admin Board

The Admin Board exists to help steer the project's overall direction, and to represent the project in situations where
it's not appropriate for the Community Team to do so -- as well as handling miscellaneous tasks that require familiarity
and oversight over the rest of the project. Their responsibilities include:

* Representing The Quilt Project in sponsorships and other types of partnership, other than community collaboration
* Acting as a form of oversight over the rest of the project, ensuring that processes are followed as documented and
  aiding with internal conflicts
* Acting as tie-breakers in Quilt's internal democratic processes, voting on issues that are in stalemates to get them
  moving along again
* Managing The Quilt Project's finances, and
  [ensuring that income and outgoings are documented transparently](https://opencollective.com/quiltmc)
* Handing out access permissions to the rest of the teams as needed, and acting as an ownership group on platforms that
  require it and aren't managed by the Community Team -- such as [on GitHub](https://github.com/QuiltMC)
* Aiding with the decision-making process by providing their expertise to the other teams, and taking charge on tasks
  that don't fall under the jurisdiction of another team

Despite its name, the Admin Board does not hold ultimate power over the rest of the project or its staff -- the other
teams operate independently, and the Admin Board acts as a supporting group for the rest of those teams.

### The Community Team

The Community Team is a specialist team that oversees all of Quilt's community spaces, as well as its social media
accounts and website, and handling any public relations tasks that come up. It's further subdivided into a number of
separate roles, in order to better distribute work and prevent abuses of access privileges.

#### Keyholders

The title of Keyholder refers to an individual that is appointed via an internal democratic election, and who exists to
hold the position of "Owner" in all official Quilt community spaces that do not have a reasonable concept of group
ownership.

Keyholders are reputable, well-known members of the wider Minecraft modding community that otherwise have no interest
in Quilt, but who would personally suffer a large blow to their reputation if they were to abuse their position.
Because of this, we hope that we can avoid any potential abuses of power.

A Keyholder will oversee the Community Team when required, help to ensure that Quilt's policies are followed in
internal Community Team spaces, and hand out permissions to the rest of the Community Team as required. They're also
welcome to weigh in on anything going on internally, but they're otherwise uninvolved with the project.

#### Community Managers

Community Managers oversee the daily operations of Quilt's official community spaces. As well as supporting the rest
of the Community Team and acting as Moderators, they handle administrative tasks in the community spaces, lead
interviews for Community Team applications, maintain and keep track of the tools used to keep the community spaces
running smoothly, and create and update Community Team policies.

Additionally, Community Managers lead investigations into wider social trends and controversies in the Minecraft
modding sphere, collating information and using it to supplement the Moderation Team's decisions, often banning
problem users before they cause any issues (or, in some cases, before they even enter our community spaces).

Community Managers have responsibilities that the Moderators don't, but they aren't superior to the rest of the
Community Team -- they have an equal say in decisions and votes, and only end up in a higher hierarchical position
because most platforms require that to be the case.

#### Moderators and Trainee Moderators

Moderators are in charge of watching over Quilt's official community spaces, resolving conflicts and removing bad
actors. They're the most important line of defense for our community spaces, enforcing Quilt's
[rules](/community/rules/) and [Code of Conduct](/community/code-of-conduct/), and keeping our users safe and 
discussions productive.

Trainee Moderators are newly-appointed Moderators, who have recently passed the Community Team's interview and voting
processes. They're designated separately in order to allow them time to get used to how Quilt's community spaces work,
and generally remain in the Trainee position for around two weeks -- before their performance on the team is evaluated
and the rest of the Community Team decides whether to promote them to a full Moderator position.

#### Events Team

Quilt's Events Team is in charge of planning, organising and running events in Quilt's community spaces, and sometimes
acting as extra Moderators during busy events. They work with the rest of Quilt's teams (and the wider Minecraft
modding community) to collate ideas and information relating to possible community events, and ensure that they come
to fruition and go smoothly.

Events Team members are not Moderators, and don't engage as Moderators outside the context of the events they're 
running (unless that specific member of the Events Team also happens to be a Moderator or Community Manager).

#### Outreach Team

The Outreach Team is responsible for running Quilt's social media accounts, creating and posting mixed-media relating
to Quilt (including the [developer meetings podcast](https://anchor.fm/quiltmc-dev-meetings/)), and producing blog posts
and articles for this website. They're Quilt's connection with the rest of the world in many cases, keeping the world
updated on Quilt news and keeping track of how people perceive Quilt online.

Outreach Team members are not Moderators, and don't engage as Moderators (unless that specific member of the 
Outreach Team also happens to be a Moderator or Community Manager).

### The Development Teams

The development teams are responsible for working on the technology behind Quilt as a project, writing code, fixing bugs
and generally working on maintaining the various pieces of software that make up Quilt. Each Quilt project is run by
a specific development team, and that team oversees all aspects of that project's development.

Development teams may also be split into sub-teams. This is generally done for larger projects or when a team has
multiple projects to look after, as it allows team members to specialize and prevents any one team from having to take
on too many concurrent responsibilities.

It's worth noting that anyone can contribute to any of Quilt's projects without joining one of the development teams,
but contributors will still be interacting directly with whatever team is running the project they're working with.

{% enddetails %}
{% endadmonition %}

{% admonition %}
{% details %}
{% summary %}Pineapple? Isn't that a pumpkin?{% endsummary %}

Pineapple is Quilt's first community mascot -- its pronouns are it/its, and it was born on the day The Quilt Community
Discord opened to the public: the 20th of April, 2021. On that day, our users and staff members decided to hang out
in voice chat, eventually setting up a game on [skribbl.io](https://skribbl.io).

As part of their turn, one of the players was tasked with drawing a pumpkin. This lead to many people typing in
"pineapple" as their guess -- and thus, Pineapple was born!

<figure>
<a href="/assets/img/pineapple.png">
<img alt="Pineapple, one of Quilt's mascots" src="/assets/img/pineapple.png" />
</a>
</figure>

Pineapple is a core part of our community's culture, and we often use it to represent our community -- both officially
and informally. If you find yourself in Quilt community spaces, you'll definitely see many variants of Pineapple's
original drawing -- please feel free to create your own art too, if you'd like!

{% enddetails %}
{% endadmonition %}

{% admonition %}
{% details %}
{% summary %}What's up with Quilt's community moderation?{% endsummary %}

Among other things, Quilt exists to address issues with poor moderation in some other parts of the Minecraft community.
We employ an approach that we call "Defensive Moderation" -- an emerging concept that focuses primarily on harm 
reduction and investigative moderation, keeping an eye on behaviours and trends in the wider community and acting upon
them to prevent issues before they happen.

The reason our approach feels so different to other communities' is because we investigate and act upon issues that
appear in the wider community, even if they don't directly affect Quilt. We believe that nothing happens in a vacuum,
and a problematic situation somewhere else is good evidence that the people involved may cause similar situations in 
our spaces. We're not shy about banning problematic users before they even set foot in Quilt community spaces, and some 
people find this perplexing -- but we believe in this approach, and it's been a big contributor in keeping Quilt users 
safe from discrimination and other harmful behaviours.

Similarly, Quilt itself doesn't operate in a vacuum -- we operate a program known as Quilt Community Collab, where we
work with other related communities on moderation-related issues and events. Working alongside organisations such as
Forge means that we can contribute to improving the _entire_ community sphere, for everyone -- and in return, those 
organisations help us with our investigations and moderation-related issues.

We believe that all communities can contribute positively to the well-being of their users, and that they have a
responsibility to create safe, inclusive spaces, and to set a trend doing so -- encouraging more communities to do the
same, and making the Internet a better place for everyone.

{% enddetails %}
{% endadmonition %}

{% admonition %}
{% details %}
{% summary %}Does Quilt send my mods to the servers I play on?{% endsummary %}

This is a misconception based on poor communication: at one point, to help ease the moderation burden in Quilt's
community spaces, we were thinking about potentially sending the client's list of mods to the servers they connect to
(like what Forge does). However, this was never formalized -- no RFC was made, and nothing like this was
implemented for the beta.

Since then, better ideas have appeared. One example is in the in-progress 
[RFC #17](https://github.com/QuiltMC/rfcs/pull/17), which proposes a standard feature toggle system -- allowing servers
to tell clients what they expect of them, and for mods to configure themselves based on those expectations.

We prefer a solution that doesn't impact the privacy of our users -- we're still open to alternative suggestions, but 
we do believe that the above RFC may be the correct solution.

{% enddetails %}
{% endadmonition %}

{% admonition %}
{% details %}
{% summary %}Why don't you explain the Fabric drama here?{% endsummary %}

This is a question we've been getting a lot since Quilt entered beta -- it's something that sounds reasonable on paper, 
but we strongly feel that it's not an appropriate subject for our website, nor is it a discussion that can be 
productive in our community spaces.

It's worth noting that the philosophy behind Quilt (from its community management style to its governance approach) is 
independent of and largely predates the Fabric drama. Quilt -- its developers, contributors, moderators, and 
users -- are not defined by those events. We aim to be the best mod-loader and modding community that we can be, not 
to simply be a Fabric clone with different leadership.

We want to move on from what happened, so we won't spend lots of time dwelling on these events. We believe that our 
work stands on its own, and doesn't require propping up against the backdrop of the past. For that reason, we're going
to continue working on Quilt, pushing for better, more inclusive, safer community spaces, and doing our best -- not 
just for our own users, but to try to improve the modding community at large.

{% enddetails %}
{% endadmonition %}
