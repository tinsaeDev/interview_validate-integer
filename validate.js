function validateNumber( string ){

        // check if it contains any character other than decimal and -
        string.split("").forEach(character => {
                if( ! ( [..."0123456789"].includes(character)  || character=='.' || character=="-" ) ){
                    throw "Invalid characters, "+ character;
                } 

        // check if ther is more than 1 decimal place or negative sign

        let negativeSignCount = 0;
        let decimalSignCount = 0;
        string.split("").forEach(character => {
            if( character=='-' ){
                negativeSignCount++;
            }
            if(  character=='.' ){
                decimalSignCount++;
            }
        });

        if( negativeSignCount > 1  ){
            throw "Negative sign is used more than once";
        }


        if(  decimalSignCount >1 ){
            throw "Decimal point is used more than once";
        }


        // check if - exist other than tghe first place

        if( negativeSignCount > 0 ){
            if( string.charAt(0)!="-" ){
                throw "Negative sign can only be put the first";
            }
        }



        // check if decimal is found at end

        if( string.charAt( string.length - 1 )=="." ){
            throw "A number cannot end with decimal";
        }

        });


        return  string + ", is a valid number";

}