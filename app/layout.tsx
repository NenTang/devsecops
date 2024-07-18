/* eslint-disable react/react-in-jsx-scope */
import 'styles/global.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="emerald">
      <head>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
