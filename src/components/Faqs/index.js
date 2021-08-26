import FaqItem from '../FaqItem'
import './index.css'

const Faqs = props => {
  const {faqsList} = props
  return (
    <div className="app-container">
      <ul className="faqs-container">
        <h1 className="faqs-heading">FAQs</h1>
        {faqsList.map(eachFaq => (
          <FaqItem key={eachFaq.id} faqsList={eachFaq} />
        ))}
      </ul>
    </div>
  )
}
export default Faqs
