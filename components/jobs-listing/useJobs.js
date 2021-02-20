import axios from 'axios';
import useSWR from "swr";

const JOBS_API_URL = "/api/jobs";


const useJobs = ({ searchKeyword }) => {
    const { data: response, error } = useSWR([JOBS_API_URL, searchKeyword], (url, searchKeyword) => axios.get(url, {
        params: {
            keyword: searchKeyword
        }
    }));

    if (error) {
        console.error(error)
    }

    const jobs = response ? response.data.jobs.map(hospitalData => ({
        // jobs group
        hospitalName: hospitalData.name,
        totalJobsCount: hospitalData.total_jobs_in_hospital,

        // individual jobs
        jobs: hospitalData.items.map(jobData => ({
            id: jobData.job_id,
            title: jobData.job_title,
            type: jobData.job_type,
            salaryRange: {
                start: jobData.salary_range[0],
                end: jobData.salary_range[1],
            },
            address: {
                city: jobData.city,
            },
            createdAt: jobData.created,
            // job details
            departments: jobData.department,
            shifts: jobData.hours.map(hour => ({
                hours: hour,
                shift: jobData.work_schedule
            })),
            summary: jobData.description
        }))
    })) : null;

    return { jobs, error };
}

export default useJobs;
