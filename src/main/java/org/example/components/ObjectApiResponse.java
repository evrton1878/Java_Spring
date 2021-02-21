package org.example.components;

import org.springframework.stereotype.Component;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Component
public class ObjectApiResponse {
    private List<String> errors = new ArrayList<>();
    private String status = "";

    public List<String> getErrors() {
        return errors;
    }

    public void setErrors(List<String> errors) {
        this.errors = errors;
    }

    public String getStatus() {
        return status;
    }

    public void addErrors(String ... errors){
        this.errors.addAll(Arrays.asList(errors));
    }

    public void setStatus(String status) {
        if(!status.equals("ok")){
            throw new IllegalArgumentException() ;
        }
        this.status = status;
    }

    @Override
    public String toString(){
        String errors = getErrors().stream().reduce("",(prev,cur)->prev+cur+",");
        String data = String.format("{errors:[%s],status:%s",errors,getStatus());
        return data;
    }
}
