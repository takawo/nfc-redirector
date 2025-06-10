// api/index.js

export default function handler(req, res) {
  const urls = [
    "https://example.com/page1",
    "https://example.com/page2",
    "https://example.com/page3"
  ];
  const randomUrl = urls[Math.floor(Math.random() * urls.length)];
  res.writeHead(302, { Location: randomUrl });
  res.end();
}
