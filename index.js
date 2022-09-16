const fs = require('fs');
const request = require('request');

const download = (uri, filename, callback) => {
  request.head(uri, function(err, res, body){
    request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
  });
};

const downloadAssets = (folder_url, maxIndex, assetsExt) => {
  for (let i = 1; i <= maxIndex; i++) {
    const fileName = i + '.' + assetsExt;
    download(folder_url + fileName, fileName, () => {
      console.log(fileName);
    })
  }
}

downloadAssets("https://rbbc.mypinata.cloud/ipfs/QmSm41sSAuKKpnV34LBcrc1BkJdMBHN4b9rbe9MvGCjSBi/", 10, "webp");