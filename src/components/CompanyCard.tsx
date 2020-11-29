import React, {Suspense} from 'react';
import {isValidUrl} from 'utils/index';
import SuspenseImg from './SuspenseImage';

interface Props {
  name: string;
  logoUrl: string;
  url: string;
}

const CompanyCard = (props: Props):JSX.Element => {
  const {name, url, logoUrl} = props;
  return (
  <div className="card">
  <h3 className="card-header">{name}</h3>
  <Suspense fallback={<div className="spinner-border text-info" style={{display: 'block', margin: '0 auto'}}></div>}>
    <SuspenseImg src={logoUrl} alt={`${name}-logo`} />
    </Suspense>
  { isValidUrl(url) 
    ? 
      <a href={url} className="card-footer">{url}</a> 
    : 
      <p className="card-footer">Company url not provided</p>
  }
  </div>
  )
}

export default CompanyCard;