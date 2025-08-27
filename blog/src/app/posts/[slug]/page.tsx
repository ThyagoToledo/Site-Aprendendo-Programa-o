import Link from 'next/link'
import { getPostBySlug, getAllPosts } from '../../../lib/posts'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  const posts = getAllPosts()
  
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug)
  
  if (!post) {
    return {
      title: 'Post não encontrado'
    }
  }
  
  return {
    title: `${post.title} | Blog Programação`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
    }
  }
}

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug)
  
  if (!post) {
    notFound()
  }
  
  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <Link 
          href="/" 
          className="text-indigo-600 hover:text-indigo-800 mb-4 inline-block"
        >
          ← Voltar para o blog
        </Link>
      </div>
      
      <article className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="p-8">
          <div className="flex items-center mb-6">
            <span className="text-3xl mr-3">{post.emoji}</span>
            <div>
              <span className="text-sm text-indigo-600 font-medium bg-indigo-50 px-3 py-1 rounded-full">
                {post.category}
              </span>
              <time className="block text-sm text-gray-500 mt-2">
                {new Date(post.date).toLocaleDateString('pt-BR', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </time>
            </div>
          </div>
          
          <div 
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br>') }}
          />
        </div>
      </article>
      
      <div className="mt-12 text-center">
        <Link
          href="/"
          className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors inline-block"
        >
          Ver mais artigos
        </Link>
      </div>
    </div>
  )
}
