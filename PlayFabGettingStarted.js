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
		
		myHTML += '<span class="test"><table border="1" width="90%" align="center">' + __string +'</table></span><br/><br/>';
		wrapper.innerHTML = myHTML;
    } 
	else if (error !== null) {
        document.getElementById("resultOutput").innerHTML =
            "Something went wrong with your first API call.\n" +
            "Here's some debug information:\n" +
            PlayFab.GenerateErrorReport(error);
    }
}

function DoExampleGetLeaderboard(){
    PlayFab.settings.titleId = document.getElementById("titleId").value;
	PlayFab.settings.developerSecretKey = "A61W9RSK9O3TDDBTUES7DTRBWYG3U317HJ4OB3PH51Q3IFSCB7";
    var getLeaderboardRequest = {
		StatisticName: "score",
		StartPosition: 0,
		MaxResultsCount: 100
    };

    PlayFabServerSDK.GetLeaderboard(getLeaderboardRequest, GetLeaderboardCallback);
}
