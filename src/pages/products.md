---
title: Products
permalink: /products/
templateEngineOverride: njk
order: 1
specs:
  - Passports
  - Posters
  - Prints
blurb: "In early 2015, I decided to give form to an idea that had long been simmering: a 'periodic table' of New Hampshire's 4000-foot mountains. It was intended to be a gift for one or two hiking friends. Three years and as many print runs later, I'm still humbled by the positive reception. Buoyed by others' passion for the White Mountains, I continue to dream up products that abide by one simple principle: make things I would've enjoyed as a young hiker."
---

<div class="page-section page-section--compact-top">
  <div class="container-fluid container-fluid--maxwidth">
    <div class="row justify-content-center">
    {%- for product in collections.orderedProducts %}
    <div class="col-md-4 showcase">
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
