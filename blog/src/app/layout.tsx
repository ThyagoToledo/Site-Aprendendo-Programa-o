import './globals.css'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Blog - Aprendendo Programação',
  description: 'Artigos e tutoriais sobre programação, desenvolvimento web e tecnologia',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
          <header className="bg-white shadow-sm border-b">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center py-6">
                <div className="flex items-center space-x-4">
                  <Link href="/" className="text-2xl font-bold text-indigo-600">
                    📚 Blog Programação
                  </Link>
                </div>
                <nav className="flex items-center space-x-6">
                  <Link 
                    href="/" 
                    className="text-gray-700 hover:text-indigo-600 transition-colors"
                  >
                    Artigos
                  </Link>
                  <Link 
                    href="/categorias" 
                    className="text-gray-700 hover:text-indigo-600 transition-colors"
                  >
                    Categorias
                  </Link>
                  <a 
                    href="../index.html" 
                    className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
                  >
                    ← Voltar ao Site
                  </a>
                </nav>
              </div>
            </div>
          </header>

          <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            {children}
          </main>

          <footer className="bg-gray-900 text-white py-12 mt-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <h3 className="text-lg font-semibold mb-4">Blog Programação</h3>
                  <p className="text-gray-300">
                    Conteúdo educativo sobre desenvolvimento web, programação e tecnologia.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-4">Links Úteis</h3>
                  <div className="space-y-2">
                    <Link href="/" className="block text-gray-300 hover:text-white">
                      Site Principal
                    </Link>
                    <Link href="/apresentacoes.html" className="block text-gray-300 hover:text-white">
                      Apresentações
                    </Link>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-4">Contato</h3>
                  <p className="text-gray-300">
                    thyago10a2007@gmail.com
                  </p>
                </div>
              </div>
              <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
                <p>&copy; 2025 Aprendendo Programação. Todos os direitos reservados.</p>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}
