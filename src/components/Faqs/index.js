// Write your code here.
import {Component} from 'react'
import './index.css'
import FaqItem from '../FaqItem'

class Faqs extends Component {
  render() {
    const {faqsList} = this.props
    console.log(faqsList)

    return (
      <div className="main-container">
        <div className="Faqcard">
          <h1 className="headname">FAQs</h1>

          <ul className="ulClass">
            {faqsList.map(eachitem => (
              <FaqItem key={eachitem.id} Listitem={eachitem} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Faqs
