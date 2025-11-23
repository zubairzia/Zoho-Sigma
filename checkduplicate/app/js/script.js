const resultsDiv = document.getElementById("results");
let currentLeadId = null;
ZOHO.embeddedApp.on("PageLoad", async function(data) {
    if (data.Entity !== "Leads") {
        resultsDiv.textContent = "This widget works only on Lead records.";
        return;
    }
      currentLeadId = data.EntityId; // store the Lead ID
    console.log("Current Lead ID:", currentLeadId);

    resultsDiv.textContent = data.EntityId;
   
});

ZOHO.embeddedApp.init();
