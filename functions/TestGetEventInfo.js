exports.handler = function (event, context, callback) {
      return callback(null, {
            headers: {
                "Content-Type": "text/plain; charset=utf-8"
            },
            statusCode: 200,
            body: JSON.stringify(event)
      });
}
