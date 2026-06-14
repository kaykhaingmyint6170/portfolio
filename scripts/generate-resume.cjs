const PDFDocument = require('pdfkit');
const fs = require('fs');
const path = require('path');

// ── Load data from JSON files ──────────────────────────────
const profile = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'src', 'data', 'profile.json'), 'utf-8'));
const experiences = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'src', 'data', 'experience.json'), 'utf-8'));
const skillsData = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'src', 'data', 'skills.json'), 'utf-8'));
const projectsData = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'src', 'data', 'projects.json'), 'utf-8'));

// ── Create document ──────────────────────────────────────────
const doc = new PDFDocument({
  size: 'A4',
  margins: { top: 55, bottom: 55, left: 55, right: 55 },
  info: {
    Title: `${profile.name} - Resume`,
    Author: profile.name,
  },
});

const outDir = path.join(__dirname, '..', 'public', 'resume');
fs.mkdirSync(outDir, { recursive: true });
doc.pipe(fs.createWriteStream(path.join(outDir, 'KayKhaingMyint_Resume.pdf')));

// ── Colors ──────────────────────────────────────────────────
const INDIGO = '#6366f1';
const DARK = '#1e293b';
const GRAY = '#64748b';

const PAGE_HEIGHT = 841.89; // A4 points
const BOTTOM_MARGIN = 55;
const usableBottom = PAGE_HEIGHT - BOTTOM_MARGIN;

// ── Helpers ─────────────────────────────────────────────────
function bullet(text, x, y) {
  doc.fontSize(10).font('Helvetica').fillColor(DARK);
  doc.text(`• ${text}`, x + 8, y, { width: 480, lineGap: 4 });
  return doc.y + 3;
}

function sectionTitle(text, y) {
  // If less than 60px remaining, force page break
  if (y > usableBottom - 60) {
    doc.addPage();
    y = doc.y;
  }
  doc.rect(55, y, 500, 24).fillColor('#f1f5f9').fill();
  doc.fillColor(INDIGO).fontSize(13).font('Helvetica-Bold').text(text.toUpperCase(), 60, y + 5);
  return y + 28;
}

// ── Header ──────────────────────────────────────────────────
doc.fillColor(INDIGO).fontSize(26).font('Helvetica-Bold').text(profile.name, 55, 55);
doc.fillColor(DARK).fontSize(13).font('Helvetica').text(profile.title, 55, 90);

doc.fontSize(9.5).font('Helvetica').fillColor(GRAY);
const gh = profile.social?.github?.replace(/^https?:\/\//, '') || '';
const li = profile.social?.linkedin?.replace(/^https?:\/\//, '') || '';
doc.text(`${profile.email}  |  ${profile.location}  |  ${gh}  |  ${li}`, 55, 115);

doc.moveTo(55, 140).lineWidth(2).strokeColor(INDIGO).lineTo(555, 140).stroke();

let y = 158;

// ── Summary ─────────────────────────────────────────────────
y = sectionTitle('Summary', y);
doc.fontSize(10.5).font('Helvetica').fillColor(DARK);
doc.text(profile.summary, 55, y, { width: 500, align: 'left', lineGap: 4 });
y = doc.y + 16;

// ── Experience ──────────────────────────────────────────────
y = sectionTitle('Experience', y);

for (const exp of experiences) {
  const start = exp.startDate || '';
  const end = exp.endDate || (exp.current ? 'Present' : '');
  const period = start && end ? `${start} – ${end}` : start || end;

  doc.fontSize(11).font('Helvetica-Bold').fillColor(DARK).text(`${exp.role} — ${exp.company}`, 55, y + 2);
  doc.fontSize(9).font('Helvetica').fillColor(GRAY).text(`${exp.location}  |  ${period}`, 305, y + 2);
  y = doc.y + 6;
  for (const h of exp.highlights || []) {
    y = bullet(h, 55, y);
  }
  y += 10;
}

// ── Skills ──────────────────────────────────────────────────
y = sectionTitle('Skills', y);
y += 4;
for (const cat of skillsData.categories || []) {
  const names = (cat.skills || []).map(s => s.name).join(' · ');
  doc.fontSize(10.5).font('Helvetica-Bold').fillColor(DARK).text(`${cat.name}:  `, 55, y, { continued: true });
  doc.fontSize(10.5).font('Helvetica').fillColor(GRAY).text(names, { width: 420 });
  y = doc.y + 6;
}

// ── Languages ───────────────────────────────────────────────
y = sectionTitle('Languages', y);
y += 4;
for (const l of profile.languages || []) {
  doc.fontSize(10).font('Helvetica').fillColor(GRAY).text(`  •  ${l.name} — ${l.level}`, 55, y);
  y = doc.y + 4;
}

// ── Projects ────────────────────────────────────────────────
y = sectionTitle('Key Projects', y);
y += 4;
for (const p of projectsData || []) {
  const tech = (p.tech || []).join(', ');
  doc.fontSize(10).font('Helvetica-Bold').fillColor(DARK).text(`  •  ${p.title}`, 55, y);
  y = doc.y + 2;
  doc.fontSize(9.5).font('Helvetica').fillColor(GRAY).text(`     ${tech}`, 55, y);
  y = doc.y + 4;
}

doc.end();

console.log('✅ Resume PDF generated at public/resume/KayKhaingMyint_Resume.pdf');
