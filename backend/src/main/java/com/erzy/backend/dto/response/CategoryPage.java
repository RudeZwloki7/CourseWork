package com.erzy.backend.dto.response;

import com.erzy.backend.entities.User;
import org.springframework.data.domain.Page;


public class CategoryPage {
    private Page<User> page;

    public CategoryPage(String category, Page<User> page) {
//        this.category = category;
        this.page = page;
    }

//    public String getCategory() {
//        return category;
//    }
//
//    public void setCategory(String category) {
//        this.category = category;
//    }

    public Page<User> getPage() {
        return page;
    }

    public void setPage(Page<User> page) {
        this.page = page;
    }
}
