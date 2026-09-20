(async () => {
  let lastCount = 0;
  let unchanged = 0;

  // Load more listings by scrolling
  while (unchanged < 3) {
    window.scrollTo(0, document.body.scrollHeight);

    await new Promise(resolve => setTimeout(resolve, 1500));

    const count = document.querySelectorAll(
      'article[data-cy^="listing-"]'
    ).length;

    console.log(`Listings loaded: ${count}`);

    if (count === lastCount) {
      unchanged++;
    } else {
      unchanged = 0;
      lastCount = count;
    }
  }

  const listingCards = document.querySelectorAll(
    'article[data-cy^="listing-"]'
  );

  // Building type from the current search category
  const buildingType =
    document.querySelector('[data-cy="search-category"]')
      ?.textContent.trim() || 'N/A';

  listingCards.forEach((card, index) => {

    // TITLE
    const titleEl = card.querySelector('h2');
    const title = titleEl
      ? titleEl.textContent.trim()
      : 'N/A';

    // PRICE
    const priceEl = card.querySelector('[data-cy="listing-price"]');
    const price = priceEl
      ? priceEl.textContent.trim()
      : 'N/A';

    // BEDROOMS
    const bedroomEl = card.querySelector(
      '[data-cy="card-bedroom_count"]'
    );
    const bedrooms = bedroomEl
      ? bedroomEl.textContent.trim()
      : 'N/A';

    // USABLE SURFACE
    const mpEl = card.querySelector(
      '[data-cy="card-usable_surface"]'
    );
    const mp = mpEl
      ? mpEl.textContent.trim()
      : 'N/A';

    // FLOOR NUMBER
    const floorEl = card.querySelector(
      '[data-cy="card-floor_number"]'
    );
    const floor = floorEl
      ? floorEl.textContent.trim()
      : 'N/A';

    // OUTPUT
    console.log(`🏠 Listing ${index + 1}`);
    console.log(`   Title          : ${title}`);
    console.log(`   Price          : ${price}`);
    console.log(`   Bedroom Count  : ${bedrooms}`);
    console.log(`   Building Type  : ${buildingType}`);
    console.log(`   Floor Number   : ${floor}`);
    console.log(`   Usable Surface : ${mp}`);
    console.log('---');
  });
})();