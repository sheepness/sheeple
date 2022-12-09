import guesses from './guesses.json' assert { type: 'JSON' };
import guesses2 from './guesses us.json' assert { type: 'JSON' };
import answers from './answers.json' assert { type: 'JSON' };

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

function guess(word) {

}

function init() {
	console.log(guesses.)
}