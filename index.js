const fs = require('fs');
const request = require('request');

const download = (uri, filename, callback) => {
  request.head(uri, function(err, res, body){
    request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
  });
};

const downloadAssets = (folder_url, fromIndex, maxIndex, assetsExt) => {
  for (let i = fromIndex; i <= maxIndex; i++) {
    const fileName = i + '.' + assetsExt;
    download(folder_url + fileName, fileName, () => {
      console.log(fileName);
    })
  }
}

downloadAssets("https://digidaigaku.com/image/", 751, 800, "png");