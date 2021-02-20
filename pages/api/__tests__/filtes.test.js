import { createMocks } from 'node-mocks-http';
import getFilters from "../filters";


describe("/api/filters", () => {
    test("should return a list of filters", async () => {
        const { req, res } = createMocks({
            method: "GET"
        });

        await getFilters(req, res);

        expect(res.statusCode).toBe(200);
        const data = JSON.parse(res._getData());
        expect(data).toHaveProperty('job_type')
        expect(data).toHaveProperty('department')
        expect(data).toHaveProperty('experience')
        expect(data).toHaveProperty('work_schedule')
    })
})
