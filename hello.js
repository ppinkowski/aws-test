exports.hello = async (event, context, callback) => {   
    return {
        statusCode: 200,
        body: JSON.stringify(event)
    };
}