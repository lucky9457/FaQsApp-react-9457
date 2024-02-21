// Write your code here.
import './index.css'
import {Component} from 'react'

class FaqItem extends Component {
  state = {clicked: false}

  plusMinusClick = () => {
    this.setState(prevState => ({
      clicked: !prevState.clicked,
    }))
    const {clicked} = this.state
    console.log(clicked)
  }

  renderanswer = () => {
    const {Listitem} = this.props
    const {clicked} = this.state

    const {answer} = Listitem
    if (clicked) {
      return (
        <div>
          <hr />
          <p className="para">{answer}</p>
        </div>
      )
    }
    return null
  }

  render() {
    const {Listitem} = this.props
    const {clicked} = this.state

    const {answer, questionText} = Listitem

    const imgUrl = clicked
      ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
    const AltimgText = clicked ? 'minus' : 'plus'

    return (
      <li className="frst-cont">
        <div className="headRowComt">
          <h1 className="head">{questionText}</h1>
          <button
            onClick={this.plusMinusClick}
            className="imgbtn"
            type="button"
          >
            <img className="imgicon" alt={AltimgText} src={imgUrl} />
          </button>
        </div>
        {this.renderanswer()}
      </li>
    )
  }
}

export default FaqItem
