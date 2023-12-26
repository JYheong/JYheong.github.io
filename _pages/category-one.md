---
#title: "blog"
#layout: archive

# permalink: /one

layout: post #single
title:  "side one"
 
last_modified_at: 2020-05-25
date: 2020-05-25

published: true

# sidebar:
#    nav: "sidebar-category"
---

hello this is _pages/one

{% assign posts = site.categories.one %}
{% for post in posts %} {% include archive-single.html type=page.entries_layout %} {% endfor %}

