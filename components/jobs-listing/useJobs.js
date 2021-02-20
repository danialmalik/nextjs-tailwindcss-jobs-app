import axios from 'axios';
import useSWR from "swr";

const JOBS_API_URL = "/api/jobs";


const useJobs = ({ searchKeyword, sorting }) => {
    const { data: response, error } = useSWR([JOBS_API_URL, searchKeyword], (url, searchKeyword) => axios.get(url, {
        params: {
            keyword: searchKeyword
        }
    }));

    if (error) {
        console.error(error)
    }

    let jobs = response ? response.data.jobs.map(hospitalData => ({
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
                state: jobData.state,
            },
            createdAt: jobData.created,
            // job details
            departments: jobData.department,
            requiredSkills: jobData.required_skills,
            experience: jobData.experience,
            shifts: jobData.hours.map(hour => ({
                hours: hour,
                shift: jobData.work_schedule
            })),
            summary: jobData.description
        }))
    })) : null;

    // Sort jobs based on current sorting settings:
    jobs = jobs && jobs.map((hospitalJobs) => {
        hospitalJobs.jobs.sort((jobA, jobB) => {
            switch (true) {
                case sorting.role !== 0: {
                    const cmp_val = jobA.title.localeCompare(jobB.title);
                    if (cmp_val !== 0) return cmp_val * sorting.role;
                }
                case sorting.department !== 0: {
                    jobA.departments.sort();
                    jobB.departments.sort();
                    const cmp_val = jobA.departments[0].localeCompare(jobB.departments[0]);
                    if (cmp_val !== 0) return cmp_val * sorting.department;
                }
                case sorting.education !== 0: {
                    jobA.requiredSkills.sort();
                    jobB.requiredSkills.sort();
                    const cmp_val = jobA.requiredSkills[0].localeCompare(jobB.requiredSkills[0]);
                    if (cmp_val !== 0) return cmp_val * sorting.education;
                }
                case sorting.experience !== 0: {
                    const cmp_val = jobA.experience.localeCompare(jobB.experience);
                    if (cmp_val !== 0) return cmp_val * sorting.experience;
                }
                default:
                    return 0;
            }
        })
        return hospitalJobs;
    })

    if (jobs && sorting.location !== 0) {
        jobs.sort((hJobA, hJobB) => {
            const jobA = hJobA.jobs[0];
            const jobB = hJobB.jobs[0];
            let cmp_val = jobA.address.state.localeCompare(jobB.address.state);
            cmp_val = cmp_val === 0 ? jobA.address.city.localeCompare(jobB.address.city) : cmp_val;
            return cmp_val * sorting.location;
        })
    }

    return { jobs, error };
}

export default useJobs;
