export default function Footer() {
  return (
    <footer className="bg-brand-blue text-white py-10 px-6 mt-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:justify-between items-center gap-6">
        <div className="flex items-center gap-3 mb-4 md:mb-0">
          <img src="/logo.svg" alt="CleanSpace logo" className="h-10" />
          <span className="font-bold text-lg">CleanSpace</span>
        </div>
        <div className="flex flex-col items-center md:items-end gap-1 text-sm">
          <div>
            <a href="mailto:info@cleanspace.dk" className="hover:underline">
              info@cleanspace.dk
            </a>
          </div>
          <div>
            <a href="tel:+4522334455" className="hover:underline">
              +45 22 33 44 55
            </a>
          </div>
          <div>CVR: 12345678 · Hovedgaden 1, 2100 København</div>
          <div>
            &copy; {new Date().getFullYear()} CleanSpace. Alle rettigheder
            forbeholdes.
          </div>
        </div>
      </div>
    </footer>
  );
}
