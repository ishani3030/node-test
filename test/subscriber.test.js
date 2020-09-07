const request = require('supertest');
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const {getArgsForSubscribers} = require('./helper/subscriber.helper');
const app = require('../app');
const expect = chai.expect;

chai.use(chaiAsPromised);
describe('functional - subscriber', () => {
  it('should substitute reference data', async () => {
    const params = getArgsForSubscribers();
    const res = await request(app).post('/subscriber/substituteReferenceData').send(params);
    expect(res.status).to.equal(200);
    
    expect(res.body.value).not.be.undefined;
    expect(res.body.value.length).greaterThan(2);
    expect(res.body.value[0].value).to.equal(params.referenceData.REF_MSISDN);
    expect(res.body.value[1].value).to.equal(params.referenceData.REF_IMSI);
  });

  it('should fail to substitute reference data without referenceData object', async () => {
    const params = getArgsForSubscribers();
    delete params.referenceData;
    const res = await request(app).post('/subscriber/substituteReferenceData').send(params);
    
    expect(res.status).to.equal(400);  
  });
});