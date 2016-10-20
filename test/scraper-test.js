'use strict';
var linkedinScraper = require('../'),
    should = require('should');

describe('<LinkedIn Scraper>', function() {
    this.timeout(10000);

    var url = 'https://br.linkedin.com/in/danieljoppi';

    function validateProfile(profile) {
        should(profile).be.ok();
        should(profile).have.property('name', 'Daniel Henrique Joppi');
        should(profile).have.property('headline', 'Development Manager at Avalara');
        should(profile).have.property('location', 'Florianópolis Area, Brazil');
        should(profile).have.property('summary').be.ok();
        should(profile).have.property('industry').be.equal('Program Development');
        should(profile).have.property('languages').length(5);
        should(profile).have.property('skills').length(49);
        should(profile).have.property('currentPositions').length(0);
        should(profile).have.property('pastPositions').length(0);
        should(profile).have.property('educations').length(1);
        should(profile).have.property('positions').length(10);
        //should(profile).have.property('honors').length(0);
        should(profile).have.property('projects').length(0);
        should(profile).have.property('publicProfileUrl', url);
    }

    it('get profile with callback', function(done) {
        linkedinScraper(url, function (err, profile) {
            //console.log(JSON.stringify(profile, null, '   '));

            should(err).be.not.ok();

            validateProfile(profile);
            return done();
        });
    });

    it('get profile with promise', function(done) {
        linkedinScraper(url).then(function (profile) {
            validateProfile(profile);
            return done();
        });
    });
});
