const schedule = require('node-schedule');
var axios = require('axios');

const rule = new schedule.RecurrenceRule();
rule.hour = 8;
rule.minute = 0;
rule.tz = 'Asia/Ho_Chi_Minh';

schedule.scheduleJob(rule, function(){
    console.log(' function cron hello ');

    const randomChao = ['hello mn', 'chào cả nhà', 'xin chào mn']
    const x  = Math.floor(Math.random() * 3);
    var dataHello = JSON.stringify({
        "channel_id": "khda933sbbbsi8ff3t386o5ie mongoe",
        "message": randomChao[x],
        "root_id": "",
        "props": {}
    });
    var config = {
        method: 'post',
        url: 'https://mm.nal.vn/api/v4/posts',
        headers: {
            'Authorization': 'Bearer ',
            'Content-Type': 'application/json',
        },
        data : dataHello
    };
    axios(config)
        .then(function (response) {
            console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
            console.log(error);
        });
});


const rules = new schedule.RecurrenceRule();
rules.hour = 17;
rules.minute = 30;
rules.tz = 'Asia/Ho_Chi_Minh';

schedule.scheduleJob(rules, function(){
    console.log(' function cron bye bye ');

    const randomChao = ['Bye bye cả nhà', 'bye mn', 'chào mn']
    const x  = Math.floor(Math.random() * 3);
    var dataGoodbye = JSON.stringify({
        "channel_id": "7aytssqs7bfyijeganx8o31rra",
        "message": randomChao[x],
        "root_id": "",
        "props": {}
    });
    var config = {
        method: 'post',
        url: 'https://mm.nal.vn/api/v4/posts',
        headers: {
            'Authorization': 'Bearer ',
            'Content-Type': 'application/json',
        },
        data : dataGoodbye
    };
    axios(config)
        .then(function (response) {
            console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
            console.log(error);
        });
});