casper.options.clientScripts.push("test/e2e/js/jquery.1.12.4.min.js");

const settings = {
    URL: "http://localhost:8700/app"
};

casper.test.begin("Testing the application (source, custom and output + memory)", {
    setUp: function(test) {},
    tearDown: function(test) {},
    test: function(test) {
        casper.start(settings.URL);
        casper.then(function() {
            this.click(".easy-editor-instance .tabs .tab.source-tab");
            this.click(".easy-editor-instance .panels .panel.source-panel");
            this.evaluate(function() {
                $(".easy-editor-instance .panels .panel.source-panel .source-editor").val("");
            });
            this.sendKeys(".easy-editor-instance .panels .panel.source-panel .source-editor", 'Language = "Hello!" {return "Goodbye!";}');
            var sourceValue = this.evaluate(function() {
                return $(".easy-editor-instance .panels .panel.source-panel .source-editor").val();
            });
            this.click(".easy-editor-instance .tabs .tab.custom-tab");
            this.click(".easy-editor-instance .panels .panel.custom-panel");
            this.evaluate(function() {
                $(".easy-editor-instance .panels .panel.custom-panel .custom-editor").val("");
            });
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
            test.assert(result.output === "Goodbye!", "The transpilation process works great");
        });
        casper.thenOpen(settings.URL, function() {
            this.click(".easy-editor-instance .tabs .tab.source-tab");
            this.click(".easy-editor-instance .panels .panel.source-panel");
            var sourceValue = this.evaluate(function() {
                return $(".easy-editor-instance .panels .panel.source-panel .source-editor").val();
            });
            this.click(".easy-editor-instance .tabs .tab.custom-tab");
            this.click(".easy-editor-instance .panels .panel.custom-panel");
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
            this.echo("result");
            this.echo(result.source);
            test.assert(result.source === 'Language = "Hello!" {return "Goodbye!";}', "The source is remembered.");
            test.assert(result.custom === "Hello!", "The custom is remembered.");
            test.assert(result.output === "Goodbye!", "The output is remembered.");
        });
        casper.run(function() {
            test.done();
        });
    }
});


