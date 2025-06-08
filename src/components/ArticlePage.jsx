import { useParams } from 'react-router-dom'
import { articles } from '../articles'
import ReactMarkdown from 'react-markdown'

export default function ArticlePage() {
  const { slug } = useParams()
  const article = articles.find(a => a.slug === slug)

  if (!article) return <p>Article not found.</p>

  return (
    <div className="container">
      <h1>{article.title}</h1>
      <small>{article.date}</small>

      <div className="article-markdown">
        <ReactMarkdown>{article.content}</ReactMarkdown>
      </div>

      <audio controls>
        <source src={article.audio} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  )
}
