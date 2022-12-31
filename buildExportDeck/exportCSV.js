export function Download (data) {

//	// Creating a Blob for having a csv file format
//	// and passing the data with type
//	const blob = new Blob([data], { type: 'text/csv' });
//
//	// Creating an object for downloading url
//	const url = window.URL.createObjectURL(blob)
//
//	// Creating an anchor(a) tag of HTML
//	const a = document.createElement('a')
//
//	// Passing the blob downloading url
//	a.setAttribute('href', url)
//
//	// Setting the anchor tag attribute for downloading
//	// and passing the download file name
//	a.setAttribute('download', 'download.csv');
//
//	// Performing a download with click
//	a.click()
}

function MakeCSV (objArr) {

//	// Empty array for storing the values
//	const csvRows = [];
//
//	// Headers is basically a keys of an
//	// object which is id, name, and
//	// profession
//	const headers = ["image,label,item-count,item-key"];
//
//	// As for making csv format, headers
//	// must be separated by comma and
//	// pushing it into array
//	csvRows.push(headers);
//
//	// Pushing Object values into array
//	// with comma separation
//    
//    for(const o of objArr){
//        
//        console.log(o);
//        
//        let modGitImage = o.gitImage;
//        
//        if(modGitImage.match(",") != null) modGitImage = `"` + modGitImage + `"`;
//        
//        csvRows.push(modGitImage + ",,1,");
//    }
//
//	// Returning the array joining with new line
//	return csvRows.join('\n')
}

export async function Get(objArr) {

//	const csvdata = MakeCSV(objArr);
//	Download(csvdata);
}

// Getting element by id and adding
// eventlistener to listen everytime
// button get pressed
