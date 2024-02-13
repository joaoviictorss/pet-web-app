import '../styles/global.css';
import '../styles/hero-main-card.css';
import '../styles/animated-text.css';
import '../styles/pet-card.css';
import '../styles/grid-section.css';
import '../styles/button-filter.css';
import '../styles/checkbox-filter.css';
import '../styles/dropdown-filter.css';
import '../styles/menu-button.css'
import '../styles/pet-dynamic-page.css'

export const metadata = {
  title: "Pet Web App",
  description: "Sistema de adoção de pets",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  );
}
