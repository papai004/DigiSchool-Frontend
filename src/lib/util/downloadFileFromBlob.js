const downloadFileFromBlob = (blobData) => {
  try {
    // * Converting the BLOB into an Object URL
    const url = window.URL.createObjectURL(blobData);
    // Creating a link to be clicked programatically
    const link = document.createElement("a");
    link.href = url;
    // * Assigning the download properties
    link.setAttribute("download", "student_data.csv");
    // * Appending the anchor tag
    document.body.appendChild(link);
    // * Programtically clicking the anchor
    link.click();
    // * Removing the anchor tag as the file is downloaded
    document.body.removeChild(link);
  } catch (err) {
    console.log(err);
  }
};

export default downloadFileFromBlob;
