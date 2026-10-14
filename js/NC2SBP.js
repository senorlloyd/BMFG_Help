const dropArea = document.getElementById('dropArea');
const fileInput = document.getElementById('fileInput');

// Click to open file dialog
dropArea.addEventListener('click', () => fileInput.click());

// Highlight on drag
['dragenter', 'dragover'].forEach(event => {
dropArea.addEventListener(event, e => {
e.preventDefault();
	e.stopPropagation();
	dropArea.classList.add('hover');
  });
});

['dragleave', 'drop'].forEach(event => {
  dropArea.addEventListener(event, e => {
	e.preventDefault();
	e.stopPropagation();
	dropArea.classList.remove('hover');
  });
});

// Handle file drop
dropArea.addEventListener('drop', e => {
  const files = e.dataTransfer.files;
  if (files.length) {
	fileInput.files = files;
  }
  
  const rpm_Selector = document.getElementsByClassName("rpm");
  const downloadButton = document.getElementById("processBtn");
  Array.from(rpm_Selector).forEach((element) => element.style.display = "inline");
  downloadButton.style.display = "inline";
  
	const gcode = e.target.result;

	const prependLines = [
	  "SO,1,1\t\t\t\t\t' Turn on router",
	  `M3 S${rpm}\t\t\t\t' Set spindle speed`,
	  "PAUSE 2\t\t\t\t' Give router time to reach cutting rpm"
	].join("\n");

	const modified = prependLines + "\n" + gcode;

	const blob = new Blob([modified], {type: "text/plain"});
	const link = document.createElement("a");
	link.href = URL.createObjectURL(blob);
	link.download = file.name.replace(/\.[^/.]+$/, "") + ".sbp";
	link.click();

  reader.readAsText(file);
});