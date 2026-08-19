import './styles.css'
import './styles-profile.css'
import './styles-polish.css'
import './styles-viewport.css'
import './styles-motion.css'
import './styles-materials.css'
import './styles-component-lab.css'
import profile from './profile.js'

const jump = (id) => `data-jump="${id}"`
const metrics = profile.metrics.map((metric) => `<div class="metric"><strong>${metric.value}</strong><span>${metric.label}</span><small>${metric.en}</small></div>`).join('')
const education = profile.education.map((item) => `<article class="education-item"><span class="education-tag">${item.tag}</span><div><h3>${item.school}</h3><p class="education-en">${item.en}</p><p>${item.degree}</p></div><time>${item.period}</time></article>`).join('')
const internships = profile.experience.map((item, index) => `<article class="experience-card" id="experience-${index + 1}"><div class="experience-top"><span class="education-tag">${item.type}</span><time>${item.period}</time></div><h3>${item.company}</h3><p class="experience-role">${item.role}</p><p>${item.summary}</p><div class="experience-tags">${item.tags.map((tag) => `<span>${tag}</span>`).join('')}</div></article>`).join('')
const skills = profile.skills.map((skill) => `<span class="skill-chip">${skill}</span>`).join('')
const explorations = profile.explorations.map((item, index) => `<li><span>0${index + 1}</span>${item}</li>`).join('')

const aboutKeychain = (instance = 'board') => `
  <button class="board-widget widget-about" ${jump('about')} aria-label="Open About Me">
    <span class="keychain-assembly">
      <svg class="keychain-svg" viewBox="0 0 184 340" aria-hidden="true" focusable="false">
        <defs>
          <linearGradient id="metal-${instance}" x1="0" x2="1"><stop offset="0" stop-color="#3f4142"/><stop offset=".16" stop-color="#f8faf9"/><stop offset=".33" stop-color="#777a7b"/><stop offset=".5" stop-color="#e9eeee"/><stop offset=".67" stop-color="#555859"/><stop offset=".84" stop-color="#fbffff"/><stop offset="1" stop-color="#343637"/></linearGradient>
          <linearGradient id="amber-${instance}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#ffd83b" stop-opacity=".96"/><stop offset=".48" stop-color="#ffbd00" stop-opacity=".9"/><stop offset="1" stop-color="#e99800" stop-opacity=".94"/></linearGradient>
          <linearGradient id="amber-edge-${instance}" x1="0" x2="1"><stop offset="0" stop-color="#9d6100"/><stop offset=".12" stop-color="#fff0a0"/><stop offset=".52" stop-color="#e59800"/><stop offset=".86" stop-color="#ffe77b"/><stop offset="1" stop-color="#975700"/></linearGradient>
          <filter id="hardware-shadow-${instance}" x="-60%" y="-40%" width="220%" height="220%"><feDropShadow dx="2" dy="4" stdDeviation="3" flood-color="#29251f" flood-opacity=".42"/></filter>
          <filter id="tag-shadow-${instance}" x="-40%" y="-30%" width="190%" height="190%"><feDropShadow dx="5" dy="10" stdDeviation="7" flood-color="#4b3a22" flood-opacity=".28"/></filter>
          <filter id="key-shadow-${instance}" x="-60%" y="-35%" width="230%" height="210%"><feDropShadow dx="4" dy="7" stdDeviation="4" flood-color="#29251f" flood-opacity=".38"/></filter>
        </defs>
        <image class="about-photo" href="/about-me-photo-v1.png" x="-7" y="0" width="198" height="340" preserveAspectRatio="xMidYMid meet"/>
      </svg>
      <span class="keychain-copy"><span class="widget-number">01</span><strong>ABOUT ME</strong><small>个人简介</small><i></i><p>Know more about<br>my background<br>and vision.</p></span>
      <span class="keychain-glint" aria-hidden="true"></span>
    </span>
  </button>`

const aboutWidget = aboutKeychain('board')
const aboutWidgetLab = aboutKeychain('lab')

const internshipRows = [
  ['01', 'Analemma', '日行迹', '/internship-logo-01.jpg'],
  ['02', 'Meituan', '美团', '/internship-logo-02.jpg'],
  ['03', 'Rednote', '小红书', '/internship-logo-03.png'],
  ['04', 'Netease', '网易', '/internship-logo-04.png'],
  ['05', 'the others', '', '/internship-logo-05.jpg'],
]
const internshipRowsMarkup = internshipRows.map(([number, company, label, image], index) => `
  <span class="internship-row${index === 0 ? ' is-selected' : ''}" role="button" tabindex="0" data-experience="${number}">
    <b>${number}</b><span><strong>${company}</strong>${label ? `<small>${label}</small>` : ''}</span><span class="internship-thumb${image ? ' has-image' : ''}" data-image-slot="${company}" aria-label="${company} image placeholder">${image ? `<img src="${image}" alt="${company} logo" />` : ''}</span>
  </span>`).join('')
const internshipWidget = (instance = 'board') => `
  <button class="board-widget widget-internship internship-component" ${jump('internship')} aria-label="Open Internships">
    <span class="internship-assembly">
      <svg class="internship-svg" viewBox="0 0 978 1633" aria-hidden="true" focusable="false">
        <defs><clipPath id="internship-card-${instance}" clipPathUnits="userSpaceOnUse"><rect x="106" y="338" width="766" height="1138" rx="42" /></clipPath><clipPath id="internship-hook-${instance}" clipPathUnits="userSpaceOnUse"><rect x="270" y="0" width="440" height="342" /></clipPath></defs>
        <image href="/internship-shell-v1.png" x="0" y="0" width="978" height="1633" preserveAspectRatio="none" clip-path="url(#internship-card-${instance})" />
        <image href="/internship-shell-v1.png" x="0" y="0" width="978" height="1633" preserveAspectRatio="none" clip-path="url(#internship-hook-${instance})" />
      </svg>
      <span class="internship-copy"><span class="widget-number">02</span><strong>INTERNSHIPS</strong><small>实习经历</small><h3>Different experience in the position of AI product operator</h3><i></i><span class="internship-rows">${internshipRowsMarkup}</span></span>
      <span class="internship-glint" aria-hidden="true"></span>
    </span>
  </button>`
const internshipWidgetBoard = internshipWidget('board')
const internshipWidgetLab = internshipWidget('lab')

const educationWidget = (instance = 'board') => `
  <button class="board-widget widget-education education-component" ${jump('education')} aria-label="Open Education">
    <span class="education-assembly">
      <svg class="education-svg" viewBox="0 0 1153 1363" aria-hidden="true" focusable="false"><image href="/education-shell-v1.png" x="0" y="0" width="1153" height="1363" preserveAspectRatio="none" /></svg>
      <span class="education-copy"><span class="widget-number">03</span><strong>EDUCATION</strong><small>教育背景</small><span class="education-photo"><img src="/education-photo.jpg" alt="Portrait" /></span><span class="education-summary">Shanghai Academy<br>of Social Sciences<br>上海社科新闻研究所</span><span class="education-link">VIEW BACKGROUND <b>→</b></span></span>
    </span>
  </button>`
const educationWidgetBoard = educationWidget('board')
const educationWidgetLab = educationWidget('lab')

document.querySelector('#app').innerHTML = `
  <main class="site-shell">
    <div class="grain"></div>
    <header class="topbar">
      <button class="brand-mark" ${jump('home')} aria-label="Back to home"><span>CUI</span><i>*</i><span>YJ</span><small>PORTFOLIO</small></button>
      <nav class="main-nav" aria-label="Main navigation">
        <button class="nav-link active" ${jump('home')}>Home</button>
        <button class="nav-link" ${jump('education')}>Education</button>
        <button class="nav-link" ${jump('internship')}>Internship</button>
        <button class="nav-link" ${jump('archive')}>Archive</button>
        <button class="nav-link" ${jump('skill')}>Skill</button>
      </nav>
      <button class="menu-toggle" aria-label="Open menu"><span></span><span></span></button>
    </header>

    <section class="page page-home active-page" id="home" data-view="home">
      <aside class="side-notes portfolio-rail">
        <div class="rail-title">CUI * YJ <span>PORTFOLIO</span></div>
        <div class="rail-subtitle">WHERE IDEAS MEET<br>NEW BEGINNINGS.</div>
        <div class="rail-rule"></div>
        <div class="rail-block"><b>WHY NOT MODE</b><span>○ CURIOSITY ACTIVE</span></div>
        <div class="rail-rule"></div>
        <div class="rail-block legend"><b>BOARD LEGEND</b><span>01&nbsp;&nbsp; Key Tag <i>About</i></span><span>02&nbsp;&nbsp; Clear File <i>Internships</i></span><span>03&nbsp;&nbsp; ID Card <i>Education</i></span><span>04&nbsp;&nbsp; Black Badge <i>Skills</i></span><span>05&nbsp;&nbsp; Airmail Card <i>Contact</i></span></div>
        <div class="rail-rule"></div>
        <div class="rail-block interface"><b>OBJECT INTERFACE</b><span>→ Hover for details</span><span>→ Click to unfold</span></div>
        <div class="rail-statement">BRANDS / OBJECTS<br>STORIES & IMAGE<br>SYSTEMS.</div>
        <div class="rail-footer"><span>AVAILABLE FOR<br>SELECTED PROJECTS</span><b>2024—25</b></div>
      </aside>
      <div class="hero-copy"><p class="eyebrow">${profile.role} <span>↗</span></p><h1>${profile.name}<br><em>${profile.nameEn}</em></h1><p class="intro">${profile.headline}。${profile.subtitle}。</p><div class="metrics-grid">${metrics}</div></div>
      <div class="pegboard" aria-label="Portfolio navigation">
        <div class="peg-dots"></div>
        ${aboutWidget}
        ${internshipWidgetBoard}
        ${educationWidgetBoard}
        <button class="board-widget widget-internship" ${jump('internship')}><span class="widget-ring"></span><span class="widget-number">02</span><strong>INTERNSHIPS</strong><small>实习经历</small><em>Selected<br>experiences</em><div class="mini-lines"><i></i><i></i><i></i><i></i></div><b>↗</b></button>
        <button class="board-widget widget-education" ${jump('education')}><span class="widget-ring"></span><span class="widget-number">03</span><strong>EDUCATION</strong><small>教育背景</small><div class="id-photo">CU<br>YJ</div><p>Work experience<br>Education</p><b>VIEW CV&nbsp;&nbsp;→</b></button>
        <button class="board-widget widget-skills" ${jump('skill')}><span class="widget-ring"></span><span class="widget-number">04</span><strong>SKILLS&WORKS</strong><small>技能 / 作品</small><div class="skill-badges"><span>AI PRODUCT</span><span>PRD</span><span>SQL</span><span>Figma</span><span>GROWTH</span></div><b>→</b></button>
        <button class="board-widget widget-contact" ${jump('contact')}><span class="widget-ring"></span><span class="widget-number">05</span><strong>CONTACT</strong><small>联系方式</small><div class="airmail-edge"></div><div class="stamp">✳</div><p>Let's create<br>something great<br>together!</p><b>→</b></button>
        <div class="open-tag"><span>OPEN TO WORK ☺</span><small>Let's create<br>something great<br>together!</small></div>
        <div class="scroll-cue">SCROLL TO UNFOLD <b>↓</b></div>
      </div>
    </section>

    <section class="page detail-page page-about" id="about" data-view="about"><div class="section-intro"><span class="vertical-label">01 / ABOUT ME</span><div><p class="eyebrow">ABOUT ME / ${profile.nameEn}</p><h2>Product<br><em>thinking</em><br>with a human<br>signal.</h2><p class="section-lead">${profile.headline}。我在 AI 产品、用户运营、内容生态和数据分析之间工作，把复杂能力翻译成用户能理解、团队能执行的产品体验。</p><a class="text-link" href="${profile.github}" target="_blank" rel="noreferrer">Open GitHub profile ↗</a></div></div><div class="about-note">${profile.subtitle}<br><span>${profile.city}</span></div></section>

    <section class="page detail-page page-internship" id="internship" data-view="internship"><div class="archive-head"><div><p class="eyebrow">02 / INTERNSHIPS</p><h2>Work<br><em>in motion.</em></h2></div><span class="archive-count">04<br><small>ROLES</small></span></div><div class="experience-stack">${internships}</div><div class="experience-note">Product operations · user research · community growth · content ecosystem · data analysis</div></section>

    <section class="page detail-page page-education" id="education" data-view="education"><div class="section-intro"><span class="vertical-label">03 / EDUCATION</span><div><p class="eyebrow">EDUCATION / RESEARCH</p><h2>Learning<br><em>in public.</em></h2><p class="section-lead">A background across journalism, media studies, Czech language and international communication.</p></div></div><div class="education-stack">${education}</div><div class="section-footnote">Research direction: audiovisual communication · political economy of communication</div></section>

    <section class="page detail-page page-skill" id="skill" data-view="skill"><div class="section-intro"><span class="vertical-label">04 / SKILLS & WORKS</span><div><p class="eyebrow">SKILLS / SELECTED WORKS</p><h2>Useful<br><em>signals.</em></h2><p class="section-lead">A practical toolkit for turning ambiguous questions into clear product actions.</p></div></div><div class="skill-cloud">${skills}</div><div class="skill-columns"><div><span class="eyebrow">AI & PRODUCT</span><p>Agent workflows · RAG · PRD writing · product collaboration · user journey optimization</p></div><div><span class="eyebrow">SELECTED WORK</span><p>Lemma product operations · product brief · landing-page PRD · AlphaXiv product research</p></div></div></section>

    <section class="page detail-page page-archive" id="archive" data-view="archive"><div class="archive-head"><div><p class="eyebrow">05 / ARCHIVE</p><h2>Notes &<br><em>works.</em></h2></div><span class="archive-count">04<br><small>THREADS</small></span></div><div class="exploration-block"><ul>${explorations}</ul></div><div class="archive-link-card"><span class="eyebrow">PORTFOLIO LINK</span><strong>Lemma / AI research product</strong><p>Product brief, landing-page PRD and AlphaXiv product research.</p><a href="https://pan.baidu.com/s/1HGUnonuVhlZ1Qhzyrv0REQ" target="_blank" rel="noreferrer">Open external portfolio ↗</a></div></section>

    <section class="page detail-page page-contact" id="contact" data-view="contact"><div class="section-intro"><span class="vertical-label">06 / CONTACT</span><div><p class="eyebrow">CONTACT / LET'S TALK</p><h2>Make<br><em>something</em><br>great.</h2><p class="section-lead">Open to selected product, strategy, research and content collaborations.</p><a class="text-link" href="${profile.github}" target="_blank" rel="noreferrer">GitHub profile ↗</a></div></div><div class="contact-card"><span>CONTACT</span><strong>${profile.nameEn}</strong><p>Shanghai / Everywhere<br>AI product operations<br>Product strategy & research</p><a href="${profile.github}" target="_blank" rel="noreferrer">github.com/petrbisu0315-max/Cuiyujie ↗</a></div></section>

    <section class="component-lab component-lab-01" aria-label="Component 01 review workspace">
      <div class="lab-heading"><span>COMPONENT LAB / 01</span><h1>ABOUT ME<br><em>keychain.</em></h1><p>Actual-size SVG and CSS study. Hover the object to test its physical response.</p><a href="./" class="lab-back">← RETURN TO BOARD</a></div>
      <figure class="lab-reference"><figcaption>REFERENCE / STRUCTURE</figcaption><img src="/reference-01.png" alt="Reference keychain component" /></figure>
      <div class="lab-sample"><span class="lab-label">LIVE OBJECT / ACTUAL SIZE</span>${aboutWidgetLab}<span class="lab-hint">HOVER · CLICK TO UNFOLD</span></div>
    </section>
    <div class="status-bar"><span>AVAILABLE FOR SELECTED PROJECTS</span><span class="status-dot"></span><span>2024—25</span></div>
    <section class="component-lab component-lab-02" aria-label="Component 02 review workspace">
      <div class="lab-heading"><span>COMPONENT LAB / 02</span><h1>INTERNSHIPS<br><em>clear file.</em></h1><p>Different experience in the position of AI product operator.</p><a href="./" class="lab-back">RETURN TO BOARD</a></div>
      <figure class="lab-reference"><figcaption>REFERENCE / MATERIAL</figcaption><img src="/reference-02.png" alt="Reference clear file component" /></figure>
      <div class="lab-sample"><span class="lab-label">LIVE OBJECT / ACTUAL SIZE</span>${internshipWidgetLab}<span class="lab-hint">HOVER · CLICK TO UNFOLD</span></div>
    </section>
    <section class="component-lab component-lab-03" aria-label="Component 03 review workspace">
      <div class="lab-heading"><span>COMPONENT LAB / 03</span><h1>EDUCATION<br><em>badge.</em></h1><p>Education background, carried like a fabric ID badge.</p><a href="./" class="lab-back">RETURN TO BOARD</a></div>
      <figure class="lab-reference"><figcaption>REFERENCE / STRUCTURE</figcaption><img src="/reference-03.png" alt="Reference education badge component" /></figure>
      <div class="lab-sample"><span class="lab-label">LIVE OBJECT / ACTUAL SIZE</span>${educationWidgetLab}<span class="lab-hint">HOVER · CLICK TO UNFOLD</span></div>
    </section>
  </main>
`

const pages = [...document.querySelectorAll('.page')]
const navItems = [...document.querySelectorAll('.nav-link')]
const params = new URLSearchParams(window.location.search)
const isComponentLab = ['01', '02', '03'].includes(params.get('lab'))
document.body.classList.toggle('component-lab-mode', isComponentLab)
document.body.classList.toggle('component-lab-02-mode', params.get('lab') === '02')
document.body.classList.toggle('component-lab-03-mode', params.get('lab') === '03')
const navigate = (id) => {
  if (isComponentLab) {
    window.location.href = `${window.location.pathname}#${id}`
    return
  }
  const target = document.getElementById(id)
  if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' })
  document.querySelector('.main-nav').classList.remove('nav-open')
}
document.querySelectorAll('[data-jump]').forEach((button) => button.addEventListener('click', () => navigate(button.dataset.jump)))
document.querySelectorAll('.internship-row').forEach((row) => {
  const selectRow = (event) => {
    event.stopPropagation()
    document.querySelectorAll('.internship-row').forEach((item) => item.classList.toggle('is-selected', item === row))
  }
  row.addEventListener('click', selectRow)
  row.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); selectRow(event) }
  })
})
if (params.get('lab') === '03') {
  const editor = document.querySelector('.component-lab-03')
  const sample = editor?.querySelector('.lab-sample')
  const output = document.querySelector('#education-layout-output')
  const targets = editor ? [...editor.querySelectorAll('.education-copy [data-edit-key]')] : []
  let active = null
  const educationButton = editor?.querySelector('.education-component')
  educationButton?.addEventListener('click', (event) => {
    event.preventDefault()
    event.stopImmediatePropagation()
  }, true)
  targets.forEach((target) => {
    target.classList.add('layout-editable')
    if (target.matches('[contenteditable="true"]')) target.setAttribute('contenteditable', 'false')
    target.addEventListener('dblclick', (event) => {
      if (!target.matches('[data-edit-key]:not([data-edit-key="photo"])')) return
      event.preventDefault()
      event.stopPropagation()
      target.setAttribute('contenteditable', 'true')
      target.focus()
      const selection = window.getSelection()
      const range = document.createRange()
      range.selectNodeContents(target)
      selection?.removeAllRanges()
      selection?.addRange(range)
      if (output) output.textContent = `${target.dataset.editKey.toUpperCase()} · EDITING`
    })
    target.addEventListener('blur', () => {
      if (target.matches('[contenteditable="true"]')) target.setAttribute('contenteditable', 'false')
    })
    target.addEventListener('pointerdown', (event) => {
      if (target.matches('[contenteditable="true"]')) return
      const rect = target.getBoundingClientRect()
      active = { target, startX: event.clientX, startY: event.clientY, left: rect.left, top: rect.top }
      target.setPointerCapture(event.pointerId)
      event.preventDefault()
      event.stopPropagation()
    })
    target.addEventListener('pointermove', (event) => {
      if (!active || active.target !== target) return
      const parent = target.parentElement.getBoundingClientRect()
      const x = Math.round(active.left + event.clientX - active.startX - parent.left)
      const y = Math.round(active.top + event.clientY - active.startY - parent.top)
      target.style.left = `${x}px`; target.style.top = `${y}px`; target.style.right = 'auto'; target.style.bottom = 'auto'
      if (output) output.textContent = `${target.dataset.editKey.toUpperCase()} · LEFT ${x}px · TOP ${y}px`
    })
    target.addEventListener('pointerup', () => { active = null })
    target.addEventListener('pointercancel', () => { active = null })
  })
  sample?.classList.add('manual-layout-active')
}
document.querySelector('.menu-toggle').addEventListener('click', () => document.querySelector('.main-nav').classList.toggle('nav-open'))
const observer = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) { navItems.forEach((item) => item.classList.toggle('active', item.dataset.jump === entry.target.id)); entry.target.classList.add('section-seen') } }), { threshold: .45 })
pages.forEach((page) => observer.observe(page))
const shell = document.querySelector('.site-shell')
shell.addEventListener('scroll', () => { const top = shell.scrollTop; pages.forEach((page) => { if (Math.abs(page.offsetTop - top) < 40) navItems.forEach((item) => item.classList.toggle('active', item.dataset.jump === page.id)) }) })
let navShown = false
window.addEventListener('pointermove', (event) => { const next = event.clientY < 96; if (next !== navShown) { navShown = next; document.querySelector('.site-shell').classList.toggle('nav-revealed', next) } })

if (!isComponentLab && window.location.hash) {
  requestAnimationFrame(() => navigate(window.location.hash.slice(1)))
}
