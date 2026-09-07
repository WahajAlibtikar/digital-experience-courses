import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata={title:"دورات التجربة الرقمية | من التعلّم إلى العمل",description:"استكشف مسارات التصميم وكتابة تجربة المستخدم والتطوير وأجايل والذكاء الاصطناعي، إلى جانب تطوير الذات والإرشاد المهني. أهداف واضحة ومحاور وتطبيقات لكل مسار.",icons:{icon:"/dx-icon.svg",shortcut:"/dx-icon.svg"}};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="ar" dir="rtl"><body>{children}</body></html>}
