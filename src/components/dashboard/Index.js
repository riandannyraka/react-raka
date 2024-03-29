import React, { Component } from 'react'
import CardPercentage from '../../cards/Percentage'
import CardPiechart from '../../cards/Piechart'
import CardLinechart from '../../cards/Linechart'
import CardBarchart from '../../cards/Barchart'
import CardStatistic from '../../cards/Statistic'


class Home extends Component {

  constructor() {
    super()
    this.state = {}
  }

  cardPercentage = (val) => {
    let dt = []

    for (let index = 0; index < val; index++) {
      dt.push(
        <CardPercentage key={index}></CardPercentage>
      )
    }

    return dt
  }

  cardLinechart = (val) => {
    let dt = []

    for (let index = 0; index < val; index++) {
      dt.push(
        <CardLinechart key={index}></CardLinechart>
      )
    }

    return dt
  }

  cardBarchart = (val) => {
    let dt = []

    for (let index = 0; index < val; index++) {
      dt.push(
        <CardBarchart key={index}></CardBarchart>
      )
    }

    return dt
  }

  cardPie = (val) => {
    let dt = []

    for (let index = 0; index < val; index++) {
      dt.push(
        <CardPiechart key={index}></CardPiechart>
      )
    }

    return dt
  }

  cardStatistic = (val) => {
    let dt = []

    for (let index = 0; index < val; index++) {
      dt.push(
        <CardStatistic key={index}></CardStatistic>
      )
    }

    return dt
  }

  render() {
  	return (
  		
  		<div className="main-content">

  			<div className="display-flex-mobile">
          { this.cardPie(3) }
        </div>

        <div className="display-flex-mobile">
          { this.cardStatistic(2) }
          { this.cardPercentage(2) }
        </div>

        <div className="display-flex-mobile">
          { this.cardBarchart(1) }
          { this.cardLinechart(1) }
        </div>

  		</div>

  	)
  }

}

export default Home