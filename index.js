const schedule = require('node-schedule');
const axios = require('axios');

const randomChao = ['hello mn', 'chào cả nhà', 'xin chào mn']
const randomBye = ['Bye bye cả nhà', 'bye mn', 'chào mn']

/**
 * Token của chatops lấy trong session (Tự túc lấy đi)
 * @type {string}
 */
const token = '5tg9r3xbstnb8n95nc7yox8rie'

/**
 *
 * @param hour (giờ)
 * @param minute (phút)
 * @param timezone
 * @param arrayText (bộ câu chào)
 * @param range (số lượng câu chào)
 * @param channel_id
 */
function auto_diem_danh(hour, minute, timezone, arrayText, range, channel_id) {
    const rule = new schedule.RecurrenceRule();
    rule.hour = hour;
    rule.minute = minute;
    rule.tz = timezone;

    schedule.scheduleJob(rule, function(){
        const x  = Math.floor(Math.random() * range);
        var dataHello = JSON.stringify({
            "channel_id": channel_id,
            "message": arrayText[x],
            "root_id": "",
            "props": {}
        });
        var config = {
            method: 'post',
            url: 'https://mm.nal.vn/api/v4/posts',
            headers: {
                'Authorization': 'Bearer '+ token,
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
}


/**
 * Điểm danh bắt đầu làm việc
 */
auto_diem_danh(8,0, 'Asia/Ho_Chi_Minh', randomChao, randomChao.length, 'khda933sbbbsi8ff3t386o5ie');

/**
 * Điểm danh ra về
 */
auto_diem_danh(17,30, 'Asia/Ho_Chi_Minh', randomBye, randomBye.length,'7aytssqs7bfyijeganx8o31rra');