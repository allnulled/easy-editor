casper.options.clientScripts.push("test/e2e/js/jquery.1.12.4.min.js");

casper.test.begin("The client has internet", {
    setUp: function(test) {},
    tearDown: function(test) {},
    test: function(test) {
        casper.start("http://www.example.com");
        casper.then(function() {
            test.assertTitle("Example Domain");
            var dom = this.evaluate(function() {
                return {
                    titles: $("h1").length,
                    paragraphs: $("p").length,
                    links: $("a").length
                };
            });
            test.assert(dom.titles === 1, "There is 1 title");
            test.assert(dom.paragraphs === 2, "There are 2 paragraphs");
            test.assert(dom.links === 1, "There is 1 link");
        });
        casper.run(function() {
            test.done();
        });
    }
});

