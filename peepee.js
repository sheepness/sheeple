var guesses;
var guesses2;
var answers;
var answer = "sheep";
function editDistance(w1, w2) {
	var dp = []; //edit distance between prefixes of i,j lengths
	for (var i=0; i<=w1.length; i++) {
		dp.push([]);
	}
	for (var i=0; i<=w1.length; i++) {
		dp[i].push(0);
	}
	for (var i=1; i<=w2.length; i++) {
		dp[0].push(0);
	}
	for (var i=1; i<=w1.length; i++) {
		for (var j=1; j<=w2.length; j++) {
			if (w1[i-1]==w2[j-1]) {
				dp[i].push(dp[i-1][j-1]);
			} else {
				dp[i].push(1+min(min(dp[i-1][j],dp[i][j-1]),dp[i-1][j-1]));
			}
		}
	}
	return dp[w1.length][w2.length];
}

function init() {
	console.log("hii");
	guesses = JSON.parse(list);
	guesses2 = JSON.parse(list2);
	answers = JSON.parse(list3);
	console.log(guess("sheep"));
	console.log(guess("fuck"));
	console.log(guess("baa"));
	console.log(guess("asdf"));
}

function guess(word) {
	console.log(guesses.includes(word));
}