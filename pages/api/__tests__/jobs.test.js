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
})
