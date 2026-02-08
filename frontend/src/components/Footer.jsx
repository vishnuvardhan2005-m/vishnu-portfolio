export default function Footer() {
    return (
      <footer className="bg-background border-t border-border py-8 text-center text-textSecondary text-sm">
        <p>&copy; {new Date().getFullYear()} Musunuru Vishnu Vardhan. All rights reserved.</p>
        <p className="mt-2 text-xs text-muted">Built with React & Tailwind</p>
      </footer>
    );
  }
