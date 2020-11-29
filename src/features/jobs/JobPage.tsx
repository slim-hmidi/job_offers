import { RootState } from 'app/store';
import React from 'react';
import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux';
import parse from 'html-react-parser';
import {selectJobById} from './jobsSlice';
import CompanyCard from 'components/CompanyCard';

interface Props {
  match: {
    params: {
      jobId : string
    }
  }
}

const JobPage = ({match}: Props ): JSX.Element => {
  const {jobId} = match.params
  const job = useSelector((state: RootState) => selectJobById(state, jobId));

  if (job) {
    return(
      <div className="container" style={{marginTop: "40px"}}>
            <h1>{job.title}</h1>
            <hr className="solid" />
            <div className="row">
              <div className="col-sm-8">
                {parse(job.description)}
                <Link to='/jobs' className="btn btn-primary">
                  Return
                </Link>
              </div>
              <div className="col-sm-4">
                <div className="column">
                  <CompanyCard
                    name={job.company}
                    url={job.companyUrl}
                    logoUrl={job.companyLogo}
                    />
                  <div className="card" style={{marginTop: "20px"}}>
                    <div className="card-header text-dark"><strong>How to apply?</strong></div>
                    <span className="text-primary" style={{margin: "10px"}}>{parse(job.howToApply)}</span>
                  </div>
                </div>
              </div>
            </div>
      </div>
           
      )
  }

  return(
    <div className="container">
        <h1> No content found.</h1>
    </div>
  ) 
  
}

export default JobPage;