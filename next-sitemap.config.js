/** @type {import('next-sitemap').IConfig} */

module.exports = {
    siteUrl: 'http://172.16.3.120:3000', // ganti dengan domain website
    generateRobotsTxt: true, // generate file robots.txt
    sitemapSize: 5000 // maksimal jumlah URL per file sitemap
}