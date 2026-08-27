import "./globals.css";

export const metadata = {
  title: "ADEL",
  description: "سیستم مدیریت رستورانت و شیرینی‌سرای عادل"
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
