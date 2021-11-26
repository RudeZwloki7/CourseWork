package com.erzy.backend.services;

import com.erzy.backend.entities.User;
import java.util.Collection;


public interface UserService {
    // Find user by email
    User findOne(String email);
    // Find users by role
    Collection<User> findByRole(String role);

    // Save user in DB
    User save(User user);

    // Update user info
    User update(User user);
}
