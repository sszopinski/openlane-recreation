// Waveform heights — anomaly positions at bars ~5, 25, 33 (approx 0:00, 0:19, 0:26)
function makeWaveform() {
  const h = [10,14,20,16,10,28,32,24,18,14,20,26,30,28,22,18,24,30,34,32,26,22,18,14,18,36,32,28,24,22,18,14,24,36,30,24,18,14,10,12,16,20,24,22,18,14,10,8,10,14,18,22,20,16,12,8,6,8,10,12,10,8];
  const anomaly = new Set([]);
  return h.map((v,i) => {
    const cls = 'wb' + (i < 18 ? ' p' : '') + (anomaly.has(i) ? ' anomaly' : '');
    return `<div class="${cls}" style="height:${v}px"></div>`;
  }).join('');
}

const photos = [
  'photos/photo_01.jpg',
  'photos/photo_02.jpg',
  'photos/photo_03.jpg',
];

const thumbs = [
  'photos/thumb_01.jpg',
  'photos/thumb_02.jpg',
  'photos/thumb_03.jpg',
  'photos/thumb_04.jpg',
  'photos/thumb_05.jpg',
  'photos/thumb_06.jpg',
  'photos/thumb_07.jpg',
  'photos/thumb_08.jpg',
];

// ===== LEFT PANEL =====
document.getElementById('leftPanel').innerHTML = `

<div class="carousel-wrap">
  <div class="carousel-main" id="carouselMain">
    <img src="${photos[0]}" class="carousel-photo" id="carouselPhoto" alt="Vehicle photo">

    <div class="vb-toggle" id="vbToggle">
      <span class="vb-icon">&#9889;</span>
      <span style="font-size:11px;font-weight:600;color:#333;">Damage detection</span>
      <div class="vb-info">?</div>
      <div class="pill-toggle" id="vbPill"></div>
    </div>

    <div class="vb-label" id="vbLabel">Visual Boost AI: ON</div>

    <div class="vb-damage-overlay" id="vbOverlay">
      <div class="vb-hotspot" style="top:38%;left:16%;"></div>
      <div class="vb-hotspot" style="top:54%;left:41%;"></div>
      <div class="vb-hotspot" style="top:62%;left:65%;"></div>
      <div class="vb-hotspot" style="top:28%;left:73%;"></div>
    </div>

    <button class="c-nav prev" id="carouselPrev">&#8249;</button>
    <button class="c-nav next" id="carouselNext">&#8250;</button>
    <div class="c-counter" id="carouselCounter">1 / ${photos.length}</div>
  </div>

  <div class="thumb-strip" id="thumbStrip">
    ${thumbs.map((src, i) => `<div class="c-thumb${i === 0 ? ' sel' : ''}" data-idx="${i}" style="background-image:url('${src}');background-size:cover;background-position:center;"></div>`).join('')}
  </div>
</div>

<div class="cr-outer">

  <!-- Condition report header -->
  <div class="cr-top-bar">
    <div class="cr-score-badge">
      <span class="cr-score-num">4.7</span>
    </div>
    <div class="cr-title-group">
      <div class="cr-title">Condition report</div>
      <div class="cr-autograde">
        <div class="cr-autograde-badge">AutoGrade</div>
        <span class="cr-autograde-about">About AutoGrade</span>
      </div>
    </div>
    <div class="cr-warnings-toggle">
      Show warnings only
      <div class="pill-toggle off" id="warningsToggle"></div>
    </div>
  </div>

  <!-- Optional equipment -->
  <div class="opt-equip-row">
    <div class="oe-val">Optional equipment value $4,745</div>
    <div class="oe-link">View window sticker &#8599;</div>
  </div>

  <!-- Photo gallery -->
  <div class="cr-section">
    <div class="cr-sec-header">
      <div class="cr-sec-title">Photo gallery</div>
    </div>
    <div class="photo-gallery-strip">
      ${thumbs.slice(0,4).map(src => `<div class="gal-thumb" style="background-image:url('${src}');background-size:cover;background-position:center;"></div>`).join('')}
      <div class="gal-thumb" style="background-image:url('${thumbs[4]}');background-size:cover;background-position:center;"><div class="gal-more">+15 more</div></div>
    </div>
  </div>

  <!-- Engine analysis / Audio Boost AI -->
  <div class="cr-section">
    <div class="cr-sec-header expandable">
      <div class="cr-plus-btn">+</div>
      <div class="cr-sec-title">Engine analysis</div>
    </div>
    <div class="cr-sec-body">
      <div class="audio-boost-header">
        <span style="font-size:12px;font-weight:600;color:#333;">Audio Boost AI</span>
        <span class="audio-boost-badge">AI-powered</span>
      </div>
      <div class="ai-ok-banner">Our AI-powered analysis of the engine audio suggests no engine issues.</div>
      <div class="wave-vehicle-row">
        <span class="wave-vehicle-lbl">2024 Hyundai Ioniq 5 Limited</span>
        <span class="wave-play-sample" id="compareSampleBtn">&#9654; Compare to normal</span>
      </div>
      <div class="wave-row">
        <button class="play-btn" id="playBtn">&#9654;</button>
        <div class="waveform-wrap">
          <div class="waveform" id="waveform">${makeWaveform()}</div>
        </div>
      </div>
      <div class="check-list">
        <div class="ci"><div class="ci-dot ok">&#10003;</div><div class="ci-lbl">Lower end engine noise</div></div>
        <div class="ci"><div class="ci-dot ok">&#10003;</div><div class="ci-lbl">Upper end engine noise</div></div>
        <div class="ci"><div class="ci-dot ok">&#10003;</div><div class="ci-lbl">Head gasket condition</div><div class="ci-chevron">&#9660;</div></div>
      </div>
    </div>
  </div>

  <!-- Mechanical -->
  <div class="cr-section">
    <div class="cr-sec-header">
      <div class="cr-sec-title">Mechanical</div>
    </div>
    <div class="cr-sec-body">
      <div class="pg">
        <div class="pg-t" style="background-image:url('photos/photo_01.jpg');background-size:cover;background-position:center;"></div>
        <div class="pg-t" style="background-image:url('photos/photo_02.jpg');background-size:cover;background-position:center;"></div>
        <div class="pg-t" style="background-image:url('photos/photo_03.jpg');background-size:cover;background-position:center;"></div>
      </div>
      <div class="check-list">
        <div class="ci"><div class="ci-dot ok">&#10003;</div><div class="ci-lbl">Vehicle operation</div></div>
        <div class="ci"><div class="ci-dot ok">&#10003;</div><div class="ci-lbl">Catalytic converter present</div></div>
        <div class="ci"><div class="ci-dot ok">&#10003;</div><div class="ci-lbl">Oil cap/dipstick</div></div>
        <div class="ci"><div class="ci-dot ok">&#10003;</div><div class="ci-lbl">Check engine light</div></div>
        <div class="ci"><div class="ci-dot ok">&#10003;</div><div class="ci-lbl">ABS light</div></div>
        <div class="ci"><div class="ci-dot ok">&#10003;</div><div class="ci-lbl">SRS/Airbag light</div></div>
        <div class="ci"><div class="ci-dot ok">&#10003;</div><div class="ci-lbl">Suspension alterations</div></div>
      </div>
      <div class="add-notes" style="margin-top:10px;">
        <div class="add-notes-header">&#9888; Additional notes</div>
        <div class="add-notes-sub">Details</div>
        <div class="add-notes-text">OBD connector pushed up inside dash</div>
      </div>
    </div>
  </div>

  <!-- OBD scan with Code Boost IQ -->
  <div class="cr-section">
    <div class="cr-sec-header">
      <div class="cr-sec-title">OBD2 decoder</div>
    </div>
    <div class="cr-sec-body">
      <div class="obd-ok-banner">
        <span>&#10003;</span> No trouble codes
      </div>
      <div class="obd-label">Readiness Monitors</div>
      <div class="rd-list">
        <div class="rd"><div class="rd-name">EGR System</div><div class="rd-ok">complete</div></div>
        <div class="rd"><div class="rd-name">Oxygen Sensor Heater</div><div class="rd-ok">complete</div></div>
        <div class="rd"><div class="rd-name">Oxygen Sensor</div><div class="rd-ok">complete</div></div>
        <div class="rd"><div class="rd-name">Evaporative System</div><div class="rd-ok">complete</div></div>
        <div class="rd"><div class="rd-name">Catalyst</div><div class="rd-ok">complete</div></div>
        <div class="rd"><div class="rd-name">Secondary Air System</div><div class="rd-warn">unavailable</div></div>
      </div>
    </div>
  </div>

  <!-- Exterior -->
  <div class="cr-section">
    <div class="cr-sec-header">
      <div class="cr-sec-title">Exterior</div>
    </div>
    <div class="cr-sec-body">
      <div class="pg">
        <div class="pg-t" style="background-image:url('photos/photo_01.jpg');background-size:cover;background-position:center;"></div>
        <div class="pg-t" style="background-image:url('photos/photo_02.jpg');background-size:cover;background-position:center;"></div>
        <div class="pg-t" style="background-image:url('photos/photo_03.jpg');background-size:cover;background-position:center;"></div>
        <div class="pg-t" style="background-image:url('photos/photo_01.jpg');background-size:cover;background-position:center;"><div class="pg-overlay">+2 more</div></div>
      </div>
      <div class="warn-banner"><span class="warn-tri">&#9888;</span> Exterior damage</div>
      <div class="dmg-grid">
        <div class="dmg-item">
          <div class="dmg-photo" style="background-image:url('photos/photo_01.jpg');background-size:cover;background-position:center;"></div>
          <div class="dmg-label">Front bumper</div>
          <div class="dmg-type">Other</div>
        </div>
        <div class="dmg-item">
          <div class="dmg-photo" style="background-image:url('photos/photo_02.jpg');background-size:cover;background-position:center;"></div>
          <div class="dmg-label">Hood</div>
          <div class="dmg-type">Scratch</div>
        </div>
        <div class="dmg-item">
          <div class="dmg-photo" style="background-image:url('photos/photo_03.jpg');background-size:cover;background-position:center;"></div>
          <div class="dmg-label">Passenger front fender</div>
          <div class="dmg-type">Scratch</div>
        </div>
        <div class="dmg-item">
          <div class="dmg-photo" style="background-image:url('photos/photo_01.jpg');background-size:cover;background-position:top;"></div>
          <div class="dmg-label">Rear bumper</div>
          <div class="dmg-type">Other</div>
        </div>
        <div class="dmg-item">
          <div class="dmg-photo" style="background-image:url('photos/photo_02.jpg');background-size:cover;background-position:bottom;"></div>
          <div class="dmg-label">Driver front fender</div>
          <div class="dmg-type">Scratch</div>
        </div>
      </div>
      <div class="check-list">
        <div class="ci"><div class="ci-dot ok">&#10003;</div><div class="ci-lbl">Windshield damage</div></div>
        <div class="ci"><div class="ci-dot ok">&#10003;</div><div class="ci-lbl">Rear glass damage</div></div>
      </div>
    </div>
  </div>

  <!-- Frame & underbody -->
  <div class="cr-section">
    <div class="cr-sec-header">
      <div class="cr-sec-title">Frame &amp; underbody</div>
    </div>
    <div class="cr-sec-body">
      <div class="pg">
        <div class="pg-t" style="background-image:url('photos/photo_01.jpg');background-size:cover;background-position:center;"></div>
        <div class="pg-t" style="background-image:url('photos/photo_02.jpg');background-size:cover;background-position:center;"></div>
        <div class="pg-t" style="background-image:url('photos/photo_03.jpg');background-size:cover;background-position:center;"></div>
        <div class="pg-t" style="background-image:url('photos/photo_01.jpg');background-size:cover;background-position:center;"></div>
      </div>
      <div class="check-list">
        <div class="ci"><div class="ci-dot ok">&#10003;</div><div class="ci-lbl">Frame damage</div></div>
      </div>
    </div>
  </div>

  <!-- Tires & wheels -->
  <div class="cr-section">
    <div class="cr-sec-header">
      <div class="cr-sec-title">Tires &amp; wheels</div>
    </div>
    <div class="cr-sec-body">
      <div class="pg">
        <div class="pg-t" style="background-image:url('photos/photo_02.jpg');background-size:cover;background-position:center;"></div>
        <div class="pg-t" style="background-image:url('photos/photo_03.jpg');background-size:cover;background-position:center;"></div>
        <div class="pg-t" style="background-image:url('photos/photo_01.jpg');background-size:cover;background-position:center;"></div>
        <div class="pg-t" style="background-image:url('photos/photo_02.jpg');background-size:cover;background-position:center;"><div class="pg-overlay">+6 more</div></div>
      </div>
      <div class="check-list">
        <div class="ci ci-stacked"><div class="ci-dot ok">&#10003;</div><div class="ci-lbl-group"><div class="ci-lbl">Driver front tire depth</div><div class="ci-sub">7/32&quot;</div></div></div>
        <div class="ci ci-stacked"><div class="ci-dot ok">&#10003;</div><div class="ci-lbl-group"><div class="ci-lbl">Passenger front tire depth</div><div class="ci-sub">7/32&quot;</div></div></div>
        <div class="ci ci-stacked"><div class="ci-dot ok">&#10003;</div><div class="ci-lbl-group"><div class="ci-lbl">Driver rear tire depth</div><div class="ci-sub">6/32&quot;</div></div></div>
        <div class="ci ci-stacked"><div class="ci-dot ok">&#10003;</div><div class="ci-lbl-group"><div class="ci-lbl">Passenger rear tire depth</div><div class="ci-sub">7/32&quot;</div></div></div>
        <div class="ci"><div class="ci-dot ok">&#10003;</div><div class="ci-lbl">Driver front wheel</div></div>
        <div class="ci"><div class="ci-dot ok">&#10003;</div><div class="ci-lbl">Passenger front wheel</div></div>
        <div class="ci"><div class="ci-dot ok">&#10003;</div><div class="ci-lbl">Driver rear wheel</div></div>
        <div class="ci"><div class="ci-dot ok">&#10003;</div><div class="ci-lbl">Passenger rear wheel</div></div>
      </div>
    </div>
  </div>

  <!-- Interior -->
  <div class="cr-section">
    <div class="cr-sec-header">
      <div class="cr-sec-title">Interior</div>
    </div>
    <div class="cr-sec-body">
      <div class="pg">
        <div class="pg-t" style="background-image:url('photos/photo_03.jpg');background-size:cover;background-position:center;"></div>
        <div class="pg-t" style="background-image:url('photos/photo_01.jpg');background-size:cover;background-position:center;"></div>
        <div class="pg-t" style="background-image:url('photos/photo_02.jpg');background-size:cover;background-position:center;"></div>
        <div class="pg-t" style="background-image:url('photos/photo_03.jpg');background-size:cover;background-position:center;"><div class="pg-overlay">+1 more</div></div>
      </div>
      <div class="check-list">
        <div class="ci"><div class="ci-dot ok">&#10003;</div><div class="ci-lbl">Interior damage</div></div>
        <div class="ci"><div class="ci-dot ok">&#10003;</div><div class="ci-lbl">Vehicle odor</div></div>
        <div class="ci"><div class="ci-dot ok">&#10003;</div><div class="ci-lbl">Air conditioning operation</div></div>
        <div class="ci"><div class="ci-dot ok">&#10003;</div><div class="ci-lbl">Heater operation</div></div>
      </div>
    </div>
  </div>

  <!-- Major power options -->
  <div class="cr-section">
    <div class="cr-sec-header">
      <div class="cr-sec-title">Major power options</div>
    </div>
    <div class="cr-sec-body">
      <div class="check-list">
        <div class="ci"><div class="ci-dot ok">&#10003;</div><div class="ci-lbl">Power windows operation</div></div>
        <div class="ci"><div class="ci-dot ok">&#10003;</div><div class="ci-lbl">Power locks operation</div></div>
        <div class="ci"><div class="ci-dot ok">&#10003;</div><div class="ci-lbl">Backup camera operation</div></div>
        <div class="ci"><div class="ci-dot ok">&#10003;</div><div class="ci-lbl">Power sunroof operation</div></div>
      </div>
    </div>
  </div>

  <!-- Test drive -->
  <div class="cr-section">
    <div class="cr-sec-header">
      <div class="cr-sec-title">Test drive</div>
    </div>
    <div class="cr-sec-body">
      <div class="check-list">
        <div class="ci"><div class="ci-dot ok">&#10003;</div><div class="ci-lbl">Automatic transmission operation</div></div>
        <div class="ci"><div class="ci-dot ok">&#10003;</div><div class="ci-lbl">Transfer case operation</div></div>
        <div class="ci"><div class="ci-dot ok">&#10003;</div><div class="ci-lbl">Differential operation</div></div>
        <div class="ci"><div class="ci-dot ok">&#10003;</div><div class="ci-lbl">Brakes operation</div></div>
        <div class="ci"><div class="ci-dot ok">&#10003;</div><div class="ci-lbl">Suspension operation</div></div>
      </div>
      <div class="add-notes" style="margin-top:10px;">
        <div class="add-notes-header">&#9888; Additional notes</div>
        <div class="add-notes-sub">Details</div>
        <div class="add-notes-text">Test drive up to 26 mph and reached 3rd gear</div>
      </div>
    </div>
  </div>

  <!-- As Described Guarantee -->
  <div class="adg-section">
    <div class="adg-header">
      <div class="adg-icon">&#10003;</div>
      <div>
        <div class="adg-title">As Described Guarantee</div>
        <div class="adg-subtitle">94% of vehicles have some type of coverage</div>
      </div>
    </div>
    <div class="adg-coverage">
      <div class="adg-coverage-title">Coverage includes (vehicle under $6,000)</div>
      <div class="adg-coverage-item"><span class="adg-coverage-dot">&#10003;</span> Engine noise &amp; head gasket leaks</div>
      <div class="adg-coverage-item"><span class="adg-coverage-dot">&#10003;</span> Transmission issues</div>
      <div class="adg-coverage-item"><span class="adg-coverage-dot">&#10003;</span> Transfer case &amp; differential problems</div>
    </div>
    <div class="adg-tiers">
      <div class="adg-tier selected">
        <div class="adg-tier-name">Standard</div>
        <div class="adg-tier-days">7 days from purchase</div>
        <div class="adg-tier-price">$145</div>
      </div>
      <div class="adg-tier">
        <div class="adg-tier-name">Extended</div>
        <div class="adg-tier-days">14 days from purchase</div>
        <div class="adg-tier-price">$220</div>
      </div>
    </div>
    <div class="adg-note">$300 deductible per arbitration claim. Selections apply to future bids on this vehicle.</div>
  </div>

  <!-- Inspector footer -->
  <div class="inspector-footer">
    <div>
      <strong>Inspected by:</strong> Fernando Espinoza &nbsp;&nbsp;
      <strong>Inspected on:</strong> 16 Apr 18:14
    </div>
    <div class="click-ins-logo">
      AI photos powered by
      <span class="ci-mark">Click-Ins</span>
    </div>
  </div>

</div>
`;

// ===== RIGHT SIDEBAR =====
document.getElementById('rightSidebar').innerHTML = `

  <!-- Vehicle title -->
  <div class="sb">
    <div class="sb-title-row">
      <div class="sb-title">2024 Hyundai Ioniq 5 Limited</div>
      <span class="sb-chevron">&#9660;</span>
    </div>
    <div class="sb-vin-row">
      <span class="sb-miles">7,757 miles</span>
      <span class="sb-sep">|</span>
      <span class="sb-vin">VIN KM8KRADE3NU266172</span>
      <span class="sb-ico" title="Copy">&#10697;</span>
      <span class="sb-ico" title="Photos">&#128247;</span>
    </div>
    <div class="sb-meta">
      <div class="sb-row">
        <span class="ico ico-gray">&#128197;</span>
        Published on Apr 24 at 9:53 am
      </div>
      <div class="sb-row">
        <span class="ico ico-warn">&#9888;</span>
        Expires today at 3:00 pm
      </div>
      <div class="sb-row">
        <span class="ico ico-blue">&#8226;</span>
        3 interested
      </div>
      <div class="sb-row">
        <span class="ico" style="color:#f59e0b;">&#9888;</span>
        Buyer has title to send
      </div>
      <div class="sb-row">
        <span class="ico ico-ok">&#10003;</span>
        Buyback Guarantee Included
      </div>
      <div class="sb-row">
        <span class="ico ico-ok">&#9679;</span>
        Starting @ floor
      </div>
    </div>

    <div class="pills">
      <div class="pill">RWD</div>
      <div class="pill">Automatic</div>
      <div class="pill">Electric</div>
      <div class="pill">77.4 kWh Elect</div>
    </div>

    <div class="feat-list">
      <div class="feat-row"><span class="feat-dot">&#8226;</span> 1 key</div>
      <div class="feat-row"><span class="feat-dot">&#8226;</span> Navigation</div>
      <div class="feat-row"><span class="feat-dot">&#8226;</span> Power seats</div>
      <div class="feat-row"><span class="feat-dot">&#8226;</span> Leather</div>
    </div>
  </div>

  <!-- Black Book -->
  <div class="sb">
    <div class="bb-card">
      <div class="bb-logo">BLACK<br>BOOK</div>
      <div class="bb-range">
        <div class="bb-col">
          <span class="bb-lbl">Rough value</span>
          <span class="bb-val">$25,714</span>
        </div>
        <div class="bb-dash">&mdash;</div>
        <div class="bb-col">
          <span class="bb-lbl">Average value</span>
          <span class="bb-val">$33,540</span>
        </div>
      </div>
    </div>
  </div>

  <!-- OPENLANE Predictive Pricing -->
  <div class="sb">
    <div class="pp-header">
      <span class="pp-star">&#10022;</span>
      <span class="pp-title">OPENLANE Predictive Pricing</span>
      <span class="pp-beta">beta</span>
      <button class="pp-forecast-btn" id="viewForecastBtn">View forecast</button>
    </div>
    <div class="pp-current-row">
      <span class="pp-current-label">Current</span>
      <span class="pp-current-val">$29,665</span>
    </div>
    <div class="pp-bar-wrap">
      <div class="pp-bar">
        <div class="pp-marker" style="left:48.6%"></div>
      </div>
      <div class="pp-range-labels">
        <div class="pp-range-low"><div class="pp-range-word">Low</div><div class="pp-range-num">$27,928</div></div>
        <div class="pp-range-high"><div class="pp-range-word">High</div><div class="pp-range-num">$31,504</div></div>
      </div>
    </div>
  </div>

  <!-- AutoCheck -->
  <div class="sb">
    <div class="ac-hd">
      <div class="ac-logo">
        <svg width="60" height="22" viewBox="0 0 120 40" fill="none">
          <path d="M18 6C10 6 4 12 4 20s6 14 14 14 14-6 14-14S26 6 18 6z" fill="#003087"/>
          <path d="M10 20l6 6 10-12" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
          <text x="36" y="26" font-family="Arial" font-weight="700" font-size="16" fill="#003087">AutoCheck</text>
          <text x="36" y="36" font-family="Arial" font-size="9" fill="#999">a part of Experian</text>
        </svg>
      </div>
      <a class="ac-report-lnk" id="viewFullReport">View full report</a>
    </div>
    <div class="ac-counts">
      <div class="ac-count"><strong>0</strong> Owner(s)</div>
      <div class="ac-count"><strong>0</strong> Accident(s)</div>
    </div>
    <div class="ac-checks">
      <div class="ac-chk"><span class="ok">&#10003;</span> Title/Problems</div>
      <div class="ac-chk"><span class="ok">&#10003;</span> Odometer</div>
      <div class="ac-chk"><span class="warn">&#9888;</span> Use/Events</div>
    </div>
  </div>

  <!-- Transport -->
  <div class="sb">
    <div class="transport-row">
      <div class="transport-icon">&#128663;</div>
      <div class="transport-body">
        <div class="transport-label">Transport to</div>
        <div class="transport-addr">1234 Test Dr, Overland Park, KS</div>
        <div class="transport-miles">1,582 miles</div>
        <div class="transport-delivery">Est. delivery 3-5 days</div>
      </div>
      <div class="transport-price">$1,090</div>
    </div>
  </div>

  <!-- Dealer -->
  <div class="sb">
    <div class="dealer-hd">
      <div class="dealer-logo">HMF</div>
      <div class="dealer-info">
        <div class="dealer-name">Hyundai Motor Finance</div>
        <div class="dealer-loc">&#128205; Houston, TX</div>
      </div>
    </div>
    <button class="follow-btn">Follow +</button>
  </div>
`;
