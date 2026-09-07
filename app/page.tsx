"use client";
import { useEffect, useRef, useState } from "react";
import { credentialGroups, type Credential } from "./credentials";
import { ArrowDownLeft, ArrowLeft, BookOpen, BriefcaseBusiness, CodeXml, Compass, GraduationCap, Layers3, LayoutDashboard, Menu, MessageSquareText, PenTool, Smartphone, Sparkles, Sprout, Users, X } from "lucide-react";

const courseIcons = [Layers3, LayoutDashboard, MessageSquareText, CodeXml, Sparkles, Smartphone, Sprout, Compass];

function CredentialCard({ credential: c }: { credential: Credential }) {
  return <li className="credentialCard">
    <img className="issuerLogo" src={`/credentials/${c.logo}.jpg`} alt={`شعار ${c.issuer}`} width={56} height={56} loading="lazy"/>
    <div className="credentialBody"><h4 lang="en" dir="ltr">{c.name}</h4>
      <p className="credentialIssuer"><bdi>{c.issuer}</bdi></p>
      <p className="credentialDescription">{c.description}</p>
      {c.expired && <p className="credentialExpiry">انتهت الصلاحية في فبراير 2022</p>}
      {c.url && <a className="credentialLink" href={c.url} target="_blank" rel="noopener noreferrer" aria-label={`عرض شهادة ${c.name} — تفتح في نافذة جديدة`}>عرض الشهادة <ArrowLeft aria-hidden="true"/></a>}
    </div>
  </li>;
}

const courses = [
  { n:"01", color:"#EA4C1D", tag:"AGILE", title:"إدارة المنتجات بأجايل", desc:"انتقل من الفكرة إلى خطة قابلة للتنفيذ، وقد فريقك في دورات عمل قصيرة تصنع قيمة واضحة.", meta:"48 ساعة · 6 محاور", goal:"إدارة منتج رقمي من الرؤية إلى الإطلاق باستخدام منهجيات أجايل، مع القدرة على ترتيب الأولويات وقياس القيمة وتحسين أداء الفريق.", details:"برنامج تطبيقي يحاكي دورة عمل فريق منتج حقيقي. ستبني قائمة عمل، تخطط لسبرنت، تدير المراجعات، وتنهي المسار بخطة إطلاق متكاملة قابلة للعرض في ملف أعمالك.", chapters:[{title:"عقلية أجايل وفهم دورة المنتج",hours:"6 ساعات",tools:"Miro, Product Canvas",exercise:"تحليل منتج قائم وتحديد فرص التحسين"},{title:"الرؤية، الأهداف ومؤشرات القيمة",hours:"8 ساعات",tools:"OKRs, North Star",exercise:"صياغة رؤية ومؤشرات نجاح لمنتج رقمي"},{title:"بحث المستخدم وتحويل الاحتياج إلى قصص",hours:"8 ساعات",tools:"User Stories, JTBD",exercise:"بناء خريطة قصص المستخدم"},{title:"ترتيب الأولويات وبناء قائمة العمل",hours:"8 ساعات",tools:"RICE, Backlog",exercise:"ترتيب خصائص منتج وفق أثرها وجهدها"},{title:"تخطيط السبرنت وقيادة طقوس الفريق",hours:"8 ساعات",tools:"Jira, Scrum",exercise:"محاكاة سبرنت كامل مع فريق"},{title:"القياس والتحسين ومشروع التخرج",hours:"10 ساعات",tools:"Retrospective, Metrics",exercise:"تقديم خطة منتج متكاملة قابلة للتنفيذ"}] },
  { n:"02", color:"#9D56F7", tag:"UI / UX", title:"تصميم تجربة وواجهات المستخدم", desc:"لا تتعلّم الأدوات فقط؛ تعلّم كيف تفهم المشكلة وتصمّم منتجًا جاهزًا للاختبار والإنتاج.", meta:"64 ساعة · 8 محاور", goal:"الانتقال من مستكشف للتصميم إلى مصمم منتجات رقمية يبني قراراته على البحث، ويتقن Figma وينشئ تجربة متكاملة قابلة للاختبار.", details:"مسار ممتد ومحكم يدمج التفكير التصميمي والذكاء الاصطناعي عبر كامل دورة العمل الإبداعية. ستنجز تمارين متتابعة تبني بها مشروعًا نهائيًا ودراسة حالة احترافية.", chapters:[{title:"فهم المشكلة والفكرة",hours:"4 ساعات",tools:"ChatGPT, FigJam",exercise:"تحليل تجربة تطبيق قائم واستخلاص نقاط الألم"},{title:"التفكير التصميمي والبحث",hours:"6 ساعات",tools:"Miro, Claude",exercise:"بناء شخصية مستخدم ورسم رحلة متكاملة"},{title:"أساسيات Figma وهيكلة الواجهات",hours:"8 ساعات",tools:"Figma",exercise:"تصميم واجهات سلكية منخفضة الدقة"},{title:"تصميم تجربة المستخدم العميقة",hours:"10 ساعات",tools:"FigJam, Figma",exercise:"إنشاء تدفقات الاستخدام ونموذج قابل للاختبار"},{title:"التصميم البصري وصناعة الاتجاه",hours:"8 ساعات",tools:"Figma, Midjourney",exercise:"تطبيق الشبكات والتباين وبناء اتجاه بصري"},{title:"العمل الاحترافي وAuto Layout",hours:"8 ساعات",tools:"Figma Auto Layout",exercise:"بناء واجهات مرنة لمقاسات متعددة"},{title:"أنظمة التصميم الذكية",hours:"12 ساعة",tools:"Components, Variables",exercise:"إنشاء مكتبة مكونات بمتغيرات ديناميكية"},{title:"النماذج التفاعلية ومشروع التخرج",hours:"8 ساعات",tools:"Smart Animate",exercise:"بناء نموذج متقدم ودراسة حالة نهائية"}] },
  { n:"03", color:"#9D56F7", tag:"UX WRITING", title:"كتابة تجربة المستخدم", desc:"صُغ نصوصًا رقمية توجّه المستخدم بسلاسة، تقلّل إحباطه، وترفع تفاعله مع المنتجات الرقمية.", meta:"64 ساعة · 4 مراحل", goal:"تأسيس عقلية كاتب تجربة المستخدم، والعمل باحتراف داخل فرق المنتجات، وكتابة مكونات الواجهات واختبار فعاليتها بمنهجية بحثية.", details:"مسار شامل ينقلك من فهم دور UX Writer إلى التعاون داخل Figma وكتابة اللحظات الحساسة في المنتج. تنتهي الرحلة بمشروع تخرج تطبيقي مبني على أبحاث المحتوى واختبارات الوضوح.", chapters:[{title:"عقلية كاتب تجربة المستخدم ودوره في المنتج",hours:"12 ساعة",tools:"Product Thinking",exercise:"3 تطبيقات لفهم رحلة المنتج ودور المحتوى فيها"},{title:"العمل على Figma ككاتب تجربة مستخدم",hours:"16 ساعة",tools:"Figma, Comments",exercise:"4 تمارين للتعاون مع المصممين والمطورين"},{title:"كتابة مكونات واجهات الاستخدام الحساسة",hours:"20 ساعة",tools:"Onboarding, CTAs, States",exercise:"6 تطبيقات على التهيئة والأخطاء والنجاح وحالات الفراغ"},{title:"أبحاث المحتوى والاختبار",hours:"16 ساعة",tools:"A/B Testing, Research",exercise:"مشروع تخرج تطبيقي وقياس الوضوح وسهولة القراءة"}] },
  { n:"04", color:"#00A0E1", tag:"DEVELOPMENT", title:"تطوير التطبيقات الرقمية", desc:"حوّل تصميم المنتج إلى تطبيق يعمل؛ من هندسة الواجهات والبيانات إلى الاختبار والنشر.", meta:"72 ساعة · 9 محاور", goal:"بناء تطبيق حديث متكامل، وفهم القرارات التقنية التي تجعله سريعًا ومنظمًا وقابلًا للتوسع بعد إطلاق نسخته الأولى.", details:"رحلة بناء حقيقية تبدأ من تحليل المتطلبات وتنتهي بمنتج منشور. كل محور يضيف جزءًا إلى التطبيق، مع مراجعات عملية ومشروع تخرج يثبت قدرتك على التنفيذ.", chapters:[{title:"من الفكرة إلى المتطلبات التقنية",hours:"6 ساعات",tools:"Notion, GitHub",exercise:"تحويل فكرة إلى نطاق إصدار أول"},{title:"أساسيات البرمجة والويب الحديث",hours:"8 ساعات",tools:"TypeScript",exercise:"بناء مكونات تفاعلية صغيرة"},{title:"هندسة المشروع والمكونات",hours:"8 ساعات",tools:"React",exercise:"هيكلة تطبيق قابل للنمو"},{title:"الواجهات المتجاوبة والوصول",hours:"8 ساعات",tools:"CSS, Design Tokens",exercise:"تحويل تصميم إلى واجهة متجاوبة"},{title:"الحالة وتدفق البيانات",hours:"8 ساعات",tools:"React State",exercise:"بناء رحلة مستخدم متعددة الخطوات"},{title:"واجهات API والتكاملات",hours:"8 ساعات",tools:"REST, Postman",exercise:"ربط التطبيق بخدمة خارجية"},{title:"قواعد البيانات والمصادقة",hours:"10 ساعات",tools:"Postgres, Auth",exercise:"بناء حسابات وبيانات مستخدمين"},{title:"الاختبار والأداء والجودة",hours:"8 ساعات",tools:"Testing, Lighthouse",exercise:"اختبار رحلة كاملة وتحسين الأداء"},{title:"النشر ومشروع التخرج",hours:"8 ساعات",tools:"Cloud, Analytics",exercise:"إطلاق التطبيق وعرض دراسة الحالة"}] },
  { n:"05", color:"#02B871", tag:"GENERATIVE AI", title:"هندسة مدخلات الذكاء الاصطناعي", desc:"صمّم تعليمات وسياقات وسير عمل تحوّل النماذج التوليدية إلى أدوات موثوقة في العمل.", meta:"40 ساعة · 7 محاور", goal:"إتقان بناء مدخلات دقيقة وقابلة للتكرار للكتابة والتحليل والتصميم، وتقييم النتائج وتحسينها وفق معايير واضحة.", details:"برنامج مكثّف يجمع بين فهم سلوك النماذج والتطبيق على تحديات العمل. ستبني مكتبة قوالب خاصة بك، ثم تصمم سير عمل نهائيًا يختصر الوقت ويحافظ على جودة المخرجات.", chapters:[{title:"كيف تفهم النماذج تعليماتك؟",hours:"4 ساعات",tools:"ChatGPT, Claude",exercise:"تشخيص وتحسين مدخلات ضعيفة"},{title:"تشريح المدخل الاحترافي",hours:"6 ساعات",tools:"Prompt Frameworks",exercise:"بناء قالب للأدوار والسياق والقيود"},{title:"السياق والأمثلة والتفكير المرحلي",hours:"6 ساعات",tools:"Few-shot, Context",exercise:"تصميم مدخل لمهمة مركّبة"},{title:"الكتابة والبحث والتلخيص",hours:"6 ساعات",tools:"AI Research",exercise:"إنشاء نظام محتوى قابل للتكرار"},{title:"التحليل واتخاذ القرار",hours:"6 ساعات",tools:"Data Analysis",exercise:"تحليل سيناريو وبناء توصية"},{title:"التقييم والتحسين المنهجي",hours:"6 ساعات",tools:"Rubrics, Testing",exercise:"بناء معيار لقياس جودة النتائج"},{title:"الأتمتة ومشروع التخرج",hours:"6 ساعات",tools:"AI Workflows",exercise:"تصميم سير عمل ذكي لمهمة حقيقية"}] },
  { n:"06", color:"#FFB000", tag:"APP DESIGN", title:"تصميم التطبيقات", desc:"مسار متخصص في تصميم تجارب التطبيقات من الفكرة وتدفقات الاستخدام إلى واجهات جاهزة للتطوير.", meta:"قريبًا", comingSoon:true, goal:"", details:"", chapters:[] },
  { n:"07", color:"#F06AA6", tag:"SELF DEVELOPMENT", title:"تطوير الذات والمهارات الشخصية", desc:"افهم نقاط قوتك، ابنِ عادات عمل مستدامة، وطوّر مهارات التواصل وإدارة الوقت والثقة المهنية.", meta:"30 ساعة · 5 محاور", goal:"بناء وعي ذاتي عملي يساعدك على إدارة طاقتك ووقتك، والتواصل بثقة، وتحويل أهدافك الشخصية والمهنية إلى خطوات قابلة للقياس.", details:"مسار تطبيقي لا يعتمد على التحفيز المؤقت؛ تبدأ فيه بتشخيص واقعك، ثم تبني نظامًا شخصيًا للعادات والأولويات والتواصل. تنتهي الدورة بخطة تطوير لمدة تسعين يومًا تتابع تقدمك بوضوح.", chapters:[{title:"الوعي الذاتي واكتشاف نقاط القوة",hours:"6 ساعات",tools:"Strength Map, Reflection",exercise:"بناء خريطة شخصية للمهارات والقيم"},{title:"صياغة الأهداف وصناعة الأولويات",hours:"6 ساعات",tools:"SMART, Priority Matrix",exercise:"تحويل هدف بعيد إلى خطة أسبوعية قابلة للقياس"},{title:"إدارة الوقت والطاقة والعادات",hours:"6 ساعات",tools:"Time Blocking, Habit Loop",exercise:"تصميم نظام أسبوعي يناسب نمط حياتك"},{title:"التواصل والذكاء العاطفي",hours:"6 ساعات",tools:"Active Listening, Feedback",exercise:"محاكاة حوار صعب وتقديم تغذية راجعة"},{title:"خطة التطوير الشخصية",hours:"6 ساعات",tools:"90-Day Plan",exercise:"بناء خطة تطوير متكاملة ومؤشرات متابعة"}] },
  { n:"08", color:"#56A8F7", tag:"CAREER GUIDANCE", title:"الإرشاد والتخطيط المهني", desc:"حدّد وجهتك المهنية، قدّم خبرتك بصورة مقنعة، واستعد لفرص العمل بخطة واضحة وأدوات عملية.", meta:"32 ساعة · 6 محاور", goal:"اتخاذ قرار مهني واعٍ، وبناء هوية احترافية وملف أعمال وسيرة ذاتية تعكس قيمتك، مع الاستعداد للمقابلات والتفاوض على الفرص.", details:"رحلة مهنية تبدأ من فهم ميولك ومهاراتك وقراءة السوق، ثم تنتقل إلى بناء حضور احترافي وخطة بحث عن عمل. تتضمن مراجعات تطبيقية ومحاكاة مقابلات وخطة تحرك واقعية للمرحلة القادمة.", chapters:[{title:"اكتشاف المسار والهوية المهنية",hours:"5 ساعات",tools:"Career Canvas, Skills Map",exercise:"تحليل المهارات القابلة للنقل وتحديد ثلاثة مسارات"},{title:"قراءة السوق واختيار الفرص",hours:"5 ساعات",tools:"Market Research, Role Map",exercise:"تحليل عشر فرص واستخراج المهارات المتكررة"},{title:"السيرة الذاتية والملف المهني",hours:"6 ساعات",tools:"CV, LinkedIn",exercise:"إعادة بناء السيرة والملف وفق المسار المستهدف"},{title:"بناء ملف الأعمال والقصة المهنية",hours:"6 ساعات",tools:"Portfolio, Storytelling",exercise:"صياغة دراسة حالة وقصة انتقال مهني"},{title:"المقابلات والتواصل مع جهات العمل",hours:"5 ساعات",tools:"STAR, Networking",exercise:"محاكاة مقابلة وكتابة رسائل تواصل فعالة"},{title:"التفاوض وخطة الانطلاق",hours:"5 ساعات",tools:"Offer Review, Action Plan",exercise:"تقييم عرض وظيفي وبناء خطة بحث لمدة 30 يومًا"}] },
];

const journey = [
  { n:"01", title:"تعلّم", icon:BookOpen, text:"افهم الأساسيات، واربط كل مفهوم بالمشكلة التي يساعدك على حلّها." },
  { n:"02", title:"طبّق", icon:PenTool, text:"اختبر فهمك بتمارين وتحديات تحاكي مواقف العمل." },
  { n:"03", title:"ابنِ أعمالك", icon:BriefcaseBusiness, text:"وثّق تطبيقاتك وقراراتك في ملف أعمال يوضّح طريقة تفكيرك." },
  { n:"04", title:"أنجز مشروعك", icon:GraduationCap, text:"اجمع مهاراتك في مشروع نهائي، واعرض النتيجة ودروس التجربة." },
  { n:"05", title:"تبادل الخبرات", icon:Users, text:"شارك أعمالك مع زملائك، واستفد من الملاحظات لتحسينها." },
  { n:"06", title:"استعد للفرص", icon:Compass, text:"حوّل أعمالك إلى قصة مهنية تساعدك في المقابلات والمشاريع." },
];

export default function Home() {
  const [menu, setMenu] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const aboutDialogRef = useRef<HTMLDialogElement>(null);
  const [selectedCourse, setSelectedCourse] = useState<(typeof courses)[number] | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const menuRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    }), { threshold: 0.08 });
    document.querySelectorAll("[data-reveal]").forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!menu) return;
    const closeMenu = (event: KeyboardEvent) => {
      if (event.key === "Escape") { setMenu(false); menuRef.current?.focus(); }
    };
    window.addEventListener("keydown", closeMenu);
    return () => window.removeEventListener("keydown", closeMenu);
  }, [menu]);

  useEffect(() => {
    const dialog = aboutOpen ? aboutDialogRef.current : dialogRef.current;
    if ((!selectedCourse && !aboutOpen) || !dialog) return;
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    dialog.showModal();
    return () => {
      dialog.close();
      document.body.style.overflow = overflow;
      const trigger = triggerRef.current;
      (trigger?.getClientRects().length ? trigger : menuRef.current)?.focus({ preventScroll:true });
    };
  }, [selectedCourse, aboutOpen]);

  return <>
    <a className="skipLink" href="#courses">انتقل إلى الدورات</a>
    <header className="nav wrap" id="top">
      <a href="#top" className="textLogo" aria-label="دورات التجربة الرقمية - الرئيسية"><img src="/dx-icon.svg" alt="" aria-hidden="true" />التجربة <span>الرقمية.</span></a>
      <nav id="main-navigation" className={menu ? "links open" : "links"} aria-label="التنقل الرئيسي">
        <a href="#courses" onClick={() => setMenu(false)}>الدورات</a>
        <a href="#method" onClick={() => setMenu(false)}>رحلة التعلّم</a>
        <a href="/skills" onClick={() => setMenu(false)}>مهارات النماذج</a>
        <a href="/articles" onClick={() => setMenu(false)}>مقالاتي</a>
        <button className="navAbout" onClick={event => { triggerRef.current = event.currentTarget; setMenu(false); setAboutOpen(true); }} aria-haspopup="dialog" aria-controls="about-dialog">نبذة عني</button>
        <a href="#contact" onClick={() => setMenu(false)}>اختر مسارك</a>
      </nav>
      <button ref={menuRef} className="menu" onClick={() => setMenu(!menu)} aria-label={menu ? "إغلاق القائمة" : "فتح القائمة"} aria-expanded={menu} aria-controls="main-navigation">{menu ? <X/> : <Menu/>}</button>
      <a className="navCta" href="#courses">استكشف الدورات <ArrowDownLeft aria-hidden="true"/></a>
    </header>

    <main>
      <section className="hero wrap" aria-labelledby="hero-title">
        <div className="heroCopy">
          <div className="eyebrow"><span/> مهارات رقمية. خطوات مهنية.</div>
          <h1 id="hero-title">من التعلّم،<br/><em>إلى صناعة الأثر.</em></h1>
          <p>طوّر مهاراتك في التصميم والكتابة والتقنية، وابنِ ملف أعمال يعكس قدراتك. مسارات تطبيقية تربط ما تتعلّمه بخطوتك المهنية القادمة.</p>
          <div className="heroActions">
            <a href="#courses" className="primaryButton">استكشف الدورات <ArrowDownLeft aria-hidden="true"/></a>
            <a href="#method" className="textLink">كيف تبدأ الرحلة؟ <ArrowLeft aria-hidden="true"/></a>
          </div>
        </div>
        <div className="heroArt" aria-hidden="true">
          <div className="pathRing ringOuter"/><div className="pathRing ringInner"/>
          <div className="digitalCore"><BookOpen/><span>تعلّم</span><ArrowLeft/><span>طبّق</span></div>
          <span className="orbitLabel labelTop">من فكرة</span><span className="orbitLabel labelBottom">إلى مهارة</span>
        </div>
      </section>

      <section className="courses" id="courses" aria-labelledby="courses-title"><div className="wrap">
        <div className="sectionHead" data-reveal><div><span className="kicker">مسارات التعلّم</span><h2 id="courses-title">مهارات تبنيها.<br/>وأعمال تتحدّث عنك.</h2></div><p>اختر ما يناسب وجهتك. لكل مسار هدف واضح، ومحاور متدرّجة، وتطبيقات تساعدك على تحويل المعرفة إلى ممارسة.</p></div>
        <div className="courseGrid">{courses.map((c,i) => {
          const Icon = courseIcons[i];
          const comingSoon = "comingSoon" in c;
          return <article className={`courseCard${comingSoon ? " comingSoon" : ""}`} data-reveal key={c.n} style={{"--accent":c.color,"--delay":`${i % 4 * 70}ms`} as React.CSSProperties}>
            <div className="cardTop"><span className="number">{c.n}</span><span className="tag" lang="en" dir="ltr">{c.tag}</span></div>
            <h3><span className="courseIcon" aria-hidden="true"><Icon strokeWidth={1.6}/></span>{c.title}</h3>
            <p>{c.desc}</p>
            <div className="cardFoot">{comingSoon ? <><span className="soonLabel">قريبًا</span><small>موعد الإطلاق يُعلن لاحقًا</small></> : <><small>{c.meta}</small><button onClick={event => { triggerRef.current = event.currentTarget; setSelectedCourse(c); }} aria-haspopup="dialog" aria-label={`تفاصيل دورة ${c.title}`}>تفاصيل المسار <ArrowLeft aria-hidden="true"/></button></>}</div>
          </article>;
        })}</div>
      </div></section>

      <dialog ref={aboutDialogRef} id="about-dialog" className="courseModal aboutModal" aria-labelledby="about-dialog-title" onClose={() => setAboutOpen(false)} onClick={event => {
        if (event.target === event.currentTarget) {
          const rect = event.currentTarget.getBoundingClientRect();
          if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) setAboutOpen(false);
        }
      }}>
      <div className="modalPanel">
      <div className="modalToolbar"><h2 id="about-dialog-title">نبذة عني</h2><button className="modalClose" onClick={() => setAboutOpen(false)} aria-label="إغلاق نبذة عني" autoFocus><X aria-hidden="true"/></button></div>
      <section className="profileCard" id="about" aria-labelledby="about-title">
        <img className="profileBanner" src="/credentials/profile-background.png" alt="" width={2080} height={756}/>
        <div className="profileContent">
          <div className="profileTopline"><img className="profileAvatar" src="/credentials/saleh.jpg" alt="صالح عبدالعزيز" width={156} height={156}/></div>
          <h2 id="about-title">صالح عبدالعزيز</h2>
          <p className="profileRole">مصمم تجربة وواجهات مستخدم · أجايل وسكرم</p>
          <p className="profileLocation">الرياض، المملكة العربية السعودية</p>
          <p className="profileStatement">قادر على تحويل أفكارك إلى واقع ملموس، بداية من تصميم الفكرة إلى إصدار النموذج الأولي للمنتج.</p>
          <p className="profileNote">أشارك ما تعلّمته من بناء المنتجات وأنظمة التصميم، ومن تجربتي في تدريب وتمكين الخريجين في مبادرة وهج منذ 2021. نتعلّم سوا، ونربط المعرفة بالتطبيق.</p>
          <div className="profileSocials"><a href="https://www.linkedin.com/in/eddeziner/" target="_blank" rel="noopener noreferrer" aria-label="ملف صالح على لينكدإن — يفتح في نافذة جديدة">لينكدإن <ArrowLeft aria-hidden="true"/></a><a href="https://x.com/eddeziner" target="_blank" rel="noopener noreferrer" aria-label="حساب صالح eddeziner على تويتر — يفتح في نافذة جديدة">تويتر / X <bdi>@eddeziner</bdi><ArrowLeft aria-hidden="true"/></a></div>
        </div>
      </section>

      <section className="credentials" id="credentials" aria-labelledby="credentials-title"><div>
        <div className="sectionHead" data-reveal><div><h2 id="credentials-title">الشهادات المهنية</h2></div></div>
        <div className="credentialGroups">{credentialGroups.map((group,index) => <section className="credentialGroup" key={group.title} aria-labelledby={`credential-group-${index}`}>
          <div className="credentialGroupHead"><h3 id={`credential-group-${index}`}>{group.title}</h3><span>{String(group.items.length).padStart(2,"0")}</span></div>
          <ul className="credentialGrid">{group.items.slice(0,2).map(c=><CredentialCard key={c.name+c.issuer} credential={c}/>)}</ul>
          {group.items.length>2 && <details className="moreCredentials"><summary><span className="moreLabel">عرض بقية شهادات المجال ({group.items.length-2})</span><span className="lessLabel">عرض شهادات أقل</span><span className="detailsPlus" aria-hidden="true">+</span></summary><ul className="credentialGrid">{group.items.slice(2).map(c=><CredentialCard key={c.name+c.issuer} credential={c}/>)}</ul></details>}
        </section>)}</div>
        <div className="credentialsFoot"><a className="textLink" href="https://www.linkedin.com/in/eddeziner/details/certifications/" target="_blank" rel="noopener noreferrer">الشهادات في لينكدإن <ArrowLeft aria-hidden="true"/></a></div>
      </div></section>
      </div></dialog>

      <section className="method" id="method" aria-labelledby="method-title"><div className="wrap">
        <div className="sectionHead" data-reveal><div><span className="kicker">رحلة التعلّم</span><h2 id="method-title">كل خطوة،<br/>تقرّبك من هدفك.</h2></div><p>ست خطوات تربط التعلّم بالممارسة، وتساعدك على بناء أعمالك والاستعداد للمرحلة القادمة.</p></div>
        <ol className="journey" data-reveal>{journey.map((step,i) => {
          const Icon = step.icon;
          return <li key={step.n} style={{"--step":i} as React.CSSProperties}><div className="stepNode" aria-hidden="true"><Icon strokeWidth={1.6}/></div><span className="stepNumber">{step.n}</span><h3>{step.title}</h3><p>{step.text}</p></li>;
        })}</ol>
      </div></section>

      <section className="cta" id="contact" aria-labelledby="cta-title"><div className="wrap ctaInner">
        <div data-reveal><span className="kicker">اختر خطوتك القادمة</span><h2 id="cta-title">ابدأ بمهارة.<br/>وابنِ عليها <em>مستقبلك.</em></h2><p>اقرأ هدف المسار ومحاوره، ثم اختر ما يتوافق مع خبرتك والمهارة التي تريد تطويرها.</p><a href="#courses" className="ctaButton">تصفّح المسارات <ArrowDownLeft aria-hidden="true"/></a></div>
        <span className="ctaMark" aria-hidden="true">DX</span>
      </div></section>
    </main>

    <footer className="wrap footer"><a href="#top" className="textLogo"><img src="/dx-icon.svg" alt="" aria-hidden="true" />التجربة <span>الرقمية.</span></a><p>تعلّم. طبّق. ابنِ أعمالك.</p><nav aria-label="روابط التذييل"><a href="#courses">الدورات</a><a href="#method">الرحلة</a></nav><small>© 2026 دورات التجربة الرقمية.</small></footer>

    <dialog ref={dialogRef} className="courseModal" aria-labelledby="course-title" onClose={() => setSelectedCourse(null)} onClick={event => {
      if (event.target === event.currentTarget) {
        const rect = event.currentTarget.getBoundingClientRect();
        if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) setSelectedCourse(null);
      }
    }}>
      {selectedCourse && <div className="modalPanel">
        <div className="modalToolbar"><span className="tag" lang="en" dir="ltr">{selectedCourse.tag}</span><button className="modalClose" onClick={() => setSelectedCourse(null)} aria-label="إغلاق التفاصيل" autoFocus><X aria-hidden="true"/></button></div>
        <h2 id="course-title">{selectedCourse.title}</h2>
        <p className="modalMeta">{selectedCourse.meta}</p>
        <div className="modalIntro"><section><h3>هدف المسار</h3><p>{selectedCourse.goal}</p></section><section><h3>ماذا ستتعلّم؟</h3><p>{selectedCourse.details}</p></section></div>
        <div className="chapters"><div className="chaptersHead"><h3>محاور المسار</h3><small>{selectedCourse.chapters.length} محاور</small></div>
          <ol>{selectedCourse.chapters.map((chapter,index) => <li key={chapter.title}><span>{String(index+1).padStart(2,"0")}</span><div><h4>{chapter.title}</h4><p className="chapterMeta"><span>{chapter.hours}</span><bdi lang="en" dir="ltr">{chapter.tools}</bdi></p><p className="chapterExercise"><strong>تطبيق عملي:</strong> {chapter.exercise}</p></div></li>)}</ol>
        </div>
      </div>}
    </dialog>
  </>;
}
