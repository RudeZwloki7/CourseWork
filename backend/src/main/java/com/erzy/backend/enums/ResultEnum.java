package com.erzy.backend.enums;

import lombok.Getter;


@Getter
public enum ResultEnum  {

    PARAM_ERROR(1, "Parameter error"),

    VALID_ERROR(50, "Wrong information"),
    USER_NOT_FOUND(40,"User not found");

    private Integer code;

    private String message;

    ResultEnum(Integer code, String message) {
        this.code = code;
        this.message = message;
    }
}
