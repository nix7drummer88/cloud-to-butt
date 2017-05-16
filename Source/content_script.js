/*
    Sources used to make this code:
        https://9to5google.com/2015/06/14/how-to-make-a-chrome-extensions/
        https://github.com/panicsteve/cloud-to-butt

    Thank you to these authors!
*/

var elements = document.getElementsByTagName('*');

for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];

        if (node.nodeType === 3) {
            var text = node.nodeValue;

            text = text.replace(/Trump Administration/, 'Clinton Administration');
            text = text.replace(/Donald Trump/, 'Hillary Clinton');
            text = text.replace(/Trump/, 'Clinton');
            text = text.replace(/Melania Trump/, 'Bill Clinton');
            text = text.replace(/Melania/, 'Bill');
            text = text.replace(/Ivanka Trump/, 'Chelsea Clinton');
            text = text.replace(/Ivanka/, 'Chelsea');
            text = text.replace(/Barron Trump/, 'Chelsea Clinton');
            text = text.replace(/Barron/, 'Chelsea');

            node.nodeValue = text;
        }
    }
}
