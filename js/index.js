var dictionary = ["h", "he", "li", "be", "b", "c", "n", "o", "f", "ne", "na", "mg", "al", "si", "p", "s", "cl", "ar", "k", "ca", "sc", "ti", "v", "cr", "mn", "fe", "co", "ni", "cu", "zn", "ga", "ge", "as", "se", "br", "kr", "rb", "sr", "y", "zr", "nb", "mo", "tc" ,"ru", "rh", "pd", "ag", "cd", "in", "sn", "sb", "te", "i", "xe", "cs", "ba", "la", "ce", "pr", "nd", "pm", "sm", "eu", "gd", "tb", "dy", "ho", "er", "tm", "yb", "lu", "hf", "ta", "w", "re", "os", "ir", "pt", "au", "hg", "tl", "pb", "bi", "po", "at", "rn", "fr", "ra", "ac", "th", "pa", "u", "np", "pu", "am", "cm", "bk", "cf", "es", "fm", "md", "no", "lr", "rf", "db", "sg", "bh", "hs", "mt", "ds", "rg", "cn", "uut", "fi", "uup", "lv", "uus", "yyo"];

var cards = ["../img/cards/1.jpg","../img/cards/2.jpg","../img/cards/3.jpg","../img/cards/4.jpg","../img/cards/5.jpg","../img/cards/6.jpg","../img/cards/7.jpg","../img/cards/8.jpg","../img/cards/9.jpg","../img/cards/10.jpg","../img/cards/11.jpg","../img/cards/12.jpg","../img/cards/13.jpg","../img/cards/14.jpg","../img/cards/15.jpg","../img/cards/16.jpg","../img/cards/17.jpg","../img/cards/18.jpg","../img/cards/19.jpg","../img/cards/20.jpg","../img/cards/21.jpg","../img/cards/22.jpg","../img/cards/23.jpg","../img/cards/24.jpg","../img/cards/25.jpg","../img/cards/26.jpg","../img/cards/27.jpg","../img/cards/28.jpg","../img/cards/29.jpg","../img/cards/30.jpg","../img/cards/31.jpg","../img/cards/32.jpg","../img/cards/33.jpg","../img/cards/34.jpg","../img/cards/35.jpg","../img/cards/36.jpg","../img/cards/37.jpg","../img/cards/38.jpg","../img/cards/39.jpg","../img/cards/40.jpg","../img/cards/41.jpg","../img/cards/42.jpg","../img/cards/43.jpg","../img/cards/44.jpg","../img/cards/45.jpg","../img/cards/46.jpg","../img/cards/47.jpg","../img/cards/48.jpg","../img/cards/49.jpg","../img/cards/50.jpg","../img/cards/51.jpg","../img/cards/52.jpg","../img/cards/53.jpg","../img/cards/54.jpg","../img/cards/55.jpg","../img/cards/56.jpg","../img/cards/57.jpg","../img/cards/58.jpg","../img/cards/59.jpg","../img/cards/60.jpg","../img/cards/61.jpg","../img/cards/62.jpg","../img/cards/63.jpg","../img/cards/64.jpg","../img/cards/65.jpg","../img/cards/66.jpg","../img/cards/67.jpg","../img/cards/68.jpg","../img/cards/69.jpg","../img/cards/70.jpg","../img/cards/71.jpg","../img/cards/72.jpg","../img/cards/73.jpg","../img/cards/74.jpg","../img/cards/75.jpg","../img/cards/76.jpg","../img/cards/77.jpg","../img/cards/78.jpg","../img/cards/79.jpg","../img/cards/80.jpg","../img/cards/81.jpg","../img/cards/82.jpg","../img/cards/83.jpg","../img/cards/84.jpg","../img/cards/85.jpg","../img/cards/86.jpg","../img/cards/87.jpg","../img/cards/88.jpg","../img/cards/89.jpg","../img/cards/90.jpg","../img/cards/91.jpg","../img/cards/92.jpg","../img/cards/93.jpg","../img/cards/94.jpg","../img/cards/95.jpg","../img/cards/96.jpg","../img/cards/97.jpg","../img/cards/98.jpg","../img/cards/99.jpg","../img/cards/100.jpg","../img/cards/101.jpg","../img/cards/102.jpg","../img/cards/103.jpg","../img/cards/104.jpg","../img/cards/105.jpg","../img/cards/106.jpg","../img/cards/107.jpg","../img/cards/108.jpg","../img/cards/109.jpg","../img/cards/110.jpg","../img/cards/111.jpg","../img/cards/112.jpg","../img/cards/113.jpg","../img/cards/114.jpg","../img/cards/115.jpg","../img/cards/116.jpg","../img/cards/117.jpg","../img/cards/118.jpg"];

var resultarray;

function checkWord()
{
    resultarray = [];
    wordBreak($("#input-string").val().toLowerCase()); 
} 

function printResult(found) 
{
    "use strict";
    $("#resultImages").html('');
    $("#resultText").html('');
    
    if(found){
        
        $("#resultImages").html('<div id="resultImagesRow" class="row">');
        for(var p = 0; p < resultarray.length; p++)
        {
         $("#resultText").append(dictionary[resultarray[p]].toUpperCase() + " ");
            $("#resultImagesRow").append('<div class="col"><img src="' + cards[resultarray[p]] + '" alt="Element" style="width:70px;height:70px;">');
        };
        $("#resultImages").append('</div>');
    }else{
        $("#resultText").append('<h3>Sorry, that word cant be built using the periodic elements</h3>');
    }
}

function wordBreak(s) 
{
    var hasFound = [], len = s.length, i, j;
    hasFound[0] = true;
    
    if(dictionary.indexOf(s) != -1)
    {
        resultarray.push(dictionary.indexOf(s));
        printResult(true);
       return true;
    }
    
    for (i = 1; i <= len; i++) 
    {
        for (j = 0; j < i; j++) 
        {
            if (hasFound[j] && dictionary.indexOf(s.substring(j, i)) != -1) { resultarray.push(dictionary.indexOf(s.substring(j, i)));
                hasFound[i] = true;
                break;
            }
        }
    }
    printResult(hasFound[len]);
    return hasFound[len] === true;
};

function cleanUpArray(res)
{
    var tempArray = [];
    var index = 0;
    while(index < res.length)
    {
    if(dictionary[res[index]].length == 1)
        {
            index = index + 1;
        }else
        {
             tempArray.push(res[index]);
            index = index + 2;    
        }
    }
    return tempArray;
}