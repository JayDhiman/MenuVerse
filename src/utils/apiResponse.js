class apiResponse{
    constructor(
        data,
        error,
        statusCode,
        message,    

    ){
        this.data = data;
        this.error = error;
        this.statusCode = statusCode;
        this.message = message;
    }
}

export  {apiResponse};