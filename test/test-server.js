const chai = require('chai');
const chaiHttp = require('chai-http');
const faker = require('faker');
const mongoose = require('mongoose');

const should = chai.should();





describe('index page', function () {
    it('exists', function (done) {
        chai.request(app)
            .get('/')
            .end(function (err, res) {
                res.should.have.status(200);
                res.should.be.html;
                done();
            });
    });
});