const request = require('request')

let names = []

request.get('https://slack.com/api/channels.list',
    {
      qs: {
        token: process.env.SLACK_TOKEN
      }
    }
    , (error, response, body) => {
      const res = JSON.parse(body)
      res.channels.forEach(channel => {
        names.push(channel.name)
      })
      console.log(names)
    }
)
