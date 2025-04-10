export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-4">        
        <div className="border-t border-gray-800 pt-6 text-center">
          <p className="text-gray-400">© {currentYear} Tom BALLESTER. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}