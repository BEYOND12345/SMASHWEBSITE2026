const fs = require('fs');

function extract(file, startStr, endStr, out) {
  const content = fs.readFileSync(file, 'utf8');
  const start = content.indexOf(startStr);
  const end = content.indexOf(endStr, start);
  if (start === -1 || end === -1) return console.log("Not found in", file);
  
  const html = `<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=900"><style>
@font-face { font-family:'BarlowBlkIt'; src:url('/fonts/BarlowCondensed-BlackItalic.ttf') format('truetype'); font-weight:900; font-style:italic; font-display:swap; }
@font-face { font-family:'BarlowBlk'; src:url('/fonts/BarlowCondensed-Black.ttf') format('truetype'); font-weight:900; font-style:normal; font-display:swap; }
@font-face { font-family:'Jakarta'; src:url('/fonts/PlusJakartaSans.ttf') format('truetype'); font-weight:400 700; font-style:normal; font-display:swap; }
* { margin:0; padding:0; box-sizing:border-box; -webkit-font-smoothing:antialiased; }
html, body { background:transparent; overflow:hidden; }
.phone { width:900px; height:1240px; background:#FFFFFF; border-radius:72px; overflow:hidden; position:relative; transform-origin:top left; }
</style></head><body><div class="phone">` +
  content.substring(start + startStr.length, end) +
  `</div></body></html>`;
  
  fs.writeFileSync(out, html);
  console.log("Wrote", out);
}

extract(
  '/Users/danielneale/Documents/SMASHINVOICES/SMASH_JUNE/Ios Store screen shots /ios_html/ios_frame4_pay.html',
  '<div style="width:880px; height:1180px; background:#FFFFFF; border-radius:72px; box-shadow:0 50px 130px rgba(0,0,0,0.5); overflow:hidden;">',
  '</div>\n</div>\n\n<div class="phone-wrap"',
  'public/product/ios/screens/pay-bg.html'
);

extract(
  '/Users/danielneale/Documents/SMASHINVOICES/SMASH_JUNE/Ios Store screen shots /ios_html/ios_frame9_customers.html',
  '<div style="width:880px; height:1180px; background:#FFFFFF; border-radius:72px; box-shadow:0 50px 130px rgba(0,0,0,0.5); overflow:hidden;">',
  '</div></div></div>\n\n<div class="phone-wrap"',
  'public/product/ios/screens/customers-bg.html'
);
