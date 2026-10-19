NOVOCLINICAL LAST DOS DUE PATIENTS — CODE DESCRIPTION

PURPOSE

This JavaScript code checks the Last DOS column in the NovoClinical patient table and identifies patients whose Last DOS date is 28 days old or older. It also lists patients with blank or unreadable Last DOS values for review.

HOW TO USE
1. Open the NovoClinical patient page.
2. Press F12 to open Chrome Developer Tools.
3. Select the Console tab.
4. Paste the complete JavaScript code into the console.
5. Press Enter to run it.
6. Review the results displayed in the console.
WHAT THE CODE DOES
1. Finds the Last DOS column using the selector th[data-field="lastDos"].
2. Reads the column index to identify the Last DOS cell in each patient row.
3. Gets today's date and calculates the date 28 days earlier.
4. Checks each patient row currently displayed in the table.
5. Reads and validates the Last DOS date.
6. Calculates the number of days since the Last DOS date.
7. Includes patients whose Last DOS is 28 days old or older.
8. Includes blank or unreadable Last DOS values for review.
9. Displays the matching results in a console table.
UNDERSTANDING THE RESULTS
- row: The patient's position in the currently displayed table.
- patientRow: The text from the entire patient row.
- lastDOS: The Last DOS value found in the cell.
- ageDays: The number of days since the Last DOS date.
- reason: Explains why the patient was included in the results.
CONSOLE MESSAGES
- LAST DOS DUE PATIENTS: The script has started.
- Last DOS column not found: The expected column could not be located.
- Could not find Last DOS cell: The script could not find the corresponding cell in a row.
- Invalid DOS date: The date does not represent a valid calendar date.
- Date checked: The date used for the calculation.
- 28-day cutoff: The date 28 days before today.
- Due/review patients: The number of patients included in the results.
- console.table(duePatients): Displays the matching patients in a readable table.
- END LAST DOS CHECK: The script has finished.
IMPORTANT RULES
- Last DOS dates 28 days old or older are included.
- Blank Last DOS values are included for review.
- Unreadable dates are included for review.
- Invalid calendar dates are skipped.
- Dates newer than the 28-day cutoff are excluded.
- Future dates are excluded by the cutoff comparison.
- Only patient rows currently rendered in the table are checked.
IMPORTANT NOTE

This script only reads information and displays results. It does not change patient records, modify the table's appearance, or automatically schedule appointments. The results should be reviewed according to your office's scheduling guidelines.
