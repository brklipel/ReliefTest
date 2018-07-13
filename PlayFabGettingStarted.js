var GetLeaderboardCallback = function (result, error) {
    if (result !== null) {
        document.getElementById("resultOutput").innerHTML = result.status;
    } else if (error !== null) {
        document.getElementById("resultOutput").innerHTML =
            "Something went wrong with your first API call.\n" +
            "Here's some debug information:\n" +
            PlayFab.GenerateErrorReport(error);
    }
}

function DoExampleGetLeaderboard(){
    PlayFab.settings.titleId = document.getElementById("titleId").value;
    var getLeaderboardRequest = {
		StatisticName: "score",
		StartPosition: 0,
		MaxResultsCount: 20
    };

    PlayFabServerSDK.GetLeaderboard(getLeaderboardRequest, GetLeaderboardCallback);
}
