var fs = require('fs');

function readFilePromise(path){
     // resolve: được gọi khi hàm này dc thực hiện xong
     // reject: được gọi khi hàm báo lỗi
    return new Promise(function(resolve,reject){
        fs.readFile(path,{encoding: 'utf8'}, function(err,data){
            if(err){
                reject(err);
            } else {
                resolve(data); // resolve đc gọi vs data
                // và data sẽ dc chuyền vào hàm then bên dưới
            }
        });
    });
}
readFilePromise('Song2.txt')
    .then(function(Song2){ 
        console.log(Song2);
    })
    .catch(function(error){
        console.log(error);
    });
readFilePromise('Song1.txt')
    .then(function(Song1){
        console.log(Song1);
    })
    .catch(function(error){
        console.log(error);
    });
