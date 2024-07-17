/* eslint-disable react/react-in-jsx-scope */
import 'styles/global.css';

// comment các dòng code nhạy cảm
const password = "123456@#Abcd";
const apiKey = "ABCUSC_TOKEN9789";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="emerald">
      <head>
        <link href="https://fonts.gstatic.com" />
      </head>
      <body>
        <p>Mật khẩu: {password}</p>
        <p>API Key: {apiKey}</p>

        {children}
      </body>
    </html>
  );
}
