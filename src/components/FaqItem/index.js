import {Component} from 'react'
import './index.css'

const plusImg =
  'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
const minusImg =
  'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
class FaqItem extends Component {
  state = {showAnswer: false}

  onClickPlusIcon = () => {
    this.setState(prev => ({showAnswer: !prev.showAnswer}))
    console.log(this.showAnswer)
  }

  renderAnswer = () => {
    const {faqsList} = this.props
    const {answerText} = faqsList
    const {showAnswer} = this.state

    if (showAnswer) {
      return (
        <div className="answer-container">
          <hr className="horizontal-line" />
          <p className="answer">{answerText}</p>
        </div>
      )
    }
    return null
  }

  renderActiveImg = () => {
    const {showAnswer} = this.state
    const image = showAnswer ? minusImg : plusImg
    const altTxt = showAnswer ? 'minus icon' : 'plus icon'

    return (
      <button onClick={this.onClickPlusIcon} type="button" className="btn">
        <img src={image} alt={altTxt} className="plus-icon" />
      </button>
    )
  }

  render() {
    const {faqsList} = this.props
    const {questionText} = faqsList
    return (
      <li className="faq-container">
        <div className="question">
          <h1 className="faq">{questionText}</h1>
          {this.renderActiveImg()}
        </div>
        {this.renderAnswer()}
      </li>
    )
  }
}
export default FaqItem
