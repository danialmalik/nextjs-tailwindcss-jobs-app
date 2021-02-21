import { createMocks } from 'node-mocks-http';
import getJobs from "../jobs";


describe("/api/jobs", () => {
    test("should return a list of jobs", async () => {
        const { req, res } = createMocks({
            method: "GET"
        });

        await getJobs(req, res);

        expect(res.statusCode).toBe(200);
        const data = JSON.parse(res._getData());
        expect(data).toHaveProperty('jobs')
    })

    test("should return matching jobs when searched", async () =>{
        const { req, res } = createMocks({
            method: "GET",
            query: {
                keyword: "practitioner"
            }
        });

        await getJobs(req, res);

        expect(res.statusCode).toBe(200);
        const data = JSON.parse(res._getData());
        expect(data).toHaveProperty('jobs')
        for (const job of data.jobs){
            expect(JSON.stringify(job).toLowerCase()).toContain("practitioner")
        }
    })
})
