const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();
const expect = chai.expect();
const app = require('../../app');

chai.use(chaiHttp)

describe('Basic test', () => {
    it('should do nothing', function(done){
        chai.request(app)
            .get('/')
            .end(function (err, res) {
                res.should.have.status(404)
                done()
            })
    })
    it('should get clients', function(done){
        chai.request(app)
            .get('/api/clients')
            .end(function (err, res) {
                res.body.should.be.a('array')
                done()
            })
    })
})
