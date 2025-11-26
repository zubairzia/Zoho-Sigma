const resultsDiv = document.getElementById("results");
let currentLeadId = null;

ZOHO.embeddedApp.on("PageLoad", async function(data) {
    if (data.Entity !== "Leads") {
        resultsDiv.textContent = "This widget works only on Lead records.";
        return;
    }

    currentLeadId = data.EntityId;          // <─ we now have the ID
    console.log("Current Lead ID:", currentLeadId);
    resultsDiv.textContent = currentLeadId;

    /* =====  fetch the lead  ===== */
    const resp = await ZOHO.CRM.API.getRecord({
        Entity: "Leads",
        RecordID: currentLeadId
    });

    const lead = resp.data[0];              // <─ actual record
    console.log("Lead object:", lead);
    resultsDiv.textContent += `  |  Name: ${lead.Full_Name || lead.First_Name}`;
});

ZOHO.embeddedApp.init();
