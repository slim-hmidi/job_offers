import React, {useEffect} from 'react'
import {Link} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import {
  selectJobs,
  loadingSelector,
  fetchJobs,
  errorSelector,
  selectJobById,
  setJobFilters,
  jobFilterSelector,
  Filter,
} from './jobsSlice'
import {RootState} from 'app/store'
import {timeDifference} from 'utils/index'

const JobItem = ({jobId}: {jobId: string}): JSX.Element => {
  const job = useSelector((state: RootState) => selectJobById(state, jobId))

  if (!job) {
    return <span>No job found!</span>
  }
  return (
    <div className="card">
      <div className="card-body">
        <div className="row">
          <div className="col-sm-10">
            <h3 className="card-title" data-testid="job-title">
              {job.title}
            </h3>
          </div>
          <div className="col-sm-2">
            <p className="card-text text-secondary" data-testid="job-location">
              {job.location}
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-10">
            <p className="card-text">
              <span className="text-secondary" data-testid="job-company">
                {job.company}
              </span>
              --
              <span className="text-info" data-testid="job-type">
                <strong>{job.type}</strong>
              </span>
            </p>
          </div>
          <div className="col-sm-2">
            <p
              className="card-text text-secondary"
              data-testid="job-creation-date"
            >
              {timeDifference(new Date(job.createdAt))}
            </p>
          </div>
        </div>
        <br />
        <Link to={`/jobs/${job.id}`} className="btn btn-primary">
          {' '}
          More info
        </Link>
      </div>
    </div>
  )
}

const JobList = (): JSX.Element => {
  const dispatch = useDispatch()
  const jobs = useSelector((state: RootState) => {
    return selectJobs(state)
  })
  const loading = useSelector(loadingSelector)
  const error = useSelector(errorSelector)
  const filter = useSelector(jobFilterSelector)
  const [filters, setFilters] = React.useState<Filter>(filter)

  useEffect(() => {
    if (loading === 'idle') {
      dispatch(fetchJobs())
    }
  }, [loading, dispatch])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name} = e.target
    if (name === 'fullTime') {
      setFilters({...filters, [name]: e.target.checked})
    } else {
      setFilters({...filters, [name]: e.target.value})
    }
  }
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch(setJobFilters(filters))
  }

  let content
  if (loading === 'pending') {
    content = <div className="spinner-border text-info spinner"></div>
  } else if (loading === 'rejected') {
    content = <span>{error}</span>
  } else {
    content = jobs.map(jobId => <JobItem key={jobId} jobId={jobId} />)
  }

  if (loading === 'resolved' && !jobs.length) {
    content = <h3>No matching jobs found!</h3>
  }

  return (
    <div className="container" style={{marginTop: '40px'}}>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-sm-3">
            <div className="form-group">
              <label htmlFor="title" style={{fontWeight: 600}}>
                Job Title:
              </label>
              <input
                name="title"
                id="title"
                type="text"
                onChange={handleChange}
                value={filters.title}
              />
            </div>
          </div>
          <div className="col-sm-3">
            <div className="form-group">
              <label htmlFor="location" style={{fontWeight: 600}}>
                Location:
              </label>
              <input
                type="text"
                name="location"
                id="location"
                onChange={handleChange}
                value={filters.location}
              />
            </div>
          </div>
          <div className="col-sm-3">
            <div className="form-check" style={{marginTop: '13%'}}>
              <label
                htmlFor="fullTime"
                className="form-check-label"
                style={{fontWeight: 600}}
              >
                <input
                  name="fullTime"
                  type="checkbox"
                  className="form-check-input"
                  id="fullTime"
                  checked={filters.fullTime}
                  onChange={handleChange}
                />
                Full Time
              </label>
            </div>
          </div>
          <div className="col-sm-3">
            <button
              type="submit"
              className="btn btn-info"
              style={{marginTop: '9%'}}
            >
              Search
            </button>
          </div>
        </div>
      </form>
      <div style={{marginTop: '40px'}}>{content}</div>
    </div>
  )
}

export default JobList
