(() => {
  console.log("=== LAST DOS DUE PATIENTS ===");

  const doc = document;
  const header = doc.querySelector('th[data-field="lastDos"]');

  if (!header) {
    console.error("Last DOS column not found.");
    return;
  }

  const columnIndex = Number(header.getAttribute("data-index"));
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const cutoff = new Date(today);
  cutoff.setDate(cutoff.getDate() - 28);

  const duePatients = [];

  doc.querySelectorAll("tr.k-master-row").forEach((row, i) => {
    const cells = row.querySelectorAll("td.k-table-td");
    const dosCell = cells[columnIndex];

    if (!dosCell) {
      console.warn("Could not find Last DOS cell for row", i + 1);
      return;
    }

    const dosText = dosCell.innerText.trim().replace(/\s+/g, " ");
    const dateMatch = dosText.match(/\b(\d{1,2})\/(\d{1,2})\/(\d{4})\b/);

    let reason = "";
    let ageDays = "";

    if (!dosText) {
      reason = "Blank Last DOS";
    } else if (!dateMatch) {
      reason = "Could not parse Last DOS";
    } else {
      const [, month, day, year] = dateMatch;
      const dosDate = new Date(Number(year), Number(month) - 1, Number(day));

      dosDate.setHours(0, 0, 0, 0);

      // Reject invalid calendar dates.
      if (
        dosDate.getFullYear() !== Number(year) ||
        dosDate.getMonth() !== Number(month) - 1 ||
        dosDate.getDate() !== Number(day)
      ) {
        console.warn("Invalid DOS date in row", i + 1, dosText);
        return;
      }

      ageDays = Math.floor((today.getTime() - dosDate.getTime()) / 86400000);

      if (dosDate > cutoff) return;

      reason = `${ageDays} days since Last DOS`;
    }

    // Log the entire row for identification without assuming
    // which other column contains the patient's name.
    duePatients.push({
      row: i + 1,
      patientRow: row.innerText.trim().replace(/\s+/g, " "),
      lastDOS: dosText || "(blank)",
      ageDays,
      reason,
    });
  });

  console.log("Date checked:", today.toLocaleDateString());
  console.log("28-day cutoff:", cutoff.toLocaleDateString());
  console.log("Due/review patients:", duePatients.length);

  console.table(duePatients);
  console.log("Full results:", duePatients);
  console.log("=== END LAST DOS CHECK ===");
})();
