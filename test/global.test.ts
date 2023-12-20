import chai from 'chai';
import supertest from "supertest";
import { app } from '../app';


const expect = chai.expect;

describe('Test router', () => {

  it('should return no endpoint', async () => {

    const expectedResponse = { 
        success: "false",
        message: `Cette route n'existe pas.`
    };

    const response = await supertest(app)
      .post("/badEndpoint");
    
    expect(response.status).to.equal(400);
    expect(response.body).to.deep.equal(expectedResponse);
  });

});
