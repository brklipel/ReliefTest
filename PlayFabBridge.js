var GetLeaderboardCallback = function (result, error) {
    if (result !== null) 
	{
		var wrapper = document.getElementById("myHTMLWrapper");
		var myHTML = '';
		
		var players = {};
		players = result.data;
		
		var __string = "";
			
		__string += "<tr><th>Position</th><th>Name</th><th>Score</th></tr>"
		var i = 0;
		for(i = 0; i < players.Leaderboard.length; i++)
		{
			var __player = players.Leaderboard[i];
			
			__string += "<tr>" + "<td>" + (__player.Position + 1) + "</td>" + "<td>" + __player.DisplayName + "</td>" + "<td>" + __player.StatValue + "</td></tr>";			
		}
		
		var d = new Date();
		var n = d.getTime();

		myHTML += '<span class="test"><div align="center"></div><br/><table border="1" width="90%" align="center">' + __string +'</table></span><br/><br/>';		
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