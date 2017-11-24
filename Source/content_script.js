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

            text = text.replace(/Web development/, 'Butt stuff');
            text = text.replace(/web development/, 'butt stuff');

            text = text.replace(/web dev/, 'butt stuff');
            text = text.replace(/Web dev/, 'Butt stuff');

            text = text.replace(/web 2.0/, 'butt stuff 2.0');
            text = text.replace(/Web 2.0/, 'Butt stuff 2.0');

            node.nodeValue = text;
        }
    }
}
