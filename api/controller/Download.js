const { conn } = require("../connection");

async function Download(req, res, next) {
    const {boothno,from,to} = req.body;

    let sql = "SELECT * FROM Toll_BoothTransaction"
    if(boothno && from && to) {
        sql += ` WHERE b_no='${boothno}' AND date > '${from.split('T').join(' ')}' AND date < '${to.split('T').join(' ')}'`
    }
    else if(boothno && from) {
        sql += ` WHERE b_no='${boothno}' AND date > '${from.split('T').join(' ')}'`
    }
    else if(boothno && to) {
        sql += ` WHERE b_no='${boothno}' AND date < '${to.split('T').join(' ')}'`
    }
    else if(from && to) {
        sql += ` WHERE date > '${from.split('T').join(' ')}' AND date < '${to.split('T').join(' ')}'`
    }
    else if(boothno) {
        sql += ` WHERE b_no='${boothno}'`
    }
    else if(from) {
        sql += ` WHERE from='${from.split('T').join(' ')}'`
    }
    else if(to) {
        sql += ` WHERE to='${to.split('T').join(' ')}'`
    }

    const fetches = await new Promise((resolve, reject) => {
        conn.query(sql, (err, result) => {
            if(err) console.log(err);
            resolve(result);
        })
    })

    res.send({success: true, data: fetches});
}


module.exports = {Download};