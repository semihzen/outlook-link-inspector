Office.onReady(info => {
  console.log(" Office.onReady has begin:", info);
  if (info.host === Office.HostType.Outlook) {
    console.log(" Outlook host detected");

    Office.context.mailbox.item.body.getAsync("html", { asyncContext: null }, function (result) {
      if (result.status === Office.AsyncResultStatus.Succeeded) {
        const htmlContent = result.value;
        const linkRegex = /<a\s+(?:[^>]*?\s+)?href=(["'])(.*?)\1/gi;
        const links = [];
        let match;

        while ((match = linkRegex.exec(htmlContent)) !== null) {
          links.push(match[2]);
        }

        const container = document.getElementById("linkContainer");
        container.innerHTML = "";

        if (links.length === 0) {
          container.innerText = "No links found in this email.";
        } else {
          links.forEach(link => {
            const linkBox = document.createElement("div");
            linkBox.className = "link-box";

            const linkEl = document.createElement("a");
            linkEl.href = "#";
            linkEl.textContent = link;
            linkEl.className = "link-text";
            linkEl.title = "Click to open confirmation dialog";
            linkEl.onclick = (e) => {
              e.preventDefault();
              openConfirmationPopup(link);
            };

            linkBox.appendChild(linkEl);
            container.appendChild(linkBox);
          });
        }
      } else {
        console.error(" Could not load email body:", result.error);
      }
    });
  }
});

function openConfirmationPopup(url) {
  window.open(`https://localhost:3000/popup.html?url=${encodeURIComponent(url)}`, "LinkConfirm", "width=440,height=400");
}
