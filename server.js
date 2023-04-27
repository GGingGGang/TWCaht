const express = require('express');
const http = require('http');
const path = require('path');
const chat5 = require('./chatUtils.js');
const fs = require('fs');
const app = express();
const server = http.createServer(app);


//-----------------------------------------------------------------------------------------

// 포트 설정 app.exe에서 process.env.port를 바꿈, 기본값 3000;
const setport = process.env.PORT || 3000;


// 새로고침 주기, 기본값 5000밀리초
const setrefresh = process.env.REFRESH || 5000;


// 파일을 탐색할 디렉토리 경로, 기본값 c:/Nexon/Talesweaver/chatlog/
const defaultDirectoryPath = 'c:/Nexon/Talesweaver/chatlog/';
const directoryPath = process.env.DIRECTORY_PATH || defaultDirectoryPath;


//-----------------------------------------------------------------------------------------

let htmlFiles = []; // html 파일들을 담을 배열

fs.readdir(directoryPath, (err, files) => {
  if (err) {
    console.error('Error reading directory: ', err);
    return;
  }
  
  // html 파일만 필터링하여 배열에 추가
  htmlFiles = files.filter(file => path.extname(file) === '.html');
  
  //		 파일별 수정 시간을 가져와 최근 수정된 파일 선택
  let latestFile = null;
  let latestTime = 0;
  htmlFiles.forEach(file => {
    const filePath = path.join(directoryPath, file);
    const stats = fs.statSync(filePath);
    if (stats.mtimeMs > latestTime) {
      latestTime = stats.mtimeMs;
      latestFile = file;
    }
  });
  
  // 		최근 수정된 html 파일 출력
  console.log('Latest HTML file: ', latestFile);
});

 //		 필터 적용, #ff64ff = 경험치 획득 색, 
function filterString(str) {
  const pattern = /<font size="2" color="white">\s*\[\s*\d+\S*\s*\d+\S*\s*\d+\S*\s*\]\s*<\/font>\s*<font size="2" color="#ff64ff">.*?<\/font><\/br>/g;
  return str.replace(pattern, '');
}

//-----------------------------------------------------------------------------------------
 
function readChatLog(filePath, callback) {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, data);
    }
  });
}
app.get('/', (req, res) => {

  fs.readdir(directoryPath, (err, files) => {
    if (err) {
      console.error('Error reading directory: ', err);
      res.status(500).send('Unable to read directory');
      return;
    }

    htmlFiles = files.filter(file => path.extname(file) === '.html');

    let latestFile = null;
    let latestTime = 0;
    htmlFiles.forEach(file => {
      const filePath = path.join(directoryPath, file);
      const stats = fs.statSync(filePath);
      if (stats.mtimeMs > latestTime) {
        latestTime = stats.mtimeMs;
        latestFile = file;
      }
    });

    const filePath = path.join(directoryPath, latestFile);
 
    chat5.readChatLog(filePath, (err, data) => {
      if (err) { 
        console.log('Unable to read file: ' + err);
        res.status(500).send('Unable to read file');
      } else {
        const filteredData = filterString(data);
          res.send(`<html><head><meta http-equiv="refresh" content="${setrefresh / 1000}"></head><body>${filteredData}</body></html>`);
      }
    });
  });
});

//-----------------------------------------------------------------------------------------

server.listen(setport, () => {
  console.log(`Server listening at http://localhost:${setport}`);
});
