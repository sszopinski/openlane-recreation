// Waveform heights — anomaly positions at bars ~5, 25, 33 (approx 0:00, 0:19, 0:26)
function makeWaveform() {
  const h = [10,14,20,16,10,28,32,24,18,14,20,26,30,28,22,18,24,30,34,32,26,22,18,14,18,36,32,28,24,22,18,14,24,36,30,24,18,14,10,12,16,20,24,22,18,14,10,8,10,14,18,22,20,16,12,8,6,8,10,12,10,8];
  const anomaly = new Set([5,25,33]);
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
      <span style="font-size:11px;font-weight:600;color:#333;">Visual Boost AI</span>
      <div class="vb-info">?</div>
      <div class="pill-toggle" id="vbPill"></div>
    </div>

    <div class="vb-label" id="vbLabel">Visual Boost AI: ON</div>

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
      <span class="cr-score-star">&#9733;</span>
      <span class="cr-score-num">2.5</span>
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
    <div class="oe-val">Optional equipment value $3,190</div>
    <div class="oe-link">View window sticker &#8599;</div>
  </div>

  <!-- Photo gallery -->
  <div class="cr-section">
    <div class="cr-sec-header">
      <div class="cr-plus-btn">+</div>
      <div class="cr-sec-title">Photo gallery</div>
    </div>
    <div class="photo-gallery-strip">
      ${thumbs.slice(0,4).map(src => `<div class="gal-thumb" style="background-image:url('${src}');background-size:cover;background-position:center;"></div>`).join('')}
      <div class="gal-thumb" style="background-image:url('${thumbs[4]}');background-size:cover;background-position:center;"><div class="gal-more">+15 more</div></div>
    </div>
  </div>

  <!-- Engine analysis / Audio Boost AI -->
  <div class="cr-section">
    <div class="cr-sec-header">
      <div class="cr-plus-btn">+</div>
      <div class="cr-sec-title">Engine analysis</div>
    </div>
    <div class="cr-sec-body">
      <div class="audio-boost-header">
        <span style="font-size:12px;font-weight:600;color:#333;">Audio Boost AI</span>
        <span class="audio-boost-badge">AI-powered</span>
      </div>
      <div class="wave-vehicle-row">
        <span class="wave-vehicle-lbl">2015 Jeep Grand Cherokee Limited</span>
        <span class="wave-play-sample">&#9654; Play sample</span>
      </div>
      <div class="wave-row">
        <button class="play-btn" id="playBtn">&#9654;</button>
        <div class="waveform-wrap">
          <div class="waveform" id="waveform">${makeWaveform()}</div>
        </div>
      </div>
      <div class="anomaly-markers">
        <div class="anomaly-marker"><div class="anomaly-dot"></div>Anomaly detected 0:00</div>
        <div class="anomaly-marker"><div class="anomaly-dot"></div>Anomaly detected 0:19</div>
        <div class="anomaly-marker"><div class="anomaly-dot"></div>Anomaly detected 0:26</div>
      </div>
      <div class="check-list">
        <div class="ci"><div class="ci-dot warn">&#9888;</div><div class="ci-lbl">Upper end engine noise</div><div class="ci-val" style="color:#e65100;font-size:11px;">Engine noise present</div></div>
        <div class="ci"><div class="ci-dot ok">&#10003;</div><div class="ci-lbl">Lower end engine noise</div><div class="ci-val" style="color:#15803d;font-size:11px;">As Described</div></div>
        <div class="ci"><div class="ci-dot ok">&#10003;</div><div class="ci-lbl">Head gasket condition</div><div class="ci-chevron">&#9660;</div></div>
      </div>
    </div>
  </div>

  <!-- Mechanical -->
  <div class="cr-section">
    <div class="cr-sec-header">
      <div class="cr-plus-btn">+</div>
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
      <div class="cr-plus-btn">+</div>
      <div class="cr-sec-title">OBD scan with Code Boost IQ</div>
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
      <div class="cr-plus-btn">+</div>
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
          <div class="dmg-photo"></div>
          <div class="dmg-label">Front bumper</div>
          <div class="dmg-type">Other</div>
        </div>
        <div class="dmg-item">
          <div class="dmg-photo"></div>
          <div class="dmg-label">Hood</div>
          <div class="dmg-type">Scratch</div>
        </div>
        <div class="dmg-item">
          <div class="dmg-photo"></div>
          <div class="dmg-label">Passenger front fender</div>
          <div class="dmg-type">Scratch</div>
        </div>
        <div class="dmg-item">
          <div class="dmg-photo"></div>
          <div class="dmg-label">Rear bumper</div>
          <div class="dmg-type">Other</div>
        </div>
        <div class="dmg-item">
          <div class="dmg-photo"></div>
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
      <div class="cr-plus-btn">+</div>
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
      <div class="cr-plus-btn">+</div>
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
        <div class="ci"><div class="ci-dot ok">&#10003;</div><div class="ci-lbl">Driver front tire depth</div><div class="ci-val">7/32&quot;</div></div>
        <div class="ci"><div class="ci-dot ok">&#10003;</div><div class="ci-lbl">Passenger front tire depth</div><div class="ci-val">7/32&quot;</div></div>
        <div class="ci"><div class="ci-dot ok">&#10003;</div><div class="ci-lbl">Driver rear tire depth</div><div class="ci-val">6/32&quot;</div></div>
        <div class="ci"><div class="ci-dot ok">&#10003;</div><div class="ci-lbl">Passenger rear tire depth</div><div class="ci-val">7/32&quot;</div></div>
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
      <div class="cr-plus-btn">+</div>
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
      <div class="cr-plus-btn">+</div>
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
      <div class="cr-plus-btn">+</div>
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
      <div class="sb-title">2015 Jeep Grand Cherokee Limited</div>
      <span class="sb-chevron">&#9660;</span>
    </div>
    <div class="sb-vin-row">
      <span class="sb-miles">116,750 miles</span>
      <span class="sb-sep">|</span>
      <span class="sb-vin">VIN 1C4RJEBG4FC753482</span>
      <span class="sb-ico" title="Copy">&#10697;</span>
      <span class="sb-ico" title="Photos">&#128247;</span>
    </div>
    <div class="sb-meta">
      <div class="sb-row">
        <span class="ico ico-gray">&#128197;</span>
        Published on Apr 23 at 7:11 pm
      </div>
      <div class="sb-row">
        <span class="ico ico-warn">&#9888;</span>
        Expires on Apr 25 at 9:59 pm
      </div>
      <div class="sb-row">
        <span class="ico ico-blue">&#8226;</span>
        2 interested
      </div>
      <div class="sb-row">
        <span class="ico ico-ok">&#10003;</span>
        As Described Guarantee available
      </div>
    </div>

    <div class="pills">
      <div class="pill">4WD</div>
      <div class="pill">Automatic</div>
      <div class="pill">Gas</div>
      <div class="pill">3.6L V6</div>
    </div>

    <div class="feat-list">
      <div class="feat-row">
        <span class="feat-dot">&#8226;</span>
        <span class="feat-lnk">Window Sticker</span>
        <span class="feat-ext">&#8599;</span>
      </div>
      <div class="feat-row">
        <span class="feat-dot">&#8226;</span> Backup camera
      </div>
      <div class="feat-row">
        <span class="feat-dot">&#8226;</span> Heated/Ventilated seats
      </div>
      <div class="feat-row">
        <span class="feat-dot">&#8226;</span> Navigation system
      </div>
      <div class="feat-row">
        <span class="feat-dot">&#8226;</span> Power sunroof
      </div>
    </div>
  </div>

  <!-- Black Book -->
  <div class="sb">
    <div class="bb-card">
      <div class="bb-logo">BLACK<br>BOOK</div>
      <div class="bb-range">
        <div class="bb-col">
          <span class="bb-lbl">Rough value</span>
          <span class="bb-val">$7,025</span>
        </div>
        <div class="bb-dash">&mdash;</div>
        <div class="bb-col">
          <span class="bb-lbl">Average value</span>
          <span class="bb-val">$8,650</span>
        </div>
      </div>
    </div>
  </div>

  <!-- OPENLANE Market Data -->
  <div class="sb">
    <div class="omd-header">
      <span class="omd-badge">OL</span>
      <span class="omd-title">OPENLANE Market Data</span>
      <span class="omd-info">&#9432;</span>
      <a class="omd-report" id="viewMarketReport">View full report &#8599;</a>
    </div>
    <p style="font-size:11px;color:#888;margin-bottom:10px;">Based on 8,206 dealer wholesale sales in the last 3 months</p>
    <div class="omd-grid">
      <div class="omd-col low">
        <div class="omd-col-label">Lowest</div>
        <div class="omd-col-val">$4,500</div>
      </div>
      <div class="omd-col avg">
        <div class="omd-col-label">Average</div>
        <div class="omd-col-val">$8,560</div>
      </div>
      <div class="omd-col high">
        <div class="omd-col-label">Highest</div>
        <div class="omd-col-val">$10,700</div>
      </div>
    </div>
    <div class="omd-similar">
      <span class="omd-car-icon">&#128663;</span>
      3 similar units recently sold on OPENLANE
    </div>
  </div>

  <!-- AutoCheck -->
  <div class="sb">
    <div class="ac-hd">
      <div class="ac-logo-box">A</div>
      <div class="ac-text">
        <div class="ac-name">AutoCheck</div>
        <div class="ac-exp">a part of Experian</div>
      </div>
      <a class="ac-report-lnk" id="viewFullReport">View full report</a>
    </div>
    <div class="ac-counts">
      <div class="ac-count"><strong>3</strong> Owner(s)</div>
      <div class="ac-count"><strong>2</strong> Accident(s)</div>
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
      <div class="dealer-logo">HB<br>CHRYS<br>JEEP</div>
      <div class="dealer-info">
        <div class="dealer-name">Huntington Beach Chrysler Jeep Ram</div>
        <div class="dealer-loc">&#128205; Huntington Beach, CA</div>
      </div>
    </div>
    <div class="dealer-stats">
      <div class="d-stat">&#128202; 38%</div>
      <div class="d-stat">&#128203; 11.0 days</div>
      <div class="d-stat">&#128336; 2 days</div>
    </div>
    <div class="oi-line">
      <span class="oi-powered">powered by</span>
      <span class="oi-box">OI</span>
      <span class="oi-name">OPENLANE Intelligence</span>
    </div>
    <div class="dealer-desc">
      OPENLANE Intelligence uses AI-driven technology to enhance our condition reports with more accurate, consistent and reliable vehicle data. AI powers exterior damage detection, OBD scanning, engine audio analysis, and market data models.
    </div>
  </div>
`;
