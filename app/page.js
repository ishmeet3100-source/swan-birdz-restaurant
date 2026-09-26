const cuisines = [
  { name: 'North Indian', emoji: '🥘' },
  { name: 'Chinese', emoji: '🥢' },
  { name: 'South Indian', emoji: '🍲' },
  { name: 'Fast Food', emoji: '🍔' },
  { name: 'Veg Delights', emoji: '🥗' },
  { name: 'Non-Veg Special', emoji: '🍗' },
  { name: 'Desserts', emoji: '🍰' },
  { name: 'Beverages', emoji: '☕' },
];

const signatureDishes = [
  {
    title: 'Paneer Tikka',
    price: '₹249',
    description: 'Perfectly grilled and charred with a smoky, spicy finish.',
    image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Butter Chicken',
    price: '₹289',
    description: 'Rich, creamy, and deeply flavorful with a classic home-style feel.',
    image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Veg Biryani',
    price: '₹219',
    description: 'Fragrant basmati rice layered with spices and fresh vegetables.',
    image: 'https://images.unsplash.com/photo-1654922207993-2952fec328ae?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Hakka Noodles',
    price: '₹179',
    description: 'Wok-tossed noodles packed with bold savory taste.',
    image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Masala Dosa',
    price: '₹119',
    description: 'Crispy, golden, and satisfying with sambar and chutney.',
    image: 'https://images.unsplash.com/photo-1625944230945-1b7d7d0d6f4b?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Gulab Jamun',
    price: '₹89',
    description: 'A sweet ending to every meal with warm, syrupy richness.',
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=900&q=80',
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
  { url: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=80', title: 'Premium Dining Setup' },
  { url: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=900&q=80', title: 'Elegant Interior' },
  { url: 'https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?auto=format&fit=crop&w=900&q=80', title: 'Cozy Ambiance' },
  { url: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80', title: 'Family Dining Area' },
  { url: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=900&q=80', title: 'Signature Dishes' },
  { url: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=900&q=80', title: 'Gourmet Platter' },
];

const highlights = [
  { icon: '⭐', title: 'Premium Quality', text: 'Finest ingredients and expert preparation for every dish.' },
  { icon: '❤️', title: 'Warm Hospitality', text: 'A welcoming atmosphere for family meals and special moments.' },
  { icon: '✨', title: 'Multi-Cuisine', text: 'A diverse menu spanning North Indian, Chinese, South Indian, and more.' },
];

const testimonials = [
  { quote: 'The food is delicious and the ambiance is perfect for family dinners. One of the best places in Dhuri.', author: 'Aman Singh', rating: 5 },
  { quote: 'Great variety, excellent taste, and very friendly service. We loved the Chinese and North Indian options.', author: 'Ritika Kapoor', rating: 5 },
  { quote: 'A vibrant place with a warm atmosphere and flavors that keep you coming back for more.', author: 'Harpreet Gill', rating: 5 },
];

export default function Home() {
  return (
    <main className="page-shell">
      <a href="https://wa.me/917097455555?text=Hello%20Swan%20Birdz!%20I%20would%20like%20to%20make%20a%20reservation%20or%20order." className="whatsapp-button" target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp">
        💬
      </a>

      <header className="site-header">
        <nav className="nav container" aria-label="Main navigation">
          <div className="brand">🦢 SWAN BIRDZ</div>
          <div className="nav-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#menu">Menu</a>
            <a href="#gallery">Gallery</a>
            <a href="#contact">Contact</a>
          </div>
          <a href="https://wa.me/917097455555?text=Hello%20Swan%20Birdz!%20I%20would%20like%20to%20book%20a%20table." className="primary-button cta-button">
            📞 Book Now
          </a>
        </nav>
      </header>

      <section id="home" className="hero container">
        <div className="hero-copy">
          <p className="eyebrow">Dhuri’s premium dining destination</p>
          <h1>Fresh flavors. Memorable dining. Pure luxury.</h1>
          <p>
            Experience a refined multi-cuisine journey at Swan Birdz — from signature Indian classics
            to comforting fast food and elegant family dining. Open 24 hours for your convenience.
          </p>
          <div className="hero-actions">
            <a href="#menu" className="primary-button">📋 Explore Menu</a>
            <a href="https://wa.me/917097455555?text=Hello%20Swan%20Birdz!%20I%20want%20to%20book%20a%20table." className="secondary-button">📞 Reserve Table</a>
          </div>
        </div>

        <div className="hero-image-wrap">
          <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80" alt="Luxury restaurant interior" />
        </div>
      </section>

      <section id="about" className="about container section-spacing">
        <div className="about-image">
          <img src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=900&q=80" alt="Luxury food platter" />
        </div>

        <div className="about-copy">
          <p className="eyebrow">About us</p>
          <h2>A refined dining experience in Dhuri</h2>
          <p>
            Swan Birdz is a vibrant food destination in Dhuri, known for serving a wide range of delicious food options for every taste. From comforting North Indian flavors to sizzling Chinese dishes, savory fast food, and refreshing beverages, we bring together taste, variety, and hospitality in one place.
          </p>
          <p>
            Whether you’re dining with family, friends, or colleagues, we create a memorable experience with every bite. Open 24 hours, Swan Birdz is ready to serve you at any time.
          </p>

          <div className="about-stats">
            <div className="stat-box"><strong>100+</strong><span>Menu Items</span></div>
            <div className="stat-box"><strong>5000+</strong><span>Happy Guests</span></div>
            <div className="stat-box"><strong>24/7</strong><span>Open</span></div>
          </div>
        </div>
      </section>

      <section className="cuisine-band">
        <div className="container section-spacing">
          <p className="eyebrow light">Our cuisines</p>
          <h2>Curated flavors for every craving</h2>

          <div className="cuisine-grid">
            {cuisines.map((item) => (
              <div key={item.name} className="cuisine-card">
                <span className="cuisine-emoji">{item.emoji}</span>
                <h3>{item.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="menu" className="container section-spacing">
        <p className="eyebrow">Signature dishes</p>
        <h2>Chef’s premium selection</h2>
        <p className="section-subtitle">Handpicked specialties prepared to perfection</p>

        <div className="dish-grid">
          {signatureDishes.map((dish) => (
            <article key={dish.title} className="dish-card">
              <div className="dish-image-wrap">
                <img src={dish.image} alt={dish.title} />
                <span className="dish-price-tag">{dish.price}</span>
              </div>
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
                <div className="menu-item-info">
                  <h4>{item.name}</h4>
                  <span>{item.category}</span>
                </div>
                <strong>{item.price}</strong>
              </div>
            ))}
          </div>

          <div className="menu-cta">
            <p>Need the full menu or a quick order assistance?</p>
            <a href="https://wa.me/917097455555?text=Can%20you%20send%20the%20full%20menu%20for%20Swan%20Birdz%3F" className="primary-button">📲 Request Full Menu</a>
          </div>
        </div>
      </section>

      <section id="gallery" className="gallery section-spacing">
        <div className="container">
          <p className="eyebrow">Gallery</p>
          <h2>A glimpse of the experience</h2>
          <div className="gallery-grid">
            {gallery.map((item, index) => (
              <div key={index} className="gallery-item">
                <img src={item.url} alt={item.title} />
                <div className="gallery-overlay"><p>{item.title}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container section-spacing highlights-section">
        <p className="eyebrow text-center">Why choose us</p>
        <h2 className="text-center">Excellence in every aspect</h2>
        <div className="highlight-grid">
          {highlights.map((item) => (
            <div key={item.title} className="highlight-card">
              <div className="highlight-icon">{item.icon}</div>
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
                <div className="stars">{'⭐'.repeat(item.rating)}</div>
                <p className="quote">“{item.quote}”</p>
                <span className="author">— {item.author}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="contact-section">
        <div className="container contact-grid section-spacing">
          <div className="contact-copy">
            <p className="eyebrow light">Contact us</p>
            <h2>Reserve your table today</h2>
            <p>We’d love to welcome you at Swan Birdz. Book a table or get in touch for family dining, celebrations, or everyday cravings.</p>

            <div className="contact-list">
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <div>
                  <strong>Location</strong>
                  <p>Sangrur Road, near Singla Palace<br />Dhuri, Punjab, 148024</p>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📞</span>
                <div>
                  <strong>Phone</strong>
                  <p><a href="tel:7097455555">70974 55555</a></p>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon">✉️</span>
                <div>
                  <strong>Email</strong>
                  <p><a href="mailto:swanbirdz19@gmail.com">swanbirdz19@gmail.com</a></p>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon">🕒</span>
                <div>
                  <strong>Hours</strong>
                  <p>Open 24 Hours • 7 Days a Week</p>
                </div>
              </div>
            </div>

            <a href="https://wa.me/917097455555?text=Hello%20Swan%20Birdz!%20I%20want%20to%20make%20a%20reservation." className="primary-button whatsapp-link">
              💬 Chat on WhatsApp
            </a>
          </div>

          <div className="booking-form-wrapper">
            <form className="booking-form">
              <h3>Quick Reservation</h3>
              <input type="text" placeholder="Your Name" required />
              <input type="tel" placeholder="Phone Number" required />
              <input type="email" placeholder="Email Address" required />
              <input type="date" required />
              <input type="time" required />
              <select defaultValue="" required>
                <option value="">Select number of guests</option>
                <option value="1">1 Guest</option>
                <option value="2">2 Guests</option>
                <option value="3">3 Guests</option>
                <option value="4">4 Guests</option>
                <option value="5">5 Guests</option>
                <option value="6+">6+ Guests</option>
              </select>
              <textarea rows="3" placeholder="Special requests (optional)" />
              <button className="primary-button form-button" type="submit">✅ Confirm Reservation</button>
            </form>
          </div>
        </div>

        <div className="map-section">
          <div className="container">
            <h3>Find Us on the Map</h3>
            <div className="map-container">
              <iframe title="Swan Birdz Location" src="https://www.google.com/maps?q=Sangrur%20Road%20near%20Singla%20Palace%20Dhuri%20Punjab&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h4>🦢 SWAN BIRDZ</h4>
              <p>Premium Multi-Cuisine Restaurant</p>
              <p>Open 24 Hours • 7 Days a Week</p>
            </div>
            <div className="footer-section">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#menu">Menu</a></li>
                <li><a href="#gallery">Gallery</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Connect With Us</h4>
              <div className="social-links">
                <a href="https://wa.me/917097455555" target="_blank" rel="noreferrer">💬 WhatsApp</a>
                <a href="tel:7097455555">📞 Call</a>
                <a href="mailto:swanbirdz19@gmail.com">✉️ Email</a>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p>© 2025 Swan Birdz. All rights reserved.</p>
            <p>Fresh food • Great taste • Warm hospitality</p>
          </div>
        </div>
      </footer>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600;700&family=Poppins:wght@400;500;600;700;800&display=swap');

        :root {
          --ivory: #f7f1ea;
          --ivory-strong: #efe3d0;
          --bg-warm: #f5ecdf;
          --gold: #c89d5d;
          --gold-soft: #ecd2a0;
          --burgundy: #5f1f1e;
          --burgundy-deep: #3f1717;
          --brown: #2d201d;
          --brown-soft: #5a403d;
          --text: #2a1f1d;
          --muted: #5a4c45;
          --card: rgba(255,255,255,0.72);
          --shadow: 0 18px 45px rgba(48, 28, 14, 0.12);
          --border: rgba(61, 31, 17, 0.08);
        }

        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body {
          margin: 0;
          background: linear-gradient(180deg, #f9f2ea 0%, #f5ebdf 100%);
          color: var(--text);
          font-family: 'Poppins', sans-serif;
          line-height: 1.6;
        }
        img { display: block; max-width: 100%; }
        a { color: inherit; text-decoration: none; }
        button, input, select, textarea { font: inherit; }

        .container {
          width: min(1180px, calc(100% - 28px));
          margin: 0 auto;
        }

        .page-shell {
          background: linear-gradient(180deg, #f7f0e8 0%, #f5efe7 100%);
          color: var(--text);
        }

        .site-header {
          position: sticky;
          top: 0;
          z-index: 50;
          background: rgba(45, 32, 29, 0.96);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid rgba(255,255,255,0.08);
        }

        .nav {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 18px;
          padding: 18px 0;
        }

        .brand {
          font-size: clamp(1.4rem, 2vw, 2.3rem);
          font-weight: 800;
          letter-spacing: 0.06em;
          color: white;
          font-family: 'Cormorant Garamond', serif;
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 22px;
          color: rgba(255,255,255,0.88);
          font-weight: 600;
          font-size: 0.95rem;
        }

        .nav-links a:hover { color: var(--gold-soft); }

        .primary-button, .secondary-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 999px;
          padding: 0.9rem 1.5rem;
          font-weight: 700;
          transition: all 0.25s ease;
          border: none;
          text-decoration: none;
          cursor: pointer;
        }

        .primary-button {
          background: linear-gradient(135deg, var(--gold), #ebc774);
          color: var(--brown);
          box-shadow: 0 14px 28px rgba(200,157,93,0.24);
        }

        .primary-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 18px 30px rgba(200,157,93,0.30);
        }

        .secondary-button {
          background: transparent;
          color: var(--brown);
          border: 2px solid rgba(200,157,93,0.85);
        }

        .secondary-button:hover {
          background: rgba(200,157,93,0.08);
        }

        .cta-button { white-space: nowrap; }

        .hero {
          display: grid;
          grid-template-columns: 1.05fr 0.95fr;
          gap: 42px;
          align-items: center;
          padding: 72px 0 72px;
        }

        .eyebrow {
          color: var(--burgundy);
          font-size: 0.78rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          font-weight: 800;
          margin: 0 0 16px;
        }

        .eyebrow.light { color: var(--gold-soft); }

        .hero-copy h1 {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(3rem, 5vw, 4.9rem);
          line-height: 0.94;
          margin: 0 0 18px;
          letter-spacing: -0.045em;
          color: var(--brown);
          max-width: 620px;
        }

        .hero-copy p {
          font-size: 1.08rem;
          color: var(--muted);
          line-height: 1.8;
          max-width: 560px;
        }

        .hero-actions {
          margin-top: 26px;
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
        }

        .hero-image-wrap {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .hero-image-wrap img {
          width: min(100%, 500px);
          height: 420px;
          object-fit: cover;
          border-radius: 30px;
          box-shadow: var(--shadow);
          border: 8px solid rgba(255,255,255,0.82);
        }

        .section-spacing {
          padding-top: 90px;
          padding-bottom: 90px;
        }

        .about {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          align-items: center;
        }

        .about-image img {
          width: min(100%, 500px);
          height: 410px;
          object-fit: cover;
          border-radius: 26px;
          box-shadow: var(--shadow);
          border: 8px solid rgba(255,255,255,0.8);
        }

        .about-copy h2, .cuisine-band h2, .gallery h2, .testimonials h2, .contact-copy h2 {
          margin: 0 0 16px;
          font-size: clamp(2.2rem, 3vw, 3.1rem);
          letter-spacing: -0.04em;
          color: var(--brown);
          font-family: 'Cormorant Garamond', serif;
          font-weight: 700;
        }

        .about-copy p {
          margin: 0 0 12px;
          color: var(--muted);
          font-size: 1.04rem;
          line-height: 1.85;
        }

        .about-stats {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 16px;
          margin-top: 18px;
        }

        .stat-box {
          background: rgba(200,157,93,0.08);
          border: 1px solid rgba(122,31,31,0.08);
          border-radius: 18px;
          padding: 18px 12px;
          text-align: center;
        }

        .stat-box strong {
          display: block;
          font-size: 1.8rem;
          color: var(--burgundy);
        }

        .stat-box span {
          display: block;
          margin-top: 6px;
          color: var(--muted);
          font-size: 0.9rem;
        }

        .cuisine-band {
          background: linear-gradient(135deg, #2d201d 0%, #442726 100%);
          color: white;
        }

        .cuisine-band h2 {
          color: white;
          margin-bottom: 26px;
        }

        .cuisine-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 18px;
        }

        .cuisine-card {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 20px;
          padding: 22px 16px;
          text-align: center;
          transition: all 0.25s ease;
        }

        .cuisine-card:hover {
          transform: translateY(-4px);
          border-color: rgba(200,157,93,0.8);
          background: rgba(200,157,93,0.08);
        }

        .cuisine-emoji { display: block; font-size: 2rem; margin-bottom: 8px; }
        .cuisine-card h3 { margin: 0; font-size: 1.08rem; font-weight: 700; }

        .section-subtitle {
          color: var(--muted);
          margin: -2px 0 26px;
          font-size: 1rem;
        }

        .dish-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 24px;
        }

        .dish-card {
          background: rgba(255,255,255,0.68);
          border: 1px solid var(--border);
          border-radius: 26px;
          overflow: hidden;
          box-shadow: 0 14px 30px rgba(38, 24, 11, 0.05);
        }

        .dish-image-wrap { position: relative; }
        .dish-image-wrap img {
          width: 100%;
          height: 235px;
          object-fit: cover;
        }

        .dish-price-tag {
          position: absolute;
          right: 14px;
          bottom: 14px;
          background: rgba(122,31,31,0.94);
          color: white;
          border-radius: 999px;
          padding: 8px 12px;
          font-weight: 800;
          font-size: 0.9rem;
        }

        .dish-content { padding: 20px 18px 24px; }
        .dish-content h3 {
          margin: 0 0 8px;
          font-size: 1.8rem;
          color: var(--brown);
          font-family: 'Cormorant Garamond', serif;
        }
        .dish-content p {
          margin: 0;
          color: var(--muted);
          line-height: 1.7;
        }

        .menu-preview {
          background: linear-gradient(180deg, #f7efe5 0%, #f2e3d0 100%);
        }

        .menu-list {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 16px;
          margin-top: 24px;
        }

        .menu-item {
          background: rgba(255,255,255,0.76);
          border: 1px solid var(--border);
          border-radius: 18px;
          padding: 18px 18px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
        }

        .menu-item-info {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .menu-item h4 {
          margin: 0;
          font-size: 1.08rem;
        }

        .menu-item span {
          color: var(--muted);
          font-size: 0.9rem;
        }

        .menu-price { color: var(--burgundy); font-size: 1.18rem; }

        .menu-cta {
          margin-top: 24px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 16px;
          flex-wrap: wrap;
          padding: 18px 20px;
          border-radius: 18px;
          background: rgba(255,255,255,0.58);
          border: 1px solid rgba(122,31,31,0.08);
        }

        .menu-cta p { margin: 0; color: var(--muted); font-weight: 600; }

        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 18px;
          margin-top: 22px;
        }

        .gallery-item {
          position: relative;
          overflow: hidden;
          border-radius: 24px;
          box-shadow: var(--shadow);
        }

        .gallery-item img {
          width: 100%;
          height: 238px;
          object-fit: cover;
          transition: transform 0.35s ease;
        }

        .gallery-item:hover img { transform: scale(1.06); }

        .gallery-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(0,0,0,0.02), rgba(0,0,0,0.62));
          display: flex;
          align-items: end;
          padding: 18px;
          color: white;
          font-weight: 700;
        }

        .highlight-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 20px;
          margin-top: 20px;
        }

        .highlight-card {
          background: rgba(255,255,255,0.72);
          border: 1px solid var(--border);
          border-radius: 24px;
          padding: 26px 20px;
          box-shadow: 0 16px 30px rgba(38,24,11,0.04);
        }

        .highlight-icon { font-size: 2.2rem; margin-bottom: 10px; }
        .highlight-card h3 {
          margin: 0 0 10px;
          font-size: 1.7rem;
          color: var(--brown);
          font-family: 'Cormorant Garamond', serif;
        }
        .highlight-card p { margin: 0; color: var(--muted); line-height: 1.75; }

        .testimonials {
          background: linear-gradient(180deg, #f7efe4 0%, #f0e0c8 100%);
        }

        .testimonial-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 20px;
          margin-top: 24px;
        }

        .testimonial-card {
          background: rgba(255,255,255,0.8);
          border: 1px solid rgba(122,31,31,0.09);
          border-radius: 22px;
          padding: 22px 18px;
          box-shadow: 0 16px 30px rgba(42, 24, 22, 0.04);
        }

        .stars { color: #f5b700; letter-spacing: 2px; margin-bottom: 10px; font-size: 1.1rem; }
        .quote { margin: 0 0 14px; color: var(--muted); line-height: 1.8; }
        .author { font-weight: 800; color: var(--burgundy); }

        .contact-section {
          background: linear-gradient(135deg, var(--brown) 0%, #3c241f 100%);
          color: white;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 54px;
          align-items: center;
        }

        .contact-copy h2 {
          color: white;
          margin: 0 0 12px;
        }

        .contact-copy p {
          color: rgba(255,255,255,0.8);
          font-size: 1.04rem;
          line-height: 1.8;
        }

        .contact-list {
          margin-top: 26px;
          display: grid;
          gap: 18px;
        }

        .contact-item {
          display: flex;
          gap: 14px;
          align-items: flex-start;
        }

        .contact-icon {
          width: 42px;
          height: 42px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: rgba(200,157,93,0.14);
          font-size: 1.2rem;
        }

        .contact-item strong {
          display: block;
          margin-bottom: 4px;
          color: white;
        }

        .contact-item p {
          margin: 0;
          color: rgba(255,255,255,0.8);
        }

        .whatsapp-link {
          margin-top: 22px;
          display: inline-flex;
        }

        .booking-form-wrapper { display: flex; justify-content: center; }

        .booking-form {
          width: min(100%, 520px);
          display: grid;
          gap: 14px;
          padding: 28px 24px;
          background: rgba(255,255,255,0.96);
          border-radius: 26px;
          box-shadow: 0 30px 50px rgba(0,0,0,0.12);
        }

        .booking-form h3 {
          margin: 0 0 6px;
          font-size: 1.8rem;
          color: var(--brown);
        }

        .booking-form input,
        .booking-form select,
        .booking-form textarea {
          width: 100%;
          border: 1px solid rgba(77, 18, 18, 0.12);
          border-radius: 14px;
          padding: 0.9rem 1rem;
          background: white;
          color: var(--text);
          font-size: 0.98rem;
        }

        .booking-form textarea {
          resize: vertical;
          min-height: 120px;
        }

        .form-button {
          width: 100%;
          border: none;
          cursor: pointer;
        }

        .map-section {
          padding-bottom: 90px;
        }

        .map-section h3 {
          color: white;
          margin: 0 0 16px;
          font-size: 2rem;
        }

        .map-container {
          overflow: hidden;
          border-radius: 22px;
          border: 2px solid rgba(200,157,93,0.5);
          box-shadow: 0 20px 38px rgba(0,0,0,0.12);
        }

        .map-container iframe {
          display: block;
          width: 100%;
          min-height: 420px;
          border: 0;
        }

        .site-footer {
          background: #150f0e;
          color: white;
          border-top: 2px solid rgba(200,157,93,0.3);
        }

        .footer-content {
          display: grid;
          grid-template-columns: 1.3fr 1fr 1fr;
          gap: 26px;
          padding: 34px 0 18px;
        }

        .footer-section h4 {
          margin: 0 0 12px;
          color: #f0d4a3;
          font-size: 1.15rem;
        }

        .footer-section p,
        .footer-section li,
        .footer-section a {
          color: rgba(255,255,255,0.75);
          line-height: 1.9;
        }

        .footer-section ul { list-style: none; padding: 0; margin: 0; }
        .social-links { display: flex; flex-direction: column; gap: 8px; }

        .footer-bottom {
          border-top: 1px solid rgba(255,255,255,0.08);
          padding: 18px 0 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          flex-wrap: wrap;
          color: rgba(255,255,255,0.8);
          font-size: 0.94rem;
        }

        .whatsapp-button {
          position: fixed;
          right: 22px;
          bottom: 22px;
          z-index: 50;
          width: 62px;
          height: 62px;
          border-radius: 50%;
          background: linear-gradient(135deg, #25d366, #1ebc5a);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.8rem;
          box-shadow: 0 18px 30px rgba(37, 211, 102, 0.3);
        }

        @media (max-width: 980px) {
          .nav { flex-wrap: wrap; justify-content: center; }
          .nav-links { flex-wrap: wrap; justify-content: center; }
          .hero, .about, .contact-grid, .dish-grid, .highlight-grid, .testimonial-grid, .gallery-grid, .cuisine-grid, .menu-list, .footer-content { grid-template-columns: 1fr; }
          .hero { padding-top: 58px; }
          .hero-copy, .about-copy { text-align: center; }
          .hero-copy p, .hero-copy h1 { max-width: none; }
          .hero-actions, .menu-cta { justify-content: center; }
        }

        @media (max-width: 640px) {
          .brand { width: 100%; text-align: center; }
          .nav { padding-top: 14px; padding-bottom: 14px; }
          .hero-copy h1 { font-size: 2.8rem; }
          .section-spacing { padding-top: 70px; padding-bottom: 70px; }
          .hero-image-wrap img, .about-image img { height: 330px; }
          .primary-button, .secondary-button { width: 100%; }
          .hero-actions { flex-direction: column; }
          .menu-item { flex-direction: column; align-items: flex-start; }
          .whatsapp-button { width: 58px; height: 58px; right: 14px; bottom: 14px; }
        }
      `}</style>
    </main>
  );
}
