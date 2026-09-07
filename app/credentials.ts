// Names, issuers and dates transcribed from Saleh's LinkedIn profile, September 2026.
// Arabic descriptions summarize the subject, not independently verified course syllabi.
export type Credential = { name: string; issuer: string; logo: string; year: number; description: string; url?: string; expired?: boolean };
export const credentialGroups: { title: string; items: Credential[] }[] = [
  { title: "تجربة المستخدم وتصميم الواجهات", items: [
    { name: "Certified User Experience Design", issuer: "General Assembly", logo: "ga", year: 2018, description: "تصميم تجارب رقمية تنطلق من احتياجات المستخدم وتتحول إلى حلول قابلة للتجربة." },
    { name: "Designing for Accessibility", issuer: "Uxcel", logo: "uxcel", year: 2021, description: "التصميم مع مراعاة اختلاف قدرات المستخدمين، لجعل الواجهات أسهل وصولًا واستخدامًا.", url: "https://certificates.uxcel.com/4ULF1RC2XXLU" },
    { name: "UI Components Best Practices", issuer: "Uxcel", logo: "uxcel", year: 2021, description: "ممارسات تصميم مكوّنات الواجهات لبناء تجربة واضحة ومتسقة.", url: "https://certificates.uxcel.com/H7GPU6KYFISU" },
    { name: "Common Patterns", issuer: "Uxcel", logo: "uxcel", year: 2021, description: "التعرّف على أنماط الواجهات الشائعة واستخدامها في حل مشكلات التصميم.", url: "https://certificates.uxcel.com/JUA6L1WV44M9" },
    { name: "Certified User Experience Design", issuer: "Misk Foundation · مؤسسة مسك", logo: "misk", year: 2018, description: "تعلّم تصميم تجربة المستخدم وربط احتياجات الناس بالتجارب الرقمية." },
    { name: "UX Design for Mobile Developers", issuer: "Udacity", logo: "udacity", year: 2017, description: "أساسيات تجربة المستخدم في تطبيقات الجوال من منظور يجمع التصميم والتطوير." },
    { name: "Material Design for Android Developers", issuer: "Udacity", logo: "udacity", year: 2016, description: "التعرّف على لغة Material Design وتطبيقها في واجهات أندرويد." },
    { name: "Design principles", issuer: "TastyTuts", logo: "tasty", year: 2016, description: "المبادئ البصرية التي تساعد على تنظيم العناصر وبناء تصميم متوازن وواضح." },
    { name: "Adobe XD", issuer: "Yes I'm a Designer", logo: "designer", year: 2018, description: "استخدام Adobe XD في تصميم الواجهات والنماذج الأولية." },
  ] },
  { title: "التفكير التصميمي والابتكار", items: [
    { name: "Enterprise Design Thinking Co-Creator", issuer: "IBM", logo: "ibm", year: 2021, description: "التفكير التصميمي كعمل تشاركي يساعد الفرق على تطوير حلول تتمحور حول المستخدم.", url: "https://www.credly.com/badges/2ea5d959-5aeb-4bfa-ac44-57f954779e9f" },
    { name: "Design Thinking", issuer: "HP LIFE", logo: "hp", year: 2022, description: "التعرّف على التفكير التصميمي كمنهج لفهم المشكلات واستكشاف الحلول." },
    { name: "Enterprise Design Thinking — Team Essentials for AI", issuer: "IBM", logo: "ibm", year: 2021, description: "التفكير التصميمي والعمل الجماعي في سياق حلول الذكاء الاصطناعي." },
    { name: "Enterprise Design Thinking Practitioner", issuer: "IBM", logo: "ibm", year: 2020, description: "أسس ممارسة التفكير التصميمي داخل الفرق والمؤسسات.", url: "https://www.youracclaim.com/badges/370f5555-5a79-4697-b261-b73d2d9f422a/print" },
  ] },
  { title: "أجايل والعمل الجماعي", items: [
    { name: "Certified ScrumMaster (CSM)", issuer: "Scrum Alliance", logo: "scrum", year: 2020, description: "إطار Scrum ودور ميسّر الفريق في دعم التعاون والتحسين المستمر.", url: "http://bcert.me/sijajfdwe", expired: true },
    { name: "Certified Scrum Developer (CSD)", issuer: "Scrum Alliance", logo: "scrum", year: 2020, description: "تطوير البرمجيات ضمن فرق Scrum والعمل على تقديم قيمة بصورة تدريجية.", url: "http://bcert.me/sktbuihki", expired: true },
    { name: "Advanced Certified Scrum Developer", issuer: "Scrum Alliance", logo: "scrum", year: 2020, description: "تعلّم متقدم في ممارسة التطوير ضمن إطار Scrum.", url: "https://bcert.me/sluzcpess", expired: true },
  ] },
  { title: "تطوير البرمجيات", items: [
    { name: "JavaScript Web Development", issuer: "General Assembly", logo: "ga", year: 2019, description: "تطوير الويب باستخدام JavaScript وفهم الجانب البرمجي للتجارب التفاعلية." },
    { name: "Software Development Process", issuer: "Udacity", logo: "udacity", year: 2019, description: "فهم عملية تطوير البرمجيات ومراحل تحويل المتطلبات إلى منتج." },
    { name: "Full-Stack Track — One Million Arab Coders", issuer: "مليون مبرمج عربي", logo: "coders", year: 2018, description: "مسار تعلّم في تطوير الويب يجمع بين الواجهات والجانب الخلفي." },
  ] },
  { title: "الكوتشينج والتطوير الشخصي", items: [
    { name: "Associate certified professional coach", issuer: "Institute of Coaching & Mentoring", logo: "coach", year: 2022, description: "تعلّم الكوتشينج ودعم الأفراد في استكشاف أهدافهم وخطوات تطورهم." },
  ] },
  { title: "التسويق الرقمي", items: [
    { name: "Fundamentals of digital marketing", issuer: "Google", logo: "google", year: 2020, description: "أساسيات التسويق الرقمي وفهم كيفية الوصول إلى الجمهور عبر القنوات الرقمية." },
  ] },
];
