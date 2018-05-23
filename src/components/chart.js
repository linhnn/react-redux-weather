import _ from 'lodash';
import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

function avarage(data) {
 return _.round(_.sum(data/data.length));
}

export default (props) => {
  return(
    <div>
      <Sparklines data={props.data} height={123} width={180}>
        <SparklinesLine color={props.color} />
        <SparklinesReferenceLine type="avg" />
      </Sparklines>
      <div>{avarage(props.data)} {props.unit}</div>
    </div>
  );
}
