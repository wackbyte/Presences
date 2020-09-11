const presence = new Presence({
    clientId: "749977202275123362",
});

presence.on("UpdateData", async () => {
    browsingStamp = Math.floor(Date.now() / 1000);
    const presenceData = {
        largeImageKey: "radiot"
    };
    if (document.location.hostname == "www.radio-suomi.com") {
        if (document.location.pathname == "/") {
            presenceData.startTimestamp = browsingStamp;
            presenceData.details = "🌐 Etusivulla";
        }
        else if (presenceData.details = document.querySelector(".song-name")) {
            presenceData.startTimestamp = browsingStamp;
            presenceData.details = `📻 ${document.querySelector(".mdc-typography--display1").textContent}`;
            presenceData.state = `🎵 ${document.querySelector(".song-name").textContent}`;
        } else {
            presenceData.startTimestamp = browsingStamp;
            presenceData.details = `📻 ${document.querySelector(".mdc-typography--display1").textContent}`;
            presenceData.state = `🎵 Ei saatavilla`;
        }
    }
    if (presenceData.details == null) {
        presence.setTrayTitle();
        presence.setActivity();
    }
    else {
        presence.setActivity(presenceData);
    }
});