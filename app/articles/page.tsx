import Link from "next/link";
import { ArrowLeft, Clock3, PenLine } from "lucide-react";

const articles = [
  ["التصميم", "لماذا تبدأ من المشكلة قبل أن تفتح Figma؟", "ملاحظات عملية عن الانتقال من فكرة جميلة إلى تجربة تحل احتياجًا حقيقيًا.", "6 دقائق"],
  ["الذكاء الاصطناعي", "المدخل الجيد ليس أطول مدخل", "كيف تمنح النموذج سياقًا كافيًا، وتترك له مساحة ليقترح ويختبر.", "5 دقائق"],
  ["أجايل", "السبرنت ليس سباقًا لإنهاء أكبر عدد من المهام", "عن القيمة التي تصل للمستخدم، وكيف يساعد الفريق بعضه على الوصول إليها.", "7 دقائق"],
  ["المسار المهني", "ابنِ قصة تشرح كيف تفكّر", "ملف الأعمال الأقوى لا يعرض النتيجة فقط؛ يوضح القرارات والتعلّم خلفها.", "8 دقائق"],
  ["الدعم العاطفي", "مساحة هادئة للفكرة قبل الحل", "أحيانًا يحتاج الشخص أن يُسمع بوضوح قبل أن يبدأ في تغيير ما يؤلمه.", "4 دقائق"],
  ["الكتابة", "الكلمة جزء من الواجهة", "النص القصير في المكان الصحيح قد يختصر على المستخدم طريقًا كاملًا.", "6 دقائق"],
];

export default function ArticlesPage() { return <main className="articlesPage"><header className="catalogNav wrap"><Link href="/" className="textLogo"><img src="/dx-icon.svg" alt="" aria-hidden="true" />التجربة <span>الرقمية.</span></Link><nav><Link href="/">الرئيسية</Link><Link href="/skills">مهارات النماذج</Link></nav><Link href="/" className="catalogBack">العودة للموقع <ArrowLeft aria-hidden="true"/></Link></header><section className="articlesHero wrap"><span className="kicker">من دفتر صالح</span><h1>مقالات<br/><em>تفتح سؤالًا.</em></h1><p>أكتب عن التصميم، الذكاء الاصطناعي، العمل مع الفرق، والرحلة المهنية بلغة عملية وقريبة.</p></section><section className="articleGrid wrap">{articles.map(([tag,title,desc,time],i)=><article className="articleCard" key={title}><div className="articleNumber">{String(i+1).padStart(2,"0")}</div><span className="articleTag">{tag}</span><h2>{title}</h2><p>{desc}</p><div className="articleFoot"><span><Clock3 aria-hidden="true"/> {time}</span><button type="button">اقرأ المقال <ArrowLeft aria-hidden="true"/></button></div></article>)}</section><section className="articlesSubscribe"><div className="wrap"><PenLine aria-hidden="true"/><div><span className="kicker">قريبًا</span><h2>مقالات جديدة، وتجارب من العمل اليومي.</h2></div></div></section></main>; }
