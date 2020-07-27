import React, {Component} from "react";
import RankItem from "./RankItem";

function ShowRankList(items) {
  return (
      <div>
        {items.map((item) => <RankItem key={item.country} country={item.country} confirmedCases={item.confirmedCases}/>)}
      </div>
  );
}


class RankDex extends Component{
  render() {
    let data = require('../data_resource/data');
    let sortedData = data.sort(function (a, b) {
      return (b.confirmedCases - a.confirmedCases)
    });
    let rank = sortedData.slice(0, 10);

    return (
        <div className="RankDex">
          <div>
            {ShowRankList(rank)}
          </div>
        </div>
    );
  }
}

export default RankDex;