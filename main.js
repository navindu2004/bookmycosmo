import Framework7 from '../bookmycosmo_TheBackbenchers_2.0/node_modules/framework7/components/accordion';

// Initialize Framework7
const app = new Framework7();

// Wait for DOM to be ready
document.addEventListener('DOMContentLoaded', () => {
  // Create an accordion
  const accordionHTML = `
    <div class="list accordion-list">
      <ul>
        <li class="accordion-item">
          <a href="#" class="item-content item-link">
            <div class="item-inner">
              <div class="item-title">Accordion Item 1</div>
            </div>
          </a>
          <div class="accordion-item-content">
            <div class="block">
              <p>Content of Accordion Item 1</p>
            </div>
          </div>
        </li>
        <li class="accordion-item">
          <a href="#" class="item-content item-link">
            <div class="item-inner">
              <div class="item-title">Accordion Item 2</div>
            </div>
          </a>
          <div class="accordion-item-content">
            <div class="block">
              <p>Content of Accordion Item 2</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  `;

  // Append the accordion to the app's main view
  const appView = app.views.create('.view-main');
  appView.router.navigate('/'); // Navigating to an empty page
  appView.router.navigate('/', { content: accordionHTML });
});
