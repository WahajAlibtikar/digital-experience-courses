import Link from "next/link";
import { ArrowLeft, ArrowUpLeft, Code2, HeartHandshake, Layers3, PenLine, Sparkles } from "lucide-react";

const groups = [
  { title: "نماذج المحادثة والكتابة", icon: Sparkles, color: "#02B871", count: "05", items: [
    ["كاتب واضح", "صياغة نصوص عربية مفهومة بنبرة إنسانية ومباشرة.", "ChatGPT · Claude · Gemini"],
    ["محرر النبرة", "حوّل النص بين نبرات رسمية، ودودة، تعليمية ومقنعة.", "ChatGPT · Claude"],
    ["باحث منظم", "استخرج الأفكار، قارن المصادر، وابنِ ملخصًا يمكن مراجعته.", "ChatGPT · Gemini"],
  ] },
  { title: "التصميم وتجربة المستخدم", icon: Layers3, color: "#9D56F7", count: "06", items: [
    ["مراجع تجربة المستخدم", "حلّل تدفق الاستخدام واكتشف نقاط الاحتكاك قبل أن تتحول إلى مشكلة.", "ChatGPT · Claude · Gemini"],
    ["شريك Figma", "حوّل الفكرة إلى brief، تدفقات، حالات واجهة، ومعايير قبول واضحة.", "ChatGPT · Claude"],
    ["ناقد الواجهة", "قدّم مراجعة عملية للهرمية، الوصول، المحتوى والاتساق البصري.", "ChatGPT · Gemini"],
  ] },
  { title: "الدعم العاطفي والرفاه", icon: HeartHandshake, color: "#F06AA6", count: "04", items: [
    ["مساحة آمنة", "استمع بتعاطف، اسأل بلطف، وساعد على ترتيب المشاعر دون أحكام.", "ChatGPT · Claude · Gemini"],
    ["رفيق العادات", "حوّل النية إلى خطوات صغيرة قابلة للاستمرار والمتابعة.", "ChatGPT · Gemini"],
    ["مُنظّم الأفكار", "ساعد على تسمية ما نشعر به واختيار الخطوة التالية بهدوء.", "ChatGPT · Claude"],
  ] },
  { title: "البرمجة والعمل", icon: Code2, color: "#56A8F7", count: "05", items: [
    ["مراجع الكود", "اقرأ الكود، اشرح المخاطر، واقترح تحسينات قابلة للتنفيذ.", "ChatGPT · Claude · Gemini"],
    ["مخطط المنتج", "حوّل المتطلبات المبعثرة إلى نطاق إصدار، قصص مستخدم وأولويات.", "ChatGPT · Claude"],
    ["مدرب المقابلات", "تدرّب على الإجابات، واصنع أمثلة تبرز خبرتك دون مبالغة.", "ChatGPT · Gemini"],
  ] },
];

export default function SkillsPage() {
  return <main className="catalogPage">
    <header className="catalogNav wrap"><Link href="/" className="textLogo"><img src="/dx-icon.svg" alt="" aria-hidden="true" />التجربة <span>الرقمية.</span></Link><nav><Link href="/">الرئيسية</Link><Link href="/articles">مقالاتي</Link></nav><Link href="/" className="catalogBack">العودة للموقع <ArrowLeft aria-hidden="true"/></Link></header>
    <section className="catalogHero wrap"><span className="kicker">مهارات النماذج · skill.md</span><h1>مهارات جاهزة<br/><em>لنماذج الذكاء.</em></h1><p>ملفات مهارات عملية تضع النموذج في دور واضح، وتمنحه سياقًا ومعايير جودة تساعده على تقديم نتيجة أفضل.</p><div className="catalogStats"><span><b>20+</b> مهارة قيد البناء</span><span><b>04</b> تصنيفات</span><span><b>01</b> ملف قابل للنسخ</span></div></section>
    <section className="catalogGroups wrap">{groups.map(group => { const Icon=group.icon; return <section className="skillGroup" key={group.title} style={{"--accent":group.color} as React.CSSProperties}><div className="skillGroupHead"><div className="skillGroupTitle"><span className="skillGroupIcon"><Icon aria-hidden="true"/></span><div><span className="kicker">{group.count} مهارات</span><h2>{group.title}</h2></div></div><span className="skillRule"/></div><div className="skillGrid">{group.items.map(([name,desc,models]) => <article className="skillCard" key={name}><div className="skillCardTop"><span className="skillDot"/><span dir="ltr">skill.md</span></div><h3>{name}</h3><p>{desc}</p><div className="skillCardFoot"><small dir="ltr">{models}</small><button type="button" aria-label={`عرض مهارة ${name}`}>عرض المهارة <ArrowLeft aria-hidden="true"/></button></div></article>)}</div></section>})}</section>
    <section className="catalogCta"><div className="wrap"><PenLine aria-hidden="true"/><div><span className="kicker">تريد مهارة مخصصة؟</span><h2>اكتب لي المهمة، ونبني لها ملف مهارة.</h2></div><Link href="/#contact" className="primaryButton">تواصل معي <ArrowUpLeft aria-hidden="true"/></Link></div></section>
  </main>;
}
