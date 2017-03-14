let chai = require('chai');
let expect = require('chai').expect;
let spies = require('chai-spies');

chai.use(spies);

describe('Page model', function() {
    describe('Page Schema', function() {
        it('requires a title');
        it('status is either open or closed');
        it('tags are an array');
    });
    describe('Page Config', function() {
        describe('route', function() {
            it('returns the url_name prepended by "/wiki/"');
        });
        describe('BeforeValidate', function() {
            it('returns an alphanumeric title');
            it('returns an underscored title');
        });
        describe('findByTag', function() {
            it('returns an array of pages with the same tag');
            it('it doesnt return pages without the tag');

        });
        describe('findSimilar', function() {
            it('never gets itself');
            it('gets other pages with any common tags');
            it('does not get other pages without any common tags');
        });


    })
});
