import { FC } from "react";
import "./HomePage.css";

export const HomePage: FC = () => {
  return (
    <main className="home">
      <section className="hero">
        <h1 className="hero-title">
          Welcome to the great Corey Rose Application!
        </h1>
        <p className="hero-subtitle">
          Those who enter may never be seen again.
        </p>

        <div className="hero-actions">
          <a href="/about" className="btn-primary">
            Learn More
          </a>
          <a href="/contact" className="btn-secondary">
            Contact
          </a>
        </div>
      </section>

      <section className="features">
        <h2>Powered By:</h2>
        <ul>
          <li>⚡ Vite</li>
          <li>🧩 React</li>
          <li>🔐 TypeScript</li>
        </ul>
      </section>
      <section className="features">
        <h3>Explore:</h3>
        <ul>
          <li>📁 The Thrift Shop of Happiness (no refunds)</li>
          <li>📁 The Dark Alleyway</li>
        </ul>
      </section>
    </main>
  );
};
