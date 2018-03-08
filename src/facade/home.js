import request from 'request'

export  default getImages=> {
    // let url = 'https://api.douban.com/v2/movie/search?q=红海行动';
    let url = 'http://127.0.0.1:3000/';
    return new Promise((resolve, reject)=> {
        request({url: url, json: true}, (error, response, body) => {
            if (error) return reject(error);

            resolve({success: true, data: {yws: 'ok'}});
        })
    });
}