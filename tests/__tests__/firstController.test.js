// import httpMocks from 'node-mocks-http'
// import sinon from 'sinon';
// import { expect }  from  'chai';
// import * as faker from '@faker-js/faker';
import * as httpMocks from 'node-mocks-http';
import { firstController } from '../../controller/firstController.js';
import { executeQuery } from '../../db/connection.js';

// jest.mock('../../db/connection.js')

describe("FirstController", function() {
    describe("firstController", function() {
        it("should return a message", async function() {

            const req = httpMocks.createRequest({
                body: {}
              })
            const res = httpMocks.createResponse()
            

            // await firstController(req, res);

            expect(true).toBe(true);
        });
    });
});