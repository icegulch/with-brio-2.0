---
title: About
permalink: /
templateEngineOverride: njk
eleventyExcludeFromCollections: true
order: 0
specs:
  - Passports
  - Posters
  - Prints
blurb: "Hi! I'm Steve. I'm a dad. I'm a husband. I'm a New Hampshire native with a Colorado problem. I work in print and on the web. I sift through maps and tables looking for compelling stories in data. In 2017, I hiked all of NH's 4000-Footers in a single winter season. In 2018, I hiked the Colorado Trail (the parts that weren't on fire). And in 2019, I hiked the Appalachian Trail. No more long trails for a while!"
---

<div class="page-section page-section--compact-top">
  <div class="container-fluid container-fluid--maxwidth">
    <div class="row justify-content-center">
      {%- for product in collections.orderedProducts %}
      <div class="col-md-6 col-xl-4 showcase">
        <figure class="showcase__img">
          <a href="{{ product.url | url }}" class="showcase__link">
            <img src="/images/products/{{ product.fileSlug }}/{{ product.fileSlug }}-hero.jpg" class="img-fluid">
          </a>
        </figure>
      </div>
      {%- endfor -%}
    </div>
  </div>
</div>

<div class="page-section page-section--compact-top">
  <div class="container">
    <blockquote class="blockquote">
      <div class="blockquote__quote">
        &ldquo;We have advanced by leaps to the Pacific, and left many a lesser Oregon and California unexplored behind us.&rdquo;
      </div>
      <footer class="blockquote__footer">
        &ndash; Henry David Thoreau, <cite>The Maine Woods</cite>
      </footer>
    </blockquote>
  </div>
</div>

