var GetLeaderboardCallback = function (result, error) {
    if (result !== null) 
	{
		var wrapper = document.getElementById("myHTMLWrapper");
		var myHTML = '';
		
		var players = {};
		players = result.data;
		
		var __string = "";
		
		__string += "<tr><th background="+"BarBlue.png"+">Position</th><th background="+"BarGreen.png"+">Name</th><th background="+"BarRed.png"+">Score</th></tr>"
		var i = 0;
		for(i = 0; i < players.Leaderboard.length; i++)
		{
			var __player = players.Leaderboard[i];
			
			__string += "<tr>" + "<td align="+"center"+" background="+"BarBlue.png"+">" + (__player.Position + 1) + "</td>" + "<td align="+"center"+" background="+"BarGreen.png"+">" + __player.DisplayName + "</td>" + "<td align="+"center"+" background="+"BarRed.png"+">" + __player.StatValue + "</td></tr>";			
		}
		
		myHTML += '<span class="test"><br/><div align="center"><table width="90%" align="center"><img src="Bar.png" width="89.7%">' + __string +'</table></div></span><br/><br/>';		
		wrapper.innerHTML = myHTML;			
    } 
	else if (error !== null) {
        document.getElementById("resultOutput").innerHTML =
            "Something went wrong with your first API call.\n" +
            "Here's some debug information:\n" +
            PlayFab.GenerateErrorReport(error);
    }
}

function StartLoad()
{
	DoExampleGetLeaderboard();
	
	setInterval(DoExampleGetLeaderboard(), 5000);
}

function DoExampleGetLeaderboard(){
    PlayFab.settings.titleId = "6F48";
	PlayFab.settings.developerSecretKey = "GZEIXOXTMWQXY3J9QJ9D57189JUHHO5QGPNAS4UZ348PQJOM9B";
    var getLeaderboardRequest = {
		StatisticName: "score",
		StartPosition: 0,
		MaxResultsCount: 100
    };

    PlayFabServerSDK.GetLeaderboard(getLeaderboardRequest, GetLeaderboardCallback);
}