
import React from 'react';

export function Buildlist (props) {
  // return <li><span className="contributor">{props.contributor.contributor_payee}</span><span className="contribution">{props.contributor.sum.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span></li>;

  return <li><span className="contributor">{props.contributor.contributor_payee}</span><span className="contribution">{formatNum(props.contributor.sum)}</span></li>;
}

export function formatNum(num) {
  return num.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
