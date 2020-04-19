const config = {
  gatsby: {
    pathPrefix: '/',
    siteUrl: 'https://samurai-magika.netlify.app/',
    gaTrackingId: null,
    trailingSlash: false,
  },
  header: {
    logo: 'https://gamepedia.cursecdn.com/l5r_gamepedia_en/thumb/1/1f/Rings.png/300px-Rings.png?version=847592acb13aa436aa4a6a90e7631c1b',
    logoLink: '',
    title:
      "<a href='“A feudal fairy tale in fantasy Japan”' alt='Learn logo' /></a>",
    githubUrl: 'https://github.com/hasura/gatsby-gitbook-boilerplate',
    helpUrl: '',
    tweetText: '',
    social: `<li>
		    <a href="https://twitter.com/hasurahq" target="_blank" rel="noopener">
		      <div class="twitterBtn">
		        <img src='https://graphql-engine-cdn.hasura.io/learn-hasura/assets/homepage/twitter-brands-block.svg' alt={'Discord'}/>
		      </div>
		    </a>
		  </li>
			<li>
		    <a href="https://discordapp.com/invite/hasura" target="_blank" rel="noopener">
		      <div class="discordBtn">
		        <img src='https://graphql-engine-cdn.hasura.io/learn-hasura/assets/homepage/discord-brands-block.svg' alt={'Discord'}/>
		      </div>
		    </a>
		  </li>`,
    links: [{ text: '', link: '' }],
    search: {
      enabled: false,
      indexName: '',
      algoliaAppId: process.env.GATSBY_ALGOLIA_APP_ID,
      algoliaSearchKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
      algoliaAdminKey: process.env.ALGOLIA_ADMIN_KEY,
    },
  },
  sidebar: {
    forcedNavOrder: [
      '/introduction', // add trailing slash if enabled above
      '/codeblock',
    ],
    collapsedNav: [
      '/codeblock', // add trailing slash if enabled above
    ],
    links: [{ text: 'Hasura', link: 'https://hasura.io' }],
    frontline: false,
    ignoreIndex: true,
    title: "<i>\"A warrior is worthless unless he rises above others and stands strong in the midst of a storm."</i>",
  },


  siteMetadata: {
    title: 'Samurai Magika | A Tale From L5R',
    description: 'A fan-made wiki, built by and made for the fans of both the anime and light novel',
    ogImage: 'https://gamepedia.cursecdn.com/l5r_gamepedia_en/thumb/1/1f/Rings.png/300px-Rings.png?version=847592acb13aa436aa4a6a90e7631c1b',
    docsLocation: 'https://github.com/hasura/gatsby-gitbook-boilerplate/tree/master/content',
    favicon: 'https://gamepedia.cursecdn.com/l5r_gamepedia_en/thumb/1/1f/Rings.png/300px-Rings.png?version=847592acb13aa436aa4a6a90e7631c1b',
  },
  pwa: {
    enabled: false, // disabling this will also remove the existing service worker.
    manifest: {
      name: 'Samurai Magika Fandom Wiki',
      short_name: 'SamuraiMagika',
      start_url: '/',
      background_color: '#6b37bf',
      theme_color: '#6b37bf',
      display: 'standalone',
      crossOrigin: 'use-credentials',
      icons: [
        {
          src: 'src/pwa-512.png',
          sizes: `512x512`,
          type: `image/png`,
        },
      ],
    },
  },
};

module.exports = config;
