export const metadata = {
  title: 'Swan Birdz | Dhuri Restaurant',
  description: 'A modern restaurant website for Swan Birdz in Dhuri, serving multi-cuisine food with a warm family dining experience.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
