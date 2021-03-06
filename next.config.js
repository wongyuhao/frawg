module.exports = {
  reactStrictMode: true,
  env: {
    SPOTIFY_CLIENT_ID: process.env.SPOTIFY_CLIENT_ID,
    SPOTIFY_CLIENT_SECRET: process.env.SPOTIFY_CLIENT_SECRET,
    SPOTIFY_REFRESH_TOKEN: process.env.SPOTIFY_REFRESH_TOKEN,
    GRAPHCMS: process.env.GRAPHCMS,
  },
  images: {
    domains: ['i.scdn.co', 'img.youtube.com','media.graphcms.com'],
  }
}
