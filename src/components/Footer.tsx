import { FC } from 'react';

const Footer: FC = () => {
  return (
    <footer className="py-8 mt-20 glass-effect">
      <div className="container text-center text-text-muted">
        <p>© {new Date().getFullYear()} Luan Omodei Marinheiro. Todos os direitos reservados.</p>
        <div className="mt-2 text-sm">
          <span>Desenvolvido com ❤️ usando Next.js e TypeScript</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;