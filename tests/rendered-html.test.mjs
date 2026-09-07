import assert from "node:assert/strict";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}


test("serves the Arabic course catalogue without a starter placeholder", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);
  const html = await response.text();
  assert.match(html, /<html[^>]*lang="ar"[^>]*dir="rtl"/);
  assert.match(html, /<title>دورات التجربة الرقمية/);
  for (const name of ["كتابة تجربة المستخدم", "تصميم التطبيقات", "تطوير الذات والمهارات الشخصية", "الإرشاد والتخطيط المهني"]) {
    assert.ok(html.includes(name), `Missing course: ${name}`);
  }
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape|react-loading-skeleton/);
  assert.equal([...html.matchAll(/<article\b/g)].length, 8);
  assert.equal([...html.matchAll(/aria-haspopup="dialog"/g)].length, 8);
  assert.equal([...html.matchAll(/class="credentialCard"/g)].length, 21);
  assert.ok(html.includes("قادر على تحويل أفكارك إلى واقع ملموس"));
  assert.ok(html.includes('/credentials/profile-background.png'));
  assert.doesNotMatch(html, /\+10/);
  assert.doesNotMatch(html, /العودة إلى المسارات/);
  assert.ok(html.includes('https://x.com/eddeziner'));
  assert.ok(html.includes("/credentials/saleh.jpg"));
  assert.ok(html.includes('aria-controls="about-dialog">نبذة عني'));
  assert.match(html, /<dialog[^>]*id="about-dialog"/);
  assert.doesNotMatch(html, /الأوصاف تلخّص موضوع الشهادات|عرض شعار الجهة لا يعني/);
  assert.equal([...html.matchAll(/انتهت الصلاحية في فبراير 2022/g)].length, 3);
});

test("navigation anchors resolve and course dialog is initially closed", async () => {
  const html = await (await render()).text();
  const ids = new Set([...html.matchAll(/\bid="([^"]+)"/g)].map(match => match[1]));
  for (const match of html.matchAll(/href="#([^"]+)"/g)) {
    assert.ok(ids.has(match[1]), `Missing anchor: ${match[1]}`);
  }
  assert.match(html, /<dialog\b/);
  assert.doesNotMatch(html, /<dialog[^>]*\bopen(?:\s|=|>)/);
  assert.ok(html.includes("/dx-icon.svg"));
});
