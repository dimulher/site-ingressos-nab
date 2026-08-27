export function Footer() {
  return (
    <footer
      className="section-bg w-full py-10 text-center text-white"
      style={{ backgroundImage: "url(/images/footer-bg.png)" }}
    >
      <p className="font-montserrat text-xs opacity-80 sm:text-sm">
        © {new Date().getFullYear()} Novos Autores do Brasil. Todos os direitos
        reservados.
      </p>
    </footer>
  );
}
