let chai = require('chai');
let expect = require('chai').expect;
let spies = require('chai-spies');
let Page = require('../models').Page;


chai.use(spies);
chai.should();
chai.use(require('chai-things'));

describe('Page model', function() {
    describe('Page Schema', function() {
        it('requires a title');
        it('status is either open or closed');
        it('tags are an array');
    });
    describe('Page Config', function() {
        var page;

        beforeEach(function(){
            page = Page.build({
                title: 'Page Title',
                content: '# Page content',
                urlTitle: 'Page_Title',
                tags: ['foo', 'bar']
            })

            // console.log(page);
            // .then(() => {
            //     done();
            // })
            // .catch(done);
        });
        describe('route', function() {

            it('returns the url_name prepended by "/wiki/"', () => {
                expect(page.route).to.equal('/wiki/Page_Title');
            });
        });

        describe('renderedContent', function() {

            it('returns marked down content', () => {
                expect(page.renderedContent).to.equal('<h1 id="page-content">Page content</h1>\n');
            });
        });

        describe('findByTag', function() {
            let page;
            before(function (done) {
              page = Page.create({
                title: 'foo',
                content: 'bar',
                tags: ['foo', 'bar']
              })
              .then(function () {
                // console.log(returnedPage);
                done();
              })
              .catch(done);
            });
                        //     })
            it('returns an array of pages with the same tag', (done) => {

                var searchResults = Page.findByTag('foo');
                searchResults.then(function(results){

                        expect(results[0].title).to.equal('foo');
                        done();

                    }).catch(done);

            });
            it('it doesnt return pages without the tag', (done) => {

                var searchResults = Page.findByTag('foobar');
                searchResults.then(function(results){

                        expect(results.length).to.equal(0);
                        done();

                    }).catch(done);

            });

        });

        describe('BeforeValidate', function() {
            it('returns an alphanumeric title');
            it('returns an underscored title');
        });
        describe('findSimilar', function() {
            let page1, page2, page3;

            before(function(done){

              page1 = Page.create({
                title: 'full',
                content: 'stack',
                tags: ['full', 'stack']
              })
              .then(() => {
                  page2 = Page.create({
                    title: 'pi day',
                    content: 'I love pi(e)',
                    tags: ['apple', 'pumpkin', 'pecan']
                  })
              })
              .then(() => {
                  page3 = Page.create({
                    title: 'tree day',
                    content: 'I love trees',
                    tags: ['apple', 'maple', 'elm']
                  })
              })
              .then( () => {
                  done();
              })
              .catch(done);

            });
            it('never gets itself', (done) => {

                let p3contents;
                page3.then((page3contents) => {
                    p3contents = page3contents;
                    return page3contents.findSimilar()
                })
                .then((similarPages) => {
                    expect(similarPages).should.not.include(p3contents);
                })
                .then(() => {
                    done()
                })
                .catch(done);

            });
            it('gets other pages with any common tags', (done) => {

                page2.then((page2contents) => {
                    return page2contents.findSimilar()
                })
                .then((similarPages) => {
                    expect(similarPages[0].title).to.equal('tree day');
                })
                .then(() => {
                    done();
                })
                .catch(done);


            })
            it('does not get other pages without any common tags');
        });


    })
});
