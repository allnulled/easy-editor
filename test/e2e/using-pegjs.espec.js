casper.options.clientScripts.push("test/e2e/js/jquery.1.12.4.min.js");

const settings = {
    URL: "http://localhost:8700/app"
};

casper.test.begin("The application uses PEGjs to generate a parser, and handles some input for that generated parser, and even shows us the output of that input when passed to the firstly gneerated parser. THIS IS A SPECIFICATION, DUDE.", {
    setUp: function(test) {},
    tearDown: function(test) {},
    test: function(test) {
        casper.start(settings.URL);
        casper.then(function() {
            this.click(".easy-editor-instance .tabs .tab.source-tab");
            this.click(".easy-editor-instance .panels .panel.source-panel");
            this.sendKeys(".easy-editor-instance .panels .panel.source-panel .source-editor", 'Language = "Hello!" {return "Goodbye!";}');
            var sourceValue = this.evaluate(function() {
                return $(".easy-editor-instance .panels .panel.source-panel .source-editor").val();
            });
            this.click(".easy-editor-instance .tabs .tab.custom-tab");
            this.click(".easy-editor-instance .panels .panel.custom-panel");
            this.sendKeys(".easy-editor-instance .panels .panel.custom-panel .custom-editor", 'Hello!');
            var customValue = this.evaluate(function() {
                return $(".easy-editor-instance .panels .panel.custom-panel .custom-editor").val();
            });
            this.click(".easy-editor-instance .tabs .tab.custom-tab");
            this.click(".easy-editor-instance .panels .panel.custom-panel");
            var outputValue = this.evaluate(function() {
                return $(".easy-editor-instance .panels .panel.output-panel .output-editor").val();
            });
            var result = {
                source: sourceValue,
                custom: customValue,
                output: outputValue,
            };
            test.assert(result.output === "Goodbye!", "Everything went as expected :).");
        });
        casper.run(function() {
            test.done();
        });
    }
});