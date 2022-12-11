var guesses;
var guesses2;
var answers;
var xdd;

function editDistance(w1, w2) {
	var dp = []; //edit distance between prefixes of i,j lengths
	for (var i=0; i<=w1.length; i++) {
		dp.push([]);
	}
	for (var i=0; i<=w1.length; i++) {
		dp[i].push(i);
	}
	for (var i=1; i<=w2.length; i++) {
		dp[0].push(i);
	}
	for (var i=1; i<=w1.length; i++) {
		for (var j=1; j<=w2.length; j++) {
			if (w1[i-1]==w2[j-1]) {
				dp[i].push(dp[i-1][j-1]);
			} else {
				dp[i].push(1+Math.min(dp[i-1][j],dp[i][j-1],dp[i-1][j-1]));
			}
		}
	}
	return dp[w1.length][w2.length];
}

function mulberry32(a) {
    return function() {
      var t = a += 0x6D2B79F5;
      t = Math.imul(t ^ t >>> 15, t | 1);
      t ^= t + Math.imul(t ^ t >>> 7, t | 61);
      return ((t ^ t >>> 14) >>> 0) / 4294967296;
    }
}

function init() {
	guesses = JSON.parse(list);
	guesses2 = JSON.parse(list2);
	answers = JSON.parse(list3);
	var dt = new Date();
	var xd = dt.getUTCFullYear()*400+dt.getUTCMonth()*40+dt.getUTCDate();
	xdd = mulberry32(xd)();
}

function guess(w) {
	var word = w.toLowerCase();
	var answer = guesses.dictionary[Math.floor(xdd*guesses.dictionary.length)];
	if (word.length<4) {
		document.getElementById("yes").innerHTML = "too short";
		return;
	}
	if (!guesses.dictionary.includes(word)) {
		document.getElementById("yes").innerHTML = "not a word";
	} else {
		var dist = editDistance(word,answer);
		if (dist!=0) {
			document.getElementById("yes").innerHTML = dist;
		} else {
			document.getElementById("yes").innerHTML = "good jobe";
		}
	}
}