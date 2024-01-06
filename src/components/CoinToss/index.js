import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {
    total: 0,
    heads: 0,
    tails: 0,
    url: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
  }

  onClickingTossItem = () => {
    const tossResults = Math.floor(Math.random() * 2)
    if (tossResults === 0) {
      this.setState(prevState => ({heads: prevState.heads + 1}))
    } else if (tossResults !== 0) {
      this.setState(prevState => ({
        tails: prevState.tails + 1,
      }))
    }

    this.setState(prevState => ({total: prevState.total + 1}))

    if (tossResults === 0) {
      this.setState({
        url: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
      })
    } else {
      this.setState({
        url: 'https://assets.ccbp.in/frontend/react-js/tails-img.png',
      })
    }
  }

  render() {
    const {heads, total, tails, url} = this.state

    return (
      <div className="home">
        <div className="card-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="parag">Heads (or) Tails</p>

          <img src={url} alt="toss result" className="image" />
          <br />
          <button
            type="button"
            className="btn"
            onClick={this.onClickingTossItem}
          >
            Toss Coin
          </button>
          <div className="result-container">
            <p className="paragraph">Total: {total}</p>
            <p className="paragraph">Heads: {heads}</p>
            <p className="paragraph">Tails: {tails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
