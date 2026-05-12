import Link from 'next/link'
import { getAllPosts } from '../../lib/posts'

export default function CategoriasPage() {
  const posts = getAllPosts()
  
  // Agrupar posts por categoria
  const categorias = posts.reduce((acc, post) => {
    if (!acc[post.category]) {
      acc[post.category] = []
    }
    acc[post.category].push(post)
    return acc
  }, {} as Record<string, typeof posts>)

  return (
    <div>
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          📚 Categorias
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Explore nossos artigos organizados por categoria para encontrar exatamente o que você precisa aprender.
        </p>
      </div>

      <div className="space-y-12">
        {Object.entries(categorias).map(([categoria, postsCategoria]) => (
          <div key={categoria} className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              {categoria} ({postsCategoria.length} artigos)
            </h2>
            
            <div className="grid gap-6 md:grid-cols-2">
              {postsCategoria.map((post) => (
                <article key={post.slug} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-3 mb-3">
                    <span className="text-2xl">{post.emoji}</span>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-3">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <time className="text-xs text-gray-500">
                          {new Date(post.date).toLocaleDateString('pt-BR')}
                        </time>
                        <Link 
                          href={`/blog/posts/${post.slug}`}
                          className="text-indigo-600 hover:text-indigo-800 font-medium text-sm"
                        >
                          Ler artigo →
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Link
          href="/blog"
          className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors inline-block"
        >
          ← Voltar ao blog
        </Link>
      </div>
    </div>
  )
}
