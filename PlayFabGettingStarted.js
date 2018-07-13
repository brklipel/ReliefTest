function DoExampleLoginWithCustomID(){
    PlayFab.settings.titleId = document.getElementById("titleId").value;
    var loginRequest = {
        // Currently, you need to look up the correct format for this object in the API-docs:
        // https://api.playfab.com/documentation/Client/method/LoginWithCustomID
        TitleId: PlayFab.settings.titleId,
        CustomId: document.getElementById("customId").value,
        CreateAccount: true
    };

    PlayFabClientSDK.LoginWithCustomID(loginRequest, LoginCallback);
}

var LoginCallback = function (result, error) {
    if (result !== null) {
        document.getElementById("resultOutput").innerHTML = "Congratulations, you made your first successful API call!";
    } else if (error !== null) {
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
        // Currently, you need to look up the correct format for this object in the API-docs:
        // https://api.playfab.com/documentation/Client/method/LoginWithCustomID
        //TitleId: PlayFab.settings.titleId,
		StatisticName: "score",
		StartPosition: 0,
		MaxResultsCount: 20
    };

    PlayFabServerSDK.GetLeaderboard(getLeaderboardRequest, LoginCallback);
}