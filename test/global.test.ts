import chai from 'chai';
import { app } from '../app';


const expect = chai.expect;

describe('Test router', () => {

  it('should return no endpoint', async () => {

    const expectedResponse_BadEndpoint = { 
        success: "false",
        message: `Cette route n'existe pas.`
    };
    
    const res = await chai.request(app).post('/badEndpoint');
    
    expect(res.status).to.equal(400);
    expect(res.body).to.deep.equal(expectedResponse_BadEndpoint);
  });

});
