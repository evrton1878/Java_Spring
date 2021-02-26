package org.example.validation;

public class Validate {
    public static String getMinError(String field, int min){
        return String.format("Invalid %s. Min length is %d",field,min);
    }

    public static String getMaxError(String field, int max){
        return String.format("Invalid %s. Max length is %d",field,max);
    }

    public static String getErrorMessage(String field){
        return String.format("Invalid field,named %s",field);
    }
}
