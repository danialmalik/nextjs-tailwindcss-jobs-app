import axios from 'axios';
import React, { useState } from 'react'
import useSWR from "swr";

const FILTERS_API_URL = "/api/filters";

const TYPES_ORDER = [
    'job_type',
    'department',
    'work_schedule',
    'experience'
]

const useFilters = () => {
    const { data: response, error } = useSWR(FILTERS_API_URL, url => axios.get(url));

    if (error) {
        console.error(error)
    }
    const filters = response ? Object.entries(response.data).sort(([keyA], [keyB]) => {
        const [indexA, indexB] = [TYPES_ORDER.indexOf(keyA), TYPES_ORDER.indexOf(keyB)];

        switch (true) {
            case indexA < 0 && indexB < 0:
                return 0;
            case indexA < 0:
                return -1;
            case indexB < 0:
                return 1;
            default:
                return indexA - indexB
        }
    }).map(([key, filterEntries]) => (
        {
            filter_type: key.replace("_", " "),
            entries: filterEntries.map((entry) => ({
                label: entry.key,
                count: entry.doc_count
            }))
        }
    )) : null;

    return { filters, error };
}

export default useFilters;
