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
blurb: "Hi! I'm Steve. I'm a New Hampshire native with a Colorado problem. I work in print and on the web. I sift through maps and tables looking for compelling stories in data. My sister, Kate, is my partner in crime! Together, we bring to life products that encourage kids and adults to get outdoors!"
---

<div class="page-section page-section--compact-top">
  <div class="container-fluid container-fluid--maxwidth">
    <div class="row justify-content-center">
      {%- for product in collections.orderedProducts %}
      <div class="col-md-6 col-xl-4 showcase">
        <figure class="showcase__img">
          <a href="{{ product.url | url }}" class="showcase__link">
            <img src="/images/products/{{ product.fileSlug }}/{{ product.fileSlug }}-hero.jpg?nf_resize=fit&w=780" class="img-fluid">
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

