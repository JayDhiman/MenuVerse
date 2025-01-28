
class apiError extends Error {
    constructor(message, statusCode,error) {
        super(message);
        this.statusCode = statusCode;
        this.errors = errors
    }
} 


export {apiError};