

<h1 align="center">
  Gatsby generated organization website
</h1>

This part uses Gatsby to generate a static website from the strapi data (mongoDB)

It is based on Gatsby's hello world starter.

## How to start : 
* develop : 

    npm run develop

* build : 

    npm run build

## Plugins used :
* `gatsby-transformer-sharp`
* `gatsby-plugin-sharp`
* `gatsby-plugin-sass`
* `gatsby-source-strapi`

## Pages : 
* **index.js** : home, general presentation of organization
* **history.js** : organization's history

## Components
* **footer.js** : a footer
* **image-section.js** : an image section for article sections
* **layout.js** : general page layout
* **main-content.js** : container for main page content
* **navbar.js** : the navbar
* **quote-list.js** : quote list element from home page
* **quote.js** : a single quote component used with quote-list
* **section.js** : text section for articles

## TODO :
- [x] home page
- [ ] news page (list all news articles)
- [ ] generic news article page
- [ ] events page (list events)
- [ ] generic event page (same as article ?)
- [x] history page (organization's history)
- [ ] organizational chart page (organization's structure)
- [ ] join us page (form to fill)
- [ ] contact us page (map + mail + social)
- [ ] donation page

