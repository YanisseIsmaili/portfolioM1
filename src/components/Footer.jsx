export default function Footer() {
  return (
    <footer className="border-t border-gray-800 py-8 px-6 text-center">
      <p className="text-gray-600 text-sm font-mono">
        Conçu & développé par{' '}
        <span className="text-violet-400 font-semibold">Yanisse Ismaili</span>
        {' '}· {new Date().getFullYear()}
      </p>
    </footer>
  )
}
