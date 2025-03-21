class ApiError extends Error {
    constructor(
        statuscode,
        message= "somethings went wrong",
        errors = [],
        stack= ""

    ){
        super(message)
        this.statusCode = this.statusCode
        this.data = null
        this.message = message
        this.success = false;
        this.success = errors

        if(stack) {
            this.stack = stack

        }else{
            Error.captureStackTrace(this, this.constructor)
        }



    }
}