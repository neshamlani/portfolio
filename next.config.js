module.exports = {
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: '/',
        headers: [
          {
            key: 'x-robots-tags',
            value: 'index,follow',
          },
        ],
      },
    ]
  },
}
