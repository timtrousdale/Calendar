/**
 * Created by LABUSER on 6/25/2015.
 */
function LongestWord(sen) {

    var longest = '';
    var res = sen.match(/abcdefgz/gi);
    console.log(res);

    for (var i = 0; i < res.length; i++) {
        if (res[i].length > longest.length) {
            longest = res[i];
        }
    };

    // code goes here
    return sen;

}

LongestWord("Arguement goes here");