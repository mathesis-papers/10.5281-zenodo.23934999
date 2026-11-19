'use strict';

SCENES.open = S => {
  const a = clamp(S.u / 0.8) * clamp((S.d - S.u) / 0.6);
  badgeQ(S, [[0, 'two continuous parity-odd readings', 'argued'], [1, 'three variables', 'now']]);
  txt('CHIRAL EVENT PARITY', W / 2, 280, { size: 32, fam: F.mono, w: 700, align: 'center', c: C.cyan, a, ls: 7 });
  txt('对跖球面与三个变量', W / 2, 430, { size: 78, fam: F.zh, w: 900, align: 'center', c: C.white, a, ab: 3 });
  txt('THE ANTIPODAL SPHERE', W / 2, 520, { size: 42, fam: F.disp, w: 700, align: 'center', c: C.white, a, ls: 3 });
  panel(W / 2 - 470, 620, 940, 120, a, C.mag, 'QUESTION');
  txt('two readings  →  common zero', W / 2, 690, { size: 30, fam: F.mono, w: 700, align: 'center', c: C.white, a });
};

SCENES.family = S => {
  const a = clamp(S.u / 0.7);
  badgeQ(S, [[0, 'unit sphere', 'computed'], [2, 'strict future-timelike collision event', 'computed']]);
  panel(120, 180, 820, 650, a, C.cyan, 'FAMILY');
  const cx = 530, cy = 510, rx = 285, ry = 210;
  ctx.save(); ctx.globalAlpha = a * 0.9; ctx.strokeStyle = C.cyan; ctx.lineWidth = 3; ctx.beginPath(); ctx.ellipse(cx, cy, rx, ry, 0, 0, Math.PI * 2); ctx.stroke(); ctx.restore();
  const p = S.p * Math.PI * 2;
  const x = cx + rx * Math.cos(p), y = cy + ry * Math.sin(p);
  dot(x, y, 13, 'now', a); ring(x, y, 26, C.now, a, 2);
  arrow(cx, cy, x, y, C.now, a, 3);
  txt('s² + t² + d² = 1', cx, 260, { size: 30, fam: F.math, align: 'center', c: C.white, a });
  txt('v = (s,t,d)', cx, 770, { size: 28, fam: F.mono, align: 'center', c: C.cyan, a });
  panel(1010, 235, 760, 470, a, C.argued, 'FOUR MOMENTA');
  txt('p = (30,0,0,1)', 1060, 330, { size: 28, fam: F.mono, c: C.white, a });
  txt('q = (20,0,0,−1)', 1060, 390, { size: 28, fam: F.mono, c: C.white, a });
  txt('aᵥ = (10+s, √(4+t), 0, d)', 1060, 470, { size: 26, fam: F.math, c: C.mag, a });
  txt('bᵥ = (10−s, 0, √(4−t), −d)', 1060, 530, { size: 26, fam: F.math, c: C.mag, a });
  txt('(p·q)² − p²q² = 2500 > 0', 1060, 620, { size: 28, fam: F.math, c: C.now, a });
};

SCENES.chirality = S => {
  const a = clamp(S.u / 0.7);
  badgeQ(S, [[0, 'unequal squared masses', 'computed'], [2, 'entire sphere is chiral', 'argued']]);
  panel(150, 210, 700, 520, a, C.cyan, 'NO MIRROR MATCH');
  txt('p² = 899', 500, 360, { size: 42, fam: F.math, align: 'center', c: C.white, a });
  txt('q² = 399', 500, 430, { size: 42, fam: F.math, align: 'center', c: C.white, a });
  txt('p ↔ q  impossible', 500, 560, { size: 30, fam: F.mono, align: 'center', c: C.now, a });
  arrow(900, 470, 1190, 470, C.mag, a, 4);
  panel(1240, 210, 560, 520, a, C.argued, 'TRANSVERSE PLANE');
  line(1390, 600, 1660, 330, C.cyan, a, 4);
  line(1390, 330, 1660, 600, C.cyan, a, 4);
  txt('det U = −1', 1525, 690, { size: 34, fam: F.math, align: 'center', c: C.white, a });
  stamp('CHIRAL', 1525, 255, clamp((S.u - 1.1) / 0.5), C.argued, 44);
};

SCENES.antipode = S => {
  const a = clamp(S.u / 0.7);
  badgeQ(S, [[0, 'antipodal point', 'argued'], [2, 'continuous odd map', 'argued']]);
  panel(120, 190, 1680, 620, a, C.cyan, 'PARITY → ANTIPODE');
  const cx = 560, cy = 510, rx = 260, ry = 190;
  ctx.save(); ctx.globalAlpha = a; ctx.strokeStyle = C.cyan; ctx.lineWidth = 3; ctx.beginPath(); ctx.ellipse(cx, cy, rx, ry, 0, 0, Math.PI * 2); ctx.stroke(); ctx.restore();
  const p = 0.6 * Math.PI;
  const x1 = cx + rx * Math.cos(p), y1 = cy + ry * Math.sin(p);
  const x2 = cx - rx * Math.cos(p), y2 = cy - ry * Math.sin(p);
  dot(x1, y1, 14, 'mag', a); dot(x2, y2, 14, 'now', a);
  arrow(x1 + 30, y1, x2 - 30, y2, C.mag, a, 3);
  txt('v', x1 + 30, y1 - 28, { size: 30, fam: F.math, c: C.mag, a });
  txt('−v', x2 + 30, y2 - 28, { size: 30, fam: F.math, c: C.now, a });
  txt('e₋ᵥ = R (ab) P eᵥ', 560, 770, { size: 30, fam: F.math, align: 'center', c: C.white, a });
  panel(1000, 300, 650, 300, a, C.argued, 'TWO READINGS');
  txt('f₁(e₋ᵥ) = −f₁(eᵥ)', 1325, 405, { size: 30, fam: F.math, align: 'center', c: C.white, a });
  txt('f₂(e₋ᵥ) = −f₂(eᵥ)', 1325, 480, { size: 30, fam: F.math, align: 'center', c: C.white, a });
  txt('F : S² → R² is odd', 1325, 555, { size: 30, fam: F.math, align: 'center', c: C.now, a });
};

SCENES.zero = S => {
  const a = clamp(S.u / 0.7);
  badgeQ(S, [[0, 'Borsuk–Ulam', 'argued'], [1, 'chiral event where both readings vanish', 'now']]);
  panel(170, 200, 1580, 590, a, C.argued, 'TOPOLOGY');
  const cx = 790, cy = 510, rx = 360, ry = 220;
  ctx.save(); ctx.globalAlpha = a; ctx.strokeStyle = C.mag; ctx.lineWidth = 4; ctx.beginPath(); ctx.ellipse(cx, cy, rx, ry, 0, 0, Math.PI * 2); ctx.stroke(); ctx.restore();
  const z = [cx, cy];
  dot(z[0], z[1], 18, 'now', a); ring(z[0], z[1], 34, C.now, a, 3);
  txt('F(v) = (0,0)', cx, cy + 90, { size: 36, fam: F.math, align: 'center', c: C.now, a });
  txt('continuous odd map', cx, 305, { size: 30, fam: F.mono, align: 'center', c: C.white, a });
  stamp('COMMON ZERO', 1300, 410, clamp((S.u - 1.0) / 0.5), C.now, 42);
  txt('two variables cannot be sufficient', 1325, 625, { size: 30, fam: F.mono, align: 'center', c: C.white, a });
};

SCENES.close = S => {
  const a = clamp((S.u - 0.2) / 0.8) * clamp((S.d - S.u) / 1.0);
  badgeQ(S, [[0, 'Lean proof', 'argued'], [1, 'exact minimum three', 'now']]);
  txt('CHIRAL EVENT PARITY', W / 2, 260, { size: 28, fam: F.mono, w: 700, align: 'center', c: C.cyan, a, ls: 8 });
  txt('对跖球面：三个变量', W / 2, 390, { size: 70, fam: F.zh, w: 900, align: 'center', c: C.white, a, ab: 3 });
  txt('THE ANTIPODAL SPHERE', W / 2, 475, { size: 42, fam: F.disp, w: 700, align: 'center', c: C.white, a, ls: 3 });
  panel(W / 2 - 540, 610, 1080, 150, a, C.argued, 'SCOPE');
  txt('lower bound: Lean proof  ·  upper bound: Lester et al.', W / 2, 690, { size: 26, fam: F.mono, align: 'center', c: C.white, a });
  txt('exact minimum three', W / 2, 820, { size: 34, fam: F.mono, align: 'center', c: C.now, a });
};

