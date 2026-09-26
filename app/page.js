const cuisines = [
  'North Indian',
  'Chinese',
  'South Indian',
  'Fast Food',
  'Veg Delights',
  'Non-Veg Specials',
  'Desserts',
  'Beverages',
];

const signatureDishes = [
  {
    title: 'Paneer Tikka',
    description: 'Perfectly grilled and charred with a smoky, spiced finish.',
    image:
      'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Butter Chicken',
    description: 'Rich, creamy, and deeply flavorful with a classic home-style feel.',
    image:
      'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Veg Biryani',
    description: 'Fragrant rice layered with spices, vegetables, and comforting flavors.',
    image:
      'https://images.unsplash.com/photo-1654922207993-2952fec328ae?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Chicken Noodles',
    description: 'Wok-tossed noodles packed with bold, savory taste.',
    image:
      'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Masala Dosa',
    description: 'Crisp, golden, and satisfying with the perfect dosa texture.',
    image:
      'https://images.unsplash.com/photo-1625944230945-1b7d7d0d6f4b?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Gulab Jamun',
    description: 'A sweet ending with warm, syrupy richness and classic taste.',
    image:
      'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=900&q=80',
  },
];

const highlights = [
  {
    title: 'Wide variety',
    text: 'From classic comfort food to multi-cuisine favorites, there is always something for everyone.',
  },
  {
    title: 'Warm hospitality',
    text: 'A welcoming atmosphere for family meals, friendly gatherings, and special moments.',
  },
  {
    title: 'Fresh ingredients',
    text: 'Quality food prepared with care, flavor, and consistency in every bite.',
  },
];

const menuSample = [
  { name: 'Veg Manchurian', category: 'Chinese', price: '₹179' },
  { name: 'Paneer Butter Masala', category: 'North Indian', price: '₹249' },
  { name: 'Chicken Curry', category: 'Non-Veg', price: '₹289' },
  { name: 'Veg Biryani', category: 'Rice & Biryani', price: '₹219' },
  { name: 'Masala Dosa', category: 'South Indian', price: '₹119' },
  { name: 'Burger & Fries', category: 'Fast Food', price: '₹169' },
  { name: 'Cold Coffee', category: 'Beverages', price: '₹109' },
  { name: 'Gulab Jamun', category: 'Desserts', price: '₹89' },
];

const gallery = [
  'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=900&q=80',
];

const testimonials = [
  {
    quote:
      'The food is delicious and the ambiance is perfect for family dinners. One of the best places in Dhuri.',
    author: 'Aman S.',
  },
  {
    quote:
      'Great variety, excellent taste, and very friendly service. We loved the Chinese and North Indian options.',
    author: 'Ritika K.',
  },
  {
    quote:
      'A vibrant place with a warm atmosphere and flavors that keep you coming back for more.',
    author: 'Harpreet G.',
  },
];

export default function Home() {
  return (
    <main className="page-shell">
      <header className="site-header">
        <nav className="nav container">
          <div className="brand">SWAN BIRDZ</div>
          <div className="nav-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#menu">Menu</a>
            <a href="#gallery">Gallery</a>
            <a href="#contact">Contact</a>
          </div>
          <button className="primary-button">Book Table</button>
        </nav>
      </header>

      <section id="home" className="hero container">
        <div className="hero-copy">
          <p className="eyebrow">Dhuri’s favorite dining destination</p>
          <h1>Fresh flavors. Family moments. Memorable dining.</h1>
          <p>
            Experience a wide variety of cuisines, signature dishes, and warm hospitality at
            Swan Birdz.
          </p>
          <div className="hero-actions">
            <button className="primary-button">View Menu</button>
            <button className="secondary-button">Book Table</button>
          </div>
        </div>

        <div className="hero-image-wrap">
          <img
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80"
            alt="Restaurant interior"
          />
        </div>
      </section>

      <section id="about" className="about container section-spacing">
        <div className="about-image">
          <img
            src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=900&q=80"
            alt="Food platter"
          />
        </div>

        <div className="about-copy">
          <p className="eyebrow">About us</p>
          <h2>A place where every meal feels special</h2>
          <p>
            Swan Birdz is a vibrant food destination in Dhuri known for serving a wide range of
            delicious food options for every taste. From comforting North Indian flavors to
            sizzling Chinese dishes, savory fast food, and refreshing beverages, Swan Birdz brings
            together taste, variety, and hospitality in one place.
          </p>
          <p>
            Whether you’re dining with family, friends, or colleagues, we create a memorable
            experience with every bite.
          </p>
        </div>
      </section>

      <section className="cuisine-band">
        <div className="container section-spacing">
          <p className="eyebrow light">Our cuisines</p>
          <h2>Variety that satisfies every craving</h2>

          <div className="cuisine-grid">
            {cuisines.map((item) => (
              <div key={item} className="cuisine-card">
                <h3>{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="menu" className="container section-spacing">
        <p className="eyebrow">Signature dishes</p>
        <h2>Popular favorites</h2>

        <div className="dish-grid">
          {signatureDishes.map((dish) => (
            <article key={dish.title} className="dish-card">
              <img src={dish.image} alt={dish.title} />
              <div className="dish-content">
                <h3>{dish.title}</h3>
                <p>{dish.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="menu-preview section-spacing">
        <div className="container">
          <p className="eyebrow">Menu highlights</p>
          <h2>Fresh, flavorful, and satisfying</h2>

          <div className="menu-list">
            {menuSample.map((item) => (
              <div key={item.name} className="menu-item">
                <div>
                  <h4>{item.name}</h4>
                  <span>{item.category}</span>
                </div>
                <strong>{item.price}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="gallery section-spacing">
        <div className="container">
          <p className="eyebrow">Gallery</p>
          <h2>A glimpse of the experience</h2>

          <div className="gallery-grid">
            {gallery.map((image, index) => (
              <img key={index} src={image} alt={`Swan Birdz gallery ${index + 1}`} />
            ))}
          </div>
        </div>
      </section>

      <section className="container section-spacing highlights-section">
        <div className="highlight-grid">
          {highlights.map((item) => (
            <div key={item.title} className="highlight-card">
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="testimonials section-spacing">
        <div className="container">
          <p className="eyebrow">Testimonials</p>
          <h2>What guests say</h2>

          <div className="testimonial-grid">
            {testimonials.map((item) => (
              <div key={item.author} className="testimonial-card">
                <p className="quote">“{item.quote}”</p>
                <span>{item.author}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="contact-section">
        <div className="container contact-grid section-spacing">
          <div className="contact-copy">
            <p className="eyebrow light">Contact us</p>
            <h2>Reserve your table</h2>
            <p>
              We’d love to welcome you at Swan Birdz. Book a table or get in touch for family
              dining, events, and special gatherings.
            </p>

            <div className="contact-list">
              <p>📍 Dhuri, Punjab</p>
              <p>📞 +91 00000 00000</p>
              <p>✉️ hello@swanbirdz.com</p>
              <p>🕒 10:00 AM to 11:00 PM</p>
            </div>
          </div>

          <form className="booking-form">
            <input type="text" placeholder="Your Name" />
            <input type="tel" placeholder="Phone Number" />
            <input type="email" placeholder="Email Address" />
            <input type="date" placeholder="Date" />
            <input type="time" placeholder="Time" />
            <input type="number" placeholder="Guests" min="1" max="20" />
            <textarea placeholder="Your Message" rows="4" />
            <button className="primary-button form-button" type="button">
              Send Enquiry
            </button>
          </form>
        </div>
      </section>

      <footer className="site-footer">
        <div className="container footer-inner">
          <p>© 2025 SWAN BIRDZ</p>
          <p>Fresh food • Great taste • Warm hospitality</p>
        </div>
      </footer>
    </main>
  );
}
