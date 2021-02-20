import jobs from '../../data/jobs'

export default async (req, res) => {
  let filteredHospitals = jobs;

  res.statusCode = 200;
  // @todo: implement filters and search
  let keyword = req.query.keyword;

  if (keyword) {
    keyword = keyword.toLowerCase();
    filteredHospitals = filteredHospitals.reduce((filtered, current) => {
      const filteredJobs = current.items.filter(job => {
        return [
          job.type,
          job.work_schedule,
          job.name,
          JSON.stringify(job.department),
          job.experience,
          job.city,
          job.description,
          job.job_title,
          job.job_type
        ].some(attribute => {
          console.error(attribute)
          return attribute.toLowerCase().includes(keyword)
        })
      })

      if (filteredJobs.length) {
        filtered.push({
          ...current,
          total_jobs_in_hospital: filteredJobs.length,
          items: filteredJobs
        })
      }

      return filtered;
    }, [])
  }

  // @todo: implement automated tests

  // this timeout emulates unstable network connection, do not remove this one
  // you need to figure out how to guarantee that client side will render
  // correct results even if server-side can't finish replies in the right order
  await new Promise((resolve) => setTimeout(resolve, 1000 * Math.random()))

  res.json({ jobs: filteredHospitals })
}
