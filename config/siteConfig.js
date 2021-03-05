const config = {
  author: 'QuietHeroine', // Site owner
  siteTitle: 'Laura', // Site title.
  siteTitleShort: "Archeloth's Blog", // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
  siteTitleAlt: "Archeloth's Gatsby Blog", // Alternative site title for SEO.
  siteLanguage: 'en', // Site language.
  siteDescription: 'A blog starter with the bare essentials needed for a Gatsby site(SEO, pagination, category etc.)', // Website description used for RSS feeds/meta description tag.
  siteLogo: 'static/favicons/favicon-32x32.png', // Logo used for manifest.
  siteUrl: 'https://gatsby-starter-papan01.netlify.com', // Domain of your website without pathPrefix.
  pathPrefix: '/', // Prefixes all links. For cases when deployed to example.github.io/gatsby-material-starter/.
  siteRss: '/rss.xml', // Path to the RSS file.
  siteFBAppID: '214355523020609', // FB Application ID for using app insights
  siteGATrackingID: 'UA-153303709-3', // Tracking code ID for google analytics.
  twitterUserName: '', // twitter creator for SEO
  datePublished: '2021-03-05', // for SEO
  copyrightYear: '2021', // for SEO
  postsPerPage: 4, // posts per page used in gatsby-node.js
  // Links to social profiles you want to display in the footer.
  rrssb: [
    {
      label: 'github',
      url: 'https://github.com/papan01',
      iconClassName: 'fab fa-github',
    },
    {
      label: 'mail',
      url: 'mailto:navy90517@gmail.com',
      iconClassName: 'fa fa-envelope',
    },
    {
      label: 'facebbok',
      url: 'https://www.facebook.com/louis.peng.58?ref=bookmarks',
      iconClassName: 'fab fa-facebook',
    },
    {
      label: 'instagram',
      url: 'https://www.instagram.com/n_louis_peng/?hl=zh-tw',
      iconClassName: 'fab fa-instagram',
    },
  ],
  // Links to pages you want to display in the navigation bar.
  navbarLinks: [
    {
      label: 'Archives',
      url: '/archives',
    },
    {
      label: 'Categories',
      url: '/categories',
    },
    {
      label: 'About',
      url: '/about',
    },
  ],
};
config.copyright = `Copyright © ${config.copyrightYear}. ${config.author}`;

// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === '/') {
  config.pathPrefix = '';
} else {
  // Make sure pathPrefix only contains the first forward slash
  config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, '')}`;
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === '/') config.siteUrl = config.siteUrl.slice(0, -1);

// Make sure siteRss has a starting forward slash
if (config.siteRss && config.siteRss[0] !== '/') config.siteRss = `/${config.siteRss}`;

module.exports = config;
