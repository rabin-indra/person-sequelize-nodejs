module.exports = {
    createValidation : {
        name : {
            isAlpha: true,
            isLength : {
                options : {min : 3, max : 15},
                errorMessage : "Name should be between 3-15 characters."
            }
        },

        address : {
            isLength : {
                options : {min : 3, max : 15},
                errorMessage : "Address should be between 3-15 characters."
            }
        }
    },

    findOneValidation: {
        id: {
            // The location of the field, can be one or more of body, cookies, headers, params or query.
            // If omitted, all request locations will be checked
            in: ['params', 'query'],
            errorMessage: 'ID is wrong',
            isInt: true,
            // Sanitizers can go here as well
            toInt: true,
        }
    }
};



