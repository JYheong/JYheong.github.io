---
title: "blog"
layout: archive
permalink: /one
# sidebar:
#    nav: "sidebar-category"
---

hello this is _pages/one

{% assign posts = site.categories.one %}
{% for post in posts %} {% include archive-single.html type=page.entries_layout %} {% endfor %}

