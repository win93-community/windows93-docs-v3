# Versioning reference
Versioning in Windows 93 v3 is a bit strange. Rather than having versions, the server responds with timestamps.  
Because of this, the community has built a versioning system around these timestamps.

<script>
(async function generateTables() {
    const url = "https://windows93.net/timestamps.json";

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        // for localhost
        /*
        const data = {
            "/c/users/windows93": 1772300457000,
            "/c/libs": 1769581518000,
            "/bios": 1772284689608.7043,
            "/42": 1772299555860.2617,
            "/extra": 1772299555860.2617
        };*/

        const commonData = {
            "c3.0.5": [
                data["/c/users/windows93"],
                data["/c/libs"],
                data["/bios"],
                data["/42"]
            ]
        };

        let currentVersion = "Unknown";
        for (const [version, timestamps] of Object.entries(commonData)) {
            if (
                timestamps.includes(data["/c/users/windows93"]) &&
                timestamps.includes(data["/c/libs"]) &&
                timestamps.includes(data["/bios"]) &&
                timestamps.includes(data["/42"])
            ) {
                currentVersion = version;
                break;
            }
        }

        const mainElement = document.querySelector("#main");
        if (mainElement) {
            const currentVersionElement = document.createElement("h3");
            currentVersionElement.textContent = `CURRENT VERSION: ${currentVersion}`;
            mainElement.appendChild(currentVersionElement);
        } else {
            console.error("#main element not found in the document.");
        }

        const table1 = document.createElement("table");
        table1.border = "1";

        const headerRow1 = table1.insertRow();
        const folderHeader1 = headerRow1.insertCell();
        folderHeader1.textContent = "Folder Name";
        const timeHeader1 = headerRow1.insertCell();
        timeHeader1.textContent = "Server Modification Unix Time";

        const folderNames = {
            "/c/users/windows93": "Default User",
            "/c/libs": "Libraries",
            "/bios": "Bios",
            "/42": "Sys42"
        };

        for (const [folder, timestamp] of Object.entries(data)) {
            const row = table1.insertRow();
            const folderCell = row.insertCell();
            folderCell.textContent = folderNames[folder] || folder; 
            const timeCell = row.insertCell();
            timeCell.textContent = timestamp;
        }

        if (mainElement) {
            mainElement.appendChild(table1);
        } else {
            console.error("#main element not found in the document.");
        }

        if (mainElement) {
            const commonVersionHeading = document.createElement("h3");
            commonVersionHeading.textContent = "Common Version";
            mainElement.appendChild(commonVersionHeading);
        }

        const table2 = document.createElement("table");
        table2.border = "1";

        const headerRow2 = table2.insertRow();
        const versionHeader = headerRow2.insertCell();
        versionHeader.textContent = "Common Version";
        const timestampsHeader = headerRow2.insertCell();
        timestampsHeader.textContent = "Timestamps";

        for (const [version, timestamps] of Object.entries(commonData)) {
            const row = table2.insertRow();
            const versionCell = row.insertCell();
            versionCell.textContent = version;
            const timestampsCell = row.insertCell();

            // Create a bulleted list for the timestamps
            const ul = document.createElement("ul");
            timestamps.forEach(timestamp => {
                const li = document.createElement("li");
                li.textContent = timestamp;
                ul.appendChild(li);
            });
            timestampsCell.appendChild(ul);
        }

        // Append the second table to the #main element
        if (mainElement) {
            mainElement.appendChild(table2);
        } else {
            console.error("#main element not found in the document.");
        }
    } catch (error) {
        console.error("Failed to fetch or process the data:", error);

        // Display error message in the #main element
        const mainElement = document.querySelector("#main");
        if (mainElement) {
            const errorMessage = document.createElement("p");
            errorMessage.textContent = "Failed to load timestamps. Please try again later.";
            errorMessage.style.color = "red";
            mainElement.appendChild(errorMessage);
        } else {
            console.error("#main element not found in the document.");
        }
    }
})();
</script>

