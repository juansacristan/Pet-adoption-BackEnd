function verifyProperties(){
    const errors = {};
    if (error?.name === 'ValidationError'){
        for (const [key, value] of Object.entries(error.errors)){
            console.log(key, value.message);
            errors[key] = value.message;
        };
    }

    return errors;
}


module.exports = verifyProperties;