import { Tajawal } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

const font = Tajawal({
  weight: 400,
  subsets: ["latin"],
});


export const metadata = {
    title: "فريق sytnrix ",
  description: " فريق متخصص في تقديم حلول إبداعية وخدمات احترافية لتحقيق رؤيتكم وتطلعاتكم بأعلى معايير الجودة والدقة   ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="rtl">
      <body className={`${font.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
