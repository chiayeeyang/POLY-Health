function sleepArticle() {
  const foods = ['Sweet potato', 'Barley grass juice', 'Walnuts', 'Tart cherry juice', 'Fatty fish', 'Kiwi fruit', 'Almonds', 'Chamomile tea', 'Turkey'];
  return `
    <section class="sleep-hero">
      <img class="sleep-hero-art" src="${A('313-1605','img611')}" alt="Poly tucked into bed with a blue sleeping cap" fetchpriority="high">
      <a class="sleep-back" href="/insights/" aria-label="Back to Insights">${im('313-1605','imgIcons8Back1')}</a>
      <h1>9 Foods &amp; Better Sleep</h1>
      <button class="sleep-save" data-save="insight-0" aria-label="Save this sleep article" aria-pressed="false">${im('313-1605','imgVector')}</button>
    </section>
    <article class="narrow article sleep-article">
      <h2 class="center">Why is Sleep Important?</h2>
      <p>Rest is part of caring for yourself. Your evening routine can make room for winding down, eating comfortably, and getting ready for bed.</p>
      <h3>Build a restful routine</h3>
      <p>A few habits recommended by the National Heart, Lung, and Blood Institute:</p>
      <ul>
        <li>Keep a consistent bedtime and wake-up time.</li>
        <li>Allow some quiet time before bed, away from bright screens.</li>
        <li>Avoid large meals and alcohol close to bedtime.</li>
        <li>Be mindful of caffeine later in the day; its effects can last for hours.</li>
        <li>Keep your bedroom cool, dark, and quiet.</li>
      </ul>
      <p class="source">Source: <a href="https://www.nhlbi.nih.gov/health/sleep-deprivation/healthy-sleep-habits" target="_blank" rel="noopener">NHLBI — Healthy Sleep Habits</a>.</p>
      <figure class="sleep-foods">
        ${im('313-1605','imgRectangle831','Nine illustrated foods: sweet potato, barley grass juice, walnuts, tart cherry juice, fatty fish, kiwi, almonds, chamomile tea, and turkey')}
        <figcaption><span>THE POLY HEALTH FOOD COLLECTION</span><h2>Food inspiration</h2></figcaption>
        <ol>${foods.map((food,i)=>`<li style="--col:${i%3};--row:${Math.floor(i/3)}"><span class="food-number">${i+1}</span><span class="food-name">${food}</span></li>`).join('')}</ol>
      </figure>
      <h3>Enjoy food without a sleep promise</h3>
      <p>These nine foods appear in the Poly Health collection. Think of them as meal inspiration, rather than a treatment plan for insomnia or a guarantee of stable blood sugar.</p>
      <p>If you enjoy an evening snack, choose something that suits your appetite and dietary needs. You do not need to add all of these foods—or buy supplements—to build a relaxing routine.</p>
      <h3>When to ask for support</h3>
      <p>If sleep problems persist, talk with a healthcare professional. Food choices alone may not address the cause.</p>
      <div class="sleep-feedback"><p>Was this helpful?</p><div role="group" aria-label="Article feedback">
        <button data-helpful="no" aria-label="Not helpful" aria-pressed="false">${im('313-1605','imgIcons8ThumbsDown')}</button>
        <button data-helpful="yes" aria-label="Helpful" aria-pressed="false">${im('313-1605','imgIcons8ThumbsUp')}</button>
      </div><p class="small" id="feedback-status" role="status">Feedback is kept for this visit only.</p></div>
    </article>
    <section class="wrap section"><div class="section-head"><h2>You May Also Like…</h2>${link('/insights/','See All')}</div><div class="grid">${insightCards().slice(1).join('')}<article class="card">${im('7-5','img571','Poly with a pencil')}<h3>What is PCOS?</h3><p>Explore the overview and common questions.</p>${button('/what-is-pcos/','Read More')}</article></div></section>`;
}

function wireMoreDesigns() {
  document.querySelectorAll('[data-menu-pending]').forEach(button => {
    button.addEventListener('click', () => notice(button.dataset.menuPending, 'This section is coming soon. Explore the dietary advice and recipes already available.'));
  });
  document.querySelectorAll('.nav details').forEach(menu => {
    menu.addEventListener('toggle', () => {
      if (menu.open) document.querySelectorAll('.nav details').forEach(other => { if (other !== menu) other.open = false; });
    });
  });
  document.querySelector('.nav').addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      const menu = event.target.closest('details');
      if (menu) { menu.open = false; menu.querySelector('summary').focus(); }
    }
  });
  document.querySelectorAll('[data-helpful]').forEach(button => {
    button.addEventListener('click', () => {
      document.querySelectorAll('[data-helpful]').forEach(other => other.setAttribute('aria-pressed', other === button));
      document.querySelector('#feedback-status').textContent = 'Thanks—your feedback is selected for this visit.';
    });
  });
}
