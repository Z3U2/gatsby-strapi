

<h1 align="center">
  Strapi Headless CMS
</h1>

Using strapi for an effortless cms to use with gatsby (and graphql)

## Database connection :
Before using this CMS please make sure that you have mongoDB installed and configure strapi to use your DB.
Please refer to [official deployment instructions](https://strapi.io/documentation/3.0.0-alpha.x/guides/deployment.html) for details.

## How to start : 

    strapi start


## APIs : 
* **section** : building block of articles, has a name, content text and image
* **article** : an article, made of multiple sections plus a banner (image + title and subtitle)
* **socialmedia** : links to social medias + icons and name
* **footer** : footer
* **quote** : name, picture and position (in the organisation) + the quote text
* **parallax** : image + title + subtitle, used for parallax images, particularly in the home page
* **firstpage** : the home page content

For more details, check the models (api/*/models/)

