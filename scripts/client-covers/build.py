"""Render the client-work concept mockups to public/studio as 1440x960 WebP.

Usage: python scripts/client-covers/build.py [cover-name ...]
Every label and number must match project-evidence.config.ts; sample data is fictional.
"""
import shutil
import sys
import tempfile
from pathlib import Path

from PIL import Image
from playwright.sync_api import sync_playwright

HERE = Path(__file__).parent
PUBLIC = HERE.parent.parent / "public" / "studio"
OUT = Path(tempfile.mkdtemp(prefix="client-covers-"))
BASE = (HERE / "base.css").read_text(encoding="utf-8")
FONTS = '<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">'


def page(accent, glow, eyebrow, title, lede, chips, stage, extra_css=""):
    chips_html = "".join(f'<div class="chip"><i></i>{c}</div>' for c in chips)
    return f"""<!doctype html><html><head><meta charset="utf-8">{FONTS}
<style>:root{{--accent:{accent};--glow:{glow};}}{BASE}{extra_css}</style></head>
<body><div class="intro"><div class="eyebrow mono">{eyebrow}</div><h1>{title}</h1><p>{lede}</p></div>
<div class="chips">{chips_html}</div><div class="stage">{stage}</div></body></html>"""


def node(x, y, letter, text, hot=False):
    return f'<div class="node{" hot" if hot else ""}" style="left:{x}px;top:{y}px"><span class="dot">{letter}</span>{text}</div>'


COVERS = {}

# 1. FTM multi-site follow-up -------------------------------------------------
COVERS["ftm-sms-followup-cover"] = page(
    "#7fe3a9", "#1d6b4440", "MESSAGING OPERATIONS", "Multi-Site<br>Follow-up",
    "Routes form leads per site, sends the booking text and stops follow-ups when someone opts out.",
    ["Full booking summary in the text", "Opt-outs end later follow-ups", "Accepted ≠ delivered, tracked apart"],
    f"""
<div class="win" style="left:0;top:20px;width:370px;height:450px">
  <div class="bar"><b></b><b></b><b></b><span>Clinic website · contact form</span></div>
  <div class="pad">
    <div style="font-size:21px;font-weight:600">Book a consultation</div>
    <div class="label" style="margin-top:20px">Name</div><div class="field">Alex Morgan</div>
    <div class="label" style="margin-top:14px">Location</div><div class="field">Location 03 <span style="float:right;color:#7f8c84">▾</span></div>
    <div class="label" style="margin-top:14px">Preferred time</div><div class="field">Tue · 3:00 PM</div>
    <div class="consent"><span class="box">✓</span>I agree to receive text updates</div>
    <div class="cta">Request booking</div>
  </div>
</div>
{node(24, 510, "N", "Route by location", True)}
{node(24, 580, "S", "Log to Google Sheets")}
{node(24, 650, "T", "Send via Twilio", True)}
<div class="connector" style="left:48px;top:470px;height:40px"></div>
<div class="connector" style="left:48px;top:560px;height:20px"></div>
<div class="connector" style="left:48px;top:630px;height:20px"></div>
<div class="glowline" style="left:250px;top:680px;width:200px"></div>
<div class="phone" style="left:440px;top:0">
  <div class="notch"></div>
  <div class="ph-head"><div class="avatar">C</div><div><div style="font-weight:600">Clinic · Location 03</div><div style="font-size:12px;color:#8f9c94">Text message</div></div></div>
  <div class="bubble in">Hi Alex, thanks for booking with Location 03.</div>
  <div class="bubble in summary"><b>Booking summary</b><span>Service</span>Consultation<span>Date</span>Tue, 3:00 PM<span>Location</span>Location 03<span>Text updates</span>Yes</div>
  <div class="bubble in small">Reply STOP to opt out.</div>
  <div class="status-list">
    <div><span class="pill ok">● Accepted</span><span>provider took it</span></div>
    <div><span class="pill warn">● Opted out</span><span>loop stops</span></div>
    <div><span class="pill bad">● Failed</span><span>flagged</span></div>
    <div><span class="pill info">● Unpaired</span><span>held for review</span></div>
  </div>
</div>
""",
    """
.field{margin-top:7px;height:40px;border:1px solid #ffffff1f;border-radius:9px;background:#0b100e;padding:10px 12px;font-size:15px;color:#dfe8e2}
.consent{display:flex;align-items:center;gap:10px;margin-top:18px;font-size:14px;color:#c3ccc6}
.box{width:20px;height:20px;border-radius:5px;background:var(--accent);color:#08100c;display:grid;place-items:center;font-size:13px;font-weight:700}
.cta{margin-top:18px;height:44px;border-radius:10px;background:var(--accent);color:#08100c;font-weight:600;display:grid;place-items:center;font-size:15px}
.phone{position:absolute;width:320px;height:700px;border-radius:46px;background:#0c1210;border:10px solid #1b2320;box-shadow:0 0 0 1px #ffffff1c,0 0 60px #7fe3a933,0 50px 100px #000d;padding:46px 18px 18px}
.notch{position:absolute;top:12px;left:50%;transform:translateX(-50%);width:96px;height:24px;border-radius:14px;background:#000}
.ph-head{display:flex;gap:12px;align-items:center;padding-bottom:14px;border-bottom:1px solid #ffffff12;font-size:15px}
.avatar{width:38px;height:38px;border-radius:50%;background:#1d3a2a;color:var(--accent);display:grid;place-items:center;font-weight:700}
.bubble{margin-top:12px;max-width:86%;padding:11px 14px;border-radius:18px;font-size:14.5px;line-height:1.42}
.bubble.in{background:#1d2622;border-bottom-left-radius:6px;color:#e5ece7}
.bubble.out{margin-left:auto;width:fit-content;background:var(--accent);color:#08100c;border-bottom-right-radius:6px;font-weight:600}
.bubble.small{font-size:13.5px}
.bubble.summary{display:grid;grid-template-columns:auto 1fr;gap:5px 12px;font-size:13.5px}
.bubble.summary b{grid-column:1/-1;color:var(--accent);font-size:12px;letter-spacing:.1em;text-transform:uppercase;margin-bottom:3px}
.bubble.summary span{color:#8f9c94}
.status-list{position:absolute;left:18px;right:18px;bottom:20px;display:grid;gap:8px;padding-top:14px;border-top:1px solid #ffffff12}
.status-list div{display:flex;justify-content:space-between;align-items:center;font-size:13px;color:#8f9c94}
""",
)

# 2. Yuktha Wellness ----------------------------------------------------------
COVERS["yuktha-wellness-cover"] = page(
    "#f3a6c8", "#7a2e5236", "GROUNDED HEALTH AI", "Yuktha<br>Wellness",
    "A women's-health assistant that checks for emergencies first, then grounds answers in retrieved material.",
    ["Emergency gate before generation", "Hybrid retrieval + reranking", "Web chat and WhatsApp"],
    """
<div class="win" style="left:0;top:110px;width:480px;height:480px">
  <div class="bar"><b></b><b></b><b></b><span>Yuktha assistant · web chat</span></div>
  <div class="pad">
    <div class="msg me">What can I ask you about?</div>
    <div class="msg ai">
      <div class="who">Assistant</div>
      General women's-health questions, answered from reviewed material. If something sounds urgent, I point you to care first.
    </div>
    <div class="gate"><span class="pill ok">✓ Emergency check · clear</span><span>ran before the answer</span></div>
    <div class="input">Ask a question…<span>➤</span></div>
  </div>
</div>
<div class="win" style="left:510px;top:90px;width:250px;height:520px">
  <div class="bar"><span style="margin:0">Answer pipeline</span></div>
  <div class="steps">
    <div class="step hot"><i>1</i><div><b>Emergency gate</b><small>runs before anything else</small></div></div>
    <div class="step"><i>2</i><div><b>Hybrid retrieval</b><small>dense + keyword search</small></div></div>
    <div class="step"><i>3</i><div><b>Rerank</b><small>best passages first</small></div></div>
    <div class="step"><i>4</i><div><b>Grounding check</b><small>claims must match sources</small></div></div>
    <div class="step"><i>5</i><div><b>Grounded answer</b><small>human review for clinical copy</small></div></div>
  </div>
</div>
""",
    """
.msg{font-size:16px;line-height:1.5;padding:14px 16px;border-radius:16px;margin-bottom:16px}
.msg.me{margin-left:70px;background:color-mix(in srgb,var(--accent) 18%,#141a18);border:1px solid color-mix(in srgb,var(--accent) 35%,transparent);border-bottom-right-radius:5px}
.msg.ai{margin-right:20px;background:#18201d;border:1px solid #ffffff14;border-bottom-left-radius:5px;color:#dfe8e2}
.who{font-size:12px;letter-spacing:.12em;text-transform:uppercase;color:var(--accent);margin-bottom:6px}
.cites{display:flex;gap:8px;flex-wrap:wrap;margin-top:12px}
.cites span{font-size:12.5px;padding:5px 9px;border-radius:7px;background:#0d1311;border:1px solid #ffffff1c;color:#c3ccc6}
.gate{display:flex;justify-content:space-between;align-items:center;font-size:13px;color:#8f9c94;padding:12px 14px;border-radius:12px;border:1px solid #ffffff14;background:#0f1513}
.safety{font-size:14px;line-height:1.5;color:#f6d6c8;background:#2a1712;border:1px solid #7d4537;border-radius:12px;padding:12px 14px}
.safety b{display:block;color:#ffb39c;margin-bottom:3px}
.input{position:absolute;left:22px;right:22px;bottom:22px;height:50px;border-radius:12px;border:1px solid #ffffff1f;background:#0b100e;color:#6f7c74;font-size:15px;padding:14px 16px}
.input span{float:right;color:var(--accent)}
.steps{padding:18px;display:grid;gap:12px}
.step{display:flex;gap:12px;align-items:flex-start;padding:12px;border-radius:11px;border:1px solid #ffffff14;background:#0f1513}
.step i{font-style:normal;width:26px;height:26px;flex:none;border-radius:7px;display:grid;place-items:center;font-size:13px;font-weight:700;background:#ffffff14;color:#dfe8e2}
.step b{display:block;font-size:15px;font-weight:600}
.step small{display:block;font-size:12.5px;color:#8f9c94;margin-top:3px}
.step.hot{border-color:color-mix(in srgb,var(--accent) 60%,transparent);box-shadow:0 0 30px color-mix(in srgb,var(--accent) 25%,transparent)}
.step.hot i{background:var(--accent);color:#1a0a12}
""",
)

# 3. Campaign operations ------------------------------------------------------
days = ["Mon", "Tue", "Wed", "Thu", "Fri"]
posts = [
    [("Selected", "ok"), ("Revision", "warn")],
    [("Approved", "accent-pill"), ("Selected", "ok")],
    [("Ready", "info"), ("Approved", "accent-pill")],
    [("Revision", "warn"), ("Ready", "info")],
    [("Approved", "accent-pill"), ("Selected", "ok")],
]
hues = ["#5c3d2a", "#2f4a3b", "#3b3557", "#2a4656", "#563a3a", "#4a4a2a", "#2c3f53", "#4f3550", "#355045", "#5a4630"]
cols = ""
for i, d in enumerate(days):
    cards = "".join(
        f'<div class="post"><div class="thumb" style="background:linear-gradient(135deg,{hues[(i*2+j)%10]},#141a18)"></div>'
        f'<div class="pl"></div><div class="pl short"></div><span class="pill {k}">{s}</span></div>'
        for j, (s, k) in enumerate(posts[i]))
    cols += f'<div class="col"><div class="day">{d}<span>{12+i}</span></div>{cards}</div>'
COVERS["ftm-social-media-cover"] = page(
    "#f2c46d", "#6b4a1536", "CLIENT AUTOMATION", "Campaign<br>operations",
    "Clients pick and revise posts, the team approves, and approved work is released for publishing.",
    ["Two 50-post live runs passed", "Real-browser calendar approval", "38 of 38 release files in sync"],
    f"""
<div class="win" style="left:0;top:20px;width:760px;height:540px">
  <div class="bar"><b></b><b></b><b></b><span>Client portal · content calendar</span><span style="margin-left:auto" class="pill accent-pill">Week of the 12th</span></div>
  <div class="cal">{cols}</div>
</div>
{node(0, 610, "1", "Client selects")}
{node(196, 610, "2", "Revisions")}
{node(368, 610, "3", "Internal approval", True)}
{node(590, 610, "4", "Released")}
<div class="glowline" style="left:20px;top:592px;width:720px"></div>
""",
    """
.cal{display:grid;grid-template-columns:repeat(5,1fr);gap:12px;padding:18px}
.day{font-size:13px;color:#8f9c94;letter-spacing:.08em;display:flex;justify-content:space-between;padding:0 4px 10px;border-bottom:1px solid #ffffff12;margin-bottom:12px}
.day span{color:#dfe8e2;font-weight:600}
.post{border:1px solid #ffffff17;background:#101614;border-radius:11px;padding:9px;margin-bottom:12px}
.thumb{height:118px;border-radius:7px;margin-bottom:9px;position:relative;overflow:hidden}
.thumb::after{content:"";position:absolute;left:12px;bottom:12px;width:46%;height:8px;border-radius:4px;background:#ffffff40}
.pl{height:8px;border-radius:4px;background:#ffffff17;margin-bottom:6px}
.pl.short{width:60%;margin-bottom:10px}
.post .pill{font-size:12px;padding:4px 9px}
""",
)

# 4. Creator knowledge assistant ---------------------------------------------
vids = "".join(
    f'<div class="vid"><div class="vt" style="background:linear-gradient(135deg,{c},#0f1513)"><span>▶</span><em>{t}</em></div><div class="pl"></div><div class="pl short"></div></div>'
    for c, t in [("#23466b", "12:04"), ("#2d3f63", "03:41"), ("#1e4d5c", "27:15"), ("#34405e", "08:52"), ("#244a52", "16:30")])
COVERS["jwalker-knowledge-assistant-cover"] = page(
    "#8cc6ff", "#1f4a7a3a", "PUBLIC KNOWLEDGE RAG", "Creator<br>Knowledge<br>Assistant",
    "Answers built only from approved public videos, with every source linked back.",
    ["Source-linked answers", "Paid course material excluded", "Scheduled knowledge refresh"],
    f"""
<div class="win" style="left:0;top:20px;width:760px;height:560px">
  <div class="bar"><b></b><b></b><b></b><span>WordPress · Ask the library</span></div>
  <div class="pad">
    <div class="ask">How do I validate an offer before building it?<span>Ask</span></div>
    <div class="ans"><div class="who">Answer · from 5 public videos</div>
      <div class="pl" style="width:96%"></div><div class="pl" style="width:91%"></div><div class="pl" style="width:84%"></div><div class="pl" style="width:58%"></div>
    </div>
    <div class="label" style="margin:18px 0 12px">Sources</div>
    <div class="vids">{vids}</div>
  </div>
</div>
{node(0, 630, "Y", "Approved videos")}
{node(212, 630, "F", "SQLite FTS5", True)}
{node(400, 630, "A", "FastAPI")}
{node(560, 630, "W", "WordPress")}
<div class="glowline" style="left:20px;top:612px;width:720px"></div>
""",
    """
.ask{height:56px;border-radius:12px;border:1px solid color-mix(in srgb,var(--accent) 45%,transparent);background:#0b100e;padding:17px 18px;font-size:17px;box-shadow:0 0 30px color-mix(in srgb,var(--accent) 16%,transparent)}
.ask span{float:right;margin-top:-6px;padding:6px 14px;border-radius:8px;background:var(--accent);color:#06101c;font-weight:600;font-size:14px}
.ans{margin-top:18px;padding:18px;border-radius:12px;background:#121a17;border:1px solid #ffffff14}
.who{font-size:12px;letter-spacing:.12em;text-transform:uppercase;color:var(--accent);margin-bottom:14px}
.pl{height:9px;border-radius:5px;background:#ffffff1a;margin-bottom:9px}
.pl.short{width:55%}
.vids{display:grid;grid-template-columns:repeat(5,1fr);gap:12px}
.vt{height:92px;border-radius:9px;position:relative;margin-bottom:9px;border:1px solid #ffffff14}
.vt span{position:absolute;inset:0;display:grid;place-items:center;color:#ffffffcc;font-size:20px}
.vt em{position:absolute;right:6px;bottom:6px;font-style:normal;font-size:11px;background:#000b;padding:2px 6px;border-radius:4px;font-family:"JetBrains Mono",monospace}
""",
)

# 5. SEO operations -----------------------------------------------------------
rows = [
    ("/services/service-a", "Title + description", "Validated", "ok", "Updated"),
    ("/locations/site-04", "Description", "Location fixed", "warn", "Regenerated"),
    ("/services/service-b", "Title", "Validated", "ok", "Updated"),
    ("/about", "Description", "Page missing", "bad", "Flagged"),
    ("/services/service-c", "Title + description", "Queued", "muted", "Pending"),
    ("/locations/site-07", "Title", "Validated", "ok", "Updated"),
]
trs = "".join(f'<tr><td class="mono">{p}</td><td>{f}</td><td><span class="pill {k}">{c}</span></td><td>{r}</td></tr>' for p, f, c, k, r in rows)
COVERS["ftm-seo-automation-cover"] = page(
    "#6fe2d3", "#135a5238", "WORDPRESS AUTOMATION", "SEO<br>Operations",
    "AI metadata jobs that validate every item, land on the right page and recover cleanly.",
    ["Per-item validation and results", "Async jobs with worker health", "12 of 12 recovery criteria passed"],
    f"""
<div class="win" style="left:0;top:20px;width:760px;height:470px">
  <div class="bar"><b></b><b></b><b></b><span>Metadata job · batch 0412</span><span style="margin-left:auto" class="pill accent-pill">Running</span></div>
  <table><thead><tr><th>Page</th><th>Field</th><th>Check</th><th>Result</th></tr></thead><tbody>{trs}</tbody></table>
</div>
<div class="win" style="left:420px;top:520px;width:340px;height:230px">
  <div class="bar"><span style="margin:0">Worker health</span></div>
  <div class="pad kv">
    <div><span>Heartbeat</span><b class="pill ok">Healthy</b></div>
    <div><span>Queue depth</span><b>0</b></div>
    <div><span>Recovery check</span><b class="pill ok">Passed</b></div>
  </div>
</div>
{node(0, 530, "1", "AI drafts copy")}
{node(0, 600, "2", "Industry + location check", True)}
{node(0, 670, "3", "AIOSEO update, verified")}
""",
    """
table{width:100%;border-collapse:collapse;font-size:14.5px}
th{text-align:left;font-size:12px;letter-spacing:.12em;text-transform:uppercase;color:#7f8c84;font-weight:500;padding:16px 20px 12px;border-bottom:1px solid #ffffff12}
td{padding:15px 20px;border-bottom:1px solid #ffffff0d;color:#dfe8e2;white-space:nowrap}
td.mono{color:#a9b5ad;font-size:13.5px}
.kv{display:grid;gap:16px;font-size:15px}
.kv div{display:flex;justify-content:space-between;align-items:center;color:#a9b5ad}
.kv b{color:#eef3ef;font-weight:600}
""",
)

# 6. Incident response --------------------------------------------------------
tiles = "".join('<div class="tile"><i></i>OK</div>' for _ in range(21))
COVERS["wordpress-incident-response-cover"] = page(
    "#ff9670", "#7a2a153a", "SECURITY ENGINEERING", "Incident<br>Response &amp;<br>Recovery",
    "Trace the persistence, contain it at the source and verify recovery without false assurance.",
    ["Server-wide scope identified", "Source and seeds removed in one pass", "21 checked sites responding"],
    f"""
<div class="win term" style="left:0;top:20px;width:500px;height:520px">
  <div class="bar"><b></b><b></b><b></b><span>incident log</span></div>
  <div class="pad mono">
    <p><em>detect</em> deleted files kept coming back</p>
    <p class="w">! infection beyond the reported sites</p>
    <p><em>trace</em> audit rule captured the writer</p>
    <p class="w">! reinfection seeds located</p>
    <p class="d">→ scope: server-wide</p>
    <p><em>contain</em> source and seeds removed</p>
    <p class="g">✓ removed in one pass</p>
    <p><em>verify</em> public response check</p>
    <p class="g">✓ 21 of 21 checked sites responding</p>
    <p class="d">→ clean rebuild recommended, no all-clear claimed</p>
  </div>
</div>
<div class="win" style="left:530px;top:20px;width:230px;height:520px">
  <div class="bar"><span style="margin:0">Response</span></div>
  <div class="tl">
    <div class="ph done"><i></i><b>Detect</b></div>
    <div class="ph done"><i></i><b>Trace</b></div>
    <div class="ph done hot"><i></i><b>Contain</b></div>
    <div class="ph done"><i></i><b>Remove</b></div>
    <div class="ph done"><i></i><b>Verify</b></div>
  </div>
</div>
<div class="win" style="left:0;top:570px;width:760px;height:180px">
  <div class="bar"><span style="margin:0">Public response check</span><span style="margin-left:auto" class="pill ok">21 / 21</span></div>
  <div class="tiles">{tiles}</div>
</div>
""",
    """
.term .pad{font-size:15px;line-height:1.95}
.term em{font-style:normal;color:var(--accent);margin-right:8px}
.term .w{color:#ffcf8a}.term .g{color:#9ff0bb}.term .d{color:#7f8c84}
.tl{padding:26px 26px;display:grid;gap:30px;position:relative}
.tl::before{content:"";position:absolute;left:36px;top:36px;bottom:40px;width:2px;background:#ffffff1a}
.ph{display:flex;gap:16px;align-items:center;position:relative;font-size:17px}
.ph i{width:24px;height:24px;border-radius:50%;border:2px solid #9ff0bb;background:#13281b;display:grid;place-items:center;font-style:normal;font-size:12px;color:#9ff0bb}
.ph i::before{content:"✓"}
.ph.hot i{color:#2a0f06}
.ph.hot i{border-color:var(--accent);background:var(--accent);box-shadow:0 0 22px var(--accent)}
.tiles{display:grid;grid-template-columns:repeat(11,1fr);gap:9px;padding:18px}
.tile{height:42px;border-radius:7px;border:1px solid #3f7d55;background:#13281b;color:#9ff0bb;font-size:12px;display:flex;align-items:center;justify-content:center;gap:6px;font-family:"JetBrains Mono",monospace}
.tile i{width:6px;height:6px;border-radius:50%;background:#9ff0bb}
""",
)

# 7. Playwright MCP + Cline ---------------------------------------------------
checks = "".join(f'<div class="ck"><span>✓</span>{t}</div>' for t in ["Assertion 1 passed", "Assertion 2 passed", "Assertion 3 passed", "Assertion 4 passed", "Assertion 5 passed"])
COVERS["playwright-cline-integration"] = page(
    "#b9a5ff", "#3d2a7a3a", "SUPERVISED BROWSER AUTOMATION", "Playwright MCP<br>+ Cline",
    "Browser actions on Windows that run only after a person approves each one.",
    ["Human approval per action", "Two local runs · 5 of 5 checks each", "Client acceptance still pending"],
    f"""
<div class="win" style="left:0;top:20px;width:760px;height:560px">
  <div class="bar"><b></b><b></b><b></b><span>Windows · Cline</span></div>
  <div class="split">
    <div class="cline">
      <div class="label">Cline</div>
      <div class="task">Open the test page, fill the form and confirm the result.</div>
      <div class="req">
        <div class="mono rq">browser_click</div>
        <div style="color:#a9b5ad;font-size:14px;margin-top:6px">button “Submit” on the local test page</div>
        <div class="btns"><span class="ap">Approve</span><span class="rj">Reject</span></div>
      </div>
      <div class="note">Nothing runs until approved.</div>
    </div>
    <div class="browser">
      <div class="url mono">localhost · synthetic test page</div>
      <div class="fake"><div class="pl" style="width:60%;height:16px"></div><div class="pl"></div><div class="pl" style="width:80%"></div><div class="fbtn"></div></div>
      <div class="checks">{checks}</div>
    </div>
  </div>
</div>
{node(0, 630, "R", "Restart verified")}
{node(232, 630, "C", "Config restored exactly", True)}
{node(520, 630, "E", "Evidence saved")}
<div class="glowline" style="left:20px;top:612px;width:720px"></div>
""",
    """
.split{display:grid;grid-template-columns:310px 1fr;height:calc(100% - 42px)}
.cline{padding:22px;border-right:1px solid #ffffff12;background:#0d1311}
.task{margin-top:12px;font-size:15.5px;line-height:1.5;padding:14px;border-radius:12px;background:#18201d;border:1px solid #ffffff14}
.req{margin-top:16px;padding:16px;border-radius:12px;border:1px solid color-mix(in srgb,var(--accent) 60%,transparent);background:color-mix(in srgb,var(--accent) 8%,#101614);box-shadow:0 0 36px color-mix(in srgb,var(--accent) 22%,transparent)}
.rq{color:var(--accent);font-size:15px}
.btns{display:flex;gap:10px;margin-top:14px}
.btns span{padding:9px 16px;border-radius:9px;font-size:14px;font-weight:600}
.ap{background:var(--accent);color:#120a24}
.rj{border:1px solid #ffffff2a;color:#dfe8e2}
.note{margin-top:16px;font-size:13.5px;color:#8f9c94}
.browser{padding:20px}
.url{height:36px;border-radius:9px;background:#0b100e;border:1px solid #ffffff17;font-size:13px;color:#8f9c94;padding:10px 14px}
.fake{margin-top:16px;padding:18px;border-radius:12px;background:#121a17;border:1px solid #ffffff12}
.pl{height:9px;border-radius:5px;background:#ffffff1a;margin-bottom:10px}
.fbtn{width:110px;height:32px;border-radius:8px;background:color-mix(in srgb,var(--accent) 55%,#222);margin-top:14px}
.checks{margin-top:16px;display:grid;gap:9px}
.ck{display:flex;gap:10px;align-items:center;font-size:14.5px;color:#dfe8e2}
.ck span{width:22px;height:22px;border-radius:6px;background:#13281b;border:1px solid #3f7d55;color:#9ff0bb;display:grid;place-items:center;font-size:12px}
""",
)


def main(only=None):
    with sync_playwright() as p:
        browser = p.chromium.launch()
        pg = browser.new_page(viewport={"width": 1440, "height": 960}, device_scale_factor=1)
        for name, html in COVERS.items():
            if only and name not in only:
                continue
            (OUT / f"{name}.html").write_text(html, encoding="utf-8")
            pg.goto((OUT / f"{name}.html").as_uri())
            pg.wait_for_load_state("networkidle")
            pg.evaluate("document.fonts.ready")
            png = OUT / f"{name}.png"
            pg.screenshot(path=str(png))
            Image.open(png).convert("RGB").save(PUBLIC / f"{name}.webp", "WEBP", quality=88, method=6)
            print("rendered", name)
        browser.close()
    shutil.rmtree(OUT, ignore_errors=True)


if __name__ == "__main__":
    main(sys.argv[1:] or None)
