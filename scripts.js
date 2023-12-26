const button = document.querySelector(".btn-download");

function tableToCSV() {
  // Variable to store the final csv data
  var csv_data = [];

  // Get each row data
  var rows = document.getElementsByTagName("tr");
  for (var i = 0; i < rows.length; i++) {
    // Get each column data
    var cols = rows[i].querySelectorAll("td,th");

    // Stores each csv row data
    var csvrow = [];
    for (var j = 0; j < cols.length; j++) {
      // Get the text data of each cell
      // of a row and push it to csvrow
      csvrow.push(cols[j].innerHTML);
    }

    // Combine each column value with comma
    csv_data.push(csvrow.join(","));
  }

  // Combine each row data with new line character
  csv_data = csv_data.join("\n");

  // Call this function to download csv file
  downloadCSVFile(csv_data);
}

function downloadCSVFile(csv_data) {
  // Create CSV file object and feed
  // our csv_data into it
  let CSVFile = new Blob([csv_data], {
    type: "text/csv",
  });

  console.log(CSVFile);

  // Create to temporary link to initiate
  // download process
  var temp_link = document.createElement("a");

  // Download csv file
  temp_link.download = "GfG.csv";
  var url = window.URL.createObjectURL(CSVFile);
  temp_link.href = url;

  // This link should not be displayed
  document.body.appendChild(temp_link);

  // Automatically click the link to
  // trigger download
  console.log(temp_link.href);
  temp_link.click();
  document.body.removeChild(temp_link);
}

button.addEventListener("click", tableToCSV);
