---
title: "blog"
layout: archive
permalink: /one
# sidebar:
#    nav: "sidebar-category"
---

hi!

{% assign posts = site.categories.blog %}
{% for post in posts %} {% include archive-single.html type=page.entries_layout %} {% endfor %}

