import { Link } from 'react-router-dom'
import { articles } from '../articles'
import removeMd from 'remove-markdown'
import '../index.css'

export default function HomePage() {
  return (
    <div className="hero-home">
      <div className="hero-header">
        <h1>Whispers Of My Soul</h1>
        <p>Whispers, truths, and reflections.</p>
      </div>

      <div className="article-list">
        {articles.map(article => (
          <div key={article.slug} className="article-card">
            <h2>
              <Link to={`/articles/${article.slug}`}>{article.title}</Link>
            </h2>
            <small>{article.date}</small>
            <p>{removeMd(article.content).slice(0, 100)}...</p>
            <Link to={`/articles/${article.slug}`} className="read-btn">Read More</Link>
          </div>
        ))}
      </div>
    </div>
  )
}
