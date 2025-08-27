import Link from 'next/link'
import { getAllPosts } from '../lib/posts'

export default function BlogHome() {
  const posts = getAllPosts()

  return (
    <div>
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          🚀 Blog sobre Programação
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Artigos, tutoriais e dicas sobre desenvolvimento web, programação e tecnologias modernas.
          Conteúdo criado para complementar sua jornada de aprendizado.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <article key={post.slug} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div className="p-6">
              <div className="flex items-center mb-3">
                <span className="text-2xl mr-2">{post.emoji}</span>
                <span className="text-sm text-indigo-600 font-medium bg-indigo-50 px-2 py-1 rounded-full">
                  {post.category}
                </span>
              </div>
              
              <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                {post.title}
              </h2>
              
              <p className="text-gray-600 mb-4 line-clamp-3">
                {post.excerpt}
              </p>
              
              <div className="flex items-center justify-between">
                <time className="text-sm text-gray-500">
                  {new Date(post.date).toLocaleDateString('pt-BR')}
                </time>
                <Link 
                  href={`/posts/${post.slug}`}
                  className="text-indigo-600 hover:text-indigo-800 font-medium text-sm"
                >
                  Ler mais →
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-16 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">
          🎯 Categorias Populares
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          {['HTML & CSS', 'JavaScript', 'React & Next.js', 'Node.js', 'Tutoriais'].map((category) => (
            <Link
              key={category}
              href={`/categorias`}
              className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-6 py-3 rounded-full hover:from-indigo-600 hover:to-purple-700 transition-all transform hover:scale-105"
            >
              {category}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
