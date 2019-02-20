const request = require('request')

count = []

request.get('https://slack.com/api/channels.history',
    {
      qs: {
        token: process.env.SLACK_TOKEN,
        channel: process.env.SLACK_TEST_CHANNEL
      }
    }
    , (error, response, body) => {
      const res = JSON.parse(body)
      res.messages.forEach(message => {
        if (message.reactions) {
          message.reactions.forEach(reaction => {
            if (!count[reaction.name]) {
              count[reaction.name] = 0
            }
            count[reaction.name] += reaction.count
          })
        }
      })
      console.log(count)
    }
)
