const conf = {
    plugins : [
        {
            resolve: `gatsby-source-strapi`,
            options: {
                apiURL: `http://localhost:1337`,
                queryLimit: 1000, // Default to 0
                contentTypes: [`firstpage`,`footer`,`article`],
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        `gatsby-plugin-sass`
    ]
}

module.exports = conf