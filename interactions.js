// ── Carousel ──────────────────────────────────────────────────────────────────
(function() {
  const photos = [
    'photos/photo_01.jpg',
    'photos/insp_01.jpg',
    'photos/insp_02.jpg',
    'photos/insp_03.jpg',
    'photos/photo_02.jpg',
    'photos/photo_03.jpg',
  ];
  let current = 0;

  function showPhoto(idx) {
    current = (idx + photos.length) % photos.length;
    const img = document.getElementById('carouselPhoto');
    if (img) img.src = photos[current];
    const counter = document.getElementById('carouselCounter');
    if (counter) counter.textContent = `${current + 1} / 22`;
    document.querySelectorAll('.c-thumb').forEach((t, i) => {
      t.classList.toggle('sel', i === current);
    });
  }

  document.addEventListener('click', function(e) {
    if (e.target.closest('#carouselPrev')) showPhoto(current - 1);
    if (e.target.closest('#carouselNext')) showPhoto(current + 1);
    const thumb = e.target.closest('.c-thumb');
    if (thumb) {
      const idx = Number.parseInt(thumb.dataset.idx, 10);
      if (!Number.isNaN(idx) && idx < photos.length) showPhoto(idx);
    }
  });
})();

// ── Visual Boost AI toggle — Removed (Audit Refinement) ───────────────────────

// ── Show warnings only toggle ─────────────────────────────────────────────────
(function() {
  let active = false;
  document.addEventListener('click', function(e) {
    if (!e.target.closest('#warningsToggle')) return;
    active = !active;
    const pill = document.getElementById('warningsToggle');
    if (pill) pill.classList.toggle('off', !active);
    document.querySelectorAll('.ci').forEach(function(row) {
      const dot = row.querySelector('.ci-dot');
      if (!dot) return;
      const isOk = dot.classList.contains('ok');
      row.style.display = (active && isOk) ? 'none' : '';
    });
  });
})();

// ── Waveform play animation ───────────────────────────────────────────────────
(function() {
  let playing = false;
  let frame = 0;
  let raf = null;

  function tick() {
    const bars = document.querySelectorAll('#waveform .wb');
    bars.forEach(function(b, i) {
      b.classList.toggle('p', i <= frame);
    });
    frame++;
    if (frame < bars.length) {
      raf = setTimeout(tick, 30);
    } else {
      playing = false;
      frame = 0;
      const btn = document.getElementById('playBtn');
      if (btn) btn.textContent = '▶';
    }
  }

  document.addEventListener('click', function(e) {
    if (!e.target.closest('#playBtn')) return;
    if (playing) {
      clearTimeout(raf);
      playing = false;
      frame = 0;
      e.target.textContent = '▶';
      document.querySelectorAll('#waveform .wb').forEach(function(b, i) {
        b.classList.toggle('p', i < 18);
      });
      return;
    }
    playing = true;
    e.target.textContent = '■';
    frame = 0;
    document.querySelectorAll('#waveform .wb').forEach(b => b.classList.remove('p'));
    tick();
  });
})();

// ── Bid modal ─────────────────────────────────────────────────────────────────
function openBidModal() {
  document.getElementById('bidModal').style.display = 'flex';
}
function closeBidModal() {
  document.getElementById('bidModal').style.display = 'none';
}

document.addEventListener('click', function(e) {
  if (e.target.closest('#bidBtn')) openBidModal();
  if (e.target.id === 'bidModal') closeBidModal();
});

document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    closeBidModal();
    closeMarketModal();
    closeNoteModal();
  }
});

// ── Market data modal ─────────────────────────────────────────────────────────
function openMarketModal() {
  document.getElementById('marketModal').style.display = 'flex';
}
function closeMarketModal() {
  document.getElementById('marketModal').style.display = 'none';
}

document.addEventListener('click', function(e) {
  if (e.target.closest('#viewForecastBtn')) {
    e.preventDefault();
    openMarketModal();
  }
  if (e.target.id === 'marketModal') closeMarketModal();
});

// ── Note modal ────────────────────────────────────────────────────────────────
function openNoteModal() {
  document.getElementById('noteModal').style.display = 'flex';
}
function closeNoteModal() {
  document.getElementById('noteModal').style.display = 'none';
}

document.addEventListener('click', function(e) {
  if (e.target.closest('#notesBtn')) openNoteModal();
  if (e.target.id === 'noteModal') closeNoteModal();
});

// ── Nav countdown timer ───────────────────────────────────────────────────────
(function() {
  let total = 2 * 3600 + 49 * 60 + 17;
  const el = document.getElementById('navTimer');
  if (!el) return;

  function pad(n) { return String(n).padStart(2, '0'); }

  function tick() {
    if (total <= 0) { el.textContent = 'Auction ended'; return; }
    total--;
    const h = Math.floor(total / 3600);
    const m = Math.floor((total % 3600) / 60);
    const s = total % 60;
    el.textContent = `Ends in ${pad(h)}:${pad(m)}:${pad(s)}`;
    setTimeout(tick, 1000);
  }
  setTimeout(tick, 1000);
})();
